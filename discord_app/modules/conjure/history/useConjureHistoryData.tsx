// === Module 17053: useConjureHistoryData ===

// Module 17053 (useConjureHistoryData)
import c from "c" /* 576 */;
import ConjureHistoryFormat from "ConjureHistoryFormat" /* 17048 */;
import ConjureRestorePanelOp from "ConjureRestorePanelOp" /* 17054 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ConjureConnectionStore = fn(13164);
({ fetchDatabaseRestorePoints: closure_4, fetchDatabaseRestoreWindow: hasOwnProperty, fetchVersionHistory: metroRequire } = ConjureConnectionStore);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHistoryLoad(arg0) {
  closure_0 = arg0;
  const cResult = c.c(12);
  [tmp3, dependencyMap] = noop.useState(0);
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  [tmp5, _slicedToArray] = noop.useState(null);
  if (cResult[0] !== arg0) {
    const fn = function n() {
      c0 = false;
      c0().then((data) => {
        if (!c0) {
          const obj = { load, state: null };
          const obj2 = { status: "loaded", data, nowMs: null };
          const _Date = Date;
          obj2.nowMs = Date.now();
          obj.state = obj2;
          backups(obj);
        }
      }, () => {
        if (!c0) {
          const obj = { load, state: { status: "failed" } };
          backups(obj);
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
      const fn2 = function l() {
        backups(null);
        dependencyMap((arg0) => arg0 + 1);
      };
      cResult[5] = fn2;
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          return closure_1((arg0) => arg0 + 1);
        }
      }
      cResult[6] = B;
    } else {
      class B {
        constructor() {
          return closure_1((arg0) => arg0 + 1);
        }
      }
    }
    if (cResult[7] === arg0) {
      class B {
        constructor() {
          return closure_1((arg0) => arg0 + 1);
        }
      }
    }
    if (null == tmp5) {
      class B {
        constructor() {
          return closure_1((arg0) => arg0 + 1);
        }
      }
      cResult[7] = arg0;
      cResult[8] = tmp5;
      cResult[9] = state;
    } else {
      class B {
        constructor() {
          return closure_1((arg0) => arg0 + 1);
        }
      }
    }
    state = tmp5.state;
  }
  const items = [arg0, tmp3];
  cResult[2] = arg0;
  cResult[3] = tmp3;
  cResult[4] = items;
  tmp7 = items;
  const tmp4 = _slicedToArray(noop.useState(null), 2);
}) : (function useHistoryLoad(arg0) {
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
        backups(obj);
      }
    }, () => {
      if (!c0) {
        const obj = { load, state: { status: "failed" } };
        backups(obj);
      }
    });
    return () => {
      c0 = true;
    };
  }, items);
  const callback = noop.useCallback(() => {
    backups(null);
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

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureHistoryData(arg0, arg1) {
  _require = arg0;
  const cResult = require("c").c(38);
  if (cResult[0] !== arg1) {
    const result = require("ConjureRestorePanelOp").restorePanelEnvironments(arg1);
    cResult[0] = arg1;
    cResult[1] = result;
    let arr = result;
    const tmp2Result = require("ConjureRestorePanelOp");
  } else {
    arr = cResult[1];
  }
  if (cResult[2] !== arr) {
    const hasItem = arr.includes("preview");
    cResult[2] = arr;
    cResult[3] = hasItem;
    let tmp9 = hasItem;
  } else {
    tmp9 = cResult[3];
  }
  dependencyMap = tmp9;
  if (cResult[4] !== arg0) {
    const fn = function b() {
      return timestampProducer(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[5];
  }
  const tmp13 = refresh3(tmp11);
  if (cResult[6] !== arg0) {
    const fn2 = function k() {
      const items = [React4(closure_0, "stable"), hasOwnProperty(closure_0, "stable")];
      return Promise.all(items).then((result) => {
        [tmp, tmp2] = result;
        return { points, window: _window };
      });
    };
    cResult[6] = arg0;
    cResult[7] = fn2;
    let tmp14 = fn2;
  } else {
    tmp14 = cResult[7];
  }
  const tmp12Result = refresh3(tmp14);
  backups = tmp12Result;
  if (cResult[8] === tmp9) {
    if (cResult[9] === arg0) {
      let tmp16 = cResult[10];
    }
    const tmp12Result3 = tmp12(tmp16);
    noop = tmp12Result3;
    if (cResult[11] === tmp9) {
      if (cResult[12] === arg0) {
        let tmp18 = cResult[13];
      }
      const tmp12Result4 = tmp12(tmp18);
      let state2 = tmp12Result4;
      const refresh = tmp12Result.refresh;
      class D {
        constructor() {
          if (closure_1) {
            tmp4 = closure_5;
            tmp5 = closure_0;
            str = "preview";
            resolved = closure_5(closure_0, "preview");
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = null;
            resolved = Promise.resolve(null);
          }
          return resolved;
        }
      }
      const refresh2 = tmp12Result3.refresh;
      refresh3 = tmp12Result4.refresh;
      if (cResult[14] === refresh) {
        if (cResult[15] === refresh2) {
          if (cResult[16] === refresh3) {
            let tmp20 = cResult[17];
          }
          if (cResult[18] === arr) {
            if (cResult[19] === tmp12Result) {
              if (cResult[20] === tmp12Result3) {
                if (cResult[21] === tmp12Result4) {
                  state = tmp13.state;
                  if (cResult[27] === state.data) {
                    if (cResult[28] === state.status) {
                      let tmp25 = cResult[29];
                    }
                    class L {
                      constructor(arg0) {
                        obj = { environment: arg0, backups: null };
                        if ("preview" === arg0) {
                          tmp = closure_3;
                          tmp2 = closure_4;
                          closure_0 = closure_3;
                          closure_1 = closure_4;
                          state = closure_3.state;
                          state2 = closure_4.state;
                          str = "failed";
                          if ("failed" !== state.status) {
                            if ("failed" !== state2.status) {
                              str2 = "loading";
                              if ("loading" !== state.status) {
                                if ("loading" !== state2.status) {
                                  tmp3 = null;
                                  if (null == state2.data) {
                                    obj1 = { status: "failed" };
                                  } else {
                                    obj1 = { status: "loaded", data: null, nowMs: null };
                                    obj5 = { points: null, window: null };
                                    obj5.points = state.data;
                                    obj5.window = state2.data;
                                    obj1.data = obj5;
                                    obj1.nowMs = state.nowMs;
                                  }
                                }
                              }
                              obj1 = { status: "loading" };
                            }
                            obj6 = { state: null, retry: null, refresh: null };
                            obj6.state = obj1;
                            obj6.retry = function retry() {
                              closure_0.retry();
                              closure_1.retry();
                            };
                            obj6.refresh = function refresh() {
                              closure_0.refresh();
                              closure_1.refresh();
                            };
                            tmp4 = obj6;
                          }
                          obj1 = { status: "failed" };
                        } else {
                          obj.backups = closure_2;
                          return obj;
                        }
                        return;
                      }
                    }
                    class D {
                      constructor() {
                        if (closure_1) {
                          tmp4 = closure_5;
                          tmp5 = closure_0;
                          str = "preview";
                          resolved = closure_5(closure_0, "preview");
                        } else {
                          tmp = globalThis;
                          _Promise = Promise;
                          tmp2 = null;
                          resolved = Promise.resolve(null);
                        }
                        return resolved;
                      }
                    }
                    if (cResult[30] === tmp21) {
                      if (cResult[31] === tmp20) {
                        if (cResult[32] === tmp32) {
                          if (cResult[33] === tmp30) {
                            if (cResult[34] === tmp31) {
                              if (cResult[35] === tmp25) {
                                if (cResult[36] === tmp13) {
                                  let tmp33 = cResult[37];
                                }
                                return tmp33;
                              }
                            }
                          }
                        }
                      }
                    }
                    let obj2 = { sharedDatabase: !tmp9, versions: null, databases: null, previewBackups: null, previewBackupsLoading: null, refreshAllBackups: null, versionTitles: null };
                    class P {
                      constructor() {
                        tmp = refresh();
                        tmp2 = refresh();
                        tmp3 = refresh();
                        return;
                      }
                    }
                    obj2.databases = tmp21;
                    obj2.previewBackups = tmp31;
                    obj2.previewBackupsLoading = "loading" === tmp12Result3.state.status;
                    obj2.refreshAllBackups = tmp20;
                    obj2.versionTitles = tmp25;
                    cResult[30] = tmp21;
                    cResult[31] = tmp20;
                    class B {
                      constructor() {
                        if (closure_1) {
                          tmp4 = closure_4;
                          tmp5 = closure_0;
                          str = "preview";
                          resolved = closure_4(closure_0, "preview");
                        } else {
                          tmp = globalThis;
                          _Promise = Promise;
                          tmp2 = closure_8;
                          resolved = Promise.resolve(closure_8);
                        }
                        return resolved;
                      }
                    }
                    cResult[33] = !tmp9;
                    cResult[34] = tmp31;
                    cResult[35] = tmp25;
                    cResult[36] = tmp13;
                    cResult[37] = obj2;
                    tmp33 = obj2;
                  }
                  class L {
                    constructor(arg0) {
                      obj = { environment: arg0, backups: null };
                      if ("preview" === arg0) {
                        tmp = closure_3;
                        tmp2 = closure_4;
                        closure_0 = closure_3;
                        closure_1 = closure_4;
                        state = closure_3.state;
                        state2 = closure_4.state;
                        str = "failed";
                        if ("failed" !== state.status) {
                          if ("failed" !== state2.status) {
                            str2 = "loading";
                            if ("loading" !== state.status) {
                              if ("loading" !== state2.status) {
                                tmp3 = null;
                                if (null == state2.data) {
                                  obj1 = { status: "failed" };
                                } else {
                                  obj1 = { status: "loaded", data: null, nowMs: null };
                                  obj5 = { points: null, window: null };
                                  obj5.points = state.data;
                                  obj5.window = state2.data;
                                  obj1.data = obj5;
                                  obj1.nowMs = state.nowMs;
                                }
                              }
                            }
                            obj1 = { status: "loading" };
                          }
                          obj6 = { state: null, retry: null, refresh: null };
                          obj6.state = obj1;
                          obj6.retry = function retry() {
                            closure_0.retry();
                            closure_1.retry();
                          };
                          obj6.refresh = function refresh() {
                            closure_0.refresh();
                            closure_1.refresh();
                          };
                          tmp4 = obj6;
                        }
                        obj1 = { status: "failed" };
                      } else {
                        obj.backups = closure_2;
                        return obj;
                      }
                      return;
                    }
                  }
                  class D {
                    constructor() {
                      if (closure_1) {
                        tmp4 = closure_5;
                        tmp5 = closure_0;
                        str = "preview";
                        resolved = closure_5(closure_0, "preview");
                      } else {
                        tmp = globalThis;
                        _Promise = Promise;
                        tmp2 = null;
                        resolved = Promise.resolve(null);
                      }
                      return resolved;
                    }
                  }
                  const map = new Map();
                  class P {
                    constructor() {
                      tmp = refresh();
                      tmp2 = refresh();
                      tmp3 = refresh();
                      return;
                    }
                  }
                  cResult[27] = state.data;
                  cResult[28] = state.status;
                  cResult[29] = map;
                  tmp25 = map;
                }
              }
            }
          }
          if (cResult[23] === tmp12Result) {
            if (cResult[24] === tmp12Result3) {
              if (cResult[25] === tmp12Result4) {
                let tmp22 = cResult[26];
              }
              const mapped = arr.map(tmp22);
              class L {
                constructor(arg0) {
                  obj = { environment: arg0, backups: null };
                  if ("preview" === arg0) {
                    tmp = closure_3;
                    tmp2 = closure_4;
                    closure_0 = closure_3;
                    closure_1 = closure_4;
                    state = closure_3.state;
                    state2 = closure_4.state;
                    str = "failed";
                    if ("failed" !== state.status) {
                      if ("failed" !== state2.status) {
                        str2 = "loading";
                        if ("loading" !== state.status) {
                          if ("loading" !== state2.status) {
                            tmp3 = null;
                            if (null == state2.data) {
                              obj1 = { status: "failed" };
                            } else {
                              obj1 = { status: "loaded", data: null, nowMs: null };
                              obj5 = { points: null, window: null };
                              obj5.points = state.data;
                              obj5.window = state2.data;
                              obj1.data = obj5;
                              obj1.nowMs = state.nowMs;
                            }
                          }
                        }
                        obj1 = { status: "loading" };
                      }
                      obj6 = { state: null, retry: null, refresh: null };
                      obj6.state = obj1;
                      obj6.retry = function retry() {
                        closure_0.retry();
                        closure_1.retry();
                      };
                      obj6.refresh = function refresh() {
                        closure_0.refresh();
                        closure_1.refresh();
                      };
                      tmp4 = obj6;
                    }
                    obj1 = { status: "failed" };
                  } else {
                    obj.backups = closure_2;
                    return obj;
                  }
                  return;
                }
              }
              class D {
                constructor() {
                  if (closure_1) {
                    tmp4 = closure_5;
                    tmp5 = closure_0;
                    str = "preview";
                    resolved = closure_5(closure_0, "preview");
                  } else {
                    tmp = globalThis;
                    _Promise = Promise;
                    tmp2 = null;
                    resolved = Promise.resolve(null);
                  }
                  return resolved;
                }
              }
              cResult[19] = tmp12Result;
              cResult[20] = tmp12Result3;
              cResult[21] = tmp12Result4;
              class P {
                constructor() {
                  tmp = refresh();
                  tmp2 = refresh();
                  tmp3 = refresh();
                  return;
                }
              }
              cResult[22] = mapped;
            }
          }
          class L {
            constructor(arg0) {
              obj = { environment: arg0, backups: null };
              if ("preview" === arg0) {
                tmp = closure_3;
                tmp2 = closure_4;
                closure_0 = closure_3;
                closure_1 = closure_4;
                state = closure_3.state;
                state2 = closure_4.state;
                str = "failed";
                if ("failed" !== state.status) {
                  if ("failed" !== state2.status) {
                    str2 = "loading";
                    if ("loading" !== state.status) {
                      if ("loading" !== state2.status) {
                        tmp3 = null;
                        if (null == state2.data) {
                          obj1 = { status: "failed" };
                        } else {
                          obj1 = { status: "loaded", data: null, nowMs: null };
                          obj5 = { points: null, window: null };
                          obj5.points = state.data;
                          obj5.window = state2.data;
                          obj1.data = obj5;
                          obj1.nowMs = state.nowMs;
                        }
                      }
                    }
                    obj1 = { status: "loading" };
                  }
                  obj6 = { state: null, retry: null, refresh: null };
                  obj6.state = obj1;
                  obj6.retry = function retry() {
                    closure_0.retry();
                    closure_1.retry();
                  };
                  obj6.refresh = function refresh() {
                    closure_0.refresh();
                    closure_1.refresh();
                  };
                  tmp4 = obj6;
                }
                obj1 = { status: "failed" };
              } else {
                obj.backups = closure_2;
                return obj;
              }
              return;
            }
          }
          class D {
            constructor() {
              if (closure_1) {
                tmp4 = closure_5;
                tmp5 = closure_0;
                str = "preview";
                resolved = closure_5(closure_0, "preview");
              } else {
                tmp = globalThis;
                _Promise = Promise;
                tmp2 = null;
                resolved = Promise.resolve(null);
              }
              return resolved;
            }
          }
          cResult[23] = tmp12Result;
          cResult[24] = tmp12Result3;
          cResult[25] = tmp12Result4;
          class P {
            constructor() {
              tmp = refresh();
              tmp2 = refresh();
              tmp3 = refresh();
              return;
            }
          }
          cResult[26] = L;
          tmp22 = L;
        }
      }
      class P {
        constructor() {
          tmp = refresh();
          tmp2 = refresh();
          tmp3 = refresh();
          return;
        }
      }
      cResult[14] = refresh;
      cResult[15] = refresh2;
      cResult[16] = refresh3;
      cResult[17] = P;
      tmp20 = P;
    }
    class D {
      constructor() {
        if (closure_1) {
          tmp4 = closure_5;
          tmp5 = closure_0;
          str = "preview";
          resolved = closure_5(closure_0, "preview");
        } else {
          tmp = globalThis;
          _Promise = Promise;
          tmp2 = null;
          resolved = Promise.resolve(null);
        }
        return resolved;
      }
    }
    cResult[11] = tmp9;
    cResult[12] = arg0;
    tmp18 = D;
  }
  class B {
    constructor() {
      if (closure_1) {
        tmp4 = closure_4;
        tmp5 = closure_0;
        str = "preview";
        resolved = closure_4(closure_0, "preview");
      } else {
        tmp = globalThis;
        _Promise = Promise;
        tmp2 = closure_8;
        resolved = Promise.resolve(closure_8);
      }
      return resolved;
    }
  }
  cResult[8] = tmp9;
  cResult[9] = arg0;
  cResult[10] = B;
  tmp16 = B;
}) : (function useConjureHistoryData(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  let items = [arg1];
  const memo = noop.useMemo(() => ConjureRestorePanelOp.restorePanelEnvironments(closure_1), items);
  const hasItem = memo.includes("preview");
  const items1 = [arg0];
  const tmp2 = refresh2(noop.useCallback(() => timestampProducer(closure_0), items1));
  const items2 = [arg0];
  const tmp3 = refresh2(noop.useCallback(() => {
    const items = [React4(closure_0, "stable"), hasOwnProperty(closure_0, "stable")];
    return Promise.all(items).then((result) => {
      [tmp, tmp2] = result;
      return { points, window: _window };
    });
  }, items2));
  noop = tmp3;
  const items3 = [arg0, hasItem];
  const tmp4 = refresh2(noop.useCallback(() => {
    if (hasItem) {
      let resolved = React4(closure_0, "preview");
    } else {
      resolved = Promise.resolve(closure_8);
    }
    return resolved;
  }, items3));
  const items4 = [arg0, hasItem];
  const tmp5 = refresh2(noop.useCallback(() => {
    if (hasItem) {
      let resolved = hasOwnProperty(closure_0, "preview");
    } else {
      resolved = Promise.resolve(null);
    }
    return resolved;
  }, items4));
  const refresh = tmp3.refresh;
  refresh2 = tmp4.refresh;
  const refresh3 = tmp5.refresh;
  const items5 = [refresh, refresh2, refresh3];
  const callback = noop.useCallback(() => {
    refresh();
    refresh2();
    refresh3();
  }, items5);
  state = tmp2.state;
  const items6 = [state];
  const mapped = memo.map((environment) => {
    const obj = { environment, backups: null };
    if ("preview" === environment) {
      closure_0 = state;
      closure_1 = state2;
      state = state.state;
      state2 = state2.state;
      if ("failed" !== state.status) {
        if ("failed" !== state2.status) {
          if ("loading" !== state.status) {
            if ("loading" !== state2.status) {
              if (null == state2.data) {
                let obj2 = { status: "failed" };
              } else {
                obj2 = { status: "loaded", data: null, nowMs: null };
                const obj3 = { points: state.data, window: state2.data };
                obj2.data = obj3;
                obj2.nowMs = state.nowMs;
              }
            }
          }
          obj2 = { status: "loading" };
        }
        const obj4 = {
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
      obj.backups = backups;
      return obj;
    }
  });
  let state2 = tmp4.state;
  return {
    sharedDatabase: !hasItem,
    versions: tmp2,
    databases: mapped,
    previewBackups: "loaded" === state2.status ? state2.data : refresh3,
    previewBackupsLoading: "loading" === state2.status,
    refreshAllBackups: callback,
    versionTitles: noop.useMemo(() => {
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
    }, items6)
  };
});