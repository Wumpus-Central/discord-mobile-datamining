// discord_app/modules/user_settings/voice/native/UserSettingsVoiceProcessing.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import UserSettingsVoice from "UserSettingsVoice.tsx";
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils.tsx";
import NoiseCancellationUtils from "../../../noise_cancellation/NoiseCancellationUtils.tsx";
import KrispLogoDefault from "KrispLogo.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  optionsParentContainer: { marginTop: 12 },
  optionsDescriptionContainer: { paddingTop: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4 },
  krisp: { marginStart: -20 },
};
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(38);
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
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      const tmpResult = initialize;
      const selectedNoiseSuppressionOption = UserSettingsVoiceUtils.useSelectedNoiseSuppressionOption();
      const tmpResult3 = UserSettingsVoiceUtils;
      const noiseCancellationDeferredToSystem = NoiseCancellationUtils.useNoiseCancellationDeferredToSystem();
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function h(arg0) {
          AudioActionCreatorsDefault.setNoiseCancellation(
            arg0 === require("UserSettingsVoiceUtils").NoiseSuppressionOpt.KRISP,
          );
          AudioActionCreatorsDefault.setNoiseSuppression(
            arg0 === require("UserSettingsVoiceUtils").NoiseSuppressionOpt.STANDARD,
          );
        };
        cResult[2] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[2];
      }
      if (stateFromStores) {
        const _Symbol3 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = util.intl;
          const stringResult = intl3.string(util.t.t8Qhib);
          cResult[3] = stringResult;
          let tmp20 = stringResult;
        } else {
          tmp20 = cResult[3];
        }
        const _Symbol4 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = util.intl;
          const stringResult1 = intl4.string(util.t.rdoNzt);
          cResult[4] = stringResult1;
          let tmp22 = stringResult1;
        } else {
          tmp22 = cResult[4];
        }
        if (cResult[5] !== noiseCancellationDeferredToSystem) {
          const obj2 = {
            value: UserSettingsVoiceUtils.NoiseSuppressionOpt.KRISP,
            label: tmp22,
            disabled: noiseCancellationDeferredToSystem,
          };
          const tmp26 = hasOwnProperty(TableRadioRow.TableRadioRow, obj2);
          cResult[5] = noiseCancellationDeferredToSystem;
          cResult[6] = tmp26;
          let tmp24 = tmp26;
        } else {
          tmp24 = cResult[6];
        }
        const _Symbol5 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl5 = util.intl;
          const stringResult2 = intl5.string(util.t.qXeYHw);
          cResult[7] = stringResult2;
          let tmp27 = stringResult2;
        } else {
          tmp27 = cResult[7];
        }
        if (cResult[8] !== noiseCancellationDeferredToSystem) {
          const obj3 = {
            disabled: noiseCancellationDeferredToSystem,
            value: UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD,
            label: tmp27,
          };
          const tmp31 = hasOwnProperty(TableRadioRow.TableRadioRow, obj3);
          cResult[8] = noiseCancellationDeferredToSystem;
          cResult[9] = tmp31;
          let tmp29 = tmp31;
        } else {
          tmp29 = cResult[9];
        }
        const _Symbol6 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const intl6 = util.intl;
          const stringResult3 = intl6.string(util.t.wkYAlz);
          cResult[10] = stringResult3;
          let tmp32 = stringResult3;
        } else {
          tmp32 = cResult[10];
        }
        if (cResult[11] !== noiseCancellationDeferredToSystem) {
          const obj4 = {
            disabled: noiseCancellationDeferredToSystem,
            value: UserSettingsVoiceUtils.NoiseSuppressionOpt.NONE,
            label: tmp32,
          };
          const tmp36 = hasOwnProperty(TableRadioRow.TableRadioRow, obj4);
          cResult[11] = noiseCancellationDeferredToSystem;
          cResult[12] = tmp36;
          let tmp34 = tmp36;
        } else {
          tmp34 = cResult[12];
        }
        if (cResult[13] === selectedNoiseSuppressionOption) {
          if (cResult[14] === tmp34) {
            if (cResult[15] === tmp24) {
              if (cResult[16] === tmp29) {
                let tmp37 = cResult[17];
              }
              if (cResult[18] !== noiseCancellationDeferredToSystem) {
                const intl7 = util.intl;
                if (noiseCancellationDeferredToSystem) {
                  const obj5 = {
                    onSettingsClick() {
                      const mediaEngine = MediaEngineStore.getMediaEngine();
                      const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
                    },
                  };
                  let formatResult = intl7.format(util.t.EUNgko, obj5);
                } else {
                  formatResult = intl7.string(util.t.k6h1F4);
                }
                cResult[18] = noiseCancellationDeferredToSystem;
                cResult[19] = formatResult;
              } else {
                if (cResult[20] !== cResult[19]) {
                  const obj6 = { variant: "text-xs/medium", color: "text-muted", children: tmp40 };
                  const tmp45 = hasOwnProperty(Text_Text.Text, obj6);
                  cResult[20] = tmp40;
                  cResult[21] = tmp45;
                  let tmp43 = tmp45;
                } else {
                  tmp43 = cResult[21];
                }
                const _Symbol7 = Symbol;
                if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp49 = hasOwnProperty(KrispLogoDefault, {});
                  cResult[22] = tmp49;
                  let tmp46 = tmp49;
                } else {
                  tmp46 = cResult[22];
                }
                if (cResult[23] !== tmp4.krisp) {
                  const obj7 = { style: tmp4.krisp, children: tmp46 };
                  const tmp53 = hasOwnProperty(View, obj7);
                  cResult[23] = tmp4.krisp;
                  cResult[24] = tmp53;
                  let tmp50 = tmp53;
                } else {
                  tmp50 = cResult[24];
                }
                if (cResult[25] === tmp4.optionsDescriptionContainer) {
                  if (cResult[26] === tmp43) {
                    if (cResult[27] === tmp50) {
                      let tmp54 = cResult[28];
                    }
                    if (cResult[29] === tmp4.optionsParentContainer) {
                      if (cResult[30] === tmp37) {
                        if (cResult[31] === tmp54) {
                          let tmp58 = cResult[32];
                        }
                        return tmp58;
                      }
                    }
                    const obj8 = { style: tmp4.optionsParentContainer, children: null };
                    const items1 = [tmp37, tmp54];
                    obj8.children = items1;
                    const tmp61 = timestampProducer(View, obj8);
                    cResult[29] = tmp4.optionsParentContainer;
                    cResult[30] = tmp37;
                    cResult[31] = tmp54;
                    cResult[32] = tmp61;
                    tmp58 = tmp61;
                  }
                }
                const obj9 = { style: tmp4.optionsDescriptionContainer, children: null };
                const items2 = [tmp43, tmp50];
                obj9.children = items2;
                const tmp57 = timestampProducer(View, obj9);
                cResult[25] = tmp4.optionsDescriptionContainer;
                cResult[26] = tmp43;
                cResult[27] = tmp50;
                cResult[28] = tmp57;
                tmp54 = tmp57;
              }
            }
          }
        }
        const obj10 = {
          value: selectedNoiseSuppressionOption,
          onChange: tmp11,
          title: tmp20,
          hasIcons: false,
          children: null,
        };
        const items3 = [tmp24, tmp29, tmp34];
        obj10.children = items3;
        const tmp39 = timestampProducer(TableRadioGroup.TableRadioGroup, obj10);
        cResult[13] = selectedNoiseSuppressionOption;
        cResult[14] = tmp34;
        cResult[15] = tmp24;
        cResult[16] = tmp29;
        cResult[17] = tmp39;
        tmp37 = tmp39;
      } else {
        const _Symbol = Symbol;
        if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult4 = intl.string(util.t.t8Qhib);
          const intl2 = util.intl;
          const stringResult5 = intl2.string(util.t.najZCV);
          cResult[33] = stringResult4;
          cResult[34] = stringResult5;
          let tmp13 = stringResult5;
          let tmp12 = stringResult4;
        } else {
          tmp12 = cResult[33];
          tmp13 = cResult[34];
        }
        const _Symbol2 = Symbol;
        if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
          class K {
            constructor(arg0) {
              obj = closure_1_0(closure_1_2[9]);
              NoiseSuppressionOpt = closure_1_0(closure_1_2[9]).NoiseSuppressionOpt;
              return obj.handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
            }
          }
          cResult[35] = K;
        } else {
          class K {
            constructor(arg0) {
              obj = closure_1_0(closure_1_2[9]);
              NoiseSuppressionOpt = closure_1_0(closure_1_2[9]).NoiseSuppressionOpt;
              return obj.handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
            }
          }
        }
        const tmp17 = selectedNoiseSuppressionOption === UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD;
        if (cResult[36] !== tmp17) {
          class K {
            constructor(arg0) {
              obj = closure_1_0(closure_1_2[9]);
              NoiseSuppressionOpt = closure_1_0(closure_1_2[9]).NoiseSuppressionOpt;
              return obj.handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
            }
          }
          const obj11 = { hasIcons: false, children: null };
          const obj12 = { label: tmp12, subLabel: tmp13, value: tmp17, onValueChange: K };
          obj11.children = hasOwnProperty(TableSwitchRow.TableSwitchRow, obj12);
          const tmp19 = hasOwnProperty(UserSettingsVoice.UserSettingsTableRowGroup, obj11);
          cResult[36] = tmp17;
          cResult[37] = tmp19;
          const tmp18 = tmp19;
        } else {
          class K {
            constructor(arg0) {
              obj = closure_1_0(closure_1_2[9]);
              NoiseSuppressionOpt = closure_1_0(closure_1_2[9]).NoiseSuppressionOpt;
              return obj.handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
            }
          }
        }
        return tmp18;
      }
      const tmpResult4 = NoiseCancellationUtils;
    }
  : () => {
      let krisp = closure_8();
      let EUNgko = require;
      let tmp = dependencyMap;
      const items = [MediaEngineStore];
      const stateFromStores = initialize.useStateFromStores(items, () =>
        MediaEngineStore.isNoiseCancellationSupported(),
      );
      const selectedNoiseSuppressionOption = UserSettingsVoiceUtils.useSelectedNoiseSuppressionOption();
      const noiseCancellationDeferredToSystem = NoiseCancellationUtils.useNoiseCancellationDeferredToSystem();
      if (stateFromStores) {
        const obj4 = { style: krisp.optionsParentContainer, children: null };
        const obj5 = {
          value: selectedNoiseSuppressionOption,
          onChange: function noiseCancellationChanged(arg0) {
            AudioActionCreatorsDefault.setNoiseCancellation(
              arg0 === require("UserSettingsVoiceUtils").NoiseSuppressionOpt.KRISP,
            );
            AudioActionCreatorsDefault.setNoiseSuppression(
              arg0 === require("UserSettingsVoiceUtils").NoiseSuppressionOpt.STANDARD,
            );
          },
          title: null,
          hasIcons: false,
          children: null,
        };
        const intl3 = util.intl;
        obj5.title = intl3.string(util.t.t8Qhib);
        const obj6 = { value: UserSettingsVoiceUtils.NoiseSuppressionOpt.KRISP, label: null, disabled: null };
        const intl4 = util.intl;
        obj6.label = intl4.string(util.t.rdoNzt);
        obj6.disabled = noiseCancellationDeferredToSystem;
        const items1 = [hasOwnProperty(TableRadioRow.TableRadioRow, obj6), ,];
        const obj7 = {
          disabled: noiseCancellationDeferredToSystem,
          value: UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD,
          label: null,
        };
        const intl5 = util.intl;
        obj7.label = intl5.string(util.t.qXeYHw);
        items1[1] = hasOwnProperty(TableRadioRow.TableRadioRow, obj7);
        const obj8 = {
          disabled: noiseCancellationDeferredToSystem,
          value: UserSettingsVoiceUtils.NoiseSuppressionOpt.NONE,
          label: null,
        };
        const intl6 = util.intl;
        obj8.label = intl6.string(util.t.wkYAlz);
        items1[2] = hasOwnProperty(TableRadioRow.TableRadioRow, obj8);
        obj5.children = items1;
        const items2 = [timestampProducer(TableRadioGroup.TableRadioGroup, obj5)];
        let obj9 = { style: krisp.optionsDescriptionContainer, children: null };
        let Text = Text_Text.Text;
        const intl7 = util.intl;
        if (noiseCancellationDeferredToSystem) {
          EUNgko = util.t.EUNgko;
          const obj10 = {
            onSettingsClick() {
              const mediaEngine = MediaEngineStore.getMediaEngine();
              const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
            },
          };
          let formatResult = intl7.format(EUNgko, obj10);
        } else {
          formatResult = intl7.string(util.t.k6h1F4);
        }
        const obj11 = { variant: "text-xs/medium", color: "text-muted", children: formatResult };
        const items3 = [hasOwnProperty(Text, obj11)];
        const obj12 = { style: null, children: null };
        krisp = krisp.krisp;
        obj12.style = krisp;
        tmp = hasOwnProperty(KrispLogoDefault, {});
        obj12.children = tmp;
        Text = hasOwnProperty(View, obj12);
        items3[1] = Text;
        obj9.children = items3;
        obj9 = timestampProducer(View, obj9);
        items2[1] = obj9;
        obj4.children = items2;
        timestampProducer(View, obj4);
      } else {
        const obj13 = { hasIcons: false, children: null };
        const obj14 = { label: null, subLabel: null, value: null, onValueChange: null };
        const intl = util.intl;
        obj14.label = intl.string(util.t.t8Qhib);
        const intl2 = util.intl;
        obj14.subLabel = intl2.string(util.t.najZCV);
        obj14.value = selectedNoiseSuppressionOption === UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD;
        obj14.onValueChange = function onValueChange(arg0) {
          const NoiseSuppressionOpt = require("UserSettingsVoiceUtils").NoiseSuppressionOpt;
          return require("UserSettingsVoiceUtils").handleNoiseSuppressionChange(
            arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE,
          );
        };
        obj13.children = hasOwnProperty(TableSwitchRow.TableSwitchRow, obj14);
        return hasOwnProperty(UserSettingsVoice.UserSettingsTableRowGroup, obj13);
      }
    };
