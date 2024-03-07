const url = 'https://api-go-wash-efc9c9582687.herokuapp.com/api/user';

async function cadastroUsuario(){   
    var name = document.getElementById('name');     
    let resposta = await fetch(url,{
        method:"POST",
        body:JSON.stringify(
            {
                "name":name.value,
                "email":"carlos@gmail.com",
                "user_type_id":1,
                "password": "123456",
                "cpf_cnpj": "62418247406",
                "terms": 1,
                "birthday":"2000-10-12"    
            }
        ),
        headers:{
            'Content-Type': 'application/json'
        }        
    });

    let data = await resposta.json();
    
    
    if(data.data.statusCode != 200){
        alert(data.data.errors?.cpf_cnpj[0]);
        return;
    }
    alert("Cadastro feito com sucesso");
    window.location.href = "login.html";
}