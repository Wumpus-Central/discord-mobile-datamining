// === Module 15538: SwipeRightToLeftScreen ===

// Module 15538 (SwipeRightToLeftScreen)
import SettingBuilders from "SettingBuilders" /* 11562 */;
import SettingLayoutDefault from "SettingLayout" /* 14741 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(8049).MobileUserSettings;
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