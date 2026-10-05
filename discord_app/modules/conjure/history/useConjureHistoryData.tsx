// discord_app/modules/conjure/history/useConjureHistoryData.tsx
import react2 from "../../../../_runtime/00576_react.js";
import ConjureHistoryFormat from "ConjureHistoryFormat.tsx";
import ConjureRestorePanelOp from "ConjureRestorePanelOp.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ConjureConnectionStore from "../connection/ConjureConnectionStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, all, map, set;

let closure_4;
let hasOwnProperty;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({
  fetchDatabaseRestorePoints: closure_4,
  fetchDatabaseRestoreWindow: hasOwnProperty,
  fetchVersionHistory: metroRequire,
} = ConjureConnectionStore);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_129_1;
      let closure_129_2;
      let tmp3;
      let tmp5;
      let tmp6;
      let closure_0 = arg0;
      let obj = react2;
      const cResult = obj.c(12);
      [tmp3, closure_129_1] = _slicedToArray(react.useState(0), 2);
      const tmp2 = _slicedToArray(react.useState(0), 2);
      [tmp5, closure_129_2] = _slicedToArray(react.useState(null), 2);
      const tmp4 = _slicedToArray(react.useState(null), 2);
      if (cResult[0] !== arg0) {
        const fn = function o() {
          let load;
          let c0 = false;
          const promise = c0();
          promise.then(
            (data) => {
              let obj2;
              if (!c0) {
                const obj = { load, state: obj2 };
                const _Date = Date;
                obj2 = { status: "loaded", data, nowMs: Date.now() };
                closure_2_2(obj);
              }
            },
            () => {
              if (!c0) {
                const obj = { load, state: { status: "failed" } };
                closure_2_2(obj);
              }
            },
          );
          return () => {
            let c0 = true;
          };
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === arg0) {
        let tmp7;
        let tmp10;
        let tmp11;
        let tmp12;
        if (cResult[3] === tmp3) {
          tmp7 = cResult[4];
        }
        const effect = react.useEffect(tmp6, tmp7);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function u() {
            closure_1_2(null);
            closure_1_1((arg0) => arg0 + 1);
          };
          cResult[5] = fn2;
          tmp10 = fn2;
        } else {
          tmp10 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const fn3 = function y() {
            return closure_1_1((arg0) => arg0 + 1);
          };
          cResult[6] = fn3;
          tmp11 = fn3;
        } else {
          tmp11 = cResult[6];
        }
        if (cResult[7] === arg0) {
          let tmp13;
          if (cResult[8] === tmp5) {
            tmp12 = cResult[9];
          }
          if (cResult[10] !== tmp12) {
            const obj3 = { state: tmp12, retry: tmp10, refresh: tmp11 };
            cResult[10] = tmp12;
            cResult[11] = obj3;
            tmp13 = obj3;
          } else {
            tmp13 = cResult[11];
          }
          return tmp13;
        }
        if (null != tmp5) {
          let state;
          if (tmp5.load === arg0) {
            state = tmp5.state;
          }
          cResult[7] = arg0;
          cResult[8] = tmp5;
          cResult[9] = state;
          tmp12 = state;
        }
        state = { status: "loading" };
      }
      const items = [arg0, tmp3];
      cResult[2] = arg0;
      cResult[3] = tmp3;
      cResult[4] = items;
      tmp7 = items;
    }
  : (arg0) => {
      let closure_1;
      let closure_129_2;
      let first;
      let tmp4;
      let closure_0 = arg0;
      [first, closure_1] = react.useState(0);
      [tmp4, closure_129_2] = react.useState(null);
      const items = [arg0, first];
      _slicedToArray(react.useState(null), 2);
      const effect = react.useEffect(() => {
        let load;
        let c0 = false;
        const promise = c0();
        promise.then(
          (data) => {
            let obj2;
            if (!c0) {
              const obj = { load, state: obj2 };
              const _Date = Date;
              obj2 = { status: "loaded", data, nowMs: Date.now() };
              closure_2_2(obj);
            }
          },
          () => {
            if (!c0) {
              const obj = { load, state: { status: "failed" } };
              closure_2_2(obj);
            }
          },
        );
        return () => {
          let c0 = true;
        };
      }, items);
      const callback = react.useCallback(() => {
        closure_1_2(null);
        closure_1((arg0) => arg0 + 1);
      }, []);
      if (null != tmp4) {
        if (tmp4.load === arg0) {
          const state = tmp4.state;
        }
        let obj = { state: { status: "loading" }, retry: callback, refresh: tmp7 };
        return obj;
      }
    };
