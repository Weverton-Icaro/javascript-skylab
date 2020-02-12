axios.get('https://api.github.com/users/weverton-icaro')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });
