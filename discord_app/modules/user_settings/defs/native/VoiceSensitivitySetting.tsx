// discord_app/modules/user_settings/defs/native/VoiceSensitivitySetting.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import intl2 from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import VoiceSensitivityDefault from "../../../../components_native/common/VoiceSensitivity.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ slider: { marginTop: 8 } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let inputMode;
      let tmp5;
      let tmp6;
      let tmp9;
      let vadAutoThreshold;
      let vadThreshold;
      let obj = inputMode(576);
      const cResult = obj.c(11);
      const tmp4 = closure_6();
      const tmp = inputMode;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore];
        const fn = function n() {
          const obj = {
            inputMode: MediaEngineStore.getMode(),
            vadThreshold: MediaEngineStore.getModeOptions().threshold,
            vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
          };
          return obj;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = tmp(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp6);
      inputMode = stateFromStoresObject.inputMode;
      ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
      if (cResult[2] !== inputMode) {
        const fn2 = function v(threshold) {
          const obj = AudioActionCreatorsDefault;
          const obj2 = { threshold };
          return obj.setMode(inputMode, obj2);
        };
        cResult[2] = inputMode;
        cResult[3] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp9) {
        if (cResult[5] === vadAutoThreshold) {
          let tmp10;
          if (cResult[6] === vadThreshold) {
            tmp10 = cResult[7];
          }
          if (cResult[8] === tmp4.slider) {
            let tmp12;
            if (cResult[9] === tmp10) {
              tmp12 = cResult[10];
            }
            return tmp12;
          }
          const tmp15 = <View style={tmp4.slider}>{tmp10}</View>;
          cResult[8] = tmp4.slider;
          cResult[9] = tmp10;
          cResult[10] = tmp15;
          tmp12 = tmp15;
        }
      }
      const tmp11 = jsx(VoiceSensitivityDefault, {
        auto: vadAutoThreshold,
        threshold: vadThreshold,
        onThresholdChange: tmp9,
      });
      cResult[4] = tmp9;
      cResult[5] = vadAutoThreshold;
      cResult[6] = vadThreshold;
      cResult[7] = tmp11;
      tmp10 = tmp11;
    }
  : () => {
      let inputMode;
      let vadAutoThreshold;
      let vadThreshold;
      const tmp = closure_6();
      let obj = inputMode(504);
      const items = [MediaEngineStore];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
        const obj = {
          inputMode: MediaEngineStore.getMode(),
          vadThreshold: MediaEngineStore.getModeOptions().threshold,
          vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
        };
        return obj;
      });
      inputMode = stateFromStoresObject.inputMode;
      ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
      return <View style={tmp.slider}>{null}</View>;
    };
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["sqUm+k"]);
  },
  parent: MobileUserSettings.VOICE,
  useDescription: tmp2,
  useSearchTerms() {
    const intl = intl2.intl;
    const items = [intl.string(intl2.t.nuFtHH)];
    return items;
  },
};
const createStaticResult = SettingBuilders.createStatic(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/VoiceSensitivitySetting.tsx");

export default createStaticResult;
