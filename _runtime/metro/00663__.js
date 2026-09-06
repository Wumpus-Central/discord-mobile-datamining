// === Module 663: ? ===

// Module 663
import _mod531 from "module_531" /* 531 */;
import _mod587 from "module_587" /* 587 */;


export default function getMatchData(arg0) {
  let tmp7;
  const arr = _mod531(arg0);
  let diff = tmp - 1;
  if (+arr.length) {
    do {
      let tmp3 = arr[diff];
      let tmp4 = arg0[tmp3];
      let items = [tmp3, tmp4, ];
      items[2] = _mod587(tmp4);
      arr[diff] = items;
      tmp7 = +diff;
      diff = tmp7 - 1;
    } while (tmp7);
  }
  return arr;
};