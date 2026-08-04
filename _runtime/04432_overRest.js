
export default function overRest(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let diff = arg1;
  let closure_1 = arg1;
  let closure_2 = arg2;
  if (undefined === arg1) {
    diff = arg0.length - 1;
  }
  closure_1 = closure_2(diff, 0);
  return function() {
    let tmp = table;
    const tmp2 = callback2(arguments.length - table, 0);
    const ArrayResult = Array(tmp2);
    let num = 0;
    if (0 < tmp2) {
      do {
        let tmp4 = table;
        ArrayResult[num] = arguments[table + num];
        num = num + 1;
        tmp = table;
      } while (num < tmp2);
    }
    const ArrayResult1 = Array(tmp + 1);
    let num2 = 0;
    if (0 < tmp) {
      do {
        ArrayResult1[num2] = arguments[num2];
        num2 = num2 + 1;
        tmp = table;
      } while (num2 < table);
    }
    ArrayResult1[tmp] = callback2(ArrayResult);
    return callback(table[0])(callback, this, ArrayResult1);
  };
};