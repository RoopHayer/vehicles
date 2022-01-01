# Server for Autmobile 

## Author

Roop Hayer

## Summary of Problem Domain

Creating app where users can buy/sell their vehicles and reasearch automobiles.


## Links to Application Deployment

[Heroku]()

[Actions Page]()


## Include Embedded UML

![ ]()

## Routes


- HTTP POST

  - Path: /signin ; /signup
    - Returns: The username that was added to the database.

- HTTP GET

  - Path: /users
    - Returns: All the users in database.



Used collection for the following and 2 different paths: 

`/api/v1` with no authentication 

`/api/v2` with bearer authentication and ACL

- HTTP GET

  - Path: /vehicles 
    - Returns: An array of objects, each object being one entry from the database.

- HTTP GET

  - Path: /vehicles/1 
    - Returns: The object from the database, which has the id matching that which is in the path.

- HTTP POST

  - Path: /vehicles
    - Returns: The record that was added to the database.

- HTTP PUT

  - Path: /vehicles
    - Returns: The object from the database, which has the id matching that which is in the path, with the updated/changed data.

- HTTP DELETE
  - Path: /vehicles/1
    - Returns: The record from the database as it exists after deleting it.

