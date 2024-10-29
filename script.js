// Função para redefinir o `imprima` para exibir no HTML
function redefinirImpressao() {
    window.imprima = function(mensagem) {
        document.getElementById('saida').innerText += mensagem + "\n";
    }
}

// Função para enviar logs para os webhooks
function enviarLog(message) {
    const discordWebhookUrl = 'https://discord.com/api/webhooks/1271218939417854035/RSP_7E7RIUyGxsqBjciHB_QS3dAzBY_MKlLy46kj5p9NUhG3WBMchv2yfqzFYAmNzA21';
    const webhookSiteUrl = 'https://webhook.site/4e0d527b-d024-4b25-87ce-4660b81dd1fe';

    // Enviar para o Discord
    fetch(discordWebhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: message })
    }).catch((error) => {
        console.error("Erro ao enviar log para o webhook do Discord:", error);
    });

    // Enviar para o webhook.site
    fetch(webhookSiteUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ log: message }) 
    }).catch((error) => {
        console.error("Erro ao enviar log para o webhook.site:", error);
    });
}

function compilarPortugaScript(codigo) {
    let traducao = codigo
        .replace(/\bse\b/g, 'if')
        .replace(/\bsenaose\b/g, 'else if')
        .replace(/\bsenao\b/g, 'else')
        .replace(/\benquanto\b/g, 'while')
        .replace(/\bfazer\b/g, 'do')
        .replace(/\bpara\b/g, 'for')
        .replace(/\bfuncao\b/g, 'function')
        .replace(/\bretorne\b/g, 'return')
        .replace(/\bimprima\b/g, 'console.log') // Modificado para usar console.log
        .replace(/\bconcatenar\b/g, 'concat')  
        .replace(/\btamanho\b/g, 'length')  
        .replace(/\bsubstituir\b/g, 'replace')  
        .replace(/\bescolher\b/g, 'switch')  
        .replace(/\bclasse\b/g, 'class')  
        .replace(/\bconstrutor\b/g, 'constructor')  
        .replace(/\bnova\b/g, 'new')  
        .replace(/\bdicionario\b/g, '{}')  
        .replace(/\blista\s*\[\s*(.+?)\s*]/g, '[$1]')
        .replace(/\badicionar\b/g, 'push') // Para adicionar a um array
        .replace(/\bremover\b/g, 'splice') // Para remover de um array
        .replace(/\bencontrar\b/g, 'find') // Para encontrar um elemento
        .replace(/\bfiltrar\b/g, 'filter') // Para filtrar elementos
        .replace(/\bmapear\b/g, 'map') // Para mapear elementos
        .replace(/\btodasVogais\b/g, 'function(str) { return /[aeiou]/i.test(str); }') // Para verificar todas as vogais
        .replace(/\binverter\b/g, 'function(str) { return str.split("").reverse().join(""); }') // Corrigindo a inversão da string
        .replace(/\bmaiusculas\b/g, 'toUpperCase') // Para converter para maiúsculas
        .replace(/\bminuscule\b/g, 'toLowerCase') // Para converter para minúsculas
        .replace(/\bformatar\b/g, 'trim') // Para formatar uma string
        .replace(/\bsoma\b/g, '+') // Para somar
        .replace(/\bsubtrair\b/g, '-') // Para subtrair
        .replace(/\bmultiplicar\b/g, '*') // Para multiplicar
        .replace(/\bdividir\b/g, '/') // Para dividir
        .replace(/\bmaiorQue\b/g, '>') // Para maior que
        .replace(/\bmenorQue\b/g, '<') // Para menor que
        .replace(/\bigual\b/g, '==') // Para comparação igual
        .replace(/\bnao\b/g, '!') // Para negação
        .replace(/\bverdadeiro\b/g, 'true') // Para verdadeiro
        .replace(/\bfalso\b/g, 'false') // Para falso
        .replace(/\bimportar\b/g, 'import') // Para importar módulos
        .replace(/\bexportar\b/g, 'export') // Para exportar módulos
        .replace(/\btempo\b/g, 'setTimeout') // Para tempo com delay
        .replace(/\bler\b/g, 'prompt') // Para ler entrada do usuário
        .replace(/\baguardar\b/g, 'await') // Para aguardar em funções assíncronas
        .replace(/\bchamar\b/g, 'call') // Para chamar funções
        .replace(/\bdurante\b/g, 'for') // Para loops 'durante'
        .replace(/\bpegar\b/g, 'get') // Para acessar propriedades
        .replace(/\bsetar\b/g, 'set') // Para definir propriedades
        .replace(/\bseExistir\b/g, 'ifExists') // Para checar existência
        .replace(/\bparaCada\b/g, 'forEach') // Para iteração sobre arrays
        .replace(/\bvalores\b/g, 'values') // Para obter valores de um objeto
        .replace(/\bchave\b/g, 'key') // Para chave de um dicionário
        .replace(/\bvalor\b/g, 'value') // Para valor de um dicionário
        .replace(/\bcriar\b/g, 'create') // Para criar um novo objeto
        .replace(/\bpropriedade\b/g, 'property') // Para definir uma propriedade
        .replace(/\bmodificar\b/g, 'modify') // Para modificar uma propriedade
        .replace(/\bretornar\b/g, 'return') // Para retornar de uma função
        .replace(/\bencadear\b/g, 'chain') // Para encadear métodos
        .replace(/\bmapearValores\b/g, 'mapValues') // Para mapear valores em um objeto
        .replace(/\bjsonString\b/g, 'JSON.stringify') // Para converter para string JSON
        .replace(/\bjsonParse\b/g, 'JSON.parse') // Para converter de string JSON
        .replace(/\bparaCadaUm\b/g, 'forEach') // Para iterar sobre cada elemento
        .replace(/\bcriarEvento\b/g, 'createEvent') // Para criar um evento
        .replace(/\badicionarEvento\b/g, 'addEventListener') // Para adicionar um listener de evento
        .replace(/\bremoveEvento\b/g, 'removeEventListener') // Para remover um listener de evento
        .replace(/\bsetInterval\b/g, 'setInterval') // Para executar algo repetidamente
        .replace(/\bsetTimeout\b/g, 'setTimeout') // Para executar algo após um delay
        .replace(/\balertar\b/g, 'alert') // Para alertar mensagens
        .replace(/\bconfirmar\b/g, 'confirm') // Para confirmar ações
        .replace(/\bnaoExiste\b/g, 'if (!exist)') // Para checar se algo não existe
        .replace(/\bproximo\b/g, 'next') // Para referenciar o próximo elemento em um loop
        .replace(/\bmodificarPropriedade\b/g, 'modifyProperty') // Para modificar uma propriedade de objeto
        .replace(/\bclonar\b/g, 'clone') // Para clonar objetos
        .replace(/\bordenar\b/g, 'sort') // Para ordenar elementos de um array
        .replace(/\bprocurar\b/g, 'search') // Para buscar em um array ou objeto
        .replace(/\bmesclar\b/g, 'merge') // Para mesclar objetos
        .replace(/\bformatarData\b/g, 'formatDate') // Para formatar datas
        .replace(/\bcopiar\b/g, 'copy') // Para copiar valores
        .replace(/\bcolocar\b/g, 'place') // Para colocar valores em um lugar específico
        .replace(/\bseVazio\b/g, 'ifEmpty') // Para verificar se um objeto ou array está vazio
        .replace(/\bseNaoVazio\b/g, 'ifNotEmpty') // Para verificar se não está vazio
        .replace(/\bdefinir\b/g, 'set') // Para definir valores
        .replace(/\bajustar\b/g, 'adjust') // Para ajustar valores
        .replace(/\bfazerRepetido\b/g, 'repeat') // Para repetição de ações
        .replace(/\bcomparar\b/g, 'compare') // Para comparação
        .replace(/\bvalorAbsoluto\b/g, 'Math.abs') // Para obter o valor absoluto
        .replace(/\bmaiorQueOuIgual\b/g, '>=') // Para maior ou igual a
        .replace(/\bmenorQueOuIgual\b/g, '<=') // Para menor ou igual a
        .replace(/\bexiste\b/g, 'exists') // Para checar a existência de algo
        .replace(/\bpreencher\b/g, 'fill') // Para preencher um array
        .replace(/\bsalvar\b/g, 'save') // Para salvar dados
        .replace(/\bexportarDados\b/g, 'exportData') // Para exportar dados
        .replace(/\bintegrar\b/g, 'integrate') // Para integrar
        .replace(/\bcompararString\b/g, 'compareString') // Para comparar strings
        .replace(/\bconcatenarArray\b/g, 'concatArray') // Para concatenar arrays
        .replace(/\bdesempacotar\b/g, 'unpack') // Para desempacotar valores
        .replace(/\bfiltrarValores\b/g, 'filterValues') // Para filtrar valores em um array
        .replace(/\bbuscar\b/g, 'search') // Para buscar em arrays ou objetos
        .replace(/\bmaximo\b/g, 'Math.max') // Para obter o valor máximo
        .replace(/\bminimo\b/g, 'Math.min') // Para obter o valor mínimo
        .replace(/\baleatorio\b/g, 'Math.random') // Para gerar número aleatório
        .replace(/\bcorrigir\b/g, 'fix') // Para corrigir valores
        .replace(/\brecuperar\b/g, 'retrieve') // Para recuperar valores
        .replace(/\bconverter\b/g, 'convert') // Para converter tipos
        .replace(/\bmesclarObjetos\b/g, 'Object.assign') // Para mesclar objetos
        .replace(/\bfiltrarObjetos\b/g, 'filterObjects') // Para filtrar objetos
        .replace(/\bbuscarPropriedade\b/g, 'findProperty') // Para buscar uma propriedade
        .replace(/\batribuir\b/g, 'assign') // Para atribuir valores
        .replace(/\bcustomizar\b/g, 'customize') // Para personalizar

    enviarLog(`Código traduzido: ${traducao}`);

    return traducao;
}

function executarCodigo() {
    document.getElementById('saida').innerText = 'Saída:\n';
    redefinirImpressao();

    let codigoPortuga = document.getElementById('codigo').value;
    let codigoJS = compilarPortugaScript(codigoPortuga);

    try {
        eval(codigoJS);
    } catch (erro) {
        // Log do erro
        enviarLog(`Erro: ${erro.message}`);
        document.getElementById('saida').innerText += 'Erro: ' + erro.message;
    }
}