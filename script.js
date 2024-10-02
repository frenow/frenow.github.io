async function fetchData() {
    const res = await fetch ("https://api.coincap.io/v2/assets/bitcoin");
    const record = await res.json();
    console.log(record);
    document.getElementById("symbol").innerHTML=record.data.symbol;
    document.getElementById("name").innerHTML=record.data.name;
    document.getElementById("priceUsd").innerHTML=record.data.priceUsd;
}
fetchData();