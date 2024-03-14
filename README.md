![alt text](https://www.impacta.edu.br/themes/wc_agenciar3/images/logo-new.png)
## Projecto Gerenciamento de usuário


## Começando
Essas instruções farão com que você tenha uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste. Veja a implantação de notas sobre como implantar o projeto em um sistema ativo.

## Plataforma para execução do projeto

## Verifique já tem o node intalado

```php
node -v
```

## Caso não tenha siga a instrução a baixo

Para mais informações clique [aqui](https://nodejs.org/en/download) para a intalação do node


## Linguagem

```php
javascript
```

## Pré-requisitos

```php
Clonar o projecto
```


## Cadastro de usuário

```
curl --location 'https://api-go-wash-efc9c9582687.herokuapp.com/api/user' \
--header 'Content-Type: application/json' \
--header 'Cookie: gowash_session=0hGqRHf0q38ETNgEcJGce30LcPtuPKo48uKtb7Oj' \
--data-raw '{
    "name":"xxxxxxxxxxx",
    "email":"xxxxxxxxx@gmail.com",
    "user_type_id":1,
    "password": "123456",
    "cpf_cnpj": "62418247406",
    "terms": 1,
    "birthday":"2000-10-12"    
} '
```


## Login

```
curl --location 'https://api-go-wash-efc9c9582687.herokuapp.com/api/login' \
--header 'Content-Type: application/json' \
--header 'Cookie: gowash_session=0hGqRHf0q38ETNgEcJGce30LcPtuPKo48uKtb7Oj' \
--data-raw '{
"email": "xxxxxx@gmail.com",
"password":"123456",
"user_type_id":1
}'
```

## Cadastro de endereço

```
curl --location 'https://api-go-wash-efc9c9582687.herokuapp.com/api/auth/address' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWdvLXdhc2gtZWZjOWM5NTgyNjg3Lmhlcm9rdWFwcC5jb20vYXBpL2xvZ2luIiwiaWF0IjoxNzEwNDE3MjIyLCJuYmYiOjE3MTA0MTcyMjIsImp0aSI6InBsZll0aENEZ0U1NUNzMHEiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.z1pdEBkx8Hq01B7jNKa42NGxtFFHwb-7O_0y8krVWUY' \
--header 'Cookie: gowash_session=0hGqRHf0q38ETNgEcJGce30LcPtuPKo48uKtb7Oj' \
--data '{
    "title":"Minha Casa",
    "cep": "03730000",
    "address": "Rua Brazópolis Jardim Jaú (Zona Leste)",
    "number": "8A",
    "complement": ""
}'
```

## Atualizar endereço

```
curl --location 'https://api-go-wash-efc9c9582687.herokuapp.com/api/auth/address/4' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWdvLXdhc2gtZWZjOWM5NTgyNjg3Lmhlcm9rdWFwcC5jb20vYXBpL2xvZ2luIiwiaWF0IjoxNzEwNDE3MjIyLCJuYmYiOjE3MTA0MTcyMjIsImp0aSI6InBsZll0aENEZ0U1NUNzMHEiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.z1pdEBkx8Hq01B7jNKa42NGxtFFHwb-7O_0y8krVWUY' \
--header 'Cookie: gowash_session=0hGqRHf0q38ETNgEcJGce30LcPtuPKo48uKtb7Oj' \
--data '{
    "title":"Minha Casa ola",
    "cep": "03730000",
    "address": "Rua Brazópolis Jardim Jaú (Zona Leste)",
    "number": "8A",
    "complement": ""
}'
```

## Listar todos endereço de um usuario

```
curl --location 'https://api-go-wash-efc9c9582687.herokuapp.com/api/auth/address' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWdvLXdhc2gtZWZjOWM5NTgyNjg3Lmhlcm9rdWFwcC5jb20vYXBpL2xvZ2luIiwiaWF0IjoxNzEwNDE3MjIyLCJuYmYiOjE3MTA0MTcyMjIsImp0aSI6InBsZll0aENEZ0U1NUNzMHEiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.z1pdEBkx8Hq01B7jNKa42NGxtFFHwb-7O_0y8krVWUY' \
--header 'Cookie: gowash_session=0hGqRHf0q38ETNgEcJGce30LcPtuPKo48uKtb7Oj' \
--data ''
```

## Deletar um edereço

```
curl --location --request DELETE 'https://api-go-wash-efc9c9582687.herokuapp.com/api/auth/address/3' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWdvLXdhc2gtZWZjOWM5NTgyNjg3Lmhlcm9rdWFwcC5jb20vYXBpL2xvZ2luIiwiaWF0IjoxNzEwNDE3MjIyLCJuYmYiOjE3MTA0MTcyMjIsImp0aSI6InBsZll0aENEZ0U1NUNzMHEiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.z1pdEBkx8Hq01B7jNKa42NGxtFFHwb-7O_0y8krVWUY' \
--header 'Cookie: gowash_session=0hGqRHf0q38ETNgEcJGce30LcPtuPKo48uKtb7Oj'
```


## Dividas 

```
Prof.Esp: carlos.fernandes@faculdadeimpacta@gmail.com.br
```



