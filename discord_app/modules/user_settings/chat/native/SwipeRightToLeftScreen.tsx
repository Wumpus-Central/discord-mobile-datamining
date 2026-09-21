// === Module 15749: SwipeRightToLeftScreen ===

// Module 15749 (SwipeRightToLeftScreen)
import SettingBuilders from "SettingBuilders" /* 11725 */;
import SettingLayoutDefault from "SettingLayout" /* 14964 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(8233).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj3 = { settings: null };
    const items = [constants.CHAT_GESTURES];
    obj3.settings = items;
    const items1 = [obj3];
    obj2.sections = items1;
    return SettingBuilders.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
};