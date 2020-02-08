function pares(n1, n2) {
    let vet = []
        while(n1 <= n2){
            if(n1 % 2 == 0){
                vet.push(n1)
            }
            n1++
        }
        return `São pares os números ${vet}.`
}

console.log(pares(32, 321))