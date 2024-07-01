function calc() {
    let euro = eurofield.value;
    let result = euro * 0.981;
    usd.value = result.toFixed(2).replace(`.`,`,`);

}
function calcReverse() {
  let usdValue = parseFloat(usd.value);
  let result = usdValue / 0.981;
  let formattedResult = result.toFixed(2).replace(`.`, `,`);
  eurofield.value = formattedResult;
} 
