// === Module 16452: createICYMIStyles ===

// Module 16452 (createICYMIStyles)
import closure_2 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/icymi/native/createICYMIStyles.tsx");

export const createICYMIStyles = function createICYMIStyles(createCacheKey) {
  _require = _require(4560).createStyles(createCacheKey);
  return () => {
    const items = [...arguments];
    const useContext = closure_1_2.useContext;
    const items1 = [useContext(callback(closure_1_1[2]).ICYMIContext), ...items];
    return callback(...items);
  };
};