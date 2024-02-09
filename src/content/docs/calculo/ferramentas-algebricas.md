---
title: Ferramentas Algébricas
description: Ferramentas Algébricas
tableOfContents: false
---

<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.css" integrity="sha384-WsHMgfkABRyG494OmuiNmkAOk8nhO1qE+Y6wns6v+EoNoTNxrWxYpl5ZYWFOLPCM" crossorigin="anonymous">
</head>

Esta aula tem como principal objetivo apresentar ferramentas algébricas fundamentais e bastante úteis nas aulas de Cálculo. 

Antes de iniciar, precisamos definir duas coisas: **expressões e polinômios**.

O que é uma expressão matemática?
Uma expressão matemática é uma combinação de números, variáveis e operadores. Ela pode representar uma operação, uma relação ou uma fórmula matemática, como exemplo: $2x + 3 = 7$ e $A = \pi r^2$

O que é um polinômio?
Um polinômio é uma forma específica de expressão matemática algébrica que envolve variáveis, constantes e coeficientes, combinados por meio de operações de adição, subtração e multiplicação, mas não de divisão por variáveis.

A equação geral de um polinômio é:
$P(x) = a_nx^n + a_{n-1}x^{n-1} + \ldots + a_1x + a_0$

Onde:  
$P(x)$ é a função polinomial.  
$x$ é a variável.  
$a_n, a_{n-1}, \ldots, a_1, a_0$ são coeficientes numéricos.  
$n$ é o grau do polinômio, indicando o maior expoente ao qual $x$ é elevado.  
$a_kx^k$ é chamado de termo monômio, onde $a_k$ é o coeficiente e $x^k$ é a parte que envolve a variável elevada à potência $k$.

Com isso em mente, podemos partir para as metodologias.

### FATORAÇÃO
A fatoração é o processo de representar uma expressão matemática como um produto (multiplicação) de fatores. A ideia é simplificar a expressão o quanto seja possível, mantendo-a equivalente à original.

#### Fator comum
A fatoração por fator comum é um processo no qual você identifica e remove o maior fator que é comum a todos os termos de um polinômio. Essa técnica é usada quando todos os termos do polinômio têm um fator em comum.

A forma geral de um polinômio que pode ser fatorado por fator comum é:  
 $a_{n}x^n + a_{n-1}x^{n-1} + a_{n-2}x^{n-2} + \ldots + a_{1}x + a_0 $

Onde cada $a_i$  são coeficientes e $x$ é a variável.

Para fatorar por fator comum, você identifica o maior fator que é comum a todos os termos do polinômio e o coloca em evidência em de cada termo.

O resultado será um fator comum multiplicado por um polinômio novo e mais simples.

Exemplo: $2x^3 + 4x^2 + 6x$

Neste caso, o fator comum é $2x$.

Ao colocar em evidência temos:

$$
2x^3 + 4x^2 + 6x = 2x(x^2 + 2x + 3)
$$

A expressão $2x( x^2 + 2x + 3 )$ é a nova expressão simplificada.

### Diferença de quadrados
A fatoração por diferença de quadrados é utilizada para fatorar uma expressão que pode ser escrita como a diferença entre dois quadrados.

A forma geral de um polinômio que pode ser fatorado por diferença de quadrados é:  
$a^2 - b^2$

Onde a e b são termos que representam quadrados de alguma expressão. Nesse caso, a fatoração é dada por:  
$a^2 - b^2 = (a + b)(a - b)$

Exemplo: $x^2 - 9$

Neste caso, $x^2$ representa o quadrado de $x$ e $9$ é o quadrado de $3$. A expressão $x^2 - 9 = (x + 3)(x - 3)$ é a fatoração resultante (que descreve dois binômios).

### Fatoração por agrupamento
A fatoração por agrupamento é utilizada quando temos um polinômio com quatro termos e podemos agrupar os termos em pares, fatorando um fator comum de cada par.

A forma geral de um polinômio que pode ser fatorado por agrupamento é:
$ax^3 + bx^2 + cx + d$

O processo segue os seguintes passos:  
1. Agrupar os termos em pares.  
2. Fatorar um fator comum de cada par.  
3. Identificar e fatorar um fator comum dos grupos resultantes.  

Exemplo: $x^3 + 2x^2 - x - 2$

1. Agrupando os termos, temos: $(x^3 + 2x^2) + (-x - 2)$  
2. Fatoração comum de cada par: $x^2(x + 2) - 1(x + 2)$  
3. Fatoração comum dos grupos resultantes: $(x + 2)(x^2 - 1)$ 

Portanto, a expressão fatorada $(x + 2)(x^2 - 1)$ pode ainda ser escrita como $ (x + 2)(x + 1)(x - 1)$ , abrindo o $ x^2 - 1$ por diferença de quadrados.

####Trinômio do quadrado perfeito
A fatoração por trinômio do quadrado perfeito é utilizada quando temos um trinômio que pode ser expresso como o quadrado de um binômio.

A forma geral de um trinômio do quadrado perfeito é:  
$a^2 + 2ab + b^2$  

Onde a e b são termos que compõem o binômio. Nesse caso, a fatoração é dada por: $(a + b)^2$  
Exemplo: $x^2 + 4x + 4$  

O exemplo é simples e demonstra que o trinômio é um quadrado perfeito que pode ser expresso por $(x + 2)^2$.

Diferença ou soma de cubos

Diferença de cubos: $a^3 - b^3 = (a - b)(a^2 + ab + b^2) $
Soma de cubos: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$

Exemplo: $x^3 - 8$

Neste exemplo, $a = x$ e $b = 2$, pois $2^3 = 8$. Logo, aplicando a fórmula, temos que: $(x - 2)(x^2 + 2x + 4)$ é o resultado fatorado da equação.

#### BRIOT-RUFFINI
Esse é um método que é bem complicado descrever em apenas texto por isso recomendamos videos no assunto para que vocês possam aprender:

[![](https://img.youtube.com/vi/kdniKEGiscw/0.jpg)](https://www.youtube.com/watch?v=kdniKEGiscw)
[![](https://img.youtube.com/vi/wd8i0cxmS2c/0.jpg)](https://www.youtube.com/watch?v=wd8i0cxmS2c)
