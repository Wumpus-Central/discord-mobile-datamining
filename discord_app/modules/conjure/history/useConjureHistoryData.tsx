// === Module 16626: useConjureHistoryData ===

// Module 16626 (useConjureHistoryData)
import c from "c" /* 576 */;
import ConjureHistoryFormat from "ConjureHistoryFormat" /* 16621 */;
import ConjureRestorePanelOp from "ConjureRestorePanelOp" /* 16627 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ConjureConnectionStore = fn(12904);
({ fetchDatabaseRestorePoints: closure_4, fetchDatabaseRestoreWindow: hasOwnProperty, fetchVersionHistory: metroRequire } = ConjureConnectionStore);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  closure_0 = arg0;
  const cResult = c.c(12);
  [tmp3, dependencyMap] = noop.useState(0);
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  [tmp5, _slicedToArray] = noop.useState(null);
  if (cResult[0] !== arg0) {
    const fn = function o() {
      c0 = false;
      c0().then((data) => {
        if (!c0) {
          const obj = { load, state: null };
          const obj2 = { status: "loaded", data, nowMs: null };
          const _Date = Date;
          obj2.nowMs = Date.now();
          obj.state = obj2;
          _slicedToArray(obj);
        }
      }, () => {
        if (!c0) {
          const obj = { load, state: { status: "failed" } };
          _slicedToArray(obj);
        }
      });
      return () => {
        c0 = true;
      };
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === arg0) {
    if (cResult[3] === tmp3) {
      let tmp7 = cResult[4];
    }
    const effect = noop.useEffect(tmp6, tmp7);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function u() {
        _slicedToArray(null);
        dependencyMap((arg0) => arg0 + 1);
      };
      cResult[5] = fn2;
      let tmp10 = fn2;
    } else {
      tmp10 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn3 = function y() {
        return dependencyMap((arg0) => arg0 + 1);
      };
      cResult[6] = fn3;
      let tmp11 = fn3;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] === arg0) {
      if (cResult[8] === tmp5) {
        if (cResult[10] !== cResult[9]) {
          const obj3 = { state: tmp12, retry: tmp10, refresh: tmp11 };
          cResult[10] = tmp12;
          cResult[11] = obj3;
          let tmp14 = obj3;
        } else {
          tmp14 = cResult[11];
        }
        return tmp14;
      }
    }
    if (null == tmp5) {
      let obj4 = { status: "loading" };
      cResult[7] = arg0;
      cResult[8] = tmp5;
      cResult[9] = obj4;
    }
    obj4 = tmp5.state;
  }
  const items = [arg0, tmp3];
  cResult[2] = arg0;
  cResult[3] = tmp3;
  cResult[4] = items;
  tmp7 = items;
  const tmp4 = _slicedToArray(noop.useState(null), 2);
}) : ((arg0) => {
  closure_0 = arg0;
  const tmp = _slicedToArray(noop.useState(0), 2);
  closure_1 = tmp[1];
  [tmp3, _slicedToArray] = noop.useState(null);
  const items = [arg0, tmp[0]];
  const effect = noop.useEffect(() => {
    c0 = false;
    c0().then((data) => {
      if (!c0) {
        const obj = { load, state: null };
        const obj2 = { status: "loaded", data, nowMs: null };
        const _Date = Date;
        obj2.nowMs = Date.now();
        obj.state = obj2;
        _slicedToArray(obj);
      }
    }, () => {
      if (!c0) {
        const obj = { load, state: { status: "failed" } };
        _slicedToArray(obj);
      }
    });
    return () => {
      c0 = true;
    };
  }, items);
  const callback = noop.useCallback(() => {
    _slicedToArray(null);
    closure_1((arg0) => arg0 + 1);
  }, []);
  if (null != tmp3) {
    if (tmp3.load === arg0) {
      state = tmp3.state;
    }
    let obj = { state: { status: "loading" }, retry: callback, refresh: tmp6 };
    return obj;
  }
});
let closure_8 = [];
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/history/useConjureHistoryData.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(28);
  if (cResult[0] !== arg1) {
    const result = tmp2(tmp4[5]).restorePanelEnvironments(arg1);
    cResult[0] = arg1;
    cResult[1] = result;
    let obj2 = result;
    const tmp2Result = tmp2(tmp4[5]);
  } else {
    obj2 = cResult[1];
  }
  const tmp9 = _slicedToArray(noop.useState("stable"), 2);
  environment = tmp9[0];
  if (cResult[2] !== arg0) {
    const fn = function h() {
      return timestampProducer(closure_0);
    };
    cResult[2] = arg0;
    cResult[3] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[3];
  }
  const tmp13 = closure_7(tmp11);
  if (cResult[4] !== obj2) {
    const hasItem = obj2.includes("preview");
    cResult[4] = obj2;
    cResult[5] = hasItem;
    let tmp14 = hasItem;
  } else {
    tmp14 = cResult[5];
  }
  _slicedToArray = tmp14;
  if (cResult[6] === tmp14) {
    if (cResult[7] === arg0) {
      let tmp16 = cResult[8];
    }
    const tmp12Result = closure_7(tmp16);
    if (cResult[9] === environment) {
      if (cResult[10] === arg0) {
        let tmp18 = cResult[11];
      }
      const tmp12Result2 = closure_7(tmp18);
      const refresh = tmp12Result2.refresh;
      class B {
        constructor() {
          items = [, ];
          items[0] = closure_4(closure_0, closure_1);
          items[1] = closure_5(closure_0, closure_1);
          allPromises = Promise.all(items);
          return allPromises.then((result) => {
            const tmp = closure_1_2(result, 2);
            return { points: tmp[0], window: tmp[1] };
          });
        }
      }
      const refresh2 = tmp12Result.refresh;
      if (cResult[12] === refresh) {
        if (cResult[13] === refresh2) {
          let tmp20 = cResult[14];
        }
        state = tmp13.state;
        if (cResult[15] === state.data) {
          if (cResult[16] === state.status) {
            let tmp21 = cResult[17];
          }
          if ("loaded" === tmp12Result.state.status) {
            let data = tmp12Result.state.data;
          } else {
            data = closure_8;
          }
          class B {
            constructor() {
              items = [, ];
              items[0] = closure_4(closure_0, closure_1);
              items[1] = closure_5(closure_0, closure_1);
              allPromises = Promise.all(items);
              return allPromises.then((result) => {
                const tmp = closure_1_2(result, 2);
                return { points: tmp[0], window: tmp[1] };
              });
            }
          }
          const status = tmp12Result.state.status;
          if ("loaded" === tmp12Result2.state.status) {
            const _window = tmp12Result2.state.data.window;
          }
          class D {
            constructor() {
              tmp = refresh();
              tmp2 = refresh();
              return;
            }
          }
          if (cResult[18] === tmp12Result2) {
            if (cResult[19] === environment) {
              if (cResult[20] === obj2) {
                if (cResult[21] === tmp20) {
                  if (cResult[22] === data) {
                    if (cResult[23] === tmp28) {
                      if (cResult[24] === _window) {
                        if (cResult[25] === tmp21) {
                          if (cResult[26] === tmp13) {
                            let tmp29 = cResult[27];
                          }
                          return tmp29;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj3 = { environments: obj2, environment, setEnvironment: tmp9[1], versions: tmp13, previewBackups: data, previewBackupsLoading: tmp28, backups: tmp12Result2, restoreWindow: _window, refreshAllBackups: tmp20, versionTitles: tmp21 };
          cResult[18] = tmp12Result2;
          cResult[19] = environment;
          cResult[20] = obj2;
          cResult[21] = tmp20;
          cResult[22] = data;
          cResult[23] = tmp28;
          cResult[24] = _window;
          cResult[25] = tmp21;
          cResult[26] = tmp13;
          cResult[27] = obj3;
          tmp29 = obj3;
        }
        class B {
          constructor() {
            items = [, ];
            items[0] = closure_4(closure_0, closure_1);
            items[1] = closure_5(closure_0, closure_1);
            allPromises = Promise.all(items);
            return allPromises.then((result) => {
              const tmp = closure_1_2(result, 2);
              return { points: tmp[0], window: tmp[1] };
            });
          }
        }
        const _Map = Map;
        class D {
          constructor() {
            tmp = refresh();
            tmp2 = refresh();
            return;
          }
        }
        if ("loaded" === state.status) {
          const entries = state.data.entries;
          class B {
            constructor() {
              items = [, ];
              items[0] = closure_4(closure_0, closure_1);
              items[1] = closure_5(closure_0, closure_1);
              allPromises = Promise.all(items);
              return allPromises.then((result) => {
                const tmp = closure_1_2(result, 2);
                return { points: tmp[0], window: tmp[1] };
              });
            }
          }
        }
        cResult[15] = state.data;
        cResult[16] = state.status;
        cResult[17] = tmp24;
        tmp21 = tmp24;
      }
      class D {
        constructor() {
          tmp = refresh();
          tmp2 = refresh();
          return;
        }
      }
      cResult[12] = refresh;
      cResult[13] = refresh2;
      cResult[14] = D;
      tmp20 = D;
    }
    class B {
      constructor() {
        items = [, ];
        items[0] = closure_4(closure_0, closure_1);
        items[1] = closure_5(closure_0, closure_1);
        allPromises = Promise.all(items);
        return allPromises.then((result) => {
          const tmp = closure_1_2(result, 2);
          return { points: tmp[0], window: tmp[1] };
        });
      }
    }
    cResult[9] = environment;
    cResult[11] = B;
    tmp18 = B;
  }
  const fn2 = function _() {
    if (closure_2) {
      let resolved = React4(closure_0, "preview");
    } else {
      resolved = Promise.resolve(closure_8);
    }
    return resolved;
  };
  cResult[6] = tmp14;
  cResult[7] = arg0;
  cResult[8] = fn2;
  tmp16 = fn2;
  const obj = require("c");
  tmp2 = _require;
  tmp4 = environment;
}) : ((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  let items = [arg1];
  const memo = hasItem.useMemo(() => ConjureRestorePanelOp.restorePanelEnvironments(closure_1), items);
  const tmp = environment(hasItem.useState("stable"), 2);
  environment = tmp[0];
  const items1 = [arg0];
  const tmp3 = closure_7(hasItem.useCallback(() => timestampProducer(closure_0), items1));
  hasItem = memo.includes("preview");
  const items2 = [arg0, hasItem];
  const tmp5 = closure_7(hasItem.useCallback(() => {
    if (hasItem) {
      let resolved = React4(closure_0, "preview");
    } else {
      resolved = Promise.resolve(closure_8);
    }
    return resolved;
  }, items2));
  const items3 = [arg0, environment];
  const tmp6 = closure_7(hasItem.useCallback(() => {
    const items = [React4(closure_0, first), hasOwnProperty(closure_0, first)];
    return Promise.all(items).then((result) => {
      [tmp, tmp2] = result;
      return { points, window: _window };
    });
  }, items3));
  const refresh = tmp6.refresh;
  const refresh2 = tmp5.refresh;
  const items4 = [refresh, refresh2];
  state = tmp3.state;
  const items5 = [state];
  const callback = hasItem.useCallback(() => {
    refresh();
    refresh2();
  }, items4);
  const obj = { environments: memo, environment, setEnvironment: tmp[1], versions: tmp3, previewBackups: null, previewBackupsLoading: null, backups: null, restoreWindow: null, refreshAllBackups: null, versionTitles: null };
  const memo1 = hasItem.useMemo(() => {
    const map = new Map();
    if ("loaded" === state.status) {
      const entries = state.data.entries;
      for (const item10015 of entries) {
        let obj2 = ConjureHistoryFormat;
        let result = map.set(item10015.sha, obj2.versionTitle(item10015.subject).short);
        continue;
      }
    }
    return map;
  }, items5);
  if ("loaded" === tmp5.state.status) {
    let data = tmp5.state.data;
  } else {
    data = closure_8;
  }
  obj.previewBackups = data;
  obj.previewBackupsLoading = "loading" === tmp5.state.status;
  obj.backups = tmp6;
  let _window = null;
  if ("loaded" === tmp6.state.status) {
    _window = tmp6.state.data.window;
  }
  obj.restoreWindow = _window;
  obj.refreshAllBackups = callback;
  obj.versionTitles = memo1;
  return obj;
});