// === Module 13015: CheckpointGameTimeStatsScreen ===

// Module 13015 (CheckpointGameTimeStatsScreen)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import _modDef3088 from "module_3088" /* 3088 */;
import CheckpointConstants from "CheckpointConstants" /* 6015 */;
import CalendarIcon from "CalendarIcon" /* 9047 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 12959 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 12987 */;
import CheckpointStore from "CheckpointStore" /* 12956 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { container: { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 }, title: null, titleText: null, imageContainer: null, image: null, copy: null, number: null };
let obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.titleText = { flexShrink: 1 };
obj.imageContainer = { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" };
obj.image = { height: "100%", aspectRatio: 0.6498194945848376 };
obj.copy = { flexShrink: 1 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj);
let obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGameTimeStatsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointGameTimeStatsScreen() {
  const cResult = c.c(57);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function p() {
      const stats = CheckpointStore.stats;
      let games;
      if (stats != null) {
        games = stats.games;
      }
      return games;
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
    const fn2 = function b() {
      const globalStats = CheckpointStore.globalStats;
      let prop;
      if (globalStats != null) {
        const games = globalStats.games;
        if (games != null) {
          prop = games.numUsersPlayedEveryDay;
        }
      }
      return prop;
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
  let totalDaysPlayed;
  if (stateFromStores != null) {
    totalDaysPlayed = stateFromStores.totalDaysPlayed;
  }
  if (cResult[4] === totalDaysPlayed) {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.totalDaysPlayedPercentile;
    }
    if (cResult[5] === prop) {
      if (cResult[6] === stateFromStores1) {
        if (cResult[7] === tmp4.container) {
          if (cResult[8] === tmp4.copy) {
            if (cResult[9] === tmp4.image) {
              if (cResult[10] === tmp4.imageContainer) {
                if (cResult[11] === tmp4.number) {
                  if (cResult[12] === tmp4.title) {
                    if (cResult[13] === tmp4.titleText) {
                      let tmp15 = cResult[14];
                      let tmp16 = cResult[15];
                      let tmp17 = cResult[16];
                      let tmp18 = cResult[17];
                      let tmp19 = cResult[18];
                      let tmp20 = cResult[19];
                      let str = cResult[20];
                      let tmp21 = cResult[21];
                      let tmp22 = cResult[22];
                      let tmp23 = cResult[23];
                      let tmp24 = cResult[24];
                      let tmp25 = cResult[25];
                    }
                    if (cResult[38] === tmp15) {
                      if (cResult[39] === str) {
                        if (cResult[40] === tmp21) {
                          if (cResult[41] === tmp22) {
                            let tmp62 = cResult[42];
                          }
                          if (cResult[43] === tmp16) {
                            if (cResult[44] === tmp62) {
                              if (cResult[45] === tmp23) {
                                if (cResult[46] === tmp24) {
                                  if (cResult[47] === tmp25) {
                                    let tmp65 = cResult[48];
                                  }
                                  if (cResult[49] === tmp17) {
                                    if (cResult[50] === tmp19) {
                                      if (cResult[51] === tmp20) {
                                        if (cResult[52] === tmp65) {
                                          let tmp68 = cResult[53];
                                        }
                                        if (cResult[54] === tmp18) {
                                          if (cResult[55] === tmp68) {
                                            let tmp71 = cResult[56];
                                          }
                                          return tmp71;
                                        }
                                        const obj2 = { children: tmp68 };
                                        const tmp73 = timestampProducer(tmp18, obj2);
                                        cResult[54] = tmp18;
                                        cResult[55] = tmp68;
                                        cResult[56] = tmp73;
                                        tmp71 = tmp73;
                                      }
                                    }
                                  }
                                  const obj3 = { style: tmp19, children: null };
                                  const items2 = [tmp20, tmp65];
                                  obj3.children = items2;
                                  const tmp70 = React5(tmp17, obj3);
                                  cResult[49] = tmp17;
                                  cResult[50] = tmp19;
                                  cResult[51] = tmp20;
                                  cResult[52] = tmp65;
                                  cResult[53] = tmp70;
                                  tmp68 = tmp70;
                                }
                              }
                            }
                          }
                          const obj4 = { style: tmp23, children: null };
                          const items3 = [tmp24, tmp25, tmp62];
                          obj4.children = items3;
                          const tmp67 = React5(tmp16, obj4);
                          cResult[43] = tmp16;
                          cResult[44] = tmp62;
                          cResult[45] = tmp23;
                          cResult[46] = tmp24;
                          cResult[47] = tmp25;
                          cResult[48] = tmp67;
                          tmp65 = tmp67;
                        }
                      }
                    }
                    const obj5 = { variant: str, accessibilityLabel: tmp21, children: tmp22 };
                    const tmp64 = timestampProducer(tmp15, obj5);
                    cResult[38] = tmp15;
                    cResult[39] = str;
                    cResult[40] = tmp21;
                    cResult[41] = tmp22;
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
    num5 = stateFromStores.totalDaysPlayed;
  }
  if (num5 == null) {
    num5 = 0;
  }
  const rounded = Math.round(num5);
  const tmpResult3 = initialize;
  let prop1;
  if (stateFromStores != null) {
    prop1 = stateFromStores.totalDaysPlayedPercentile;
  }
  const checkpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent(prop1);
  const intl = util.intl;
  const string = intl.string;
  const tmp31 = _modDef3088;
  if (rounded <= 0 && null != stateFromStores1) {
    let stringResult = string(tmp31["dx4+NI"]);
    let tmp32 = importDefault;
  } else {
    stringResult = string(tmp31["4N5p4D"]);
    tmp32 = importDefault;
  }
  if (!(rounded <= 0 && null != stateFromStores1)) {
    if (null != checkpointTopPercent) {
      const intl2 = util.intl;
      const obj6 = {
        numDays: rounded,
        percent: checkpointTopPercent,
        percentHook(arg0) {
              return arg0;
            }
      };
      const formatToPlainStringResult = intl2.formatToPlainString(tmp32(3088)["4FXB/m"], obj6);
    }
  }
  const tmp32Result = tmp32(12976);
  const container = tmp4.container;
  if (cResult[26] !== tmp4.image) {
    const obj7 = { animatedUri: tmp32(13016), staticUri: tmp32(13017), style: tmp4.image };
    const tmp39 = timestampProducer(tmp32(12979), obj7);
    cResult[26] = tmp4.image;
    cResult[27] = tmp39;
    let tmp36 = tmp39;
    const tmp32Result3 = tmp32(12979);
  } else {
    tmp36 = cResult[27];
  }
  if (cResult[28] === tmp4.imageContainer) {
    if (cResult[29] === tmp36) {
      let tmp40 = cResult[30];
    }
    const copy = tmp4.copy;
    const _Symbol = Symbol;
    if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { size: "xs", color: CHECKPOINT_PRIMARY };
      const tmp45 = timestampProducer(CalendarIcon.CalendarIcon, obj8);
      cResult[31] = tmp45;
      let tmp42 = tmp45;
    } else {
      tmp42 = cResult[31];
    }
    const toLocaleUpperCaseResult = stringResult.toLocaleUpperCase();
    if (cResult[32] === tmp4.titleText) {
      if (cResult[33] === toLocaleUpperCaseResult) {
        let tmp47 = cResult[34];
      }
      if (cResult[35] === tmp4.title) {
        if (cResult[36] === tmp47) {
          let tmp50 = cResult[37];
        }
        if (tmp27) {
          const obj9 = { value: stateFromStores1 };
          let tmp53Result = timestampProducer(tmp32(12982), obj9);
        } else {
          const obj10 = { accessible: true, accessibilityLabel: null, style: null, children: null };
          const _HermesInternal = HermesInternal;
          obj10.accessibilityLabel = "" + rounded + " " + stringResult;
          obj10.style = tmp4.number;
          const obj11 = { end: rounded };
          obj10.children = timestampProducer(tmp32(12984), obj11);
          tmp53Result = timestampProducer(View, obj10);
        }
        const tmp32Result4 = tmp32(12974);
        if (tmp27) {
          const intl5 = util.intl;
          const obj12 = { numUsers: null };
          const _Intl = Intl;
          const numberFormat = new Intl.NumberFormat(util.intl.currentLocale, { notation: "compact", compactDisplay: "long" });
          obj12.numUsers = numberFormat.format(stateFromStores1);
          let formatToPlainStringResult1 = intl5.formatToPlainString(tmp32(3088)["N32w+2"], obj12);
        } else if (null != checkpointTopPercent) {
          const intl4 = util.intl;
          const obj13 = {
            numDays: rounded,
            percent: checkpointTopPercent,
            percentHook(children, arg1) {
                      return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
                    }
          };
          formatToPlainStringResult1 = intl4.format(tmp32(3088)["4FXB/m"], obj13);
        } else {
          const intl3 = util.intl;
          const obj14 = { numDays: rounded };
          formatToPlainStringResult1 = intl3.format(tmp32(3088).iCKjh6, obj14);
        }
        let totalDaysPlayed1;
        if (stateFromStores != null) {
          totalDaysPlayed1 = stateFromStores.totalDaysPlayed;
        }
        cResult[4] = totalDaysPlayed1;
        let prop2;
        if (stateFromStores != null) {
          prop2 = stateFromStores.totalDaysPlayedPercentile;
        }
        cResult[5] = prop2;
        cResult[6] = stateFromStores1;
        cResult[7] = tmp4.container;
        cResult[8] = tmp4.copy;
        cResult[9] = tmp4.image;
        cResult[10] = tmp4.imageContainer;
        cResult[11] = tmp4.number;
        cResult[12] = tmp4.title;
        cResult[13] = tmp4.titleText;
        cResult[14] = tmp32Result4;
        cResult[15] = View;
        cResult[16] = View;
        cResult[17] = tmp32Result;
        cResult[18] = container;
        cResult[19] = tmp40;
        cResult[20] = "heading-lg/medium";
        cResult[21] = formatToPlainStringResult;
        cResult[22] = formatToPlainStringResult1;
        cResult[23] = copy;
        cResult[24] = tmp50;
        cResult[25] = tmp53Result;
        tmp25 = tmp53Result;
        tmp24 = tmp50;
        tmp23 = copy;
        tmp22 = formatToPlainStringResult1;
        tmp21 = formatToPlainStringResult;
        str = "heading-lg/medium";
        tmp20 = tmp40;
        tmp19 = container;
        tmp18 = tmp32Result;
        tmp17 = View;
        tmp16 = View;
        tmp15 = tmp32Result4;
      }
      const obj15 = { style: tmp4.title, children: null };
      const items4 = [tmp42, tmp47];
      obj15.children = items4;
      const tmp52 = React5(View, obj15);
      cResult[35] = tmp4.title;
      cResult[36] = tmp47;
      cResult[37] = tmp52;
      tmp50 = tmp52;
    }
    const obj16 = { variant: "heading-md/extrabold", style: tmp4.titleText, children: toLocaleUpperCaseResult };
    const tmp49 = timestampProducer(tmp32(12974), obj16);
    cResult[32] = tmp4.titleText;
    cResult[33] = toLocaleUpperCaseResult;
    cResult[34] = tmp49;
    tmp47 = tmp49;
  }
  const tmp41 = timestampProducer(View, { style: tmp4.imageContainer, children: tmp36 });
  cResult[28] = tmp4.imageContainer;
  cResult[29] = tmp36;
  cResult[30] = tmp41;
  tmp40 = tmp41;
  const obj17 = { style: tmp4.imageContainer, children: tmp36 };
  const tmpResult4 = CheckpointStatsUtils;
}) : (function CheckpointGameTimeStatsScreen() {
  const tmp = closure_8();
  const items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let games;
    if (stats != null) {
      games = stats.games;
    }
    return games;
  });
  const items1 = [CheckpointStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => {
    const globalStats = CheckpointStore.globalStats;
    let prop;
    if (globalStats != null) {
      const games = globalStats.games;
      if (games != null) {
        prop = games.numUsersPlayedEveryDay;
      }
    }
    return prop;
  });
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.totalDaysPlayed;
  }
  if (num == null) {
    num = 0;
  }
  const rounded = Math.round(num);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.totalDaysPlayedPercentile;
  }
  const checkpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent(prop);
  const intl = util.intl;
  const string = intl.string;
  const tmp11 = _modDef3088;
  if (rounded <= 0 && null != stateFromStores1) {
    let stringResult = string(tmp11["dx4+NI"]);
    let tmp12 = importDefault;
  } else {
    stringResult = string(tmp11["4N5p4D"]);
    tmp12 = importDefault;
  }
  let formatToPlainStringResult;
  if (!(rounded <= 0 && null != stateFromStores1)) {
    if (null != checkpointTopPercent) {
      const intl2 = util.intl;
      const obj3 = {
        numDays: rounded,
        percent: checkpointTopPercent,
        percentHook(arg0) {
              return arg0;
            }
      };
      formatToPlainStringResult = intl2.formatToPlainString(tmp12(3088)["4FXB/m"], obj3);
    }
  }
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.imageContainer, children: null };
  const tmp2Result = CheckpointStatsUtils;
  const obj6 = { animatedUri: null, staticUri: null, style: null };
  const tmp12Result = tmp12(12976);
  obj6.animatedUri = tmp12(13016);
  obj6.staticUri = tmp12(13017);
  obj6.style = tmp.image;
  obj5.children = timestampProducer(tmp12(12979), obj6);
  const items2 = [timestampProducer(View, obj5), ];
  const obj7 = { style: tmp.copy, children: null };
  const obj8 = { style: tmp.title, children: null };
  const items3 = [timestampProducer(CalendarIcon.CalendarIcon, { size: "xs", color: CHECKPOINT_PRIMARY }), ];
  const obj10 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
  const tmp12Result4 = tmp12(12979);
  obj10.children = stringResult.toLocaleUpperCase();
  items3[1] = timestampProducer(tmp12(12974), obj10);
  obj8.children = items3;
  const items4 = [React5(View, obj8), , ];
  if (rounded <= 0 && null != stateFromStores1) {
    const obj11 = { value: stateFromStores1 };
    let tmp14Result = timestampProducer(tmp12(12982), obj11);
  } else {
    const obj12 = { accessible: true, accessibilityLabel: null, style: null, children: null };
    const _HermesInternal = HermesInternal;
    obj12.accessibilityLabel = "" + rounded + " " + stringResult;
    obj12.style = tmp.number;
    const obj13 = { end: rounded };
    obj12.children = timestampProducer(tmp12(12984), obj13);
    tmp14Result = timestampProducer(View, obj12);
  }
  items4[1] = tmp14Result;
  const obj14 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
  const tmp12Result5 = tmp12(12974);
  if (rounded <= 0 && null != stateFromStores1) {
    const intl5 = util.intl;
    const obj15 = { numUsers: null };
    const _Intl = Intl;
    const numberFormat = new Intl.NumberFormat(util.intl.currentLocale, { notation: "compact", compactDisplay: "long" });
    obj15.numUsers = numberFormat.format(stateFromStores1);
    let formatToPlainStringResult1 = intl5.formatToPlainString(tmp12(3088)["N32w+2"], obj15);
  } else if (null != checkpointTopPercent) {
    const intl4 = util.intl;
    const obj16 = {
      numDays: rounded,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
        }
    };
    formatToPlainStringResult1 = intl4.format(tmp12(3088)["4FXB/m"], obj16);
  } else {
    const intl3 = util.intl;
    const obj17 = { numDays: rounded };
    formatToPlainStringResult1 = intl3.format(tmp12(3088).iCKjh6, obj17);
  }
  const obj18 = { children: null };
  obj14.children = formatToPlainStringResult1;
  items4[2] = timestampProducer(tmp12(12974), obj14);
  obj7.children = items4;
  items2[1] = React5(View, obj7);
  obj4.children = items2;
  obj18.children = React5(View, obj4);
  return timestampProducer(tmp12Result, obj18);
});