// === Module 4756: combine ===

// Module 4756 (combine)
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

let closure_9, mergeResult, set;

function createJSONStorage(fn, arg1) {
  let replacer = arg1;
  try {
    let closure_1 = fn();
    return {
      getItem(arg0) {
          let nextPromise;
          const value = closure_1.getItem(arg0);
          let tmp2 = null;
          if (null != value) {
            tmp2 = value;
          }
          if (tmp2 instanceof Promise) {
            nextPromise = tmp2.then(function parse(result) {
              let parsed = null;
              if (null !== result) {
                reviver = undefined;
                const _JSON = JSON;
                if (null != reviver) {
                  reviver = reviver.reviver;
                }
                parsed = parse(result, reviver);
              }
              return parsed;
            });
          } else {
            nextPromise = null;
            if (null !== tmp2) {
              let reviver;
              let _JSON = JSON;
              if (null != reviver) {
                reviver = reviver.reviver;
              }
              nextPromise = parse(tmp2, reviver);
            }
          }
          return nextPromise;
        },
      setItem(arg0, arg1) {
          replacer = undefined;
          const setItem = closure_1.setItem;
          const _JSON = JSON;
          if (null != replacer) {
            replacer = replacer.replacer;
          }
          return setItem(arg0, stringify(arg1, replacer));
        },
      removeItem(arg0) {
          return closure_1.removeItem(arg0);
        }
    };
  } catch (err) {
  }
}
let closure_2 = ["enabled", "anonymousActionType", "store"];
let closure_3 = ["connection"];
const map = new Map();
function getTrackedConnectionState(arg0) {

}
function findCallerName(arg0) {

}
function parseJsonThen(arg0, fn) {
  let parsed;
  try {
    const _JSON = JSON;
    parsed = JSON.parse(arg0);
  } catch (tmp4) {
    const _console = console;
    console.error("[zustand devtools middleware] Could not parse the received json", tmp4);
  }
  if (undefined !== parsed) {
    fn(parsed);
  }
}
function toThenable(arg0) {

}

