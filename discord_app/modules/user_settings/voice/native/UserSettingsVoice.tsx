// === Module 10000: UserSettingsVoice ===

// Module 10000 (UserSettingsVoice)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4442 */;
import Stack from "Stack" /* 4891 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 5518 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5957 */;
import apexExperimentDefault from "apexExperiment" /* 10003 */;
import handleInputModePressDefault from "handleInputModePress" /* 10004 */;
import SoundboardVolumeDefault from "SoundboardVolume" /* 10010 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 10011 */;
import VoiceProcessingOptionsDefault from "VoiceProcessingOptions" /* 10013 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { isMobileOverlaySupported } from "getUserAgnosticState" /* 10001 */;
import { USER_SETTINGS_VOICE_GUILD_URL as closure_5 } from "combined" /* 10002 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

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
    nonContextualStreamOutputPresent = tmp4(tmp2(10006), {});
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