// === Module 13479: CheckpointGameTimeStatsScreen ===

// Module 13479 (CheckpointGameTimeStatsScreen)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import _modDef3090 from "module_3090" /* 3090 */;
import CheckpointConstants from "CheckpointConstants" /* 6054 */;
import CalendarIcon from "CalendarIcon" /* 9083 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 13249 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 13451 */;
import CheckpointStore from "CheckpointStore" /* 13236 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
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
    class S {
      constructor() {
        globalStats = closure_1_4.globalStats;
        prop = undefined;
        if (globalStats != null) {
          games = globalStats.games;
          if (games != null) {
            prop = games.numUsersPlayedEveryDay;
          }
        }
        return prop;
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
  let totalDaysPlayed;
  if (stateFromStores != null) {
    totalDaysPlayed = stateFromStores.totalDaysPlayed;
  }
  if (cResult[4] === totalDaysPlayed) {
    if (stateFromStores != null) {
      const totalDaysPlayedPercentile = stateFromStores.totalDaysPlayedPercentile;
    }
    class S {
      constructor() {
        globalStats = closure_1_4.globalStats;
        prop = undefined;
        if (globalStats != null) {
          games = globalStats.games;
          if (games != null) {
            prop = games.numUsersPlayedEveryDay;
          }
        }
        return prop;
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
  const tmpResult4 = initialize;
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.totalDaysPlayedPercentile;
  }
  const checkpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent(prop);
  const intl = util.intl;
  const string = intl.string;
  const tmp30 = _modDef3090;
  if (rounded <= 0 && null != stateFromStores1) {
    let stringResult = string(tmp30["dx4+NI"]);
    let tmp31 = importDefault;
  } else {
    stringResult = string(tmp30["4N5p4D"]);
    tmp31 = importDefault;
  }
  if (!(rounded <= 0 && null != stateFromStores1)) {
    if (null != checkpointTopPercent) {
      const intl2 = util.intl;
      const obj2 = { numDays: null, percent: null, percentHook: null };
      class S {
        constructor() {
          globalStats = closure_1_4.globalStats;
          prop = undefined;
          if (globalStats != null) {
            games = globalStats.games;
            if (games != null) {
              prop = games.numUsersPlayedEveryDay;
            }
          }
          return prop;
        }
      }
      obj2.percent = checkpointTopPercent;
      obj2.percentHook = function percentHook(arg0) {
        return arg0;
      };
      const formatToPlainStringResult = intl2.formatToPlainString(tmp31(3090)["4FXB/m"], obj2);
    }
  }
  const tmp31Result = tmp31(13438);
  const container = tmp4.container;
  if (cResult[26] !== tmp4.image) {
    const obj3 = { animatedUri: null, staticUri: null, style: null };
    class S {
      constructor() {
        globalStats = closure_1_4.globalStats;
        prop = undefined;
        if (globalStats != null) {
          games = globalStats.games;
          if (games != null) {
            prop = games.numUsersPlayedEveryDay;
          }
        }
        return prop;
      }
    }
    obj3.staticUri = tmp31(13481);
    obj3.style = tmp4.image;
    const tmp38 = timestampProducer(tmp31(13442), obj3);
    cResult[26] = tmp4.image;
    cResult[27] = tmp38;
    let tmp35 = tmp38;
    const tmp31Result2 = tmp31(13442);
  } else {
    tmp35 = cResult[27];
  }
  if (cResult[28] === tmp4.imageContainer) {
    if (cResult[29] === tmp35) {
      let tmp39 = cResult[30];
    }
    const copy = tmp4.copy;
    const _Symbol = Symbol;
    class S {
      constructor() {
        globalStats = closure_1_4.globalStats;
        prop = undefined;
        if (globalStats != null) {
          games = globalStats.games;
          if (games != null) {
            prop = games.numUsersPlayedEveryDay;
          }
        }
        return prop;
      }
    }
    if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          globalStats = closure_1_4.globalStats;
          prop = undefined;
          if (globalStats != null) {
            games = globalStats.games;
            if (games != null) {
              prop = games.numUsersPlayedEveryDay;
            }
          }
          return prop;
        }
      }
      const tmp45 = timestampProducer(CalendarIcon.CalendarIcon, { size: "xs", color: null });
      cResult[31] = tmp45;
      let tmp42 = tmp45;
      const obj4 = { size: "xs", color: null };
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
        if (tmp26) {
          const obj5 = { value: stateFromStores1 };
          let tmp54Result = timestampProducer(tmp31(13449), obj5);
        } else {
          const obj6 = { accessible: true, accessibilityLabel: null, style: null, children: null };
          const _HermesInternal = HermesInternal;
          class S {
            constructor() {
              globalStats = closure_1_4.globalStats;
              prop = undefined;
              if (globalStats != null) {
                games = globalStats.games;
                if (games != null) {
                  prop = games.numUsersPlayedEveryDay;
                }
              }
              return prop;
            }
          }
          obj6.accessibilityLabel = "" + rounded + " " + stringResult;
          obj6.style = tmp4.number;
          const obj7 = { end: rounded };
          obj6.children = timestampProducer(tmp31(13450), obj7);
          tmp54Result = timestampProducer(View, obj6);
        }
        class S {
          constructor() {
            globalStats = closure_1_4.globalStats;
            prop = undefined;
            if (globalStats != null) {
              games = globalStats.games;
              if (games != null) {
                prop = games.numUsersPlayedEveryDay;
              }
            }
            return prop;
          }
        }
        if (tmp26) {
          const intl5 = util.intl;
          const obj8 = { numUsers: null };
          class S {
            constructor() {
              globalStats = closure_1_4.globalStats;
              prop = undefined;
              if (globalStats != null) {
                games = globalStats.games;
                if (games != null) {
                  prop = games.numUsersPlayedEveryDay;
                }
              }
              return prop;
            }
          }
          obj8.numUsers = CheckpointStatsUtils.formatCheckpointCompactNumber(stateFromStores1);
          let formatToPlainStringResult1 = intl5.formatToPlainString(tmp58, obj8);
          const tmpResult6 = CheckpointStatsUtils;
        } else if (null != checkpointTopPercent) {
          const intl4 = util.intl;
          const obj9 = { numDays: null, percent: null, percentHook: null };
          class S {
            constructor() {
              globalStats = closure_1_4.globalStats;
              prop = undefined;
              if (globalStats != null) {
                games = globalStats.games;
                if (games != null) {
                  prop = games.numUsersPlayedEveryDay;
                }
              }
              return prop;
            }
          }
          obj9.percent = checkpointTopPercent;
          obj9.percentHook = function percentHook(children, arg1) {
            return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
          };
          formatToPlainStringResult1 = intl4.format(tmp31(3090)["4FXB/m"], obj9);
        } else {
          const intl3 = util.intl;
          class S {
            constructor() {
              globalStats = closure_1_4.globalStats;
              prop = undefined;
              if (globalStats != null) {
                games = globalStats.games;
                if (games != null) {
                  prop = games.numUsersPlayedEveryDay;
                }
              }
              return prop;
            }
          }
          formatToPlainStringResult1 = intl3.format(tmp31(3090).iCKjh6, { numDays: null });
          const obj10 = { numDays: null };
        }
        let totalDaysPlayed1;
        if (stateFromStores != null) {
          totalDaysPlayed1 = stateFromStores.totalDaysPlayed;
        }
        cResult[4] = totalDaysPlayed1;
        let prop1;
        if (stateFromStores != null) {
          prop1 = stateFromStores.totalDaysPlayedPercentile;
        }
        cResult[5] = prop1;
        cResult[6] = stateFromStores1;
        cResult[7] = tmp4.container;
        cResult[8] = tmp4.copy;
        cResult[9] = tmp4.image;
        cResult[10] = tmp4.imageContainer;
        cResult[11] = tmp4.number;
        cResult[12] = tmp4.title;
        cResult[13] = tmp4.titleText;
        cResult[14] = tmp56;
        cResult[15] = View;
        cResult[16] = View;
        cResult[17] = tmp31Result;
        cResult[18] = container;
        cResult[19] = tmp39;
        cResult[20] = "heading-lg/medium";
        cResult[21] = formatToPlainStringResult;
        cResult[22] = formatToPlainStringResult1;
        cResult[23] = copy;
        cResult[24] = tmp50;
        cResult[25] = tmp54Result;
      }
      class S {
        constructor() {
          globalStats = closure_1_4.globalStats;
          prop = undefined;
          if (globalStats != null) {
            games = globalStats.games;
            if (games != null) {
              prop = games.numUsersPlayedEveryDay;
            }
          }
          return prop;
        }
      }
      tmp52[0] = tmp41;
      const items2 = [tmp42, tmp47];
      tmp52[1] = items2;
      const tmp53 = React5(View, tmp52);
      cResult[35] = tmp4.title;
      cResult[36] = tmp47;
      cResult[37] = tmp53;
      tmp50 = tmp53;
    }
    const obj11 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp4.titleText, children: toLocaleUpperCaseResult };
    const tmp49 = timestampProducer(tmp31(13436), obj11);
    cResult[32] = tmp4.titleText;
    cResult[33] = toLocaleUpperCaseResult;
    cResult[34] = tmp49;
    tmp47 = tmp49;
  }
  const tmp40 = timestampProducer(View, { style: tmp4.imageContainer, children: tmp35 });
  cResult[28] = tmp4.imageContainer;
  cResult[29] = tmp35;
  cResult[30] = tmp40;
  tmp39 = tmp40;
  const obj12 = { style: tmp4.imageContainer, children: tmp35 };
  const tmpResult5 = CheckpointStatsUtils;
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
  const tmp11 = _modDef3090;
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
      formatToPlainStringResult = intl2.formatToPlainString(tmp12(3090)["4FXB/m"], obj3);
    }
  }
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.imageContainer, children: null };
  const tmp2Result = CheckpointStatsUtils;
  const obj6 = { animatedUri: null, staticUri: null, style: null };
  const tmp12Result = tmp12(13438);
  obj6.animatedUri = tmp12(13480);
  obj6.staticUri = tmp12(13481);
  obj6.style = tmp.image;
  obj5.children = timestampProducer(tmp12(13442), obj6);
  const items2 = [timestampProducer(View, obj5), ];
  const obj7 = { style: tmp.copy, children: null };
  const obj8 = { style: tmp.title, children: null };
  const items3 = [timestampProducer(CalendarIcon.CalendarIcon, { size: "xs", color: CHECKPOINT_PRIMARY }), ];
  const obj10 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
  const tmp12Result4 = tmp12(13442);
  obj10.children = stringResult.toLocaleUpperCase();
  items3[1] = timestampProducer(tmp12(13436), obj10);
  obj8.children = items3;
  const items4 = [React5(View, obj8), , ];
  if (rounded <= 0 && null != stateFromStores1) {
    const obj11 = { value: stateFromStores1 };
    let tmp14Result = timestampProducer(tmp12(13449), obj11);
  } else {
    const obj12 = { accessible: true, accessibilityLabel: null, style: null, children: null };
    const _HermesInternal = HermesInternal;
    obj12.accessibilityLabel = "" + rounded + " " + stringResult;
    obj12.style = tmp.number;
    const obj13 = { end: rounded };
    obj12.children = timestampProducer(tmp12(13450), obj13);
    tmp14Result = timestampProducer(View, obj12);
  }
  items4[1] = tmp14Result;
  const obj14 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
  const tmp12Result5 = tmp12(13436);
  if (rounded <= 0 && null != stateFromStores1) {
    const intl5 = util.intl;
    const obj15 = { numUsers: CheckpointStatsUtils.formatCheckpointCompactNumber(stateFromStores1) };
    let formatToPlainStringResult1 = intl5.formatToPlainString(tmp12(3090)["N32w+2"], obj15);
    const tmp2Result2 = CheckpointStatsUtils;
  } else if (null != checkpointTopPercent) {
    const intl4 = util.intl;
    const obj16 = {
      numDays: rounded,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
        }
    };
    formatToPlainStringResult1 = intl4.format(tmp12(3090)["4FXB/m"], obj16);
  } else {
    const intl3 = util.intl;
    const obj17 = { numDays: rounded };
    formatToPlainStringResult1 = intl3.format(tmp12(3090).iCKjh6, obj17);
  }
  const obj18 = { children: null };
  obj14.children = formatToPlainStringResult1;
  items4[2] = timestampProducer(tmp12(13436), obj14);
  obj7.children = items4;
  items2[1] = React5(View, obj7);
  obj4.children = items2;
  obj18.children = React5(View, obj4);
  return timestampProducer(tmp12Result, obj18);
});