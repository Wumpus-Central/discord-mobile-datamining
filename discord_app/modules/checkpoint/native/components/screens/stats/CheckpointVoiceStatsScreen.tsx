// === Module 12991: CheckpointVoiceStatsScreen ===

// Module 12991 (CheckpointVoiceStatsScreen)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import _modDef3057 from "module_3057" /* 3057 */;
import _modDef3089 from "module_3089" /* 3089 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11648 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 12971 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 13000 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 12968 */;

require = fn;
const View = fn(17).View;
const CHECKPOINT_PRIMARY = fn(6016).CHECKPOINT_PRIMARY;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4972);
let obj2 = { container: { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 }, title: null, titleText: null, imageContainer: null, image: null, copy: null, number: null };
let obj3 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj2.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.titleText = { flexShrink: 1 };
obj2.imageContainer = { flexGrow: 1, height: "50%", justifyContent: "flex-end", alignItems: "center" };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.image = { width: "155.17241379310343%", aspectRatio: 1.2996389891696751, marginBottom: -nativeDefault.space.PX_16 };
obj2.copy = { flexShrink: 1 };
let obj5 = { width: "155.17241379310343%", aspectRatio: 1.2996389891696751, marginBottom: -nativeDefault.space.PX_16 };
obj2.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointVoiceStatsScreen() {
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
    const fn2 = function f() {
      const globalStats = CheckpointStore.globalStats;
      let peakHourUtc;
      if (globalStats != null) {
        const voice = globalStats.voice;
        if (voice != null) {
          peakHourUtc = voice.peakHourUtc;
        }
      }
      return peakHourUtc;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp10 = fn2;
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
                  let totalVoiceMinutes;
                  if (stateFromStores != null) {
                    totalVoiceMinutes = stateFromStores.totalVoiceMinutes;
                  }
                  if (cResult[12] === totalVoiceMinutes) {
                    let prop;
                    if (stateFromStores != null) {
                      prop = stateFromStores.totalVoiceMinutesPercentile;
                    }
                    if (cResult[13] === prop) {
                      let tmp16 = cResult[14];
                      let tmp17 = cResult[15];
                      let tmp18 = cResult[16];
                      let tmp19 = cResult[17];
                      let tmp20 = cResult[18];
                      let tmp21 = cResult[19];
                      let tmp22 = cResult[20];
                      let str = cResult[21];
                      let tmp23 = cResult[22];
                      let tmp24 = cResult[23];
                      let tmp25 = cResult[24];
                      let tmp26 = cResult[25];
                      let tmp27 = cResult[26];
                    }
                    if (cResult[38] === tmp16) {
                      if (cResult[39] === str) {
                        if (cResult[40] === tmp23) {
                          if (cResult[41] === tmp24) {
                            let tmp61 = cResult[42];
                          }
                          if (cResult[43] === tmp17) {
                            if (cResult[44] === tmp20) {
                              if (cResult[45] === tmp61) {
                                if (cResult[46] === tmp25) {
                                  if (cResult[47] === tmp26) {
                                    if (cResult[48] === tmp27) {
                                      let tmp64 = cResult[49];
                                    }
                                    if (cResult[50] === tmp18) {
                                      if (cResult[51] === tmp21) {
                                        if (cResult[52] === tmp22) {
                                          if (cResult[53] === tmp64) {
                                            let tmp67 = cResult[54];
                                          }
                                          if (cResult[55] === tmp19) {
                                            if (cResult[56] === tmp67) {
                                              let tmp70 = cResult[57];
                                            }
                                            return tmp70;
                                          }
                                          const obj2 = { children: tmp67 };
                                          const tmp72 = React5(tmp19, obj2);
                                          cResult[55] = tmp19;
                                          cResult[56] = tmp67;
                                          cResult[57] = tmp72;
                                          tmp70 = tmp72;
                                        }
                                      }
                                    }
                                    const obj3 = { style: tmp21, children: null };
                                    const items2 = [tmp22, tmp64];
                                    obj3.children = items2;
                                    const tmp69 = closure_1_8(tmp18, obj3);
                                    cResult[50] = tmp18;
                                    cResult[51] = tmp21;
                                    cResult[52] = tmp22;
                                    cResult[53] = tmp64;
                                    cResult[54] = tmp69;
                                    tmp67 = tmp69;
                                  }
                                }
                              }
                            }
                          }
                          const obj4 = { style: tmp25, children: null };
                          const items3 = [tmp26, tmp27, tmp20, tmp61];
                          obj4.children = items3;
                          const tmp66 = closure_1_8(tmp17, obj4);
                          cResult[43] = tmp17;
                          cResult[44] = tmp20;
                          cResult[45] = tmp61;
                          cResult[46] = tmp25;
                          cResult[47] = tmp26;
                          cResult[48] = tmp27;
                          cResult[49] = tmp66;
                          tmp64 = tmp66;
                        }
                      }
                    }
                    const obj5 = { variant: str, accessibilityLabel: tmp23, children: tmp24 };
                    const tmp63 = React5(tmp16, obj5);
                    cResult[38] = tmp16;
                    cResult[39] = str;
                    cResult[40] = tmp23;
                    cResult[41] = tmp24;
                    cResult[42] = tmp63;
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
    cResult[27] = stateFromStores1;
    cResult[28] = result;
    let tmp30 = result;
    const tmpResult5 = CheckpointStatsUtils;
  } else {
    tmp30 = cResult[28];
  }
  const tmpResult4 = initialize;
  let prop1;
  if (stateFromStores != null) {
    prop1 = stateFromStores.totalVoiceMinutesPercentile;
  }
  const checkpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent(prop1);
  const intl = util.intl;
  if (rounded <= 0) {
    let stringResult = intl.string(_modDef3089.ZCwB8J);
    let tmp35 = importDefault;
  } else {
    const obj6 = { numMinutes: rounded };
    stringResult = intl.formatToPlainString(_modDef3057.UZbUtl, obj6);
    tmp35 = importDefault;
  }
  if (rounded > 0) {
    if (null != checkpointTopPercent) {
      const intl2 = util.intl;
      const obj7 = {
        numMinutes: rounded,
        percent: checkpointTopPercent,
        percentHook(arg0) {
              return arg0;
            }
      };
      const formatToPlainStringResult = intl2.formatToPlainString(tmp35(3089).RqXsIs, obj7);
    }
  }
  const tmp35Result = tmp35(12988);
  const container = tmp4.container;
  if (cResult[29] !== tmp4.image) {
    const obj8 = { animatedUri: tmp35(12993), staticUri: tmp35(12994), style: tmp4.image };
    const tmp43 = React5(tmp35(12992), obj8);
    cResult[29] = tmp4.image;
    cResult[30] = tmp43;
    let tmp40 = tmp43;
    const tmp35Result4 = tmp35(12992);
  } else {
    tmp40 = cResult[30];
  }
  if (cResult[31] === tmp4.imageContainer) {
    if (cResult[32] === tmp40) {
      let tmp44 = cResult[33];
    }
    const copy = tmp4.copy;
    const _Symbol = Symbol;
    if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
      const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
      const tmp49 = React5(MicrophoneIcon.MicrophoneIcon, obj9);
      cResult[34] = tmp49;
      let tmp46 = tmp49;
    } else {
      tmp46 = cResult[34];
    }
    const obj10 = { style: tmp4.title, children: null };
    const items4 = [tmp46, ];
    const obj11 = { variant: "heading-md/extrabold", style: tmp4.titleText, children: stringResult.toLocaleUpperCase() };
    items4[1] = React5(tmp35(12986), obj11);
    obj10.children = items4;
    const tmp53 = closure_1_8(View, obj10);
    if (cResult[35] === tmp30) {
      if (cResult[36] === tmp29) {
        let tmp54 = cResult[37];
      }
      let tmp51Result = !tmp29;
      if (!tmp29) {
        const obj12 = { accessible: true, accessibilityLabel: null, style: null, children: null };
        const _HermesInternal = HermesInternal;
        obj12.accessibilityLabel = "" + rounded + " " + stringResult.toLocaleLowerCase();
        obj12.style = tmp4.number;
        const obj13 = { end: rounded };
        obj12.children = React5(tmp35(12997), obj13);
        tmp51Result = React5(View, obj12);
      }
      const tmp35Result6 = tmp35(12986);
      if (tmp29) {
        const intl5 = util.intl;
        let stringResult1 = intl5.string(tmp35(3089).huiTne);
      } else if (null != checkpointTopPercent) {
        const intl4 = util.intl;
        const obj15 = {
          numMinutes: rounded,
          percent: checkpointTopPercent,
          percentHook(children, arg1) {
                  return closure_1_7(CheckpointEmphasisDefault, { children }, arg1);
                }
        };
        stringResult1 = intl4.format(tmp35(3089).RqXsIs, obj15);
      } else {
        const intl3 = util.intl;
        const obj16 = { numMinutes: rounded };
        stringResult1 = intl3.format(tmp35(3089).Y3poDW, obj16);
      }
      cResult[4] = stateFromStores1;
      cResult[5] = tmp4.container;
      cResult[6] = tmp4.copy;
      cResult[7] = tmp4.image;
      cResult[8] = tmp4.imageContainer;
      cResult[9] = tmp4.number;
      cResult[10] = tmp4.title;
      cResult[11] = tmp4.titleText;
      let totalVoiceMinutes1;
      if (stateFromStores != null) {
        totalVoiceMinutes1 = stateFromStores.totalVoiceMinutes;
      }
      cResult[12] = totalVoiceMinutes1;
      let prop2;
      if (stateFromStores != null) {
        prop2 = stateFromStores.totalVoiceMinutesPercentile;
      }
      cResult[13] = prop2;
      cResult[14] = tmp35Result6;
      cResult[15] = View;
      cResult[16] = View;
      cResult[17] = tmp35Result;
      cResult[18] = tmp51Result;
      cResult[19] = container;
      cResult[20] = tmp44;
      cResult[21] = "heading-lg/medium";
      cResult[22] = formatToPlainStringResult;
      cResult[23] = stringResult1;
      cResult[24] = copy;
      cResult[25] = tmp53;
      cResult[26] = tmp54;
      tmp27 = tmp54;
      tmp26 = tmp53;
      tmp25 = copy;
      tmp24 = stringResult1;
      tmp23 = formatToPlainStringResult;
      str = "heading-lg/medium";
      tmp22 = tmp44;
      tmp21 = container;
      tmp20 = tmp51Result;
      tmp19 = tmp35Result;
      tmp18 = View;
      tmp17 = View;
      tmp16 = tmp35Result6;
    }
    let tmp51Result2 = tmp29;
    if (tmp29) {
      tmp51Result2 = null != tmp30;
    }
    if (tmp51Result2) {
      ({ value: obj14.value, label: obj14.accessibilityLabel } = tmp30);
      tmp51Result2 = React5(tmp35(12995), { value: null, accessibilityLabel: null });
      const obj17 = { value: null, accessibilityLabel: null };
    }
    cResult[35] = tmp30;
    cResult[36] = tmp29;
    cResult[37] = tmp51Result2;
    tmp54 = tmp51Result2;
    const tmp35Result5 = tmp35(12986);
  }
  const tmp45 = React5(View, { style: tmp4.imageContainer, children: tmp40 });
  cResult[31] = tmp4.imageContainer;
  cResult[32] = tmp40;
  cResult[33] = tmp45;
  tmp44 = tmp45;
  const obj18 = { style: tmp4.imageContainer, children: tmp40 };
  const tmpResult6 = CheckpointStatsUtils;
}) : (function CheckpointVoiceStatsScreen() {
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
  const checkpointTopPercent = stateFromStores1(12971).getCheckpointTopPercent(prop);
  const intl = tmp2(1125).intl;
  if (rounded <= 0) {
    let stringResult = intl.string(_modDef3089.ZCwB8J);
    let tmp12 = importDefault;
  } else {
    const obj3 = { numMinutes: rounded };
    stringResult = intl.formatToPlainString(_modDef3057.UZbUtl, obj3);
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
            }
      };
      formatToPlainStringResult = intl2.formatToPlainString(tmp12(3089).RqXsIs, obj4);
    }
  }
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { style: tmp.imageContainer, children: null };
  const tmp2Result = stateFromStores1(12971);
  const obj7 = { animatedUri: null, staticUri: null, style: null };
  const tmp12Result = tmp12(12988);
  obj7.animatedUri = tmp12(12993);
  obj7.staticUri = tmp12(12994);
  obj7.style = tmp.image;
  obj6.children = closure_7(tmp12(12992), obj7);
  const items3 = [closure_7(View, obj6), ];
  const obj8 = { style: tmp.copy, children: null };
  const obj9 = { style: tmp.title, children: null };
  const items4 = [closure_7(stateFromStores1(11648).MicrophoneIcon, { size: "xs", color: CHECKPOINT_PRIMARY }), ];
  const obj11 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const obj10 = { size: "xs", color: CHECKPOINT_PRIMARY };
  const tmp12Result4 = tmp12(12992);
  obj11.children = stringResult.toLocaleUpperCase();
  items4[1] = closure_7(tmp12(12986), obj11);
  obj9.children = items4;
  const items5 = [closure_8(View, obj9), , , ];
  let tmp15Result = tmp7;
  if (rounded <= 0) {
    tmp15Result = null != memo;
  }
  if (tmp15Result) {
    ({ value: obj14.value, label: obj14.accessibilityLabel } = memo);
    tmp15Result = closure_7(tmp12(12995), { value: null, accessibilityLabel: null });
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
    obj13.children = closure_7(tmp12(12997), obj15);
    tmp15Result2 = closure_7(View, obj13);
  }
  items5[2] = tmp15Result2;
  const obj16 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
  const tmp12Result5 = tmp12(12986);
  if (rounded <= 0) {
    const intl5 = tmp2(1125).intl;
    let stringResult1 = intl5.string(tmp12(3089).huiTne);
  } else if (null != checkpointTopPercent) {
    const intl4 = tmp2(1125).intl;
    const obj17 = {
      numMinutes: rounded,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          return closure_1_7(CheckpointEmphasisDefault, { children }, arg1);
        }
    };
    stringResult1 = intl4.format(tmp12(3089).RqXsIs, obj17);
  } else {
    const intl3 = tmp2(1125).intl;
    const obj18 = { numMinutes: rounded };
    stringResult1 = intl3.format(tmp12(3089).Y3poDW, obj18);
  }
  const obj19 = { children: null };
  obj16.children = stringResult1;
  items5[3] = closure_7(tmp12(12986), obj16);
  obj8.children = items5;
  items3[1] = closure_8(View, obj8);
  obj5.children = items3;
  obj19.children = closure_8(View, obj5);
  return closure_7(tmp12Result, obj19);
});