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

  type RequiredMyUser = Required<myUser>;

  type JustEmailAndName = Pick<myUser, 'name' | 'email'>;

  type UserWithoutId = Omit<myUser, 'id'>;

  //                                                    <UserWithoutId>
  const mapById = (users: myUser[]): Record<string, Omit<myUser, 'id'>> => {
    return users.reduce((a, v) => {
      const { id, ...other } = v;
      return {
        ...a,
        [id]: other,
      };
    }, {});
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
      <p>
        {JSON.stringify(
          mapById([
            {
              id: 'foo',
              name: 'Jack',
            },
            {
              id: 'baz',
              name: 'Ann',
            },
          ])
        )}
      </p>
    </div>
  );
}
