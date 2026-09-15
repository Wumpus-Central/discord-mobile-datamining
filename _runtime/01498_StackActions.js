// _runtime/01498_StackActions.js
import BaseRouter2 from "01492_BaseRouter.js";
import nanoid from "01493_nanoid.js";
import _mod1497 from "metro/01497__.js";
import _mod1499 from "metro/01499__.js";

const require = globalThis.__r;

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
  },
};

export { StackActions };
export const StackRouter = function StackRouter(initialRouteName) {
  _require = initialRouteName;
  const actionCreators = {};
  let merged = Object.assign(require("BaseRouter").BaseRouter);
  actionCreators.type = "stack";
  actionCreators.getInitialState = function getInitialState(routeNames) {
    routeNames = routeNames.routeNames;
    if (undefined !== initialRouteName.initialRouteName) {
      if (routeNames.includes(initialRouteName.initialRouteName)) {
        initialRouteName = initialRouteName.initialRouteName;
      }
      obj = { stale: false, type: "stack", key: null, index: 0, routeNames: null, preloadedRoutes: null, routes: null };
      const _HermesInternal = HermesInternal;
      obj.key = "stack-" + nanoid.nanoid();
      obj.routeNames = routeNames;
      obj.preloadedRoutes = [];
      const obj3 = { key: null, name: null, params: null };
      const _HermesInternal2 = HermesInternal;
      obj3.key = "" + initialRouteName + "-" + nanoid.nanoid();
      obj3.name = initialRouteName;
      obj3.params = tmp[initialRouteName];
      const items = [obj3];
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
          const obj3 = {};
          const merged1 = Object.assign(tmp5[key.name]);
          const merged2 = Object.assign(key.params);
          let params = obj3;
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
            const obj3 = {};
            const merged1 = Object.assign(tmp5[key.name]);
            const merged2 = Object.assign(key.params);
            let params = obj3;
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
        let obj3 = {
          stale: false,
          type: "stack",
          key: null,
          index: null,
          routeNames: null,
          routes: null,
          preloadedRoutes: null,
        };
        const _HermesInternal2 = HermesInternal;
        obj3.key = "stack-" + nanoid.nanoid();
        obj3.index = mapped.length - 1;
        obj3.routeNames = routeNames;
        obj3.routes = mapped;
        obj3.preloadedRoutes = mapped1;
        return obj3;
      } else {
        let arr = initialRouteName;
        if (undefined === initialRouteName.initialRouteName) {
          initialRouteName = routeNames[0];
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
      const obj3 = {};
      const merged = Object.assign(routes);
      obj3.routeNames = routeNames;
      obj3.routes = found;
      const _Math = Math;
      obj3.index = Math.min(routes.index, found.length - 1);
      return obj3;
    } else {
      let arr = initialRouteName;
      if (undefined === initialRouteName.initialRouteName) {
        initialRouteName = routeNames[0];
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
        const routes1 = routes.routes;
        obj.routes = routes1.slice(0, findIndexResult + 1);
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
              let obj2 = { params: type.payload.params };
              tmp131Result = tmp131(obj2);
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
            key = found;
            if (found) {
              let obj3 = { action: type, routeParamList };
              const paramsFromAction = _mod1497.createParamsFromAction(obj3);
              if (found.params !== paramsFromAction) {
                const obj5 = {};
                let merged = Object.assign(found);
                obj5.params = paramsFromAction;
                key = obj5;
              }
              const tmp135Result = _mod1497;
            } else {
              const obj7 = { action: type, routeParamList };
              key = _mod1499.createRouteFromAction(obj7);
              const tmp135Result2 = _mod1499;
            }
            const obj9 = {};
            const merged1 = Object.assign(key);
            const routes1 = key.routes;
            obj9.routes = routes1.map((item, index) => {
              let tmp = item;
              if (index === index4) {
                tmp = closure_5;
              }
              return tmp;
            });
            const preloadedRoutes1 = key.preloadedRoutes;
            obj9.preloadedRoutes = preloadedRoutes1.filter((key) => key.key !== key.key);
            return obj9;
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
                const obj10 = { params: type.payload.params };
                tmp62Result = tmp62(obj10);
              }
              closure_11 = tmp62Result;
              const preloadedRoutes2 = key.preloadedRoutes;
              if (
                preloadedRoutes2.find((name) => {
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
                })
              ) {
                return null;
              } else {
                if (undefined !== tmp62Result) {
                  const routes5 = key.routes;
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
                  const routes4 = key.routes;
                  index3 = routes4.findLastIndex((name) => name.name === action.payload.name);
                }
                if (-1 === index3) {
                  const items = [];
                  const arraySpreadResult = HermesBuiltin.arraySpread(key.routes, 0);
                  const obj11 = { action: type, routeParamList };
                  items[arraySpreadResult] = _mod1499.createRouteFromAction(obj11);
                  const obj12 = {};
                  const merged2 = Object.assign(key);
                  obj12.routes = items;
                  obj12.index = items.length - 1;
                  return obj12;
                } else if (type.payload.merge) {
                  if (undefined === type.payload.params) {
                    if (undefined === routeParamList[tmp146.name]) {
                      let params2 = tmp146.params;
                    }
                  }
                  const obj13 = {};
                  const merged3 = Object.assign(routeParamList[tmp146.name]);
                  const merged4 = Object.assign(tmp146.params);
                  const merged5 = Object.assign(type.payload.params);
                  params2 = obj13;
                } else {
                  const obj14 = { action: type, routeParamList };
                  const paramsFromAction1 = _mod1497.createParamsFromAction(obj14);
                  const obj15 = {};
                  const merged6 = Object.assign(key);
                  obj15.index = index3;
                  const routes10 = key.routes;
                  const items1 = [];
                  if (paramsFromAction1 !== tmp146.params) {
                    const obj16 = {};
                    const merged7 = Object.assign(tmp146);
                    obj16.params = paramsFromAction1;
                    let tmp80 = obj16;
                  } else {
                    tmp80 = key.routes[index3];
                  }
                  items1[HermesBuiltin.arraySpread(routes10.slice(0, index3), 0)] = tmp80;
                  obj15.routes = items1;
                  return obj15;
                }
              }
            } else {
              return null;
            }
          } else if ("POP" === type) {
            if (type.target === key.key) {
              if (type.source) {
                const routes3 = key.routes;
                let index2 = routes3.findIndex((key) => key.key === action.source);
              }
              if (-1 === index2) {
                return null;
              } else if (index2 > 0) {
                const _Math = Math;
                const routes11 = key.routes;
                const substr = routes11.slice(0, Math.max(index2 - type.payload.count + 1, 1));
                const routes12 = key.routes;
                const combined = substr.concat(routes12.slice(index2 + 1));
                const obj17 = {};
                const merged8 = Object.assign(key);
                obj17.index = combined.length - 1;
                obj17.routes = combined;
                return obj17;
              } else {
                return null;
              }
            }
            index2 = key.index;
          } else if ("POP_TO_TOP" === type) {
            action = { type: "POP", payload: null };
            const obj18 = { count: key.routes.length - 1 };
            action.payload = obj18;
            return obj.getStateForAction(key, action, routeParamList);
          } else if ("POP_TO" === type) {
            if (type.target === key.key) {
              if (type.source) {
                const routes = key.routes;
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
                    const obj19 = { params: type.payload.params };
                    tmp18Result = tmp18(obj19);
                  }
                  closure_13 = tmp18Result;
                  if (undefined !== tmp18Result) {
                    const routes2 = key.routes;
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
                      const obj20 = { action: type, routeParamList };
                      const paramsFromAction2 = _mod1497.createParamsFromAction(obj20);
                      routeFromAction = found1;
                      if (found1.params !== paramsFromAction2) {
                        const obj21 = {};
                        const merged9 = Object.assign(found1);
                        obj21.params = paramsFromAction2;
                        routeFromAction = obj21;
                      }
                      const tmp43Result = _mod1497;
                    } else {
                      const obj22 = { action: type, routeParamList };
                      routeFromAction = _mod1499.createRouteFromAction(obj22);
                      const tmp43Result2 = _mod1499;
                    }
                    const routes13 = key.routes;
                    const substr1 = routes13.slice(0, index);
                    const combined1 = substr1.concat(routeFromAction);
                    const obj23 = {};
                    const merged10 = Object.assign(key);
                    obj23.index = combined1.length - 1;
                    obj23.routes = combined1;
                    const preloadedRoutes4 = key.preloadedRoutes;
                    obj23.preloadedRoutes = preloadedRoutes4.filter((key) => key.key !== routeFromAction.key);
                    return obj23;
                  } else if (type.payload.merge) {
                    if (undefined === type.payload.params) {
                      if (undefined === routeParamList[tmp145.name]) {
                        let params = tmp145.params;
                      }
                    }
                    const obj24 = {};
                    const merged11 = Object.assign(routeParamList[tmp145.name]);
                    const merged12 = Object.assign(tmp145.params);
                    const merged13 = Object.assign(type.payload.params);
                    params = obj24;
                  } else {
                    const obj26 = { action: type, routeParamList };
                    const paramsFromAction3 = _mod1497.createParamsFromAction(obj26);
                    const obj27 = {};
                    const merged14 = Object.assign(key);
                    obj27.index = num3;
                    const routes14 = key.routes;
                    const items2 = [];
                    if (paramsFromAction3 !== tmp145.params) {
                      const obj28 = {};
                      const merged15 = Object.assign(tmp145);
                      obj28.params = paramsFromAction3;
                      let tmp38 = obj28;
                    } else {
                      tmp38 = key.routes[num3];
                    }
                    items2[HermesBuiltin.arraySpread(routes14.slice(0, num3), 0)] = tmp38;
                    obj27.routes = items2;
                    return obj27;
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
                const routes15 = key.routes;
                const found2 = routes15.find((name) => {
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
              const obj29 = {};
              const merged16 = Object.assign(key);
              if (tmp7) {
                const routes16 = key.routes;
                obj29.routes = routes16.map((key) => {
                  key = undefined;
                  if (found2 != null) {
                    key = found2.key;
                  }
                  let tmp2 = key;
                  if (key.key === key) {
                    obj = {};
                    const merged = Object.assign(key);
                    const obj3 = { action, routeParamList };
                    obj.params = action(obj[3]).createParamsFromAction(obj3);
                    tmp2 = obj;
                    const obj2 = action(obj[3]);
                  }
                  return tmp2;
                });
                let tmp14 = obj29;
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
                const obj31 = { action: type, routeParamList };
                obj29.preloadedRoutes = found3.concat(_mod1499.createRouteFromAction(obj31));
                tmp14 = obj29;
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
          const obj32 = { params: type.payload.params };
          tmp92Result = tmp92(obj32);
        }
        closure_9 = tmp92Result;
        if (undefined !== tmp92Result) {
          const routes7 = key.routes;
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
            const routes6 = key.routes;
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
              const obj33 = {};
              const merged17 = Object.assign(routeParamList[type.payload.name]);
              const merged18 = Object.assign(tmp95.params);
              const merged19 = Object.assign(type.payload.params);
              params3 = obj33;
            }
          }
        }
        const obj35 = { action: type, routeParamList };
        const paramsFromAction4 = _mod1497.createParamsFromAction(obj35);
        if (tmp95) {
          if ("NAVIGATE" === type.type) {
            if (type.payload.pop) {
              const items3 = [];
              let items4 = items3;
              const routes8 = key.routes;
              let arr19 = items3;
              for (const item10441 of routes8) {
                if (item10441.key === tmp95.key) {
                  let obj36 = {};
                  let merged20 = Object.assign(tmp95);
                  if (undefined !== arg1.payload.path) {
                    let path2 = arg1.payload.path;
                  } else {
                    path2 = tmp95.path;
                  }
                  obj36.path = path2;
                  obj36.params = paramsFromAction4;
                  obj36 = items3.push(obj36);
                } else {
                  let arr = items3.push(tmp121);
                  continue;
                }
              }
            }
          }
          const routes17 = key.routes;
          const found5 = routes17.filter((key) => key.key !== found4.key);
          items4 = found5;
          const obj37 = {};
          const merged21 = Object.assign(tmp95);
          if ("NAVIGATE" === type.type) {
            if (undefined !== type.payload.path) {
              let path = type.payload.path;
            }
            obj37.path = path;
            obj37.params = paramsFromAction4;
            found5.push(obj37);
            arr19 = found5;
          }
          path = tmp95.path;
        } else {
          items4 = [];
          const obj39 = { key: null, name: null, path: null, params: null };
          const arraySpreadResult6 = HermesBuiltin.arraySpread(key.routes, 0);
          const _HermesInternal = HermesInternal;
          obj39.key = "" + type.payload.name + "-" + nanoid.nanoid();
          obj39.name = type.payload.name;
          let path1;
          if ("NAVIGATE" === type.type) {
            path1 = type.payload.path;
          }
          obj39.path = path1;
          obj39.params = paramsFromAction4;
          items4[arraySpreadResult6] = obj39;
          arr19 = items4;
        }
        const obj40 = {};
        const merged22 = Object.assign(key);
        obj40.index = arr19.length - 1;
        const preloadedRoutes7 = key.preloadedRoutes;
        obj40.preloadedRoutes = preloadedRoutes7.filter((key) => items4[items4.length - 1].key !== key.key);
        obj40.routes = arr19;
      } else {
        return null;
      }
    }
  };
  actionCreators.actionCreators = actionCreators;
  return actionCreators;
};
