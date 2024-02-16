async function apiCall() {
  let response = await fetch('https://dummyjson.com/products/1');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let json = await response.json();
  return json;
}

export default apiCall;