// discord_app/utils/callOnce.tsx
import obj132 from "../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("utils/callOnce.tsx");

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