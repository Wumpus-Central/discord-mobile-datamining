// _runtime/14254_PartitionPattern.js
import _mod14206 from "metro/14206__.js";

require = arg1;
const dependencyMap = arg6;

export const PartitionPattern = function PartitionPattern(arr) {
  const items = [];
  let index = arr.indexOf("{");
  let num = 0;
  if (index < arr.length) {
    let num4 = 0;
    num = 0;
    if (index > -1) {
      while (true) {
        let index1 = arr.indexOf("}", index);
        let concat = "Invalid pattern ".concat;
        let tmp5 = index1 > index;
        let invariantResult = _mod14206.invariant(tmp5, "Invalid pattern ".concat(arr));
        if (index > num4) {
          let obj = { type: "literal", value: arr.substring(num4, index) };
          arr = items.push(obj);
        }
        obj = { type: arr.substring(index + 1, index1), value: "a" };
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
    obj = { type: "literal", value: arr.substring(num, length) };
    items.push(obj);
  }
  return items;
};
