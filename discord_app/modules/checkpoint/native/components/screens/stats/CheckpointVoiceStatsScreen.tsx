// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx
import _mod17 from "../../../../../../../_runtime/metro/00017__.js";
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3056 from "../../../../Checkpoint.messages.js";
import _modDef3088 from "../../../../Checkpoint2026.messages.js";
import CheckpointConstants from "../../../../CheckpointConstants.tsx";
import CheckpointEmphasisDefault from "../../CheckpointEmphasis.tsx";
import CheckpointStore from "../../../../CheckpointStore.tsx";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const initialize = intl(504);
const util = intl(1128);
const MicrophoneIcon = intl(11574);
const CheckpointStatsUtils = intl(12846);
const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 9200000;
let obj = {
  container: { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 },
  title: null,
  titleText: null,
  imageContainer: null,
  image: null,
  copy: null,
  number: null,
  globalNumber: null,
  globe: null,
};
let obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.titleText = { flexShrink: 1 };
obj.imageContainer = { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" };
obj.image = { height: "100%", aspectRatio: 1 };
obj.copy = { flexShrink: 1 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj.globalNumber = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  columnGap: nativeDefault.space.PX_8,
  marginTop: -nativeDefault.space.PX_12,
  marginBottom: -nativeDefault.space.PX_6,
};
obj.globe = { width: 75, height: 56 };
let closure_9 = createStyles.createStyles(obj);
let obj5 = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  columnGap: nativeDefault.space.PX_8,
  marginTop: -nativeDefault.space.PX_12,
  marginBottom: -nativeDefault.space.PX_6,
};
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointVoiceStatsScreen() {
      let intl = require;
      let prop1 = dependencyMap;
      const cResult = c.c(53);
      const tmp3 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CheckpointStore];
        const fn = function b() {
          const stats = CheckpointStore.stats;
          let voice;
          if (stats != null) {
            voice = stats.voice;
          }
          return voice;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [CheckpointStore];
        class S {
          constructor() {
            globalStats = closure_1_4.globalStats;
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
        let tmp9 = S;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const intlResult = initialize;
      const stateFromStores1 = initialize.useStateFromStores(tmp8, tmp9);
      if (cResult[4] === stateFromStores1) {
        if (cResult[5] === tmp3.container) {
          if (cResult[6] === tmp3.copy) {
            if (cResult[7] === tmp3.globalNumber) {
              if (cResult[8] === tmp3.globe) {
                if (cResult[9] === tmp3.image) {
                  if (cResult[10] === tmp3.imageContainer) {
                    if (cResult[11] === tmp3.number) {
                      if (cResult[12] === tmp3.title) {
                        if (cResult[13] === tmp3.titleText) {
                          class S {
                            constructor() {
                              globalStats = closure_1_4.globalStats;
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
                          if (cResult[14] === undefined) {
                            if (stateFromStores != null) {
                              const totalVoiceMinutesPercentile = stateFromStores.totalVoiceMinutesPercentile;
                            }
                            class S {
                              constructor() {
                                globalStats = closure_1_4.globalStats;
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
                            if (cResult[34] === tmp15) {
                              if (cResult[35] === str) {
                                if (cResult[36] === tmp21) {
                                  if (cResult[37] === tmp22) {
                                    let tmp61 = cResult[38];
                                  }
                                  if (cResult[39] === View) {
                                    if (cResult[40] === tmp61) {
                                      if (cResult[41] === tmp23) {
                                        if (cResult[42] === tmp24) {
                                          if (cResult[43] === tmp25) {
                                            let tmp64 = cResult[44];
                                          }
                                          if (cResult[45] === View) {
                                            if (cResult[46] === tmp19) {
                                              if (cResult[47] === tmp20) {
                                                if (cResult[48] === tmp64) {
                                                  let tmp68 = cResult[49];
                                                }
                                                if (cResult[50] === tmp18) {
                                                  if (cResult[51] === tmp68) {
                                                    let tmp72 = cResult[52];
                                                  }
                                                  return tmp72;
                                                }
                                                class S {
                                                  constructor() {
                                                    globalStats = closure_1_4.globalStats;
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
                                                tmp74[0] = tmp68;
                                                const tmp75 = timestampProducer(tmp18, tmp74);
                                                cResult[50] = tmp18;
                                                cResult[51] = tmp68;
                                                cResult[52] = tmp75;
                                                tmp72 = tmp75;
                                              }
                                            }
                                          }
                                          class S {
                                            constructor() {
                                              globalStats = closure_1_4.globalStats;
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
                                          tmp70[0] = tmp19;
                                          const items2 = [tmp20, tmp64];
                                          tmp70[1] = items2;
                                          const tmp71 = React5(View, tmp70);
                                          cResult[45] = View;
                                          cResult[46] = tmp19;
                                          cResult[47] = tmp20;
                                          cResult[48] = tmp64;
                                          cResult[49] = tmp71;
                                          tmp68 = tmp71;
                                        }
                                      }
                                    }
                                  }
                                  class S {
                                    constructor() {
                                      globalStats = closure_1_4.globalStats;
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
                                  tmp66[0] = tmp23;
                                  const items3 = [tmp24, tmp25, tmp61];
                                  tmp66[1] = items3;
                                  const tmp67 = React5(View, tmp66);
                                  cResult[39] = View;
                                  cResult[40] = tmp61;
                                  cResult[41] = tmp23;
                                  cResult[42] = tmp24;
                                  cResult[43] = tmp25;
                                  cResult[44] = tmp67;
                                  tmp64 = tmp67;
                                }
                              }
                            }
                            const obj2 = { variant: str, accessibilityLabel: tmp21, children: tmp22 };
                            const tmp63 = timestampProducer(tmp15, obj2);
                            cResult[34] = tmp15;
                            cResult[35] = str;
                            cResult[36] = tmp21;
                            cResult[37] = tmp22;
                            cResult[38] = tmp63;
                            tmp61 = tmp63;
                          }
                        }
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
      const intlResult1 = initialize;
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.totalVoiceMinutesPercentile;
      }
      const checkpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent(prop);
      const intl2 = util.intl;
      if (rounded <= 0) {
        let stringResult = intl2.string(_modDef3088.ZCwB8J);
        class S {
          constructor() {
            globalStats = closure_1_4.globalStats;
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
        let tmp32 = importDefault;
      } else {
        class S {
          constructor() {
            globalStats = closure_1_4.globalStats;
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
        stringResult = intl2.formatToPlainString(_modDef3056.UZbUtl, { numMinutes: null });
        tmp32 = importDefault;
        const obj3 = { numMinutes: null };
      }
      if (rounded > 0) {
        if (null != checkpointTopPercent) {
          const intl3 = util.intl;
          const obj4 = { numMinutes: null, percent: null, percentHook: null };
          class S {
            constructor() {
              globalStats = closure_1_4.globalStats;
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
          const formatToPlainStringResult = intl3.formatToPlainString(tmp32(3088).RqXsIs, obj4);
        }
      }
      const tmp32Result = tmp32(12863);
      const container = tmp3.container;
      if (cResult[28] !== tmp3.image) {
        const obj5 = { uri: null, style: null };
        class S {
          constructor() {
            globalStats = closure_1_4.globalStats;
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
        obj5.style = tmp3.image;
        const tmp40 = timestampProducer(tmp32(12866), obj5);
        cResult[28] = tmp3.image;
        cResult[29] = tmp40;
        let tmp37 = tmp40;
        const tmp32Result5 = tmp32(12866);
      } else {
        tmp37 = cResult[29];
      }
      if (cResult[30] === tmp3.imageContainer) {
        if (cResult[31] === tmp37) {
          let tmp41 = cResult[32];
        }
        const copy = tmp3.copy;
        const _Symbol = Symbol;
        class S {
          constructor() {
            globalStats = closure_1_4.globalStats;
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
        if (tmp43 === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor() {
              globalStats = closure_1_4.globalStats;
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
          const tmp47 = timestampProducer(MicrophoneIcon.MicrophoneIcon, { size: "xs", color: null });
          cResult[33] = tmp47;
          let tmp44 = tmp47;
          const obj6 = { size: "xs", color: null };
        } else {
          tmp44 = cResult[33];
        }
        const obj7 = { style: tmp3.title, children: null };
        const items4 = [tmp44];
        const obj8 = {
          variant: "heading-md/extrabold",
          style: tmp3.titleText,
          children: stringResult.toLocaleUpperCase(),
        };
        items4[1] = timestampProducer(tmp32(12861), obj8);
        obj7.children = items4;
        const tmp51 = React5(View, obj7);
        const obj9 = { accessible: true, accessibilityLabel: null, style: null, children: null };
        if (tmp27) {
          obj9.accessibilityLabel = value.toLocaleString(util.intl.currentLocale);
          class S {
            constructor() {
              globalStats = closure_1_4.globalStats;
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
          const obj10 = { value, size: 80 };
          const items5 = [timestampProducer(tmp32(12868), obj10)];
          const obj11 = { uri: tmp32(12869), style: tmp3.globe };
          items5[1] = timestampProducer(tmp32(12866), obj11);
          obj9.children = items5;
          let tmp49Result = React5(View, obj9);
          const tmp32Result7 = tmp32(12866);
        } else {
          const _HermesInternal = HermesInternal;
          class S {
            constructor() {
              globalStats = closure_1_4.globalStats;
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
          obj9.style = tmp3.number;
          const obj12 = { end: rounded };
          obj9.children = timestampProducer(tmp32(12870), obj12);
          tmp49Result = timestampProducer(View, obj9);
        }
        const tmp32Result8 = tmp32(12861);
        if (tmp27) {
          if (null == stateFromStores1) {
            intl = util.intl;
            const string = intl.string;
            prop1 = _modDef3088["X/xLXp"];
            class S {
              constructor() {
                globalStats = closure_1_4.globalStats;
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
            const _Intl = Intl;
            class S {
              constructor() {
                globalStats = closure_1_4.globalStats;
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
            const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, {
              hour: "numeric",
              minute: "2-digit",
              timeZone: "America/Los_Angeles",
            });
            const _Date = Date;
            const _Date2 = Date;
            const intl6 = util.intl;
            const obj13 = { peakTime: dateTimeFormat.format(Date.UTC(2026, 0, 25, stateFromStores1)) };
            const formatResult = dateTimeFormat.format(Date.UTC(2026, 0, 25, stateFromStores1));
            const formatToPlainStringResult1 = intl6.formatToPlainString(_modDef3088.huiTne, obj13);
          }
        } else {
          if (null != checkpointTopPercent) {
            const intl5 = util.intl;
            const obj14 = { numMinutes: null, percent: null, percentHook: null };
            class S {
              constructor() {
                globalStats = closure_1_4.globalStats;
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
            obj14.percent = checkpointTopPercent;
            obj14.percentHook = function percentHook(children, arg1) {
              return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
            };
            let formatResult1 = intl5.format(tmp32(3088).RqXsIs, obj14);
          } else {
            const intl4 = util.intl;
            class S {
              constructor() {
                globalStats = closure_1_4.globalStats;
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
            formatResult1 = intl4.format(tmp32(3088).Y3poDW, { numMinutes: null });
            const obj15 = { numMinutes: null };
          }
          cResult[4] = stateFromStores1;
          class S {
            constructor() {
              globalStats = closure_1_4.globalStats;
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
          cResult[5] = tmp3.container;
          cResult[6] = tmp3.copy;
          cResult[7] = tmp3.globalNumber;
          cResult[8] = tmp3.globe;
          cResult[9] = tmp3.image;
          cResult[10] = tmp3.imageContainer;
          cResult[11] = tmp3.number;
          cResult[12] = tmp3.title;
          cResult[13] = tmp3.titleText;
          let totalVoiceMinutes;
          if (stateFromStores != null) {
            totalVoiceMinutes = stateFromStores.totalVoiceMinutes;
          }
          cResult[14] = totalVoiceMinutes;
          let prop2;
          if (stateFromStores != null) {
            prop2 = stateFromStores.totalVoiceMinutesPercentile;
          }
          cResult[15] = prop2;
          cResult[16] = tmp32Result8;
          cResult[17] = View;
          cResult[18] = View;
          cResult[19] = tmp32Result;
          cResult[20] = container;
          cResult[21] = tmp41;
          cResult[22] = "heading-lg/medium";
          cResult[23] = formatToPlainStringResult;
          cResult[24] = formatResult1;
          cResult[25] = copy;
          cResult[26] = tmp51;
          cResult[27] = tmp49Result;
        }
        const tmp32Result6 = tmp32(12861);
      }
      const tmp42 = timestampProducer(View, { style: tmp3.imageContainer, children: tmp37 });
      cResult[30] = tmp3.imageContainer;
      cResult[31] = tmp37;
      cResult[32] = tmp42;
      tmp41 = tmp42;
      const intlResult2 = CheckpointStatsUtils;
      const obj16 = { style: tmp3.imageContainer, children: tmp37 };
    }
  : function CheckpointVoiceStatsScreen() {
      const tmp = closure_9();
      let intl = require;
      let prop1 = dependencyMap;
      const items = [CheckpointStore];
      const stateFromStores = initialize.useStateFromStores(items, () => {
        const stats = CheckpointStore.stats;
        let voice;
        if (stats != null) {
          voice = stats.voice;
        }
        return voice;
      });
      const items1 = [CheckpointStore];
      const stateFromStores1 = initialize.useStateFromStores(items1, () => {
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
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.totalVoiceMinutesPercentile;
      }
      const checkpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent(prop);
      const intl2 = util.intl;
      if (rounded <= 0) {
        let stringResult = intl2.string(_modDef3088.ZCwB8J);
        let tmp10 = importDefault;
        let tmp11 = importDefault;
      } else {
        const obj3 = { numMinutes: rounded };
        stringResult = intl2.formatToPlainString(_modDef3056.UZbUtl, obj3);
        tmp10 = importDefault;
        tmp11 = importDefault;
      }
      let formatToPlainStringResult;
      if (rounded > 0) {
        if (null != checkpointTopPercent) {
          const intl3 = util.intl;
          const obj4 = {
            numMinutes: rounded,
            percent: checkpointTopPercent,
            percentHook(arg0) {
              return arg0;
            },
          };
          formatToPlainStringResult = intl3.formatToPlainString(tmp11(3088).RqXsIs, obj4);
        }
      }
      const obj5 = { style: tmp.container, children: null };
      const obj6 = { style: tmp.imageContainer, children: null };
      const intlResult = CheckpointStatsUtils;
      const obj7 = { uri: null, style: null };
      const tmp11Result = tmp11(12863);
      obj7.uri = tmp11(12867);
      obj7.style = tmp.image;
      obj6.children = timestampProducer(tmp11(12866), obj7);
      const items2 = [timestampProducer(View, obj6)];
      const obj8 = { style: tmp.copy, children: null };
      const obj9 = { style: tmp.title, children: null };
      const items3 = [timestampProducer(MicrophoneIcon.MicrophoneIcon, { size: "xs", color: CHECKPOINT_PRIMARY })];
      const obj11 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
      const obj10 = { size: "xs", color: CHECKPOINT_PRIMARY };
      const tmp11Result4 = tmp11(12866);
      obj11.children = stringResult.toLocaleUpperCase();
      items3[1] = timestampProducer(tmp11(12861), obj11);
      obj9.children = items3;
      const items4 = [React5(View, obj9), ,];
      const obj12 = { accessible: true, accessibilityLabel: null, style: null, children: null };
      if (rounded <= 0) {
        obj12.accessibilityLabel = value.toLocaleString(util.intl.currentLocale);
        obj12.style = tmp.globalNumber;
        const obj13 = { value, size: 80 };
        const items5 = [timestampProducer(tmp11(12868), obj13)];
        const obj14 = { uri: tmp11(12869), style: tmp.globe };
        items5[1] = timestampProducer(tmp11(12866), obj14);
        obj12.children = items5;
        let tmp14Result = React5(View, obj12);
        const tmp11Result6 = tmp11(12866);
      } else {
        const _HermesInternal = HermesInternal;
        obj12.accessibilityLabel = "" + rounded + " " + stringResult.toLocaleLowerCase();
        obj12.style = tmp.number;
        const obj15 = { end: rounded };
        obj12.children = timestampProducer(tmp11(12870), obj15);
        tmp14Result = timestampProducer(View, obj12);
      }
      items4[1] = tmp14Result;
      const obj16 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
      if (rounded <= 0) {
        if (null == stateFromStores1) {
          intl = util.intl;
          prop1 = tmp10(3088)["X/xLXp"];
          let stringResult1 = intl.string(prop1);
        } else {
          const _Intl = Intl;
          const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, {
            hour: "numeric",
            minute: "2-digit",
            timeZone: "America/Los_Angeles",
          });
          const _Date = Date;
          const _Date2 = Date;
          const intl6 = util.intl;
          const obj17 = { peakTime: dateTimeFormat.format(Date.UTC(2026, 0, 25, stateFromStores1)) };
          stringResult1 = intl6.formatToPlainString(tmp10(3088).huiTne, obj17);
          const formatResult = dateTimeFormat.format(Date.UTC(2026, 0, 25, stateFromStores1));
        }
      } else {
        if (null != checkpointTopPercent) {
          const intl5 = util.intl;
          const obj18 = {
            numMinutes: rounded,
            percent: checkpointTopPercent,
            percentHook(children, arg1) {
              return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
            },
          };
          let formatResult1 = intl5.format(tmp11(3088).RqXsIs, obj18);
        } else {
          const intl4 = util.intl;
          const obj19 = { numMinutes: rounded };
          formatResult1 = intl4.format(tmp11(3088).Y3poDW, obj19);
        }
        const obj20 = { children: null };
        obj16.children = formatResult1;
        items4[2] = timestampProducer(tmp23, obj16);
        obj8.children = items4;
        items2[1] = React5(View, obj8);
        obj5.children = items2;
        obj20.children = React5(View, obj5);
        return timestampProducer(tmp11Result, obj20);
      }
      const tmp11Result5 = tmp11(12861);
    };
