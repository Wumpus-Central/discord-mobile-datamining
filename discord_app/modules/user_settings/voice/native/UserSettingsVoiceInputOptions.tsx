// discord_app/modules/user_settings/voice/native/UserSettingsVoiceInputOptions.tsx
import util from "../../../../intl/index.native.tsx";
import showSimpleActionSheet from "../../../action_sheet/native/showSimpleActionSheet.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import VoiceSensitivityDefault from "../../../../components_native/common/VoiceSensitivity.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

require = fn;
function handleInputModePress() {
  const obj2 = { key: "InputMode", header: null, options: null, hasIcons: false };
  const obj3 = { title: null };
  const intl = util.intl;
  obj3.title = intl.string(util.t["pS+K2L"]);
  obj2.header = obj3;
  const obj4 = { label: null, onPress: null };
  const intl2 = util.intl;
  obj4.label = intl2.string(util.t.Q8gkVL);
  obj4.onPress = function onPress() {
    AudioActionCreatorsDefault.setMode(constants.PUSH_TO_TALK);
  };
  const items = [obj4];
  const obj5 = { label: null, onPress: null };
  const intl3 = util.intl;
  obj5.label = intl3.string(util.t.cHCEOJ);
  obj5.onPress = function onPress() {
    AudioActionCreatorsDefault.setMode(constants.VOICE_ACTIVITY);
  };
  items[1] = obj5;
  obj2.options = items;
  const result = showSimpleActionSheet.showSimpleActionSheet(obj2);
}
const View = fn(17).View;
const InputModes = fn(1085).InputModes;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let closure_9 = createStyles.createStyles({ value: { textAlign: "right" }, slider: { marginTop: 4 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceInputOptions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = inputMode(576).c(17);
      const iter = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore];
        class T {
          constructor() {
            obj = {
              inputMode: closure_1_4.getMode(),
              vadThreshold: closure_1_4.getModeOptions().threshold,
              vadAutoThreshold: closure_1_4.getModeOptions().autoThreshold,
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
      const obj = inputMode(576);
      const stateFromStoresObject = inputMode(504).useStateFromStoresObject(tmp4, T);
      inputMode = stateFromStoresObject.inputMode;
      ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.LKCupB);
        class T {
          constructor() {
            obj = {
              inputMode: closure_1_4.getMode(),
              vadThreshold: closure_1_4.getModeOptions().threshold,
              vadAutoThreshold: closure_1_4.getModeOptions().autoThreshold,
            };
            return obj;
          }
        }
        cResult[2] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t["pS+K2L"]);
        class T {
          constructor() {
            obj = {
              inputMode: closure_1_4.getMode(),
              vadThreshold: closure_1_4.getModeOptions().threshold,
              vadAutoThreshold: closure_1_4.getModeOptions().autoThreshold,
            };
            return obj;
          }
        }
        cResult[3] = stringResult1;
        let tmp10 = stringResult1;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== inputMode) {
        if (inputMode === InputModes.PUSH_TO_TALK) {
          const intl4 = tmp(1126).intl;
          let stringResult2 = intl4.string(tmp(1126).t.Q8gkVL);
        } else {
          const intl3 = tmp(1126).intl;
          stringResult2 = intl3.string(tmp(1126).t.cHCEOJ);
        }
        class T {
          constructor() {
            obj = {
              inputMode: closure_1_4.getMode(),
              vadThreshold: closure_1_4.getModeOptions().threshold,
              vadAutoThreshold: closure_1_4.getModeOptions().autoThreshold,
            };
            return obj;
          }
        }
        cResult[5] = stringResult2;
      } else {
        if (cResult[6] === iter.value) {
          if (cResult[7] === tmp12) {
            let tmp16 = cResult[8];
          }
          if (cResult[9] === inputMode) {
            if (cResult[10] === iter.slider) {
              if (cResult[11] === vadAutoThreshold) {
                if (cResult[12] === vadThreshold) {
                  let tmp21 = cResult[13];
                }
                if (cResult[14] === tmp16) {
                  if (cResult[15] === tmp21) {
                    let tmp24 = cResult[16];
                  }
                  return tmp24;
                }
                class T {
                  constructor() {
                    obj = {
                      inputMode: closure_1_4.getMode(),
                      vadThreshold: closure_1_4.getModeOptions().threshold,
                      vadAutoThreshold: closure_1_4.getModeOptions().autoThreshold,
                    };
                    return obj;
                  }
                }
                tmp26[0] = tmp8;
                const items1 = [tmp16, tmp21];
                tmp26[2] = items1;
                const tmp27 = closure_8(tmp(9657).UserSettingsTableRowGroup, tmp26);
                cResult[14] = tmp16;
                cResult[15] = tmp21;
                cResult[16] = tmp27;
                tmp24 = tmp27;
              }
            }
          }
          class T {
            constructor() {
              obj = {
                inputMode: closure_1_4.getMode(),
                vadThreshold: closure_1_4.getModeOptions().threshold,
                vadAutoThreshold: closure_1_4.getModeOptions().autoThreshold,
              };
              return obj;
            }
          }
          if (inputMode !== InputModes.PUSH_TO_TALK) {
            const obj2 = { children: null };
            class T {
              constructor() {
                obj = {
                  inputMode: closure_1_4.getMode(),
                  vadThreshold: closure_1_4.getModeOptions().threshold,
                  vadAutoThreshold: closure_1_4.getModeOptions().autoThreshold,
                };
                return obj;
              }
            }
            const obj3 = { label: null, value: null, onValueChange: null };
            const intl5 = tmp(1126).intl;
            obj3.label = intl5.string(tmp(1126).t.Z4oaN0);
            obj3.value = vadAutoThreshold;
            obj3.onValueChange = function onValueChange(autoThreshold) {
              return AudioActionCreatorsDefault.setMode(inputMode, { autoThreshold });
            };
            const items2 = [closure_6(tmp(6698).TableSwitchRow, obj3)];
            const obj4 = { label: null, subLabel: null };
            const intl6 = tmp(1126).intl;
            obj4.label = intl6.string(tmp(1126).t["o+2oMK"]);
            const obj5 = { style: iter.slider, children: null };
            const obj6 = {
              auto: vadAutoThreshold,
              threshold: vadThreshold,
              onThresholdChange(threshold) {
                return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
              },
            };
            obj5.children = closure_6(VoiceSensitivityDefault, obj6);
            obj4.subLabel = closure_6(View, obj5);
            items2[1] = closure_6(tmp(5993).TableRow, obj4);
            obj2.children = items2;
            const tmp23 = closure_8(closure_7, obj2);
          }
          cResult[9] = inputMode;
          cResult[10] = iter.slider;
          cResult[11] = vadAutoThreshold;
          cResult[12] = vadThreshold;
          cResult[13] = tmp23;
          tmp21 = tmp23;
        }
        class T {
          constructor() {
            obj = {
              inputMode: closure_1_4.getMode(),
              vadThreshold: closure_1_4.getModeOptions().threshold,
              vadAutoThreshold: closure_1_4.getModeOptions().autoThreshold,
            };
            return obj;
          }
        }
        tmp18[0] = tmp10;
        const obj7 = { style: iter.value, variant: "text-md/medium", color: "text-muted", children: cResult[5] };
        tmp18[1] = closure_6(tmp(4886).Text, obj7);
        tmp18[2] = handleInputModePress;
        const tmp20 = closure_6(tmp(5993).TableRow, tmp18);
        cResult[6] = iter.value;
        cResult[7] = cResult[5];
        cResult[8] = tmp20;
        tmp16 = tmp20;
      }
      const tmpResult = inputMode(504);
    }
  : () => {
      const iter = closure_9();
      const items = [MediaEngineStore];
      const stateFromStoresObject = inputMode(504).useStateFromStoresObject(items, () => ({
        inputMode: MediaEngineStore.getMode(),
        vadThreshold: MediaEngineStore.getModeOptions().threshold,
        vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
      }));
      inputMode = stateFromStoresObject.inputMode;
      const vadAutoThreshold = stateFromStoresObject.vadAutoThreshold;
      const obj2 = { title: null, hasIcons: false, children: null };
      const intl = inputMode(1126).intl;
      obj2.title = intl.string(inputMode(1126).t.LKCupB);
      const obj3 = { label: null, trailing: null, onPress: null };
      const intl2 = inputMode(1126).intl;
      obj3.label = intl2.string(inputMode(1126).t["pS+K2L"]);
      const obj4 = { style: iter.value, variant: "text-md/medium", color: "text-muted", children: null };
      if (inputMode === InputModes.PUSH_TO_TALK) {
        const intl4 = tmp(1126).intl;
        let stringResult = intl4.string(tmp(1126).t.Q8gkVL);
      } else {
        const intl3 = tmp(1126).intl;
        stringResult = intl3.string(tmp(1126).t.cHCEOJ);
      }
      obj4.children = stringResult;
      obj3.trailing = closure_6(inputMode(4886).Text, obj4);
      obj3.onPress = handleInputModePress;
      const items1 = [closure_6(inputMode(5993).TableRow, obj3)];
      let tmp4Result = null;
      if (inputMode !== InputModes.PUSH_TO_TALK) {
        const obj5 = { children: null };
        const obj6 = { label: null, value: null, onValueChange: null };
        const intl5 = tmp(1126).intl;
        obj6.label = intl5.string(tmp(1126).t.Z4oaN0);
        obj6.value = vadAutoThreshold;
        obj6.onValueChange = function onValueChange(autoThreshold) {
          return AudioActionCreatorsDefault.setMode(inputMode, { autoThreshold });
        };
        const items2 = [closure_6(tmp(6698).TableSwitchRow, obj6)];
        const obj7 = { label: null, subLabel: null };
        const intl6 = tmp(1126).intl;
        obj7.label = intl6.string(tmp(1126).t["o+2oMK"]);
        const obj8 = { style: iter.slider, children: null };
        const obj9 = {
          auto: vadAutoThreshold,
          threshold: stateFromStoresObject.vadThreshold,
          onThresholdChange(threshold) {
            return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
          },
        };
        obj8.children = closure_6(VoiceSensitivityDefault, obj9);
        obj7.subLabel = closure_6(View, obj8);
        items2[1] = closure_6(tmp(5993).TableRow, obj7);
        obj5.children = items2;
        tmp4Result = closure_8(closure_7, obj5);
      }
      items1[1] = tmp4Result;
      obj2.children = items1;
      return closure_8(inputMode(9657).UserSettingsTableRowGroup, obj2);
    };
export { handleInputModePress };
