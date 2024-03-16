const cedears = require('./cedears.json');

const isSorted = (arr) =>
  arr.every(function (b, i, { [i - 1]: a }) {
    const sorted = !a || a.symbol < b.symbol;
    if (!sorted) {
      console.log('Cedears no ordenados: %s, %s', a?.symbol, b?.symbol);
    }
    return sorted;
  });

if (!isSorted(cedears.list.filter((c) => !c.isETF))) {
  throw new Error('La lista de cedears no esta ordenada!');
}

if (!isSorted(cedears.list.filter((c) => c.isETF))) {
  throw new Error('La lista de ETFs no esta ordenada!');
}
