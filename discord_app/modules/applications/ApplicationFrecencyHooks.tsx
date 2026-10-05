// discord_app/modules/applications/ApplicationFrecencyHooks.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import UserSettingsConstants from "../user_settings/UserSettingsConstants.tsx";
import react_mod from "../../../_runtime/00019_react.js";
import ApplicationFrecencyStore from "ApplicationFrecencyStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_3;

let react = react_mod;
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr, arr2) => {
      let stateFromStores;
      let tmp5;
      let tmp6;
      let tmp8;
      let tmp9;
      _require = arr;
      let tmp2 = _require;
      let tmp3 = stateFromStores;
      let obj = require("react");
      const cResult = obj.c(31);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          const FrecencyUserSettingsActionCreators = arr(stateFromStores[5]).FrecencyUserSettingsActionCreators;
          const ifUncached = FrecencyUserSettingsActionCreators.loadIfUncached(str.FRECENCY_AND_FAVORITES_SETTINGS);
        };
        let items = [];
        let num = 0;
        cResult[0] = fn;
        let num2 = 1;
        cResult[1] = items;
        tmp5 = fn;
        tmp6 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const effect = react.useEffect(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ApplicationFrecencyStore];
        const fn2 = function u() {
          return applyResult.getApplicationFrecencyWithoutLoadingLatest();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp9 = fn2;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmp2Result = tmp2(tmp3[6]);
      stateFromStores = tmp2Result.useStateFromStores(tmp8, tmp9);
      let arr3 = arr;
      if (null != arr2) {
        arr3 = arr;
        if (0 !== arr2.length) {
          let tmp12;
          if (cResult[4] === arr) {
            let tmp11;
            if (cResult[5] === arr2) {
              tmp11 = cResult[6];
            }
            arr3 = tmp11;
          }
          if (cResult[7] !== arr2) {
            const fn3 = function h(arg0) {
              let flag;
              let closure_0 = arg0;
              const obj = { isUserApp: flag };
              const merged = Object.assign(arg0);
              flag = undefined;
              if (arr2 != null) {
                flag = arr2.some((application) => application.application.id === id.id);
              }
              if (flag == null) {
                flag = false;
              }
              return obj;
            };
            cResult[7] = arr2;
            cResult[8] = fn3;
            tmp12 = fn3;
          } else {
            tmp12 = cResult[8];
          }
          const mapped = arr.map(tmp12);
          cResult[4] = arr;
          cResult[5] = arr2;
          cResult[6] = mapped;
          tmp11 = mapped;
        }
      }
      if (cResult[9] === arr) {
        let arr4;
        if (cResult[10] === arr2) {
          arr4 = cResult[11];
        }
        if (arr4 != null) {
          const item = arr4.forEach((id) => {
            const obj = SnowflakeUtilsDefault;
            const extractTimestampResult = obj.extractTimestamp(id.id);
            if (null == stateFromStores.getEntry(id.application.id)) {
              const obj3 = { timestamp: extractTimestampResult };
              stateFromStores.track(id.application.id, obj3);
            }
          });
        }
        stateFromStores.compute();
        if (cResult[12] === stateFromStores) {
          if (cResult[13] === arr3) {
            let arr5;
            if (cResult[14] === arr4) {
              arr5 = cResult[15];
            }
            if (cResult[18] === stateFromStores) {
              if (cResult[19] === arr2) {
                if (cResult[20] === arr3) {
                  react = cResult[21];
                }
                let str;
                if (react != null) {
                  const application = react.application;
                  if (application != null) {
                    str = application.id;
                  }
                }
                if (str == null) {
                  str = "";
                }
                if (cResult[22] === str) {
                  let tmp32;
                  if (cResult[23] === arr5) {
                    tmp32 = cResult[24];
                  }
                  if (cResult[25] === str) {
                    let tmp34;
                    if (cResult[26] === arr5) {
                      tmp34 = cResult[27];
                    }
                    if (cResult[28] === tmp32) {
                      let tmp36;
                      if (cResult[29] === tmp34) {
                        tmp36 = cResult[30];
                      }
                      return tmp36;
                    }
                    const items2 = [];
                    HermesBuiltin.arraySpread(items2, tmp34, HermesBuiltin.arraySpread(items2, tmp32, 0));
                    cResult[28] = tmp32;
                    cResult[29] = tmp34;
                    cResult[30] = items2;
                    tmp36 = items2;
                  }
                  const found = arr5.filter((id) => id.id !== str);
                  cResult[25] = str;
                  cResult[26] = arr5;
                  cResult[27] = found;
                  tmp34 = found;
                }
                const found1 = arr5.filter((id) => id.id === str);
                cResult[22] = str;
                cResult[23] = arr5;
                cResult[24] = found1;
                tmp32 = found1;
              }
            }
            if (arr2 != null) {
              const item1 = arr2.forEach((id) => {
                const obj = SnowflakeUtilsDefault;
                const tmp2 = null == applyResult || obj.extractTimestamp(id.id) > applyResult;
                if (tmp2) {
                  closure_3 = id;
                }
              });
            }
            const item2 = arr3.forEach((id) => {
              const _Math = Math;
              const entry = stateFromStores.getEntry(id.id);
              let recentUses;
              if (entry != null) {
                recentUses = entry.recentUses;
              }
              if (recentUses == null) {
                recentUses = [];
              }
              const items = [...recentUses];
              applyResult = max.apply(items);
              const tmp3 = null == applyResult || applyResult > applyResult;
              if (tmp3) {
                closure_3 = id;
              }
            });
            cResult[18] = stateFromStores;
            cResult[19] = arr2;
            cResult[20] = arr3;
            cResult[21] = react;
          }
        }
        let mapped1;
        if (arr4 != null) {
          mapped1 = arr4.map((application) => {
            const obj = arr(stateFromStores[8]);
            return obj.getApplicationCommandSection(application.application, true);
          });
        }
        if (mapped1 == null) {
          mapped1 = [];
        }
        const items3 = [];
        HermesBuiltin.arraySpread(items3, arr3, 0);
        const push = items3.push;
        const items4 = [];
        HermesBuiltin.arraySpread(items4, mapped1, 0);
        let applyResult = HermesBuiltin.apply(push, items4, items3);
        if (cResult[16] !== stateFromStores) {
          class C {
            constructor(id, id2) {
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
            }
          }
          cResult[16] = stateFromStores;
          cResult[17] = C;
        } else {
          class C {
            constructor(id, id2) {
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
            }
          }
        }
        const sorted = items3.sort(C);
        cResult[12] = stateFromStores;
        cResult[13] = arr3;
        cResult[14] = arr4;
        cResult[15] = items3;
        arr5 = items3;
      }
      if (arr2 != null) {
        class C {
          constructor(id, id2) {
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
          }
        }
      }
      cResult[9] = arr;
      cResult[10] = arr2;
      cResult[11] = undefined;
      arr4 = tmp14;
    }
  : (arg0, arg1) => {
      let memo;
      let memo1;
      let stateFromStores;
      _require = arg0;
      const length = arg1;
      const effect = memo.useEffect(() => {
        const FrecencyUserSettingsActionCreators = closure_0(stateFromStores[5]).FrecencyUserSettingsActionCreators;
        const ifUncached = FrecencyUserSettingsActionCreators.loadIfUncached(memo2.FRECENCY_AND_FAVORITES_SETTINGS);
      }, []);
      let obj = require("get initialized");
      let items = [memo1];
      stateFromStores = obj.useStateFromStores(items, () => memo1.getApplicationFrecencyWithoutLoadingLatest());
      let items1 = [arg0, arg1];
      memo = memo.useMemo(() => {
        if (null != length) {
          let mapped;
          if (0 !== length.length) {
            mapped = closure_0.map((item) => {
              let flag;
              closure_0 = item;
              const obj = { isUserApp: flag };
              const merged = Object.assign(item);
              flag = undefined;
              if (length != null) {
                flag = length.some((application) => application.application.id === id.id);
              }
              if (flag == null) {
                flag = false;
              }
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
          found = length.filter((item) => {
            closure_0 = item;
            return !closure_1_0.some((id) => id.id === application.application.id);
          });
        }
        return found;
      }, items2);
      const items3 = [memo, stateFromStores, memo1];
      const memo2 = memo.useMemo(() => {
        if (memo1 != null) {
          const item = memo1.forEach((id) => {
            const obj = length(stateFromStores[7]);
            const extractTimestampResult = obj.extractTimestamp(id.id);
            if (null == closure_1_2.getEntry(id.application.id)) {
              const obj3 = { timestamp: extractTimestampResult };
              closure_1_2.track(id.application.id, obj3);
            }
          });
        }
        stateFromStores.compute();
        let mapped;
        if (memo1 != null) {
          mapped = memo1.map((application) => {
            const obj = closure_1_0(stateFromStores[8]);
            return obj.getApplicationCommandSection(application.application, true);
          });
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
            const obj = SnowflakeUtilsDefault;
            const tmp2 = null == applyResult || obj.extractTimestamp(id.id) > applyResult;
            if (tmp2) {
              let closure_1_0 = id;
            }
          });
        }
        const item1 = memo.forEach((id) => {
          const _Math = Math;
          const entry = stateFromStores.getEntry(id.id);
          let recentUses;
          if (entry != null) {
            recentUses = entry.recentUses;
          }
          if (recentUses == null) {
            recentUses = [];
          }
          const items = [...recentUses];
          applyResult = max.apply(items);
          const tmp3 = null == applyResult || applyResult > applyResult;
          if (tmp3) {
            let closure_1_0 = id;
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
    };
const result = size.fileFinishedImporting("modules/applications/ApplicationFrecencyHooks.tsx");

export const useSortApplicationsViaFrecency = tmp2;
