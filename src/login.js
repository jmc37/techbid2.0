import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { useNavigate } from 'react-router-dom';


import awsExports from './aws-exports';
Amplify.configure(awsconfig);


Amplify.configure(awsExports);

function Application({ signOut, user }) {
  const navigate = useNavigate();

  if (user) {
    // Redirect to index page if user is signed in
    navigate('./app')
  }

  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>

  
  );
}

export default withAuthenticator(Application);