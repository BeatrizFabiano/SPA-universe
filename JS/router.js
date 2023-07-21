export class Router {

  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location;
    const rotaDaVez = this.routes[pathname] || this.routes[404];

    fetch(rotaDaVez)
      .then(data => data.text())
      .then(html => {
        document.querySelector("#app").innerHTML = html
      })
  }

}