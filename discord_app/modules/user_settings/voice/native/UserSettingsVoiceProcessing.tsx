// === Module 9672: UserSettingsVoiceProcessing ===

// Module 9672 (UserSettingsVoiceProcessing)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl8 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import TableRadioRow4 from "TableRadioRow" /* 6071 */;
import TableRadioGroup2 from "TableRadioGroup" /* 6072 */;
import TableSwitchRow4 from "TableSwitchRow" /* 6698 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9306 */;
import UserSettingsVoice from "UserSettingsVoice" /* 9657 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 9673 */;
import NoiseCancellationUtils from "NoiseCancellationUtils" /* 9674 */;
import KrispLogoDefault from "KrispLogo" /* 9677 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let obj = { optionsParentContainer: { marginTop: 12 }, optionsDescriptionContainer: obj2, krisp: { marginStart: -20 } };
obj2 = { paddingTop: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items1;
  let items2;
  let items3;
  let obj12;
  let tmp11;
  let tmp5;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(38);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function c() {
      return MediaEngineStore.isNoiseCancellationSupported();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmpResult3 = UserSettingsVoiceUtils;
  const selectedNoiseSuppressionOption = tmpResult3.useSelectedNoiseSuppressionOption();
  const tmpResult4 = NoiseCancellationUtils;
  const noiseCancellationDeferredToSystem = tmpResult4.useNoiseCancellationDeferredToSystem();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function h(arg0) {
      const KRISP = require("UserSettingsVoiceUtils").NoiseSuppressionOpt.KRISP;
      const STANDARD = require("UserSettingsVoiceUtils").NoiseSuppressionOpt.STANDARD;
      const obj = AudioActionCreatorsDefault;
      obj.setNoiseCancellation(arg0 === KRISP);
      const obj2 = AudioActionCreatorsDefault;
      obj2.setNoiseSuppression(arg0 === STANDARD);
    };
    cResult[2] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[2];
  }
  if (stateFromStores) {
    let tmp20;
    let tmp22;
    let tmp24;
    let tmp27;
    let tmp29;
    let tmp32;
    let tmp34;
    const _Symbol3 = Symbol;
    const optionsParentContainer = tmp4.optionsParentContainer;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = intl8.intl;
      const stringResult = intl3.string(intl8.t.t8Qhib);
      cResult[3] = stringResult;
      tmp20 = stringResult;
    } else {
      tmp20 = cResult[3];
    }
    const _Symbol4 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = intl8.intl;
      const stringResult1 = intl4.string(intl8.t.rdoNzt);
      cResult[4] = stringResult1;
      tmp22 = stringResult1;
    } else {
      tmp22 = cResult[4];
    }
    if (cResult[5] !== noiseCancellationDeferredToSystem) {
      let obj2 = { value: UserSettingsVoiceUtils.NoiseSuppressionOpt.KRISP, label: tmp22, disabled: noiseCancellationDeferredToSystem };
      const TableRadioRow = TableRadioRow4.TableRadioRow;
      const tmp26 = hasOwnProperty(TableRadioRow, obj2);
      cResult[5] = noiseCancellationDeferredToSystem;
      cResult[6] = tmp26;
      tmp24 = tmp26;
    } else {
      tmp24 = cResult[6];
    }
    const _Symbol5 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = intl8.intl;
      const stringResult2 = intl5.string(intl8.t.qXeYHw);
      cResult[7] = stringResult2;
      tmp27 = stringResult2;
    } else {
      tmp27 = cResult[7];
    }
    if (cResult[8] !== noiseCancellationDeferredToSystem) {
      const obj3 = { disabled: noiseCancellationDeferredToSystem, value: UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD, label: tmp27 };
      const TableRadioRow2 = TableRadioRow4.TableRadioRow;
      const tmp31 = hasOwnProperty(TableRadioRow2, obj3);
      cResult[8] = noiseCancellationDeferredToSystem;
      cResult[9] = tmp31;
      tmp29 = tmp31;
    } else {
      tmp29 = cResult[9];
    }
    const _Symbol6 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl6 = intl8.intl;
      const stringResult3 = intl6.string(intl8.t.wkYAlz);
      cResult[10] = stringResult3;
      tmp32 = stringResult3;
    } else {
      tmp32 = cResult[10];
    }
    if (cResult[11] !== noiseCancellationDeferredToSystem) {
      const obj4 = { disabled: noiseCancellationDeferredToSystem, value: UserSettingsVoiceUtils.NoiseSuppressionOpt.NONE, label: tmp32 };
      const TableRadioRow3 = TableRadioRow4.TableRadioRow;
      const tmp36 = hasOwnProperty(TableRadioRow3, obj4);
      cResult[11] = noiseCancellationDeferredToSystem;
      cResult[12] = tmp36;
      tmp34 = tmp36;
    } else {
      tmp34 = cResult[12];
    }
    if (cResult[13] === selectedNoiseSuppressionOption) {
      if (cResult[14] === tmp34) {
        if (cResult[15] === tmp24) {
          let tmp37;
          let tmp40;
          let tmp42;
          let tmp45;
          let tmp49;
          if (cResult[16] === tmp29) {
            tmp37 = cResult[17];
          }
          if (cResult[18] !== noiseCancellationDeferredToSystem) {
            let formatResult;
            const intl7 = intl8.intl;
            if (noiseCancellationDeferredToSystem) {
              const obj5 = {
                onSettingsClick() {
                              const mediaEngine = MediaEngineStore.getMediaEngine();
                              const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
                            }
              };
              formatResult = intl7.format(intl8.t.EUNgko, obj5);
            } else {
              formatResult = intl7.string(intl8.t.k6h1F4);
            }
            cResult[18] = noiseCancellationDeferredToSystem;
            cResult[19] = formatResult;
            tmp40 = formatResult;
          } else {
            tmp40 = cResult[19];
          }
          if (cResult[20] !== tmp40) {
            const obj6 = { variant: "text-xs/medium", color: "text-muted", children: tmp40 };
            const tmp44 = hasOwnProperty(Text_Text.Text, obj6);
            cResult[20] = tmp40;
            cResult[21] = tmp44;
            tmp42 = tmp44;
          } else {
            tmp42 = cResult[21];
          }
          const _Symbol7 = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp48 = hasOwnProperty(KrispLogoDefault, {});
            cResult[22] = tmp48;
            tmp45 = tmp48;
          } else {
            tmp45 = cResult[22];
          }
          if (cResult[23] !== tmp4.krisp) {
            const obj7 = { style: tmp4.krisp, children: tmp45 };
            const tmp52 = hasOwnProperty(View, obj7);
            cResult[23] = tmp4.krisp;
            cResult[24] = tmp52;
            tmp49 = tmp52;
          } else {
            tmp49 = cResult[24];
          }
          if (cResult[25] === tmp4.optionsDescriptionContainer) {
            if (cResult[26] === tmp42) {
              let tmp53;
              if (cResult[27] === tmp49) {
                tmp53 = cResult[28];
              }
              if (cResult[29] === tmp4.optionsParentContainer) {
                if (cResult[30] === tmp37) {
                  let tmp57;
                  if (cResult[31] === tmp53) {
                    tmp57 = cResult[32];
                  }
                  return tmp57;
                }
              }
              const obj8 = { style: optionsParentContainer, children: items1 };
              items1 = [tmp37, tmp53];
              const tmp60 = metroRequire(View, obj8);
              cResult[29] = tmp4.optionsParentContainer;
              cResult[30] = tmp37;
              cResult[31] = tmp53;
              cResult[32] = tmp60;
              tmp57 = tmp60;
            }
          }
          const obj9 = { style: tmp4.optionsDescriptionContainer, children: items2 };
          items2 = [tmp42, tmp49];
          const tmp56 = metroRequire(View, obj9);
          cResult[25] = tmp4.optionsDescriptionContainer;
          cResult[26] = tmp42;
          cResult[27] = tmp49;
          cResult[28] = tmp56;
          tmp53 = tmp56;
        }
      }
    }
    const obj10 = { value: selectedNoiseSuppressionOption, onChange: tmp11, title: tmp20, hasIcons: false, children: items3 };
    items3 = [tmp24, tmp29, tmp34];
    const tmp39 = metroRequire(TableRadioGroup2.TableRadioGroup, obj10);
    cResult[13] = selectedNoiseSuppressionOption;
    cResult[14] = tmp34;
    cResult[15] = tmp24;
    cResult[16] = tmp29;
    cResult[17] = tmp39;
    tmp37 = tmp39;
  } else {
    let tmp13;
    let tmp12;
    let tmp18;
    const _Symbol = Symbol;
    if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl8.intl;
      const stringResult4 = intl.string(intl8.t.t8Qhib);
      const intl2 = intl8.intl;
      const stringResult5 = intl2.string(intl8.t.najZCV);
      cResult[33] = stringResult4;
      cResult[34] = stringResult5;
      tmp13 = stringResult5;
      tmp12 = stringResult4;
    } else {
      tmp12 = cResult[33];
      tmp13 = cResult[34];
    }
    const _Symbol2 = Symbol;
    let STANDARD = UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD;
    if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
      class K {
        constructor(arg0) {
          const handleNoiseSuppressionChange = require("UserSettingsVoiceUtils").handleNoiseSuppressionChange;
          require("UserSettingsVoiceUtils");
          const NoiseSuppressionOpt = require("UserSettingsVoiceUtils").NoiseSuppressionOpt;
          return handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
        }
      }
      cResult[35] = K;
    } else {
      class K {
        constructor(arg0) {
          const handleNoiseSuppressionChange = require("UserSettingsVoiceUtils").handleNoiseSuppressionChange;
          require("UserSettingsVoiceUtils");
          const NoiseSuppressionOpt = require("UserSettingsVoiceUtils").NoiseSuppressionOpt;
          return handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
        }
      }
    }
    if (cResult[36] !== (selectedNoiseSuppressionOption === STANDARD)) {
      class K {
        constructor(arg0) {
          const handleNoiseSuppressionChange = require("UserSettingsVoiceUtils").handleNoiseSuppressionChange;
          require("UserSettingsVoiceUtils");
          const NoiseSuppressionOpt = require("UserSettingsVoiceUtils").NoiseSuppressionOpt;
          return handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
        }
      }
      const obj11 = { hasIcons: false, children: hasOwnProperty(TableSwitchRow4.TableSwitchRow, obj12) };
      const UserSettingsTableRowGroup = UserSettingsVoice.UserSettingsTableRowGroup;
      obj12 = { label: tmp12, subLabel: tmp13, value: selectedNoiseSuppressionOption === STANDARD, onValueChange: K };
      const tmp19 = hasOwnProperty(UserSettingsTableRowGroup, obj11);
      cResult[36] = selectedNoiseSuppressionOption === STANDARD;
      cResult[37] = tmp19;
      tmp18 = tmp19;
    } else {
      class K {
        constructor(arg0) {
          const handleNoiseSuppressionChange = require("UserSettingsVoiceUtils").handleNoiseSuppressionChange;
          require("UserSettingsVoiceUtils");
          const NoiseSuppressionOpt = require("UserSettingsVoiceUtils").NoiseSuppressionOpt;
          return handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
        }
      }
    }
    return tmp18;
  }
}) : (() => {
  let TableSwitchRow;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items3;
  let obj14;
  let tmp9Result;
  const tmp = closure_8();
  let obj = get_initialized;
  const items = [MediaEngineStore];
  const stateFromStores = obj.useStateFromStores(items, () => MediaEngineStore.isNoiseCancellationSupported());
  let obj2 = UserSettingsVoiceUtils;
  const selectedNoiseSuppressionOption = obj2.useSelectedNoiseSuppressionOption();
  const obj3 = NoiseCancellationUtils;
  const noiseCancellationDeferredToSystem = obj3.useNoiseCancellationDeferredToSystem();
  if (stateFromStores) {
    let formatResult;
    const obj4 = { style: tmp.optionsParentContainer, children: items2 };
    const obj5 = {
      value: selectedNoiseSuppressionOption,
      onChange: function noiseCancellationChanged(arg0) {
          const KRISP = require("UserSettingsVoiceUtils").NoiseSuppressionOpt.KRISP;
          const STANDARD = require("UserSettingsVoiceUtils").NoiseSuppressionOpt.STANDARD;
          const obj = AudioActionCreatorsDefault;
          obj.setNoiseCancellation(arg0 === KRISP);
          const obj2 = AudioActionCreatorsDefault;
          obj2.setNoiseSuppression(arg0 === STANDARD);
        },
      title: intl3.string(intl8.t.t8Qhib),
      hasIcons: false,
      children: items1
    };
    const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
    intl3 = intl8.intl;
    const obj6 = { value: UserSettingsVoiceUtils.NoiseSuppressionOpt.KRISP, label: intl4.string(intl8.t.rdoNzt), disabled: noiseCancellationDeferredToSystem };
    const TableRadioRow = TableRadioRow4.TableRadioRow;
    intl4 = intl8.intl;
    items1 = [hasOwnProperty(TableRadioRow, obj6), , ];
    const obj7 = { disabled: noiseCancellationDeferredToSystem, value: UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD, label: intl5.string(intl8.t.qXeYHw) };
    const TableRadioRow2 = TableRadioRow4.TableRadioRow;
    intl5 = intl8.intl;
    items1[1] = hasOwnProperty(TableRadioRow2, obj7);
    const obj8 = { disabled: noiseCancellationDeferredToSystem, value: UserSettingsVoiceUtils.NoiseSuppressionOpt.NONE, label: intl6.string(intl8.t.wkYAlz) };
    const TableRadioRow3 = TableRadioRow4.TableRadioRow;
    intl6 = intl8.intl;
    items1[2] = hasOwnProperty(TableRadioRow3, obj8);
    items2 = [metroRequire(TableRadioGroup, obj5), ];
    const obj9 = { style: tmp.optionsDescriptionContainer, children: items3 };
    const Text = Text_Text.Text;
    const intl7 = intl8.intl;
    if (noiseCancellationDeferredToSystem) {
      const obj10 = {
        onSettingsClick() {
              const mediaEngine = MediaEngineStore.getMediaEngine();
              const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
            }
      };
      formatResult = intl7.format(intl8.t.EUNgko, obj10);
    } else {
      formatResult = intl7.string(intl8.t.k6h1F4);
    }
    const obj11 = { variant: "text-xs/medium", color: "text-muted", children: formatResult };
    items3 = [hasOwnProperty(Text, obj11), ];
    const obj12 = { style: tmp.krisp, children: hasOwnProperty(KrispLogoDefault, {}) };
    items3[1] = hasOwnProperty(View, obj12);
    items2[1] = metroRequire(View, obj9);
    tmp9Result = metroRequire(View, obj4);
  } else {
    const obj13 = { hasIcons: false, children: hasOwnProperty(TableSwitchRow, obj14) };
    const UserSettingsTableRowGroup = UserSettingsVoice.UserSettingsTableRowGroup;
    obj14 = {
      label: intl.string(intl8.t.t8Qhib),
      subLabel: intl2.string(intl8.t.najZCV),
      value: selectedNoiseSuppressionOption === UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD,
      onValueChange(arg0) {
          const handleNoiseSuppressionChange = require("UserSettingsVoiceUtils").handleNoiseSuppressionChange;
          require("UserSettingsVoiceUtils");
          const NoiseSuppressionOpt = require("UserSettingsVoiceUtils").NoiseSuppressionOpt;
          return handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
        }
    };
    TableSwitchRow = TableSwitchRow4.TableSwitchRow;
    intl = intl8.intl;
    intl2 = intl8.intl;
    tmp9Result = hasOwnProperty(UserSettingsTableRowGroup, obj13);
  }
  return tmp9Result;
});
let closure_9 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let TableSwitchRow;
  let advancedVoiceActivitySupported;
  let automaticGainControl;
  let echoCancellation;
  let inputMode;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let obj3;
  let tmp10;
  let tmp12;
  let tmp15;
  let tmp19;
  let tmp20;
  let tmp23;
  let tmp4;
  let tmp5;
  let tmp8;
  let obj = inputMode(576);
  const cResult = obj.c(21);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function o() {
      const obj = { echoCancellation: MediaEngineStore.getEchoCancellation(), advancedVoiceActivitySupported: MediaEngineStore.isAdvancedVoiceActivitySupported(), automaticGainControl: MediaEngineStore.getAutomaticGainControl(), inputMode: MediaEngineStore.getMode(), vadUseKrisp: MediaEngineStore.getModeOptions().vadUseKrisp };
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = inputMode(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  ({ echoCancellation, advancedVoiceActivitySupported, automaticGainControl, inputMode } = stateFromStoresObject);
  const vadUseKrisp = stateFromStoresObject.vadUseKrisp;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = inputMode(1126).intl;
    const stringResult = intl.string(inputMode(1126).t["6I6GUv"]);
    cResult[2] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = inputMode(1126).intl;
    const stringResult1 = intl2.string(inputMode(1126).t.iWTwu6);
    cResult[3] = stringResult1;
    tmp10 = stringResult1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== echoCancellation) {
    let obj2 = { title: tmp8, hasIcons: false, children: closure_5(TableSwitchRow, obj3) };
    const UserSettingsTableRowGroup = inputMode(9657).UserSettingsTableRowGroup;
    obj3 = { label: tmp10, value: echoCancellation, onValueChange: inputMode(9673).handleEchoCancellationChange };
    TableSwitchRow = inputMode(6698).TableSwitchRow;
    const tmp14 = closure_5(UserSettingsTableRowGroup, obj2);
    cResult[4] = echoCancellation;
    cResult[5] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp18 = closure_5(closure_9, {});
    cResult[6] = tmp18;
    tmp15 = tmp18;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = inputMode(1126).intl;
    const stringResult2 = intl3.string(inputMode(1126).t.cUMdH0);
    const intl4 = inputMode(1126).intl;
    const stringResult3 = intl4.string(inputMode(1126).t["6EjbvA"]);
    cResult[7] = stringResult2;
    cResult[8] = stringResult3;
    tmp20 = stringResult3;
    tmp19 = stringResult2;
  } else {
    tmp19 = cResult[7];
    tmp20 = cResult[8];
  }
  if (cResult[9] !== automaticGainControl) {
    const obj4 = { label: tmp19, subLabel: tmp20, value: automaticGainControl, onValueChange: inputMode(9673).handleAutomaticGainControlChange };
    const TableSwitchRow2 = inputMode(6698).TableSwitchRow;
    const tmp25 = closure_5(TableSwitchRow2, obj4);
    cResult[9] = automaticGainControl;
    cResult[10] = tmp25;
    tmp23 = tmp25;
  } else {
    tmp23 = cResult[10];
  }
  if (cResult[11] === advancedVoiceActivitySupported) {
    if (cResult[12] === inputMode) {
      let tmp26;
      if (cResult[13] === vadUseKrisp) {
        tmp26 = cResult[14];
      }
      if (cResult[15] === tmp23) {
        let tmp29;
        if (cResult[16] === tmp26) {
          tmp29 = cResult[17];
        }
        if (cResult[18] === tmp29) {
          let tmp32;
          if (cResult[19] === tmp12) {
            tmp32 = cResult[20];
          }
          return tmp32;
        }
        const obj5 = { children: items1 };
        items1 = [tmp12, tmp15, tmp29];
        const tmp35 = closure_6(closure_7, obj5);
        cResult[18] = tmp29;
        cResult[19] = tmp12;
        cResult[20] = tmp35;
        tmp32 = tmp35;
      }
      const obj6 = { hasIcons: false, children: items2 };
      items2 = [tmp23, tmp26];
      const tmp31 = closure_6(inputMode(9657).UserSettingsTableRowGroup, obj6);
      cResult[15] = tmp23;
      cResult[16] = tmp26;
      cResult[17] = tmp31;
      tmp29 = tmp31;
    }
  }
  let tmp27 = advancedVoiceActivitySupported;
  if (tmp27) {
    const obj7 = {
      label: intl5.string(inputMode(1126).t.BbESsg),
      subLabel: intl6.string(inputMode(1126).t.LoOB1F),
      value: vadUseKrisp,
      onValueChange(vadUseKrisp) {
          const obj = AudioActionCreatorsDefault;
          const obj2 = { vadUseKrisp };
          return obj.setMode(inputMode, obj2);
        }
    };
    const TableSwitchRow3 = inputMode(6698).TableSwitchRow;
    intl5 = inputMode(1126).intl;
    intl6 = inputMode(1126).intl;
    tmp27 = closure_5(TableSwitchRow3, obj7);
  }
  cResult[11] = advancedVoiceActivitySupported;
  cResult[12] = inputMode;
  cResult[13] = vadUseKrisp;
  cResult[14] = tmp27;
  tmp26 = tmp27;
}) : (() => {
  let TableSwitchRow;
  let advancedVoiceActivitySupported;
  let automaticGainControl;
  let echoCancellation;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let obj3;
  let require;
  let vadUseKrisp;
  let obj = get_initialized;
  const items = [MediaEngineStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { echoCancellation: MediaEngineStore.getEchoCancellation(), advancedVoiceActivitySupported: MediaEngineStore.isAdvancedVoiceActivitySupported(), automaticGainControl: MediaEngineStore.getAutomaticGainControl(), inputMode: MediaEngineStore.getMode(), vadUseKrisp: MediaEngineStore.getModeOptions().vadUseKrisp };
    return obj;
  });
  ({ advancedVoiceActivitySupported, inputMode: require } = stateFromStoresObject);
  ({ echoCancellation, automaticGainControl, vadUseKrisp } = stateFromStoresObject);
  let obj2 = { title: intl.string(intl8.t["6I6GUv"]), hasIcons: false, children: closure_5(TableSwitchRow, obj3) };
  const UserSettingsTableRowGroup = UserSettingsVoice.UserSettingsTableRowGroup;
  intl = intl8.intl;
  obj3 = { label: intl2.string(intl8.t.iWTwu6), value: echoCancellation, onValueChange: UserSettingsVoiceUtils.handleEchoCancellationChange };
  TableSwitchRow = TableSwitchRow4.TableSwitchRow;
  intl2 = intl8.intl;
  const items1 = [closure_5(UserSettingsTableRowGroup, obj2), closure_5(closure_9, {}), ];
  const UserSettingsTableRowGroup2 = UserSettingsVoice.UserSettingsTableRowGroup;
  const obj4 = { label: intl3.string(intl8.t.cUMdH0), subLabel: intl4.string(intl8.t["6EjbvA"]), value: automaticGainControl, onValueChange: UserSettingsVoiceUtils.handleAutomaticGainControlChange };
  const TableSwitchRow2 = TableSwitchRow4.TableSwitchRow;
  intl3 = intl8.intl;
  intl4 = intl8.intl;
  const items2 = [closure_5(TableSwitchRow2, obj4), ];
  if (advancedVoiceActivitySupported) {
    const obj5 = {
      label: intl5.string(intl8.t.BbESsg),
      subLabel: intl6.string(intl8.t.LoOB1F),
      value: vadUseKrisp,
      onValueChange(vadUseKrisp) {
          const obj = AudioActionCreatorsDefault;
          const obj2 = { vadUseKrisp };
          return obj.setMode(_require, obj2);
        }
    };
    const TableSwitchRow3 = TableSwitchRow4.TableSwitchRow;
    intl5 = intl8.intl;
    intl6 = intl8.intl;
    advancedVoiceActivitySupported = closure_5(TableSwitchRow3, obj5);
  }
  const obj6 = { children: items1 };
  items2[1] = advancedVoiceActivitySupported;
  items1[2] = closure_6(UserSettingsTableRowGroup2, { hasIcons: false, children: items2 });
  return closure_6(closure_7, obj6);
});
let result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceProcessing.tsx");

export default tmp5;
export const VoiceProcessingOptions = tmp4;