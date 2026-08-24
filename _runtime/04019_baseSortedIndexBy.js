// === Module 4019: baseSortedIndexBy ===

// Module 4019 (baseSortedIndexBy)
import isSymbol from "isSymbol" /* 638 */;


export default function baseSortedIndexBy(arg0, arg1, arg2, arg3) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (0 === num) {
    return 0;
  } else {
    const tmp27 = arg2(arg1);
    let tmp22 = num;
    let num2 = 0;
    let tmp23 = num;
    if (0 < num) {
      while (true) {
        let tmp = floor;
        let tmp2 = floor((num2 + tmp22) / 2);
        let tmp3 = arg2(arg0[tmp2]);
        let tmp4 = tmp3 == tmp3;
        let tmp5 = require;
        let tmp6 = dependencyMap;
        let tmp7 = isSymbol(tmp3);
        let tmp8 = tmp22;
        let sum = num2;
        if (tmp28) {
          let tmp20 = arg3;
          if (!arg3) {
            tmp20 = tmp4;
          }
          let tmp12 = tmp20;
        } else {
          let tmp10 = undefined !== tmp3;
          if (undefined === tmp27) {
            let tmp18 = tmp4;
            if (tmp4) {
              let tmp19 = arg3;
              if (!arg3) {
                tmp19 = tmp10;
              }
              tmp18 = tmp19;
            }
            tmp12 = tmp18;
          } else {
            let tmp11 = null === tmp3;
            if (null === tmp27) {
              let tmp16 = tmp4;
              if (tmp4) {
                tmp16 = tmp10;
              }
              if (tmp16) {
                let tmp17 = arg3;
                if (!arg3) {
                  tmp17 = !tmp11;
                }
                tmp16 = tmp17;
              }
              tmp12 = tmp16;
            } else if (tmp31) {
              let tmp14 = tmp4;
              if (tmp4) {
                tmp14 = tmp10;
              }
              if (tmp14) {
                tmp14 = !tmp11;
              }
              if (tmp14) {
                let tmp15 = arg3;
                if (!arg3) {
                  tmp15 = !tmp7;
                }
                tmp14 = tmp15;
              }
              tmp12 = tmp14;
            } else {
              tmp12 = !tmp11;
              if (!tmp11) {
                tmp12 = !tmp7;
              }
              if (tmp12) {
                break;
              }
            }
          }
        }
        let tmp21 = tmp2;
        if (tmp12) {
          sum = tmp2 + 1;
          tmp21 = tmp22;
        }
        tmp22 = tmp21;
        num2 = sum;
        tmp23 = tmp21;
      }
    }
    return min(tmp23, 4294967294);
  }
};