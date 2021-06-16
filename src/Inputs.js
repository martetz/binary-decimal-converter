import TextField from '@material-ui/core/TextField';
import React from 'react';

export default class Inputs extends React.Component{        
    constructor(props){
        super(props);
        this.state = {
            errorValue: false,
            binaryValue: '',
            decimalValue: '',
        }
        this.decimalInpChange = this.decimalInpChange.bind(this);
        this.binaryInpChange = this.binaryInpChange.bind(this);
    }

    decimalInpChange(e){
        //1) Проверка на целочисловое значение
        //2) Основная ф-ция, конвертирующая число
        //3) Подсталение в значение противоположного инпута результата основной ф-ции

        // if(e.target.value === 'a'){

        //     this.setState({
        //         errorValue: true,
        //     })
        //     e.target.value = 'введите целое число';

        //     setTimeout(()=>{
        //         e.target.value = null;
        //         this.setState({
        //             errorValue: false,
        //         })
        //         return
        //     }, 600)

        // }


        this.setState({
            decimalValue: e.target.value,
            binaryValue: e.target.value,
        })

    }

    
    binaryInpChange(e){
        this.setState({
            decimalValue: e.target.value,
            binaryValue: e.target.value,
        })
    }

    render(){
        return (
            <>
             <TextField
                className='decimal'
                id="outlined-secondary"
                label="Десятичная"
                variant="outlined"
                color="secondary"
                value={this.state.decimalValue}
                onChange={this.decimalInpChange}
                // disabled={this.state.errorValue}
                />

            <TextField
                className='binary'
                id="outlined-secondary-2"
                label="Двоичная"
                variant="outlined"
                color="primary"
                onChange={this.binaryInpChange}
                value = {this.state.binaryValue} 
                /> 
            </>
        )
    }
}