export function combine(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return () => Object.assign({}, closure_0, closure_1(...HermesBuiltin.copyRestArgs()));
}
export { createJSONStorage };
export function devtools(arg0) {
  let devtools;
  let closure_0 = arg0;
  if (devtools === undefined) {
    devtools = {};
  }
  return (arg0, arg1, setState) => {
    let closure_129_3;
    let enabled;
    let store;
    const f89404 = (item) => {
      let obj;
      let tmp;
      [tmp, obj] = item;
      const items = [tmp, obj.getState()];
      return items;
    };
    closure_0 = arg0;
    let closure_1 = arg1;
    closure_2 = setState;
    let tmp;
    ({ enabled, anonymousActionType: closure_129_3, store } = devtools);
    const tmp3 = _objectWithoutProperties(devtools, closure_2);
    let closure_5 = tmp3;
    try {
      let tmp4 = null;
      let __REDUX_DEVTOOLS_EXTENSION__ = null != enabled && enabled;
      if (__REDUX_DEVTOOLS_EXTENSION__) {
        const _window = window;
        __REDUX_DEVTOOLS_EXTENSION__ = window.__REDUX_DEVTOOLS_EXTENSION__;
      }
      tmp = __REDUX_DEVTOOLS_EXTENSION__;
    } catch (err) {
    }
    const tmp6 = tmp;
    if (tmp6) {
      let tmp9 = ((store, connect, name) => {
        if (undefined === store) {
          const obj2 = { type: "untracked", connection: connect.connect(name) };
          return obj2;
        } else {
          const value = closure_1_4.get(name.name);
          if (value) {
            const obj3 = { type: "tracked", store };
            const merged = Object.assign(value);
            return obj3;
          } else {
            const obj = { connection: connect.connect(name), stores: {} };
            const result = closure_1_4.set(name.name, obj);
            const obj4 = { type: "tracked", store };
            const merged1 = Object.assign(obj);
            return obj4;
          }
        }
      })(store, tmp, tmp3);
      const connection = tmp9.connection;
      const tmp2Result = _objectWithoutProperties(tmp9, closure_3);
      let closure_7 = tmp2Result;
      let closure_8 = true;
      setState.setState = function(arg0, arg1, type) {
        const tmp = closure_0(arg0, arg1);
        if (closure_8) {
          let tmp4;
          if (undefined === type) {
            let str = closure_1_3;
            if (!str) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error();
              if (typeof closure_2_6 === "function") {
                let tmp9;
                if (error.stack) {
                  const parts = str2.split("\n");
                  const findIndexResult = parts.findIndex((arr) => arr.includes("api.setState"));
                  if (findIndexResult >= 0) {
                    let str5;
                    if (null != parts[findIndexResult + 1]) {
                      str5 = str4.trim();
                    }
                    if (!str5) {
                      str5 = "";
                    }
                    const obj2 = /.+ (.+) .+/;
                    const match = obj2.exec(str5);
                    let tmp13;
                    if (null != match) {
                      tmp13 = match[1];
                    }
                    tmp9 = tmp13;
                  }
                }
                str = tmp9;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (!str) {
              str = "anonymous";
            }
            tmp4 = { type: str };
            const obj = { type: str };
          } else {
            tmp4 = type;
            if (typeof type === "string") {
              tmp4 = { type };
              const obj3 = { type };
            }
          }
          if (undefined === store) {
            if (null != connection) {
              connection.send(tmp4, closure_1());
            }
          } else if (null != connection) {
            const send = connection.send;
            const obj4 = { type: "" + store + "/" + tmp4.type };
            const merged = Object.assign(tmp4);
            const _HermesInternal = HermesInternal;
            if (typeof closure_2_5 === "function") {
              let fromEntriesResult;
              const value = closure_2_4.get(tmp33);
              if (value) {
                const _Object = Object;
                const _Object2 = Object;
                const entries = Object.entries(value.stores);
                fromEntriesResult = fromEntries(entries.map(f89404));
              } else {
                fromEntriesResult = {};
              }
              const obj5 = {};
              const merged1 = Object.assign(fromEntriesResult);
              obj5[store] = closure_2.getState();
              send(obj4, obj5);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          return tmp;
        } else {
          return tmp;
        }
      };
      devtools = {
        cleanup() {
            const tmp = connection && typeof connection.unsubscribe === "function";
            if (tmp) {
              connection.unsubscribe();
            }
            name = name.name;
            if (undefined !== store) {
              const value = closure_2_4.get(name);
              if (value) {
                delete tmp4.stores[tmp3];
                const _Object = Object;
                if (0 === Object.keys(value.stores).length) {
                  closure_2_4.delete(name);
                }
              }
            }
          }
      };
      setState.devtools = devtools;
      function setStateFromDevtools() {
        closure_8 = false;
        closure_0(...HermesBuiltin.copyRestArgs());
      }
      const tmp12 = closure_0;
      let tmp13 = closure_0(setState.setState, arg1, setState);
      let closure_10 = tmp13;
      let str = "untracked";
      if ("untracked" === tmp2Result.type) {
        if (null != connection) {
          let initResult = connection.init(tmp13);
        }
      } else {
        tmp2Result.stores[tmp2Result.store] = setState;
        if (null != connection) {
          const tmp15 = globalThis;
          let _Object = Object;
          let _Object2 = Object;
          const init = connection.init;
          let entries = Object.entries(tmp2Result.stores);
          init(fromEntries(entries.map((item) => {
            let obj;
            let state;
            let tmp;
            [tmp, obj] = item;
            const items = [tmp, ];
            if (tmp === closure_7.store) {
              state = closure_10;
            } else {
              state = obj.getState();
            }
            items[1] = state;
            return items;
          })));
        }
      }
      if (setState.dispatchFromDevtools) {
        if (typeof setState.dispatch === "function") {
          const dispatch = setState.dispatch;
          setState.dispatch = () => {
            dispatch(...HermesBuiltin.copyRestArgs());
          };
        }
      }
      const subscription = connection.subscribe((type) => {
        type = type.type;
        if ("ACTION" === type) {
          if (typeof type.payload !== "string") {
            let _console = console;
            console.error("[zustand devtools middleware] Unsupported action format");
          } else {
            closure_2_7(type.payload, (type) => {
              if ("__setState" !== type.type) {
                const tmp10 = closure_1_2.dispatchFromDevtools && typeof closure_1_2.dispatch === "function";
                if (tmp10) {
                  closure_1_2.dispatch(type);
                }
              } else if (undefined === store) {
                setStateFromDevtools(type.state);
              } else {
                const _Object = Object;
                if (1 !== Object.keys(type.state).length) {
                  const _console = console;
                  console.error("\n                    [zustand devtools middleware] Unsupported __setState action format.\n                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),\n                    and value of this only key should be a state object. Example: { \"type\": \"__setState\", \"state\": { \"abc123Store\": { \"foo\": \"bar\" } } }\n                    ");
                }
                if (null != type.state[tmp12]) {
                  const _JSON = JSON;
                  const _JSON2 = JSON;
                  const json = JSON.stringify(closure_1_2.getState());
                  if (json !== JSON.stringify(type.state[tmp12])) {
                    setStateFromDevtools(type.state[tmp12]);
                  }
                }
              }
            });
          }
          return tmp43;
        } else if ("DISPATCH" === type) {
          const type2 = type.payload.type;
          if ("RESET" === type2) {
            let tmp30Result;
            setStateFromDevtools(closure_10);
            if (undefined === store) {
              let initResult;
              if (null != connection) {
                initResult = connection.init(closure_2.getState());
              }
              tmp30Result = initResult;
            } else if (null != connection) {
              if (typeof closure_2_5 === "function") {
                let fromEntries2Result;
                let value = closure_2_4.get(tmp33);
                if (value) {
                  const _Object3 = Object;
                  const _Object4 = Object;
                  const fromEntries2 = Object.fromEntries;
                  let entries = Object.entries(value.stores);
                  fromEntries2Result = fromEntries2(entries.map(f89404));
                } else {
                  fromEntries2Result = {};
                }
                tmp30Result = tmp30(fromEntries2Result);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            return tmp30Result;
          } else if ("COMMIT" === type2) {
            let tmp15Result;
            if (undefined === store) {
              if (null != connection) {
                connection.init(closure_2.getState());
              }
            } else if (null != connection) {
              if (typeof closure_2_5 === "function") {
                let fromEntriesResult;
                const value2 = closure_2_4.get(tmp18);
                if (value2) {
                  let _Object = Object;
                  let _Object2 = Object;
                  const entries1 = Object.entries(value2.stores);
                  fromEntriesResult = fromEntries(entries1.map(f89404));
                } else {
                  fromEntriesResult = {};
                }
                tmp15Result = tmp15(fromEntriesResult);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            return tmp15Result;
          } else if ("ROLLBACK" === type2) {
            closure_2_7(type.state, (state) => {
              if (undefined === closure_1_4) {
                setStateFromDevtools(state);
                if (null != connection) {
                  connection.init(closure_1_2.getState());
                }
              } else {
                setStateFromDevtools(state[tmp]);
                if (null != connection) {
                  if (typeof name === "function") {
                    let fromEntriesResult;
                    const value = store.get(tmp18);
                    if (value) {
                      const _Object = Object;
                      const _Object2 = Object;
                      const entries = Object.entries(value.stores);
                      fromEntriesResult = fromEntries(entries.map(f89404));
                    } else {
                      fromEntriesResult = {};
                    }
                    tmp15(fromEntriesResult);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              }
            });
          } else {
            if ("JUMP_TO_STATE" !== type2) {
              if ("JUMP_TO_ACTION" !== type2) {
                if ("IMPORT_STATE" === type2) {
                  const nextLiftedState = type.payload.nextLiftedState;
                  const computedStates = nextLiftedState.computedStates;
                  const first = computedStates.slice(-1)[0];
                  let state;
                  if (null != first) {
                    state = first.state;
                  }
                  if (state) {
                    let tmp7 = state;
                    if (undefined !== store) {
                      tmp7 = state[store];
                    }
                    setStateFromDevtools(tmp7);
                    if (null != connection) {
                      connection.send(null, nextLiftedState);
                    }
                  }
                } else if ("PAUSE_RECORDING" === type2) {
                  const tmp = closure_8;
                  closure_8 = tmp2;
                  return !closure_8;
                }
              }
            }
            closure_2_7(type.state, (state) => {
              if (undefined !== store) {
                const _JSON = JSON;
                const _JSON2 = JSON;
                const json = JSON.stringify(closure_1_2.getState());
                if (json !== JSON.stringify(state[store])) {
                  setStateFromDevtools(state[store]);
                }
              } else {
                setStateFromDevtools(state);
              }
            });
          }
        }
      });
      return tmp13;
    } else {
      let tmp7 = closure_0;
      return closure_0(arg0, arg1, setState);
    }
  };
}
export function persist(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1, setState) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let obj = {
      storage: createJSONStorage(() => globalThis.localStorage),
      partialize(arg0) {
        return arg0;
      },
      version: 0,
      merge(arg0, arg1) {
        const obj = {};
        const merged = Object.assign(arg1);
        const merged1 = Object.assign(arg0);
        return obj;
      }
    };
    let merged = Object.assign(closure_1);
    let c3 = false;
    set = new Set();
    const set1 = new Set();
    let storage = obj.storage;
    if (storage) {
      function setItem() {

      }
      setState = setState.setState;
      setState.setState = (arg0, arg1) => {
        setState(arg0, arg1);
        if (typeof setItem === "function") {
          obj = {};
          const partialize = obj.partialize;
          const merged = Object.assign(closure_1());
          const obj2 = { state: partialize(obj), version: obj.version };
          return storage.setItem(obj.name, obj2);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      let tmp6 = closure_0(() => {
        closure_0(...HermesBuiltin.copyRestArgs());
        if (typeof setItem === "function") {
          obj = {};
          const partialize = obj.partialize;
          const merged = Object.assign(closure_1());
          const obj2 = { state: partialize(obj), version: obj.version };
          return storage.setItem(obj.name, obj2);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }, arg1, setState);
      let closure_10 = tmp6;
      setState.getInitialState = () => closure_10;
      function hydrate() {
        const f89408 = (name) => {
          try {
            const tmp3 = closure_0(name);
            closure_0 = tmp3;
            if (tmp3 instanceof Promise) {
              obj = tmp3;
            } else {
              obj = {
                then,
                catch: function(arg0) {
                      return this;
                    }
              };
            }
            return obj;
          } catch (tmp6) {
            closure_1 = tmp6;
            return {
              then(arg0) {
                  return this;
                },
              catch: f136640
            };
          }
        };
        if (storage) {
          c3 = false;
          let item = set.forEach((fn) => {
            let tmp = closure_1_1();
            if (null == tmp) {
              tmp = closure_1_10;
            }
            return fn(tmp);
          });
          const onRehydrateStorage = obj.onRehydrateStorage;
          let callResult;
          if (null != onRehydrateStorage) {
            const call = onRehydrateStorage.call;
            let tmp9 = closure_1();
            if (null == tmp9) {
              tmp9 = closure_10;
            }
            callResult = call(obj, tmp9);
          }
          const getItem = storage.getItem;
          if (typeof closure_9 === "function") {
            callResult = getItem.bind(storage);
            const promise = f89408(obj.name);
            let nextPromise = promise.then((version) => {
              const tmp = version;
              if (tmp) {
                if (typeof version.version === "number") {
                  if (version.version !== obj.version) {
                    if (obj.migrate) {
                      let nextPromise;
                      const migrateResult = obj.migrate(version.state, version.version);
                      if (migrateResult instanceof Promise) {
                        nextPromise = migrateResult.then((result) => {
                          const items = [true, result];
                          return items;
                        });
                      } else {
                        nextPromise = [true, migrateResult];
                      }
                      return nextPromise;
                    } else {
                      const _console = console;
                      console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
                    }
                  }
                }
                let items = [false, version.state];
                return items;
              }
              const items1 = [false, undefined];
              return items1;
            });
            const nextPromise1 = nextPromise.then((result) => {
              let tmp2;
              let tmp3;
              [tmp2, tmp3] = callResult(result, 2);
              const merge = closure_1_2.merge;
              callResult(result, 2);
              let tmp6 = closure_1_1();
              if (null == tmp6) {
                tmp6 = closure_1_10;
              }
              mergeResult = merge(tmp3, tmp6);
              callResult(mergeResult, true);
              if (tmp2) {
                if (typeof setItem === "function") {
                  const partialize = closure_1_2.partialize;
                  obj = {};
                  const merged = Object.assign(closure_1_1());
                  const obj2 = { state: partialize(obj), version: closure_1_2.version };
                  return item.setItem(closure_1_2.name, obj2);
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
            });
            const nextPromise2 = nextPromise1.then(() => {
              if (null != callResult) {
                tmp(closure_9, undefined);
              }
              closure_9 = closure_1();
              c3 = true;
              item = set1.forEach((fn) => fn(closure_1_9));
            });
            return nextPromise2.catch((error) => {
              if (null != callResult) {
                tmp(undefined, error);
              }
            });
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      let obj2 = {
        setOptions(storage) {
            obj = {};
            const merged = Object.assign(obj);
            const merged1 = Object.assign(storage);
            if (storage.storage) {
              storage = storage.storage;
            }
          },
        clearStorage() {
            if (null != storage) {
              storage.removeItem(obj.name);
            }
          },
        getOptions() {
            return obj;
          },
        rehydrate() {
            return hydrate();
          },
        hasHydrated() {
            return c3;
          },
        onHydrate(arg0) {
            closure_0 = arg0;
            set.add(arg0);
            return () => {
              set.delete(closure_0);
            };
          },
        onFinishHydration(arg0) {
            closure_0 = arg0;
            set1.add(arg0);
            return () => {
              set1.delete(closure_0);
            };
          }
      };
      setState.persist = obj2;
      if (!obj.skipHydration) {
        hydrate();
      }
      let tmp9 = closure_9 || tmp6;
      return tmp9;
    } else {
      return closure_0(() => {
        const items = [...arguments];
        console.warn("[zustand persist middleware] Unable to update item '" + obj.name + "', the given storage is currently unavailable.");
        closure_0(...items);
      }, arg1, setState);
    }
  };
}
export function redux(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg2;
    arg2.dispatch = (arg0) => {
      closure_0 = arg0;
      closure_0((arg0) => closure_2_0(arg0, closure_0), false, arg0);
      return arg0;
    };
    arg2.dispatchFromDevtools = true;
    const obj = {
      dispatch() {
        const items = [...HermesBuiltin.copyRestArgs()];
        return closure_1.dispatch.apply(items);
      }
    };
    const merged = Object.assign(closure_1);
    return obj;
  };
}
export function subscribeWithSelector(arg0) {
  let closure_0 = arg0;
  return (arg0, arg1, subscribe) => {
    closure_0 = subscribe;
    subscribe = subscribe.subscribe;
    subscribe.subscribe = (fn, fn2, equalityFn) => {
      state = fn;
      let closure_1 = fn2;
      let tmp = fn;
      if (fn2) {
        equalityFn = undefined;
        if (null != equalityFn) {
          equalityFn = equalityFn.equalityFn;
        }
        if (!equalityFn) {
          const _Object = Object;
          equalityFn = Object.is;
        }
        closure_3 = fn(state.getState());
        let fireImmediately;
        if (null != equalityFn) {
          fireImmediately = equalityFn.fireImmediately;
        }
        fn = function o(state) {
          const tmp = closure_0(state);
          if (!equalityFn(closure_3, tmp)) {
            closure_3 = tmp;
            closure_1(tmp, closure_3);
          }
        };
        tmp = fn;
        if (fireImmediately) {
          fn2(closure_3, closure_3);
          tmp = fn;
        }
      }
      return subscribe(tmp);
    };
    return closure_0(arg0, arg1, subscribe);
  };
}