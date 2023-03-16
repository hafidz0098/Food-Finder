class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Food Finder</a>
            </div>
        </nav>
    `;
  }
}

customElements.define("app-bar", AppBar);
