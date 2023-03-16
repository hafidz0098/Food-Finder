class DataSource {
  static async searchFood(keyword) {
    const response = await fetch(
      `https://themealdb.com/api/json/v1/1/search.php?s=${keyword}`
    );
    const responseJson = await response.json();
    if (responseJson.meals) {
      return Promise.resolve(responseJson.meals);
    } else {
      return Promise.reject(`${keyword} is not found`);
    }
  }
}

export default DataSource;
