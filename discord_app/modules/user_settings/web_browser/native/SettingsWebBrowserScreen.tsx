// discord_app/modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx
import importAllResult from "noop";
import { MobileUserSettings } from "MobileUserSettings";
import { jsx } from "jsxProd";
import { SettingLayout } from "../../../settings/native/renderer/SettingLayout.tsx";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function SettingsWebBrowserScreen() {
  const node = importAllResult.useMemo(() => {
    const items = [constants.SELECT_WEB_BROWSER];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(SettingLayout, { node });
});
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx");

export default memoResult;