// === Module 1497: StackActions ===

// Module 1497 (StackActions)
import BaseRouter2 from "BaseRouter" /* 1491 */;
import nanoid from "nanoid" /* 1492 */;
import _mod1496 from "module_1496" /* 1496 */;
import _mod1498 from "module_1498" /* 1498 */;

require = arg1;
const dependencyMap = arg6;
const StackActions = {
  replace(name, params) {
    const action = { type: "REPLACE", payload: null };
    const payload = { name, params };
    action.payload = payload;
    return action;
  },
  push(name, params) {
    const action = { type: "PUSH", payload: null };
    const payload = { name, params };
    action.payload = payload;
    return action;
  },
  pop() {
    let num = arg0;
    if (arg0 === undefined) {
      num = 1;
    }
    const action = { type: "POP", payload: { count: num } };
    return action;
  },
  popToTop() {
    return { type: "POP_TO_TOP" };
  },
  popTo(name, params, merge) {
    if (typeof merge === "boolean") {
      const _console = console;
      console.warn("Passing a boolean as the third argument to 'popTo' is deprecated. Pass '{ merge: true }' instead.");
    }
    const payload = { name, params, merge: null };
    let tmp = merge;
    if (typeof merge !== "boolean") {
      merge = undefined;
      if (merge != null) {
        merge = merge.merge;
      }
      tmp = merge;
    }
    payload.merge = tmp;
    return { type: "POP_TO", payload };
  }
};

