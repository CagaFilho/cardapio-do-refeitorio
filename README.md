# Cardápio do Refeitório — IFPI Campus Paulistana

Aplicação web desenvolvida para o Hackathon IA no Campus. O objetivo é facilitar a consulta ao cardápio semanal e permitir que os estudantes avaliem as refeições.

## Funcionalidades

- Exibição do cardápio de segunda a sexta-feira.
- Destaque automático do dia atual.
- Votação positiva (👍) ou negativa (👎) para cada prato.
- Possibilidade de alterar ou remover o próprio voto.
- Gráfico de barras CSS com o resultado das avaliações.
- Armazenamento dos votos no `localStorage` do navegador.
- Layout responsivo para celular e computador.

## Tecnologias

- HTML5 semântico
- CSS3 (Grid, Flexbox e media queries)
- JavaScript (DOM, eventos, `Date` e `localStorage`)

## Como executar

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` em um navegador.
3. Para publicar, envie os arquivos para um repositório GitHub e ative GitHub Pages em **Settings → Pages → Deploy from a branch → main → /(root)**.

## Personalizar o cardápio

Abra `script.js` e edite o array `cardapio`, no início do arquivo. Os pratos deste projeto são demonstrativos e devem ser substituídos pelo cardápio oficial fornecido pelo refeitório.

## Observação sobre as votações

Nesta versão, os votos ficam salvos apenas no navegador e dispositivo em que foram registrados. O `localStorage` não compartilha votos entre diferentes alunos ou computadores. Para uma votação coletiva real, seria necessário integrar um backend ou banco de dados.

## Uso de Inteligência Artificial — registro de prompts

Os exemplos abaixo documentam prompts que podem ser usados durante o desenvolvimento. A equipe deve revisar, testar e adaptar o resultado e registrar o que efetivamente aproveitou.

1. **Prompt:** "Crie uma página em HTML semântico para exibir um cardápio semanal de refeitório, com estrutura acessível e responsiva."
   - **Aproveitado/adaptado:** estrutura de cabeçalho, seções, cards dos dias e rodapé. A equipe deve conferir os textos e a semântica.
2. **Prompt:** "Crie CSS responsivo com Grid e Flexbox para organizar cinco cards de refeições e adaptar o layout para celular."
   - **Aproveitado/adaptado:** grade de cinco colunas em telas maiores e reorganização em telas menores. Cores e espaçamentos podem ser ajustados pela equipe.
3. **Prompt:** "Implemente em JavaScript votos de gostei/não gostei por prato, persistência local e gráfico de barras com CSS."
   - **Aproveitado/adaptado:** eventos de clique, atualização de votos, `localStorage` e cálculo das proporções. A equipe deve testar a troca e remoção de votos e compreender a limitação do armazenamento local.

## Testes recomendados antes da entrega

- Abrir `index.html` e conferir os cinco dias.
- Verificar se o dia atual recebe o selo "HOJE" em dias úteis.
- Votar 👍 e depois trocar para 👎.
- Clicar novamente no voto selecionado e confirmar que ele é removido.
- Atualizar a página e verificar se o voto continua salvo no mesmo navegador.
- Redimensionar a janela para conferir a versão mobile.
- Abrir o console do navegador e verificar se não há erros.

## Equipe

- Integrantes: preencher com os nomes dos membros do grupo.
- Turma: preencher.
- Disciplina: preencher.
