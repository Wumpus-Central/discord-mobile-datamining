// === Module 12532: useConjureHistoryData ===

// Module 12532 (useConjureHistoryData)
import conjureHistoryRequests from "conjureHistoryRequests" /* 12520 */;
import ConjureHistoryFormat from "ConjureHistoryFormat" /* 12522 */;
import ConjureRestorePanelOp from "ConjureRestorePanelOp" /* 12533 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = [];
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/history/useConjureHistoryData.tsx");

export default function useConjureHistoryData(arg0, arg1) {
  let items = [arg1];
  const memo = obj3.useMemo(() => ConjureRestorePanelOp.restorePanelEnvironments(c1), items);
  const hasItem = memo.includes("preview");
  const items1 = [arg0];
  const callback = obj3.useCallback(() => conjureHistoryRequests.fetchVersionHistory(callback6), items1);
  let callback6 = callback;
  _slicedToArray = undefined;
  const tmp4 = _slicedToArray(obj3.useState(0), 2);
  c1 = tmp4[1];
  [tmp6, c2] = obj3.useState(null);
  const items2 = [callback, tmp4[0]];
  const effect = obj3.useEffect(() => {
    callback6 = false;
    callback6().then((data) => {
      if (!c0) {
        const obj = { load: callback6, state: null };
        const obj2 = { status: "loaded", data, nowMs: null };
        const _Date = Date;
        obj2.nowMs = Date.now();
        obj.state = obj2;
        c2(obj);
      }
    }, () => {
      if (!c0) {
        const obj = { load: callback6, state: { status: "failed" } };
        c2(obj);
      }
    });
    return () => {
      c0 = true;
    };
  }, items2);
  const callback1 = obj3.useCallback(() => {
    _undefined2(null);
    _undefined((arg0) => arg0 + 1);
  }, []);
  if (null != tmp6) {
    if (tmp6.load === callback) {
      let state = tmp6.state;
    }
    let obj2 = { state: { status: "loading" }, retry: callback1, refresh: tmp9 };
    const items3 = [arg0];
    const callback2 = obj.useCallback(() => {
      const items = [conjureHistoryRequests.fetchDatabaseRestorePoints(callback6, "stable"), ];
      items[1] = conjureHistoryRequests.fetchDatabaseRestoreWindow(callback6, "stable");
      return Promise.all(items).then((result) => {
        [tmp, tmp2] = result;
        return { points, window: _window };
      });
    }, items3);
    callback6 = callback2;
    c1 = undefined;
    _slicedToArray = undefined;
    [tmp12, c1] = tmp3(obj.useState(0), 2);
    const tmp3Result = tmp3(obj.useState(0), 2);
    [tmp14, c2] = tmp3(obj.useState(null), 2);
    const items4 = [callback2, tmp12];
    const effect1 = obj.useEffect(() => {
      callback6 = false;
      callback6().then((data) => {
        if (!c0) {
          const obj = { load: callback6, state: null };
          const obj2 = { status: "loaded", data, nowMs: null };
          const _Date = Date;
          obj2.nowMs = Date.now();
          obj.state = obj2;
          c2(obj);
        }
      }, () => {
        if (!c0) {
          const obj = { load: callback6, state: { status: "failed" } };
          c2(obj);
        }
      });
      return () => {
        c0 = true;
      };
    }, items4);
    const callback3 = obj.useCallback(() => {
      _undefined2(null);
      _undefined((arg0) => arg0 + 1);
    }, []);
    if (null != tmp14) {
      if (tmp14.load === callback2) {
        let state1 = tmp14.state;
      }
      obj3 = { state: state1, retry: callback3, refresh: tmp17 };
      const items5 = [arg0, hasItem];
      const callback4 = obj.useCallback(() => {
        if (c2) {
          let databaseRestorePoints = conjureHistoryRequests.fetchDatabaseRestorePoints(callback6, "preview");
        } else {
          databaseRestorePoints = Promise.resolve(closure_4);
        }
        return databaseRestorePoints;
      }, items5);
      callback6 = callback4;
      c1 = undefined;
      _slicedToArray = undefined;
      [tmp20, c1] = tmp3(obj.useState(0), 2);
      const tmp3Result7 = tmp3(obj.useState(0), 2);
      [tmp22, c2] = tmp3(obj.useState(null), 2);
      const items6 = [callback4, tmp20];
      const effect2 = obj.useEffect(() => {
        callback6 = false;
        callback6().then((data) => {
          if (!c0) {
            const obj = { load: callback6, state: null };
            const obj2 = { status: "loaded", data, nowMs: null };
            const _Date = Date;
            obj2.nowMs = Date.now();
            obj.state = obj2;
            c2(obj);
          }
        }, () => {
          if (!c0) {
            const obj = { load: callback6, state: { status: "failed" } };
            c2(obj);
          }
        });
        return () => {
          c0 = true;
        };
      }, items6);
      const callback5 = obj.useCallback(() => {
        _undefined2(null);
        _undefined((arg0) => arg0 + 1);
      }, []);
      if (null != tmp22) {
        if (tmp22.load === callback4) {
          let state4 = tmp22.state;
        }
        let obj4 = { state: state4, retry: callback5, refresh: tmp25 };
        const items7 = [arg0, hasItem];
        callback6 = obj.useCallback(() => {
          if (c2) {
            let databaseRestoreWindow = conjureHistoryRequests.fetchDatabaseRestoreWindow(callback6, "preview");
          } else {
            databaseRestoreWindow = Promise.resolve(null);
          }
          return databaseRestoreWindow;
        }, items7);
        c1 = undefined;
        _slicedToArray = undefined;
        [tmp28, c1] = tmp3(obj.useState(0), 2);
        const tmp3Result9 = tmp3(obj.useState(0), 2);
        [tmp30, c2] = tmp3(obj.useState(null), 2);
        const items8 = [callback6, tmp28];
        const effect3 = obj.useEffect(() => {
          callback6 = false;
          callback6().then((data) => {
            if (!c0) {
              const obj = { load: callback6, state: null };
              const obj2 = { status: "loaded", data, nowMs: null };
              const _Date = Date;
              obj2.nowMs = Date.now();
              obj.state = obj2;
              c2(obj);
            }
          }, () => {
            if (!c0) {
              const obj = { load: callback6, state: { status: "failed" } };
              c2(obj);
            }
          });
          return () => {
            c0 = true;
          };
        }, items8);
        const callback7 = obj.useCallback(() => {
          _undefined2(null);
          _undefined((arg0) => arg0 + 1);
        }, []);
        if (null != tmp30) {
          if (tmp30.load === callback6) {
            let state5 = tmp30.state;
          }
          const obj5 = { state: state5, retry: callback7, refresh: tmp33 };
          const refresh = obj3.refresh;
          const refresh2 = obj4.refresh;
          const refresh3 = obj5.refresh;
          const items9 = [refresh, refresh2, refresh3];
          const callback8 = obj.useCallback(() => {
            refresh();
            refresh2();
            refresh3();
          }, items9);
          let state2 = obj2.state;
          const items10 = [state2];
          const mapped = memo.map((environment) => {
            const obj = { environment, backups: null };
            if ("preview" === environment) {
              closure_0 = obj4;
              closure_1 = obj5;
              const state = obj4.state;
              state2 = obj5.state;
              if ("failed" !== state.status) {
                if ("failed" !== state2.status) {
                  if ("loading" !== state.status) {
                    if ("loading" !== state2.status) {
                      if (null == state2.data) {
                        let obj2 = { status: "failed" };
                      } else {
                        obj2 = { status: "loaded", data: null, nowMs: null };
                        obj3 = { points: state.data, window: state2.data };
                        obj2.data = obj3;
                        obj2.nowMs = state.nowMs;
                      }
                    }
                  }
                  obj2 = { status: "loading" };
                }
                obj4 = {
                  state: obj2,
                  retry() {
                        closure_0.retry();
                        closure_1.retry();
                      },
                  refresh() {
                        closure_0.refresh();
                        closure_1.refresh();
                      }
                };
              }
              obj2 = { status: "failed" };
            } else {
              obj.backups = obj3;
              return obj;
            }
          });
          const state3 = obj4.state;
          const obj6 = {
            sharedDatabase: !hasItem,
            versions: obj2,
            databases: mapped,
            previewBackups: "loaded" === state3.status ? state3.data : obj4,
            previewBackupsLoading: "loading" === state3.status,
            refreshAllBackups: callback8,
            versionTitles: obj.useMemo(() => {
                      const map = new Map();
                      if ("loaded" === state2.status) {
                        const entries = state2.data.entries;
                        for (const item10015 of entries) {
                          let obj2 = ConjureHistoryFormat;
                          let result = map.set(item10015.sha, obj2.versionTitle(item10015.subject).short);
                          continue;
                        }
                      }
                      return map;
                    }, items10)
          };
          return obj6;
        }
        state5 = { status: "loading" };
        const tmp3Result10 = tmp3(obj.useState(null), 2);
      }
      state4 = { status: "loading" };
      const tmp3Result8 = tmp3(obj.useState(null), 2);
    }
    state1 = { status: "loading" };
    const tmp3Result6 = tmp3(obj.useState(null), 2);
  }
};
export function useHistoryLoad(callback) {
  const tmp = _slicedToArray(noop.useState(0), 2);
  closure_1 = tmp[1];
  [tmp3, _slicedToArray] = noop.useState(null);
  const items = [callback, tmp[0]];
  const effect = noop.useEffect(() => {
    callback6 = false;
    callback6().then((data) => {
      if (!c0) {
        const obj = { load: callback6, state: null };
        const obj2 = { status: "loaded", data, nowMs: null };
        const _Date = Date;
        obj2.nowMs = Date.now();
        obj.state = obj2;
        c2(obj);
      }
    }, () => {
      if (!c0) {
        const obj = { load: callback6, state: { status: "failed" } };
        c2(obj);
      }
    });
    return () => {
      c0 = true;
    };
  }, items);
  const retry = noop.useCallback(() => {
    _undefined2(null);
    _undefined((arg0) => arg0 + 1);
  }, []);
  if (null != tmp3) {
    if (tmp3.load === callback) {
      const state = tmp3.state;
    }
    const obj = { state: { status: "loading" }, retry, refresh: tmp6 };
    return obj;
  }
}