export { StackActions };
export const StackRouter = function StackRouter(arg0) {
  _require = arg0;
  const actionCreators = {};
  let merged = Object.assign(require("BaseRouter").BaseRouter);
  actionCreators.type = "stack";
  actionCreators.getInitialState = function getInitialState(routeNames) {
    routeNames = routeNames.routeNames;
    if (undefined !== closure_0.initialRouteName) {
      if (routeNames.includes(tmp2.initialRouteName)) {
        let initialRouteName = tmp2.initialRouteName;
      }
      obj = { stale: false, type: "stack", key: null, index: 0, routeNames: null, preloadedRoutes: null, routes: null };
      const _HermesInternal = HermesInternal;
      obj.key = "stack-" + nanoid.nanoid();
      obj.routeNames = routeNames;
      obj.preloadedRoutes = [];
      obj = { key: null, name: null, params: null };
      const _HermesInternal2 = HermesInternal;
      obj.key = "" + initialRouteName + "-" + nanoid.nanoid();
      obj.name = initialRouteName;
      obj.params = tmp[initialRouteName];
      const items = [obj];
      obj.routes = items;
      return obj;
    }
    initialRouteName = routeNames[0];
  };
  actionCreators.getRehydratedState = function getRehydratedState(stale, routeNames) {
    routeNames = routeNames.routeNames;
    const routeParamList = routeNames.routeParamList;
    if (false === stale.stale) {
      return stale;
    } else {
      const routes = stale.routes;
      const found = routes.filter((name) => routeNames.includes(name.name));
      const mapped = found.map((key) => {
        obj = {};
        const merged = Object.assign(key);
        key = key.key;
        if (!key) {
          const _HermesInternal = HermesInternal;
          key = "" + key.name + "-" + closure_0(obj[1]).nanoid();
          const obj2 = closure_0(obj[1]);
        }
        obj.key = key;
        if (undefined !== routeParamList[key.name]) {
          obj = {};
          const merged1 = Object.assign(tmp5[key.name]);
          const merged2 = Object.assign(key.params);
          let params = obj;
        } else {
          params = key.params;
        }
        obj.params = params;
        return obj;
      });
      const preloadedRoutes = stale.preloadedRoutes;
      let mapped1;
      if (preloadedRoutes != null) {
        const found1 = preloadedRoutes.filter((name) => routeNames.includes(name.name));
        mapped1 = found1.map((key) => {
          obj = {};
          const merged = Object.assign(key);
          key = key.key;
          if (!key) {
            const _HermesInternal = HermesInternal;
            key = "" + key.name + "-" + closure_0(obj[1]).nanoid();
            const obj2 = closure_0(obj[1]);
          }
          obj.key = key;
          if (undefined !== routeParamList[key.name]) {
            obj = {};
            const merged1 = Object.assign(tmp5[key.name]);
            const merged2 = Object.assign(key.params);
            let params = obj;
          } else {
            params = key.params;
          }
          obj.params = params;
          return obj;
        });
      }
      if (mapped1 == null) {
        mapped1 = [];
      }
      if (0 !== mapped.length) {
        obj = { stale: false, type: "stack", key: null, index: null, routeNames: null, routes: null, preloadedRoutes: null };
        const _HermesInternal2 = HermesInternal;
        obj.key = "stack-" + nanoid.nanoid();
        obj.index = mapped.length - 1;
        obj.routeNames = routeNames;
        obj.routes = mapped;
        obj.preloadedRoutes = mapped1;
        return obj;
      } else {
        let arr = closure_0;
        if (undefined === closure_0.initialRouteName) {
          let initialRouteName = routeNames[0];
          obj = { key: null, name: null, params: null };
          let _HermesInternal = HermesInternal;
          obj.key = "" + initialRouteName + "-" + nanoid.nanoid();
          obj.name = initialRouteName;
          obj.params = routeParamList[initialRouteName];
          arr = mapped.push(obj);
        }
        initialRouteName = arr.initialRouteName;
      }
    }
  };
  actionCreators.getStateForRouteNamesChange = function getStateForRouteNamesChange(routes, routeNames) {
    routeNames = routeNames.routeNames;
    const routeKeyChanges = routeNames.routeKeyChanges;
    routes = routes.routes;
    const found = routes.filter((name) => {
      let hasItem = routeNames.includes(name.name);
      if (hasItem) {
        hasItem = !routeKeyChanges.includes(name.name);
      }
      return hasItem;
    });
    if (0 !== found.length) {
      obj = {};
      const merged = Object.assign(routes);
      obj.routeNames = routeNames;
      obj.routes = found;
      const _Math = Math;
      obj.index = Math.min(routes.index, found.length - 1);
      return obj;
    } else {
      let arr = closure_0;
      if (undefined === closure_0.initialRouteName) {
        let initialRouteName = routeNames[0];
        obj = { key: null, name: null, params: null };
        const _HermesInternal = HermesInternal;
        obj.key = "" + initialRouteName + "-" + nanoid.nanoid();
        obj.name = initialRouteName;
        obj.params = routeNames.routeParamList[initialRouteName];
        arr = found.push(obj);
      }
      initialRouteName = arr.initialRouteName;
    }
  };
  actionCreators.getStateForRouteFocus = function getStateForRouteFocus(routes, arg1) {
    closure_0 = arg1;
    routes = routes.routes;
    const findIndexResult = routes.findIndex((key) => key.key === closure_0);
    let tmp2 = routes;
    if (-1 !== findIndexResult) {
      tmp2 = routes;
      if (findIndexResult !== routes.index) {
        obj = {};
        const merged = Object.assign(routes);
        obj.index = findIndexResult;
        routes = routes.routes;
        obj.routes = routes.slice(0, findIndexResult + 1);
        tmp2 = obj;
      }
    }
    return tmp2;
  };
  actionCreators.getStateForAction = function getStateForAction(key, type, routeParamList) {
    let action = type;
    routeParamList = routeParamList.routeParamList;
    type = type.type;
    if ("REPLACE" === type) {
      if (type.target === key.key) {
        if (type.source) {
          const routes9 = key.routes;
          let index4 = routes9.findIndex((key) => key.key === action.source);
        }
        if (-1 === index4) {
          return null;
        } else {
          const routeNames5 = key.routeNames;
          if (routeNames5.includes(type.payload.name)) {
            closure_3 = tmp131;
            let tmp131Result;
            if (routeParamList.routeGetIdList[type.payload.name] != null) {
              obj = { params: type.payload.params };
              tmp131Result = tmp131(obj);
            }
            closure_4 = tmp131Result;
            const preloadedRoutes = key.preloadedRoutes;
            const found = preloadedRoutes.find((name) => {
              let tmp = name.name === action.payload.name;
              if (tmp) {
                let tmp3Result;
                if (closure_3 != null) {
                  obj = { params: name.params };
                  tmp3Result = tmp3(obj);
                }
                tmp = closure_4 === tmp3Result;
              }
              return tmp;
            });
            if (found) {
              let tmp135Result = tmp135(1496);
              obj = { action: type, routeParamList };
              const paramsFromAction = tmp135Result.createParamsFromAction(obj);
              if (found.params !== paramsFromAction) {
                const obj1 = {};
                let merged = Object.assign(found);
                obj1.params = paramsFromAction;
              }
            } else {
              tmp135Result = tmp135(1498);
              let obj2 = { action: type, routeParamList };
              tmp135Result.createRouteFromAction(obj2);
            }
            let obj3 = {};
            const merged1 = Object.assign(key);
            let routes = key.routes;
            obj3.routes = routes.map((item, index) => {
              let tmp = item;
              if (index === index4) {
                tmp = closure_5;
              }
              return tmp;
            });
            const preloadedRoutes1 = key.preloadedRoutes;
            obj3.preloadedRoutes = preloadedRoutes1.filter((key) => key.key !== key.key);
            return obj3;
          } else {
            return null;
          }
        }
      }
      index4 = key.index;
    } else {
      if ("PUSH" !== type) {
        if ("NAVIGATE" !== type) {
          if ("NAVIGATE_DEPRECATED" === type) {
            const routeNames2 = key.routeNames;
            if (routeNames2.includes(type.payload.name)) {
              closure_10 = tmp62;
              let tmp62Result;
              if (routeParamList.routeGetIdList[type.payload.name] != null) {
                const obj4 = { params: type.payload.params };
                tmp62Result = tmp62(obj4);
              }
              closure_11 = tmp62Result;
              const preloadedRoutes2 = key.preloadedRoutes;
              if (preloadedRoutes2.find((name) => {
                let tmp = name.name === action.payload.name;
                if (tmp) {
                  let tmp3Result;
                  if (closure_10 != null) {
                    obj = { params: name.params };
                    tmp3Result = tmp3(obj);
                  }
                  tmp = closure_11 === tmp3Result;
                }
                return tmp;
              })) {
                return null;
              } else {
                if (undefined !== tmp62Result) {
                  let routes5 = key.routes;
                  let index3 = routes5.findIndex((name) => {
                    let tmp = name.name === action.payload.name;
                    if (tmp) {
                      let tmp3Result;
                      if (closure_10 != null) {
                        obj = { params: name.params };
                        tmp3Result = tmp3(obj);
                      }
                      tmp = closure_11 === tmp3Result;
                    }
                    return tmp;
                  });
                } else if (key.routes[key.index].name === type.payload.name) {
                  index3 = key.index;
                } else {
                  let routes4 = key.routes;
                  index3 = routes4.findLastIndex((name) => name.name === action.payload.name);
                }
                if (-1 === index3) {
                  const items = [];
                  let arraySpreadResult = HermesBuiltin.arraySpread(key.routes, 0);
                  let obj29 = _mod1498;
                  const obj5 = { action: type, routeParamList };
                  items[arraySpreadResult] = obj29.createRouteFromAction(obj5);
                  const obj6 = {};
                  const merged2 = Object.assign(key);
                  obj6.routes = items;
                  obj6.index = items.length - 1;
                  return obj6;
                } else if (type.payload.merge) {
                  if (undefined === type.payload.params) {
                    if (undefined === routeParamList[tmp146.name]) {
                      let params2 = tmp146.params;
                    }
                  }
                  let obj7 = {};
                  const merged3 = Object.assign(routeParamList[tmp146.name]);
                  const merged4 = Object.assign(tmp146.params);
                  const merged5 = Object.assign(type.payload.params);
                  params2 = obj7;
                } else {
                  let obj24 = _mod1496;
                  const obj8 = { action: type, routeParamList };
                  const paramsFromAction1 = obj24.createParamsFromAction(obj8);
                  const obj9 = {};
                  const merged6 = Object.assign(key);
                  obj9.index = index3;
                  const routes1 = key.routes;
                  const items1 = [];
                  arraySpreadResult = HermesBuiltin.arraySpread(routes1.slice(0, index3), 0);
                  if (paramsFromAction1 !== tmp146.params) {
                    const obj10 = {};
                    const merged7 = Object.assign(tmp146);
                    obj10.params = paramsFromAction1;
                    let tmp80 = obj10;
                  } else {
                    tmp80 = key.routes[index3];
                  }
                  items1[arraySpreadResult] = tmp80;
                  obj9.routes = items1;
                  return obj9;
                }
              }
            } else {
              return null;
            }
          } else if ("POP" === type) {
            if (type.target === key.key) {
              if (type.source) {
                let routes3 = key.routes;
                let index2 = routes3.findIndex((key) => key.key === action.source);
              }
              if (-1 === index2) {
                return null;
              } else if (index2 > 0) {
                const _Math = Math;
                let routes2 = key.routes;
                const substr = routes2.slice(0, Math.max(index2 - type.payload.count + 1, 1));
                routes3 = key.routes;
                const combined = substr.concat(routes3.slice(index2 + 1));
                const obj11 = {};
                const merged8 = Object.assign(key);
                obj11.index = combined.length - 1;
                obj11.routes = combined;
                return obj11;
              } else {
                return null;
              }
            }
            index2 = key.index;
          } else if ("POP_TO_TOP" === type) {
            action = { type: "POP", payload: null };
            const obj12 = { count: key.routes.length - 1 };
            action.payload = obj12;
            return obj.getStateForAction(key, action, routeParamList);
          } else if ("POP_TO" === type) {
            if (type.target === key.key) {
              if (type.source) {
                routes = key.routes;
                let index = routes.findLastIndex((key) => key.key === action.source);
              }
              if (-1 === index) {
                return null;
              } else {
                const routeNames4 = key.routeNames;
                if (routeNames4.includes(type.payload.name)) {
                  closure_12 = tmp18;
                  let tmp18Result;
                  if (routeParamList.routeGetIdList[type.payload.name] != null) {
                    const obj13 = { params: type.payload.params };
                    tmp18Result = tmp18(obj13);
                  }
                  closure_13 = tmp18Result;
                  if (undefined !== tmp18Result) {
                    routes2 = key.routes;
                    let num3 = routes2.findIndex((name) => {
                      let tmp = name.name === action.payload.name;
                      if (tmp) {
                        let tmp3Result;
                        if (closure_12 != null) {
                          obj = { params: name.params };
                          tmp3Result = tmp3(obj);
                        }
                        tmp = closure_13 === tmp3Result;
                      }
                      return tmp;
                    });
                  } else {
                    num3 = index;
                    if (key.routes[index].name !== type.payload.name) {
                      let diff = index;
                      num3 = -1;
                      if (index >= 0) {
                        num3 = diff;
                        while (key.routes[diff].name !== type.payload.name) {
                          diff = diff - 1;
                          num3 = -1;
                          if (diff >= 0) {
                            continue;
                          } else {
                            break;
                          }
                          break;
                        }
                      }
                    }
                  }
                  if (-1 === num3) {
                    const preloadedRoutes3 = key.preloadedRoutes;
                    const found1 = preloadedRoutes3.find((name) => {
                      let tmp = name.name === action.payload.name;
                      if (tmp) {
                        let tmp3Result;
                        if (closure_12 != null) {
                          obj = { params: name.params };
                          tmp3Result = tmp3(obj);
                        }
                        tmp = closure_13 === tmp3Result;
                      }
                      return tmp;
                    });
                    let routeFromAction = found1;
                    if (found1) {
                      let tmp43Result = tmp43(1496);
                      const obj14 = { action: type, routeParamList };
                      const paramsFromAction2 = tmp43Result.createParamsFromAction(obj14);
                      routeFromAction = found1;
                      if (found1.params !== paramsFromAction2) {
                        const obj15 = {};
                        const merged9 = Object.assign(found1);
                        obj15.params = paramsFromAction2;
                        routeFromAction = obj15;
                      }
                    } else {
                      tmp43Result = tmp43(1498);
                      const obj16 = { action: type, routeParamList };
                      routeFromAction = tmp43Result.createRouteFromAction(obj16);
                    }
                    routes4 = key.routes;
                    const substr1 = routes4.slice(0, index);
                    const combined1 = substr1.concat(routeFromAction);
                    const obj17 = {};
                    const merged10 = Object.assign(key);
                    obj17.index = combined1.length - 1;
                    obj17.routes = combined1;
                    const preloadedRoutes4 = key.preloadedRoutes;
                    obj17.preloadedRoutes = preloadedRoutes4.filter((key) => key.key !== routeFromAction.key);
                    return obj17;
                  } else if (type.payload.merge) {
                    if (undefined === type.payload.params) {
                      if (undefined === routeParamList[tmp145.name]) {
                        let params = tmp145.params;
                      }
                    }
                    const obj18 = {};
                    const merged11 = Object.assign(routeParamList[tmp145.name]);
                    const merged12 = Object.assign(tmp145.params);
                    const merged13 = Object.assign(type.payload.params);
                    params = obj18;
                  } else {
                    obj7 = _mod1496;
                    const obj19 = { action: type, routeParamList };
                    const paramsFromAction3 = obj7.createParamsFromAction(obj19);
                    const obj20 = {};
                    const merged14 = Object.assign(key);
                    obj20.index = num3;
                    routes5 = key.routes;
                    const items2 = [];
                    if (paramsFromAction3 !== tmp145.params) {
                      const obj21 = {};
                      const merged15 = Object.assign(tmp145);
                      obj21.params = paramsFromAction3;
                      let tmp38 = obj21;
                    } else {
                      tmp38 = key.routes[num3];
                    }
                    items2[HermesBuiltin.arraySpread(routes5.slice(0, num3), 0)] = tmp38;
                    obj20.routes = items2;
                    return obj20;
                  }
                } else {
                  return null;
                }
              }
            }
            index = key.index;
          } else if ("GO_BACK" === type) {
            let stateForAction = null;
            if (key.index > 0) {
              const action1 = { type: "POP", payload: { count: 1 }, target: null, source: null };
              ({ target: obj6.target, source: obj6.source } = type);
              stateForAction = obj.getStateForAction(key, action1, routeParamList);
            }
            return stateForAction;
          } else if ("PRELOAD" === type) {
            const routeNames = key.routeNames;
            if (routeNames.includes(type.payload.name)) {
              closure_16 = tmp4;
              let tmp4Result;
              if (routeParamList.routeGetIdList[type.payload.name] != null) {
                obj = { params: type.payload.params };
                tmp4Result = tmp4(obj);
              }
              closure_17 = tmp4Result;
              let tmp7;
              if (undefined !== tmp4Result) {
                let routes6 = key.routes;
                const found2 = routes6.find((name) => {
                  let tmp = name.name === action.payload.name;
                  if (tmp) {
                    let tmp3Result;
                    if (closure_16 != null) {
                      obj = { params: name.params };
                      tmp3Result = tmp3(obj);
                    }
                    tmp = closure_17 === tmp3Result;
                  }
                  return tmp;
                });
                tmp7 = found2;
              }
              const obj22 = {};
              const merged16 = Object.assign(key);
              if (tmp7) {
                let routes7 = key.routes;
                obj22.routes = routes7.map((key) => {
                  key = undefined;
                  if (found2 != null) {
                    key = found2.key;
                  }
                  let tmp2 = key;
                  if (key.key === key) {
                    obj = {};
                    const merged = Object.assign(key);
                    obj = { action, routeParamList };
                    obj.params = action(obj[3]).createParamsFromAction(obj);
                    tmp2 = obj;
                    const obj2 = action(obj[3]);
                  }
                  return tmp2;
                });
                let tmp14 = obj22;
              } else {
                const preloadedRoutes5 = key.preloadedRoutes;
                const found3 = preloadedRoutes5.filter((name) => {
                  let tmp = name.name !== action.payload.name;
                  if (!tmp) {
                    let tmp3Result;
                    if (closure_16 != null) {
                      obj = { params: name.params };
                      tmp3Result = tmp3(obj);
                    }
                    tmp = closure_17 !== tmp3Result;
                  }
                  return tmp;
                });
                obj3 = _mod1498;
                const obj23 = { action: type, routeParamList };
                obj22.preloadedRoutes = found3.concat(obj3.createRouteFromAction(obj23));
                tmp14 = obj22;
              }
              return tmp14;
            } else {
              return null;
            }
          } else {
            const BaseRouter = BaseRouter2.BaseRouter;
            return BaseRouter.getStateForAction(key, type);
          }
        }
      }
      const routeNames3 = key.routeNames;
      if (routeNames3.includes(type.payload.name)) {
        closure_8 = tmp92;
        let tmp92Result;
        if (routeParamList.routeGetIdList[type.payload.name] != null) {
          obj24 = { params: type.payload.params };
          tmp92Result = tmp92(obj24);
        }
        closure_9 = tmp92Result;
        if (undefined !== tmp92Result) {
          routes7 = key.routes;
          const findLastResult = routes7.findLast((name) => {
            let tmp = name.name === action.payload.name;
            if (tmp) {
              let tmp3Result;
              if (closure_8 != null) {
                obj = { params: name.params };
                tmp3Result = tmp3(obj);
              }
              tmp = closure_9 === tmp3Result;
            }
            return tmp;
          });
          let found4 = findLastResult;
          let tmp95 = findLastResult;
        } else if ("NAVIGATE" === type.type) {
          if (type.payload.name === key.routes[key.index].name) {
            found4 = tmp147;
            tmp95 = tmp147;
          } else if (type.payload.pop) {
            routes6 = key.routes;
            const findLastResult1 = routes6.findLast((name) => name.name === action.payload.name);
            found4 = findLastResult1;
            tmp95 = findLastResult1;
          }
        }
        if (!tmp95) {
          const preloadedRoutes6 = key.preloadedRoutes;
          found4 = preloadedRoutes6.find((name) => {
            let tmp = name.name === action.payload.name;
            if (tmp) {
              let tmp3Result;
              if (closure_8 != null) {
                obj = { params: name.params };
                tmp3Result = tmp3(obj);
              }
              tmp = closure_9 === tmp3Result;
            }
            return tmp;
          });
          tmp95 = found4;
        }
        if ("NAVIGATE" === type.type) {
          if (type.payload.merge) {
            if (tmp95) {
              if (undefined === type.payload.params) {
                if (undefined === routeParamList[type.payload.name]) {
                  let params3 = tmp95.params;
                }
              }
              const obj25 = {};
              const merged17 = Object.assign(routeParamList[type.payload.name]);
              const merged18 = Object.assign(tmp95.params);
              const merged19 = Object.assign(type.payload.params);
              params3 = obj25;
            }
          }
        }
        const obj26 = { action: type, routeParamList };
        const paramsFromAction4 = _mod1496.createParamsFromAction(obj26);
        if (tmp95) {
          if ("NAVIGATE" === type.type) {
            if (type.payload.pop) {
              const items3 = [];
              let items4 = items3;
              let routes8 = key.routes;
              let arr19 = items3;
              for (const item10441 of routes8) {
                if (item10441.key === tmp95.key) {
                  let obj27 = {};
                  let merged20 = Object.assign(tmp95);
                  if (undefined !== arg1.payload.path) {
                    let path2 = arg1.payload.path;
                  } else {
                    path2 = tmp95.path;
                  }
                  obj27.path = path2;
                  obj27.params = paramsFromAction4;
                  obj27 = items3.push(obj27);
                } else {
                  let arr = items3.push(tmp121);
                  continue;
                }
              }
            }
          }
          routes8 = key.routes;
          const found5 = routes8.filter((key) => key.key !== found4.key);
          items4 = found5;
          const obj28 = {};
          const merged21 = Object.assign(tmp95);
          if ("NAVIGATE" === type.type) {
            if (undefined !== type.payload.path) {
              let path = type.payload.path;
            }
            obj28.path = path;
            obj28.params = paramsFromAction4;
            found5.push(obj28);
            arr19 = found5;
          }
          path = tmp95.path;
        } else {
          items4 = [];
          obj29 = { key: null, name: null, path: null, params: null };
          const arraySpreadResult2 = HermesBuiltin.arraySpread(key.routes, 0);
          const _HermesInternal = HermesInternal;
          obj29.key = "" + type.payload.name + "-" + nanoid.nanoid();
          obj29.name = type.payload.name;
          path = undefined;
          if ("NAVIGATE" === type.type) {
            path = type.payload.path;
          }
          obj29.path = path;
          obj29.params = paramsFromAction4;
          items4[arraySpreadResult2] = obj29;
          arr19 = items4;
        }
        const obj30 = {};
        const merged22 = Object.assign(key);
        obj30.index = arr19.length - 1;
        const preloadedRoutes7 = key.preloadedRoutes;
        obj30.preloadedRoutes = preloadedRoutes7.filter((key) => items4[items4.length - 1].key !== key.key);
        obj30.routes = arr19;
      } else {
        return null;
      }
    }
  };
  actionCreators.actionCreators = actionCreators;
  return actionCreators;
};