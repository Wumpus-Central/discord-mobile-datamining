// === Module 11005: UserSettingsVoice ===

// Module 11005 (UserSettingsVoice)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4440 */;
import Stack from "Stack" /* 4877 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 5500 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5939 */;
import apexExperimentDefault from "apexExperiment" /* 11008 */;
import handleInputModePressDefault from "handleInputModePress" /* 11009 */;
import SoundboardVolumeDefault from "SoundboardVolume" /* 11015 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 11016 */;
import VoiceProcessingOptionsDefault from "VoiceProcessingOptions" /* 11018 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { isMobileOverlaySupported } from "getUserAgnosticState" /* 11006 */;
import { USER_SETTINGS_VOICE_GUILD_URL as closure_5 } from "combined" /* 11007 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
const result = require("set").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default function UserSettingsVoice() {
  const tmp = callback2();
  let obj = apexExperimentDefault;
  let nonContextualStreamOutputPresent = obj.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  obj = { style: tmp.container, children: null };
  const items = [callback(handleInputModePressDefault, {}), , , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = tmp4(tmp2(11011), {});
  }
  items[1] = nonContextualStreamOutputPresent;
  obj = { style: tmp.tableRow, variant: "text-sm/medium", children: null };
  const intl = tmp7(1236).intl;
  obj[2] = intl.format(getSystemLocale.t["V+B3FH"], { guideURL: closure_5 });
  items[2] = callback(Text.Text, obj);
  items[3] = callback(SoundboardVolumeDefault, {});
  const obj2 = { spacing: 24, children: null };
  items[4] = isMobileOverlaySupported() && callback(UserSettingsVoiceOverlayDefault, {});
  items[5] = callback(VoiceProcessingOptionsDefault, {});
  items[6] = callback(SafeAreaPaddingView.SafeAreaPaddingView, { bottom: true });
  obj2[1] = items;
  obj[1] = closure_7(Stack.Stack, obj2);
  return callback(View, obj);
};
export const UserSettingsTableRowGroup = function UserSettingsTableRowGroup(arg0) {
  const merged = Object.assign(arg0);
  return callback(TableRowGroupTitle.TableRowGroup, {});
};