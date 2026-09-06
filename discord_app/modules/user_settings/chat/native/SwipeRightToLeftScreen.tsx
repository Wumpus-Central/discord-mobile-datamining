// discord_app/modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const MobileUserSettings = fn(7975).MobileUserSettings;
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
}
