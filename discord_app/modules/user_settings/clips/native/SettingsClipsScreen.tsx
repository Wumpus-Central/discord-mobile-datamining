// === Module 15098: SettingsClipsScreen ===

// Module 15098 (SettingsClipsScreen)
import SettingBuilders from "SettingBuilders" /* 11622 */;
import SettingLayoutDefault from "SettingLayout" /* 14810 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(8111).MobileUserSettings;
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