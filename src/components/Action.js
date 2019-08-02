import React from "react";

const Action = (props) => 
    (
        <div>
        <button className="big-button"
         onClick={props.handlePickAction}
         disabled ={!props.hasOptions}
         > Carregue neste botão e o computador escolhe por si</button>
        </div>

    );

export default Action;