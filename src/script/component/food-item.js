class foodItem extends HTMLElement {
  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card mb-5 mt-2">
          <img src=${this._food.strMealThumb} class="img-fluid" alt="...">
          <div class="card-body">
              <h5 class="card-title">${this._food.strMeal}</h5>
              <p class="card-text">Kategori : ${this._food.strCategory}</p>
              <p class="card-text">Asal : ${this._food.strArea}</p>
          </div>
      </div>
    
    `;
  }
}

customElements.define("food-item", foodItem);
