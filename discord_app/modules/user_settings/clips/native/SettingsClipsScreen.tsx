// discord_app/modules/user_settings/clips/native/SettingsClipsScreen.tsx
import _modDef14578 from "../../../settings/native/renderer/SettingLayout.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { MobileUserSettings } from "../../core/native/SettingsConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/clips/native/SettingsClipsScreen.tsx");

export default function ClipsSettingsScreen() {
  const node = React.useMemo(() => {
    const items = [constants.CLIPS_OPT_OUT_OF_VOICE_RECORDING];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(_modDef14578, { node });
}
