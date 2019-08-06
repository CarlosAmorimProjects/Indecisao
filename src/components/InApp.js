import React from "react";
import AddOptions from "./AddOptions";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";



export default class InApp extends React.Component
{
    state = {
        options: [],
        selectedOption: undefined
    };
    
    handleDeleteOptions = () => {this.setState(() => ({options: [] } )); 

};


handleCloseOptionSelected = () => {

    this.setState(() => ({

        selectedOption: undefined

    }));
};

handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
    }));
};


handlePickAction = () => {

    const randomNum = Math.floor(Math.random()* this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState (() => ({
        selectedOption: option
    }))
    
};


handleAddOption = (option) => {

    if (!option){
        return "Introduza uma opção válida";
    }

    else if (this.state.options.indexOf(option) > -1 ) {
        return "Essa opção já foi introduzida";
    }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    };


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


    render()
    {
        const title = "Está indeciso ?";
        const subtitle = "Introduza as opções e carregue no botão, um avançado algoritmo de inteligência arficial faz a escolha por si !"

        return(
            <div>
            <Header subtitle= {subtitle} />

            <div className="container">
            <Action hasOptions={this.state.options.length > 0}
                handlePickAction = {this.handlePickAction}
            />
            <div className="widget">
            <Options options={this.state.options} 
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
            />
            <AddOptions 
                handleAddOption={this.handleAddOption}
            />          
            </div>
            
            </div>

            <OptionModal
                selectedOption = {this.state.selectedOption}
                handleCloseOptionSelected = {this.handleCloseOptionSelected}
            />
            </div>
        )
    }
}
