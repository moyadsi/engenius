const usuario = {User: "etraining", Password:"explorandoando2020%"}

export function getMunicipios(setter){
    fetch("https://www.php.engenius.com.co/DatabaseIE.php", {
        method : 'POST',
        body : JSON.stringify({
            ... usuario,
            "option" : "municipios",
            "CodMun" : "73055"
        }),
    }).then(res => res.json())
    .then(res=> setter(res))
    
}

export function getInstituciones(setter, munbot){
    fetch("https://www.php.engenius.com.co/DatabaseIE.php", {
        method : 'POST',
        body : JSON.stringify({
            ... usuario,
            "option" : "instituciones",
            "CodMun" : munbot
        }),
    }).then(res => res.json())
    .then(res=> setter(res.data))
    
}

export function getSedes(setter, munbot){
    fetch("https://www.php.engenius.com.co/DatabaseIE.php", {
        method : 'POST',
        body : JSON.stringify({
            ... usuario,
            "option" : "sedes",
            "CodInst" : munbot
        }),
    }).then(res => res.json())
    .then(res=> setter(res.data))
    
}

export function getGrupos(setter, munbot){
    fetch("https://www.php.engenius.com.co/DatabaseIE.php", {
        method : 'POST',
        body : JSON.stringify({
            ... usuario,
            "option" : "grupos",
            "CodGrupo" : munbot
        }),
    }).then(res => res.json())
    .then(res=> setter(res.data))
    
}