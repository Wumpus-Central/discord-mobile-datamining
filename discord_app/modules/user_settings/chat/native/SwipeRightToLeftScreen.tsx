// === Module 15556: SwipeRightToLeftScreen ===

// Module 15556 (SwipeRightToLeftScreen)
import SettingBuilders from "SettingBuilders" /* 11540 */;
import SettingLayoutDefault from "SettingLayout" /* 14767 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(8027).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = noop.useMemo(() => {
    let obj = { sections: null };
    obj = { settings: null };
    const items = [constants.CHAT_GESTURES];
    obj.settings = items;
    const items1 = [obj];
    obj.sections = items1;
    return obj.createList(obj);
  }, []);
  return jsx(SettingLayoutDefault, { node });
};