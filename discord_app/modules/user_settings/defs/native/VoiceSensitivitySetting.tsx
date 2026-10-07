// discord_app/modules/user_settings/defs/native/VoiceSensitivitySetting.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import VoiceSensitivityDefault from "../../../../components_native/common/VoiceSensitivity.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const jsx = jsxProd.jsx;
let closure_6 = createStyles.createStyles({ slider: { marginTop: 8 } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = inputMode(576).c(11);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore];
        const fn = function n() {
          return {
            inputMode: MediaEngineStore.getMode(),
            vadThreshold: MediaEngineStore.getModeOptions().threshold,
            vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
          };
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const obj = inputMode(576);
      const stateFromStoresObject = inputMode(504).useStateFromStoresObject(tmp5, tmp6);
      inputMode = stateFromStoresObject.inputMode;
      ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
      if (cResult[2] !== inputMode) {
        const fn2 = function v(threshold) {
          return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
        };
        cResult[2] = inputMode;
        cResult[3] = fn2;
        let tmp9 = fn2;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp9) {
        if (cResult[5] === vadAutoThreshold) {
          if (cResult[6] === vadThreshold) {
            let tmp10 = cResult[7];
          }
          if (cResult[8] === tmp4.slider) {
            if (cResult[9] === tmp10) {
              let tmp12 = cResult[10];
            }
            return tmp12;
          }
          const obj2 = { style: tmp4.slider, children: tmp10 };
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
      const tmpResult = inputMode(504);
    }
  : () => {
      const tmp = closure_6();
      const items = [MediaEngineStore];
      const stateFromStoresObject = inputMode(504).useStateFromStoresObject(items, () => ({
        inputMode: MediaEngineStore.getMode(),
        vadThreshold: MediaEngineStore.getModeOptions().threshold,
        vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
      }));
      inputMode = stateFromStoresObject.inputMode;
      const obj2 = {
        style: tmp.slider,
        children: jsx(VoiceSensitivityDefault, {
          auto: vadAutoThreshold,
          threshold: vadThreshold,
          onThresholdChange(threshold) {
            return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
          },
        }),
      };
      ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
      return (
        <View style={tmp.slider}>
          {jsx(VoiceSensitivityDefault, {
            auto: vadAutoThreshold,
            threshold: vadThreshold,
            onThresholdChange(threshold) {
              return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
            },
          })}
        </View>
      );
    };
let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["sqUm+k"]);
  },
  parent: SettingsConstants.MobileUserSettings.VOICE,
  useDescription: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = inputMode(576).c(11);
        const tmp4 = closure_6();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [MediaEngineStore];
          const fn = function n() {
            return {
              inputMode: MediaEngineStore.getMode(),
              vadThreshold: MediaEngineStore.getModeOptions().threshold,
              vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
            };
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp5 = items;
          tmp6 = fn;
        } else {
          [tmp5, tmp6] = cResult;
        }
        const obj = inputMode(576);
        const stateFromStoresObject = inputMode(504).useStateFromStoresObject(tmp5, tmp6);
        inputMode = stateFromStoresObject.inputMode;
        ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
        if (cResult[2] !== inputMode) {
          const fn2 = function v(threshold) {
            return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
          };
          cResult[2] = inputMode;
          cResult[3] = fn2;
          let tmp9 = fn2;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] === tmp9) {
          if (cResult[5] === vadAutoThreshold) {
            if (cResult[6] === vadThreshold) {
              let tmp10 = cResult[7];
            }
            if (cResult[8] === tmp4.slider) {
              if (cResult[9] === tmp10) {
                let tmp12 = cResult[10];
              }
              return tmp12;
            }
            const obj2 = { style: tmp4.slider, children: tmp10 };
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
        const tmpResult = inputMode(504);
      }
    : () => {
        const tmp = closure_6();
        const items = [MediaEngineStore];
        const stateFromStoresObject = inputMode(504).useStateFromStoresObject(items, () => ({
          inputMode: MediaEngineStore.getMode(),
          vadThreshold: MediaEngineStore.getModeOptions().threshold,
          vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
        }));
        inputMode = stateFromStoresObject.inputMode;
        const obj2 = {
          style: tmp.slider,
          children: jsx(VoiceSensitivityDefault, {
            auto: vadAutoThreshold,
            threshold: vadThreshold,
            onThresholdChange(threshold) {
              return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
            },
          }),
        };
        ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
        return (
          <View style={tmp.slider}>
            {jsx(VoiceSensitivityDefault, {
              auto: vadAutoThreshold,
              threshold: vadThreshold,
              onThresholdChange(threshold) {
                return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
              },
            })}
          </View>
        );
      },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  },
};
const result = size.fileFinishedImporting("modules/user_settings/defs/native/VoiceSensitivitySetting.tsx");

export default SettingBuilders.createStatic({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["sqUm+k"]);
  },
  parent: SettingsConstants.MobileUserSettings.VOICE,
  useDescription: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = inputMode(576).c(11);
        const tmp4 = closure_6();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [MediaEngineStore];
          const fn = function n() {
            return {
              inputMode: MediaEngineStore.getMode(),
              vadThreshold: MediaEngineStore.getModeOptions().threshold,
              vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
            };
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp5 = items;
          tmp6 = fn;
        } else {
          [tmp5, tmp6] = cResult;
        }
        const obj = inputMode(576);
        const stateFromStoresObject = inputMode(504).useStateFromStoresObject(tmp5, tmp6);
        inputMode = stateFromStoresObject.inputMode;
        ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
        if (cResult[2] !== inputMode) {
          const fn2 = function v(threshold) {
            return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
          };
          cResult[2] = inputMode;
          cResult[3] = fn2;
          let tmp9 = fn2;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] === tmp9) {
          if (cResult[5] === vadAutoThreshold) {
            if (cResult[6] === vadThreshold) {
              let tmp10 = cResult[7];
            }
            if (cResult[8] === tmp4.slider) {
              if (cResult[9] === tmp10) {
                let tmp12 = cResult[10];
              }
              return tmp12;
            }
            const obj2 = { style: tmp4.slider, children: tmp10 };
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
        const tmpResult = inputMode(504);
      }
    : () => {
        const tmp = closure_6();
        const items = [MediaEngineStore];
        const stateFromStoresObject = inputMode(504).useStateFromStoresObject(items, () => ({
          inputMode: MediaEngineStore.getMode(),
          vadThreshold: MediaEngineStore.getModeOptions().threshold,
          vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
        }));
        inputMode = stateFromStoresObject.inputMode;
        const obj2 = {
          style: tmp.slider,
          children: jsx(VoiceSensitivityDefault, {
            auto: vadAutoThreshold,
            threshold: vadThreshold,
            onThresholdChange(threshold) {
              return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
            },
          }),
        };
        ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
        return (
          <View style={tmp.slider}>
            {jsx(VoiceSensitivityDefault, {
              auto: vadAutoThreshold,
              threshold: vadThreshold,
              onThresholdChange(threshold) {
                return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
              },
            })}
          </View>
        );
      },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  },
});
