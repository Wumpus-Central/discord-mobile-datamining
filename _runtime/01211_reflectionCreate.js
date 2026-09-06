// _runtime/01211_reflectionCreate.js
import MESSAGE_TYPE from "01199_MESSAGE_TYPE.js";
import reflectionScalarDefault from "01209_reflectionScalarDefault.js";

require = arg1;
const dependencyMap = arg6;

export const reflectionCreate = function reflectionCreate(value) {
  let obj = {};
  obj = { enumerable: false, value };
  Object.defineProperty(obj, MESSAGE_TYPE.MESSAGE_TYPE, obj);
  const iter = value.fields[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let localName = nextResult.localName;
    if (!nextResult.opt) {
      if (tmp3.oneof) {
        obj[tmp3.oneof] = { oneofKind: "Array" };
      } else if (tmp3.repeat) {
        obj[localName] = [];
      } else {
        let kind = tmp3.kind;
        if ("scalar" === kind) {
          let obj3 = reflectionScalarDefault;
          obj[localName] = obj3.reflectionScalarDefault(tmp3.T, tmp3.L);
        } else if ("enum" === kind) {
          obj[localName] = 0;
        } else if ("map" === kind) {
          obj[localName] = {};
        }
      }
    }
    continue;
  }
  return obj;
};
