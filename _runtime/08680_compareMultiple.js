// === Module 8680: compareMultiple ===

// Module 8680 (compareMultiple)
import compareAscending from "compareAscending" /* 8681 */;


export default function compareMultiple(criteria, index) {
  criteria = criteria.criteria;
  let num = 0;
  let num2 = 1;
  if (0 < criteria.length) {
    const tmp5 = compareAscending(criteria[num], tmp[num]);
    while (!tmp5) {
      num = num + num2;
    }
    let result = tmp5;
    if (num < tmp2) {
      if ("desc" == arg2[num]) {
        num2 = -1;
      }
      result = tmp5 * num2;
    }
    return result;
  }
  return criteria.index - index.index;
};