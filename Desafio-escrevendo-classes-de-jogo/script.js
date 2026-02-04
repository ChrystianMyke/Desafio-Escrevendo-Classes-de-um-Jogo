class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.setTipo(tipo);
    }
    setTipo(tipo){
        const tiposValidados = ['guerreiro', 'mago', 'monge', 'ninja'];
        if (tiposValidados.includes(tipo)){
          this.tipo = tipo;
        } else {
          throw new Error(`Tipo invalido`);
        }
      }

    atacar(){
      const ataque = {
        guerreiro: 'Espada',
        mago: 'Magia',
        monge: 'Artes Marciais',
        ninja: 'Shuriken'
      }
      const ataqueTipo = ataque[this.tipo]
      return `O ${this.tipo} atacou usando ${ataqueTipo}`;
    }
}
let heroi1 = new heroi('Arus', 15, 'guerreiro');
let resultado = heroi1.atacar();
console.log(resultado);