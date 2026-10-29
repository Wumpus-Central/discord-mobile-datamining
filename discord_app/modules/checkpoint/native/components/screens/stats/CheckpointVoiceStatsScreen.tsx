// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx
import initialize from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import _modDef3058 from "../../../../Checkpoint.messages.js";
import _modDef3090 from "../../../../Checkpoint2026.messages.js";
import MicrophoneIcon from "../../../../../../design/components/Icon/native/redesign/generated/MicrophoneIcon.tsx";
import CheckpointStatsUtils from "../../../../CheckpointStatsUtils.tsx";
import CheckpointTextDefault from "../../CheckpointText.tsx";
import CheckpointScreenDefault from "../../CheckpointScreen.tsx";
import CheckpointApngPlayerDefault from "../../CheckpointApngPlayer.tsx";
import _modDef13448 from "../../../../../../../discord_assets/assets/checkpoint/2026/voice_bg_halfres_static.png.js";
import CheckpointCountUpStatNumberDefault from "../../CheckpointCountUpStatNumber.tsx";
import CheckpointEmphasisDefault from "../../CheckpointEmphasis.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../../../../CheckpointStore.tsx";

require = fn;
const View = fn(17).View;
const CHECKPOINT_PRIMARY = fn(6054).CHECKPOINT_PRIMARY;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5005);
let obj2 = {
  container: { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 },
  title: null,
  titleText: null,
  imageContainer: null,
  image: null,
  copy: null,
  number: null,
};
let obj3 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj2.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.titleText = { flexShrink: 1 };
obj2.imageContainer = { flexGrow: 1, height: "50%", justifyContent: "flex-end", alignItems: "center" };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.image = {
  width: "155.17241379310343%",
  aspectRatio: 1.2996389891696751,
  marginBottom: -nativeDefault.space.PX_16,
};
obj2.copy = { flexShrink: 1 };
let obj5 = { width: "155.17241379310343%", aspectRatio: 1.2996389891696751, marginBottom: -nativeDefault.space.PX_16 };
obj2.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointVoiceStatsScreen() {
      const cResult = c.c(58);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CheckpointStore];
        const fn = function c() {
          const stats = CheckpointStore.stats;
          let voice;
          if (stats != null) {
            voice = stats.voice;
          }
          return voice;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [CheckpointStore];
        class S {
          constructor() {
            globalStats = closure_1_5.globalStats;
            peakHourUtc = undefined;
            if (globalStats != null) {
              voice = globalStats.voice;
              if (voice != null) {
                peakHourUtc = voice.peakHourUtc;
              }
            }
            return peakHourUtc;
          }
        }
        cResult[2] = items1;
        cResult[3] = S;
        let tmp10 = S;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = initialize;
      const stateFromStores1 = initialize.useStateFromStores(tmp9, tmp10);
      if (cResult[4] === stateFromStores1) {
        if (cResult[5] === tmp4.container) {
          if (cResult[6] === tmp4.copy) {
            if (cResult[7] === tmp4.image) {
              if (cResult[8] === tmp4.imageContainer) {
                if (cResult[9] === tmp4.number) {
                  if (cResult[10] === tmp4.title) {
                    if (cResult[11] === tmp4.titleText) {
                      class S {
                        constructor() {
                          globalStats = closure_1_5.globalStats;
                          peakHourUtc = undefined;
                          if (globalStats != null) {
                            voice = globalStats.voice;
                            if (voice != null) {
                              peakHourUtc = voice.peakHourUtc;
                            }
                          }
                          return peakHourUtc;
                        }
                      }
                      if (cResult[12] === undefined) {
                        if (stateFromStores != null) {
                          const totalVoiceMinutesPercentile = stateFromStores.totalVoiceMinutesPercentile;
                        }
                        class S {
                          constructor() {
                            globalStats = closure_1_5.globalStats;
                            peakHourUtc = undefined;
                            if (globalStats != null) {
                              voice = globalStats.voice;
                              if (voice != null) {
                                peakHourUtc = voice.peakHourUtc;
                              }
                            }
                            return peakHourUtc;
                          }
                        }
                        if (cResult[38] === tmp58) {
                          if (cResult[39] === str) {
                            if (cResult[40] === tmp23) {
                              if (cResult[41] === tmp24) {
                                let tmp62 = cResult[42];
                              }
                              if (cResult[43] === View) {
                                if (cResult[44] === tmp20) {
                                  if (cResult[45] === tmp62) {
                                    if (cResult[46] === tmp25) {
                                      if (cResult[47] === tmp26) {
                                        if (cResult[48] === tmp27) {
                                          let tmp65 = cResult[49];
                                        }
                                        if (cResult[50] === View) {
                                          if (cResult[51] === tmp21) {
                                            if (cResult[52] === tmp22) {
                                              if (cResult[53] === tmp65) {
                                                let tmp69 = cResult[54];
                                              }
                                              if (cResult[55] === tmp19) {
                                                if (cResult[56] === tmp69) {
                                                  let tmp73 = cResult[57];
                                                }
                                                return tmp73;
                                              }
                                              class S {
                                                constructor() {
                                                  globalStats = closure_1_5.globalStats;
                                                  peakHourUtc = undefined;
                                                  if (globalStats != null) {
                                                    voice = globalStats.voice;
                                                    if (voice != null) {
                                                      peakHourUtc = voice.peakHourUtc;
                                                    }
                                                  }
                                                  return peakHourUtc;
                                                }
                                              }
                                              tmp75[0] = tmp69;
                                              const tmp76 = React5(tmp19, tmp75);
                                              cResult[55] = tmp19;
                                              cResult[56] = tmp69;
                                              cResult[57] = tmp76;
                                              tmp73 = tmp76;
                                            }
                                          }
                                        }
                                        class S {
                                          constructor() {
                                            globalStats = closure_1_5.globalStats;
                                            peakHourUtc = undefined;
                                            if (globalStats != null) {
                                              voice = globalStats.voice;
                                              if (voice != null) {
                                                peakHourUtc = voice.peakHourUtc;
                                              }
                                            }
                                            return peakHourUtc;
                                          }
                                        }
                                        tmp71[0] = tmp21;
                                        const items2 = [tmp22, tmp65];
                                        tmp71[1] = items2;
                                        const tmp72 = closure_1_8(View, tmp71);
                                        cResult[50] = View;
                                        cResult[51] = tmp21;
                                        cResult[52] = tmp22;
                                        cResult[53] = tmp65;
                                        cResult[54] = tmp72;
                                        tmp69 = tmp72;
                                      }
                                    }
                                  }
                                }
                              }
                              class S {
                                constructor() {
                                  globalStats = closure_1_5.globalStats;
                                  peakHourUtc = undefined;
                                  if (globalStats != null) {
                                    voice = globalStats.voice;
                                    if (voice != null) {
                                      peakHourUtc = voice.peakHourUtc;
                                    }
                                  }
                                  return peakHourUtc;
                                }
                              }
                              tmp67[0] = tmp25;
                              const items3 = [tmp26, tmp27, tmp20, tmp62];
                              tmp67[1] = items3;
                              const tmp68 = closure_1_8(View, tmp67);
                              cResult[43] = View;
                              cResult[44] = tmp20;
                              cResult[45] = tmp62;
                              cResult[46] = tmp25;
                              cResult[47] = tmp26;
                              cResult[48] = tmp27;
                              cResult[49] = tmp68;
                              tmp65 = tmp68;
                            }
                          }
                        }
                        const obj2 = { variant: str, accessibilityLabel: tmp23, children: tmp24 };
                        const tmp64 = React5(tmp58, obj2);
                        cResult[38] = tmp58;
                        cResult[39] = str;
                        cResult[40] = tmp23;
                        cResult[41] = tmp24;
                        cResult[42] = tmp64;
                        tmp62 = tmp64;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      let num5;
      if (stateFromStores != null) {
        num5 = stateFromStores.totalVoiceMinutes;
      }
      if (num5 == null) {
        num5 = 0;
      }
      const rounded = Math.round(num5);
      if (cResult[27] !== stateFromStores1) {
        const result = CheckpointStatsUtils.formatCheckpointPeakHour(stateFromStores1);
        class S {
          constructor() {
            globalStats = closure_1_5.globalStats;
            peakHourUtc = undefined;
            if (globalStats != null) {
              voice = globalStats.voice;
              if (voice != null) {
                peakHourUtc = voice.peakHourUtc;
              }
            }
            return peakHourUtc;
          }
        }
        cResult[28] = result;
        let tmp30 = result;
        const tmpResult5 = CheckpointStatsUtils;
      } else {
        tmp30 = cResult[28];
      }
      const tmpResult4 = initialize;
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.totalVoiceMinutesPercentile;
      }
      const checkpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent(prop);
      const intl = util.intl;
      if (rounded <= 0) {
        let stringResult = intl.string(_modDef3090.ZCwB8J);
        class S {
          constructor() {
            globalStats = closure_1_5.globalStats;
            peakHourUtc = undefined;
            if (globalStats != null) {
              voice = globalStats.voice;
              if (voice != null) {
                peakHourUtc = voice.peakHourUtc;
              }
            }
            return peakHourUtc;
          }
        }
      } else {
        class S {
          constructor() {
            globalStats = closure_1_5.globalStats;
            peakHourUtc = undefined;
            if (globalStats != null) {
              voice = globalStats.voice;
              if (voice != null) {
                peakHourUtc = voice.peakHourUtc;
              }
            }
            return peakHourUtc;
          }
        }
        stringResult = intl.formatToPlainString(_modDef3058.UZbUtl, { numMinutes: null });
        const obj3 = { numMinutes: null };
      }
      if (rounded > 0) {
        if (null != checkpointTopPercent) {
          const intl2 = util.intl;
          const obj4 = { numMinutes: null, percent: null, percentHook: null };
          class S {
            constructor() {
              globalStats = closure_1_5.globalStats;
              peakHourUtc = undefined;
              if (globalStats != null) {
                voice = globalStats.voice;
                if (voice != null) {
                  peakHourUtc = voice.peakHourUtc;
                }
              }
              return peakHourUtc;
            }
          }
          obj4.percent = checkpointTopPercent;
          obj4.percentHook = function percentHook(arg0) {
            return arg0;
          };
          const formatToPlainStringResult = intl2.formatToPlainString(_modDef3090.RqXsIs, obj4);
        }
      }
      const tmp35Result = CheckpointScreenDefault;
      const container = tmp4.container;
      if (cResult[29] !== tmp4.image) {
        const obj5 = { animatedUri: null, staticUri: null, style: null };
        class S {
          constructor() {
            globalStats = closure_1_5.globalStats;
            peakHourUtc = undefined;
            if (globalStats != null) {
              voice = globalStats.voice;
              if (voice != null) {
                peakHourUtc = voice.peakHourUtc;
              }
            }
            return peakHourUtc;
          }
        }
        obj5.staticUri = _modDef13448;
        obj5.style = tmp4.image;
        const tmp43 = React5(CheckpointApngPlayerDefault, obj5);
        cResult[29] = tmp4.image;
        cResult[30] = tmp43;
        let tmp40 = tmp43;
        const tmp35Result3 = CheckpointApngPlayerDefault;
      } else {
        tmp40 = cResult[30];
      }
      if (cResult[31] === tmp4.imageContainer) {
        if (cResult[32] === tmp40) {
          let tmp44 = cResult[33];
        }
        const copy = tmp4.copy;
        const _Symbol = Symbol;
        class S {
          constructor() {
            globalStats = closure_1_5.globalStats;
            peakHourUtc = undefined;
            if (globalStats != null) {
              voice = globalStats.voice;
              if (voice != null) {
                peakHourUtc = voice.peakHourUtc;
              }
            }
            return peakHourUtc;
          }
        }
        if (tmp46 === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor() {
              globalStats = closure_1_5.globalStats;
              peakHourUtc = undefined;
              if (globalStats != null) {
                voice = globalStats.voice;
                if (voice != null) {
                  peakHourUtc = voice.peakHourUtc;
                }
              }
              return peakHourUtc;
            }
          }
          const tmp50 = React5(MicrophoneIcon.MicrophoneIcon, { size: "xs", color: null });
          cResult[34] = tmp50;
          let tmp47 = tmp50;
          const obj6 = { size: "xs", color: null };
        } else {
          tmp47 = cResult[34];
        }
        const obj7 = { style: tmp4.title, children: null };
        const items4 = [tmp47];
        const obj8 = {
          isStepHeading: true,
          variant: "heading-md/extrabold",
          style: tmp4.titleText,
          children: stringResult.toLocaleUpperCase(),
        };
        items4[1] = React5(CheckpointTextDefault, obj8);
        obj7.children = items4;
        const tmp54 = closure_1_8(View, obj7);
        if (cResult[35] === tmp30) {
          if (cResult[36] === tmp29) {
            let tmp55 = cResult[37];
          }
          let tmp52Result = !tmp29;
          if (!tmp29) {
            const obj9 = { accessible: true, accessibilityLabel: null, style: null, children: null };
            const _HermesInternal = HermesInternal;
            class S {
              constructor() {
                globalStats = closure_1_5.globalStats;
                peakHourUtc = undefined;
                if (globalStats != null) {
                  voice = globalStats.voice;
                  if (voice != null) {
                    peakHourUtc = voice.peakHourUtc;
                  }
                }
                return peakHourUtc;
              }
            }
            obj9.accessibilityLabel = "" + rounded + " " + stringResult.toLocaleLowerCase();
            obj9.style = tmp4.number;
            const obj10 = { end: rounded };
            obj9.children = React5(CheckpointCountUpStatNumberDefault, obj10);
            tmp52Result = React5(View, obj9);
          }
          class S {
            constructor() {
              globalStats = closure_1_5.globalStats;
              peakHourUtc = undefined;
              if (globalStats != null) {
                voice = globalStats.voice;
                if (voice != null) {
                  peakHourUtc = voice.peakHourUtc;
                }
              }
              return peakHourUtc;
            }
          }
          if (tmp29) {
            const intl5 = util.intl;
            let stringResult1 = intl5.string(_modDef3090.huiTne);
          } else if (null != checkpointTopPercent) {
            const intl4 = util.intl;
            const obj11 = { numMinutes: null, percent: null, percentHook: null };
            class S {
              constructor() {
                globalStats = closure_1_5.globalStats;
                peakHourUtc = undefined;
                if (globalStats != null) {
                  voice = globalStats.voice;
                  if (voice != null) {
                    peakHourUtc = voice.peakHourUtc;
                  }
                }
                return peakHourUtc;
              }
            }
            obj11.percent = checkpointTopPercent;
            obj11.percentHook = function percentHook(children, arg1) {
              return closure_1_7(CheckpointEmphasisDefault, { children }, arg1);
            };
            stringResult1 = intl4.format(_modDef3090.RqXsIs, obj11);
          } else {
            const intl3 = util.intl;
            class S {
              constructor() {
                globalStats = closure_1_5.globalStats;
                peakHourUtc = undefined;
                if (globalStats != null) {
                  voice = globalStats.voice;
                  if (voice != null) {
                    peakHourUtc = voice.peakHourUtc;
                  }
                }
                return peakHourUtc;
              }
            }
            stringResult1 = intl3.format(_modDef3090.Y3poDW, { numMinutes: null });
            const obj12 = { numMinutes: null };
          }
          cResult[4] = stateFromStores1;
          cResult[5] = tmp4.container;
          cResult[6] = tmp4.copy;
          cResult[7] = tmp4.image;
          cResult[8] = tmp4.imageContainer;
          cResult[9] = tmp4.number;
          cResult[10] = tmp4.title;
          cResult[11] = tmp4.titleText;
          let totalVoiceMinutes;
          if (stateFromStores != null) {
            totalVoiceMinutes = stateFromStores.totalVoiceMinutes;
          }
          cResult[12] = totalVoiceMinutes;
          let prop1;
          if (stateFromStores != null) {
            prop1 = stateFromStores.totalVoiceMinutesPercentile;
          }
          cResult[13] = prop1;
          cResult[14] = tmp58;
          cResult[15] = View;
          cResult[16] = View;
          cResult[17] = tmp35Result;
          cResult[18] = tmp52Result;
          cResult[19] = container;
          cResult[20] = tmp44;
          cResult[21] = "heading-lg/medium";
          cResult[22] = formatToPlainStringResult;
          cResult[23] = stringResult1;
          cResult[24] = copy;
          cResult[25] = tmp54;
          cResult[26] = tmp55;
        }
        let tmp56 = tmp29;
        if (tmp29) {
          tmp56 = null != tmp30;
        }
        if (tmp56) {
          ({ value: obj14.value, label: obj14.accessibilityLabel } = tmp30);
          class S {
            constructor() {
              globalStats = closure_1_5.globalStats;
              peakHourUtc = undefined;
              if (globalStats != null) {
                voice = globalStats.voice;
                if (voice != null) {
                  peakHourUtc = voice.peakHourUtc;
                }
              }
              return peakHourUtc;
            }
          }
        }
        cResult[35] = tmp30;
        cResult[36] = tmp29;
        cResult[37] = tmp56;
        tmp55 = tmp56;
        const tmp35Result4 = CheckpointTextDefault;
      }
      const tmp45 = React5(View, { style: tmp4.imageContainer, children: tmp40 });
      cResult[31] = tmp4.imageContainer;
      cResult[32] = tmp40;
      cResult[33] = tmp45;
      tmp44 = tmp45;
      const obj15 = { style: tmp4.imageContainer, children: tmp40 };
      const tmpResult6 = CheckpointStatsUtils;
    }
  : function CheckpointVoiceStatsScreen() {
      const tmp = closure_9();
      const items = [CheckpointStore];
      const stateFromStores = stateFromStores1(504).useStateFromStores(items, () => {
        const stats = CheckpointStore.stats;
        let voice;
        if (stats != null) {
          voice = stats.voice;
        }
        return voice;
      });
      const obj = stateFromStores1(504);
      const items1 = [CheckpointStore];
      stateFromStores1 = stateFromStores1(504).useStateFromStores(items1, () => {
        const globalStats = CheckpointStore.globalStats;
        let peakHourUtc;
        if (globalStats != null) {
          const voice = globalStats.voice;
          if (voice != null) {
            peakHourUtc = voice.peakHourUtc;
          }
        }
        return peakHourUtc;
      });
      let num;
      if (stateFromStores != null) {
        num = stateFromStores.totalVoiceMinutes;
      }
      if (num == null) {
        num = 0;
      }
      const rounded = Math.round(num);
      const items2 = [stateFromStores1];
      const memo = noop.useMemo(() => CheckpointStatsUtils.formatCheckpointPeakHour(stateFromStores1), items2);
      const obj2 = stateFromStores1(504);
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.totalVoiceMinutesPercentile;
      }
      const checkpointTopPercent = stateFromStores1(13249).getCheckpointTopPercent(prop);
      const intl = tmp2(1125).intl;
      if (rounded <= 0) {
        let stringResult = intl.string(_modDef3090.ZCwB8J);
        let tmp12 = importDefault;
      } else {
        const obj3 = { numMinutes: rounded };
        stringResult = intl.formatToPlainString(_modDef3058.UZbUtl, obj3);
        tmp12 = importDefault;
      }
      let formatToPlainStringResult;
      if (rounded > 0) {
        if (null != checkpointTopPercent) {
          const intl2 = tmp2(1125).intl;
          const obj4 = {
            numMinutes: rounded,
            percent: checkpointTopPercent,
            percentHook(arg0) {
              return arg0;
            },
          };
          formatToPlainStringResult = intl2.formatToPlainString(tmp12(3090).RqXsIs, obj4);
        }
      }
      const obj5 = { style: tmp.container, children: null };
      const obj6 = { style: tmp.imageContainer, children: null };
      const tmp2Result = stateFromStores1(13249);
      const obj7 = { animatedUri: null, staticUri: null, style: null };
      const tmp12Result = tmp12(13438);
      obj7.animatedUri = tmp12(13447);
      obj7.staticUri = tmp12(13448);
      obj7.style = tmp.image;
      obj6.children = closure_7(tmp12(13442), obj7);
      const items3 = [closure_7(View, obj6)];
      const obj8 = { style: tmp.copy, children: null };
      const obj9 = { style: tmp.title, children: null };
      const items4 = [closure_7(stateFromStores1(11740).MicrophoneIcon, { size: "xs", color: CHECKPOINT_PRIMARY })];
      const obj11 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: null };
      const obj10 = { size: "xs", color: CHECKPOINT_PRIMARY };
      const tmp12Result4 = tmp12(13442);
      obj11.children = stringResult.toLocaleUpperCase();
      items4[1] = closure_7(tmp12(13436), obj11);
      obj9.children = items4;
      const items5 = [closure_8(View, obj9), , ,];
      let tmp15Result = tmp7;
      if (rounded <= 0) {
        tmp15Result = null != memo;
      }
      if (tmp15Result) {
        ({ value: obj14.value, label: obj14.accessibilityLabel } = memo);
        tmp15Result = closure_7(tmp12(13449), { value: null, accessibilityLabel: null });
        const obj12 = { value: null, accessibilityLabel: null };
      }
      items5[1] = tmp15Result;
      let tmp15Result2 = !tmp7;
      if (rounded > 0) {
        const obj13 = { accessible: true, accessibilityLabel: null, style: null, children: null };
        const _HermesInternal = HermesInternal;
        obj13.accessibilityLabel = "" + rounded + " " + stringResult.toLocaleLowerCase();
        obj13.style = tmp.number;
        const obj15 = { end: rounded };
        obj13.children = closure_7(tmp12(13450), obj15);
        tmp15Result2 = closure_7(View, obj13);
      }
      items5[2] = tmp15Result2;
      const obj16 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
      const tmp12Result5 = tmp12(13436);
      if (rounded <= 0) {
        const intl5 = tmp2(1125).intl;
        let stringResult1 = intl5.string(tmp12(3090).huiTne);
      } else if (null != checkpointTopPercent) {
        const intl4 = tmp2(1125).intl;
        const obj17 = {
          numMinutes: rounded,
          percent: checkpointTopPercent,
          percentHook(children, arg1) {
            return closure_1_7(CheckpointEmphasisDefault, { children }, arg1);
          },
        };
        stringResult1 = intl4.format(tmp12(3090).RqXsIs, obj17);
      } else {
        const intl3 = tmp2(1125).intl;
        const obj18 = { numMinutes: rounded };
        stringResult1 = intl3.format(tmp12(3090).Y3poDW, obj18);
      }
      const obj19 = { children: null };
      obj16.children = stringResult1;
      items5[3] = closure_7(tmp12(13436), obj16);
      obj8.children = items5;
      items3[1] = closure_8(View, obj8);
      obj5.children = items3;
      obj19.children = closure_8(View, obj5);
      return closure_7(tmp12Result, obj19);
    };
