

function html() {
    const estruturaTag = document.getElementById('estrutura-tag');
    estruturaTag.innerText = `A estrutura padrão de uma tag é composta pelo nome da tag e seu(s) atributo(s) contidos dentro dos sinais de chevron (<...>) e seu conteúdo como pode ser visto a seguir:
    
    <Tag atributo="valor">
    conteúdo tag
    </Tag>`
}
html();