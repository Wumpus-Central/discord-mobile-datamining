// _runtime/14148___exportStarResult30.js
import getMultiInternalSlots from "14100_getMultiInternalSlots.js";

require = arg1;
const dependencyMap = arg6;
arg5.PartitionPattern = function PartitionPattern(arr) {
  const items = [];
  let index = arr.indexOf("{");
  let num = 0;
  if (index < arr.length) {
    let num4 = 0;
    num = 0;
    if (index > -1) {
      while (true) {
        let index1 = arr.indexOf("}", index);
        let tmp3 = require;
        let tmp4 = dependencyMap;
        let concat = "Invalid pattern ".concat;
        let tmp5 = index1 > index;
        let invariantResult = getMultiInternalSlots.invariant(tmp5, "Invalid pattern ".concat(arr));
        let tmp7 = num4;
        let tmp8 = index;
        if (index > num4) {
          let obj = { type: "literal", value: null };
          obj[1] = arr.substring(num4, index);
          arr = items.push(obj);
        }
        obj = { type: null, value: "Array" };
        obj[0] = arr.substring(index + 1, index1);
        arr = items.push(obj);
        let sum = index1 + 1;
        let index2 = arr.indexOf("{", sum);
        num = sum;
        if (index2 >= arr.length) {
          break;
        } else {
          num4 = sum;
          num = sum;
          index = index2;
          if (index2 <= -1) {
            break;
          }
        }
      }
    }
  }
  if (num < arr.length) {
    obj = { type: "literal", value: null };
    obj[1] = arr.substring(num, length);
    items.push(obj);
  }
  return items;
};
