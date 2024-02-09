const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      resposta: [
        "Uma linguagem de programação de lado servidor",
        "Uma linguagem de marcação",
        "Uma linguagem de programação de lado cliente",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para comentar uma linha de código em JavaScript?",
      resposta: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "' Este é um comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      resposta: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número em JavaScript?",
      resposta: [
        "parseInt()",
        "stringToNumber()",
        "toNumber()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      resposta: [
        "Seleciona elementos HTML com base em seus IDs",
        "Seleciona elementos HTML com base em suas classes",
        "Seleciona elementos HTML com base em seletores CSS",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado de 10 + '5' em JavaScript?",
      resposta: [
        "15",
        "105",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      resposta: [
        "variavel = valor",
        "let variavel = valor",
        "var variavel = valor",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      resposta: [
        "push()",
        "addToEnd()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
      resposta: [
        "Remove um ouvinte de evento",
        "Adiciona um ouvinte de evento a um elemento",
        "Modifica um ouvinte de evento",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de várias linhas em JavaScript?",
      resposta: [
        "// Este é um comentário de várias linhas",
        "/* Este é um comentário de várias linhas */",
        "' Este é um comentário de várias linhas",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetiçao
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    //colocar perguntas na tela
  
    for (let resposta of item.resposta) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.resposta.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
  
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
  
  
    }
    // colocar respostas na tela
    quizItem.querySelector('dl dt').remove()
    //revover o titudlo Resposta A da tela
  
    // Coloca a pergunta na tabela
    quiz.appendChild(quizItem)
  }
  