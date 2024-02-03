---
title: Movimento
tableOfContents: false
---
 <head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.css" integrity="sha384-WsHMgfkABRyG494OmuiNmkAOk8nhO1qE+Y6wns6v+EoNoTNxrWxYpl5ZYWFOLPCM" crossorigin="anonymous">
</head>


## O que é movimento?

O **movimento**, na física, é a mudança de posição de um objeto em relação a um ponto de referência ao longo do tempo. Ele é descrito em termos de três aspectos principais: posição, velocidade e aceleração. A posição refere-se à localização do objeto em relação a um ponto inicial, enquanto a velocidade indica a taxa de mudança dessa posição ao longo do tempo. A aceleração, por sua vez, representa a taxa de variação da velocidade de um objeto em movimento.

Ou seja, o movimento é o ato de percorrer uma trajetória e é ele o objeto de preocupação de Física I.

**É fundamental compreender que o movimento e outras grandezas físicas estão intrinsecamente ligados ao referencial escolhido para análise.** Um referencial é um sistema de coordenadas fixo ou em movimento em relação ao qual as observações são feitas.  A escolha do referencial afeta diretamente como percebemos e descrevemos o movimento. Exemplo:

Imagine estar em um ônibus indo para a Poli e passar por um conhecido parado no ponto. Se considerarmos o conhecido como referencial, o ônibus se moverá a 50 km/h. No entanto, se considerarmos você como referencial, o ônibus estará parado, pois não haverá uma velocidade relativa entre você e ele. A questão do referencial será mais explorada em aulas subsequentes. Por ora, é suficiente compreender que as medidas são relativas.


## Distância percorrida x Deslocamento

No estudo do movimento, dois conceitos frequentemente abordados são **deslocamento** e **distância** **percorrida**, que tendem a gerar confusão devido à sua relação com a posição do objeto.

O deslocamento refere-se à mudança na posição, considerando apenas o ponto inicial e final do corpo.

$$
\text{Deslocamento}=\Delta S=S_{\text{final}}-S_{\text{inicial}}
$$

> Obs. S pode ser encontrado substituído por $y$, $x$ ou $z$. Dependendo das dimensões em que você está resolvendo o problema.

Por outro lado, o trajeto percorrido representa a extensão total do percurso realizado pelo objeto, independente do caminho tomado.

É importante notar que o deslocamento leva em conta a direção do movimento, refletido por um sinal que indica se o deslocamento ocorreu em direção positiva ou negativa (**em relação ao referencial adotado**).

Exemplo:

Suponha que você saiu da sua casa, correu 5 km e voltou para casa. Nesse caso, a distância que você percorreu é 5 km e o seu deslocamento é nulo (ponto final = ponto inicial).

> Obs. O símbolo $\Delta$ indica uma subtração do tipo final - inicial. Isso é extremamente comum e será tratado como algo implícito durante as suas aulas na Poli.


## Movimento unidimensional

Começaremos considerando os conceitos básicos que descrevem o movimento (cinemática), antes de abordar como determinar o movimento em uma situação física específica (dinâmica). Vamos nos concentrar no movimento em uma dimensão, como o movimento de um carro em linha reta. 

Para descrever o movimento, precisamos de um referencial, que, em uma dimensão, é uma linha orientada com uma origem O. A posição do corpo em movimento no instante t é representada pelo eixo horizontal (abscissa) $x(t)$.

