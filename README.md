# Sayna-TestFront-NodeJS

##### Installation #####

# 1. Il faut installer MongoDB en local 
# 2. Et en suite, lancer le commande : "npm install" sur la racine
# 3. Enfin, pour faire marcher l'application il suffit de lancer le commande : "npm run start"


##### TEST #####

## Test Inscription ##

# Url : http://localhost:4001/register
# Method : POST
# Body : row
# Type : json
# data : {
#	"firstname": "JC",
#	"lastname": "TR",
#	"email": "user02@gmail.com",
#	"password": "12345678"
# }


## Test login ##

# Url : http://localhost:4001/login
# Method : POST
# Body : row
# Type : json
# data : {
#	"email": "user02@gmail.com",
#	"password": "12345678"
# }



# NB: Ce test peut etre realiser avec les outils des testes APIs tel que "Postman" ou en utilisant un plugin REST VS Code 