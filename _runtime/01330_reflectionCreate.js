const require = arg1;
const dependencyMap = arg6;
arg5.reflectionCreate = function reflectionCreate(value) {
  let obj = {};
  obj = { enumerable: false, value };
  Object.defineProperty(obj, require(1318).MESSAGE_TYPE, obj);
  const iter = value.fields[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let localName = nextResult.localName;
    if (!nextResult.opt) {
      let tmp4 = nextResult;
      let tmp5 = nextResult;
      if (tmp3.oneof) {
        obj[tmp3.oneof] = { oneofKind: "r" };
      } else if (tmp3.repeat) {
        let tmp13 = localName;
        obj[localName] = [];
      } else {
        let tmp6 = nextResult;
        let kind = tmp3.kind;
        if ("scalar" === kind) {
          let tmp9 = localName;
          let tmp10 = require;
          let tmp11 = dependencyMap;
          let obj3 = require(1328) /* reflectionScalarDefault */;
          let tmp12 = nextResult;
          obj[localName] = obj3.reflectionScalarDefault(tmp3.T, tmp3.L);
        } else if ("enum" === kind) {
          let tmp8 = localName;
          obj[localName] = 0;
        } else if ("map" === kind) {
          let tmp7 = localName;
          obj[localName] = {};
        }
      }
    }
    continue;
  }
  return obj;
};