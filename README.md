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
    "email":"carlosr.m.fernandes@gmail.com",
    "user_type_id":1,
    "password": "123456",
    "cpf_cnpj": "62418247406",
    "terms": 1,
    "birthday":"2000-10-12"    
}'
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

