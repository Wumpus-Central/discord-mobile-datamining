// === Module 14974: SettingsClipsScreen ===

// Module 14974 (SettingsClipsScreen)
import SettingBuilders from "SettingBuilders" /* 11468 */;
import SettingLayoutDefault from "SettingLayout" /* 14689 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(7975).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/clips/native/SettingsClipsScreen.tsx");

export default function ClipsSettingsScreen() {
  const node = noop.useMemo(() => {
    const obj = { settings: null };
    const items = [constants.CLIPS_OPT_OUT_OF_VOICE_RECORDING];
    obj.settings = items;
    const sections = [obj];
    return SettingBuilders.createList({ sections });
  }, []);
  return jsx(SettingLayoutDefault, { node });
};