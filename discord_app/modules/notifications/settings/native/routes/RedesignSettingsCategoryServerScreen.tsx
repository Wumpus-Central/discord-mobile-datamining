// === Module 15921: ? ===

// Module 15921
import _modDef14689 from "module_14689" /* 14689 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(() => {
  const node = importAllResult.useMemo(() => {
    let obj = callback(11468);
    obj = { sections: null };
    const items = [callback(15918).buildCategoryServerSettingsSection()];
    obj[0] = items;
    return obj.createList(obj);
  }, []);
  return jsx(_modDef14689, { node });
});
const result = require("set").fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryServerScreen.tsx");

export default memoResult;