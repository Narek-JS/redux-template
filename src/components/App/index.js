import { Fragment, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAuth } from 'store/Auth/actions';
import { deleteUser, addUser } from 'store/Users/actions';
import { selectAuth } from 'store/Auth/selectors';
import { selectUsers } from 'store/Users/selectors';
import './styles.css';

const App = () => {
  const [ name, setName ] = useState('');
  const { users } = useSelector(selectUsers);
  const { auth } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const toggleLogin = () => {
    dispatch(toggleAuth(!auth));
  }

  const removeUser = (user) => {
    dispatch(deleteUser(user));
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(!name) {
        alert('Type name')
    } else if (users.includes(name)) {
        alert('User is exist');
    } else {
        dispatch(addUser(name));
        setName('');
    }
}

const onChange = (event) => {
    const { target: {value} } = event;
    setName(value);
}

  const viewHeader = useMemo(() => (
    <div className='header'>
      <h1>Redux Template</h1>
      <button className='loginButton' onClick={toggleLogin}>
        {auth ? 'Log Out' : 'Log In'}
      </button>
    </div>
  ), [auth]);

  const viewForm = useMemo(() => (
      <div className='form'>
          <p className='currentUser'> Name: {name}</p>
          <form onSubmit={onSubmit}>
              <input 
                  className='input'
                  type='text' 
                  placeholder='Name'
                  value={name}
                  onChange={onChange}
              />
          </form>
      </div>
    ), [name]);

  const viewUsers = useMemo(() => {
    if(!auth) {
      return null;
    }
    return (
      <div className='users'>
          {users.map((user) => {
              return (
                  <div key={user} className='user'>
                      <p>{user}</p>
                      <button className='button' onClick={() => removeUser(user)}>X</button>
                  </div>
              );
          })}
      </div>
    )
  }, [auth, users]);

  return (
      <Fragment>
        {viewHeader}
        <div className="container">
          {viewForm}
          {viewUsers}
        </div>
      </Fragment>
  );
}

export { App };
