import data from '../data.json';

const Header = ({searchValue, setSearchValue, selectedСategory, setSelectedСategory}) => {

    return (
        <>
            <h1>Моя коллекция фотографий</h1>
            <div className="top">
                <ul className="tags">
                    {
                        data.categories.map(({name, category}, index) =>
                            <li
                                key={index}
                                className={selectedСategory.name === name ? 'active' : ''}
                                onClick={() => setSelectedСategory({name, category})}
                            >
                                {name}
                            </li>
                        )
                    }
                </ul>
                <input
                    className="search-input"
                    placeholder="Поиск по названию"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
        </>
    );
};


export default Header;