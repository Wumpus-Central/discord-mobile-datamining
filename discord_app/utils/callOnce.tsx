// === Module 7670: callOnce ===

// Module 7670 (callOnce)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/callOnce.tsx");

export function callOnce(arg0) {
  closure_0 = arg0;
  c2 = false;
  return () => {
    const items = [...arguments];
    if (!c2) {
      c2 = true;
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      closure_1 = HermesBuiltin.apply(items1, undefined);
    }
    return closure_1;
  };
}