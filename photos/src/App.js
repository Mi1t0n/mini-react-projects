import './index.scss';
import Header from './Components/Header';
import Content from './Components/Content';
import {useState} from 'react';

function App() {

    const [searchValue, setSearchValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState({name: 'Все', category: 0});

    return (
        <div className="App">
            <Header
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                selectedСategory={selectedCategory}
                setSelectedСategory={setSelectedCategory}
            />
            <Content
                searchValue={searchValue}
                selectedCategory={selectedCategory}
            />
        </div>
    );
}

export default App;
