const require = arg1;
const module = arg2;
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
  }
};
arg5.default = function StackRouter(arg0) {
  let closure_0 = arg0;
  let obj = {};
  let merged = Object.assign(obj(1488));
  obj.type = "stack";
  obj.getInitialState = function getInitialState(routeNames) {
    routeNames = routeNames.routeNames;
    if (undefined !== lib.initialRouteName) {
      if (routeNames.includes(tmp2.initialRouteName)) {
        let initialRouteName = tmp2.initialRouteName;
      }
      let obj = { stale: false, type: "stack", key: null, index: 0, routeNames: null, routes: null };
      const _HermesInternal = HermesInternal;
      obj[2] = "stack-" + lib(outer1_2[1]).nanoid();
      obj[4] = routeNames;
      obj = { key: null, name: null, params: null };
      const obj2 = lib(outer1_2[1]);
      const _HermesInternal2 = HermesInternal;
      obj[0] = "" + initialRouteName + "-" + lib(outer1_2[1]).nanoid();
      obj[1] = initialRouteName;
      obj[2] = tmp[initialRouteName];
      const items = [obj];
      obj[5] = items;
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
        let obj = {};
        const merged = Object.assign(key);
        key = key.key;
        if (!key) {
          const _HermesInternal = HermesInternal;
          key = "" + key.name + "-" + routeNames(outer1_2[1]).nanoid();
          const obj2 = routeNames(outer1_2[1]);
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
      if (0 !== mapped.length) {
        let obj = { stale: false, type: "stack", key: null, index: null, routeNames: null, routes: null };
        const _HermesInternal2 = HermesInternal;
        obj[2] = "stack-" + lib(outer1_2[1]).nanoid();
        obj[3] = mapped.length - 1;
        obj[4] = routeNames;
        obj[5] = mapped;
        return obj;
      } else {
        let arr = routeNames;
        const tmp = undefined !== routeNames.initialRouteName ? arr.initialRouteName : routeNames[0];
        obj = { key: null, name: null, params: null };
        let _HermesInternal = HermesInternal;
        obj[0] = "" + tmp + "-" + lib(outer1_2[1]).nanoid();
        obj[1] = tmp;
        obj[2] = routeParamList[tmp];
        arr = mapped.push(obj);
        let obj2 = lib(outer1_2[1]);
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
      let obj = {};
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
        obj[0] = "" + initialRouteName + "-" + lib(outer1_2[1]).nanoid();
        obj[1] = initialRouteName;
        obj[2] = routeNames.routeParamList[initialRouteName];
        arr = found.push(obj);
        const obj2 = lib(outer1_2[1]);
      }
      initialRouteName = arr.initialRouteName;
    }
  };
  obj.getStateForRouteFocus = function getStateForRouteFocus(routes) {
    let closure_0 = arg1;
    routes = routes.routes;
    const findIndexResult = routes.findIndex((key) => key.key === closure_0);
    let tmp2 = routes;
    if (-1 !== findIndexResult) {
      tmp2 = routes;
      if (findIndexResult !== routes.index) {
        const obj = {};
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
    let closure_4;
    let closure_5;
    const lib = type;
    routeParamList = routeParamList.routeParamList;
    type = type.type;
    if ("REPLACE" === type) {
      if (type.target === key.key) {
        if (type.source) {
          let routes3 = key.routes;
          let index2 = routes3.findIndex((key) => key.key === type.source);
        }
        if (-1 === index2) {
          return null;
        } else {
          const payload = type.payload;
          const name = payload.name;
          ({ key: closure_4, params: closure_5 } = payload);
          const routeNames3 = key.routeNames;
          let tmp79 = null;
          if (routeNames3.includes(name)) {
            let obj = {};
            let merged = Object.assign(key);
            let routes = key.routes;
            obj.routes = routes.map((arg0, arg1) => {
              if (arg1 !== index2) {
                return arg0;
              } else {
                let combined = closure_4;
                if (undefined === closure_4) {
                  let obj = type(index2[1]);
                  const _HermesInternal = HermesInternal;
                  combined = "" + name + "-" + obj.nanoid();
                }
                obj = { key: null, name: null, params: null };
                obj[0] = combined;
                obj[1] = name;
                let merged = routeParamList;
                if (undefined !== routeParamList[name]) {
                  obj = {};
                  merged = Object.assign(merged[tmp6]);
                  const merged1 = Object.assign(closure_5);
                  let tmp8 = obj;
                } else {
                  tmp8 = closure_5;
                }
                obj[2] = tmp8;
              }
            });
            tmp79 = obj;
          }
          return tmp79;
        }
      }
      index2 = key.index;
    } else if ("PUSH" === type) {
      const routeNames2 = key.routeNames;
      if (routeNames2.includes(type.payload.name)) {
        let closure_6 = tmp53;
        let tmp53Result;
        if (routeParamList.routeGetIdList[type.payload.name] != null) {
          obj = { params: null };
          obj[0] = type.payload.params;
          tmp53Result = tmp53(obj);
        }
        let closure_7 = tmp53Result;
        let found;
        if (tmp53Result) {
          const routes1 = key.routes;
          found = routes1.find((name) => {
            let tmp = name.name === type.payload.name;
            if (tmp) {
              let tmp3Result;
              if (closure_6 != null) {
                const obj = { params: null };
                obj[0] = name.params;
                tmp3Result = tmp3(obj);
              }
              tmp = closure_7 === tmp3Result;
              const tmp2 = closure_7;
            }
            return tmp;
          });
        }
        let routes2 = key.routes;
        if (found) {
          const found1 = routes2.filter((key) => key.key !== found.key);
          let obj1 = {};
          let merged1 = Object.assign(found);
          if (undefined !== routeParamList[type.payload.name]) {
            const obj2 = {};
            const merged2 = Object.assign(routeParamList[type.payload.name]);
            const merged3 = Object.assign(type.payload.params);
            let params5 = obj2;
          } else {
            params5 = type.payload.params;
          }
          obj1.params = params5;
          obj1 = found1.push(obj1);
        } else {
          const items = [];
          const obj3 = { key: null, name: null, params: null };
          let arraySpreadResult = HermesBuiltin.arraySpread(routes2, 0);
          let obj17 = lib(outer1_2[1]);
          const _HermesInternal2 = HermesInternal;
          obj3[0] = "" + type.payload.name + "-" + obj17.nanoid();
          obj3[1] = type.payload.name;
          if (undefined !== routeParamList[type.payload.name]) {
            const obj4 = {};
            const merged4 = Object.assign(routeParamList[type.payload.name]);
            const merged5 = Object.assign(type.payload.params);
            let params4 = obj4;
          } else {
            params4 = type.payload.params;
          }
          obj3[2] = params4;
          items[arraySpreadResult] = obj3;
          const obj5 = {};
          const merged6 = Object.assign(key);
          obj5.index = items.length - 1;
          obj5.routes = items;
          return obj5;
        }
      } else {
        return null;
      }
    } else if ("POP" === type) {
      if (type.target === key.key) {
        if (type.source) {
          routes2 = key.routes;
          let index = routes2.findIndex((key) => key.key === type.source);
        }
        if (index > 0) {
          const _Math = Math;
          routes3 = key.routes;
          const substr = routes3.slice(0, Math.max(index - type.payload.count + 1, 1));
          const routes4 = key.routes;
          let combined = substr.concat(routes4.slice(index + 1));
          const obj6 = {};
          const merged7 = Object.assign(key);
          obj6.index = combined.length - 1;
          obj6.routes = combined;
          return obj6;
        } else {
          return null;
        }
      }
      index = key.index;
    } else if ("POP_TO_TOP" === type) {
      let obj7 = { type: "POP", payload: null };
      const obj8 = { count: null };
      obj8[0] = key.routes.length - 1;
      obj7[1] = obj8;
      return routeParamList.getStateForAction(key, obj7, routeParamList);
    } else if ("NAVIGATE" === type) {
      if (undefined !== type.payload.name) {
        const routeNames = key.routeNames;
        if (!routeNames.includes(type.payload.name)) {
          return null;
        }
      }
      if (!type.payload.key) {
        if (!type.payload.name) {
          return null;
        }
      }
      let tmp7;
      if (undefined === type.payload.key) {
        if (undefined !== type.payload.name) {
          tmp7 = routeParamList.routeGetIdList[type.payload.name];
        }
      }
      let closure_9 = tmp7;
      let tmp7Result;
      if (tmp7 != null) {
        const obj9 = { params: null };
        obj9[0] = type.payload.params;
        tmp7Result = tmp7(obj9);
      }
      let closure_10 = tmp7Result;
      routes = key.routes;
      if (tmp7Result) {
        let num2 = routes.findIndex((name) => {
          let tmp = name.name === type.payload.name;
          if (tmp) {
            let tmp3Result;
            if (closure_9 != null) {
              const obj = { params: null };
              obj[0] = name.params;
              tmp3Result = tmp3(obj);
            }
            tmp = closure_10 === tmp3Result;
            const tmp2 = closure_10;
          }
          return tmp;
        });
      } else {
        if (routes[key.index].name !== type.payload.name) {
          if (key.routes[key.index].key !== type.payload.key) {
            let diff = key.routes.length - 1;
            num2 = -1;
            if (0 <= diff) {
              while (true) {
                let tmp10 = diff;
                if (key.routes[diff].name !== type.payload.name) {
                  num2 = diff;
                  if (key.routes[diff].key === type.payload.key) {
                    break;
                  } else {
                    diff = diff - 1;
                    num2 = -1;
                    if (0 <= diff) {
                      continue;
                    } else {
                      break;
                    }
                    break;
                  }
                } else {
                  num2 = diff;
                  if (undefined === type.payload.key) {
                    break;
                  }
                }
                break;
              }
            }
          }
        }
        num2 = key.index;
      }
      if (-1 === num2) {
        if (type.payload.key) {
          if (undefined === type.payload.name) {
            return null;
          }
        }
      }
      if (-1 === num2) {
        if (undefined !== type.payload.name) {
          const items1 = [];
          key = type.payload.key;
          arraySpreadResult = HermesBuiltin.arraySpread(key.routes, 0);
          if (key == null) {
            obj7 = lib(outer1_2[1]);
            let _HermesInternal = HermesInternal;
            key = "" + type.payload.name + "-" + obj7.nanoid();
          }
          const obj10 = { key: null, name: null, path: null, params: null };
          obj10[0] = key;
          obj10[1] = type.payload.name;
          obj10[2] = type.payload.path;
          if (undefined !== routeParamList[type.payload.name]) {
            const obj11 = {};
            const merged8 = Object.assign(routeParamList[type.payload.name]);
            const merged9 = Object.assign(type.payload.params);
            let params3 = obj11;
          } else {
            params3 = type.payload.params;
          }
          obj10[3] = params3;
          items1[arraySpreadResult] = obj10;
          const obj12 = {};
          const merged10 = Object.assign(key);
          obj12.routes = items1;
          obj12.index = items1.length - 1;
          return obj12;
        }
      }
      if (type.payload.merge) {
        if (undefined === type.payload.params) {
          if (undefined === routeParamList[tmp13.name]) {
            let params2 = tmp13.params;
          }
        }
        const obj13 = {};
        const merged11 = Object.assign(routeParamList[tmp13.name]);
        const merged12 = Object.assign(tmp13.params);
        const merged13 = Object.assign(type.payload.params);
        params2 = obj13;
      } else {
        if (undefined !== routeParamList[tmp13.name]) {
          const obj14 = {};
          const merged14 = Object.assign(routeParamList[tmp13.name]);
          const merged15 = Object.assign(type.payload.params);
          let params = obj14;
        } else {
          params = type.payload.params;
        }
        const obj15 = {};
        const merged16 = Object.assign(key);
        obj15.index = num2;
        const routes5 = key.routes;
        const items2 = [];
        if (params !== tmp13.params) {
          const obj16 = {};
          const merged17 = Object.assign(tmp13);
          let path = type.payload.path;
          if (path == null) {
            path = tmp13.path;
          }
          obj16.path = path;
          obj16.params = params;
          let tmp30 = obj16;
        } else {
          tmp30 = key.routes[num2];
        }
        items2[HermesBuiltin.arraySpread(routes5.slice(0, num2), 0)] = tmp30;
        obj15.routes = items2;
        return obj15;
      }
    } else if ("GO_BACK" === type) {
      let stateForAction = null;
      if (key.index > 0) {
        obj17 = { type: "POP", payload: null, target: null, source: null };
        obj17[1] = { count: 1 };
        ({ target: obj2[2], source: obj2[3] } = type);
        stateForAction = routeParamList.getStateForAction(key, obj17, routeParamList);
      }
      return stateForAction;
    } else {
      obj = obj(outer1_2[0]);
      return obj.getStateForAction(key, type);
    }
  };
  obj.actionCreators = obj;
  return obj;
};
arg5.StackActions = obj;