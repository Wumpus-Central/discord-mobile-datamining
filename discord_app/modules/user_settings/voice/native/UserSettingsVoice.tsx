// === Module 9979: UserSettingsVoice ===

// Module 9979 (UserSettingsVoice)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 9982 */;
import UserSettingsVoiceInputOptionsDefault from "UserSettingsVoiceInputOptions" /* 9983 */;
import UserSettingsVoiceOutputOptionsDefault from "UserSettingsVoiceOutputOptions" /* 9985 */;
import UserSettingsSoundboardVolumeDefault from "UserSettingsSoundboardVolume" /* 9989 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 9990 */;
import UserSettingsVoiceProcessingDefault from "UserSettingsVoiceProcessing" /* 9992 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isMobileOverlaySupported = fn(9980).isMobileOverlaySupported;
const guideURL = fn(9981).USER_SETTINGS_VOICE_GUILD_URL;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default function UserSettingsVoice() {
  const tmp = closure_8();
  let obj = MobileAudioOutputExperimentDefault;
  let nonContextualStreamOutputPresent = obj.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  obj = { style: tmp.container, children: null };
  const items = [timestampProducer(UserSettingsVoiceInputOptionsDefault, {}), , , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = timestampProducer(UserSettingsVoiceOutputOptionsDefault, {});
  }
  items[1] = nonContextualStreamOutputPresent;
  obj = { style: tmp.tableRow, variant: "text-sm/medium", children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t["V+B3FH"], { guideURL });
  items[2] = timestampProducer(Text_Text.Text, obj);
  items[3] = timestampProducer(UserSettingsSoundboardVolumeDefault, {});
  const obj2 = { spacing: 24, children: null };
  items[4] = isMobileOverlaySupported() && timestampProducer(UserSettingsVoiceOverlayDefault, {});
  items[5] = timestampProducer(UserSettingsVoiceProcessingDefault, {});
  items[6] = timestampProducer(common_SafeAreaView.SafeAreaPaddingView, { bottom: true });
  obj2.children = items;
  obj.children = React5(Stack_Stack.Stack, obj2);
  return timestampProducer(View, obj);
};
export const UserSettingsTableRowGroup = function UserSettingsTableRowGroup(arg0) {
  const merged = Object.assign(arg0);
  return timestampProducer(TableRowGroup.TableRowGroup, {});
};