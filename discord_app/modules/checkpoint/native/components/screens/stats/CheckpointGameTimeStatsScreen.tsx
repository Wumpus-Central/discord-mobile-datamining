// === Module 12697: CheckpointGameTimeStatsScreen ===

// Module 12697 (CheckpointGameTimeStatsScreen)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3123 from "module_3123" /* 3123 */;
import CheckpointConstants from "CheckpointConstants" /* 5500 */;
import CheckpointTextDefault from "CheckpointText" /* 12682 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 12684 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 12686 */;
import NumberAnimationDefault from "NumberAnimation" /* 12688 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 12689 */;
import _modDef12698 from "module_12698" /* 12698 */;
import CheckpointStore from "CheckpointStore" /* 12660 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5154 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const initialize = prop1(504);
const util = prop1(1128);
const CalendarIcon = prop1(8906);
const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { container: { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 }, title: null, titleText: null, imageContainer: null, image: null, copy: null, number: null };
let obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.titleText = { flexShrink: 1 };
obj.imageContainer = { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" };
obj.image = { height: "100%", aspectRatio: 0.6493506493506493 };
obj.copy = { flexShrink: 1 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj);
let obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGameTimeStatsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointGameTimeStatsScreen() {
  let prop1 = require;
  const cResult = c.c(69);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function h() {
      stats = stats.stats;
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
  let totalDaysPlayed;
  if (stateFromStores != null) {
    totalDaysPlayed = stateFromStores.totalDaysPlayed;
  }
  if (cResult[2] === totalDaysPlayed) {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.totalDaysPlayedPercentile;
    }
    if (cResult[3] === prop) {
      if (cResult[4] === tmp4.container) {
        if (cResult[5] === tmp4.copy) {
          if (cResult[6] === tmp4.image) {
            if (cResult[7] === tmp4.imageContainer) {
              if (cResult[8] === tmp4.title) {
                if (cResult[9] === tmp4.titleText) {
                  let tmp11 = cResult[10];
                  let tmp12 = cResult[11];
                  let tmp13 = cResult[12];
                  let tmp14 = cResult[13];
                  let tmp15 = cResult[14];
                  let tmp16 = cResult[15];
                  let tmp17 = cResult[16];
                  let str = cResult[17];
                  let tmp18 = cResult[18];
                  let tmp19 = cResult[19];
                  let tmp20 = cResult[20];
                  let tmp21 = cResult[21];
                  let tmp22 = cResult[22];
                  let tmp23 = cResult[23];
                  let tmp24 = cResult[24];
                  let tmp25 = cResult[25];
                  let tmp26 = cResult[26];
                }
                if (cResult[33] === tmp11) {
                  if (cResult[34] === str) {
                    if (cResult[35] === tmp18) {
                      if (cResult[36] === tmp19) {
                        let tmp48 = cResult[37];
                      }
                      if (cResult[38] === tmp12) {
                        if (cResult[39] === tmp48) {
                          if (cResult[40] === tmp20) {
                            if (cResult[41] === tmp21) {
                              let tmp51 = cResult[42];
                            }
                            const _HermesInternal = HermesInternal;
                            const combined = "" + tmp16 + " " + tmp25;
                            if (cResult[43] !== tmp16) {
                              const obj2 = { end: tmp16 };
                              const tmp58 = timestampProducer(NumberAnimationDefault, obj2);
                              cResult[43] = tmp16;
                              cResult[44] = tmp58;
                              let tmp55 = tmp58;
                            } else {
                              tmp55 = cResult[44];
                            }
                            if (cResult[45] === tmp4.number) {
                              if (cResult[46] === combined) {
                                if (cResult[47] === tmp55) {
                                  let tmp59 = cResult[48];
                                }
                                if (cResult[49] === tmp16) {
                                  if (cResult[50] === tmp26) {
                                    if (cResult[52] === tmp17) {
                                      if (cResult[53] === tmp63) {
                                        let tmp68 = cResult[54];
                                      }
                                      if (cResult[55] === tmp13) {
                                        if (cResult[56] === tmp51) {
                                          if (cResult[57] === tmp59) {
                                            if (cResult[58] === tmp68) {
                                              if (cResult[59] === tmp22) {
                                                let tmp72 = cResult[60];
                                              }
                                              if (cResult[61] === tmp14) {
                                                if (cResult[62] === tmp72) {
                                                  if (cResult[63] === tmp23) {
                                                    if (cResult[64] === tmp24) {
                                                      let tmp75 = cResult[65];
                                                    }
                                                    if (cResult[66] === tmp15) {
                                                      if (cResult[67] === tmp75) {
                                                        let tmp78 = cResult[68];
                                                      }
                                                      return tmp78;
                                                    }
                                                    const obj3 = { children: tmp75 };
                                                    const tmp80 = timestampProducer(tmp15, obj3);
                                                    cResult[66] = tmp15;
                                                    cResult[67] = tmp75;
                                                    cResult[68] = tmp80;
                                                    tmp78 = tmp80;
                                                  }
                                                }
                                              }
                                              const obj4 = { style: tmp23, children: null };
                                              const items1 = [tmp24, tmp72];
                                              obj4.children = items1;
                                              const tmp77 = React5(tmp14, obj4);
                                              cResult[61] = tmp14;
                                              cResult[62] = tmp72;
                                              cResult[63] = tmp23;
                                              cResult[64] = tmp24;
                                              cResult[65] = tmp77;
                                              tmp75 = tmp77;
                                            }
                                          }
                                        }
                                      }
                                      const obj5 = { style: tmp22, children: null };
                                      const items2 = [tmp51, tmp59, tmp68];
                                      obj5.children = items2;
                                      const tmp74 = React5(tmp13, obj5);
                                      cResult[55] = tmp13;
                                      cResult[56] = tmp51;
                                      cResult[57] = tmp59;
                                      cResult[58] = tmp68;
                                      cResult[59] = tmp22;
                                      cResult[60] = tmp74;
                                      tmp72 = tmp74;
                                    }
                                    const obj6 = { variant: "heading-lg/medium", accessibilityLabel: tmp17, children: cResult[51] };
                                    const tmp71 = timestampProducer(CheckpointTextDefault, obj6);
                                    cResult[52] = tmp17;
                                    cResult[53] = cResult[51];
                                    cResult[54] = tmp71;
                                    tmp68 = tmp71;
                                  }
                                }
                                if (null != tmp26) {
                                  const intl4 = util.intl;
                                  prop1 = _modDef3123["4FXB/m"];
                                  const obj7 = {
                                    numDays: tmp16,
                                    percent: tmp26,
                                    percentHook(children, arg1) {
                                                                      return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
                                                                    }
                                  };
                                  let formatResult = intl4.format(prop1, obj7);
                                } else {
                                  const intl3 = util.intl;
                                  const obj8 = { numDays: tmp16 };
                                  formatResult = intl3.format(_modDef3123.iCKjh6, obj8);
                                }
                                cResult[49] = tmp16;
                                cResult[50] = tmp26;
                                cResult[51] = formatResult;
                              }
                            }
                            const obj9 = { accessible: true, accessibilityLabel: combined, style: tmp4.number, children: tmp55 };
                            const tmp62 = timestampProducer(View, obj9);
                            cResult[45] = tmp4.number;
                            cResult[46] = combined;
                            cResult[47] = tmp55;
                            cResult[48] = tmp62;
                            tmp59 = tmp62;
                          }
                        }
                      }
                      const obj10 = { style: tmp20, children: null };
                      const items3 = [tmp21, tmp48];
                      obj10.children = items3;
                      const tmp53 = React5(tmp12, obj10);
                      cResult[38] = tmp12;
                      cResult[39] = tmp48;
                      cResult[40] = tmp20;
                      cResult[41] = tmp21;
                      cResult[42] = tmp53;
                      tmp51 = tmp53;
                    }
                  }
                }
                const obj11 = { variant: str, style: tmp18, children: tmp19 };
                const tmp50 = timestampProducer(tmp11, obj11);
                cResult[33] = tmp11;
                cResult[34] = str;
                cResult[35] = tmp18;
                cResult[36] = tmp19;
                cResult[37] = tmp50;
                tmp48 = tmp50;
              }
            }
          }
        }
      }
    }
  }
  let num3;
  if (stateFromStores != null) {
    num3 = stateFromStores.totalDaysPlayed;
  }
  if (num3 == null) {
    num3 = 0;
  }
  const rounded = Math.round(num3);
  let prop2;
  if (stateFromStores != null) {
    prop2 = stateFromStores.totalDaysPlayedPercentile;
  }
  let bound = null;
  if (null != prop2) {
    bound = null;
    if (prop2 >= 50) {
      const _Math = Math;
      const _Math2 = Math;
      bound = Math.max(1, Math.ceil(100 - prop2));
    }
  }
  const intl = util.intl;
  const stringResult = intl.string(_modDef3123["4N5p4D"]);
  if (null != bound) {
    const intl2 = util.intl;
    const obj12 = {
      numDays: rounded,
      percent: bound,
      percentHook(arg0) {
          return arg0;
        }
    };
    const formatToPlainStringResult = intl2.formatToPlainString(_modDef3123["4FXB/m"], obj12);
  }
  const tmp30Result = CheckpointScreenDefault;
  const container = tmp4.container;
  if (cResult[27] !== tmp4.image) {
    const obj13 = { uri: _modDef12698, style: tmp4.image };
    const tmp37 = timestampProducer(CheckpointApngPlayerDefault, obj13);
    cResult[27] = tmp4.image;
    cResult[28] = tmp37;
    let tmp34 = tmp37;
    const tmp30Result3 = CheckpointApngPlayerDefault;
  } else {
    tmp34 = cResult[28];
  }
  if (cResult[29] === tmp4.imageContainer) {
    if (cResult[30] === tmp34) {
      let tmp38 = cResult[31];
    }
    ({ copy, title } = tmp4);
    const _Symbol = Symbol;
    if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
      const obj14 = { size: "xs", color: CHECKPOINT_PRIMARY };
      const tmp43 = timestampProducer(CalendarIcon.CalendarIcon, obj14);
      cResult[32] = tmp43;
      let tmp40 = tmp43;
    } else {
      tmp40 = cResult[32];
    }
    const tmp30Result4 = CheckpointTextDefault;
    const titleText = tmp4.titleText;
    const toLocaleUpperCaseResult = stringResult.toLocaleUpperCase();
    let totalDaysPlayed1;
    if (stateFromStores != null) {
      totalDaysPlayed1 = stateFromStores.totalDaysPlayed;
    }
    cResult[2] = totalDaysPlayed1;
    let prop3;
    if (stateFromStores != null) {
      prop3 = stateFromStores.totalDaysPlayedPercentile;
    }
    cResult[3] = prop3;
    cResult[4] = tmp4.container;
    cResult[5] = tmp4.copy;
    cResult[6] = tmp4.image;
    cResult[7] = tmp4.imageContainer;
    cResult[8] = tmp4.title;
    cResult[9] = tmp4.titleText;
    cResult[10] = tmp30Result4;
    cResult[11] = View;
    cResult[12] = View;
    cResult[13] = View;
    cResult[14] = tmp30Result;
    cResult[15] = rounded;
    cResult[16] = formatToPlainStringResult;
    cResult[17] = "heading-md/extrabold";
    cResult[18] = titleText;
    cResult[19] = toLocaleUpperCaseResult;
    cResult[20] = title;
    cResult[21] = tmp40;
    cResult[22] = copy;
    cResult[23] = container;
    cResult[24] = tmp38;
    cResult[25] = stringResult;
    cResult[26] = bound;
    tmp26 = bound;
    tmp25 = stringResult;
    tmp24 = tmp38;
    tmp23 = container;
    tmp22 = copy;
    tmp21 = tmp40;
    tmp20 = title;
    tmp19 = toLocaleUpperCaseResult;
    tmp18 = titleText;
    str = "heading-md/extrabold";
    tmp17 = formatToPlainStringResult;
    tmp16 = rounded;
    tmp15 = tmp30Result;
    tmp14 = View;
    tmp13 = View;
    tmp12 = View;
    tmp11 = tmp30Result4;
  }
  const tmp39 = timestampProducer(View, { style: tmp4.imageContainer, children: tmp34 });
  cResult[29] = tmp4.imageContainer;
  cResult[30] = tmp34;
  cResult[31] = tmp39;
  tmp38 = tmp39;
  const obj15 = { style: tmp4.imageContainer, children: tmp34 };
  const prop1Result = initialize;
}) : (function CheckpointGameTimeStatsScreen() {
  const tmp = closure_8();
  const items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    stats = stats.stats;
    let games;
    if (stats != null) {
      games = stats.games;
    }
    return games;
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
  let bound = null;
  if (null != prop) {
    bound = null;
    if (prop >= 50) {
      const _Math = Math;
      const _Math2 = Math;
      bound = Math.max(1, Math.ceil(100 - prop));
    }
  }
  const intl = util.intl;
  const stringResult = intl.string(_modDef3123["4N5p4D"]);
  let formatToPlainStringResult;
  if (null != bound) {
    const intl2 = util.intl;
    const obj2 = {
      numDays: rounded,
      percent: bound,
      percentHook(arg0) {
          return arg0;
        }
    };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3123["4FXB/m"], obj2);
  }
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.imageContainer, children: null };
  const obj5 = { uri: null, style: null };
  const tmp8Result = CheckpointScreenDefault;
  obj5.uri = _modDef12698;
  obj5.style = tmp.image;
  obj4.children = timestampProducer(CheckpointApngPlayerDefault, obj5);
  const items1 = [timestampProducer(View, obj4), ];
  const obj6 = { style: tmp.copy, children: null };
  const obj7 = { style: tmp.title, children: null };
  const items2 = [timestampProducer(CalendarIcon.CalendarIcon, { size: "xs", color: CHECKPOINT_PRIMARY }), ];
  const obj9 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const obj8 = { size: "xs", color: CHECKPOINT_PRIMARY };
  const tmp8Result4 = CheckpointApngPlayerDefault;
  obj9.children = stringResult.toLocaleUpperCase();
  items2[1] = timestampProducer(CheckpointTextDefault, obj9);
  obj7.children = items2;
  const items3 = [React5(View, obj7), , ];
  const tmp8Result5 = CheckpointTextDefault;
  items3[1] = timestampProducer(View, { accessible: true, accessibilityLabel: "" + rounded + " " + stringResult, style: tmp.number, children: timestampProducer(NumberAnimationDefault, { end: rounded }) });
  const obj11 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
  const obj10 = { accessible: true, accessibilityLabel: "" + rounded + " " + stringResult, style: tmp.number, children: timestampProducer(NumberAnimationDefault, { end: rounded }) };
  if (null != bound) {
    const intl4 = util.intl;
    const obj12 = {
      numDays: rounded,
      percent: bound,
      percentHook(children, arg1) {
          return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
        }
    };
    let formatResult = intl4.format(_modDef3123["4FXB/m"], obj12);
  } else {
    const intl3 = util.intl;
    const obj13 = { numDays: rounded };
    formatResult = intl3.format(_modDef3123.iCKjh6, obj13);
  }
  const obj14 = { children: null };
  obj11.children = formatResult;
  items3[2] = timestampProducer(CheckpointTextDefault, obj11);
  obj6.children = items3;
  items1[1] = React5(View, obj6);
  obj3.children = items1;
  obj14.children = React5(View, obj3);
  return timestampProducer(tmp8Result, obj14);
});