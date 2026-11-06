// === Module 18815: createICYMIStyles ===

// Module 18815 (createICYMIStyles)
import ICYMIContext from "ICYMIContext" /* 18816 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/createICYMIStyles.tsx");

export function createICYMIStyles(rect) {
  _require = require("createStyles").createStyles(rect);
  return function useStyles() {
    items = [...arguments];
    const useContext = noop.useContext;
    const items1 = [useContext(ICYMIContext.ICYMIContext), ...items];
    return closure_0(...items);
  };
}