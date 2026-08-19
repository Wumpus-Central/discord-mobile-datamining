// === Module 1514: StackRouter ===

// Module 1514 (StackRouter)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  replace(name, params) {
    const payload = { name, params };
    return { type: "REPLACE", payload };
  },
  push(name, params) {
    const payload = { name, params };
    return { type: "PUSH", payload };
  },
  pop() {
    let count = arg0;
    if (arg0 === undefined) {
      count = 1;
    }
    return { type: "POP", payload: { count } };
  },
  popToTop() {
    return { type: "POP_TO_TOP" };
  },
  popTo(name, params, flag) {
    if (typeof flag === "boolean") {
      const _console = console;
      console.warn("Passing a boolean as the third argument to 'popTo' is deprecated. Pass '{ merge: true }' instead.");
    }
    const payload = { name, params, merge: null };
    let tmp = flag;
    if (typeof flag !== "boolean") {
      let merge;
      if (flag != null) {
        merge = flag.merge;
      }
      tmp = merge;
    }
    payload[2] = tmp;
    return { type: "POP_TO", payload };
  }
};
arg5.StackActions = obj;
arg5.StackRouter = function StackRouter(arg0) {
  const _require = arg0;
  obj = {};
  let merged = Object.assign(_require(obj[0]).BaseRouter);
  obj.type = "stack";
  obj.getInitialState = function getInitialState(routeNames) {
    routeNames = routeNames.routeNames;
    if (undefined !== lib.initialRouteName) {
      if (routeNames.includes(tmp2.initialRouteName)) {
        let initialRouteName = tmp2.initialRouteName;
      }
      obj = { stale: false, type: "stack", key: null, index: 0, routeNames: null, preloadedRoutes: null, routes: null };
      const _HermesInternal = HermesInternal;
      obj[2] = "stack-" + lib(obj[1]).nanoid();
      obj[4] = routeNames;
      obj[5] = [];
      obj = { key: null, name: null, params: null };
      const obj2 = lib(obj[1]);
      const _HermesInternal2 = HermesInternal;
      obj[0] = "" + initialRouteName + "-" + lib(obj[1]).nanoid();
      obj[1] = initialRouteName;
      obj[2] = tmp[initialRouteName];
      const items = [obj];
      obj[6] = items;
      return obj;
    }
    initialRouteName = routeNames[0];
  };
  obj.getRehydratedState = function getRehydratedState(stale, routeNames) {
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
          key = "" + key.name + "-" + routeNames(routeParamList[1]).nanoid();
          const obj2 = routeNames(routeParamList[1]);
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
            key = "" + key.name + "-" + routeNames(routeParamList[1]).nanoid();
            const obj2 = routeNames(routeParamList[1]);
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
        obj[2] = "stack-" + lib(obj[1]).nanoid();
        obj[3] = mapped.length - 1;
        obj[4] = routeNames;
        obj[5] = mapped;
        obj[6] = mapped1;
        return obj;
      } else {
        let arr = routeNames;
        if (undefined === routeNames.initialRouteName) {
          let initialRouteName = routeNames[0];
          obj = { key: null, name: null, params: null };
          let _HermesInternal = HermesInternal;
          obj[0] = "" + initialRouteName + "-" + lib(obj[1]).nanoid();
          obj[1] = initialRouteName;
          obj[2] = routeParamList[initialRouteName];
          arr = mapped.push(obj);
          let obj2 = lib(obj[1]);
        }
        initialRouteName = arr.initialRouteName;
      }
    }
  };
  obj.getStateForRouteNamesChange = function getStateForRouteNamesChange(routes, routeNames) {
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
      let arr = routeNames;
      if (undefined === routeNames.initialRouteName) {
        let initialRouteName = routeNames[0];
        obj = { key: null, name: null, params: null };
        const _HermesInternal = HermesInternal;
        obj[0] = "" + initialRouteName + "-" + lib(obj[1]).nanoid();
        obj[1] = initialRouteName;
        obj[2] = routeNames.routeParamList[initialRouteName];
        arr = found.push(obj);
        const obj2 = lib(obj[1]);
      }
      initialRouteName = arr.initialRouteName;
    }
  };
  obj.getStateForRouteFocus = function getStateForRouteFocus(routes) {
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
  obj.getStateForAction = function getStateForAction(key, type, routeParamList) {
    const lib = type;
    routeParamList = routeParamList.routeParamList;
    type = type.type;
    if ("REPLACE" === type) {
      if (type.target === key.key) {
        if (type.source) {
          const routes9 = key.routes;
          let index4 = routes9.findIndex((key) => key.key === type.source);
        }
        if (-1 === index4) {
          let found = null;
          return null;
        } else {
          const routeNames5 = key.routeNames;
          if (routeNames5.includes(type.payload.name)) {
            found = routeParamList.routeGetIdList[type.payload.name];
            found = null;
            found = undefined;
            if (found != null) {
              obj = { params: null };
              obj[0] = type.payload.params;
              found = found(obj);
            }
            const preloadedRoutes = key.preloadedRoutes;
            found = preloadedRoutes.find((name) => {
              let tmp = name.name === type.payload.name;
              if (tmp) {
                let tmp3Result;
                if (found != null) {
                  obj = { params: null };
                  obj[0] = name.params;
                  tmp3Result = tmp3(obj);
                }
                tmp = found === tmp3Result;
                const tmp2 = found;
              }
              return tmp;
            });
            closure_5 = found;
            found = lib;
            found = obj;
            if (found) {
              obj = { action: null, routeParamList: null };
              obj[0] = type;
              obj[1] = routeParamList;
              found = found(found[3]).createParamsFromAction(obj);
              if (found.params !== found) {
                obj1 = {};
                found = obj1;
                found = Object.assign(found);
                obj1.params = found;
                closure_5 = obj1;
              }
              const foundResult = found(found[3]);
            } else {
              let obj2 = { action: null, routeParamList: null };
              obj2[0] = type;
              obj2[1] = routeParamList;
              closure_5 = found(found[2]).createRouteFromAction(obj2);
              const foundResult1 = found(found[2]);
            }
            let obj3 = {};
            found = obj3;
            found = key;
            found = Object.assign(key);
            let routes = key.routes;
            obj3.routes = routes.map((arg0, arg1) => {
              let tmp = arg0;
              if (arg1 === index4) {
                tmp = closure_5;
              }
              return tmp;
            });
            const preloadedRoutes1 = key.preloadedRoutes;
            obj3.preloadedRoutes = preloadedRoutes1.filter((key) => key.key !== key.key);
            return obj3;
          } else {
            found = null;
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
                const obj4 = { params: null };
                obj4[0] = type.payload.params;
                tmp62Result = tmp62(obj4);
              }
              closure_11 = tmp62Result;
              const preloadedRoutes2 = key.preloadedRoutes;
              if (preloadedRoutes2.find((name) => {
                let tmp = name.name === type.payload.name;
                if (tmp) {
                  let tmp3Result;
                  if (closure_10 != null) {
                    obj = { params: null };
                    obj[0] = name.params;
                    tmp3Result = tmp3(obj);
                  }
                  tmp = closure_11 === tmp3Result;
                  const tmp2 = closure_11;
                }
                return tmp;
              })) {
                return null;
              } else {
                if (undefined !== tmp62Result) {
                  let routes5 = key.routes;
                  let index3 = routes5.findIndex((name) => {
                    let tmp = name.name === type.payload.name;
                    if (tmp) {
                      let tmp3Result;
                      if (closure_10 != null) {
                        obj = { params: null };
                        obj[0] = name.params;
                        tmp3Result = tmp3(obj);
                      }
                      tmp = closure_11 === tmp3Result;
                      const tmp2 = closure_11;
                    }
                    return tmp;
                  });
                } else if (key.routes[key.index].name === type.payload.name) {
                  index3 = key.index;
                } else {
                  let routes4 = key.routes;
                  index3 = routes4.findLastIndex((name) => name.name === type.payload.name);
                }
                if (-1 === index3) {
                  const items = [];
                  let arraySpreadResult = HermesBuiltin.arraySpread(key.routes, 0);
                  let obj29 = lib(obj[2]);
                  const obj5 = { action: null, routeParamList: null };
                  obj5[0] = type;
                  obj5[1] = routeParamList;
                  items[arraySpreadResult] = obj29.createRouteFromAction(obj5);
                  const obj6 = {};
                  let merged = Object.assign(key);
                  obj6.routes = items;
                  obj6.index = items.length - 1;
                  return obj6;
                } else {
                  found = key.routes[index3];
                  if (type.payload.merge) {
                    if (undefined === type.payload.params) {
                      if (undefined === routeParamList[found.name]) {
                        let params2 = found.params;
                      }
                    }
                    let obj7 = {};
                    const merged1 = Object.assign(routeParamList[found.name]);
                    const merged2 = Object.assign(found.params);
                    const merged3 = Object.assign(type.payload.params);
                    params2 = obj7;
                  } else {
                    let obj24 = lib(obj[3]);
                    const obj8 = { action: null, routeParamList: null };
                    obj8[0] = type;
                    obj8[1] = routeParamList;
                    const paramsFromAction = obj24.createParamsFromAction(obj8);
                    const obj9 = {};
                    const merged4 = Object.assign(key);
                    obj9.index = index3;
                    const routes1 = key.routes;
                    const items1 = [];
                    arraySpreadResult = HermesBuiltin.arraySpread(routes1.slice(0, index3), 0);
                    if (paramsFromAction !== found.params) {
                      const obj10 = {};
                      const merged5 = Object.assign(found);
                      obj10.params = paramsFromAction;
                      let tmp80 = obj10;
                    } else {
                      tmp80 = key.routes[index3];
                    }
                    items1[arraySpreadResult] = tmp80;
                    obj9.routes = items1;
                    return obj9;
                  }
                }
              }
            } else {
              return null;
            }
          } else if ("POP" === type) {
            if (type.target === key.key) {
              if (type.source) {
                let routes3 = key.routes;
                let index2 = routes3.findIndex((key) => key.key === type.source);
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
                const merged6 = Object.assign(key);
                obj11.index = combined.length - 1;
                obj11.routes = combined;
                return obj11;
              } else {
                return null;
              }
            }
            index2 = key.index;
          } else if ("POP_TO_TOP" === type) {
            const obj12 = { type: "POP", payload: null };
            const obj13 = { count: null };
            obj13[0] = key.routes.length - 1;
            obj12[1] = obj13;
            return routeParamList.getStateForAction(key, obj12, routeParamList);
          } else if ("POP_TO" === type) {
            if (type.target === key.key) {
              if (type.source) {
                routes = key.routes;
                let index = routes.findLastIndex((key) => key.key === type.source);
              }
              if (-1 === index) {
                return null;
              } else {
                const routeNames4 = key.routeNames;
                if (routeNames4.includes(type.payload.name)) {
                  closure_12 = tmp18;
                  let tmp18Result;
                  if (routeParamList.routeGetIdList[type.payload.name] != null) {
                    const obj14 = { params: null };
                    obj14[0] = type.payload.params;
                    tmp18Result = tmp18(obj14);
                  }
                  closure_13 = tmp18Result;
                  if (undefined !== tmp18Result) {
                    routes2 = key.routes;
                    let num3 = routes2.findIndex((name) => {
                      let tmp = name.name === type.payload.name;
                      if (tmp) {
                        let tmp3Result;
                        if (closure_12 != null) {
                          obj = { params: null };
                          obj[0] = name.params;
                          tmp3Result = tmp3(obj);
                        }
                        tmp = closure_13 === tmp3Result;
                        const tmp2 = closure_13;
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
                      let tmp = name.name === type.payload.name;
                      if (tmp) {
                        let tmp3Result;
                        if (closure_12 != null) {
                          obj = { params: null };
                          obj[0] = name.params;
                          tmp3Result = tmp3(obj);
                        }
                        tmp = closure_13 === tmp3Result;
                        const tmp2 = closure_13;
                      }
                      return tmp;
                    });
                    let routeFromAction = found1;
                    if (found1) {
                      let tmp43Result = tmp43(tmp44[3]);
                      const obj15 = { action: null, routeParamList: null };
                      obj15[0] = type;
                      obj15[1] = routeParamList;
                      const paramsFromAction1 = tmp43Result.createParamsFromAction(obj15);
                      routeFromAction = found1;
                      if (found1.params !== paramsFromAction1) {
                        const obj16 = {};
                        const merged7 = Object.assign(found1);
                        obj16.params = paramsFromAction1;
                        routeFromAction = obj16;
                        routeFromAction = obj16;
                      }
                    } else {
                      tmp43Result = tmp43(tmp44[2]);
                      const obj17 = { action: null, routeParamList: null };
                      obj17[0] = type;
                      obj17[1] = routeParamList;
                      routeFromAction = tmp43Result.createRouteFromAction(obj17);
                    }
                    routes4 = key.routes;
                    const substr1 = routes4.slice(0, index);
                    const combined1 = substr1.concat(routeFromAction);
                    const obj18 = {};
                    const merged8 = Object.assign(key);
                    obj18.index = combined1.length - 1;
                    obj18.routes = combined1;
                    const preloadedRoutes4 = key.preloadedRoutes;
                    obj18.preloadedRoutes = preloadedRoutes4.filter((key) => key.key !== routeFromAction.key);
                    return obj18;
                  } else {
                    found = key.routes[num3];
                    if (type.payload.merge) {
                      if (undefined === type.payload.params) {
                        if (undefined === routeParamList[found.name]) {
                          let params = found.params;
                        }
                      }
                      const obj19 = {};
                      const merged9 = Object.assign(routeParamList[found.name]);
                      const merged10 = Object.assign(found.params);
                      const merged11 = Object.assign(type.payload.params);
                      params = obj19;
                    } else {
                      obj7 = lib(obj[3]);
                      const obj20 = { action: null, routeParamList: null };
                      obj20[0] = type;
                      obj20[1] = routeParamList;
                      const paramsFromAction2 = obj7.createParamsFromAction(obj20);
                      const obj21 = {};
                      const merged12 = Object.assign(key);
                      obj21.index = num3;
                      routes5 = key.routes;
                      const items2 = [];
                      if (paramsFromAction2 !== found.params) {
                        const obj22 = {};
                        const merged13 = Object.assign(found);
                        obj22.params = paramsFromAction2;
                        let tmp38 = obj22;
                      } else {
                        tmp38 = key.routes[num3];
                      }
                      items2[HermesBuiltin.arraySpread(routes5.slice(0, num3), 0)] = tmp38;
                      obj21.routes = items2;
                      return obj21;
                    }
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
              const obj23 = { type: "POP", payload: null, target: null, source: null };
              obj23[1] = { count: 1 };
              ({ target: obj6[2], source: obj6[3] } = type);
              stateForAction = routeParamList.getStateForAction(key, obj23, routeParamList);
            }
            return stateForAction;
          } else if ("PRELOAD" === type) {
            const routeNames = key.routeNames;
            if (routeNames.includes(type.payload.name)) {
              closure_16 = tmp4;
              let tmp4Result;
              if (routeParamList.routeGetIdList[type.payload.name] != null) {
                obj = { params: null };
                obj[0] = type.payload.params;
                tmp4Result = tmp4(obj);
              }
              closure_17 = tmp4Result;
              let tmp7;
              if (undefined !== tmp4Result) {
                let routes6 = key.routes;
                const found2 = routes6.find((name) => {
                  let tmp = name.name === type.payload.name;
                  if (tmp) {
                    let tmp3Result;
                    if (closure_16 != null) {
                      obj = { params: null };
                      obj[0] = name.params;
                      tmp3Result = tmp3(obj);
                    }
                    tmp = closure_17 === tmp3Result;
                    const tmp2 = closure_17;
                  }
                  return tmp;
                });
                tmp7 = found2;
              }
              obj24 = {};
              const merged14 = Object.assign(key);
              if (tmp7) {
                let routes7 = key.routes;
                obj24.routes = routes7.map((key) => {
                  key = undefined;
                  if (found2 != null) {
                    key = found2.key;
                  }
                  let tmp2 = key;
                  if (key.key === key) {
                    obj = {};
                    const merged = Object.assign(key);
                    obj = { action: null, routeParamList: null };
                    obj[0] = type;
                    obj[1] = routeParamList;
                    obj.params = type(routeParamList[3]).createParamsFromAction(obj);
                    tmp2 = obj;
                    const obj2 = type(routeParamList[3]);
                  }
                  return tmp2;
                });
                let tmp14 = obj24;
              } else {
                const preloadedRoutes5 = key.preloadedRoutes;
                const found3 = preloadedRoutes5.filter((name) => {
                  let tmp = name.name !== type.payload.name;
                  if (!tmp) {
                    let tmp3Result;
                    if (closure_16 != null) {
                      obj = { params: null };
                      obj[0] = name.params;
                      tmp3Result = tmp3(obj);
                    }
                    tmp = closure_17 !== tmp3Result;
                    const tmp2 = closure_17;
                  }
                  return tmp;
                });
                obj3 = lib(obj[2]);
                const obj25 = { action: null, routeParamList: null };
                obj25[0] = type;
                obj25[1] = routeParamList;
                obj24.preloadedRoutes = found3.concat(obj3.createRouteFromAction(obj25));
                tmp14 = obj24;
              }
              return tmp14;
            } else {
              return null;
            }
          } else {
            found = lib;
            const BaseRouter = lib(obj[0]).BaseRouter;
            return BaseRouter.getStateForAction(key, type);
          }
        }
      }
      const routeNames3 = key.routeNames;
      if (routeNames3.includes(type.payload.name)) {
        closure_8 = tmp92;
        let tmp92Result;
        if (routeParamList.routeGetIdList[type.payload.name] != null) {
          const obj26 = { params: null };
          obj26[0] = type.payload.params;
          tmp92Result = tmp92(obj26);
        }
        closure_9 = tmp92Result;
        if (undefined !== tmp92Result) {
          routes7 = key.routes;
          const findLastResult = routes7.findLast((name) => {
            let tmp = name.name === type.payload.name;
            if (tmp) {
              let tmp3Result;
              if (closure_8 != null) {
                obj = { params: null };
                obj[0] = name.params;
                tmp3Result = tmp3(obj);
              }
              tmp = closure_9 === tmp3Result;
              const tmp2 = closure_9;
            }
            return tmp;
          });
          let found4 = findLastResult;
          let tmp95 = findLastResult;
        } else if ("NAVIGATE" === type.type) {
          found = key.routes[key.index];
          if (type.payload.name === found.name) {
            found4 = found;
            tmp95 = found;
          } else if (type.payload.pop) {
            routes6 = key.routes;
            const findLastResult1 = routes6.findLast((name) => name.name === type.payload.name);
            found4 = findLastResult1;
            tmp95 = findLastResult1;
          }
        }
        if (!tmp95) {
          const preloadedRoutes6 = key.preloadedRoutes;
          found4 = preloadedRoutes6.find((name) => {
            let tmp = name.name === type.payload.name;
            if (tmp) {
              let tmp3Result;
              if (closure_8 != null) {
                obj = { params: null };
                obj[0] = name.params;
                tmp3Result = tmp3(obj);
              }
              tmp = closure_9 === tmp3Result;
              const tmp2 = closure_9;
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
                found = params3;
              }
              const obj27 = {};
              found = obj27;
              found = Object.assign(routeParamList[type.payload.name]);
              found = obj27;
              found = Object.assign(tmp95.params);
              found = obj27;
              found = Object.assign(type.payload.params);
              params3 = obj27;
            }
          }
        }
        found = obj;
        const obj28 = { action: null, routeParamList: null };
        obj28[0] = type;
        obj28[1] = routeParamList;
        found = lib(obj[3]).createParamsFromAction(obj28);
        if (tmp95) {
          if ("NAVIGATE" === type.type) {
            if (type.payload.pop) {
              const items3 = [];
              let items4 = items3;
              let routes8 = key.routes;
              found = routes8;
              found = routes8;
              let arr19 = items3;
              for (const item10441 of routes8) {
                if (item10441.key === tmp95.key) {
                  obj29 = {};
                  found = obj29;
                  found = tmp95;
                  found = Object.assign(tmp95);
                  if (undefined !== arg1.payload.path) {
                    let path2 = arg1.payload.path;
                  } else {
                    path2 = tmp95.path;
                  }
                  obj29.path = path2;
                  obj29.params = found;
                  obj29 = items3.push(obj29);
                } else {
                  found = item10441;
                  found = items3.push(found);
                  continue;
                }
              }
            }
          }
          routes8 = key.routes;
          const found5 = routes8.filter((key) => key.key !== found4.key);
          items4 = found5;
          const obj30 = {};
          found = obj30;
          found = tmp95;
          found = Object.assign(tmp95);
          if ("NAVIGATE" === type.type) {
            if (undefined !== type.payload.path) {
              let path = type.payload.path;
            }
            obj30.path = path;
            obj30.params = found;
            found = found5.push(obj30);
            arr19 = found5;
          }
          path = tmp95.path;
        } else {
          items4 = [];
          found = items4;
          const obj31 = { key: null, name: null, path: null, params: null };
          found = lib;
          found = obj;
          found = HermesBuiltin.arraySpread(key.routes, 0);
          found = globalThis;
          const _HermesInternal = HermesInternal;
          obj31[0] = "" + type.payload.name + "-" + lib(obj[1]).nanoid();
          obj31[1] = type.payload.name;
          found = undefined;
          if ("NAVIGATE" === type.type) {
            found = type.payload.path;
          }
          obj31[2] = found;
          obj31[3] = found;
          items4[found] = obj31;
          arr19 = items4;
          const obj38 = lib(obj[1]);
        }
        const obj32 = {};
        found = obj32;
        found = key;
        found = Object.assign(key);
        obj32.index = arr19.length - 1;
        const preloadedRoutes7 = key.preloadedRoutes;
        obj32.preloadedRoutes = preloadedRoutes7.filter((key) => items4[items4.length - 1].key !== key.key);
        obj32.routes = arr19;
        const obj34 = lib(obj[3]);
      } else {
        return null;
      }
    }
  };
  obj.actionCreators = obj;
  return obj;
};