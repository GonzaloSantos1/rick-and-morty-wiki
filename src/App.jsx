import axios from 'axios';
import {useEffect, useState} from 'react';
import {Gallery} from './components/gallery/Gallery';
import Pagination from './components/pagination/Pagination';
import Searchbar from './components/searchbar/Searchbar';

import './_app.scss';

function App() {
  const [characters, setcharacters] = useState([]);
  const [info, setInfo] = useState({});

  const url = 'https://rickandmortyapi.com/api/character';
  const getCharacters = (url) => {
    axios.get(url).then((response) => {
      setcharacters(response.data.results);
      setInfo(response.data.info);
    });
  };

  const onPrevious = () => {
    getCharacters(info.prev);
  };

  const onNext = () => {
    getCharacters(info.next);
  };

  useEffect(() => {
    getCharacters(url);
  }, []);

  return (
    <div className='App'>
      <h2 className='title'>Rick and Morty Wiki</h2>
      <Searchbar />
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      <Gallery characters={characters} />
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
    </div>
  );
}

export default App;
