
const initialState = {
    botaoClicado: false,
};

export default function (state = initialState,action) {
    switch(action.type){
        case 'BOTAO_CLICADO':
            console.log('Estou ouvindo BOTAO_CLICADO');
            const newState = {...state};
            newState.botaoClicado = !newState.botaoClicado;
                return state;

        default:
            return state;
    }
};