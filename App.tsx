import * as React from 'react';
import './style.css';

export default function App() {
  interface myUser {
    id: string;
    name: string;
    email?: string;
  }

  interface myUserOptional {
    id?: string;
    name?: string;
    email?: string;
  }

  const merge = (user: myUser, overrides: myUserOptional): myUser => {
    return { ...user, ...overrides };
  };

  return (
    <div>
      <h1>Utility Types</h1>
      <p>
        {JSON.stringify(
          merge(
            {
              name: 'Jack',
              id: 'foo',
              email: 'Jack.foo@gmail.com',
            },
            { email: 'Jack.foo@gmail.com' }
          )
        )}
      </p>
    </div>
  );
}
