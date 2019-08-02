

class Visibility extends React.Component
{
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);

        this.state = {
            detailsBool : false
        };
    }

    handleToggle ()
    {
        this.setState((prevState) =>
        {
            return {
                detailsBool: !prevState.detailsBool
            };

        });

    }


    render ()
    {
        return(
            <div>
            <h1>Invisiblity App</h1>
            <button onClick = {this.handleToggle}>
            {this.state.detailsBool ? "Hide details" : "Show details!"} 
                </button>

                {this.state.detailsBool && (
                        <div>
                        <p> Details !!! </p>
                        </div>
                        
                    )}
            
            </div>
        );
    }

}

ReactDOM.render (<Visibility />, document.getElementById("app"));


/*
let detailsBool = false;

const checkDetails = () =>
{
    detailsBool = !detailsBool;
    renderApp();
    
}

const appRoot = document.getElementById("app");

const renderApp = () =>
{
    const template = 
    <div>
    <h1> Invisiblity App</h1>
    
    <button onClick = {checkDetails}>
    {
        detailsBool ? "Hide details" : "Show details"
    }
    </button>

    { detailsBool ? <p>DETAILS!!!</p> : <p> </p>}
    
    
    
    </div>
    ReactDOM.render(template, appRoot);
}; 

renderApp();



*/