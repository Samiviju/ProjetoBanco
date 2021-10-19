class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;
    
        sacar(valor) {
            if(contaCorrenteRicardo.saldo >= valor){
                contaCorrenteRicardo.saldo -= valor;
    
        }
        
    }

}


const cliente1 = new Cliente();
 cliente1.nome = "Ricardo";
 cliente1.cpf = 4546459847941;



const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 4648949779464;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;


console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
let valorSacado = 200;
if(contaCorrenteRicardo.saldo >= valorSacado){
    contaCorrenteRicardo.saldo -= valorSacado;
}



console.log(contaCorrenteRicardo.saldo);


console.log(cliente1);
console.log(cliente2);