let closure_8 = [];
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0, arg1) {
      let closure_0;
      let closure_2;
      let environment;
      let obj2;
      let tmp11;
      let tmp12;
      let tmp15;
      _require = arg0;
      let tmp = _require;
      const obj = require("react");
      const cResult = obj.c(28);
      const tmp2 = _require;
      const tmp4 = environment;
      if (cResult[0] !== arg1) {
        const tmp2Result = tmp2(tmp4[5]);
        const result = tmp2Result.restorePanelEnvironments(arg1);
        cResult[0] = arg1;
        cResult[1] = result;
        obj2 = result;
      } else {
        obj2 = cResult[1];
      }
      [environment, tmp11] = react.useState("stable");
      if (cResult[2] !== arg0) {
        const fn = function h() {
          return metroRequire(closure_0);
        };
        cResult[2] = arg0;
        cResult[3] = fn;
        tmp12 = fn;
      } else {
        tmp12 = cResult[3];
      }
      const tmp14 = closure_7(tmp12);
      if (cResult[4] !== obj2) {
        const hasItem = obj2.includes("preview");
        cResult[4] = obj2;
        cResult[5] = hasItem;
        tmp15 = hasItem;
      } else {
        tmp15 = cResult[5];
      }
      _slicedToArray = tmp15;
      if (cResult[6] === tmp15) {
        let tmp17;
        if (cResult[7] === arg0) {
          tmp17 = cResult[8];
        }
        const tmp13Result = closure_7(tmp17);
        if (cResult[9] === environment) {
          let tmp19;
          if (cResult[10] === arg0) {
            tmp19 = cResult[11];
          }
          const tmp13Result2 = closure_7(tmp19);
          const refresh = tmp13Result2.refresh;
          class B {
            constructor() {
              all = Promise.all;
              items = [,];
              items[0] = closure_4(closure_0, closure_1);
              items[1] = closure_5(closure_0, closure_1);
              allResult = all(items);
              return allResult.then((result) => {
                const tmp = closure_1_2(result, 2);
                return { points: tmp[0], window: tmp[1] };
              });
            }
          }
          const refresh2 = tmp13Result.refresh;
          if (cResult[12] === refresh) {
            let tmp21;
            if (cResult[13] === refresh2) {
              tmp21 = cResult[14];
            }
            const state = tmp14.state;
            if (cResult[15] === state.data) {
              let tmp22;
              let data;
              let _window;
              if (cResult[16] === state.status) {
                tmp22 = cResult[17];
              }
              if ("loaded" === tmp13Result.state.status) {
                data = tmp13Result.state.data;
              } else {
                data = closure_8;
              }
              class B {
                constructor() {
                  all = Promise.all;
                  items = [,];
                  items[0] = closure_4(closure_0, closure_1);
                  items[1] = closure_5(closure_0, closure_1);
                  allResult = all(items);
                  return allResult.then((result) => {
                    const tmp = closure_1_2(result, 2);
                    return { points: tmp[0], window: tmp[1] };
                  });
                }
              }
              const status = tmp13Result.state.status;
              if ("loaded" === tmp13Result2.state.status) {
                _window = tmp13Result2.state.data.window;
              }
              class D {
                constructor() {
                  react();
                  refresh2();
                }
              }
              if (cResult[18] === tmp13Result2) {
                if (cResult[19] === environment) {
                  if (cResult[20] === obj2) {
                    if (cResult[21] === tmp21) {
                      if (cResult[22] === data) {
                        if (cResult[23] === tmp27) {
                          if (cResult[24] === _window) {
                            if (cResult[25] === tmp22) {
                              let tmp28;
                              if (cResult[26] === tmp14) {
                                tmp28 = cResult[27];
                              }
                              return tmp28;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj3 = {
                environments: obj2,
                environment,
                setEnvironment: tmp11,
                versions: tmp14,
                previewBackups: data,
                previewBackupsLoading: tmp27,
                backups: tmp13Result2,
                restoreWindow: _window,
                refreshAllBackups: tmp21,
                versionTitles: tmp22,
              };
              cResult[18] = tmp13Result2;
              cResult[19] = environment;
              cResult[20] = obj2;
              cResult[21] = tmp21;
              cResult[22] = data;
              cResult[23] = tmp27;
              cResult[24] = _window;
              cResult[25] = tmp22;
              cResult[26] = tmp14;
              cResult[27] = obj3;
              tmp28 = obj3;
            }
            class B {
              constructor() {
                all = Promise.all;
                items = [,];
                items[0] = closure_4(closure_0, closure_1);
                items[1] = closure_5(closure_0, closure_1);
                allResult = all(items);
                return allResult.then((result) => {
                  const tmp = closure_1_2(result, 2);
                  return { points: tmp[0], window: tmp[1] };
                });
              }
            }
            const _Map = Map;
            const self = this;
            const self2 = this;
            class D {
              constructor() {
                react();
                refresh2();
              }
            }
            if ("loaded" === state.status) {
              const entries = state.data.entries;
              class B {
                constructor() {
                  all = Promise.all;
                  items = [,];
                  items[0] = closure_4(closure_0, closure_1);
                  items[1] = closure_5(closure_0, closure_1);
                  allResult = all(items);
                  return allResult.then((result) => {
                    const tmp = closure_1_2(result, 2);
                    return { points: tmp[0], window: tmp[1] };
                  });
                }
              }
            }
            cResult[15] = state.data;
            cResult[16] = state.status;
            cResult[17] = tmp23;
            tmp22 = tmp23;
          }
          class D {
            constructor() {
              react();
              refresh2();
            }
          }
          cResult[12] = refresh;
          cResult[13] = refresh2;
          cResult[14] = D;
          tmp21 = D;
        }
        class B {
          constructor() {
            all = Promise.all;
            items = [,];
            items[0] = closure_4(closure_0, closure_1);
            items[1] = closure_5(closure_0, closure_1);
            allResult = all(items);
            return allResult.then((result) => {
              const tmp = closure_1_2(result, 2);
              return { points: tmp[0], window: tmp[1] };
            });
          }
        }
        cResult[9] = environment;
        cResult[11] = B;
        tmp19 = B;
      }
      const fn2 = function _() {
        let resolved;
        if (closure_2) {
          resolved = React3(closure_0, "preview");
        } else {
          resolved = Promise.resolve(closure_8);
        }
        return resolved;
      };
      cResult[6] = tmp15;
      cResult[7] = arg0;
      cResult[8] = fn2;
      tmp17 = fn2;
    }
  : (arg0, arg1) => {
      let _window;
      let data;
      let environment;
      let hasItem;
      let memo1;
      let closure_0 = arg0;
      let closure_1 = arg1;
      let items = [arg1];
      const memo = hasItem.useMemo(() => {
        const obj = ConjureRestorePanelOp;
        return obj.restorePanelEnvironments(closure_1);
      }, items);
      const tmp = environment(hasItem.useState("stable"), 2);
      environment = tmp[0];
      const items1 = [arg0];
      const tmp3 = tmp[1];
      const tmp4 = closure_7(hasItem.useCallback(() => metroRequire(closure_0), items1));
      hasItem = memo.includes("preview");
      const items2 = [arg0, hasItem];
      const tmp6 = closure_7(
        hasItem.useCallback(() => {
          let resolved;
          if (hasItem) {
            resolved = React3(closure_0, "preview");
          } else {
            resolved = Promise.resolve(closure_8);
          }
          return resolved;
        }, items2),
      );
      const items3 = [arg0, environment];
      const tmp7 = closure_7(
        hasItem.useCallback(() => {
          const items = [React3(closure_0, first), hasOwnProperty(closure_0, first)];
          const allResult = all(items);
          return allResult.then((result) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = result;
            return { points, window: _window };
          });
        }, items3),
      );
      const refresh = tmp7.refresh;
      const refresh2 = tmp6.refresh;
      const items4 = [refresh, refresh2];
      const state = tmp4.state;
      const items5 = [state];
      const callback = hasItem.useCallback(() => {
        refresh();
        refresh2();
      }, items4);
      let obj = {
        environments: memo,
        environment,
        setEnvironment: tmp3,
        versions: tmp4,
        previewBackups: data,
        previewBackupsLoading: "loading" === tmp6.state.status,
        backups: tmp7,
        restoreWindow: _window,
        refreshAllBackups: callback,
        versionTitles: memo1,
      };
      memo1 = hasItem.useMemo(() => {
        map = new Map();
        if ("loaded" === state.status) {
          const entries = state.data.entries;
          for (const item10015 of entries) {
            set = map.set;
            let sha = item10015.sha;
            let obj = ConjureHistoryFormat;
            let result = set(sha, obj.versionTitle(item10015.subject).short);
            continue;
          }
        }
        return map;
      }, items5);
      if ("loaded" === tmp6.state.status) {
        data = tmp6.state.data;
      } else {
        data = closure_8;
      }
      _window = null;
      if ("loaded" === tmp7.state.status) {
        _window = tmp7.state.data.window;
      }
      return obj;
    };
let result = size.fileFinishedImporting("modules/conjure/history/useConjureHistoryData.tsx");

export default tmp3;
