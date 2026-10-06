// discord_app/modules/user_settings/voice/native/UserSettingsVoiceInputOptions.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Constants from "../../../../Constants.tsx";
import intl7 from "../../../../intl/index.native.tsx";
import showSimpleActionSheet2 from "../../../action_sheet/native/showSimpleActionSheet.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import VoiceSensitivityDefault from "../../../../components_native/common/VoiceSensitivity.tsx";
import react from "../../../../../_runtime/00019_react.js";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let metroImportAll;
let metroImportDefault;
let metroRequire;
function handleInputModePress() {
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  let obj = { key: "InputMode", header: obj2, options: items, hasIcons: false };
  obj2 = { title: intl.string(intl7.t["pS+K2L"]) };
  const showSimpleActionSheet = showSimpleActionSheet2.showSimpleActionSheet;
  showSimpleActionSheet2;
  intl = intl7.intl;
  const obj3 = {
    label: intl2.string(intl7.t.Q8gkVL),
    onPress() {
      const obj = AudioActionCreatorsDefault;
      obj.setMode(constants.PUSH_TO_TALK);
    },
  };
  intl2 = intl7.intl;
  items = [obj3];
  const obj4 = {
    label: intl3.string(intl7.t.cHCEOJ),
    onPress() {
      const obj = AudioActionCreatorsDefault;
      obj.setMode(constants.VOICE_ACTIVITY);
    },
  };
  intl3 = intl7.intl;
  items[1] = obj4;
  const result = showSimpleActionSheet(obj);
}
const View = react_native.View;
const InputModes = Constants.InputModes;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ value: { textAlign: "right" }, slider: { marginTop: 4 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let inputMode;
      let intl5;
      let intl6;
      let items2;
      let obj5;
      let obj6;
      let obj8;
      let tmp10;
      let tmp12;
      let tmp4;
      let tmp5;
      let tmp8;
      let vadAutoThreshold;
      let vadThreshold;
      let obj = inputMode(576);
      const cResult = obj.c(17);
      const iter = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore];
        class T {
          constructor() {
            const obj = {
              inputMode: MediaEngineStore.getMode(),
              vadThreshold: MediaEngineStore.getModeOptions().threshold,
              vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
            };
            return obj;
          }
        }
        cResult[0] = items;
        cResult[1] = T;
        tmp4 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = inputMode(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, T);
      inputMode = stateFromStoresObject.inputMode;
      ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(inputMode(1126).t.LKCupB);
        class T {
          constructor() {
            const obj = {
              inputMode: MediaEngineStore.getMode(),
              vadThreshold: MediaEngineStore.getModeOptions().threshold,
              vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
            };
            return obj;
          }
        }
        cResult[2] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(inputMode(1126).t["pS+K2L"]);
        class T {
          constructor() {
            const obj = {
              inputMode: MediaEngineStore.getMode(),
              vadThreshold: MediaEngineStore.getModeOptions().threshold,
              vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
            };
            return obj;
          }
        }
        cResult[3] = stringResult1;
        tmp10 = stringResult1;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== inputMode) {
        let stringResult2;
        if (inputMode === InputModes.PUSH_TO_TALK) {
          const intl4 = tmp(1126).intl;
          stringResult2 = intl4.string(tmp(1126).t.Q8gkVL);
        } else {
          const intl3 = tmp(1126).intl;
          stringResult2 = intl3.string(tmp(1126).t.cHCEOJ);
        }
        class T {
          constructor() {
            const obj = {
              inputMode: MediaEngineStore.getMode(),
              vadThreshold: MediaEngineStore.getModeOptions().threshold,
              vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
            };
            return obj;
          }
        }
        cResult[5] = stringResult2;
        tmp12 = stringResult2;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === iter.value) {
        let tmp15;
        let tmp19;
        if (cResult[7] === tmp12) {
          tmp15 = cResult[8];
        }
        if (cResult[9] === inputMode) {
          if (cResult[10] === iter.slider) {
            if (cResult[11] === vadAutoThreshold) {
              let tmp17;
              if (cResult[12] === vadThreshold) {
                tmp17 = cResult[13];
              }
              if (cResult[14] === tmp15) {
                let tmp20;
                if (cResult[15] === tmp17) {
                  tmp20 = cResult[16];
                }
                return tmp20;
              }
              class T {
                constructor() {
                  const obj = {
                    inputMode: MediaEngineStore.getMode(),
                    vadThreshold: MediaEngineStore.getModeOptions().threshold,
                    vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
                  };
                  return obj;
                }
              }
              tmp22[0] = tmp8;
              const items1 = [tmp15, tmp17];
              tmp22[2] = items1;
              const tmp23 = closure_8(inputMode(9670).UserSettingsTableRowGroup, tmp22);
              cResult[14] = tmp15;
              cResult[15] = tmp17;
              cResult[16] = tmp23;
              tmp20 = tmp23;
            }
          }
        }
        class T {
          constructor() {
            const obj = {
              inputMode: MediaEngineStore.getMode(),
              vadThreshold: MediaEngineStore.getModeOptions().threshold,
              vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
            };
            return obj;
          }
        }
        if (inputMode !== InputModes.PUSH_TO_TALK) {
          let obj2 = { children: items2 };
          class T {
            constructor() {
              const obj = {
                inputMode: MediaEngineStore.getMode(),
                vadThreshold: MediaEngineStore.getModeOptions().threshold,
                vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
              };
              return obj;
            }
          }
          const obj3 = {
            label: intl5.string(inputMode(1126).t.Z4oaN0),
            value: vadAutoThreshold,
            onValueChange(autoThreshold) {
              const obj = AudioActionCreatorsDefault;
              const obj2 = { autoThreshold };
              return obj.setMode(inputMode, obj2);
            },
          };
          const TableSwitchRow = tmp(6705).TableSwitchRow;
          intl5 = tmp(1126).intl;
          items2 = [closure_6(TableSwitchRow, obj3)];
          const obj4 = { label: intl6.string(inputMode(1126).t["o+2oMK"]), subLabel: closure_6(View, obj5) };
          const TableRow2 = tmp(6000).TableRow;
          intl6 = tmp(1126).intl;
          obj5 = { style: iter.slider, children: closure_6(VoiceSensitivityDefault, obj6) };
          obj6 = {
            auto: vadAutoThreshold,
            threshold: vadThreshold,
            onThresholdChange(threshold) {
              const obj = AudioActionCreatorsDefault;
              const obj2 = { threshold };
              return obj.setMode(inputMode, obj2);
            },
          };
          items2[1] = closure_6(TableRow2, obj4);
          tmp19 = closure_8(closure_7, obj2);
        }
        cResult[9] = inputMode;
        cResult[10] = iter.slider;
        cResult[11] = vadAutoThreshold;
        cResult[12] = vadThreshold;
        cResult[13] = tmp19;
        tmp17 = tmp19;
      }
      const obj7 = { label: tmp10, trailing: closure_6(inputMode(4892).Text, obj8), onPress: handleInputModePress };
      const TableRow = tmp(6000).TableRow;
      obj8 = { style: iter.value, variant: "text-md/medium", color: "text-muted", children: tmp12 };
      const tmp16 = closure_6(TableRow, obj7);
      cResult[6] = iter.value;
      cResult[7] = tmp12;
      cResult[8] = tmp16;
      tmp15 = tmp16;
    }
  : () => {
      let Text;
      let inputMode;
      let intl;
      let intl2;
      let intl5;
      let intl6;
      let items1;
      let items2;
      let obj4;
      let obj8;
      let obj9;
      let stringResult;
      const iter = closure_9();
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
      const vadAutoThreshold = stateFromStoresObject.vadAutoThreshold;
      const vadThreshold = stateFromStoresObject.vadThreshold;
      let obj2 = { title: intl.string(inputMode(1126).t.LKCupB), hasIcons: false, children: items1 };
      const UserSettingsTableRowGroup = inputMode(9670).UserSettingsTableRowGroup;
      intl = inputMode(1126).intl;
      const obj3 = {
        label: intl2.string(inputMode(1126).t["pS+K2L"]),
        trailing: closure_6(Text, obj4),
        onPress: handleInputModePress,
      };
      const TableRow = inputMode(6000).TableRow;
      intl2 = inputMode(1126).intl;
      obj4 = { style: iter.value, variant: "text-md/medium", color: "text-muted", children: stringResult };
      Text = inputMode(4892).Text;
      if (inputMode === InputModes.PUSH_TO_TALK) {
        const intl4 = tmp(1126).intl;
        stringResult = intl4.string(tmp(1126).t.Q8gkVL);
      } else {
        const intl3 = tmp(1126).intl;
        stringResult = intl3.string(tmp(1126).t.cHCEOJ);
      }
      items1 = [closure_6(TableRow, obj3)];
      let tmp4Result = null;
      if (inputMode !== InputModes.PUSH_TO_TALK) {
        const obj5 = { children: items2 };
        const obj6 = {
          label: intl5.string(inputMode(1126).t.Z4oaN0),
          value: vadAutoThreshold,
          onValueChange(autoThreshold) {
            const obj = AudioActionCreatorsDefault;
            const obj2 = { autoThreshold };
            return obj.setMode(inputMode, obj2);
          },
        };
        const TableSwitchRow = tmp(6705).TableSwitchRow;
        intl5 = tmp(1126).intl;
        items2 = [closure_6(TableSwitchRow, obj6)];
        const obj7 = { label: intl6.string(inputMode(1126).t["o+2oMK"]), subLabel: closure_6(View, obj8) };
        const TableRow2 = tmp(6000).TableRow;
        intl6 = tmp(1126).intl;
        obj8 = { style: iter.slider, children: closure_6(VoiceSensitivityDefault, obj9) };
        obj9 = {
          auto: vadAutoThreshold,
          threshold: vadThreshold,
          onThresholdChange(threshold) {
            const obj = AudioActionCreatorsDefault;
            const obj2 = { threshold };
            return obj.setMode(inputMode, obj2);
          },
        };
        items2[1] = closure_6(TableRow2, obj7);
        tmp4Result = closure_8(closure_7, obj5);
      }
      items1[1] = tmp4Result;
      return closure_8(UserSettingsTableRowGroup, obj2);
    };
let result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceInputOptions.tsx");

export default tmp4;
export { handleInputModePress };
