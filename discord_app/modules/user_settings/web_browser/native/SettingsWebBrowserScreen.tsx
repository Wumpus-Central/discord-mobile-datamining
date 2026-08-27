// === Module 15023: ? ===

// Module 15023
import _modDef14194 from "module_14194" /* 14194 */;
import importAllResult from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7816 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function SettingsWebBrowserScreen() {
  const node = importAllResult.useMemo(() => {
    const items = [constants.SELECT_WEB_BROWSER];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(_modDef14194, { node });
});
const result = require("set").fileFinishedImporting("modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx");

export default memoResult;