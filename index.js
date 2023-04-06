let vagasEmpregos = [];
let vagaMC = {
    nome: 'Vaga mcdonalds',
    descricao: 'Trabalho meio período',
    datalimite: '24/11',
    candidatos: ['Michael', 'Willian', 'Pedro'],
}

let vagaBK = {
    nome: 'Vaga Burgerking',
    descricao: 'Trabalho período inteiro',
    datalimite: '26/11',
    candidatos: ['Caio', 'Wesley', 'Jurandir'],
}
vagasEmpregos.push(vagaMC,vagaBK);
let sair = 1;
function descricaoVagas (a,b){
    window.alert(
        'Nome da vaga: ' + a[b].nome + '\n' +
        'Descrição: ' + a[b].descricao + '\n' +
        'Data limite: ' + a[b].datalimite + '\n' +
        'Quantidade de candidatos: ' + a[b].candidatos.length + '\n' +
        'Nome candidatos: ' + a[b].candidatos + '\n'
        )
}
do{
    let mainMenu = prompt(
        'Escolha uma das opções a seguir: \n' +
        '1 - Listar vagas disponíveis \n' + 
        '2 - Criar uma nova vaga \n' +
        '3 - Vizualizar uma vaga \n' + 
        '4 - Inscrever um candidato em uma vaga \n' + 
        '5 - Excluir uma vaga \n'+
        '6 - Sair'   
    )
    switch(mainMenu){
        case '1':
            let totalCandidatos = 0;
            for( let i = 0; i < vagasEmpregos.length; i++){
               totalCandidatos += vagasEmpregos[i].candidatos.length
            }
            let listaVagas = '';
            for(let i = 0; i < vagasEmpregos.length; i++){
                listaVagas += (i+1) + ' - ' + vagasEmpregos[i].nome + '\n           candidatos: ' + vagasEmpregos[i].candidatos.length + '\n'
            }
            alert(
                'Total de candidatos: ' + totalCandidatos + '\n\n\n' +
                listaVagas);
            break
        case '2':
            let novaVaga = {}
            novaVaga.nome = prompt('Qual o nome da vaga?');
            novaVaga.descricao = prompt('Qual a descrição da vaga?');
            novaVaga.datalimite = prompt('Qual a data limite da vaga?');
            novaVaga.candidatos = [];

            let confirmSave = prompt('Deseja mesmo salvar essas informações? \n'+
            'Nome: ' + novaVaga.nome + '\n' +
            'Descrição: ' + novaVaga.descricao + '\n' +
            'Data limite: ' + novaVaga.datalimite)
            if(confirmSave == 'sim'){

                vagasEmpregos.push(novaVaga); 
            }
            break
        case '3':
            vizualizarVaga = prompt('Qual o índice da vaga deseja vizualizar?');
            window.alert(
                'Nome da vaga: ' + vagasEmpregos[vizualizarVaga].nome + '\n' +
                'Descrição: ' + vagasEmpregos[vizualizarVaga].descricao + '\n' +
                'Data limite: ' + vagasEmpregos[vizualizarVaga].datalimite + '\n' +
                'Quantidade de candidatos: ' + vagasEmpregos[vizualizarVaga].candidatos.length + '\n' +
                'Nome candidatos: ' + vagasEmpregos[vizualizarVaga].candidatos + '\n'
                )
            break
        case '4':
            let nomeCandidato = window.prompt('Qual o nome do candidato a ser cadastrado?');
            let indiceVaga = window.prompt('Qual o índice da vaga que deseja candidatar?');
            let confirmCandidato = window.confirm(
                descricaoVagas(vagasEmpregos,indiceVaga) + '\n' +
                'Deseja cadastrar o candidato ' + nomeCandidato + ' nessa vaga?')
            if(confirmCandidato == true){
                vagasEmpregos[indiceVaga].candidatos.push(nomeCandidato);
            }
            break
        case '5':
            let indiceRemoverVaga = prompt('Qual o índice da vaga que deseja remover?');
            let confirmRemoverVaga = prompt('Tem certeza que deseja remover a vaga: ' + '\n' +
            descricaoVagas(vagasEmpregos,indiceRemoverVaga));
            
            if(confirmRemoverVaga == 'sim'){
                delete vagasEmpregos[indiceRemoverVaga];
            }
    }


}while(sair == 1);
