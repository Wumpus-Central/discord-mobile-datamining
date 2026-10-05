// _runtime/01504_StackActions.js
import BaseRouter2 from "01498_BaseRouter.js";
import nanoid from "01499_nanoid.js";
import _mod1503 from "metro/01503__.js";
import _mod1505 from "metro/01505__.js";

const require = globalThis.__r;
let _require, closure_12, obj;

const StackActions = {
  replace(name, params) {
    let payload;
    const action = { type: "REPLACE", payload };
    payload = { name, params };
    return action;
  },
  push(name, params) {
    let payload;
    const action = { type: "PUSH", payload };
    payload = { name, params };
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
  popTo(WEBAUTHN_VIEW, params, arg2) {
    let tmp;
    if (typeof arg2 === "boolean") {
      const _console = console;
      console.warn("Passing a boolean as the third argument to 'popTo' is deprecated. Pass '{ merge: true }' instead.");
    }
    const payload = { name: WEBAUTHN_VIEW, params, merge: tmp };
    tmp = arg2;
    if (typeof arg2 !== "boolean") {
      let merge;
      if (arg2 != null) {
        merge = arg2.merge;
      }
      tmp = merge;
    }
    return { type: "POP_TO", payload };
  },
};

export { StackActions };
export const StackRouter = function StackRouter(initialRouteName) {
  let actionCreators;
  _require = initialRouteName;
  actionCreators = {
    type: "stack",
    getInitialState(routeNames) {
      let items;
      let obj2;
      let obj4;
      routeNames = routeNames.routeNames;
      if (undefined !== initialRouteName.initialRouteName) {
        if (routeNames.includes(initialRouteName.initialRouteName)) {
          initialRouteName = initialRouteName.initialRouteName;
        }
        const _HermesInternal = HermesInternal;
        obj = {
          stale: false,
          type: "stack",
          key: "stack-" + obj2.nanoid(),
          index: 0,
          routeNames,
          preloadedRoutes: [],
          routes: items,
        };
        obj2 = nanoid;
        const _HermesInternal2 = HermesInternal;
        const obj3 = {
          key: "" + initialRouteName + "-" + obj4.nanoid(),
          name: initialRouteName,
          params: tmp[initialRouteName],
        };
        items = [obj3];
        obj4 = nanoid;
        return obj;
      }
      initialRouteName = routeNames[0];
    },
    getRehydratedState(stale, routeNames) {
      let obj2;
      let obj4;
      routeNames = routeNames.routeNames;
      const routeParamList = routeNames.routeParamList;
      if (false === stale.stale) {
        return stale;
      } else {
        const routes = stale.routes;
        const found = routes.filter((name) => routeNames.includes(name.name));
        const mapped = found.map((key) => {
          let params;
          obj = { key, params };
          const merged = Object.assign(key);
          key = key.key;
          if (!key) {
            const name = key.name;
            const _HermesInternal = HermesInternal;
            const obj2 = initialRouteName(actionCreators[1]);
            key = "" + name + "-" + obj2.nanoid();
          }
          if (undefined !== routeParamList[key.name]) {
            const obj3 = {};
            const merged1 = Object.assign(tmp5[key.name]);
            const merged2 = Object.assign(key.params);
            params = obj3;
          } else {
            params = key.params;
          }
          return obj;
        });
        const preloadedRoutes = stale.preloadedRoutes;
        let mapped1;
        if (preloadedRoutes != null) {
          const found1 = preloadedRoutes.filter((name) => routeNames.includes(name.name));
          mapped1 = found1.map((key) => {
            let params;
            obj = { key, params };
            const merged = Object.assign(key);
            key = key.key;
            if (!key) {
              const name = key.name;
              const _HermesInternal = HermesInternal;
              const obj2 = initialRouteName(actionCreators[1]);
              key = "" + name + "-" + obj2.nanoid();
            }
            if (undefined !== routeParamList[key.name]) {
              const obj3 = {};
              const merged1 = Object.assign(tmp5[key.name]);
              const merged2 = Object.assign(key.params);
              params = obj3;
            } else {
              params = key.params;
            }
            return obj;
          });
        }
        if (mapped1 == null) {
          mapped1 = [];
        }
        if (0 === mapped.length) {
          if (undefined !== initialRouteName.initialRouteName) {
            if (routeNames.includes(initialRouteName.initialRouteName)) {
              initialRouteName = initialRouteName.initialRouteName;
            }
            obj = {
              key: "" + initialRouteName + "-" + obj2.nanoid(),
              name: initialRouteName,
              params: routeParamList[initialRouteName],
            };
            const push = mapped.push;
            obj2 = nanoid;
            let _HermesInternal = HermesInternal;
            push(obj);
          }
          initialRouteName = routeNames[0];
        }
        let obj3 = {
          stale: false,
          type: "stack",
          key: "stack-" + obj4.nanoid(),
          index: mapped.length - 1,
          routeNames,
          routes: mapped,
          preloadedRoutes: mapped1,
        };
        const _HermesInternal2 = HermesInternal;
        obj4 = nanoid;
        return obj3;
      }
    },
    getStateForRouteNamesChange(routes, routeNames) {
      let obj2;
      routeNames = routeNames.routeNames;
      const routeKeyChanges = routeNames.routeKeyChanges;
      routes = routes.routes;
      const routeParamList = routeNames.routeParamList;
      const found = routes.filter((name) => {
        const hasItem = routeNames.includes(name.name) && !routeKeyChanges.includes(name.name);
        return hasItem;
      });
      if (0 === found.length) {
        if (undefined !== initialRouteName.initialRouteName) {
          if (routeNames.includes(initialRouteName.initialRouteName)) {
            initialRouteName = initialRouteName.initialRouteName;
          }
          const push = found.push;
          const _HermesInternal = HermesInternal;
          obj = {
            key: "" + initialRouteName + "-" + obj2.nanoid(),
            name: initialRouteName,
            params: routeParamList[initialRouteName],
          };
          obj2 = nanoid;
          push(obj);
        }
        initialRouteName = routeNames[0];
      }
      const obj3 = { routeNames, routes: found, index: Math.min(routes.index, found.length - 1) };
      const merged = Object.assign(routes);
      return obj3;
    },
    getStateForRouteFocus(routes, arg1) {
      let routes1;
      let closure_0 = arg1;
      routes = routes.routes;
      const findIndexResult = routes.findIndex((key) => key.key === closure_0);
      let tmp2 = routes;
      if (-1 !== findIndexResult) {
        tmp2 = routes;
        if (findIndexResult !== routes.index) {
          obj = { index: findIndexResult, routes: routes1.slice(0, findIndexResult + 1) };
          const merged = Object.assign(routes);
          routes1 = routes.routes;
          tmp2 = obj;
        }
      }
      return tmp2;
    },
    getStateForAction(key, type, routeParamList) {
      let items1;
      let items2;
      let name;
      let obj18;
      let obj37;
      let path1;
      let preloadedRoutes1;
      let preloadedRoutes4;
      let preloadedRoutes7;
      let routes1;
      let closure_0 = type;
      routeParamList = routeParamList.routeParamList;
      type = type.type;
      if ("REPLACE" === type) {
        if (type.target === key.key) {
          let index4;
          if (type.source) {
            const routes9 = key.routes;
            index4 = routes9.findIndex((key) => key.key === action.source);
          }
          if (-1 === index4) {
            return null;
          } else {
            const routeNames5 = key.routeNames;
            if (routeNames5.includes(type.payload.name)) {
              let closure_3 = tmp132;
              let tmp132Result;
              if (routeParamList.routeGetIdList[type.payload.name] != null) {
                let obj2 = { params: type.payload.params };
                tmp132Result = tmp132(obj2);
              }
              let closure_4 = tmp132Result;
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
              let closure_5 = found;
              if (closure_5) {
                const obj4 = { action: type, routeParamList };
                const tmp136Result = _mod1503;
                const paramsFromAction = tmp136Result.createParamsFromAction(obj4);
                if (found.params !== paramsFromAction) {
                  const obj6 = { params: paramsFromAction };
                  let merged = Object.assign(found);
                  closure_5 = obj6;
                }
              } else {
                const obj8 = { action: type, routeParamList };
                const tmp136Result2 = _mod1505;
                closure_5 = tmp136Result2.createRouteFromAction(obj8);
              }
              const obj9 = {
                routes: routes1.map((item, index) => {
                  let tmp = item;
                  if (index === index4) {
                    tmp = key;
                  }
                  return tmp;
                }),
                preloadedRoutes: preloadedRoutes1.filter((key) => key.key !== key.key),
              };
              const merged1 = Object.assign(key);
              routes1 = key.routes;
              preloadedRoutes1 = key.preloadedRoutes;
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
                let closure_10 = tmp63;
                let tmp63Result;
                if (routeParamList.routeGetIdList[type.payload.name] != null) {
                  const obj10 = { params: type.payload.params };
                  tmp63Result = tmp63(obj10);
                }
                let closure_11 = tmp63Result;
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
                  let index3;
                  if (undefined !== tmp63Result) {
                    const routes5 = key.routes;
                    index3 = routes5.findIndex((name) => {
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
                    const arraySpreadResult = HermesBuiltin.arraySpread(items, key.routes, 0);
                    const obj11 = { action: type, routeParamList };
                    const obj29 = _mod1505;
                    items[arraySpreadResult] = obj29.createRouteFromAction(obj11);
                    const obj12 = { routes: items, index: items.length - 1 };
                    const merged2 = Object.assign(key);
                    return obj12;
                  } else {
                    let paramsFromAction1;
                    let tmp80;
                    if (type.payload.merge) {
                      if (undefined === type.payload.params) {
                        let params2;
                        if (undefined === routeParamList[key.routes[index3].name]) {
                          params2 = tmp147.params;
                        }
                        paramsFromAction1 = params2;
                      }
                      const obj13 = {};
                      const merged3 = Object.assign(routeParamList[tmp147.name]);
                      const merged4 = Object.assign(tmp147.params);
                      const merged5 = Object.assign(type.payload.params);
                      params2 = obj13;
                    } else {
                      const obj14 = { action: type, routeParamList };
                      const obj24 = _mod1503;
                      paramsFromAction1 = obj24.createParamsFromAction(obj14);
                    }
                    const obj15 = { index: index3, routes: items1 };
                    const merged6 = Object.assign(key);
                    const routes10 = key.routes;
                    items1 = [];
                    const arraySpreadResult4 = HermesBuiltin.arraySpread(items1, routes10.slice(0, index3), 0);
                    if (paramsFromAction1 !== key.routes[index3].params) {
                      const obj16 = { params: paramsFromAction1 };
                      const merged7 = Object.assign(tmp147);
                      tmp80 = obj16;
                    } else {
                      tmp80 = key.routes[index3];
                    }
                    items1[arraySpreadResult4] = tmp80;
                    return obj15;
                  }
                }
              } else {
                return null;
              }
            } else if ("POP" === type) {
              if (type.target === key.key) {
                let index2;
                if (type.source) {
                  const routes3 = key.routes;
                  index2 = routes3.findIndex((key) => key.key === action.source);
                }
                if (-1 === index2) {
                  return null;
                } else if (index2 > 0) {
                  const _Math = Math;
                  const routes11 = key.routes;
                  const substr = routes11.slice(0, Math.max(index2 - type.payload.count + 1, 1));
                  const routes12 = key.routes;
                  const combined = substr.concat(routes12.slice(index2 + 1));
                  const obj17 = { index: combined.length - 1, routes: combined };
                  const merged8 = Object.assign(key);
                  return obj17;
                } else {
                  return null;
                }
              }
              index2 = key.index;
            } else if ("POP_TO_TOP" === type) {
              const action = { type: "POP", payload: obj18 };
              obj18 = { count: key.routes.length - 1 };
              return obj.getStateForAction(key, action, routeParamList);
            } else if ("POP_TO" === type) {
              if (type.target === key.key) {
                let index;
                if (type.source) {
                  const routes = key.routes;
                  index = routes.findLastIndex((key) => key.key === action.source);
                }
                if (-1 === index) {
                  return null;
                } else {
                  const routeNames4 = key.routeNames;
                  if (routeNames4.includes(type.payload.name)) {
                    let num3;
                    closure_12 = tmp20;
                    let tmp20Result;
                    if (routeParamList.routeGetIdList[type.payload.name] != null) {
                      const obj19 = { params: type.payload.params };
                      tmp20Result = tmp20(obj19);
                    }
                    let closure_13 = tmp20Result;
                    if (undefined !== tmp20Result) {
                      const routes2 = key.routes;
                      num3 = routes2.findIndex((name) => {
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
                      if (routeFromAction) {
                        const obj20 = { action: type, routeParamList };
                        const tmp44Result = _mod1503;
                        const paramsFromAction2 = tmp44Result.createParamsFromAction(obj20);
                        routeFromAction = found1;
                        if (found1.params !== paramsFromAction2) {
                          const obj21 = { params: paramsFromAction2 };
                          const merged9 = Object.assign(found1);
                          routeFromAction = obj21;
                        }
                      } else {
                        const obj22 = { action: type, routeParamList };
                        const tmp44Result2 = _mod1505;
                        routeFromAction = tmp44Result2.createRouteFromAction(obj22);
                      }
                      const routes13 = key.routes;
                      const substr1 = routes13.slice(0, index);
                      const combined1 = substr1.concat(routeFromAction);
                      const obj23 = {
                        index: combined1.length - 1,
                        routes: combined1,
                        preloadedRoutes: preloadedRoutes4.filter((key) => key.key !== routeFromAction.key),
                      };
                      const merged10 = Object.assign(key);
                      preloadedRoutes4 = key.preloadedRoutes;
                      return obj23;
                    } else {
                      let paramsFromAction3;
                      let tmp39;
                      if (type.payload.merge) {
                        if (undefined === type.payload.params) {
                          let params;
                          if (undefined === routeParamList[key.routes[num3].name]) {
                            params = tmp146.params;
                          }
                          paramsFromAction3 = params;
                        }
                        const obj25 = {};
                        const merged11 = Object.assign(routeParamList[tmp146.name]);
                        const merged12 = Object.assign(tmp146.params);
                        const merged13 = Object.assign(type.payload.params);
                        params = obj25;
                      } else {
                        const obj26 = { action: type, routeParamList };
                        const obj7 = _mod1503;
                        paramsFromAction3 = obj7.createParamsFromAction(obj26);
                      }
                      const obj27 = { index: num3, routes: items2 };
                      const merged14 = Object.assign(key);
                      const routes14 = key.routes;
                      items2 = [];
                      const arraySpreadResult5 = HermesBuiltin.arraySpread(items2, routes14.slice(0, num3), 0);
                      if (paramsFromAction3 !== key.routes[num3].params) {
                        const obj28 = { params: paramsFromAction3 };
                        const merged15 = Object.assign(tmp146);
                        tmp39 = obj28;
                      } else {
                        tmp39 = key.routes[num3];
                      }
                      items2[arraySpreadResult5] = tmp39;
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
                ({ target: obj5.target, source: obj5.source } = type);
                stateForAction = obj.getStateForAction(key, action1, routeParamList);
              }
              return stateForAction;
            } else if ("PRELOAD" === type) {
              const routeNames = key.routeNames;
              if (routeNames.includes(type.payload.name)) {
                let tmp16;
                let closure_16 = tmp5;
                let tmp5Result;
                if (routeParamList.routeGetIdList[type.payload.name] != null) {
                  obj = { params: type.payload.params };
                  tmp5Result = tmp5(obj);
                }
                let closure_17 = tmp5Result;
                let tmp8;
                if (undefined !== tmp5Result) {
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
                  tmp8 = found2;
                }
                const obj30 = {};
                const merged16 = Object.assign(key);
                if (tmp8) {
                  const routes16 = key.routes;
                  obj30.routes = routes16.map((key) => {
                    let obj2;
                    let obj3;
                    let key1;
                    if (found2 != null) {
                      key1 = found2.key;
                    }
                    let tmp2 = key;
                    if (key.key === key1) {
                      obj = { params: obj2.createParamsFromAction(obj3) };
                      const merged = Object.assign(key);
                      obj3 = { action, routeParamList };
                      tmp2 = obj;
                      obj2 = initialRouteName(actionCreators[3]);
                    }
                    return tmp2;
                  });
                  tmp16 = obj30;
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
                  const concat = found3.concat;
                  let obj3 = _mod1505;
                  const obj31 = { action: type, routeParamList };
                  obj30.preloadedRoutes = concat(obj3.createRouteFromAction(obj31));
                  tmp16 = obj30;
                }
                return tmp16;
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
          let found4;
          let tmp95;
          let closure_8 = tmp92;
          let tmp92Result;
          if (routeParamList.routeGetIdList[type.payload.name] != null) {
            const obj32 = { params: type.payload.params };
            tmp92Result = tmp92(obj32);
          }
          let closure_9 = tmp92Result;
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
            found4 = findLastResult;
            tmp95 = findLastResult;
          } else if ("NAVIGATE" === type.type) {
            if (type.payload.name === key.routes[key.index].name) {
              found4 = tmp148;
              tmp95 = tmp148;
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
              let paramsFromAction4;
              let items4;
              let arr19;
              if (tmp95) {
                if (undefined === type.payload.params) {
                  let params3;
                  if (undefined === routeParamList[type.payload.name]) {
                    params3 = tmp95.params;
                  }
                  paramsFromAction4 = params3;
                }
                const obj34 = {};
                const merged17 = Object.assign(routeParamList[type.payload.name]);
                const merged18 = Object.assign(tmp95.params);
                const merged19 = Object.assign(type.payload.params);
                params3 = obj34;
              }
              if (tmp95) {
                if ("NAVIGATE" === type.type) {
                  if (type.payload.pop) {
                    const items3 = [];
                    items4 = items3;
                    const routes8 = key.routes;
                    arr19 = items3;
                    for (const item10438 of routes8) {
                      if (item10438.key === tmp95.key) {
                        let path2;
                        let obj35 = { path: path2, params: paramsFromAction4 };
                        let push2 = items3.push;
                        let merged20 = Object.assign(tmp95);
                        if (undefined !== type.payload.path) {
                          path2 = type.payload.path;
                        } else {
                          path2 = tmp95.path;
                        }
                        let push2Result = push2(obj35);
                        obj39.return();
                        arr19 = items3;
                        break;
                      } else {
                        let arr = items3.push(tmp120);
                        continue;
                      }
                      break;
                    }
                  }
                }
                const routes17 = key.routes;
                const found5 = routes17.filter((key) => key.key !== found4.key);
                items4 = found5;
                const obj36 = {};
                const push = found5.push;
                const merged21 = Object.assign(tmp95);
                if ("NAVIGATE" === type.type) {
                  let path;
                  if (undefined !== type.payload.path) {
                    path = type.payload.path;
                  }
                  obj36.path = path;
                  obj36.params = paramsFromAction4;
                  push(obj36);
                  arr19 = found5;
                }
                path = tmp95.path;
              } else {
                items4 = [];
                const obj38 = {
                  key: "" + name + "-" + obj37.nanoid(),
                  name: type.payload.name,
                  path: path1,
                  params: paramsFromAction4,
                };
                name = type.payload.name;
                const _HermesInternal = HermesInternal;
                const arraySpreadResult6 = HermesBuiltin.arraySpread(items4, key.routes, 0);
                path1 = undefined;
                obj37 = nanoid;
                if ("NAVIGATE" === type.type) {
                  path1 = type.payload.path;
                }
                items4[arraySpreadResult6] = obj38;
                arr19 = items4;
              }
              const obj40 = {
                index: arr19.length - 1,
                preloadedRoutes: preloadedRoutes7.filter((key) => items4[items4.length - 1].key !== key.key),
                routes: arr19,
              };
              const merged22 = Object.assign(key);
              preloadedRoutes7 = key.preloadedRoutes;
              return obj40;
            }
          }
          const obj41 = { action: type, routeParamList };
          const obj33 = _mod1503;
          paramsFromAction4 = obj33.createParamsFromAction(obj41);
        } else {
          return null;
        }
      }
    },
    actionCreators,
  };
  let merged = Object.assign(require("BaseRouter").BaseRouter);
  return actionCreators;
};
