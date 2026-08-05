// _runtime/00190_parseErrorStack.js
const global = arg0;
const require = arg1;
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
            let tmp9 = nextResult;
            let _location = tmp2.location;
            let tmp10 = _location;
            let functionName = tmp2.functionName;
            let tmp4 = "NATIVE" !== _location.type;
            if (tmp4) {
              let tmp3 = _location;
              tmp4 = "INTERNAL_BYTECODE" !== tmp10.type;
            }
            if (tmp4) {
              let obj = { methodName: null, file: null, lineNumber: null, column: null };
              let tmp5 = functionName;
              obj[0] = functionName;
              let tmp6 = _location;
              ({ sourceUrl: obj[1], line1Based: obj[2] } = tmp10);
              if ("SOURCE" === tmp10.type) {
                let tmp8 = _location;
                let virtualOffset0Based = tmp10.column1Based - 1;
              } else {
                let tmp7 = _location;
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
      convertHermesStackResult = parsed.map((column) => {
        const obj = {};
        const merged = Object.assign(column);
        let diff = null;
        if (null != column.column) {
          diff = column.column - 1;
        }
        obj.column = diff;
        return obj;
      });
    }
    obj2 = require("00191_parse.js") /* parse */;
  }
};