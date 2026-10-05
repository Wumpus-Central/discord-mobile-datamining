// _runtime/00190_parseErrorStack.js
import _mod191 from "metro/00191__.js";
import parseHermesStack from "00192_parseHermesStack.js";

export default function parseErrorStack(arg0) {
  function convertHermesStack(tmp4Result) {
    let virtualOffset0Based;
    const items = [];
    const iter = tmp4Result.entries[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if ("FRAME" === nextResult.type) {
        let _location = tmp2.location;
        let tmp11 = _location;
        let functionName = tmp2.functionName;
        let tmp4 = "NATIVE" !== _location.type;
        if (tmp4) {
          tmp4 = "INTERNAL_BYTECODE" !== tmp11.type;
        }
        if (tmp4) {
          let obj = { methodName: functionName, file: null, lineNumber: null, column: virtualOffset0Based };
          ({ sourceUrl: obj.file, line1Based: obj.lineNumber } = tmp11);
          let push = items.push;
          if ("SOURCE" === tmp11.type) {
            virtualOffset0Based = tmp11.column1Based - 1;
          } else {
            virtualOffset0Based = tmp11.virtualOffset0Based;
          }
          let arr = push(obj);
        }
      }
      continue;
    }
    return items;
  }
  if (null == arg0) {
    return [];
  } else {
    let tmp6 = globalThis;
    const _Array = Array;
    let tmp3 = arg0;
    const obj2 = _mod191;
    if (!Array.isArray(arg0)) {
      let mapped;
      if (global.HermesInternal) {
        const tmp4Result = parseHermesStack;
        mapped = convertHermesStack(tmp4Result.default(arg0));
      } else {
        const parsed = obj2.parse(arg0);
        mapped = parsed.map((column) => {
          let diff;
          const obj = { column: diff };
          const merged = Object.assign(column);
          diff = null;
          if (null != column.column) {
            diff = column.column - 1;
          }
          return obj;
        });
      }
      tmp3 = mapped;
    }
    return tmp3;
  }
}
