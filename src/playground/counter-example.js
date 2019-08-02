class Counter extends React.Component
{

    constructor (props)
    {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleAddTen = this.handleAddTen.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleMinusTen = this.handleMinusTen.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count : 0
        };
    }


    componentDidMount ()
    {
        const counterDid = localStorage.getItem("counter");
        const counterInt = parseInt(counterDid);
        
        console.log(counterInt);

        this.setState (() => ({count: counterInt}));
        console.log("counter entrou");

    }

    componentDidUpdate ()
    {
        const counter = this.state.count;
        
        localStorage.setItem("counter", counter);
        console.log(counter);

    }
    handleAddOne ()
    {
        this.setState((prevState) =>
        {
            return{
                    count: prevState.count +1
                };
        });
    }

    handleAddTen ()
    {
        this.setState((prevState) =>
        {
            return{
                count: prevState.count +10
            };
        });
    }

    handleMinusOne ()
    {
        this.setState((prevState) =>
        {
            return{
                count: prevState.count -1
            };
        });
    }

    handleMinusTen ()
    {
        this.setState((prevState) =>
        {
            return{
                count: prevState.count -10
            };
        });
    }

    handleReset ()
    {
        this.setState(() =>
        {
        return{
            count: 0
        };

        });
    }


    render ()
        {
            return (
                <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick = {this.handleAddOne}>+1</button>
                <button onClick = {this.handleAddTen}>+10</button>
                <button onClick = {this.handleMinusOne}>-1</button>
                <button onClick = {this.handleMinusTen}>-10</button>
                <button onClick = {this.handleReset}>reset</button>
                </div>
            );
        }
}


ReactDOM.render (<Counter />, document.getElementById("app"));




























/*
const user =
{
    name: "Carlos Amorim",
    age: 41,
    location: "Barcelos"
};

function getLocation(location)
{
    if (user.location)
    return <p> Location: {location} </p> ;
}

const template2 =
<div>

<h1>{user.name ? user.name : "Anonymous"}</h1>
{(user.age && user.age >= 18) && <p> Age: {user.age} </p>}
{getLocation(user.location)}

</div>


const addOne = () =>
{
    count ++;
    renderCounterApp();
};

const minusOne = () =>
{
    count --;
    renderCounterApp();
};


const reset = () =>
{
    count = 0;
    renderCounterApp();
}

let count = 0;
const appRoot = document.getElementById("app");

const renderCounterApp = () =>
{
    const template2 =

    <div>
    <h1> Count: {count} </h1>
    <button onClick = {addOne}> +1 </button>
    <button onClick = {minusOne}> -1 </button>
    <button onClick = {reset}> reset </button>
    </div>

    ReactDOM.render (template2, appRoot);
}



renderCounterApp();*/

