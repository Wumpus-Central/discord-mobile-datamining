// _runtime/00190_parseErrorStack.js
import parse from "00191_parse.js";

const global = arg0;
require = arg1;
const dependencyMap = arg6;
arg5.default = function parseErrorStack(arg0) {
  if (null == arg0) {
    return [];
  } else {
    let defaultResult = require;
    let convertHermesStack = dependencyMap;
    const _Array = Array;
    if (Array.isArray(arg0)) {
      return arg0;
    } else if (global.HermesInternal) {
      defaultResult = defaultResult(192).default(arg0);
      convertHermesStack = function convertHermesStack(defaultResult) {
        const items = [];
        const iter = defaultResult.entries[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          if ("FRAME" === nextResult.type) {
            let _location = tmp2.location;
            let tmp10 = _location;
            let functionName = tmp2.functionName;
            let tmp4 = "NATIVE" !== _location.type;
            if (tmp4) {
              tmp4 = "INTERNAL_BYTECODE" !== tmp10.type;
            }
            if (tmp4) {
              let obj = { methodName: null, file: null, lineNumber: null, column: null };
              obj[0] = functionName;
              ({ sourceUrl: obj[1], line1Based: obj[2] } = tmp10);
              if ("SOURCE" === tmp10.type) {
                let virtualOffset0Based = tmp10.column1Based - 1;
              } else {
                virtualOffset0Based = tmp10.virtualOffset0Based;
              }
              obj[3] = virtualOffset0Based;
              obj = items.push(obj);
            }
          }
          continue;
        }
        return items;
      };
      let convertHermesStackResult = convertHermesStack(defaultResult);
      const defaultResultResult = defaultResult(192);
    } else {
      const parsed = obj2.parse(arg0);
      convertHermesStackResult = parsed.map((item, index) => {
        const obj = {};
        const merged = Object.assign(item);
        let diff = null;
        if (null != item.column) {
          diff = item.column - 1;
        }
        obj.column = diff;
        return obj;
      });
    }
    obj2 = parse;
  }
};