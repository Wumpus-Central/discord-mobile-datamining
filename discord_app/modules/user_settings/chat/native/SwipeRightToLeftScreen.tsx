// === Module 15020: UserSettingsSwipeRightToLeft ===

// Module 15020 (UserSettingsSwipeRightToLeft)
import _modDef14194 from "module_14194" /* 14194 */;
import closure_3 from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7816 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = React.useMemo(() => {
    const items = [constants.CHAT_GESTURES];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(_modDef14194, { node });
};