let closure_9 = tmp4;
ReactCompilerGating = fn(558);
let obj3 = { paddingTop: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceProcessing.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = inputMode(576).c(21);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore];
        const fn = function o() {
          return {
            echoCancellation: MediaEngineStore.getEchoCancellation(),
            advancedVoiceActivitySupported: MediaEngineStore.isAdvancedVoiceActivitySupported(),
            automaticGainControl: MediaEngineStore.getAutomaticGainControl(),
            inputMode: MediaEngineStore.getMode(),
            vadUseKrisp: MediaEngineStore.getModeOptions().vadUseKrisp,
          };
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = inputMode(576);
      const stateFromStoresObject = inputMode(504).useStateFromStoresObject(tmp4, tmp5);
      ({ echoCancellation, advancedVoiceActivitySupported, automaticGainControl, inputMode } = stateFromStoresObject);
      const vadUseKrisp = stateFromStoresObject.vadUseKrisp;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = inputMode(1126).intl;
        const stringResult = intl.string(inputMode(1126).t["6I6GUv"]);
        cResult[2] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = inputMode(1126).intl;
        const stringResult1 = intl2.string(inputMode(1126).t.iWTwu6);
        cResult[3] = stringResult1;
        let tmp10 = stringResult1;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== echoCancellation) {
        const obj2 = { title: tmp8, hasIcons: false, children: null };
        const obj3 = {
          label: tmp10,
          value: echoCancellation,
          onValueChange: inputMode(9686).handleEchoCancellationChange,
        };
        obj2.children = closure_5(inputMode(6705).TableSwitchRow, obj3);
        const tmp14 = closure_5(inputMode(9670).UserSettingsTableRowGroup, obj2);
        cResult[4] = echoCancellation;
        cResult[5] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp18 = closure_5(closure_9, {});
        cResult[6] = tmp18;
        let tmp15 = tmp18;
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
        let tmp20 = stringResult3;
        let tmp19 = stringResult2;
      } else {
        tmp19 = cResult[7];
        tmp20 = cResult[8];
      }
      if (cResult[9] !== automaticGainControl) {
        const obj4 = {
          label: tmp19,
          subLabel: tmp20,
          value: automaticGainControl,
          onValueChange: inputMode(9686).handleAutomaticGainControlChange,
        };
        const tmp25 = closure_5(inputMode(6705).TableSwitchRow, obj4);
        cResult[9] = automaticGainControl;
        cResult[10] = tmp25;
        let tmp23 = tmp25;
      } else {
        tmp23 = cResult[10];
      }
      if (cResult[11] === advancedVoiceActivitySupported) {
        if (cResult[12] === inputMode) {
          if (cResult[13] === vadUseKrisp) {
            let tmp26 = cResult[14];
          }
          if (cResult[15] === tmp23) {
            if (cResult[16] === tmp26) {
              let tmp29 = cResult[17];
            }
            if (cResult[18] === tmp29) {
              if (cResult[19] === tmp12) {
                let tmp32 = cResult[20];
              }
              return tmp32;
            }
            const obj5 = { children: null };
            const items1 = [tmp12, tmp15, tmp29];
            obj5.children = items1;
            const tmp35 = closure_6(closure_7, obj5);
            cResult[18] = tmp29;
            cResult[19] = tmp12;
            cResult[20] = tmp35;
            tmp32 = tmp35;
          }
          const obj6 = { hasIcons: false, children: null };
          const items2 = [tmp23, tmp26];
          obj6.children = items2;
          const tmp31 = closure_6(inputMode(9670).UserSettingsTableRowGroup, obj6);
          cResult[15] = tmp23;
          cResult[16] = tmp26;
          cResult[17] = tmp31;
          tmp29 = tmp31;
        }
      }
      let tmp27 = advancedVoiceActivitySupported;
      if (advancedVoiceActivitySupported) {
        const obj7 = { label: null, subLabel: null, value: null, onValueChange: null };
        const intl5 = inputMode(1126).intl;
        obj7.label = intl5.string(inputMode(1126).t.BbESsg);
        const intl6 = inputMode(1126).intl;
        obj7.subLabel = intl6.string(inputMode(1126).t.LoOB1F);
        obj7.value = vadUseKrisp;
        obj7.onValueChange = function onValueChange(vadUseKrisp) {
          return AudioActionCreatorsDefault.setMode(inputMode, { vadUseKrisp });
        };
        tmp27 = closure_5(inputMode(6705).TableSwitchRow, obj7);
      }
      cResult[11] = advancedVoiceActivitySupported;
      cResult[12] = inputMode;
      cResult[13] = vadUseKrisp;
      cResult[14] = tmp27;
      tmp26 = tmp27;
      const tmpResult = inputMode(504);
    }
  : () => {
      const items = [MediaEngineStore];
      const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({
        echoCancellation: MediaEngineStore.getEchoCancellation(),
        advancedVoiceActivitySupported: MediaEngineStore.isAdvancedVoiceActivitySupported(),
        automaticGainControl: MediaEngineStore.getAutomaticGainControl(),
        inputMode: MediaEngineStore.getMode(),
        vadUseKrisp: MediaEngineStore.getModeOptions().vadUseKrisp,
      }));
      ({ advancedVoiceActivitySupported, inputMode: require } = stateFromStoresObject);
      ({ echoCancellation, automaticGainControl, vadUseKrisp } = stateFromStoresObject);
      const obj2 = { title: null, hasIcons: false, children: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t["6I6GUv"]);
      const obj3 = { label: null, value: null, onValueChange: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(util.t.iWTwu6);
      obj3.value = echoCancellation;
      obj3.onValueChange = UserSettingsVoiceUtils.handleEchoCancellationChange;
      obj2.children = closure_5(TableSwitchRow.TableSwitchRow, obj3);
      const items1 = [closure_5(UserSettingsVoice.UserSettingsTableRowGroup, obj2), closure_5(closure_9, {})];
      const obj4 = { label: null, subLabel: null, value: null, onValueChange: null };
      const intl3 = util.intl;
      obj4.label = intl3.string(util.t.cUMdH0);
      const intl4 = util.intl;
      obj4.subLabel = intl4.string(util.t["6EjbvA"]);
      obj4.value = automaticGainControl;
      obj4.onValueChange = UserSettingsVoiceUtils.handleAutomaticGainControlChange;
      const items2 = [closure_5(TableSwitchRow.TableSwitchRow, obj4)];
      if (advancedVoiceActivitySupported) {
        const obj5 = { label: null, subLabel: null, value: null, onValueChange: null };
        const intl5 = util.intl;
        obj5.label = intl5.string(util.t.BbESsg);
        const intl6 = util.intl;
        obj5.subLabel = intl6.string(util.t.LoOB1F);
        obj5.value = vadUseKrisp;
        obj5.onValueChange = function onValueChange(vadUseKrisp) {
          return AudioActionCreatorsDefault.setMode(_require, { vadUseKrisp });
        };
        advancedVoiceActivitySupported = closure_5(TableSwitchRow.TableSwitchRow, obj5);
      }
      const obj6 = { children: null };
      items2[1] = advancedVoiceActivitySupported;
      items1[2] = closure_6(UserSettingsVoice.UserSettingsTableRowGroup, { hasIcons: false, children: items2 });
      obj6.children = items1;
      return closure_6(closure_7, obj6);
    };
export const VoiceProcessingOptions = tmp4;
