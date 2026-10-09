// === Module 11032: UserSettingsVoice ===

// Module 11032 (UserSettingsVoice)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import Stack_Stack from "Stack/Stack" /* 5374 */;
import TableRowGroup from "TableRowGroup" /* 6269 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6810 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 11035 */;
import useIsVideoBackgroundEnabledDefault from "useIsVideoBackgroundEnabled" /* 11036 */;
import UserSettingsVoiceInputOptionsDefault from "UserSettingsVoiceInputOptions" /* 11038 */;
import UserSettingsVoiceOutputOptionsDefault from "UserSettingsVoiceOutputOptions" /* 11040 */;
import UserSettingsSoundboardVolumeDefault from "UserSettingsSoundboardVolume" /* 11044 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 11045 */;
import UserSettingsVoiceProcessingDefault from "UserSettingsVoiceProcessing" /* 11047 */;
import VideoBackgroundOptionsRadioGroupDefault from "VideoBackgroundOptionsRadioGroup" /* 11055 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isMobileOverlaySupported = fn(11033).isMobileOverlaySupported;
const guideURL = fn(11034).USER_SETTINGS_VOICE_GUILD_URL;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let closure_8 = createStyles.createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
fn(558);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsTableRowGroup(arg0) {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    const tmp9 = timestampProducer(TableRowGroup.TableRowGroup, obj2);
    cResult[0] = arg0;
    cResult[1] = tmp9;
    let tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function UserSettingsTableRowGroup(arg0) {
  const merged = Object.assign(arg0);
  return timestampProducer(TableRowGroup.TableRowGroup, {});
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsVoice() {
  const cResult = c.c(20);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "NewUserSettingsVoice" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const nonContextualStreamOutputPresent = MobileAudioOutputExperimentDefault.useConfig(first).nonContextualStreamOutputPresent;
  const tmp7 = useIsVideoBackgroundEnabledDefault("UserSettingsVoice");
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = timestampProducer(UserSettingsVoiceInputOptionsDefault, {});
    cResult[1] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== nonContextualStreamOutputPresent) {
    let tmp12 = nonContextualStreamOutputPresent;
    if (nonContextualStreamOutputPresent) {
      tmp12 = timestampProducer(UserSettingsVoiceOutputOptionsDefault, {});
    }
    cResult[2] = nonContextualStreamOutputPresent;
    cResult[3] = tmp12;
    let tmp11 = tmp12;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const obj4 = { guideURL };
    const formatResult = intl.format(util.t["V+B3FH"], obj4);
    cResult[4] = formatResult;
    let tmp14 = formatResult;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== tmp4.tableRow) {
    const obj5 = { style: tmp4.tableRow, variant: "text-sm/medium", children: tmp14 };
    const tmp19 = timestampProducer(Text_Text.Text, obj5);
    cResult[5] = tmp4.tableRow;
    cResult[6] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp24 = timestampProducer(UserSettingsSoundboardVolumeDefault, {});
    const tmp26 = isMobileOverlaySupported() && timestampProducer(UserSettingsVoiceOverlayDefault, {});
    const tmp23Result = timestampProducer(UserSettingsVoiceProcessingDefault, {});
    cResult[7] = tmp24;
    cResult[8] = tmp26;
    cResult[9] = tmp23Result;
    let tmp21 = tmp26;
    let tmp22 = tmp23Result;
    let tmp20 = tmp24;
  } else {
    tmp20 = cResult[7];
    tmp21 = cResult[8];
    tmp22 = cResult[9];
  }
  if (cResult[10] !== tmp7) {
    let tmp29 = tmp7;
    if (tmp7) {
      const obj6 = { title: null };
      const intl2 = util.intl;
      obj6.title = intl2.string(util.t.lZTUPs);
      tmp29 = timestampProducer(VideoBackgroundOptionsRadioGroupDefault, obj6);
      const tmp6Result = VideoBackgroundOptionsRadioGroupDefault;
    }
    cResult[10] = tmp7;
    cResult[11] = tmp29;
    let tmp28 = tmp29;
  } else {
    tmp28 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp34 = timestampProducer(common_SafeAreaView.SafeAreaPaddingView, { bottom: true });
    cResult[12] = tmp34;
    let tmp32 = tmp34;
  } else {
    tmp32 = cResult[12];
  }
  if (cResult[13] === tmp28) {
    if (cResult[14] === tmp11) {
      if (cResult[15] === tmp17) {
        let tmp35 = cResult[16];
      }
      if (cResult[17] === tmp4.container) {
        if (cResult[18] === tmp35) {
          let tmp37 = cResult[19];
        }
        return tmp37;
      }
      const obj7 = { style: tmp4.container, children: tmp35 };
      const tmp40 = timestampProducer(View, obj7);
      cResult[17] = tmp4.container;
      cResult[18] = tmp35;
      cResult[19] = tmp40;
      tmp37 = tmp40;
    }
  }
  const obj8 = { spacing: 24, children: null };
  const items = [tmp8, tmp11, tmp17, tmp20, tmp21, tmp22, tmp28, tmp32];
  obj8.children = items;
  const tmp36 = React5(Stack_Stack.Stack, obj8);
  cResult[13] = tmp28;
  cResult[14] = tmp11;
  cResult[15] = tmp17;
  cResult[16] = tmp36;
  tmp35 = tmp36;
}) : (function UserSettingsVoice() {
  const tmp = closure_8();
  let nonContextualStreamOutputPresent = MobileAudioOutputExperimentDefault.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  const tmp4 = useIsVideoBackgroundEnabledDefault("UserSettingsVoice");
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
});
export const UserSettingsTableRowGroup = tmp4;