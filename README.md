<div align="center">
  <img src="https://hermes.digitalinnovation.one/assets/diome/logo-full.svg" alt="DIO Logo" width="300">
</div>

<h1 align="center">🗡️ Escrevendo as Classes de um Jogo</h1>

<p align="center">
  <img src="https://img.shields.io/badge/DIO-Desafio-yellow?style=for-the-badge&logo=javascript"/>
  <img src="https://img.shields.io/badge/JavaScript-POO-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge"/>
</p>

---

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Desafio 3** de lógica de programação da **DIO.ME** (Digital Innovation One). O objetivo é criar uma classe que representa um herói de uma aventura, utilizando os conceitos de **Programação Orientada a Objetos (POO)**.

---

## 🎯 Desafio

Criar uma classe genérica que represente um herói de aventura com as seguintes propriedades:
- ✅ Nome
- ✅ Idade  
- ✅ Tipo (guerreiro, mago, monge, ninja)

E implementar um método de ataque que exiba:
- ✅ Mensagem personalizada baseada no tipo do herói
- ✅ Arma específica para cada tipo

---

## ⚔️ Tipos de Heróis e Ataques

| Tipo | Ataque |
|:---:|:---:|
| 🛡️ Guerreiro | Espada |
| 🔮 Mago | Magia |
| 🥋 Monge | Artes Marciais |
| 🥷 Ninja | Shuriken |

---

## 💻 Código
```javascript
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.setTipo(tipo);
  }

  setTipo(tipo) {
    const tiposValidados = ['guerreiro', 'mago', 'monge', 'ninja'];
    if (tiposValidados.includes(tipo)) {
      this.tipo = tipo;
    } else {
      throw new Error('Tipo inválido');
    }
  }

  atacar() {
    const ataque = {
      guerreiro: 'Espada',
      mago: 'Magia',
      monge: 'Artes Marciais',
      ninja: 'Shuriken'
    };
    
    const ataqueTipo = ataque[this.tipo];
    return `O ${this.tipo} atacou usando ${ataqueTipo}`;
  }
}

// Exemplo de uso
let heroi1 = new Heroi('Arus', 15, 'guerreiro');
let resultado = heroi1.atacar();
console.log(resultado);
```

---

## 🚀 Como Executar

### Opção 1: Node.js
```bash
# Clone o repositório
git clone https://github.com/ChrystianMyke/escrevendo-classes-jogo.git

# Entre no diretório
cd escrevendo-classes-jogo

# Execute o código
node index.js
```

### Opção 2: Navegador
1. Abra o Console do Desenvolvedor (F12)
2. Cole o código no console
3. Pressione Enter
4. Crie instâncias e teste os métodos

---

## 📤 Saída Esperada
```javascript
// Exemplo 1
let heroi1 = new Heroi('Arus', 15, 'guerreiro');
console.log(heroi1.atacar());
// Saída: O guerreiro atacou usando Espada

// Exemplo 2
let heroi2 = new Heroi('Merlin', 150, 'mago');
console.log(heroi2.atacar());
// Saída: O mago atacou usando Magia

// Exemplo 3
let heroi3 = new Heroi('Ryu', 30, 'monge');
console.log(heroi3.atacar());
// Saída: O monge atacou usando Artes Marciais

// Exemplo 4
let heroi4 = new Heroi('Kakashi', 27, 'ninja');
console.log(heroi4.atacar());
// Saída: O ninja atacou usando Shuriken
```

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript ES6+**
  - Classes
  - Constructor
  - Métodos
  - Validação de dados
  - Objects
  - Throw Error

---

## 🎓 Conceitos de POO Aplicados

Durante o desenvolvimento deste desafio, pratiquei:

- ✅ **Encapsulamento**: Propriedades privadas e métodos
- ✅ **Abstração**: Classe genérica para diferentes tipos de heróis
- ✅ **Validação**: Método para validar tipos de heróis
- ✅ **Métodos**: Comportamentos específicos da classe
- ✅ **Instanciação**: Criação de objetos a partir da classe
- ✅ **Tratamento de erros**: Validação com throw Error

---

## 🧪 Exemplos de Uso
```javascript
// Criando um grupo de heróis
const grupoAventura = [
  new Heroi('Arthur', 25, 'guerreiro'),
  new Heroi('Gandalf', 200, 'mago'),
  new Heroi('Bruce', 35, 'monge'),
  new Heroi('Naruto', 17, 'ninja')
];

// Todos atacam
grupoAventura.forEach(heroi => {
  console.log(heroi.atacar());
});

// Saída:
// O guerreiro atacou usando Espada
// O mago atacou usando Magia
// O monge atacou usando Artes Marciais
// O ninja atacou usando Shuriken
```

### Testando Validação:
```javascript
try {
  let heroiInvalido = new Heroi('Test', 20, 'arqueiro');
} catch (error) {
  console.log(error.message); // Tipo inválido
}
```

---

## 🔄 Possíveis Melhorias

- [ ] Adicionar sistema de pontos de vida (HP)
- [ ] Implementar sistema de níveis e experiência
- [ ] Criar método para defender
- [ ] Adicionar inventário de itens
- [ ] Implementar sistema de dano baseado em atributos
- [ ] Criar batalhas entre heróis
- [ ] Adicionar mais tipos de heróis
- [ ] Implementar salvamento de progresso
- [ ] Criar interface gráfica
- [ ] Adicionar sistema de habilidades especiais

---

## 📝 Estrutura do Projeto
```
escrevendo-classes-jogo/
│
├── index.js          # Código principal com a classe Heroi
├── exemplos.js       # Exemplos de uso (opcional)
├── README.md         # Documentação
└── LICENSE           # Licença MIT
```

---

## 🎮 Diagrama da Classe
```
┌─────────────────────────────┐
│          Heroi              │
├─────────────────────────────┤
│ - nome: string              │
│ - idade: number             │
│ - tipo: string              │
├─────────────────────────────┤
│ + constructor()             │
│ + setTipo(tipo)             │
│ + atacar(): string          │
└─────────────────────────────┘
```

---

## 🧩 Diferencial do Código

Este código implementa boas práticas como:

✨ **Validação de entrada** - Impede criação de heróis com tipos inválidos  
✨ **Método setter** - Separação de responsabilidades  
✨ **Uso de objetos** - Para mapear ataques de forma limpa  
✨ **Tratamento de erros** - Com throw Error para tipos inválidos  
✨ **Código escalável** - Fácil adicionar novos tipos de heróis  

---

## 👤 Autor

**Chrystian Myke**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chrystian-myke-388b69282/)
[![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ChrystianMyke)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/_chrystian_13)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:miyamoto13k@gmail.com)

---

## 📝 Licença

Este projeto foi desenvolvido como parte do bootcamp da DIO.ME e está sob a licença MIT.

---

## 🔗 Projetos Relacionados

- [Classificador de Nível de Herói](https://github.com/ChrystianMyke/classificador-nivel-heroi) - Desafio 1 DIO
- [Calculadora de Partidas Rankeadas](https://github.com/ChrystianMyke/calculadora-rankeadas) - Desafio 2 DIO

---

## 📚 Recursos de Aprendizado

- [MDN - Classes JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info - Classes](https://javascript.info/class)
- [DIO - Documentação](https://www.dio.me/)

---

<div align="center">
  <p>Feito com 💚 por Chrystian Myke</p>
  <p>Desafio DIO.ME - Escrevendo as Classes de um Jogo - 2025</p>
  
  <img src="https://komarev.com/ghpvc/?username=ChrystianMyke&color=yellow&style=flat-square&label=Visualizações"/>
</div>
