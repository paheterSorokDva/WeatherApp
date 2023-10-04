const link = "http://api.weatherstack.com/current?access_key=749288b422bd90a5f6b2b8c567b0ccc3";


async function fetchData() {
    const result = await fetch('$http://api.weatherstack.com/current?access_key=749288b422bd90a5f6b2b8c567b0ccc3&query=London');

    const data = await result.json();

    console.log(data);
}

fetchData();