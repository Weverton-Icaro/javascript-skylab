function experiencia(anos) {
    if (anos <= 1) {
        return 'iniciante'
    } else if (anos > 1 && anos < 3 ){
        return 'intermediário'
    } else if ( anos > 3 && anos <= 6){
        return 'Avançado'
    } else {
        return 'Jedi Master'
    }
   }
var anosEstudo = 7;
var retorno = experiencia(anosEstudo);
console.log(retorno);


// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master