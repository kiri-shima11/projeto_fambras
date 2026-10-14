let nome = prompt('Digite seu nome');
let logincadastrado = prompt('Digite um e-mail para cadastro');
let senhacadastrada = prompt('Digite uma senha para cadastro.');

let login = prompt('Digite seu e-mail cadastrado');
let senha = prompt('Digite sua senha cadastrada');

if (login === logincadastrado && senha === senhacadastrada){
    alert(`Bem vindo ao sistema ${nome}`);
}else{
    alert('Login e senha não estão cadastrados.');
}

let suino = prompt('Há suínos na planta?');

function aprovarPlanta(){
    if(suino == 'sim'){
        alert('Reprovado por ter suíno na planta');
    }else{
        alert('Pode seguir com o processo.');
    }
}

aprovarPlanta(); 
