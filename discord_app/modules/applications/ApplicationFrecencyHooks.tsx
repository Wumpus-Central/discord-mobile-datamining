// === Module 11806: ApplicationFrecencyHooks ===

// Module 11806 (ApplicationFrecencyHooks)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import noop from "module_19" /* 19 */;
import ApplicationFrecencyStore from "ApplicationFrecencyStore" /* 9248 */;

const require = globalThis.__r;

const require = fn;
const UserSettingsTypes = fn(1095).UserSettingsTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/ApplicationFrecencyHooks.tsx");

export const useSortApplicationsViaFrecency = ReactCompilerGating.isReactCompilerEnabled() ? (function useSortApplicationsViaFrecency(arr, arr2) {
  _require = arr;
  const cResult = require("c").c(31);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p() {
      const FrecencyUserSettingsActionCreators = closure_0(stateFromStores[5]).FrecencyUserSettingsActionCreators;
      const ifUncached = FrecencyUserSettingsActionCreators.loadIfUncached(str.FRECENCY_AND_FAVORITES_SETTINGS);
    };
    let items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ApplicationFrecencyStore];
    const fn2 = function u() {
      return applyResult.getApplicationFrecencyWithoutLoadingLatest();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp8 = fn2;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(tmp7, tmp8);
  let arr3 = arr;
  if (null != arr2) {
    arr3 = arr;
    if (0 !== arr2.length) {
      if (cResult[7] !== arr2) {
        const fn3 = function h(arg0) {
          const id = arg0;
          const obj = {};
          const merged = Object.assign(arg0);
          let flag;
          if (arr2 != null) {
            flag = arr2.some((application) => application.application.id === id.id);
          }
          if (flag == null) {
            flag = false;
          }
          obj.isUserApp = flag;
          return obj;
        };
        cResult[7] = arr2;
        cResult[8] = fn3;
        let tmp10 = fn3;
      } else {
        tmp10 = cResult[8];
      }
      const mapped = arr.map(tmp10);
      cResult[4] = arr;
      cResult[5] = arr2;
      cResult[6] = mapped;
    }
  }
  if (cResult[9] === arr) {
    if (cResult[10] === arr2) {
      let arr4 = cResult[11];
    }
    if (arr4 != null) {
      const item = arr4.forEach((id) => {
        if (null == stateFromStores.getEntry(id.application.id)) {
          const obj3 = { timestamp: extractTimestampResult };
          stateFromStores.track(id.application.id, obj3);
        }
        extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(id.id);
      });
    }
    stateFromStores.compute();
    if (cResult[12] === stateFromStores) {
      if (cResult[13] === arr3) {
        if (cResult[14] === arr4) {
          if (cResult[18] === stateFromStores) {
            if (cResult[19] === arr2) {
              if (cResult[20] === arr3) {
                noop = cResult[21];
              }
              let str;
              if (noop != null) {
                let application = noop.application;
                if (application != null) {
                  str = application.id;
                }
              }
              if (str == null) {
                str = "";
              }
              if (cResult[22] === str) {
                if (cResult[23] === arr5) {
                  let tmp33 = cResult[24];
                }
                if (cResult[25] === str) {
                  if (cResult[26] === arr5) {
                    let tmp35 = cResult[27];
                  }
                  if (cResult[28] === tmp33) {
                    if (cResult[29] === tmp35) {
                      let tmp37 = cResult[30];
                    }
                    return tmp37;
                  }
                  const items2 = [];
                  HermesBuiltin.arraySpread(tmp35, HermesBuiltin.arraySpread(tmp33, 0));
                  cResult[28] = tmp33;
                  cResult[29] = tmp35;
                  cResult[30] = items2;
                  tmp37 = items2;
                }
                const found = arr5.filter((id) => id.id !== str);
                cResult[25] = str;
                cResult[26] = arr5;
                cResult[27] = found;
                tmp35 = found;
              }
              const found1 = arr5.filter((id) => id.id === str);
              cResult[22] = str;
              cResult[23] = arr5;
              cResult[24] = found1;
              tmp33 = found1;
            }
          }
          if (arr2 != null) {
            const item1 = arr2.forEach((id) => {
              const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(id.id);
              let tmp2 = null == applyResult;
              if (!tmp2) {
                tmp2 = extractTimestampResult > applyResult;
              }
              if (tmp2) {
                closure_3 = id;
              }
            });
          }
          const item2 = arr3.forEach((id) => {
            const entry = stateFromStores.getEntry(id.id);
            let recentUses;
            if (entry != null) {
              recentUses = entry.recentUses;
            }
            if (recentUses == null) {
              recentUses = [];
            }
            const items = [...recentUses];
            applyResult = Math.max.apply(items);
            let tmp3 = null == applyResult;
            if (!tmp3) {
              tmp3 = applyResult > applyResult;
            }
            if (tmp3) {
              closure_3 = id;
            }
          });
          cResult[18] = stateFromStores;
          cResult[19] = arr2;
          cResult[20] = arr3;
          cResult[21] = noop;
        }
      }
    }
    let mapped1;
    if (arr4 != null) {
      mapped1 = arr4.map((application) => closure_0(stateFromStores[8]).getApplicationCommandSection(application.application, true));
    }
    if (mapped1 == null) {
      mapped1 = [];
    }
    const items3 = [];
    HermesBuiltin.arraySpread(arr3, 0);
    const push = items3.push;
    const items4 = [];
    HermesBuiltin.arraySpread(mapped1, 0);
    HermesBuiltin.apply(items4, items3);
    if (cResult[16] !== stateFromStores) {
      class C {
        constructor(arg0, arg1) {
          obj = closure_2;
          num = closure_2.getScore(arr2.id);
          if (num == null) {
            num = 0;
          }
          num2 = obj.getScore(arr.id);
          if (num2 == null) {
            num2 = 0;
          }
          diff = num - num2;
          if (0 === diff) {
            name = arr.name;
            diff = name.localeCompare(arr2.name);
          }
          return diff;
        }
      }
      cResult[16] = stateFromStores;
      cResult[17] = C;
    } else {
      class C {
        constructor(arg0, arg1) {
          obj = closure_2;
          num = closure_2.getScore(arr2.id);
          if (num == null) {
            num = 0;
          }
          num2 = obj.getScore(arr.id);
          if (num2 == null) {
            num2 = 0;
          }
          diff = num - num2;
          if (0 === diff) {
            name = arr.name;
            diff = name.localeCompare(arr2.name);
          }
          return diff;
        }
      }
    }
    const sorted = items3.sort(C);
    cResult[12] = stateFromStores;
    cResult[13] = arr3;
    cResult[14] = arr4;
    cResult[15] = items3;
  }
  if (arr2 != null) {
    class C {
      constructor(arg0, arg1) {
        obj = closure_2;
        num = closure_2.getScore(arr2.id);
        if (num == null) {
          num = 0;
        }
        num2 = obj.getScore(arr.id);
        if (num2 == null) {
          num2 = 0;
        }
        diff = num - num2;
        if (0 === diff) {
          name = arr.name;
          diff = name.localeCompare(arr2.name);
        }
        return diff;
      }
    }
  }
  cResult[9] = arr;
  cResult[10] = arr2;
  cResult[11] = undefined;
  arr4 = tmp14;
  const tmpResult = require("initialize");
}) : (function useSortApplicationsViaFrecency(arg0, arg1) {
  _require = arg0;
  const effect = memo.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(stateFromStores[5]).FrecencyUserSettingsActionCreators;
    const ifUncached = FrecencyUserSettingsActionCreators.loadIfUncached(memo2.FRECENCY_AND_FAVORITES_SETTINGS);
  }, []);
  let items = [memo1];
  stateFromStores = require("initialize").useStateFromStores(items, () => memo1.getApplicationFrecencyWithoutLoadingLatest());
  let items1 = [arg0, arg1];
  memo = memo.useMemo(() => {
    if (null != length) {
      if (0 !== length.length) {
        let mapped = closure_0.map((item) => {
          const obj = {};
          const merged = Object.assign(item);
          let flag;
          if (length != null) {
            flag = length.some((application) => application.application.id === item.id);
          }
          if (flag == null) {
            flag = false;
          }
          obj.isUserApp = flag;
          return obj;
        });
      }
      return mapped;
    }
    mapped = closure_0;
  }, items1);
  const items2 = [arg0, arg1];
  memo1 = memo.useMemo(() => {
    let found;
    if (length != null) {
      found = length.filter((item) => !closure_1_0.some((id) => id.id === item.application.id));
    }
    return found;
  }, items2);
  const items3 = [memo, stateFromStores, memo1];
  const memo2 = memo.useMemo(() => {
    if (memo1 != null) {
      const item = memo1.forEach((id) => {
        const obj = closure_1(stateFromStores[7]);
        if (null == closure_1_2.getEntry(id.application.id)) {
          const obj3 = { timestamp: extractTimestampResult };
          closure_1_2.track(id.application.id, obj3);
        }
        extractTimestampResult = closure_1(stateFromStores[7]).extractTimestamp(id.id);
      });
    }
    stateFromStores.compute();
    let mapped;
    if (memo1 != null) {
      mapped = memo1.map((application) => closure_1_0(stateFromStores[8]).getApplicationCommandSection(application.application, true));
    }
    if (mapped == null) {
      mapped = [];
    }
    const items = [...memo];
    const items1 = [...mapped];
    items.push.apply(items1);
    const sorted = items.sort((id, id2) => {
      let num = stateFromStores.getScore(id2.id);
      if (num == null) {
        num = 0;
      }
      let num2 = stateFromStores.getScore(id.id);
      if (num2 == null) {
        num2 = 0;
      }
      let diff = num - num2;
      if (0 === diff) {
        const name = id.name;
        diff = name.localeCompare(id2.name);
      }
      return diff;
    });
    return items;
  }, items3);
  const items4 = [memo2, memo, stateFromStores, arg1];
  return memo.useMemo(() => {
    if (length != null) {
      const item = length.forEach((id) => {
        const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(id.id);
        let tmp2 = null == applyResult;
        if (!tmp2) {
          tmp2 = extractTimestampResult > applyResult;
        }
        if (tmp2) {
          closure_0 = id;
        }
      });
    }
    const item1 = memo.forEach((id) => {
      const entry = stateFromStores.getEntry(id.id);
      let recentUses;
      if (entry != null) {
        recentUses = entry.recentUses;
      }
      if (recentUses == null) {
        recentUses = [];
      }
      const items = [...recentUses];
      applyResult = Math.max.apply(items);
      let tmp3 = null == applyResult;
      if (!tmp3) {
        tmp3 = applyResult > applyResult;
      }
      if (tmp3) {
        closure_0 = id;
      }
    });
    let str;
    if (closure_0 != null) {
      const application = closure_0.application;
      if (application != null) {
        str = application.id;
      }
    }
    if (str == null) {
      str = "";
    }
    let items = [...memo2.filter((id) => id.id === str), ...memo2.filter((id) => id.id !== str)];
    return items;
  }, items4);
});