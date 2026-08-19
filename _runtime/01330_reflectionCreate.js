// === Module 1330: reflectionCreate ===

// Module 1330 (reflectionCreate)
import _mod1318 from "module_1318" /* 1318 */;
import reflectionScalarDefault from "reflectionScalarDefault" /* 1328 */;

require = arg1;
const dependencyMap = arg6;
arg5.reflectionCreate = function reflectionCreate(value) {
  const obj = { enumerable: false, value };
  Object.defineProperty(obj, _mod1318.MESSAGE_TYPE, obj);
  const iter = value.fields[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let localName = nextResult.localName;
    if (!nextResult.opt) {
      if (tmp3.oneof) {
        obj[tmp3.oneof] = { oneofKind: "r" };
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