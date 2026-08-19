// === Module 15708: createICYMIStyles ===

// Module 15708 (createICYMIStyles)
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/icymi/native/createICYMIStyles.tsx");

export const createICYMIStyles = function createICYMIStyles(createCacheKey) {
  _require = _require(4661).createStyles(createCacheKey);
  return () => {
    const items = [...arguments];
    const useContext = closure_1_2.useContext;
    const items1 = [useContext(callback(dependencyMap[2]).ICYMIContext), ...items];
    return callback(...items);
  };
};