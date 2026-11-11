// === Module 17983: SwipeRightToLeftScreen ===

// Module 17983 (SwipeRightToLeftScreen)
import SettingBuilders from "SettingBuilders" /* 12317 */;
import SettingLayoutDefault from "SettingLayout" /* 17095 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(9136).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj3 = { settings: null };
    items = [constants.CHAT_GESTURES];
    obj3.settings = items;
    const items1 = [obj3];
    obj2.sections = items1;
    return SettingBuilders.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
};