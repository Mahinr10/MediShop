# medishop

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Routes

### login/

In this route, a login verification is done
We called users api and check whether provided form inputs matches with any existing users
If we find any match we send user to 'modeltype/' route

### modeltype/

Here we display all the products that are fetched through api
for each product there is button named "details"
if we click details, we can see the details of that particular product

### devicemodel/

In this route, there is a form for adding product.
After submitting the form we are sending form information to the server via post api
