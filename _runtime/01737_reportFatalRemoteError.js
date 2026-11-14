// === Module 1737: reportFatalRemoteError ===

// Module 1737 (reportFatalRemoteError)
import _slicedToArray from "module_32" /* 32 */;

function reportFatalRemoteError(stack, arg1) {
  ({ message, name } = stack);
  const error = new Error("[Worklets]");
  error.message = message;
  let replaced;
  let tmp2;
  if ("" !== stack.stack) {
    if (undefined !== str) {
      const match = str.match(/worklet_(\d+):(\d+):(\d+)/g);
      replaced = str;
      if (match != null) {
        const item = match.forEach((item) => {
          const parts = item.split(/:|_/);
          replaced = globalThis;
          let concat = _slicedToArray;
          const tmp = _slicedToArray(parts.map(Number), 4);
          let str = tmp[3];
          value = map.get(tmp[1]);
          if (value) {
            const combined = concat(value, 3);
            let first = combined[0];
            let tmp4 = combined[2];
            let first1;
            if (first.stack != null) {
              first = str2.split("\n");
              if (first != null) {
                first1 = first[0];
              }
            }
            if (!first1) {
              items = ["unknown", 0, 0];
              const combined1 = concat(items, 3);
              const sum = str + combined1[2] + tmp4;
              tmp4 = replaced;
              concat = replaced.HermesInternal.concat;
              str = ":";
              replaced = replaced.replace(item, concat(combined1[0], ":", tmp[2] + combined1[1] + combined[1], ":", sum));
            } else {
              first = /@([^@]+):(\d+):(\d+)/.exec(first1);
              const obj2 = /@([^@]+):(\d+):(\d+)/;
            }
            const combined2 = concat(first, 4);
            first = [combined2[1], replaced.Number(combined2[2]), replaced.Number(combined2[3])];
            items = first;
          }
        });
      }
      tmp2 = replaced;
    }
  }
  error.stack = tmp2;
  error.name = name;
  if (arg1) {
    throw error;
  } else {
    const _globalThis = globalThis;
    const _ErrorUtils = ErrorUtils;
    _ErrorUtils.reportFatalError(error);
  }
}
const map = new Map();

export function registerWorkletStackDetails(arg0, arg1) {
  const result = map.set(arg0, arg1);
}
export { reportFatalRemoteError };
export function registerReportFatalRemoteError() {
  globalThis.__reportFatalRemoteError = reportFatalRemoteError;
}