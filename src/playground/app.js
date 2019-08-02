class InApp extends React.Component
{
    constructor(props)
    {
        super (props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickAction = this.handlePickAction.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options: []
        };
    }

    // component lifecycles
    componentDidMount()
    {
        try{
        const json = localStorage.getItem("options");
        const options = JSON.parse(json);

        if (options) {

        this.setState (() => ({ options }));
            }
        } catch (e) {
        }
    }

    componentDidUpdate(prevProps, prevState)
    {
        if (prevState.options.length !== this.state.options.length)
        {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json); 
        }
        
    }

    componentWillMount()
    {
        console.log("Component will unmount");
    }

    handleDeleteOptions () {this.setState(() => ({options: [] } )); 
        }


    handleDeleteOption (optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }


    handlePickAction () {

        const randomNum = Math.floor(Math.random()* this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
        
    }


    handleAddOption (option) {

        if (!option){
            return "Enter valid option";
        }

        else if (this.state.options.indexOf(option) > -1 ) {
            return "This option already exists";
        }
            this.setState((prevState) => ({options: prevState.options.concat(option)}));
        }


    render()
    {
        const title = "Indecision";
        const subtitle = "Last but not least"

        return(
            <div>
            <Header subtitle= {subtitle} />
            <Action hasOptions={this.state.options.length > 0}
                handlePickAction = {this.handlePickAction}
            />
            <Options options={this.state.options} 
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
            />
            <AddOptions 
                handleAddOption={this.handleAddOption}
            />
            </div>
        )
    }
}

const Header = (props) => {

    return(
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
        );
};


Header.defaultProps = {
    title: "Indecision"
};


/*class Header extends React.Component
{
    render()
    {
        return(
        <div>
        <h1>{this.props.title}</h1>
        <h2> {this.props.subtitle} </h2>
        </div>
        );
    }
}

*/

const Action = (props) => {
    return(
        <div>
        <button
         onClick={props.handlePickAction}
         disabled ={!props.hasOptions}
         > O que faz este botão ?</button>
        </div>

    );

};


/*class Action extends React.Component

{
    render()
    {
        return(
        <div>
        <button
         onClick={this.props.handlePickAction}
         disabled ={!this.props.hasOptions}
         > O que faz este botão ?</button>
        </div>
        );
    }
}

*/

const Options = (props) => {

    return(

        <div>
            <button onClick = {props.handleDeleteOptions}
            disabled ={!props.options.length > 0}
            > Remove all options </button>
            {props.options.length === 0 && <p>Please add an option!</p>}
            {
               props.options.map((option) => (
                <Option
                 key = {option}
                 optionText = {option}
                 handleDeleteOption = {props.handleDeleteOption}
                 />
                ))
            }
        
        </div>
    );
};

/*
class Options extends React.Component
{
    
    render()
    {
        return(

            <div>
               {this.props.options.map((option) => <p key = {option}> {option}</p>)}
               <p>{this.props.options.length}</p>
            <button onClick = {this.props.handleDeleteOptions}> Remove all options </button>
            </div>
        );
    }
}
*/

const Option = (props) => {
    return(
        <div>
        {props.optionText}
        <button 
            onClick = {(e) =>  {
            props.handleDeleteOption(props.optionText);
            }}
            >
            Remove
            </button>
        </div>
    );

};



class AddOptions extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
     
    handleAddOption (e)
    {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error =  this.props.handleAddOption(option);

        this.setState(() => ({error}));

        if (!error)
        {
            e.target.elements.option.value = "";
        }
    }

    render()
    {
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"/>
            <button> Add Option </button>
            </form>
            </div>
        );
    }
}



/*
class Option extends React.Component
{
    render()
    {
        return(
            <div>
            <h1> Option !!</h1>
            </div>
        )
    }
}


*/

ReactDOM.render (<InApp />, document.getElementById("app"));