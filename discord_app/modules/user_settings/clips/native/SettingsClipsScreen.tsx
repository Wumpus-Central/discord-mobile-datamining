// === Module 15029: SettingsClipsScreen ===

// Module 15029 (SettingsClipsScreen)
import SettingBuilders from "SettingBuilders" /* 11562 */;
import SettingLayoutDefault from "SettingLayout" /* 14741 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(8049).MobileUserSettings;
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