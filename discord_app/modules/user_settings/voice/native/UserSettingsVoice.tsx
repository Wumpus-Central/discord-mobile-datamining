// discord_app/modules/user_settings/voice/native/UserSettingsVoice.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl3 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import TableRowGroup2 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import MobileVoiceOverlayStore from "../../../../stores/native/MobileVoiceOverlayStore.tsx";
import UserSettingsVoiceConstants from "UserSettingsVoiceConstants.tsx";
import MobileAudioOutputExperimentDefault from "../../../media_engine/MobileAudioOutputExperiment.tsx";
import useIsVideoBackgroundEnabledDefault from "../../../video_backgrounds/useIsVideoBackgroundEnabled.tsx";
import UserSettingsVoiceInputOptionsDefault from "UserSettingsVoiceInputOptions.tsx";
import UserSettingsVoiceOutputOptionsDefault from "UserSettingsVoiceOutputOptions.tsx";
import UserSettingsSoundboardVolumeDefault from "UserSettingsSoundboardVolume.tsx";
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay.tsx";
import UserSettingsVoiceProcessingDefault from "UserSettingsVoiceProcessing.tsx";
import VideoBackgroundOptionsRadioGroupDefault from "../../../video_backgrounds/native/VideoBackgroundOptionsRadioGroup.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const isMobileOverlaySupported = MobileVoiceOverlayStore.isMobileOverlaySupported;
const guideURL = UserSettingsVoiceConstants.USER_SETTINGS_VOICE_GUILD_URL;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== arg0) {
        const obj2 = {};
        const TableRowGroup = TableRowGroup2.TableRowGroup;
        const merged = Object.assign(arg0);
        const tmp9 = metroRequire(TableRowGroup, obj2);
        cResult[0] = arg0;
        cResult[1] = tmp9;
        tmp4 = tmp9;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (arg0) => {
      const obj = {};
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      const merged = Object.assign(arg0);
      return metroRequire(TableRowGroup, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl2;
      let items;
      let tmp11;
      let tmp14;
      let tmp17;
      let tmp20;
      let tmp21;
      let tmp22;
      let tmp28;
      let tmp32;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(20);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "NewUserSettingsVoice" };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const obj3 = MobileAudioOutputExperimentDefault;
      const nonContextualStreamOutputPresent = obj3.useConfig(first).nonContextualStreamOutputPresent;
      const tmp7 = useIsVideoBackgroundEnabledDefault("UserSettingsVoice");
      const container = tmp4.container;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp10 = metroRequire(UserSettingsVoiceInputOptionsDefault, {});
        cResult[1] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== nonContextualStreamOutputPresent) {
        const tmp12 = nonContextualStreamOutputPresent && metroRequire(UserSettingsVoiceOutputOptionsDefault, {});
        cResult[2] = nonContextualStreamOutputPresent;
        cResult[3] = tmp12;
        tmp11 = tmp12;
      } else {
        tmp11 = cResult[3];
      }
      const tableRow = tmp4.tableRow;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const obj4 = { guideURL };
        const formatResult = intl.format(intl3.t["V+B3FH"], obj4);
        cResult[4] = formatResult;
        tmp14 = formatResult;
      } else {
        tmp14 = cResult[4];
      }
      if (cResult[5] !== tmp4.tableRow) {
        const obj5 = { style: tableRow, variant: "text-sm/medium", children: tmp14 };
        const tmp19 = metroRequire(Text_Text.Text, obj5);
        cResult[5] = tmp4.tableRow;
        cResult[6] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp24 = metroRequire(UserSettingsSoundboardVolumeDefault, {});
        const tmp26 = isMobileOverlaySupported() && metroRequire(UserSettingsVoiceOverlayDefault, {});
        const tmp23Result = metroRequire(UserSettingsVoiceProcessingDefault, {});
        cResult[7] = tmp24;
        cResult[8] = tmp26;
        cResult[9] = tmp23Result;
        tmp21 = tmp26;
        tmp22 = tmp23Result;
        tmp20 = tmp24;
      } else {
        tmp20 = cResult[7];
        tmp21 = cResult[8];
        tmp22 = cResult[9];
      }
      if (cResult[10] !== tmp7) {
        let tmp29 = tmp7;
        if (tmp29) {
          const obj6 = { title: intl2.string(intl3.t.lZTUPs) };
          const tmp6Result = VideoBackgroundOptionsRadioGroupDefault;
          intl2 = intl3.intl;
          tmp29 = metroRequire(tmp6Result, obj6);
        }
        cResult[10] = tmp7;
        cResult[11] = tmp29;
        tmp28 = tmp29;
      } else {
        tmp28 = cResult[11];
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp34 = metroRequire(common_SafeAreaView.SafeAreaPaddingView, { bottom: true });
        cResult[12] = tmp34;
        tmp32 = tmp34;
      } else {
        tmp32 = cResult[12];
      }
      if (cResult[13] === tmp28) {
        if (cResult[14] === tmp11) {
          let tmp35;
          if (cResult[15] === tmp17) {
            tmp35 = cResult[16];
          }
          if (cResult[17] === tmp4.container) {
            let tmp37;
            if (cResult[18] === tmp35) {
              tmp37 = cResult[19];
            }
            return tmp37;
          }
          const obj7 = { style: container, children: tmp35 };
          const tmp40 = metroRequire(View, obj7);
          cResult[17] = tmp4.container;
          cResult[18] = tmp35;
          cResult[19] = tmp40;
          tmp37 = tmp40;
        }
      }
      const obj8 = { spacing: 24, children: items };
      items = [tmp8, tmp11, tmp17, tmp20, tmp21, tmp22, tmp28, tmp32];
      const tmp36 = metroImportDefault(Stack_Stack.Stack, obj8);
      cResult[13] = tmp28;
      cResult[14] = tmp11;
      cResult[15] = tmp17;
      cResult[16] = tmp36;
      tmp35 = tmp36;
    }
  : () => {
      let Stack;
      let intl;
      let intl2;
      let obj4;
      let obj6;
      const tmp = closure_8();
      const obj = MobileAudioOutputExperimentDefault;
      let nonContextualStreamOutputPresent = obj.useConfig({
        location: "NewUserSettingsVoice",
      }).nonContextualStreamOutputPresent;
      const obj2 = { style: tmp.container, children: metroImportDefault(Stack, obj6) };
      const tmp4 = useIsVideoBackgroundEnabledDefault("UserSettingsVoice");
      Stack = Stack_Stack.Stack;
      const items = [metroRequire(UserSettingsVoiceInputOptionsDefault, {}), , , , , , ,];
      if (nonContextualStreamOutputPresent) {
        nonContextualStreamOutputPresent = metroRequire(UserSettingsVoiceOutputOptionsDefault, {});
      }
      items[1] = nonContextualStreamOutputPresent;
      const obj3 = { style: tmp.tableRow, variant: "text-sm/medium", children: intl.format(intl3.t["V+B3FH"], obj4) };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      obj4 = { guideURL };
      items[2] = metroRequire(Text, obj3);
      items[3] = metroRequire(UserSettingsSoundboardVolumeDefault, {});
      items[4] = isMobileOverlaySupported() && metroRequire(UserSettingsVoiceOverlayDefault, {});
      isMobileOverlaySupported() && metroRequire(UserSettingsVoiceOverlayDefault, {});
      items[5] = metroRequire(UserSettingsVoiceProcessingDefault, {});
      let tmp5Result = tmp4;
      if (tmp5Result) {
        const obj5 = { title: intl2.string(intl3.t.lZTUPs) };
        const tmp2Result = VideoBackgroundOptionsRadioGroupDefault;
        intl2 = intl3.intl;
        tmp5Result = metroRequire(tmp2Result, obj5);
      }
      obj6 = { spacing: 24, children: items };
      items[6] = tmp5Result;
      items[7] = metroRequire(common_SafeAreaView.SafeAreaPaddingView, { bottom: true });
      return metroRequire(View, obj2);
    };
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default tmp5;
export const UserSettingsTableRowGroup = tmp4;
