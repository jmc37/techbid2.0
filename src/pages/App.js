import { Amplify, Auth } from 'aws-amplify';
import { NavBar, HeroBanner, SearchBar, SaleItems, SuggestedItems, Footer } from '../components/home';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

Amplify.configure(awsExports);

function App({ signOut, user }) {
  console.log(user)
  return (
   
    <div>
      <NavBar />
      
      <HeroBanner />
      <SearchBar />
      <div className="items-container">
        <SaleItems />
        <SuggestedItems />
      </div>
      <Footer />
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);
