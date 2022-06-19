function search(city) {
  let apiKey = "7300c731f89329fd7a3cc5ce6ee5b0eb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
