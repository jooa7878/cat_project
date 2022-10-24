import type { NextPage } from 'next';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import styles from '../styles/Home.module.css';
import axios from 'axios';

const Home: NextPage = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserEmail(e.currentTarget.value);
  };

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserName(e.currentTarget.value);
  };

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserPassword(e.currentTarget.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await axios
      .post('http://localhost:8000/cats', {
        email: userEmail,
        name: userName,
        password: userPassword,
      })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          // 회원가입 성공
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='userEmail'
          onChange={handleEmailChange}
        />
        <input type='text' placeholder='userName' onChange={handleNameChange} />
        <input
          type='password'
          placeholder='userPassword'
          onChange={handlePasswordChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Home;
