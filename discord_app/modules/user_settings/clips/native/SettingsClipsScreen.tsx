// === Module 14529: ClipsSettingsScreen ===

// Module 14529 (ClipsSettingsScreen)
import _modDef14194 from "module_14194" /* 14194 */;
import closure_3 from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7816 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/clips/native/SettingsClipsScreen.tsx");

export default function ClipsSettingsScreen() {
  const node = React.useMemo(() => {
    const items = [constants.CLIPS_OPT_OUT_OF_VOICE_RECORDING];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(_modDef14194, { node });
};