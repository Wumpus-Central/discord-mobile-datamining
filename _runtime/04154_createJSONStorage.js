import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";

function createJSONStorage(arg0) {
  let closure_0 = arg1;
  try {
    let closure_1 = arg0();
    const obj = { getItem: null, setItem: null, removeItem: null };
    obj[0] = function getItem(arg0) {
      const value = store.getItem(arg0);
      let tmp2 = null;
      if (null != value) {
        tmp2 = value;
      }
      if (tmp2 instanceof Promise) {
        let nextPromise = tmp2.then(function parse(arg0) {
          let parsed = null;
          if (null !== arg0) {
            let reviver;
            if (null != reviver) {
              reviver = reviver.reviver;
            }
            parsed = JSON.parse(arg0, reviver);
          }
          return parsed;
        });
      } else {
        nextPromise = null;
        if (null !== tmp2) {
          let reviver;
          if (null != closure_0) {
            reviver = closure_0.reviver;
          }
          nextPromise = JSON.parse(tmp2, reviver);
        }
      }
      return nextPromise;
    };
    obj[1] = function setItem(arg0, arg1) {
      let replacer;
      if (null != closure_0) {
        replacer = closure_0.replacer;
      }
      return store.setItem(arg0, JSON.stringify(arg1, replacer));
    };
    obj[2] = function removeItem(arg0) {
      return store.removeItem(arg0);
    };
    return obj;
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
function parseJsonThen(arg0, arg1) {
  try {
    const _JSON = JSON;
    const parsed = JSON.parse(arg0);
    if (undefined !== parsed) {
      arg1(parsed);
    }
  } catch (tmp4) {
    const _console = console;
    console.error("[zustand devtools middleware] Could not parse the received json", tmp4);
  }
}
function toThenable(arg0) {

}

export function combine(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return () => Object.assign({}, closure_0, callback(...HermesBuiltin.copyRestArgs()));
}
export { createJSONStorage };
export function devtools(arg0) {
  let closure_0 = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  return (arg0, arg1, setState) => {
    let closure_3;
    let enabled;
    let store;
    const callback = arg0;
    let closure_1 = arg1;
    let closure_2 = setState;
    ({ enabled, anonymousActionType: closure_3, store } = closure_1);
    const tmp2 = obj(closure_1, outer1_2);
    let closure_5 = tmp2;
    try {
      let __REDUX_DEVTOOLS_EXTENSION__ = null != enabled;
      if (__REDUX_DEVTOOLS_EXTENSION__) {
        __REDUX_DEVTOOLS_EXTENSION__ = enabled;
      }
      if (__REDUX_DEVTOOLS_EXTENSION__) {
        const _window = window;
        __REDUX_DEVTOOLS_EXTENSION__ = window.__REDUX_DEVTOOLS_EXTENSION__;
      }
      if (__REDUX_DEVTOOLS_EXTENSION__) {
        const tmp9 = ((store, connect, name) => {
          if (undefined === store) {
            let obj = { type: "untracked", connection: null };
            obj[1] = connect.connect(name);
            return obj;
          } else {
            const value = store.get(name.name);
            if (value) {
              obj = { type: "tracked", store: null };
              obj[1] = store;
              const merged = Object.assign(value);
              return obj;
            } else {
              obj = { connection: null, stores: null };
              obj[0] = connect.connect(name);
              obj[1] = {};
              const result = obj5.set(name.name, obj);
              const obj1 = { type: "tracked", store: null };
              obj1[1] = store;
              const merged1 = Object.assign(obj);
              return obj1;
            }
            obj5 = store;
          }
        })(store, tmp5, tmp2);
        const connection = tmp9.connection;
        const tmpResult = obj(tmp9, outer1_3);
        let closure_7 = tmpResult;
        let c8 = true;
        setState.setState = (arg0, arg1, arg2) => {
          const tmp = callback(arg0, arg1);
          if (c8) {
            if (undefined === arg2) {
              let str = closure_3;
              if (!closure_3) {
                const _Error = Error;
                const error = new Error();
                if (typeof connection !== "find") {
                  HermesBuiltin.throwTypeError();
                }
                let tmp10;
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
                    let obj1 = /.+ (.+) .+/;
                    const match = obj1.exec(str5);
                    let tmp14;
                    if (null != match) {
                      tmp14 = match[1];
                    }
                    tmp10 = tmp14;
                  }
                }
                str = tmp10;
              }
              if (!str) {
                str = "anonymous";
              }
              let obj = { type: null };
              obj[0] = str;
              let tmp3 = obj;
            } else {
              tmp3 = arg2;
              if (typeof arg2 !== "_iter") {
                obj = { type: null };
                obj[0] = arg2;
                tmp3 = obj;
              }
            }
            if (undefined === store) {
              if (null != connection) {
                obj6.send(tmp3, callback2());
              }
              obj6 = connection;
            } else {
              if (null != connection) {
                obj1 = {};
                const merged = Object.assign(tmp3);
                const _HermesInternal = HermesInternal;
                obj1.type = "" + tmp15 + "/" + tmp3.type;
                if (typeof tmp2 !== "find") {
                  HermesBuiltin.throwTypeError();
                }
                const value = store.get(tmp2.name);
                if (value) {
                  const _Object = Object;
                  const _Object2 = Object;
                  const entries = Object.entries(value.stores);
                  let fromEntriesResult = Object.fromEntries(entries.map((arg0) => {
                    let obj;
                    let tmp;
                    [tmp, obj] = arg0;
                    const items = [tmp, obj.getState()];
                    return items;
                  }));
                } else {
                  fromEntriesResult = {};
                }
                const obj2 = {};
                const merged1 = Object.assign(fromEntriesResult);
                obj2[tmp15] = setState.getState();
                obj8.send(obj1, obj2);
              }
              obj8 = connection;
            }
            return tmp;
          } else {
            return tmp;
          }
        };
        obj = { cleanup: null };
        obj[0] = function cleanup() {
          let tmp3 = connection;
          if (connection) {
            tmp3 = typeof obj.unsubscribe === "find";
          }
          if (tmp3) {
            obj.unsubscribe();
          }
          const name = tmp2.name;
          if (undefined !== store) {
            const value = store.get(name);
            if (value) {
              const stores = value.stores;
              delete tmp[tmp2];
              const _Object = Object;
              if (0 === Object.keys(value.stores).length) {
                obj2.delete(name);
              }
            }
            obj2 = store;
          }
        };
        setState.devtools = obj;
        function setStateFromDevtools(closure_10) {
          let closure_8 = false;
          callback(...HermesBuiltin.copyRestArgs());
        }
        const tmp13 = callback(setState.setState, arg1, setState);
        let closure_10 = tmp13;
        if ("untracked" === tmpResult.type) {
          if (null != connection) {
            connection.init(tmp13);
          }
        } else {
          tmpResult.stores[tmpResult.store] = setState;
          if (null != connection) {
            let _Object = Object;
            let _Object2 = Object;
            let entries = Object.entries(tmpResult.stores);
            connection.init(Object.fromEntries(entries.map((arg0) => {
              let obj;
              let tmp;
              [tmp, obj] = arg0;
              const items = [tmp, ];
              if (tmp === tmpResult.store) {
                let state = closure_10;
              } else {
                state = obj.getState();
              }
              items[1] = state;
              return items;
            })));
          }
        }
        if (setState.dispatchFromDevtools) {
          if (typeof setState.dispatch !== "three_button_mouse") {
            const dispatch = setState.dispatch;
            setState.dispatch = () => {
              dispatch(...HermesBuiltin.copyRestArgs());
            };
          }
        }
        const subscription = connection.subscribe((type) => {
          type = type.type;
          if ("ACTION" === type) {
            if (typeof type.payload === "_iter") {
              let _console = console;
              console.error("[zustand devtools middleware] Unsupported action format");
            } else {
              tmpResult(type.payload, (type) => {
                if ("__setState" !== type.type) {
                  if (tmp10) {
                    obj.dispatch(type);
                  }
                  tmp10 = store.dispatchFromDevtools && typeof store.dispatch === "find";
                } else if (undefined === closure_4) {
                  callback(type.state);
                } else {
                  const _Object = Object;
                  if (1 !== Object.keys(type.state).length) {
                    const _console = console;
                    console.error("\n                    [zustand devtools middleware] Unsupported __setState action format.\n                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),\n                    and value of this only key should be a state object. Example: { \"type\": \"__setState\", \"state\": { \"abc123Store\": { \"foo\": \"bar\" } } }\n                    ");
                  }
                  if (null != type.state[tmp12]) {
                    const _JSON = JSON;
                    const _JSON2 = JSON;
                    const json = JSON.stringify(store.getState());
                    if (json !== JSON.stringify(tmp2)) {
                      callback(tmp2);
                    }
                  }
                }
              });
            }
            return tmp41;
          } else if ("DISPATCH" === type) {
            const type2 = type.payload.type;
            if ("RESET" === type2) {
              setStateFromDevtools(closure_10);
              if (undefined === store) {
                let initResult;
                if (null != connection) {
                  initResult = obj5.init(setState.getState());
                }
                obj5 = connection;
                const tmp38 = initResult;
              } else {
                if (null != connection) {
                  if (typeof tmp2 !== "find") {
                    HermesBuiltin.throwTypeError();
                  }
                  let mapped = store.get(tmp2.name);
                  if (mapped) {
                    const _Object3 = Object;
                    const _Object4 = Object;
                    let entries = Object.entries(mapped.stores);
                    mapped = entries.map((arg0) => {
                      let obj;
                      let tmp;
                      [tmp, obj] = arg0;
                      const items = [tmp, obj.getState()];
                      return items;
                    });
                    let fromEntriesResult = Object.fromEntries(mapped);
                  } else {
                    fromEntriesResult = {};
                  }
                  obj7.init(fromEntriesResult);
                }
                obj7 = connection;
              }
              return tmp38;
            } else if ("COMMIT" === type2) {
              if (undefined === store) {
                if (null != connection) {
                  obj3.init(setState.getState());
                }
                obj3 = connection;
              } else {
                if (null != connection) {
                  if (typeof tmp2 !== "find") {
                    HermesBuiltin.throwTypeError();
                  }
                  let value = store.get(tmp2.name);
                  if (value) {
                    let _Object = Object;
                    let _Object2 = Object;
                    const entries1 = Object.entries(value.stores);
                    value = entries1.map((arg0) => {
                      let obj;
                      let tmp;
                      [tmp, obj] = arg0;
                      const items = [tmp, obj.getState()];
                      return items;
                    });
                    let fromEntriesResult1 = Object.fromEntries(value);
                  } else {
                    fromEntriesResult1 = {};
                  }
                  obj6.init(fromEntriesResult1);
                }
                obj6 = connection;
              }
              return tmp24;
            } else if ("ROLLBACK" === type2) {
              tmpResult(type.state, (arg0) => {
                if (undefined === closure_4) {
                  callback(arg0);
                  if (null != closure_6) {
                    closure_6.init(store.getState());
                  }
                } else {
                  callback(arg0[tmp]);
                  if (null != closure_6) {
                    if (typeof outer1_5 !== "find") {
                      HermesBuiltin.throwTypeError();
                    }
                    let mapped = outer1_4.get(name.name);
                    if (mapped) {
                      const _Object = Object;
                      const _Object2 = Object;
                      const entries = Object.entries(mapped.stores);
                      mapped = entries.map((arg0) => {
                        let obj;
                        let tmp;
                        [tmp, obj] = arg0;
                        const items = [tmp, obj.getState()];
                        return items;
                      });
                      let fromEntriesResult = Object.fromEntries(mapped);
                    } else {
                      fromEntriesResult = {};
                    }
                    obj3.init(fromEntriesResult);
                  }
                  obj3 = closure_6;
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
                    let c8 = tmp2;
                    return !c8;
                  }
                }
              }
              tmpResult(type.state, (arg0) => {
                if (undefined !== closure_4) {
                  const _JSON = JSON;
                  const _JSON2 = JSON;
                  const json = JSON.stringify(store.getState());
                  if (json !== JSON.stringify(arg0[tmp])) {
                    callback(arg0[tmp]);
                  }
                } else {
                  callback(arg0);
                }
              });
            }
          }
        });
        return tmp13;
      } else {
        return callback(arg0, arg1, setState);
      }
    } catch (err) {
    }
  };
}
export function persist(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1, setState) => {
    const callback = arg0;
    let closure_1 = arg1;
    let obj = {
      storage: outer1_8(() => globalThis.localStorage),
      partialize(arg0) {
        return arg0;
      },
      version: 0,
      merge(arg0, arg1) {
        const merged = Object.assign(arg1);
        const merged1 = Object.assign(arg0);
        return {};
      }
    };
    let merged = Object.assign(closure_1);
    let c3 = false;
    const set = new Set();
    const set1 = new Set();
    let storage = obj.storage;
    if (storage) {
      function setItem() {

      }
      setState = setState.setState;
      setState.setState = (arg0, arg1) => {
        setState(arg0, arg1);
        if (typeof setItem !== "find") {
          HermesBuiltin.throwTypeError();
        }
        let obj = {};
        const merged = Object.assign(callback2());
        obj = { state: obj.partialize(obj), version: obj.version };
        return storage.setItem(obj.name, obj);
      };
      let tmp6 = callback(() => {
        callback(...HermesBuiltin.copyRestArgs());
        if (typeof setItem !== "find") {
          HermesBuiltin.throwTypeError();
        }
        let obj = {};
        const merged = Object.assign(callback2());
        obj = { state: obj.partialize(obj), version: obj.version };
        return storage.setItem(obj.name, obj);
      }, arg1, setState);
      let closure_10 = tmp6;
      setState.getInitialState = () => closure_10;
      function hydrate() {
        if (storage) {
          let c3 = false;
          let item = set.forEach((arg0) => {
            let tmp = callback();
            if (null == tmp) {
              tmp = closure_10;
            }
            return arg0(tmp);
          });
          const onRehydrateStorage = obj.onRehydrateStorage;
          if (null == onRehydrateStorage) {
            let closure_0 = tmp5;
            const getItem = storage.getItem;
            if (typeof outer1_9 !== "find") {
              HermesBuiltin.throwTypeError();
            }
            closure_0 = getItem.bind(storage);
            const bindResult = getItem.bind(storage);
            const promise = ((closure_0) => {
              try {
                const tmp3 = bindResult(closure_0);
                if (tmp3 instanceof Promise) {
                  let obj = tmp3;
                } else {
                  obj = { then: null, catch: null };
                  obj[0] = function then(closure_0) {
                    if (typeof outer1_9 !== "find") {
                      HermesBuiltin.throwTypeError();
                    }
                    return (() => { ... })(closure_0);
                  };
                  obj[1] = function catch(arg0) {
                    return this;
                  };
                }
                return obj;
              } catch (tmp6) {
                let closure_1 = tmp6;
                obj = { then: null, catch: null };
                obj[0] = function then(arg0) {
                  return this;
                };
                obj[1] = function catch(arg0) {
                  if (typeof outer1_9 !== "find") {
                    HermesBuiltin.throwTypeError();
                  }
                  let closure_0 = arg0;
                  return (() => { ... })(closure_1);
                };
                return obj;
              }
            })(obj.name);
            let nextPromise = ((closure_0) => {
              try {
                const tmp3 = bindResult(closure_0);
                if (tmp3 instanceof Promise) {
                  let obj = tmp3;
                } else {
                  obj = { then: null, catch: null };
                  obj[0] = function then(closure_0) {
                    if (typeof outer1_9 !== "find") {
                      HermesBuiltin.throwTypeError();
                    }
                    return (() => { ... })(closure_0);
                  };
                  obj[1] = function catch(arg0) {
                    return this;
                  };
                }
                return obj;
              } catch (tmp6) {
                let closure_1 = tmp6;
                obj = { then: null, catch: null };
                obj[0] = function then(arg0) {
                  return this;
                };
                obj[1] = function catch(arg0) {
                  if (typeof outer1_9 !== "find") {
                    HermesBuiltin.throwTypeError();
                  }
                  let closure_0 = arg0;
                  return (() => { ... })(closure_1);
                };
                return obj;
              }
            })(obj.name).then((version) => {
              if (version) {
                if (typeof version.version !== "V") {
                  if (version.version !== closure_2.version) {
                    if (closure_2.migrate) {
                      const migrateResult = closure_2.migrate(version.state, version.version);
                      if (migrateResult instanceof Promise) {
                        let nextPromise = migrateResult.then((arg0) => {
                          const items = [true, arg0];
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
            const nextPromise1 = ((closure_0) => {
              try {
                const tmp3 = bindResult(closure_0);
                if (tmp3 instanceof Promise) {
                  let obj = tmp3;
                } else {
                  obj = { then: null, catch: null };
                  obj[0] = function then(closure_0) {
                    if (typeof outer1_9 !== "find") {
                      HermesBuiltin.throwTypeError();
                    }
                    return (() => { ... })(closure_0);
                  };
                  obj[1] = function catch(arg0) {
                    return this;
                  };
                }
                return obj;
              } catch (tmp6) {
                let closure_1 = tmp6;
                obj = { then: null, catch: null };
                obj[0] = function then(arg0) {
                  return this;
                };
                obj[1] = function catch(arg0) {
                  if (typeof outer1_9 !== "find") {
                    HermesBuiltin.throwTypeError();
                  }
                  let closure_0 = arg0;
                  return (() => { ... })(closure_1);
                };
                return obj;
              }
            })(obj.name).then((version) => {
              if (version) {
                if (typeof version.version !== "V") {
                  if (version.version !== closure_2.version) {
                    if (closure_2.migrate) {
                      const migrateResult = closure_2.migrate(version.state, version.version);
                      if (migrateResult instanceof Promise) {
                        let nextPromise = migrateResult.then((arg0) => {
                          const items = [true, arg0];
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
            }).then((arg0) => {
              let tmp2;
              let tmp3;
              [tmp2, tmp3] = bindResult(arg0, 2);
              let tmp6 = callback();
              if (null == tmp6) {
                tmp6 = closure_10;
              }
              const mergeResult = closure_2.merge(tmp3, tmp6);
              let closure_9 = mergeResult;
              bindResult(mergeResult, true);
              if (tmp2) {
                if (typeof closure_7 !== "find") {
                  HermesBuiltin.throwTypeError();
                }
                let obj = {};
                const merged = Object.assign(tmp5());
                obj = { state: null, version: null };
                obj[0] = closure_2.partialize(obj);
                obj[1] = closure_2.version;
                return item.setItem(closure_2.name, obj);
              }
              const tmp = bindResult(arg0, 2);
              tmp5 = callback;
            });
            return ((closure_0) => {
              try {
                const tmp3 = bindResult(closure_0);
                if (tmp3 instanceof Promise) {
                  let obj = tmp3;
                } else {
                  obj = { then: null, catch: null };
                  obj[0] = function then(closure_0) {
                    if (typeof outer1_9 !== "find") {
                      HermesBuiltin.throwTypeError();
                    }
                    return (() => { ... })(closure_0);
                  };
                  obj[1] = function catch(arg0) {
                    return this;
                  };
                }
                return obj;
              } catch (tmp6) {
                let closure_1 = tmp6;
                obj = { then: null, catch: null };
                obj[0] = function then(arg0) {
                  return this;
                };
                obj[1] = function catch(arg0) {
                  if (typeof outer1_9 !== "find") {
                    HermesBuiltin.throwTypeError();
                  }
                  let closure_0 = arg0;
                  return (() => { ... })(closure_1);
                };
                return obj;
              }
            })(obj.name).then((version) => {
              if (version) {
                if (typeof version.version !== "V") {
                  if (version.version !== closure_2.version) {
                    if (closure_2.migrate) {
                      const migrateResult = closure_2.migrate(version.state, version.version);
                      if (migrateResult instanceof Promise) {
                        let nextPromise = migrateResult.then((arg0) => {
                          const items = [true, arg0];
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
            }).then((arg0) => {
              let tmp2;
              let tmp3;
              [tmp2, tmp3] = bindResult(arg0, 2);
              let tmp6 = callback();
              if (null == tmp6) {
                tmp6 = closure_10;
              }
              const mergeResult = closure_2.merge(tmp3, tmp6);
              let closure_9 = mergeResult;
              bindResult(mergeResult, true);
              if (tmp2) {
                if (typeof closure_7 !== "find") {
                  HermesBuiltin.throwTypeError();
                }
                let obj = {};
                const merged = Object.assign(tmp5());
                obj = { state: null, version: null };
                obj[0] = closure_2.partialize(obj);
                obj[1] = closure_2.version;
                return item.setItem(closure_2.name, obj);
              }
              const tmp = bindResult(arg0, 2);
              tmp5 = callback;
            }).then(() => {
              if (null != closure_0) {
                tmp(outer1_9, undefined);
              }
              outer1_9 = outer1_1();
              let c3 = true;
              const item = outer1_5.forEach((arg0) => arg0(closure_9));
            }).catch((arg0) => {
              if (null != closure_0) {
                tmp(undefined, arg0);
              }
            });
          } else {
            const call = onRehydrateStorage.call;
            let tmp8 = callback2();
            if (null == tmp8) {
              tmp8 = closure_10;
            }
            typeof call === "unknown" ? onRehydrateStorage(tmp8) : call(obj, tmp8);
            let tmp6 = obj;
          }
        }
      }
      obj = { setOptions: null, clearStorage: null, getOptions: null, rehydrate: null, hasHydrated: null, onHydrate: null, onFinishHydration: null };
      obj[0] = function setOptions(storage) {
        const obj = {};
        const merged = Object.assign(obj);
        const merged1 = Object.assign(storage);
        if (storage.storage) {
          storage = storage.storage;
        }
      };
      obj[1] = function clearStorage() {
        if (null != storage) {
          storage.removeItem(obj.name);
        }
      };
      obj[2] = function getOptions() {
        return obj;
      };
      obj[3] = function rehydrate() {
        return hydrate();
      };
      obj[4] = function hasHydrated() {
        return c3;
      };
      obj[5] = function onHydrate(arg0) {
        let closure_0 = arg0;
        set.add(arg0);
        return () => {
          outer1_4.delete(closure_0);
        };
      };
      obj[6] = function onFinishHydration(arg0) {
        let closure_0 = arg0;
        set1.add(arg0);
        return () => {
          outer1_5.delete(closure_0);
        };
      };
      setState.persist = obj;
      if (!obj.skipHydration) {
        hydrate();
      }
      let tmp9 = closure_9;
      if (!closure_9) {
        tmp9 = tmp6;
      }
      return tmp9;
    } else {
      return callback(() => {
        const items = [...arguments];
        console.warn("[zustand persist middleware] Unable to update item '" + obj.name + "', the given storage is currently unavailable.");
        callback(...items);
      }, arg1, setState);
    }
  };
}
export function redux(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg2;
    arg2.dispatch = (arg0) => {
      const callback = arg0;
      callback((arg0) => callback(arg0, callback), false, arg0);
      return arg0;
    };
    arg2.dispatchFromDevtools = true;
    const merged = Object.assign(closure_1);
    return {
      dispatch() {
        const items = [...HermesBuiltin.copyRestArgs()];
        return store.dispatch.apply(items);
      }
    };
  };
}
export function subscribeWithSelector(arg0) {
  let closure_0 = arg0;
  return (arg0, arg1, subscribe) => {
    const callback = subscribe;
    subscribe = subscribe.subscribe;
    subscribe.subscribe = (arg0, arg1, equalityFn) => {
      const subscribe = arg0;
      const subscribe2 = arg1;
      let tmp = arg0;
      if (arg1) {
        equalityFn = undefined;
        if (null != equalityFn) {
          equalityFn = equalityFn.equalityFn;
        }
        if (!equalityFn) {
          const _Object = Object;
          equalityFn = Object.is;
        }
        let closure_3 = arg0(subscribe.getState());
        let fireImmediately;
        if (null != equalityFn) {
          fireImmediately = equalityFn.fireImmediately;
        }
        const fn = function o(arg0) {
          const tmp = callback(arg0);
          if (!equalityFn(closure_3, tmp)) {
            closure_3 = tmp;
            callback2(tmp, closure_3);
          }
        };
        tmp = fn;
        if (fireImmediately) {
          arg1(closure_3, closure_3);
          tmp = fn;
        }
      }
      return subscribe2(tmp);
    };
    return callback(arg0, arg1, subscribe);
  };
}