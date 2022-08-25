import Result from './Result';
import Quiz from './Quiz';
import {useState} from 'react';
import {questions} from './allQuestions';

function App() {
    const [page, changePage] = useState(0);
    const [correctUns, changeCorrectUns] = useState(0);

    const propsInQuiz = {page, changePage, questions, changeCorrectUns};
    const propsInResult = {correctUns, questions};

    return (
        <div className="App">
            {page === questions.length ? <Result{...propsInResult}/> : <Quiz {...propsInQuiz}/>}
        </div>
    );
}

export default App;
