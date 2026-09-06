// _runtime/metro/04430__.js
import _slicedToArray from "00032__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";

function createJSONStorage(fn, arg1) {
  let replacer = arg1;
  try {
    closure_1 = fn();
    const obj = {
      getItem(arg0) {
          value = closure_1.getItem(arg0);
          let tmp2 = null;
          if (null != value) {
            tmp2 = value;
          }
          if (tmp2 instanceof Promise) {
            let nextPromise = tmp2.then(function parse(result) {
              let parsed = null;
              if (null !== result) {
                reviver = undefined;
                if (null != reviver) {
                  reviver = reviver.reviver;
                }
                parsed = JSON.parse(result, reviver);
              }
              return parsed;
            });
          } else {
            nextPromise = null;
            if (null !== tmp2) {
              let reviver;
              if (null != reviver) {
                reviver = reviver.reviver;
              }
              nextPromise = JSON.parse(tmp2, reviver);
            }
          }
          return nextPromise;
        },
      setItem(arg0, arg1) {
          replacer = undefined;
          if (null != replacer) {
            replacer = replacer.replacer;
          }
          return closure_1.setItem(arg0, JSON.stringify(arg1, replacer));
        },
      removeItem(arg0) {
          return closure_1.removeItem(arg0);
        }
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
function parseJsonThen(arg0, fn) {
  try {
    const _JSON = JSON;
    const parsed = JSON.parse(arg0);
    if (undefined !== parsed) {
      fn(parsed);
    }
  } catch (tmp4) {
    const _console = console;
    console.error("[zustand devtools middleware] Could not parse the received json", tmp4);
  }
}
function toThenable(arg0) {

}

export function combine(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return () => Object.assign({}, closure_0, closure_1(...HermesBuiltin.copyRestArgs()));
}
export { createJSONStorage };
export function devtools(arg0, devtools) {
  closure_0 = arg0;
  if (devtools === undefined) {
    devtools = {};
  }
  return (arg0, arg1, setState) => {
    closure_0 = arg0;
    closure_1 = arg1;
    ({ enabled, anonymousActionType: closure_3, store } = devtools);
    const tmp2 = _objectWithoutProperties(devtools, setState);
    let name = tmp2;
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
            let obj = { type: "untracked", connection: connect.connect(name) };
            return obj;
          } else {
            value = store.get(name.name);
            if (value) {
              obj = { type: "tracked", store };
              const merged = Object.assign(value);
              return obj;
            } else {
              obj = { connection: connect.connect(name), stores: {} };
              const result = obj5.set(name.name, obj);
              const obj1 = { type: "tracked", store };
              const merged1 = Object.assign(obj);
              return obj1;
            }
            obj5 = store;
          }
        })(store, tmp5, tmp2);
        const connection = tmp9.connection;
        const tmpResult = _objectWithoutProperties(tmp9, closure_3);
        closure_7 = tmpResult;
        closure_8 = true;
        setState.setState = (arg0, arg1, type) => {
          const tmp = closure_0(arg0, arg1);
          if (closure_8) {
            if (undefined === type) {
              let str = closure_1_3;
              if (!closure_1_3) {
                const _Error = Error;
                const error = new Error();
                if (typeof findCallerName === "function") {
                  let tmp10;
                  if (str2) {
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
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              if (!str) {
                str = "anonymous";
              }
              let obj = { type: str };
              let tmp3 = obj;
            } else {
              tmp3 = type;
              if (typeof type === "string") {
                obj = { type };
                tmp3 = obj;
              }
            }
            if (undefined === store) {
              if (null != connection) {
                obj6.send(tmp3, closure_1());
              }
              obj6 = connection;
            } else {
              if (null != connection) {
                obj1 = {};
                const merged = Object.assign(tmp3);
                const _HermesInternal = HermesInternal;
                obj1.type = "" + tmp15 + "/" + tmp3.type;
                if (typeof getTrackedConnectionState === "function") {
                  value = map.get(tmp33);
                  if (value) {
                    const _Object = Object;
                    const _Object2 = Object;
                    const entries = Object.entries(value.stores);
                    let fromEntriesResult = Object.fromEntries(entries.map((item) => {
                      [tmp, obj] = item;
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
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              obj8 = connection;
            }
            return tmp;
          } else {
            return tmp;
          }
        };
        devtools = {
          cleanup() {
                let tmp3 = connection;
                if (connection) {
                  tmp3 = typeof obj.unsubscribe === "function";
                }
                if (tmp3) {
                  obj.unsubscribe();
                }
                name = name.name;
                if (undefined !== store) {
                  value = map.get(name);
                  if (value) {
                    const stores = value.stores;
                    delete tmp[tmp2];
                    const _Object = Object;
                    if (0 === Object.keys(value.stores).length) {
                      obj2.delete(name);
                    }
                  }
                  obj2 = map;
                }
              }
        };
        setState.devtools = devtools;
        function setStateFromDevtools() {
          closure_8 = false;
          closure_0(...HermesBuiltin.copyRestArgs());
        }
        const tmp13 = closure_0(setState.setState, arg1, setState);
        closure_10 = tmp13;
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
            connection.init(Object.fromEntries(entries.map((item) => {
              [tmp, obj] = item;
              const items = [tmp, ];
              if (tmp === closure_7.store) {
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
              parseJsonThen(type.payload, (type) => {
                if ("__setState" !== type.type) {
                  if (tmp10) {
                    obj.dispatch(type);
                  }
                  tmp10 = setState.dispatchFromDevtools && typeof setState.dispatch === "function";
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
                    const json = JSON.stringify(setState.getState());
                    if (json !== JSON.stringify(tmp2)) {
                      setStateFromDevtools(tmp2);
                    }
                  }
                }
              });
            }
            return tmp45;
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
                const tmp42 = initResult;
              } else if (null != connection) {
                if (typeof getTrackedConnectionState === "function") {
                  let mapped = map.get(tmp34);
                  if (mapped) {
                    const _Object3 = Object;
                    const _Object4 = Object;
                    let entries = Object.entries(mapped.stores);
                    mapped = entries.map((item) => {
                      [tmp, obj] = item;
                      const items = [tmp, obj.getState()];
                      return items;
                    });
                    let fromEntriesResult = Object.fromEntries(mapped);
                  } else {
                    fromEntriesResult = {};
                  }
                  tmp31(fromEntriesResult);
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              return tmp42;
            } else if ("COMMIT" === type2) {
              if (undefined === store) {
                if (null != connection) {
                  obj3.init(setState.getState());
                }
                obj3 = connection;
              } else if (null != connection) {
                if (typeof getTrackedConnectionState === "function") {
                  value = map.get(tmp18);
                  if (value) {
                    let _Object = Object;
                    let _Object2 = Object;
                    const entries1 = Object.entries(value.stores);
                    value = entries1.map((item) => {
                      [tmp, obj] = item;
                      const items = [tmp, obj.getState()];
                      return items;
                    });
                    let fromEntriesResult1 = Object.fromEntries(value);
                  } else {
                    fromEntriesResult1 = {};
                  }
                  tmp15(fromEntriesResult1);
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              return tmp26;
            } else if ("ROLLBACK" === type2) {
              parseJsonThen(type.state, (arg0) => {
                if (undefined === closure_1_4) {
                  setStateFromDevtools(arg0);
                  if (null != connection) {
                    connection.init(setState.getState());
                  }
                } else {
                  setStateFromDevtools(arg0[tmp]);
                  if (null != connection) {
                    if (typeof closure_5 === "function") {
                      let mapped = store.get(tmp18);
                      if (mapped) {
                        const _Object = Object;
                        const _Object2 = Object;
                        const entries = Object.entries(mapped.stores);
                        mapped = entries.map((item) => {
                          [tmp, obj] = item;
                          const items = [tmp, obj.getState()];
                          return items;
                        });
                        let fromEntriesResult = Object.fromEntries(mapped);
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
                    closure_8 = tmp2;
                    return !closure_8;
                  }
                }
              }
              parseJsonThen(type.state, (arg0) => {
                if (undefined !== store) {
                  const _JSON = JSON;
                  const _JSON2 = JSON;
                  const json = JSON.stringify(setState.getState());
                  if (json !== JSON.stringify(arg0[tmp])) {
                    setStateFromDevtools(arg0[tmp]);
                  }
                } else {
                  setStateFromDevtools(arg0);
                }
              });
            }
          }
        });
        return tmp13;
      } else {
        return closure_0(arg0, arg1, setState);
      }
    } catch (err) {
    }
  };
}
export function persist(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, arg1, setState) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let persist = {
      storage: createJSONStorage(() => globalThis.localStorage),
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
    c3 = false;
    const set = new Set();
    const set1 = new Set();
    let storage = persist.storage;
    if (storage) {
      function setItem() {

      }
      setState = setState.setState;
      setState.setState = (arg0, arg1) => {
        setState(arg0, arg1);
        if (typeof setItem === "function") {
          let obj = {};
          const merged = Object.assign(closure_1());
          obj = { state: null, version: null };
          obj.state = obj.partialize(obj);
          obj.version = obj.version;
          return storage.setItem(obj.name, obj);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      let tmp6 = closure_0(() => {
        closure_0(...HermesBuiltin.copyRestArgs());
        if (typeof setItem === "function") {
          let obj = {};
          const merged = Object.assign(closure_1());
          obj = { state: null, version: null };
          obj.state = obj.partialize(obj);
          obj.version = obj.version;
          return storage.setItem(obj.name, obj);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }, arg1, setState);
      closure_10 = tmp6;
      setState.getInitialState = () => closure_10;
      function hydrate() {
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
          if (null == onRehydrateStorage) {
            closure_0 = tmp5;
            const getItem = storage.getItem;
            if (typeof closure_9 === "function") {
              closure_0 = getItem.bind(storage);
              const promise = ((name) => {
                try {
                  const tmp3 = closure_0(name);
                  closure_0 = tmp3;
                  if (tmp3 instanceof Promise) {
                    let obj = tmp3;
                  } else {
                    obj = {
                      then(name) {
                            if (typeof mergeResult === "function") {
                              closure_0 = name;
                              return (() => { ... })(closure_0);
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          },
                      catch(arg0) {
                            return this;
                          }
                    };
                  }
                  return obj;
                } catch (tmp6) {
                  closure_1 = tmp6;
                  obj = {
                    then(arg0) {
                        return this;
                      },
                    catch(arg0) {
                        if (typeof mergeResult === "function") {
                          closure_0 = arg0;
                          return (() => { ... })(closure_1);
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                  };
                  return obj;
                }
              })(obj.name);
              let nextPromise = ((name) => {
                try {
                  const tmp3 = closure_0(name);
                  closure_0 = tmp3;
                  if (tmp3 instanceof Promise) {
                    let obj = tmp3;
                  } else {
                    obj = {
                      then(name) {
                            if (typeof mergeResult === "function") {
                              closure_0 = name;
                              return (() => { ... })(closure_0);
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          },
                      catch(arg0) {
                            return this;
                          }
                    };
                  }
                  return obj;
                } catch (tmp6) {
                  closure_1 = tmp6;
                  obj = {
                    then(arg0) {
                        return this;
                      },
                    catch(arg0) {
                        if (typeof mergeResult === "function") {
                          closure_0 = arg0;
                          return (() => { ... })(closure_1);
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                  };
                  return obj;
                }
              })(obj.name).then((version) => {
                if (version) {
                  if (typeof version.version === "number") {
                    if (version.version !== persist.version) {
                      if (persist.migrate) {
                        const migrateResult = persist.migrate(version.state, version.version);
                        if (migrateResult instanceof Promise) {
                          let nextPromise = migrateResult.then((result) => {
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
              const nextPromise1 = ((name) => {
                try {
                  const tmp3 = closure_0(name);
                  closure_0 = tmp3;
                  if (tmp3 instanceof Promise) {
                    let obj = tmp3;
                  } else {
                    obj = {
                      then(name) {
                            if (typeof mergeResult === "function") {
                              closure_0 = name;
                              return (() => { ... })(closure_0);
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          },
                      catch(arg0) {
                            return this;
                          }
                    };
                  }
                  return obj;
                } catch (tmp6) {
                  closure_1 = tmp6;
                  obj = {
                    then(arg0) {
                        return this;
                      },
                    catch(arg0) {
                        if (typeof mergeResult === "function") {
                          closure_0 = arg0;
                          return (() => { ... })(closure_1);
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                  };
                  return obj;
                }
              })(obj.name).then((version) => {
                if (version) {
                  if (typeof version.version === "number") {
                    if (version.version !== persist.version) {
                      if (persist.migrate) {
                        const migrateResult = persist.migrate(version.state, version.version);
                        if (migrateResult instanceof Promise) {
                          let nextPromise = migrateResult.then((result) => {
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
              }).then((result) => {
                [tmp2, tmp3] = closure_0(result, 2);
                let tmp6 = closure_1_1();
                if (null == tmp6) {
                  tmp6 = closure_1_10;
                }
                mergeResult = persist.merge(tmp3, tmp6);
                closure_0(mergeResult, true);
                if (tmp2) {
                  if (typeof setItem === "function") {
                    let obj = {};
                    const merged = Object.assign(tmp5());
                    obj = { state: null, version: null };
                    obj.state = persist.partialize(obj);
                    obj.version = persist.version;
                    return item.setItem(persist.name, obj);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                const tmp = closure_0(result, 2);
                tmp5 = closure_1_1;
              });
              return ((name) => {
                try {
                  const tmp3 = closure_0(name);
                  closure_0 = tmp3;
                  if (tmp3 instanceof Promise) {
                    let obj = tmp3;
                  } else {
                    obj = {
                      then(name) {
                            if (typeof mergeResult === "function") {
                              closure_0 = name;
                              return (() => { ... })(closure_0);
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          },
                      catch(arg0) {
                            return this;
                          }
                    };
                  }
                  return obj;
                } catch (tmp6) {
                  closure_1 = tmp6;
                  obj = {
                    then(arg0) {
                        return this;
                      },
                    catch(arg0) {
                        if (typeof mergeResult === "function") {
                          closure_0 = arg0;
                          return (() => { ... })(closure_1);
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                  };
                  return obj;
                }
              })(obj.name).then((version) => {
                if (version) {
                  if (typeof version.version === "number") {
                    if (version.version !== persist.version) {
                      if (persist.migrate) {
                        const migrateResult = persist.migrate(version.state, version.version);
                        if (migrateResult instanceof Promise) {
                          let nextPromise = migrateResult.then((result) => {
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
              }).then((result) => {
                [tmp2, tmp3] = closure_0(result, 2);
                let tmp6 = closure_1_1();
                if (null == tmp6) {
                  tmp6 = closure_1_10;
                }
                mergeResult = persist.merge(tmp3, tmp6);
                closure_0(mergeResult, true);
                if (tmp2) {
                  if (typeof setItem === "function") {
                    let obj = {};
                    const merged = Object.assign(tmp5());
                    obj = { state: null, version: null };
                    obj.state = persist.partialize(obj);
                    obj.version = persist.version;
                    return item.setItem(persist.name, obj);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                const tmp = closure_0(result, 2);
                tmp5 = closure_1_1;
              }).then(() => {
                if (null != closure_0) {
                  tmp(closure_9, undefined);
                }
                closure_9 = closure_1();
                c3 = true;
                item = set1.forEach((fn) => fn(closure_1_9));
              }).catch((error) => {
                if (null != closure_0) {
                  tmp(undefined, error);
                }
              });
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            const call = onRehydrateStorage.call;
            let tmp8 = closure_1();
            if (null == tmp8) {
              tmp8 = closure_10;
            }
            typeof call === "unknown" ? onRehydrateStorage(tmp8) : call(obj, tmp8);
          }
        }
      }
      persist = {
        setOptions(storage) {
            const obj = {};
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
      setState.persist = persist;
      if (!persist.skipHydration) {
        hydrate();
      }
      let tmp9 = closure_9;
      if (!closure_9) {
        tmp9 = tmp6;
      }
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
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg2;
    arg2.dispatch = (arg0) => {
      closure_0 = arg0;
      closure_0((arg0) => closure_0(arg0, closure_0), false, arg0);
      return arg0;
    };
    arg2.dispatchFromDevtools = true;
    const merged = Object.assign(closure_1);
    return {
      dispatch() {
        const items = [...HermesBuiltin.copyRestArgs()];
        return closure_1.dispatch.apply(items);
      }
    };
  };
}
export function subscribeWithSelector(arg0) {
  closure_0 = arg0;
  return (arg0, arg1, subscribe) => {
    subscribe = subscribe.subscribe;
    subscribe.subscribe = (fn, fn2, equalityFn) => {
      subscribe = fn;
      closure_1 = fn2;
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
        closure_3 = fn(subscribe.getState());
        let fireImmediately;
        if (null != equalityFn) {
          fireImmediately = equalityFn.fireImmediately;
        }
        fn = function o(arg0) {
          const tmp = closure_0(arg0);
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
    return subscribe(arg0, arg1, subscribe);
  };
}