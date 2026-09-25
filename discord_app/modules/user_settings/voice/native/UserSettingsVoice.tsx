// === Module 9423: UserSettingsVoice ===

// Module 9423 (UserSettingsVoice)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4825 */;
import Stack_Stack from "Stack/Stack" /* 5272 */;
import TableRowGroup from "TableRowGroup" /* 5994 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6539 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 9426 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 9427 */;
import UserSettingsVoiceInputOptionsDefault from "UserSettingsVoiceInputOptions" /* 9428 */;
import UserSettingsVoiceOutputOptionsDefault from "UserSettingsVoiceOutputOptions" /* 9430 */;
import UserSettingsSoundboardVolumeDefault from "UserSettingsSoundboardVolume" /* 9434 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 9435 */;
import UserSettingsVoiceProcessingDefault from "UserSettingsVoiceProcessing" /* 9437 */;
import VideoBackgroundOptionsRadioGroupDefault from "VideoBackgroundOptionsRadioGroup" /* 9445 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isMobileOverlaySupported = fn(9424).isMobileOverlaySupported;
const guideURL = fn(9425).USER_SETTINGS_VOICE_GUILD_URL;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let closure_8 = createStyles.createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default function UserSettingsVoice() {
  const tmp = closure_8();
  let nonContextualStreamOutputPresent = MobileAudioOutputExperimentDefault.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  const tmp4 = useIsVideoBackgroundSupportedDefault();
  const obj2 = { style: tmp.container, children: null };
  const items = [timestampProducer(UserSettingsVoiceInputOptionsDefault, {}), , , , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = timestampProducer(UserSettingsVoiceOutputOptionsDefault, {});
  }
  items[1] = nonContextualStreamOutputPresent;
  const obj3 = { style: tmp.tableRow, variant: "text-sm/medium", children: null };
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
  obj2.children = React5(Stack_Stack.Stack, obj6);
  return timestampProducer(View, obj2);
};
export const UserSettingsTableRowGroup = function UserSettingsTableRowGroup(arg0) {
  const merged = Object.assign(arg0);
  return timestampProducer(TableRowGroup.TableRowGroup, {});
};