![enter image description here](https://i.ibb.co/y6q8Bwg/imagem-2024-02-01-212754448.png)
<center>Curso de Física Básica. H. M. Nussenzveig<center>

&nbsp;  

A cada fração de tempo, o carro está em uma nova posição.

>Obs.: Dimensão denota os “graus de liberdade” do movimento do corpo sendo analisado. Em uma dimensão, o carro da foto só pode ir para frente ou para trás (sentido positivo ou negativo).


### Velocidade

**Tudo que se move tem uma certa velocidade**. Isso acontece porque a velocidade é a taxa de variação da posição no tempo. A velocidade média, por exemplo, representa o deslocamento de um corpo em um certo intervalo de tempo.

 $$
V_{m}=\frac{\text{Deslocamento}}{\text{Intervalo}}=\frac{\Delta S}{\Delta t}
 $$

Repare que a velocidade média refere-se ao deslocamento e não à distância percorrida. Quando queremos analisar a velocidade a partir da distância, usamos a velocidade escalar média.

$$
S_{m}=\frac{ \text{Distancia percorrida}}{\Delta t}
$$

Quando estamos preocupados com a velocidade ao longo de todo o trajeto, utilizaremos a velocidade escalar média. Na maior parte dos exercícios, você estará calculando a velocidade escalar média (não é interessante, por exemplo, dizer que um carro de Fórmula 1 teve velocidade nula porque partiu e chegou a um mesmo ponto).

>Obs. Assim como o deslocamento, a velocidade média tem sinal que indica direção - a velocidade escalar média não. Distância percorrida nunca é negativa.Em aulas posteriores, você aprenderá sobre a velocidade instantânea. Ela indica a velocidade de um corpo em um momento específico ($\Delta t\to 0$ - intervalo tende a 0). A velocidade instantânea é a derivada da posição.
>
>Aliás, caso não tenha ficado claro, taxa de variação no tempo indica o quão rápido alguma coisa varia. Essa é uma expressão que é usada em diversas matérias e que no futuro pode ser sinônimo de derivada ou tangente de um gráfico em alguns exercícios.


### Aceleração

**A aceleração está para a velocidade assim como a velocidade está para a posição**. Ou seja, a aceleração é a taxa de variação da velocidade ao longo do tempo.

De maneira análoga à velocidade média, a fórmula de aceleração média ($a_m$) é a que se segue:

$$
a_m=\frac{\Delta v}{\Delta t}
$$

Há também o conceito de aceleração instantânea - derivada da velocidade.


### Lei horária de um movimento

A expressão $x(t)$, vista na imagem do carro em linha reta, denota que a posição varia com o tempo - ou seja, é uma função do tempo (semelhante a $f(x)$ comumente vista no ensino médio ou em Cálculo).

Com base nessa expressão, podemos criar uma tabela ou gráfico que mostra a posição do corpo em um momento específico, sendo assim denominada **Lei Horária de um Movimento** (descreve a trajetória através do tempo). A lei recebe um instante e fornece a posição correspondente.

![enter image description here](https://i.ibb.co/dpwvPCB/imagem-2024-02-01-212816739.png)

<center>Curso de Física Básica. H. M. Nussenzveig<center>

&nbsp;  

O gráfico ilustra a trajetória de um corpo em movimento retilíneo uniforme, como o carro mencionado anteriormente. Note que "$a$" representa a posição inicial, "$x_4$" indica a posição no instante "$t_4$", e assim por diante. A forma linear do gráfico indica que a posição varia a uma taxa constante (a velocidade permanece constante durante o movimento). 

Fórmulas comumente chamadas de "sorvete" e "sorvetão", que representam o movimento retilíneo uniforme e uniformemente acelerado, são exemplos de leis horárias de um movimento.

![enter image description here](https://i.ibb.co/B2WhmLW/imagem-2024-02-01-212836943.png)
<center>Autoria desconhecida <center>

&nbsp;  

### Movimento retilíneo uniforme

A fórmula do “sorvete” refere-se ao **Movimento Retilíneo Uniforme** (abreviado como **MRU**).

Nesse tipo de movimento, a velocidade se mantém constante ao longo de toda a trajetória - **a aceleração é nula**.

Na Poli, é mais comum que você encontre a fórmula dessa maneira:

 $$
 x(t)=x_0+v(t-t_0)
 $$

Ou,
 $$
 \Delta x=v \cdot \Delta t
 $$

Observe que a primeira fórmula é bastante parecida com a função de reta. Como já mencionado anteriormente, o gráfico da lei horária do MRU é uma reta, em que a velocidade indica o **coeficiente angular** e a posição inicial indica o **coeficiente linear**.

>Obs. $A_0$ denota parâmetro inicial e $A$ denota parâmetro final ou procurado.  
$x(t_0)=x_0\,,\,v(t_0)=v_0$

![enter image description here](https://i.ibb.co/dpwvPCB/imagem-2024-02-01-212816739.png)
<center>Curso de Física Básica. H. M. Nussenzveig<center>

&nbsp;  

Note que como o coeficiente angular (velocidade) é constante, podemos dizer que:

 $$
 v_m=\frac{x_1-a}{t_-0}=\frac{x_2-x_1}{t_2-t_1}=\frac{x_3-x_2}{t_3-t_2}=...\frac{x_n-x_{n-1}}{t_n-t_{n-1}}"
 $$

Variação de x sobre variação de t - tangente/coeficiente angular da reta.

### Movimento retilíneo uniformemente variado

A fórmula do “sorvetão” refere-se ao **Movimento Retilíneo Uniformemente Variado** (**MRUV**). Nesse tipo de movimento, a velocidade é alterada ao longo da trajetória de acordo com a aceleração, que é constante.

A lei geralmente é encontrada assim:

 $$
 x(t)=x_0=v_0(t-t_0)+\frac{1}{2}a(t-t_0)^2"
 $$

E a função que descreve a velocidade ao longo do tempo é a que se segue (repare no quanto ela se parece com a Expressão 6):


$$
v(t)=v_0+a(t-t_0)
$$

Um exemplo bastante utilizado do MRUV é a queda livre, na qual o corpo está sob efeito da aceleração da gravidade.
