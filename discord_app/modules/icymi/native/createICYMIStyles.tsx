// discord_app/modules/icymi/native/createICYMIStyles.tsx
import closure_2 from "../../../../_runtime/00019_noop.js";
import { createCacheKey } from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/icymi/native/createICYMIStyles.tsx");

export const createICYMIStyles = function createICYMIStyles(createCacheKey) {
  _require = _createCacheKey.createStyles(createCacheKey);
  return () => {
    const items = [...arguments];
    const useContext = closure_1_2.useContext;
    const items1 = [useContext(callback(closure_1_1[2]).ICYMIContext), ...items];
    return callback(...items);
  };
};