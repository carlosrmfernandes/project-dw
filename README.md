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

## Cadastro de user

```php
curl --location 'https://api-go-wash-efc9c9582687.herokuapp.com/api/user' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer null' \
--header 'Cookie: gowash_session=9UR4Zn49iaVIoqRanCp1hob3By2lToxAV0nRCsS6' \
--data-raw '{
    "name":"Carlos",
    "email":"carlos@gmail.com",
    "user_type_id":1,
    "password": "123456",
    "cpf_cnpj": "62418247406",
    "terms": 1,
    "birthday":"2000-10-12"    
}'
``` 
## Login de user

```php
curl --location 'https://api-go-wash-efc9c9582687.herokuapp.com/api/login' \
--header 'Content-Type: application/json' \
--header 'Cookie: gowash_session=9UR4Zn49iaVIoqRanCp1hob3By2lToxAV0nRCsS6' \
--data-raw '{
"email": "carlos.fernandes@faculdadeimpacta.com.br",
"password":"123456",
"user_type_id": 1
}'
```

## Bucar os dados do user

```php
curl --location 'https://api-go-wash-efc9c9582687.herokuapp.com/api/auth/user/2' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWdvLXdhc2gtZWZjOWM5NTgyNjg3Lmhlcm9rdWFwcC5jb20vYXBpL2xvZ2luIiwiaWF0IjoxNzA5MjMyNjEzLCJuYmYiOjE3MDkyMzI2MTMsImp0aSI6ImxDaW1QMlp0ajdRZDZpQmEiLCJzdWIiOiIyIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.-kr1dP72RTYeM5oMG-G30PE3S3rXAUEdBsQ01bj-sBE' \
--header 'Cookie: gowash_session=EY3jeoRM91jkP3mxyEqJB3C3gjMCJEJdDH5NzKwA'
```

## Cadastro de Endereço

```php
curl --location 'https://api-go-wash-efc9c9582687.herokuapp.com/api/auth/address' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWdvLXdhc2gtZWZjOWM5NTgyNjg3Lmhlcm9rdWFwcC5jb20vYXBpL2xvZ2luIiwiaWF0IjoxNzA5MjMyNjEzLCJuYmYiOjE3MDkyMzI2MTMsImp0aSI6ImxDaW1QMlp0ajdRZDZpQmEiLCJzdWIiOiIyIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.-kr1dP72RTYeM5oMG-G30PE3S3rXAUEdBsQ01bj-sBE' \
--header 'Cookie: gowash_session=EY3jeoRM91jkP3mxyEqJB3C3gjMCJEJdDH5NzKwA' \
--data '{
    "title":"Minha Casa",
    "cep": "03730000",
    "address": "Rua Brazópolis Jardim Jaú (Zona Leste)",
    "number": "8A",
    "complement": ""
}'
```

## Buscar todos endereço do user

```php
curl --location 'https://api-go-wash-efc9c9582687.herokuapp.com/api/auth/address' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWdvLXdhc2gtZWZjOWM5NTgyNjg3Lmhlcm9rdWFwcC5jb20vYXBpL2xvZ2luIiwiaWF0IjoxNzA5MjMyNjEzLCJuYmYiOjE3MDkyMzI2MTMsImp0aSI6ImxDaW1QMlp0ajdRZDZpQmEiLCJzdWIiOiIyIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.-kr1dP72RTYeM5oMG-G30PE3S3rXAUEdBsQ01bj-sBE' \
--header 'Cookie: gowash_session=EY3jeoRM91jkP3mxyEqJB3C3gjMCJEJdDH5NzKwA' \
--data ''
```

## Deletar um endereço do usuario

```php
curl --location --request DELETE 'https://api-go-wash-efc9c9582687.herokuapp.com/api/auth/address/3' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWdvLXdhc2gtZWZjOWM5NTgyNjg3Lmhlcm9rdWFwcC5jb20vYXBpL2xvZ2luIiwiaWF0IjoxNzA5MjMyNjEzLCJuYmYiOjE3MDkyMzI2MTMsImp0aSI6ImxDaW1QMlp0ajdRZDZpQmEiLCJzdWIiOiIyIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.-kr1dP72RTYeM5oMG-G30PE3S3rXAUEdBsQ01bj-sBE' \
--header 'Cookie: gowash_session=EY3jeoRM91jkP3mxyEqJB3C3gjMCJEJdDH5NzKwA'
```

