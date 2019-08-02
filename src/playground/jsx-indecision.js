

// JSX


const app =
{
    title: "App",
    subtitle: "App em React",
    options: []
};


function countOptions (options)
{
    if(options.length > 0)
        return <p> Options: {app.options} </p>;
        else
        return "No options";
}

const onFormSubmit = (e) =>
{
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option)
    {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderApp();
    }

};

const reset = () =>
{
    app.options= [];
    renderApp();
};

const onMakeDecision = () =>
{
    const randomNum = Math.floor(Math.random()* app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById("app");

const numbers = [4, 202,33];

const renderApp = () =>
{
const template = 
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p> {app.subtitle}</p>}
    {countOptions(app.options)}
    <p>{app.options.length}</p>

    <button disabled={app.options.length == 0 }onClick={onMakeDecision}>What Should i do?</button>
    
    <form onSubmit={onFormSubmit}>
    <input type="text" name="option"/>
    <button> Add Option </button>
    <button onClick ={reset}> Reset </button>
    {
        numbers.map((number) =>
        {
            return <p key={number}> Number: {number*2} </p>;
        })
    }
    
    <ol>
    {
            
            app.options.map((option) => <li key = {option}> Option: {option} </li>)
    }
    </ol>
    </form>
    </div> 
    ReactDOM.render(template, appRoot);
}

renderApp();




