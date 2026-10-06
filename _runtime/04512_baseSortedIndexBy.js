// _runtime/04512_baseSortedIndexBy.js
import isSymbol from "00553_isSymbol.js";

export default function baseSortedIndexBy(arg0, arg1, fn, arg3) {
  let sum;
  let tmp20;
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (0 === num) {
    return 0;
  } else {
    const tmp26 = fn(arg1);
    let tmp21 = num;
    let num2 = 0;
    let tmp22 = num;
    const tmp27 = tmp26 != tmp26;
    if (0 < num) {
      do {
        let tmp12;
        let tmp2 = floor((num2 + tmp21) / 2);
        let tmp3 = fn(arg0[tmp2]);
        let tmp4 = tmp3 == tmp3;
        let tmp7 = isSymbol(tmp3);
        sum = num2;
        if (tmp27) {
          let tmp19 = arg3 || tmp4;
          tmp12 = tmp19;
        } else {
          let tmp10 = undefined !== tmp3;
          if (undefined === tmp26) {
            let tmp17 = tmp4;
            if (tmp17) {
              let tmp18 = arg3 || tmp10;
              tmp17 = tmp18;
            }
            tmp12 = tmp17;
          } else {
            let tmp11 = null === tmp3;
            if (null === tmp26) {
              let tmp15 = tmp4 && tmp10;
              if (tmp15) {
                let tmp16 = arg3 || !tmp11;
                tmp15 = tmp16;
              }
              tmp12 = tmp15;
            } else if (tmp30) {
              let tmp13 = tmp4 && tmp10 && !tmp11;
              if (tmp13) {
                let tmp14 = arg3 || !tmp7;
                tmp13 = tmp14;
              }
              tmp12 = tmp13;
            } else {
              tmp12 = !tmp11 && !tmp7 && (arg3 ? tmp3 <= tmp26 : tmp3 < tmp26);
            }
          }
        }
        tmp20 = tmp2;
        if (tmp12) {
          sum = tmp2 + 1;
          tmp20 = tmp21;
        }
        tmp21 = tmp20;
        num2 = sum;
        tmp22 = tmp20;
      } while (sum < tmp20);
    }
    return min(tmp22, 4294967294);
  }
}
