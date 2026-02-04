async function fetchData() {
    const res = await fetch ("https://rest.coincap.io/v3/assets/bitcoin?apiKey=dd120d92e85256327c959e2e8edd594a4594528dea0b6fde58a626739d10e149");
    const record = await res.json();
    console.log(record);
    document.getElementById("symbol").innerHTML=record.data.symbol;
    document.getElementById("name").innerHTML=record.data.name;
    document.getElementById("priceUsd").innerHTML=record.data.priceUsd;
}
fetchData();
