// === Module 5416: callOnce ===

// Module 5416 (callOnce)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("utils/callOnce.tsx");

export function callOnce(closure_1_1) {
  closure_0 = closure_1_1;
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