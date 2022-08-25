import Collection from './Collection';
import data from '../data.json';

const Content = ({searchValue,  selectedCategory  }) => {

    return (
        <div className="content">
            {
                data.collections
                    .filter(({name}) => name.toLowerCase().includes(searchValue.toLowerCase()))
                    .filter(({category}) => selectedCategory.category === 0 || selectedCategory.category === category)
                    .map(({name, photos}, index) => <Collection name={name} images={photos} key={index}/>)
            }
        </div>
    );
};

export default Content;