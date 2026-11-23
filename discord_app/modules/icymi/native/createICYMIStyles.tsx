// === Module 18093: createICYMIStyles ===

// Module 18093 (createICYMIStyles)
import ICYMIContext from "ICYMIContext" /* 18094 */;
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