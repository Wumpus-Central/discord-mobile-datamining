// discord_app/modules/icymi/native/createICYMIStyles.tsx
import ICYMIContext from "ICYMIContext.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
