import React, { useState, useEffect, useRef } from 'react';
import styles from './UserPicker.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

// Define the user type
type User = {
  id: string;
  name: string;
  email: string;
};

type UserPickerProps = {
  users: User[];
};

const UserPicker: React.FC<UserPickerProps> = ({ users }) => {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFilteredUsers(
      users.filter(
        (user) =>
          !selectedUsers.find((selected) => selected.id === user.id) &&
          (user.name.toLowerCase().includes(inputValue.toLowerCase()) ||
           user.email.toLowerCase().includes(inputValue.toLowerCase()))
      )
    );
  }, [inputValue, selectedUsers, users]);

  const handleSelect = (user: User) => {
    setSelectedUsers([...selectedUsers, user]);
    setInputValue('');
  };

  const handleRemove = (user: User) => {
    setSelectedUsers(selectedUsers.filter((selected) => selected.id !== user.id));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && inputValue === '' && selectedUsers.length > 0) {
      setSelectedUsers(selectedUsers.slice(0, -1));
    }
  };

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={styles.userPicker} onClick={handleClick}>
      <div className={styles.chips}>
        {selectedUsers.map((user) => (
          <div key={user.id} className={styles.chip}>
            <FontAwesomeIcon icon={faUserCircle} className={styles.avatar} />
            <span className={styles.name}>{user.name}</span>
            <button onClick={() => handleRemove(user)} className={styles.removeButton}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add new users..."
          className={styles.input}
        />
      </div>
      {filteredUsers.length > 0 && (
        <div className={styles.userList}>
          {filteredUsers.map((user) => (
            <div key={user.id} className={styles.user} onClick={() => handleSelect(user)}>
              <FontAwesomeIcon icon={faUserCircle} className={styles.avatar} />
              <div className={styles.userInfo}>
                <span className={styles.name}>{user.name}</span>
                <span className={styles.email}>{user.email}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserPicker;
