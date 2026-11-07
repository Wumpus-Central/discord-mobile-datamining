// === Module 12106: UserSettingsVoice ===

// Module 12106 (UserSettingsVoice)
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5751 */;
import Stack_Stack from "Stack/Stack" /* 6159 */;
import TableRowGroup from "TableRowGroup" /* 7126 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7355 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 12109 */;
import useIsVideoBackgroundEnabledDefault from "useIsVideoBackgroundEnabled" /* 12110 */;
import UserSettingsVoiceInputOptionsDefault from "UserSettingsVoiceInputOptions" /* 12112 */;
import UserSettingsVoiceOutputOptionsDefault from "UserSettingsVoiceOutputOptions" /* 12114 */;
import UserSettingsSoundboardVolumeDefault from "UserSettingsSoundboardVolume" /* 12118 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 12119 */;
import UserSettingsVoiceProcessingDefault from "UserSettingsVoiceProcessing" /* 12121 */;
import VideoBackgroundOptionsRadioGroupDefault from "VideoBackgroundOptionsRadioGroup" /* 12129 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isMobileOverlaySupported = fn(12107).isMobileOverlaySupported;
const guideURL = fn(12108).USER_SETTINGS_VOICE_GUILD_URL;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5140);
let closure_8 = createStyles.createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default function UserSettingsVoice() {
  const tmp = closure_8();
  let nonContextualStreamOutputPresent = MobileAudioOutputExperimentDefault.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  const tmp4 = useIsVideoBackgroundEnabledDefault("UserSettingsVoice");
  const obj2 = { style: tmp.container, children: null };
  items = [timestampProducer(UserSettingsVoiceInputOptionsDefault, {}), , , , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = timestampProducer(UserSettingsVoiceOutputOptionsDefault, {});
  }
  items[1] = nonContextualStreamOutputPresent;
  const obj3 = { style: tmp.tableRow, variant: "body-sm/medium", children: null };
  const intl = util.intl;
  obj3.children = intl.format(util.t["V+B3FH"], { guideURL });
  items[2] = timestampProducer(Text_Text.Text, obj3);
  items[3] = timestampProducer(UserSettingsSoundboardVolumeDefault, {});
  const obj4 = { guideURL };
  items[4] = isMobileOverlaySupported() && timestampProducer(UserSettingsVoiceOverlayDefault, {});
  items[5] = timestampProducer(UserSettingsVoiceProcessingDefault, {});
  let tmp5Result = tmp4;
  if (tmp4) {
    const obj5 = { title: null };
    const intl2 = util.intl;
    obj5.title = intl2.string(util.t.lZTUPs);
    tmp5Result = timestampProducer(VideoBackgroundOptionsRadioGroupDefault, obj5);
    const tmp2Result = VideoBackgroundOptionsRadioGroupDefault;
  }
  const obj6 = { spacing: 24, children: null };
  items[6] = tmp5Result;
  items[7] = timestampProducer(common_SafeAreaView.SafeAreaPaddingView, { bottom: true });
  obj6.children = items;
  obj2.children = metroImportDefault(Stack_Stack.Stack, obj6);
  return timestampProducer(View, obj2);
};
export function UserSettingsTableRowGroup(arg0) {
  const merged = Object.assign(arg0);
  return timestampProducer(TableRowGroup.TableRowGroup, {});
}