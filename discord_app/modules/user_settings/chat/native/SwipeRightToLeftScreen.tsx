// discord_app/modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx
import _modDef13991 from "../../../settings/native/renderer/SettingLayout.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { MobileUserSettings } from "../../core/native/SettingsConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = React.useMemo(() => {
    const items = [constants.CHAT_GESTURES];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(_modDef13991, { node });
};