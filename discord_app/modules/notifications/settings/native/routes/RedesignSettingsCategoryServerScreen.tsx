// discord_app/modules/notifications/settings/native/routes/RedesignSettingsCategoryServerScreen.tsx
import _modDef14689 from "../../../../settings/native/renderer/SettingLayout.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

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
const result = require("set").fileFinishedImporting(
  "modules/notifications/settings/native/routes/RedesignSettingsCategoryServerScreen.tsx",
);

export default memoResult;
