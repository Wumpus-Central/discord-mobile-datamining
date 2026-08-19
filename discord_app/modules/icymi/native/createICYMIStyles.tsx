// discord_app/modules/icymi/native/createICYMIStyles.tsx
import noop from "../../../../_runtime/00019_noop.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/icymi/native/createICYMIStyles.tsx");

export const createICYMIStyles = function createICYMIStyles(createCacheKey) {
  _require = require("../../../design/components/Styles/native/createStyles.tsx").createStyles(createCacheKey);
  return () => {
    const items = [...arguments];
    const useContext = closure_1_2.useContext;
    const items1 = [useContext(callback(dependencyMap[2]).ICYMIContext), ...items];
    return callback(...items);
  };
};