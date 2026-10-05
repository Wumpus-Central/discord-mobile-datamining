// _runtime/00544_baseKeys.js
import isPrototype from "00545_isPrototype.js";
import overArg from "00546_overArg.js";

export default function baseKeys(arg0) {
  if (isPrototype(arg0)) {
    const items = [];
    const _Object = Object;
    for (const key10016 in Object(arg0)) {
      let callResult = hasOwnProperty.call(arg0, key10016) && "constructor" != key10016;
      if (!callResult) {
        continue;
      } else {
        let arr = items.push(key10016);
        continue;
      }
      continue;
    }
    return items;
  } else {
    return overArg(arg0);
  }
}
