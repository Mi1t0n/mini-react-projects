function Quiz({page, changePage, questions, changeCorrectUns}) {
    const percentage = Math.round(page / questions.length * 100);
    const pageFlip = (index) => {
        questions[page].correct === index && changeCorrectUns((curNum) => curNum + 1);
        changePage(page + 1);
    };

    return (
        <>
            <div className="progress">
                <div style={{width: `${percentage}%`}} className="progress__inner"/>
            </div>
            <h1>{questions[page].title}</h1>
            <ul>{questions[page].variants.map((v, index) => <li key={index} onClick={() => pageFlip(index)}>{v}</li>)}</ul>
        </>
    );
}

export default Quiz;