// === Module 12897: CheckpointVoiceStatsScreen ===

// Module 12897 (CheckpointVoiceStatsScreen)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3056 from "module_3056" /* 3056 */;
import _modDef3088 from "module_3088" /* 3088 */;
import CheckpointConstants from "CheckpointConstants" /* 6002 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 12904 */;
import CheckpointStore from "CheckpointStore" /* 12875 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const initialize = intl(504);
const util = intl(1128);
const MicrophoneIcon = intl(11591);
const CheckpointStatsUtils = intl(12878);
const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 9200000;
let obj = { container: { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 }, title: null, titleText: null, imageContainer: null, image: null, copy: null, number: null };
let obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.titleText = { flexShrink: 1 };
obj.imageContainer = { flexGrow: 1, height: "50%", justifyContent: "flex-end", alignItems: "center" };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.image = { width: "155.17241379310343%", aspectRatio: 1.2996389891696751, marginBottom: -nativeDefault.space.PX_16 };
obj.copy = { flexShrink: 1 };
let obj4 = { width: "155.17241379310343%", aspectRatio: 1.2996389891696751, marginBottom: -nativeDefault.space.PX_16 };
obj.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(obj);
let obj5 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointVoiceStatsScreen() {
  let intl = require;
  let prop1 = dependencyMap;
  const cResult = c.c(51);
  const tmp3 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function h() {
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
        if (cResult[7] === tmp3.image) {
          if (cResult[8] === tmp3.imageContainer) {
            if (cResult[9] === tmp3.number) {
              if (cResult[10] === tmp3.title) {
                if (cResult[11] === tmp3.titleText) {
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
                  if (cResult[12] === undefined) {
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
                    if (cResult[32] === tmp15) {
                      if (cResult[33] === str) {
                        if (cResult[34] === tmp21) {
                          if (cResult[35] === tmp22) {
                            let tmp60 = cResult[36];
                          }
                          if (cResult[37] === View) {
                            if (cResult[38] === tmp60) {
                              if (cResult[39] === tmp23) {
                                if (cResult[40] === tmp24) {
                                  if (cResult[41] === tmp25) {
                                    let tmp63 = cResult[42];
                                  }
                                  if (cResult[43] === View) {
                                    if (cResult[44] === tmp19) {
                                      if (cResult[45] === tmp20) {
                                        if (cResult[46] === tmp63) {
                                          let tmp67 = cResult[47];
                                        }
                                        if (cResult[48] === tmp18) {
                                          if (cResult[49] === tmp67) {
                                            let tmp71 = cResult[50];
                                          }
                                          return tmp71;
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
                                        tmp73[0] = tmp67;
                                        const tmp74 = timestampProducer(tmp18, tmp73);
                                        cResult[48] = tmp18;
                                        cResult[49] = tmp67;
                                        cResult[50] = tmp74;
                                        tmp71 = tmp74;
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
                                  tmp69[0] = tmp19;
                                  const items2 = [tmp20, tmp63];
                                  tmp69[1] = items2;
                                  const tmp70 = React5(View, tmp69);
                                  cResult[43] = View;
                                  cResult[44] = tmp19;
                                  cResult[45] = tmp20;
                                  cResult[46] = tmp63;
                                  cResult[47] = tmp70;
                                  tmp67 = tmp70;
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
                          tmp65[0] = tmp23;
                          const items3 = [tmp24, tmp25, tmp60];
                          tmp65[1] = items3;
                          const tmp66 = React5(View, tmp65);
                          cResult[37] = View;
                          cResult[38] = tmp60;
                          cResult[39] = tmp23;
                          cResult[40] = tmp24;
                          cResult[41] = tmp25;
                          cResult[42] = tmp66;
                          tmp63 = tmp66;
                        }
                      }
                    }
                    const obj2 = { variant: str, accessibilityLabel: tmp21, children: tmp22 };
                    const tmp62 = timestampProducer(tmp15, obj2);
                    cResult[32] = tmp15;
                    cResult[33] = str;
                    cResult[34] = tmp21;
                    cResult[35] = tmp22;
                    cResult[36] = tmp62;
                    tmp60 = tmp62;
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
  const tmp32Result = tmp32(12895);
  const container = tmp3.container;
  if (cResult[26] !== tmp3.image) {
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
    const tmp40 = timestampProducer(tmp32(12898), obj5);
    cResult[26] = tmp3.image;
    cResult[27] = tmp40;
    let tmp37 = tmp40;
    const tmp32Result4 = tmp32(12898);
  } else {
    tmp37 = cResult[27];
  }
  if (cResult[28] === tmp3.imageContainer) {
    if (cResult[29] === tmp37) {
      let tmp41 = cResult[30];
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
      cResult[31] = tmp47;
      let tmp44 = tmp47;
      const obj6 = { size: "xs", color: null };
    } else {
      tmp44 = cResult[31];
    }
    const obj7 = { style: tmp3.title, children: null };
    const items4 = [tmp44, ];
    const obj8 = { variant: "heading-md/extrabold", style: tmp3.titleText, children: stringResult.toLocaleUpperCase() };
    items4[1] = timestampProducer(tmp32(12893), obj8);
    obj7.children = items4;
    const tmp51 = React5(View, obj7);
    if (tmp27) {
      { value: null, compact: true }.value = value;
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
      const obj9 = { value: null, compact: true };
    } else {
      const obj10 = { accessible: true, accessibilityLabel: null, style: null, children: null };
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
      obj10.accessibilityLabel = "" + rounded + " " + stringResult.toLocaleLowerCase();
      obj10.style = tmp3.number;
      const obj11 = { end: rounded };
      obj10.children = timestampProducer(tmp32(12901), obj11);
      const tmp49Result = timestampProducer(View, obj10);
    }
    const tmp32Result6 = tmp32(12893);
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
        const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, { hour: "numeric", minute: "2-digit", timeZone: "America/Los_Angeles" });
        const _Date = Date;
        const _Date2 = Date;
        const intl6 = util.intl;
        const obj12 = { peakTime: dateTimeFormat.format(Date.UTC(2026, 0, 25, stateFromStores1)) };
        const formatResult = dateTimeFormat.format(Date.UTC(2026, 0, 25, stateFromStores1));
        const formatToPlainStringResult1 = intl6.formatToPlainString(_modDef3088.huiTne, obj12);
      }
    } else {
      if (null != checkpointTopPercent) {
        const intl5 = util.intl;
        const obj13 = { numMinutes: null, percent: null, percentHook: null };
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
        obj13.percent = checkpointTopPercent;
        obj13.percentHook = function percentHook(children, arg1) {
          return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
        };
        let formatResult1 = intl5.format(tmp32(3088).RqXsIs, obj13);
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
        const obj14 = { numMinutes: null };
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
      cResult[7] = tmp3.image;
      cResult[8] = tmp3.imageContainer;
      cResult[9] = tmp3.number;
      cResult[10] = tmp3.title;
      cResult[11] = tmp3.titleText;
      let totalVoiceMinutes;
      if (stateFromStores != null) {
        totalVoiceMinutes = stateFromStores.totalVoiceMinutes;
      }
      cResult[12] = totalVoiceMinutes;
      let prop2;
      if (stateFromStores != null) {
        prop2 = stateFromStores.totalVoiceMinutesPercentile;
      }
      cResult[13] = prop2;
      cResult[14] = tmp32Result6;
      cResult[15] = View;
      cResult[16] = View;
      cResult[17] = tmp32Result;
      cResult[18] = container;
      cResult[19] = tmp41;
      cResult[20] = "heading-lg/medium";
      cResult[21] = formatToPlainStringResult;
      cResult[22] = formatResult1;
      cResult[23] = copy;
      cResult[24] = tmp51;
      cResult[25] = tmp49Result;
    }
    const tmp32Result5 = tmp32(12893);
  }
  const tmp42 = timestampProducer(View, { style: tmp3.imageContainer, children: tmp37 });
  cResult[28] = tmp3.imageContainer;
  cResult[29] = tmp37;
  cResult[30] = tmp42;
  tmp41 = tmp42;
  const intlResult2 = CheckpointStatsUtils;
  const obj15 = { style: tmp3.imageContainer, children: tmp37 };
}) : (function CheckpointVoiceStatsScreen() {
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
            }
      };
      formatToPlainStringResult = intl3.formatToPlainString(tmp11(3088).RqXsIs, obj4);
    }
  }
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { style: tmp.imageContainer, children: null };
  const intlResult = CheckpointStatsUtils;
  const obj7 = { uri: null, style: null };
  const tmp11Result = tmp11(12895);
  obj7.uri = tmp11(12899);
  obj7.style = tmp.image;
  obj6.children = timestampProducer(tmp11(12898), obj7);
  const items2 = [timestampProducer(View, obj6), ];
  const obj8 = { style: tmp.copy, children: null };
  const obj9 = { style: tmp.title, children: null };
  const items3 = [timestampProducer(MicrophoneIcon.MicrophoneIcon, { size: "xs", color: CHECKPOINT_PRIMARY }), ];
  const obj11 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const obj10 = { size: "xs", color: CHECKPOINT_PRIMARY };
  const tmp11Result3 = tmp11(12898);
  obj11.children = stringResult.toLocaleUpperCase();
  items3[1] = timestampProducer(tmp11(12893), obj11);
  obj9.children = items3;
  const items4 = [React5(View, obj9), , ];
  if (rounded <= 0) {
    const obj12 = { value, compact: true };
    let tmp14Result = timestampProducer(tmp11(12900), obj12);
  } else {
    const obj13 = { accessible: true, accessibilityLabel: null, style: null, children: null };
    const _HermesInternal = HermesInternal;
    obj13.accessibilityLabel = "" + rounded + " " + stringResult.toLocaleLowerCase();
    obj13.style = tmp.number;
    const obj14 = { end: rounded };
    obj13.children = timestampProducer(tmp11(12901), obj14);
    tmp14Result = timestampProducer(View, obj13);
  }
  items4[1] = tmp14Result;
  const obj15 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
  if (rounded <= 0) {
    if (null == stateFromStores1) {
      intl = util.intl;
      prop1 = tmp10(3088)["X/xLXp"];
      let stringResult1 = intl.string(prop1);
    } else {
      const _Intl = Intl;
      const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, { hour: "numeric", minute: "2-digit", timeZone: "America/Los_Angeles" });
      const _Date = Date;
      const _Date2 = Date;
      const intl6 = util.intl;
      const obj16 = { peakTime: dateTimeFormat.format(Date.UTC(2026, 0, 25, stateFromStores1)) };
      stringResult1 = intl6.formatToPlainString(tmp10(3088).huiTne, obj16);
      const formatResult = dateTimeFormat.format(Date.UTC(2026, 0, 25, stateFromStores1));
    }
  } else {
    if (null != checkpointTopPercent) {
      const intl5 = util.intl;
      const obj17 = {
        numMinutes: rounded,
        percent: checkpointTopPercent,
        percentHook(children, arg1) {
              return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
            }
      };
      let formatResult1 = intl5.format(tmp11(3088).RqXsIs, obj17);
    } else {
      const intl4 = util.intl;
      const obj18 = { numMinutes: rounded };
      formatResult1 = intl4.format(tmp11(3088).Y3poDW, obj18);
    }
    const obj19 = { children: null };
    obj15.children = formatResult1;
    items4[2] = timestampProducer(tmp22, obj15);
    obj8.children = items4;
    items2[1] = React5(View, obj8);
    obj5.children = items2;
    obj19.children = React5(View, obj5);
    return timestampProducer(tmp11Result, obj19);
  }
  const tmp11Result4 = tmp11(12893);
});