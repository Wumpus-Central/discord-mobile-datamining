// === Module 16452: createICYMIStyles ===

// Module 16452 (createICYMIStyles)
import ICYMIContext from "ICYMIContext" /* 16453 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/createICYMIStyles.tsx");

export const createICYMIStyles = function createICYMIStyles(createStyles) {
  _require = require("createStyles").createStyles(createStyles);
  return () => {
    const items = [...arguments];
    const useContext = noop.useContext;
    const items1 = [useContext(ICYMIContext.ICYMIContext), ...items];
    return closure_0(...items);
  };
};