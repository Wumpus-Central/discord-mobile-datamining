// discord_app/modules/conjure/history/useConjureHistoryData.tsx
import react2 from "../../../../_runtime/00576_react.js";
import ConjureHistoryFormat from "ConjureHistoryFormat.tsx";
import ConjureRestorePanelOp from "ConjureRestorePanelOp.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import ConjureConnectionStore from "../connection/ConjureConnectionStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, map, set;

let closure_4;
let hasOwnProperty;
let metroRequire;
let react = react_mod;
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
      let arr;
      let refresh3;
      let tmp11;
      let tmp14;
      let tmp9;
      _require = arg0;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(38);
      const tmp2 = _require;
      if (cResult[0] !== arg1) {
        const tmp2Result = tmp2(16664);
        const result = tmp2Result.restorePanelEnvironments(arg1);
        cResult[0] = arg1;
        cResult[1] = result;
        arr = result;
      } else {
        arr = cResult[1];
      }
      if (cResult[2] !== arr) {
        const hasItem = arr.includes("preview");
        cResult[2] = arr;
        cResult[3] = hasItem;
        tmp9 = hasItem;
      } else {
        tmp9 = cResult[3];
      }
      dependencyMap = tmp9;
      if (cResult[4] !== arg0) {
        const fn = function b() {
          return metroRequire(closure_0);
        };
        cResult[4] = arg0;
        cResult[5] = fn;
        tmp11 = fn;
      } else {
        tmp11 = cResult[5];
      }
      const tmp13 = refresh3(tmp11);
      if (cResult[6] !== arg0) {
        const fn2 = function k() {
          const items = [React3(closure_0, "stable"), hasOwnProperty(closure_0, "stable")];
          const allResult = all(items);
          return allResult.then((result) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = result;
            return { points, window: _window };
          });
        };
        cResult[6] = arg0;
        cResult[7] = fn2;
        tmp14 = fn2;
      } else {
        tmp14 = cResult[7];
      }
      const tmp12Result = refresh3(tmp14);
      let closure_2 = tmp12Result;
      if (cResult[8] === tmp9) {
        let tmp16;
        if (cResult[9] === arg0) {
          tmp16 = cResult[10];
        }
        const tmp12Result3 = refresh3(tmp16);
        react = tmp12Result3;
        if (cResult[11] === tmp9) {
          let tmp18;
          if (cResult[12] === arg0) {
            tmp18 = cResult[13];
          }
          const tmp12Result4 = refresh3(tmp18);
          let state2 = tmp12Result4;
          const refresh = tmp12Result.refresh;
          class M {
            constructor() {
              let resolved;
              if (closure_1) {
                resolved = hasOwnProperty(closure_0, "preview");
              } else {
                resolved = Promise.resolve(null);
              }
              return resolved;
            }
          }
          const refresh2 = tmp12Result3.refresh;
          refresh3 = tmp12Result4.refresh;
          if (cResult[14] === refresh) {
            if (cResult[15] === refresh2) {
              let tmp20;
              let tmp21;
              if (cResult[16] === refresh3) {
                tmp20 = cResult[17];
              }
              if (cResult[18] === arr) {
                if (cResult[19] === tmp12Result) {
                  if (cResult[20] === tmp12Result3) {
                    if (cResult[21] === tmp12Result4) {
                      tmp21 = cResult[22];
                    }
                    let state = tmp13.state;
                    if (cResult[27] === state.data) {
                      let tmp24;
                      if (cResult[28] === state.status) {
                        tmp24 = cResult[29];
                      }
                      state2 = tmp12Result3.state;
                      class T {
                        constructor(environment) {
                          let obj3;
                          let tmp;
                          const obj = { environment, backups: tmp };
                          if ("preview" === environment) {
                            closure_0 = state;
                            closure_1 = state2;
                            state = state.state;
                            state2 = state2.state;
                            if ("failed" !== state.status) {
                              let obj2;
                              if ("failed" !== state2.status) {
                                if ("loading" !== state.status) {
                                  if ("loading" !== state2.status) {
                                    if (null == state2.data) {
                                      obj2 = { status: "failed" };
                                    } else {
                                      obj2 = { status: "loaded", data: obj3, nowMs: state.nowMs };
                                      obj3 = { points: state.data, window: state2.data };
                                    }
                                  }
                                }
                                obj2 = { status: "loading" };
                              }
                              tmp = {
                                state: obj2,
                                retry() {
                                  closure_0.retry();
                                  closure_1.retry();
                                },
                                refresh() {
                                  closure_0.refresh();
                                  closure_1.refresh();
                                },
                              };
                              const obj4 = {
                                state: obj2,
                                retry() {
                                  closure_0.retry();
                                  closure_1.retry();
                                },
                                refresh() {
                                  closure_0.refresh();
                                  closure_1.refresh();
                                },
                              };
                            }
                            obj2 = { status: "failed" };
                          } else {
                            tmp = closure_2;
                          }
                          return obj;
                        }
                      }
                      class M {
                        constructor() {
                          let resolved;
                          if (closure_1) {
                            resolved = hasOwnProperty(closure_0, "preview");
                          } else {
                            resolved = Promise.resolve(null);
                          }
                          return resolved;
                        }
                      }
                      if (cResult[30] === tmp21) {
                        if (cResult[31] === tmp20) {
                          if ((cResult[32] === "loading") === state2.status) {
                            if (cResult[33] === !tmp9) {
                              if (cResult[34] === tmp30) {
                                if (cResult[35] === tmp24) {
                                  let tmp32;
                                  if (cResult[36] === tmp13) {
                                    tmp32 = cResult[37];
                                  }
                                  return tmp32;
                                }
                              }
                            }
                          }
                        }
                      }
                      let obj2 = {
                        sharedDatabase: !tmp9,
                        versions: tmp13,
                        databases: tmp21,
                        previewBackups: tmp30,
                        previewBackupsLoading: "loading" === state2.status,
                        refreshAllBackups: tmp20,
                        versionTitles: tmp24,
                      };
                      cResult[30] = tmp21;
                      cResult[31] = tmp20;
                      cResult[32] = "loading" === state2.status;
                      cResult[33] = !tmp9;
                      cResult[34] = tmp30;
                      cResult[35] = tmp24;
                      cResult[36] = tmp13;
                      cResult[37] = obj2;
                      tmp32 = obj2;
                    }
                    class T {
                      constructor(environment) {
                        let obj3;
                        let tmp;
                        const obj = { environment, backups: tmp };
                        if ("preview" === environment) {
                          closure_0 = state;
                          closure_1 = state2;
                          state = state.state;
                          state2 = state2.state;
                          if ("failed" !== state.status) {
                            let obj2;
                            if ("failed" !== state2.status) {
                              if ("loading" !== state.status) {
                                if ("loading" !== state2.status) {
                                  if (null == state2.data) {
                                    obj2 = { status: "failed" };
                                  } else {
                                    obj2 = { status: "loaded", data: obj3, nowMs: state.nowMs };
                                    obj3 = { points: state.data, window: state2.data };
                                  }
                                }
                              }
                              obj2 = { status: "loading" };
                            }
                            tmp = {
                              state: obj2,
                              retry() {
                                closure_0.retry();
                                closure_1.retry();
                              },
                              refresh() {
                                closure_0.refresh();
                                closure_1.refresh();
                              },
                            };
                            const obj4 = {
                              state: obj2,
                              retry() {
                                closure_0.retry();
                                closure_1.retry();
                              },
                              refresh() {
                                closure_0.refresh();
                                closure_1.refresh();
                              },
                            };
                          }
                          obj2 = { status: "failed" };
                        } else {
                          tmp = closure_2;
                        }
                        return obj;
                      }
                    }
                    class M {
                      constructor() {
                        let resolved;
                        if (closure_1) {
                          resolved = hasOwnProperty(closure_0, "preview");
                        } else {
                          resolved = Promise.resolve(null);
                        }
                        return resolved;
                      }
                    }
                    const self = this;
                    const self2 = this;
                    map = new Map();
                    if ("loaded" === state.status) {
                      const entries = state.data.entries;
                      class T {
                        constructor(environment) {
                          let obj3;
                          let tmp;
                          const obj = { environment, backups: tmp };
                          if ("preview" === environment) {
                            closure_0 = state;
                            closure_1 = state2;
                            state = state.state;
                            state2 = state2.state;
                            if ("failed" !== state.status) {
                              let obj2;
                              if ("failed" !== state2.status) {
                                if ("loading" !== state.status) {
                                  if ("loading" !== state2.status) {
                                    if (null == state2.data) {
                                      obj2 = { status: "failed" };
                                    } else {
                                      obj2 = { status: "loaded", data: obj3, nowMs: state.nowMs };
                                      obj3 = { points: state.data, window: state2.data };
                                    }
                                  }
                                }
                                obj2 = { status: "loading" };
                              }
                              tmp = {
                                state: obj2,
                                retry() {
                                  closure_0.retry();
                                  closure_1.retry();
                                },
                                refresh() {
                                  closure_0.refresh();
                                  closure_1.refresh();
                                },
                              };
                              const obj4 = {
                                state: obj2,
                                retry() {
                                  closure_0.retry();
                                  closure_1.retry();
                                },
                                refresh() {
                                  closure_0.refresh();
                                  closure_1.refresh();
                                },
                              };
                            }
                            obj2 = { status: "failed" };
                          } else {
                            tmp = closure_2;
                          }
                          return obj;
                        }
                      }
                    }
                    cResult[27] = state.data;
                    cResult[28] = state.status;
                    cResult[29] = map;
                    tmp24 = map;
                  }
                }
              }
              if (cResult[23] === tmp12Result) {
                if (cResult[24] === tmp12Result3) {
                  let tmp22;
                  if (cResult[25] === tmp12Result4) {
                    tmp22 = cResult[26];
                  }
                  const mapped = arr.map(tmp22);
                  class T {
                    constructor(environment) {
                      let obj3;
                      let tmp;
                      const obj = { environment, backups: tmp };
                      if ("preview" === environment) {
                        closure_0 = state;
                        closure_1 = state2;
                        state = state.state;
                        state2 = state2.state;
                        if ("failed" !== state.status) {
                          let obj2;
                          if ("failed" !== state2.status) {
                            if ("loading" !== state.status) {
                              if ("loading" !== state2.status) {
                                if (null == state2.data) {
                                  obj2 = { status: "failed" };
                                } else {
                                  obj2 = { status: "loaded", data: obj3, nowMs: state.nowMs };
                                  obj3 = { points: state.data, window: state2.data };
                                }
                              }
                            }
                            obj2 = { status: "loading" };
                          }
                          tmp = {
                            state: obj2,
                            retry() {
                              closure_0.retry();
                              closure_1.retry();
                            },
                            refresh() {
                              closure_0.refresh();
                              closure_1.refresh();
                            },
                          };
                          const obj4 = {
                            state: obj2,
                            retry() {
                              closure_0.retry();
                              closure_1.retry();
                            },
                            refresh() {
                              closure_0.refresh();
                              closure_1.refresh();
                            },
                          };
                        }
                        obj2 = { status: "failed" };
                      } else {
                        tmp = closure_2;
                      }
                      return obj;
                    }
                  }
                  class M {
                    constructor() {
                      let resolved;
                      if (closure_1) {
                        resolved = hasOwnProperty(closure_0, "preview");
                      } else {
                        resolved = Promise.resolve(null);
                      }
                      return resolved;
                    }
                  }
                  cResult[19] = tmp12Result;
                  cResult[20] = tmp12Result3;
                  cResult[21] = tmp12Result4;
                  cResult[22] = mapped;
                  tmp21 = mapped;
                }
              }
              class T {
                constructor(environment) {
                  let obj3;
                  let tmp;
                  const obj = { environment, backups: tmp };
                  if ("preview" === environment) {
                    closure_0 = state;
                    closure_1 = state2;
                    state = state.state;
                    state2 = state2.state;
                    if ("failed" !== state.status) {
                      let obj2;
                      if ("failed" !== state2.status) {
                        if ("loading" !== state.status) {
                          if ("loading" !== state2.status) {
                            if (null == state2.data) {
                              obj2 = { status: "failed" };
                            } else {
                              obj2 = { status: "loaded", data: obj3, nowMs: state.nowMs };
                              obj3 = { points: state.data, window: state2.data };
                            }
                          }
                        }
                        obj2 = { status: "loading" };
                      }
                      tmp = {
                        state: obj2,
                        retry() {
                          closure_0.retry();
                          closure_1.retry();
                        },
                        refresh() {
                          closure_0.refresh();
                          closure_1.refresh();
                        },
                      };
                      const obj4 = {
                        state: obj2,
                        retry() {
                          closure_0.retry();
                          closure_1.retry();
                        },
                        refresh() {
                          closure_0.refresh();
                          closure_1.refresh();
                        },
                      };
                    }
                    obj2 = { status: "failed" };
                  } else {
                    tmp = closure_2;
                  }
                  return obj;
                }
              }
              class M {
                constructor() {
                  let resolved;
                  if (closure_1) {
                    resolved = hasOwnProperty(closure_0, "preview");
                  } else {
                    resolved = Promise.resolve(null);
                  }
                  return resolved;
                }
              }
              cResult[23] = tmp12Result;
              cResult[24] = tmp12Result3;
              cResult[25] = tmp12Result4;
              cResult[26] = T;
              tmp22 = T;
            }
          }
          const fn4 = function _() {
            closure_1_5();
            refresh2();
            refresh3();
          };
          cResult[14] = refresh;
          cResult[15] = refresh2;
          cResult[16] = refresh3;
          cResult[17] = fn4;
          tmp20 = fn4;
        }
        class M {
          constructor() {
            let resolved;
            if (closure_1) {
              resolved = hasOwnProperty(closure_0, "preview");
            } else {
              resolved = Promise.resolve(null);
            }
            return resolved;
          }
        }
        cResult[11] = tmp9;
        cResult[12] = arg0;
        cResult[13] = M;
        tmp18 = M;
      }
      const fn3 = function y() {
        let resolved;
        if (closure_1) {
          resolved = React3(closure_0, "preview");
        } else {
          resolved = Promise.resolve(closure_8);
        }
        return resolved;
      };
      cResult[8] = tmp9;
      cResult[9] = arg0;
      cResult[10] = fn3;
      tmp16 = fn3;
    }
  : (arg0, arg1) => {
      let closure_3;
      let refresh2;
      let closure_0 = arg0;
      let closure_1 = arg1;
      let items = [arg1];
      const memo = react.useMemo(() => {
        const obj = ConjureRestorePanelOp;
        return obj.restorePanelEnvironments(closure_1);
      }, items);
      const hasItem = memo.includes("preview");
      const items1 = [arg0];
      const tmp2 = refresh2(react.useCallback(() => metroRequire(closure_0), items1));
      const items2 = [arg0];
      const tmp3 = refresh2(
        react.useCallback(() => {
          const items = [React3(closure_0, "stable"), hasOwnProperty(closure_0, "stable")];
          const allResult = all(items);
          return allResult.then((result) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = result;
            return { points, window: _window };
          });
        }, items2),
      );
      react = tmp3;
      const items3 = [arg0, hasItem];
      const tmp4 = refresh2(
        react.useCallback(() => {
          let resolved;
          if (hasItem) {
            resolved = React3(closure_0, "preview");
          } else {
            resolved = Promise.resolve(closure_8);
          }
          return resolved;
        }, items3),
      );
      const items4 = [arg0, hasItem];
      const tmp5 = refresh2(
        react.useCallback(() => {
          let resolved;
          if (hasItem) {
            resolved = hasOwnProperty(closure_0, "preview");
          } else {
            resolved = Promise.resolve(null);
          }
          return resolved;
        }, items4),
      );
      const refresh = tmp3.refresh;
      refresh2 = tmp4.refresh;
      const refresh3 = tmp5.refresh;
      const items5 = [refresh, refresh2, refresh3];
      const callback = react.useCallback(() => {
        refresh();
        refresh2();
        refresh3();
      }, items5);
      let state = tmp2.state;
      const items6 = [state];
      const mapped = memo.map((environment) => {
        let obj3;
        let tmp;
        const obj = { environment, backups: tmp };
        if ("preview" === environment) {
          closure_0 = state;
          closure_1 = state2;
          state = state.state;
          state2 = state2.state;
          if ("failed" !== state.status) {
            let obj2;
            if ("failed" !== state2.status) {
              if ("loading" !== state.status) {
                if ("loading" !== state2.status) {
                  if (null == state2.data) {
                    obj2 = { status: "failed" };
                  } else {
                    obj2 = { status: "loaded", data: obj3, nowMs: state.nowMs };
                    obj3 = { points: state.data, window: state2.data };
                  }
                }
              }
              obj2 = { status: "loading" };
            }
            tmp = {
              state: obj2,
              retry() {
                closure_0.retry();
                closure_1.retry();
              },
              refresh() {
                closure_0.refresh();
                closure_1.refresh();
              },
            };
            const obj4 = {
              state: obj2,
              retry() {
                closure_0.retry();
                closure_1.retry();
              },
              refresh() {
                closure_0.refresh();
                closure_1.refresh();
              },
            };
          }
          obj2 = { status: "failed" };
        } else {
          tmp = closure_3;
        }
        return obj;
      });
      let state2 = tmp4.state;
      let obj = {
        sharedDatabase: !hasItem,
        versions: tmp2,
        databases: mapped,
        previewBackups: "loaded" === state2.status ? state2.data : refresh3,
        previewBackupsLoading: "loading" === state2.status,
        refreshAllBackups: callback,
        versionTitles: react.useMemo(() => {
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
        }, items6),
      };
      return obj;
    };
let result = size.fileFinishedImporting("modules/conjure/history/useConjureHistoryData.tsx");

export default tmp3;
