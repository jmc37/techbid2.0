import { NavBar, HeroBanner, SearchBar, SaleItems, SuggestedItems, Footer } from '../components/home';


function App() {
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
    </div>
  );
}

export default App;
