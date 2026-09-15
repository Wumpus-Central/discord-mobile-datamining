// === Module 1496: SwitchRouter ===

// Module 1496 (SwitchRouter)
import BaseRouter3 from "BaseRouter" /* 1492 */;
import nanoid from "nanoid" /* 1493 */;
import _mod1497 from "module_1497" /* 1497 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
const route = "route";
function getRouteHistory(mapped, bound, backBehavior, require) {
  let diff = bound;
  closure_0 = require;
  const obj = { type: route, key: mapped[bound].key, params: null };
  let params;
  if ("fullHistory" === backBehavior) {
    params = mapped[diff].params;
  }
  obj.params = params;
  const items = [obj];
  if ("order" === backBehavior) {
    if (diff > 0) {
      do {
        let obj2 = { type: route, key: mapped[diff - 1].key };
        let arr = items.unshift(obj2);
        diff = diff - 1;
      } while (diff > 0);
    }
  } else if ("firstRoute" === backBehavior) {
    if (0 !== diff) {
      const obj3 = { type: route, key: mapped[0].key };
      items.unshift(obj3);
    }
  } else if ("initialRoute" === backBehavior) {
    const findIndexResult = mapped.findIndex((name) => name.name === closure_0);
    let num = 0;
    if (-1 !== findIndexResult) {
      num = findIndexResult;
    }
    if (diff !== num) {
      const obj4 = { type: route, key: mapped[num].key };
      items.unshift(obj4);
    }
  }
  return items;
}
function changeIndex(history, bound, backBehavior, require) {
  history = history.history;
  if ("history" !== backBehavior) {
    if ("fullHistory" !== backBehavior) {
      const history1 = history.history;
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(history1.filter((type) => "route" !== type.type), 0);
      HermesBuiltin.arraySpread(getRouteHistory(history.routes, bound, backBehavior, require), arraySpreadResult);
      let combined = items;
    }
    const obj = { index: bound, history: combined };
    return obj;
  }
  if ("history" === backBehavior) {
    let found = history.filter((type) => {
      let tmp = "route" !== type.type;
      if (!tmp) {
        tmp = type.key !== key.key;
      }
      return tmp;
    });
  } else {
    found = history;
    if ("fullHistory" === backBehavior) {
      let type;
      const findLastIndexResult = history.findLastIndex((type) => "route" === type.type);
      if (history[findLastIndexResult] != null) {
        type = tmp21.type;
      }
      found = history;
      if (tmp14) {
        const items1 = [];
        HermesBuiltin.arraySpread(history.slice(findLastIndexResult + 1), HermesBuiltin.arraySpread(history.slice(0, findLastIndexResult), 0));
        found = items1;
        const arraySpreadResult5 = HermesBuiltin.arraySpread(history.slice(0, findLastIndexResult), 0);
      }
      tmp14 = "route" === type && tmp12.key === history[findLastIndexResult].key;
    }
  }
  const obj2 = { type: route, key: history.routes[bound].key, params: null };
  let params;
  if ("fullHistory" === backBehavior) {
    params = tmp12.params;
  }
  obj2.params = params;
  combined = found.concat(obj2);
}

export const SwitchRouter = function SwitchRouter(merged) {
  ({ initialRouteName: require, backBehavior } = merged);
  if (backBehavior === undefined) {
    backBehavior = "firstRoute";
  }
  let obj = {};
  merged = Object.assign(require("BaseRouter").BaseRouter);
  obj.getInitialState = function getInitialState(arg0) {
    ({ routeNames, routeParamList: closure_0 } = arg0);
    let num = 0;
    if (undefined !== closure_1_0) {
      num = 0;
      if (routeNames.includes(closure_1_0)) {
        num = routeNames.indexOf(closure_1_0);
      }
    }
    const mapped = routeNames.map((name) => {
      const obj = { name, key: "" + name + "-" + require("nanoid").nanoid(), params: closure_1_0[name] };
      return obj;
    });
    let obj = { stale: false, key: nanoid.nanoid(), index: num, routeNames, history: getRouteHistory(mapped, num, backBehavior, closure_1_0), routes: mapped, preloadedRouteKeys: [] };
    return obj;
  };
  obj.getRehydratedState = function getRehydratedState(index, arg1) {
    ({ routeNames, routeParamList: backBehavior } = arg1);
    let mapped1;
    const mapped = routeNames.map((name) => {
      index = name;
      const routes = index.routes;
      const found = routes.find((name) => name.name === closure_0);
      const obj = {};
      const merged = Object.assign(found);
      obj.name = name;
      if (found) {
        if (found.name === name) {
          if (found.key) {
            let key = found.key;
          }
          obj.key = key;
          if (undefined !== closure_1_1[name]) {
            const obj3 = {};
            const merged1 = Object.assign(tmp3[name]);
            let params1;
            if (found) {
              params1 = found.params;
            }
            const merged2 = Object.assign(params1);
            let params = obj3;
          } else if (found) {
            params = found.params;
          }
          obj.params = params;
          return obj;
        }
      }
      key = "" + name + "-" + require("nanoid").nanoid();
    });
    let num = index.index;
    if (num == null) {
      num = 0;
    }
    let name;
    if (index.routes[num] != null) {
      name = tmp.name;
    }
    const bound = Math.min(Math.max(routeNames.indexOf(name), 0), mapped.length - 1);
    mapped1 = mapped.map((key) => key.key);
    const items = [];
    let history = index.history;
    if (history == null) {
      history = [];
    }
    const iter = history[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      let hasItem = "route" === nextResult.type;
      if (hasItem) {
        hasItem = mapped1.includes(tmp5.key);
      }
      if (hasItem) {
        let arr = items.push(tmp5);
      }
      continue;
    }
    let obj = { stale: false, key: nanoid.nanoid(), index: bound, routeNames, history: items, routes: mapped, preloadedRouteKeys: null };
    const preloadedRouteKeys = index.preloadedRouteKeys;
    let found;
    if (preloadedRouteKeys != null) {
      found = preloadedRouteKeys.filter((item) => mapped1.includes(item));
    }
    if (found == null) {
      found = [];
    }
    obj.preloadedRouteKeys = found;
    let merged = Object.assign(obj);
    let merged1 = Object.assign(changeIndex(obj, bound, backBehavior, closure_1_0));
    return {};
  };
  obj.getStateForRouteNamesChange = function getStateForRouteNamesChange(index, arg1) {
    ({ routeNames, routeParamList: backBehavior, routeKeyChanges: closure_2 } = arg1);
    const mapped = routeNames.map((name) => {
      index = name;
      const routes = index.routes;
      let found = routes.find((name) => {
        let tmp = name.name === closure_0;
        if (tmp) {
          tmp = !closure_2_2.includes(name.name);
        }
        return tmp;
      });
      if (found == null) {
        const obj = { name, key: null, params: null };
        const _HermesInternal = HermesInternal;
        obj.key = "" + name + "-" + index(1493).nanoid();
        obj.params = dependencyMap[name];
        found = obj;
        const obj2 = index(1493);
      }
      return found;
    });
    new Set(mapped.map((key) => key.key));
    if (null == index.routes[index.index]) {
      const _Error = Error;
      let _HermesInternal = HermesInternal;
      const error = new Error("Couldn't find a route at index " + index.index + ".");
      throw error;
    } else {
      const history = index.history;
      let found = history.filter((type) => {
        let hasItem = "route" !== type.type;
        if (!hasItem) {
          hasItem = set.has(type.key);
        }
        return hasItem;
      });
      index = routeNames.indexOf(tmp2.name);
      if (-1 === index) {
        found.findLast((type) => "route" === type.type);
        const _Math = Math;
        index = Math.max(0, mapped.findIndex((key) => {
          key = undefined;
          if (key != null) {
            key = key.key;
          }
          return key.key === key;
        }));
      }
      let obj = {};
      const merged = Object.assign(index);
      obj.routeNames = routeNames;
      obj.routes = mapped;
      let obj2 = { routes: mapped, history: found };
      const merged1 = Object.assign(changeIndex(obj2, index, backBehavior, require));
      const preloadedRouteKeys = index.preloadedRouteKeys;
      obj.preloadedRouteKeys = preloadedRouteKeys.filter((item) => set.has(item));
      return obj;
    }
  };
  obj.getStateForRouteFocus = function getStateForRouteFocus(routes, arg1) {
    closure_0 = arg1;
    routes = routes.routes;
    const findIndexResult = routes.findIndex((key) => key.key === closure_0);
    let tmp2 = routes;
    if (-1 !== findIndexResult) {
      tmp2 = routes;
      if (findIndexResult !== routes.index) {
        const obj = {};
        const merged = Object.assign(routes);
        const merged1 = Object.assign(changeIndex(routes, findIndexResult, backBehavior, require));
        tmp2 = obj;
      }
    }
    return tmp2;
  };
  obj.getStateForAction = function getStateForAction(history, type, arg2) {
    ({ routeParamList, routeGetIdList } = arg2);
    let findIndexResult1;
    closure_3 = undefined;
    let key2;
    let key;
    c7 = undefined;
    c8 = undefined;
    closure_9 = undefined;
    let obj8;
    type = type.type;
    if ("JUMP_TO" !== type) {
      if ("NAVIGATE" !== type) {
        if ("NAVIGATE_DEPRECATED" !== type) {
          if ("SET_PARAMS" !== type) {
            if ("REPLACE_PARAMS" !== type) {
              if ("GO_BACK" === type) {
                if (1 === history.history.length) {
                  return null;
                } else {
                  let type1;
                  if (history.history[history.history.length - 2] != null) {
                    type1 = tmp91.type;
                  }
                  if ("route" !== type1) {
                    return null;
                  } else {
                    key = tmp91.key;
                    const routes4 = history.routes;
                    const findLastIndexResult = routes4.findLastIndex((key) => key.key === key);
                    c7 = findLastIndexResult;
                    if (-1 === findLastIndexResult) {
                      return null;
                    } else {
                      let routes2 = history.routes;
                      if (tmp26) {
                        const items = [];
                        HermesBuiltin.arraySpread(history.routes, 0);
                        const obj2 = {};
                        const merged = Object.assign(items[findLastIndexResult]);
                        obj2.params = tmp91.params;
                        items[findLastIndexResult] = obj2;
                        routes2 = items;
                      }
                      const obj5 = {};
                      const merged1 = Object.assign(history);
                      obj5.routes = routes2;
                      const preloadedRouteKeys = history.preloadedRouteKeys;
                      obj5.preloadedRouteKeys = preloadedRouteKeys.filter((item) => item !== history.routes[c7].key);
                      const history1 = history.history;
                      obj5.history = history1.slice(0, -1);
                      obj5.index = findLastIndexResult;
                      return obj5;
                    }
                  }
                }
              } else if ("PRELOAD" === type) {
                const routes = history.routes;
                const findIndexResult = routes.findIndex((name) => name.name === type.payload.name);
                c8 = findIndexResult;
                if (-1 === findIndexResult) {
                  return null;
                } else {
                  closure_9 = tmp88;
                  let tmp89Result;
                  if (routeGetIdList[history.routes[findIndexResult].name] != null) {
                    const obj = { params: tmp88.params };
                    tmp89Result = tmp89(obj);
                  }
                  let tmp89Result2;
                  if (routeGetIdList[history.routes[findIndexResult].name] != null) {
                    const obj6 = { params: type.payload.params };
                    tmp89Result2 = tmp89(obj6);
                  }
                  if (tmp89Result === tmp89Result2) {
                    key = tmp88.key;
                  } else {
                    const _HermesInternal = HermesInternal;
                    key = "" + tmp88.name + "-" + nanoid.nanoid();
                  }
                  const obj7 = { action: type, routeParamList };
                  const paramsFromAction = _mod1497.createParamsFromAction(obj7);
                  let tmp12 = tmp88;
                  if (paramsFromAction !== history.routes[findIndexResult].params) {
                    obj8 = {};
                    const merged2 = Object.assign(tmp88);
                    obj8.key = key;
                    obj8.params = paramsFromAction;
                    tmp12 = obj8;
                  }
                  obj8 = tmp12;
                  const history4 = history.history;
                  let tmp16 = history4;
                  if (key !== history.routes[findIndexResult].key) {
                    const found = history4.filter((type) => {
                      let tmp = "route" !== type.type;
                      if (!tmp) {
                        tmp = type.key !== closure_9.key;
                      }
                      return tmp;
                    });
                    let combined = found;
                    if (findIndexResult === history.index) {
                      const obj9 = { type: route, key: tmp12.key, params: null };
                      let params1;
                      if ("fullHistory" === backBehavior) {
                        params1 = tmp12.params;
                      }
                      obj9.params = params1;
                      combined = found.concat(obj9);
                    }
                    tmp16 = combined;
                  }
                  const obj10 = {};
                  const merged3 = Object.assign(history);
                  const preloadedRouteKeys1 = history.preloadedRouteKeys;
                  const found1 = preloadedRouteKeys1.filter((item) => item !== closure_9.key);
                  obj10.preloadedRouteKeys = found1.concat(tmp12.key);
                  const routes1 = history.routes;
                  obj10.routes = routes1.map((item, index) => {
                    let tmp = item;
                    if (index === c8) {
                      tmp = obj8;
                    }
                    return tmp;
                  });
                  obj10.history = tmp16;
                  return obj10;
                }
              } else {
                const BaseRouter = BaseRouter3.BaseRouter;
                return BaseRouter.getStateForAction(history, type);
              }
            }
          }
          const BaseRouter2 = BaseRouter3.BaseRouter;
          const stateForAction = BaseRouter2.getStateForAction(history, type);
          if (null !== stateForAction) {
            const index = stateForAction.index;
            if (null != index) {
              key2 = tmp39;
              history = history.history;
              const findLastIndexResult1 = history.findLastIndex((type) => {
                let tmp = "route" === type.type;
                if (tmp) {
                  tmp = type.key === key2.key;
                }
                return tmp;
              });
              let history2 = history.history;
              if (-1 !== findLastIndexResult1) {
                const items1 = [];
                HermesBuiltin.arraySpread(history.history, 0);
                history2 = items1;
                if ("route" === items1[findLastIndexResult1].type) {
                  const obj11 = {};
                  const merged4 = Object.assign(tmp43);
                  obj11.params = tmp39.params;
                  items1[findLastIndexResult1] = obj11;
                  history2 = items1;
                }
              }
              const obj12 = {};
              const merged5 = Object.assign(stateForAction);
              obj12.history = history2;
              return obj12;
            }
          }
          return stateForAction;
        }
      }
    }
    const routes3 = history.routes;
    findIndexResult1 = routes3.findIndex((name) => name.name === type.payload.name);
    if (-1 === findIndexResult1) {
      return null;
    } else {
      closure_3 = tmp95;
      if (null == history.routes[findIndexResult1]) {
        const _Error = Error;
        const _HermesInternal3 = HermesInternal;
        const error = new Error("Couldn't find a route at index " + findIndexResult1 + ".");
        throw error;
      } else {
        let tmp97Result;
        if (routeGetIdList[tmp95.name] != null) {
          const obj13 = { params: tmp95.params };
          tmp97Result = tmp97(obj13);
        }
        let tmp97Result2;
        if (routeGetIdList[tmp95.name] != null) {
          const obj14 = { params: type.payload.params };
          tmp97Result2 = tmp97(obj14);
        }
        if (tmp97Result === tmp97Result2) {
          key2 = tmp95.key;
        } else {
          const _HermesInternal2 = HermesInternal;
          key2 = "" + tmp95.name + "-" + nanoid.nanoid();
        }
        if ("NAVIGATE" === type.type) {
          if (type.payload.merge) {
            if (tmp97Result === tmp97Result2) {
              if (undefined === type.payload.params) {
                if (undefined === routeParamList[tmp95.name]) {
                  let params = tmp95.params;
                }
              }
              const obj15 = {};
              const merged6 = Object.assign(routeParamList[tmp95.name]);
              const merged7 = Object.assign(tmp95.params);
              const merged8 = Object.assign(type.payload.params);
              params = obj15;
            }
            if ("NAVIGATE" === type.type) {
              if (null != type.payload.path) {
                let path = type.payload.path;
              }
              if (params === tmp95.params) {
                if (path === tmp95.path) {
                  let tmp64 = tmp95;
                }
                key = tmp64;
                const routes5 = history.routes;
                const obj16 = {};
                const mapped = routes5.map((item, index) => {
                  let tmp = item;
                  if (index === findIndexResult1) {
                    tmp = closure_4;
                  }
                  return tmp;
                });
                const merged9 = Object.assign(history);
                obj16.routes = mapped;
                if (key2 === tmp95.key) {
                  let history3 = history.history;
                } else {
                  const history5 = history.history;
                  history3 = history5.filter((type) => {
                    let tmp = "route" !== type.type;
                    if (!tmp) {
                      tmp = type.key !== closure_3.key;
                    }
                    return tmp;
                  });
                }
                obj16.history = history3;
                const obj18 = {};
                const merged10 = Object.assign(obj16);
                const merged11 = Object.assign(changeIndex(obj16, findIndexResult1, backBehavior, closure_1_0));
                const preloadedRouteKeys2 = obj16.preloadedRouteKeys;
                obj18.preloadedRouteKeys = preloadedRouteKeys2.filter((item) => {
                  let tmp = item !== closure_3.key;
                  if (tmp) {
                    tmp = item !== key.key;
                  }
                  return tmp;
                });
                return obj18;
              }
              const obj20 = {};
              const merged12 = Object.assign(tmp95);
              obj20.key = key2;
              obj20.path = path;
              obj20.params = params;
              tmp64 = obj20;
            }
            path = tmp95.path;
          }
        }
        const obj21 = { action: type, routeParamList };
        params = _mod1497.createParamsFromAction(obj21);
      }
    }
  };
  return obj;
};