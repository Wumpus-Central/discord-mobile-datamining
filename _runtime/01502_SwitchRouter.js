// _runtime/01502_SwitchRouter.js
import BaseRouter3 from "01498_BaseRouter.js";
import nanoid from "01499_nanoid.js";
import _mod1503 from "metro/01503__.js";

let set;

const route = "route";
function getRouteHistory(mapped, findIndexResult, backBehavior, require) {
  let params;
  let diff = findIndexResult;
  let closure_0 = require;
  const obj = { type: route, key: mapped[findIndexResult].key, params };
  params = undefined;
  if ("fullHistory" === backBehavior) {
    params = mapped[diff].params;
  }
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
    findIndexResult = mapped.findIndex((name) => name.name === closure_0);
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
function changeIndex(history, findIndexResult, backBehavior, require) {
  let found;
  let params;
  history = history.history;
  if ("history" !== backBehavior) {
    let combined;
    if ("fullHistory" !== backBehavior) {
      const history1 = history.history;
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(
        items,
        history1.filter((type) => "route" !== type.type),
        0,
      );
      HermesBuiltin.arraySpread(
        items,
        getRouteHistory(history.routes, findIndexResult, backBehavior, require),
        arraySpreadResult,
      );
      combined = items;
    }
    return { index: findIndexResult, history: combined };
  }
  let closure_0 = tmp13;
  if ("history" === backBehavior) {
    found = history.filter((type) => "route" !== type.type || type.key !== key.key);
  } else {
    found = history;
    if ("fullHistory" === backBehavior) {
      let type;
      const findLastIndexResult = history.findLastIndex((type) => "route" === type.type);
      if (history[findLastIndexResult] != null) {
        type = tmp23.type;
      }
      found = history;
      const tmp16 = "route" === type && history.routes[findIndexResult].key === history[findLastIndexResult].key;
      if (tmp16) {
        const items1 = [];
        const arraySpreadResult5 = HermesBuiltin.arraySpread(items1, history.slice(0, findLastIndexResult), 0);
        HermesBuiltin.arraySpread(items1, history.slice(findLastIndexResult + 1), arraySpreadResult5);
        found = items1;
      }
    }
  }
  const obj = { type: route, key: history.routes[findIndexResult].key, params };
  params = undefined;
  const concat = found.concat;
  if ("fullHistory" === backBehavior) {
    params = tmp13.params;
  }
  combined = concat(obj);
}

export const SwitchRouter = function SwitchRouter(merged) {
  let backBehavior;
  ({ initialRouteName: require, backBehavior } = merged);
  if (backBehavior === undefined) {
    backBehavior = "firstRoute";
  }
  let obj = {
    getInitialState(arg0) {
      let closure_129_0;
      let obj2;
      let routeNames;
      ({ routeNames, routeParamList: closure_129_0 } = arg0);
      let num = 0;
      if (undefined !== require) {
        num = 0;
        if (routeNames.includes(require)) {
          num = routeNames.indexOf(require);
        }
      }
      const mapped = routeNames.map((name) => {
        let obj2;
        const obj = { name, key: "" + name + "-" + obj2.nanoid(), params: closure_1_0[name] };
        obj2 = closure_2_0(backBehavior[1]);
        return obj;
      });
      let obj = {
        stale: false,
        key: obj2.nanoid(),
        index: num,
        routeNames,
        history: getRouteHistory(mapped, num, backBehavior, require),
        routes: mapped,
        preloadedRouteKeys: [],
      };
      obj2 = nanoid;
      return obj;
    },
    getRehydratedState(index, arg1) {
      let closure_129_1;
      let found;
      let obj3;
      let routeNames;
      let closure_0 = index;
      ({ routeNames, routeParamList: closure_129_1 } = arg1);
      let mapped1;
      const mapped = routeNames.map((name) => {
        routes = name;
        routes = routes.routes;
        const found = routes.find((name) => name.name === closure_0);
        const obj = { name };
        const merged = Object.assign(found);
        if (found) {
          if (found.name === name) {
            let key;
            let params;
            if (found.key) {
              key = found.key;
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
              params = obj3;
            } else if (found) {
              params = found.params;
            }
            obj.params = params;
            return obj;
          }
        }
        const obj2 = closure_2_0(backBehavior[1]);
        key = "" + name + "-" + obj2.nanoid();
      });
      let num = index.index;
      const _Math = Math;
      const _Math2 = Math;
      const indexOf = routeNames.indexOf;
      let routes = index.routes;
      if (num == null) {
        num = 0;
      }
      let name;
      if (routes[num] != null) {
        name = tmp.name;
      }
      const minResult = min(max(indexOf(name), 0), mapped.length - 1);
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
      let obj = {
        stale: false,
        key: obj3.nanoid(),
        index: minResult,
        routeNames,
        history: items,
        routes: mapped,
        preloadedRouteKeys: found,
      };
      obj3 = nanoid;
      const preloadedRouteKeys = index.preloadedRouteKeys;
      found = undefined;
      if (preloadedRouteKeys != null) {
        found = preloadedRouteKeys.filter((item) => mapped1.includes(item));
      }
      if (found == null) {
        found = [];
      }
      let obj2 = {};
      let merged = Object.assign(obj);
      let merged1 = Object.assign(changeIndex(obj, minResult, backBehavior, require));
      return obj2;
    },
    getStateForRouteNamesChange(index, arg1) {
      let closure_129_1;
      let closure_129_2;
      let preloadedRouteKeys;
      let routeNames;
      require = index;
      ({ routeNames, routeParamList: closure_129_1, routeKeyChanges: closure_129_2 } = arg1);
      let closure_4;
      const mapped = routeNames.map((name) => {
        let obj2;
        closure_0 = name;
        const routes = closure_0.routes;
        let found = routes.find((name) => {
          const tmp = name.name === closure_0 && !closure_2_2.includes(name.name);
          return tmp;
        });
        if (found == null) {
          const _HermesInternal = HermesInternal;
          const obj = { name, key: "" + name + "-" + obj2.nanoid(), params: closure_1[name] };
          found = obj;
          obj2 = closure_0(closure_1_1[1]);
        }
        return found;
      });
      set = new Set(mapped.map((key) => key.key));
      if (null == index.routes[index.index]) {
        const _Error = Error;
        let _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("Couldn't find a route at index " + index.index + ".");
        throw error;
      } else {
        const history = index.history;
        let found = history.filter((type) => {
          const hasItem = "route" !== type.type || set.has(type.key);
          return hasItem;
        });
        index = routeNames.indexOf(tmp2.name);
        if (-1 === index) {
          closure_4 = found.findLast((type) => "route" === type.type);
          const _Math = Math;
          index = Math.max(
            0,
            mapped.findIndex((key) => {
              let key1;
              if (key.key != null) {
                key1 = key.key;
              }
              return key.key === key1;
            }),
          );
        }
        let obj = {
          routeNames,
          routes: mapped,
          preloadedRouteKeys: preloadedRouteKeys.filter((item) => set.has(item)),
        };
        const merged = Object.assign(index);
        let obj2 = { routes: mapped, history: found };
        const merged1 = Object.assign(changeIndex(obj2, index, backBehavior, require));
        preloadedRouteKeys = index.preloadedRouteKeys;
        return obj;
      }
    },
    getStateForRouteFocus(routes, require) {
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
    },
    getStateForAction(history, type, arg2) {
      let found1;
      let history1;
      let history3;
      let mapped;
      let params1;
      let preloadedRouteKeys;
      let preloadedRouteKeys2;
      let routeGetIdList;
      let routeParamList;
      let routes1;
      let closure_0 = history;
      let closure_1 = type;
      ({ routeParamList, routeGetIdList } = arg2);
      let findIndexResult1;
      let closure_3;
      let closure_4;
      let closure_5;
      let key;
      let c7;
      let c8;
      let closure_9;
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
                        const tmp28 =
                          "fullHistory" === backBehavior &&
                          routes2[findLastIndexResult].params !== history.history[history.history.length - 2].params;
                        if (tmp28) {
                          const items = [];
                          HermesBuiltin.arraySpread(items, history.routes, 0);
                          const obj2 = { params: history.history[history.history.length - 2].params };
                          const merged = Object.assign(items[findLastIndexResult]);
                          items[findLastIndexResult] = obj2;
                          routes2 = items;
                        }
                        const obj5 = {
                          routes: routes2,
                          preloadedRouteKeys: preloadedRouteKeys.filter((item) => item !== routes.routes[c7].key),
                          history: history1.slice(0, -1),
                          index: findLastIndexResult,
                        };
                        const merged1 = Object.assign(history);
                        preloadedRouteKeys = history.preloadedRouteKeys;
                        history1 = history.history;
                        return obj5;
                      }
                    }
                  }
                } else if ("PRELOAD" === type) {
                  const routes = history.routes;
                  const findIndexResult = routes.findIndex((name) => name.name === closure_1.payload.name);
                  c8 = findIndexResult;
                  if (-1 === findIndexResult) {
                    return null;
                  } else {
                    closure_9 = tmp88;
                    let tmp89Result;
                    if (routeGetIdList[history.routes[findIndexResult].name] != null) {
                      const obj = { params: history.routes[findIndexResult].params };
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
                      const name = tmp88.name;
                      const _HermesInternal = HermesInternal;
                      const obj3 = nanoid;
                      key = "" + name + "-" + obj3.nanoid();
                    }
                    const obj7 = { action: type, routeParamList };
                    const obj4 = _mod1503;
                    const paramsFromAction = obj4.createParamsFromAction(obj7);
                    let tmp13 = tmp88;
                    if (paramsFromAction !== history.routes[findIndexResult].params) {
                      obj8 = { key, params: paramsFromAction };
                      const merged2 = Object.assign(tmp88);
                      tmp13 = obj8;
                    }
                    obj8 = tmp13;
                    const history4 = history.history;
                    let tmp17 = history4;
                    if (key !== history.routes[findIndexResult].key) {
                      const found = history4.filter((type) => "route" !== type.type || type.key !== closure_9.key);
                      let combined = found;
                      if (findIndexResult === history.index) {
                        const obj9 = { type: route, key: tmp13.key, params: params1 };
                        params1 = undefined;
                        const concat = found.concat;
                        if ("fullHistory" === backBehavior) {
                          params1 = tmp13.params;
                        }
                        combined = concat(obj9);
                      }
                      tmp17 = combined;
                    }
                    const obj10 = {
                      preloadedRouteKeys: found1.concat(tmp13.key),
                      routes: routes1.map((item, index) => {
                        let tmp = item;
                        if (index === c8) {
                          tmp = obj8;
                        }
                        return tmp;
                      }),
                      history: tmp17,
                    };
                    const merged3 = Object.assign(history);
                    const preloadedRouteKeys1 = history.preloadedRouteKeys;
                    found1 = preloadedRouteKeys1.filter((item) => item !== closure_9.key);
                    routes1 = history.routes;
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
                closure_5 = tmp41;
                history = history.history;
                const findLastIndexResult1 = history.findLastIndex(
                  (type) => "route" === type.type && type.key === key2.key,
                );
                let history2 = history.history;
                if (-1 !== findLastIndexResult1) {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items1, history.history, 0);
                  history2 = items1;
                  if ("route" === items1[findLastIndexResult1].type) {
                    const obj11 = { params: stateForAction.routes[index].params };
                    const merged4 = Object.assign(tmp45);
                    items1[findLastIndexResult1] = obj11;
                    history2 = items1;
                  }
                }
                const obj12 = { history: history2 };
                const merged5 = Object.assign(stateForAction);
                return obj12;
              }
            }
            return stateForAction;
          }
        }
      }
      const routes3 = history.routes;
      findIndexResult1 = routes3.findIndex((name) => name.name === closure_1.payload.name);
      if (-1 === findIndexResult1) {
        return null;
      } else {
        closure_3 = tmp95;
        if (null == history.routes[findIndexResult1]) {
          const _Error = Error;
          const _HermesInternal3 = HermesInternal;
          const self = this;
          const self2 = this;
          const error = new Error("Couldn't find a route at index " + findIndexResult1 + ".");
          throw error;
        } else {
          let key2;
          let tmp97Result;
          if (routeGetIdList[history.routes[findIndexResult1].name] != null) {
            const obj13 = { params: history.routes[findIndexResult1].params };
            tmp97Result = tmp97(obj13);
          }
          let tmp97Result2;
          if (routeGetIdList[history.routes[findIndexResult1].name] != null) {
            const obj14 = { params: type.payload.params };
            tmp97Result2 = tmp97(obj14);
          }
          if (tmp97Result === tmp97Result2) {
            key2 = tmp95.key;
          } else {
            const name2 = tmp95.name;
            const _HermesInternal2 = HermesInternal;
            const obj16 = nanoid;
            key2 = "" + name2 + "-" + obj16.nanoid();
          }
          if ("NAVIGATE" === type.type) {
            if (type.payload.merge) {
              let params;
              if (tmp97Result === tmp97Result2) {
                if (undefined === type.payload.params) {
                  if (undefined === routeParamList[history.routes[findIndexResult1].name]) {
                    params = tmp95.params;
                  }
                }
                const obj15 = {};
                const merged6 = Object.assign(routeParamList[tmp95.name]);
                const merged7 = Object.assign(tmp95.params);
                const merged8 = Object.assign(type.payload.params);
                params = obj15;
              }
              if ("NAVIGATE" === type.type) {
                let path;
                if (null != type.payload.path) {
                  path = type.payload.path;
                }
                if (params === history.routes[findIndexResult1].params) {
                  let tmp66;
                  if (path === history.routes[findIndexResult1].path) {
                    tmp66 = tmp95;
                  }
                  closure_4 = tmp66;
                  const routes5 = history.routes;
                  const obj17 = { routes: mapped, history: history3 };
                  mapped = routes5.map((item, index) => {
                    let tmp = item;
                    if (index === findIndexResult1) {
                      tmp = key;
                    }
                    return tmp;
                  });
                  const merged9 = Object.assign(history);
                  if (key2 === history.routes[findIndexResult1].key) {
                    history3 = history.history;
                  } else {
                    const history5 = history.history;
                    history3 = history5.filter((type) => "route" !== type.type || type.key !== closure_3.key);
                  }
                  const obj19 = {
                    preloadedRouteKeys: preloadedRouteKeys2.filter(
                      (item) => item !== closure_3.key && item !== key.key,
                    ),
                  };
                  const merged10 = Object.assign(obj17);
                  const merged11 = Object.assign(changeIndex(obj17, findIndexResult1, backBehavior, require));
                  preloadedRouteKeys2 = obj17.preloadedRouteKeys;
                  return obj19;
                }
                const obj20 = { key: key2, path, params };
                const merged12 = Object.assign(tmp95);
                tmp66 = obj20;
              }
              path = tmp95.path;
            }
          }
          const obj21 = { action: type, routeParamList };
          const obj18 = _mod1503;
          params = obj18.createParamsFromAction(obj21);
        }
      }
    },
  };
  merged = Object.assign(require("BaseRouter").BaseRouter);
  return obj;
};
