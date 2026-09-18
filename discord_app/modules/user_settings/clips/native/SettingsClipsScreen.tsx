// === Module 15192: SettingsClipsScreen ===

// Module 15192 (SettingsClipsScreen)
import SettingBuilders from "SettingBuilders" /* 11714 */;
import SettingLayoutDefault from "SettingLayout" /* 14904 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(8194).MobileUserSettings;
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