class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `<div class="d-flex" id="search-container">
    <input class="form-control me-2" type="search" placeholder="Cari makanan..." id="searchElement">
    <button class="btn btn-outline-success" id="searchButtonElement" type="submit">Search</button>
</div>
    `;

    this.querySelector("#searchButtonElement").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
