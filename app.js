    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    // let arrayOfTodos = [
    //     {
    //     "userId": 14,
    //     "id": 1,
    //     "title": "delectus aut autem",
    //     "completed": false
    // },
    // {
    //     "userId": 20,
    //     "id": 2,
    //     "title": "delectus aut autem",
    //     "completed": false
    // }]

    let arrayResults
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then( data => {
        arrayResults = data
        console.log('results:', arrayResults)
        })
    }
    
    const logTodos = () => {
        console.log(arrayResults)
    }
    
    const populateTodos = () => {
        createArrayList()
    };

    function createArrayList() {
        let element = document.querySelector('.todo-list')

        arrayResults.forEach(arrayResults => {
            let liTag = document.createElement('li')
            liTag.innerText = arrayResults.title
            element.appendChild(liTag);
        })
    }

    function filterByID () {
        console.log("Testing 123 Filter Button")
        let selectID = document.querySelector('#idList').value
        let filteredID = arrayResults.filter(arrayResult => {
            console.log('ID Filter:', arrayResult)
            console.log(arrayResult.userId == selectID)
            return arrayResult.userId == selectID
        })
        setFilteredList(filteredID)
    }   

    function setFilteredList (filteredResults) {
        console.log(filteredResults)
        let element = document.querySelector('.todo-list')
        element.innerHTML = ''
        filteredResults.forEach(arrayResult => {
            let liTag = document.createElement('li')
            liTag.innerText = arrayResult.title
            element.appendChild(liTag);
        })
    }