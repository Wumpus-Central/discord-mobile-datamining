const require = arg1;
const module = arg2;
const dependencyMap = arg6;
const route = "route";
let obj = {
  jumpTo(name, params) {
    const payload = { name, params };
    return { type: "JUMP_TO", payload };
  }
};
function getRouteHistory(arg0, arg1, arg2, arg3) {

}
function changeIndex(history, index) {
  if ("history" === arg2) {
    let closure_0 = key;
    history = history.history;
    const found = history.filter((type) => {
      let tmp = "route" === type.type;
      if (tmp) {
        tmp = type.key !== closure_0;
      }
      return tmp;
    });
    let obj = { type: null, key: null };
    obj[0] = route;
    obj[1] = history.routes[index].key;
    let combined = found.concat(obj);
  } else {
    const routes = history.routes;
    if (typeof getRouteHistory !== "function") {
      HermesBuiltin.throwTypeError();
    }
    closure_0 = arg3;
    obj = { type: null, key: null };
    obj[0] = route;
    obj[1] = routes[index].key;
    const items = [obj];
    if ("order" === arg2) {
      combined = items;
      let diff = index;
      if (index > 0) {
        do {
          obj = { type: null, key: null };
          let tmp5 = route;
          obj[0] = route;
          obj[1] = routes[diff - 1].key;
          let arr = items.unshift(obj);
          diff = diff - 1;
          combined = items;
        } while (diff > 0);
      }
    } else if ("firstRoute" === arg2) {
      combined = items;
      if (0 !== index) {
        const obj1 = { type: null, key: null };
        obj1[0] = tmp2;
        obj1[1] = routes[0].key;
        items.unshift(obj1);
        combined = items;
      }
    } else {
      combined = items;
      if ("initialRoute" === arg2) {
        const findIndexResult = routes.findIndex((name) => name.name === closure_0);
        let num = 0;
        if (-1 !== findIndexResult) {
          num = findIndexResult;
        }
        combined = items;
        if (index !== num) {
          const obj2 = { type: null, key: null };
          obj2[0] = tmp2;
          obj2[1] = routes[num].key;
          items.unshift(obj2);
          combined = items;
        }
      }
    }
  }
  const obj3 = {};
  const merged = Object.assign(history);
  obj3.index = index;
  obj3.history = combined;
  return obj3;
}
arg5.default = function TabRouter(arg0) {
  let backBehavior;
  let require;
  ({ initialRouteName: require, backBehavior } = arg0);
  if (backBehavior === undefined) {
    backBehavior = "firstRoute";
  }
  let obj = {};
  let merged = Object.assign(backBehavior(1488));
  obj.type = "tab";
  obj.getInitialState = function getInitialState(arg0) {
    let closure_0;
    let routeNames;
    ({ routeNames, routeParamList: closure_0 } = arg0);
    let num = 0;
    if (undefined !== closure_0) {
      num = 0;
      if (routeNames.includes(tmp)) {
        num = routeNames.indexOf(tmp);
      }
    }
    const mapped = routeNames.map((name) => {
      const obj = { name, key: null, params: null };
      obj[1] = "" + name + "-" + tmp(outer1_2[1]).nanoid();
      obj[2] = tmp[name];
      return obj;
    });
    if (typeof outer1_5 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    closure_0 = tmp;
    let obj = { type: outer1_3, key: mapped[num].key };
    const items = [obj];
    if ("order" === backBehavior) {
      let diff = num;
      if (num > 0) {
        do {
          obj = { type: null, key: null };
          let tmp6 = outer1_3;
          obj[0] = outer1_3;
          obj[1] = mapped[diff - 1].key;
          let arr = items.unshift(obj);
          diff = diff - 1;
        } while (diff > 0);
      }
    } else if ("firstRoute" === tmp2) {
      if (0 !== num) {
        const obj1 = { type: null, key: null };
        obj1[0] = tmp3;
        obj1[1] = mapped[0].key;
        items.unshift(obj1);
      }
    } else if ("initialRoute" === tmp2) {
      const findIndexResult = mapped.findIndex((name) => name.name === closure_0);
      let num2 = 0;
      if (-1 !== findIndexResult) {
        num2 = findIndexResult;
      }
      if (num !== num2) {
        const obj2 = { type: null, key: null };
        obj2[0] = tmp3;
        obj2[1] = mapped[num2].key;
        items.unshift(obj2);
      }
    }
    const obj3 = { stale: false, type: "tab", key: null, index: null, routeNames: null, history: null, routes: null };
    obj3[2] = "tab-" + outer1_0(outer1_2[1]).nanoid();
    obj3[3] = num;
    obj3[4] = routeNames;
    obj3[5] = items;
    obj3[6] = mapped;
    return obj3;
  };
  obj.getRehydratedState = function getRehydratedState(stale) {
    let closure_0;
    let routeNames;
    ({ routeNames, routeParamList: closure_0 } = arg1);
    let mapped;
    let closure_1 = stale;
    if (false === stale.stale) {
      return stale;
    } else {
      mapped = routeNames.map((name) => {
        const table = name;
        const routes = stale.routes;
        const found = routes.find((name) => name.name === closure_0);
        let obj = {};
        const merged = Object.assign(found);
        obj.name = name;
        if (found) {
          if (found.name === name) {
            if (found.key) {
              let key = found.key;
            }
            obj.key = key;
            if (undefined !== table[name]) {
              obj = {};
              const merged1 = Object.assign(tmp3[name]);
              let params;
              if (found) {
                params = found.params;
              }
              const merged2 = Object.assign(params);
              params = obj;
            } else if (found) {
              params = found.params;
            }
            obj.params = params;
            return obj;
          }
        }
        key = "" + name + "-" + outer1_0(mapped[1]).nanoid();
      });
      let num;
      if (stale != null) {
        num = stale.index;
      }
      if (num == null) {
        num = 0;
      }
      let name;
      if (stale.routes[num] != null) {
        name = tmp.name;
      }
      const bound = Math.min(Math.max(routeNames.indexOf(name), 0), mapped.length - 1);
      const history = stale.history;
      let found;
      if (history != null) {
        found = history.filter((arg0) => {
          let closure_0 = arg0;
          return mapped.find((key) => key.key === key.key);
        });
      }
      if (found == null) {
        found = [];
      }
      let obj = { stale: false, type: "tab", key: null, index: null, routeNames: null, history: null, routes: null };
      const _HermesInternal = HermesInternal;
      obj[2] = "tab-" + outer1_0(outer1_2[1]).nanoid();
      obj[3] = bound;
      obj[4] = routeNames;
      obj[5] = found;
      obj[6] = mapped;
      return outer1_6(obj, bound, closure_1, closure_0);
    }
  };
  obj.getStateForRouteNamesChange = function getStateForRouteNamesChange(history) {
    let backBehavior;
    let closure_2;
    let routeNames;
    let closure_0 = history;
    ({ routeNames, routeParamList: backBehavior, routeKeyChanges: closure_2 } = arg1);
    let mapped;
    mapped = routeNames.map((arg0) => {
      const history = arg0;
      const routes = history.routes;
      let found = routes.find((name) => {
        let tmp = name.name === closure_0;
        if (tmp) {
          tmp = !outer1_2.includes(name.name);
        }
        return tmp;
      });
      if (!found) {
        const obj = { name: null, key: null, params: null };
        obj[0] = arg0;
        const _HermesInternal = HermesInternal;
        obj[1] = "" + arg0 + "-" + history(outer1_2[1]).nanoid();
        obj[2] = table[arg0];
        found = obj;
        const obj2 = history(outer1_2[1]);
      }
      return found;
    });
    const bound = Math.max(0, routeNames.indexOf(history.routes[history.index].name));
    history = history.history;
    let found = history.filter((type) => {
      let closure_0 = type;
      let found = "route" !== type.type;
      if (!found) {
        found = mapped.find((key) => key.key === type.key);
      }
      return found;
    });
    if (!found.length) {
      if (typeof outer1_5 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let obj = { type: null, key: null };
      obj[0] = outer1_3;
      obj[1] = mapped[bound].key;
      const items = [obj];
      if ("order" === backBehavior) {
        found = items;
        let diff = bound;
        if (bound > 0) {
          do {
            obj = { type: null, key: null };
            let tmp8 = outer1_3;
            obj[0] = outer1_3;
            obj[1] = mapped[diff - 1].key;
            let arr = items.unshift(obj);
            diff = diff - 1;
            found = items;
          } while (diff > 0);
        }
      } else if ("firstRoute" === tmp3) {
        found = items;
        if (0 !== bound) {
          const obj1 = { type: null, key: null };
          obj1[0] = tmp5;
          obj1[1] = mapped[0].key;
          items.unshift(obj1);
          found = items;
        }
      } else {
        found = items;
        if ("initialRoute" === tmp3) {
          const findIndexResult = mapped.findIndex((name) => name.name === closure_0);
          let num = 0;
          if (-1 !== findIndexResult) {
            num = findIndexResult;
          }
          found = items;
          if (bound !== num) {
            let obj2 = { type: null, key: null };
            obj2[0] = tmp5;
            obj2[1] = mapped[num].key;
            items.unshift(obj2);
            found = items;
          }
        }
      }
      const tmp4 = closure_0;
    }
    const obj3 = {};
    const merged = Object.assign(history);
    obj3.history = found;
    obj3.routeNames = routeNames;
    obj3.routes = mapped;
    obj3.index = bound;
    return obj3;
  };
  obj.getStateForRouteFocus = function getStateForRouteFocus(routes) {
    let closure_0 = arg1;
    routes = routes.routes;
    const findIndexResult = routes.findIndex((key) => key.key === closure_0);
    let tmp2 = routes;
    if (-1 !== findIndexResult) {
      tmp2 = routes;
      if (findIndexResult !== routes.index) {
        tmp2 = outer1_6(routes, findIndexResult, backBehavior, closure_0);
      }
    }
    return tmp2;
  };
  obj.getStateForAction = function getStateForAction(history, type) {
    let backBehavior;
    let closure_2;
    let closure_0 = type;
    ({ routeParamList: backBehavior, routeGetIdList: closure_2 } = arg2);
    let findIndexResult1;
    type = type.type;
    if ("JUMP_TO" !== type) {
      if ("NAVIGATE" !== type) {
        if ("GO_BACK" === type) {
          if (1 === history.history.length) {
            return null;
          } else {
            const routes3 = history.routes;
            const findIndexResult = routes3.findIndex((key) => key.key === key);
            let tmp6 = null;
            if (-1 !== findIndexResult) {
              let obj = {};
              let merged = Object.assign(history);
              history = history.history;
              obj.history = history.slice(0, -1);
              obj.index = findIndexResult;
              tmp6 = obj;
            }
            return tmp6;
          }
        } else {
          obj = backBehavior(outer1_2[0]);
          return obj.getStateForAction(history, type);
        }
      }
    }
    findIndexResult1 = -1;
    if ("NAVIGATE" === type.type) {
      if (type.payload.key) {
        const routes2 = history.routes;
        findIndexResult1 = routes2.findIndex((key) => key.key === type.payload.key);
      }
      let tmp9 = null;
      if (-1 !== findIndexResult1) {
        obj = {};
        let merged1 = Object.assign(history);
        let routes = history.routes;
        obj.routes = routes.map((params) => {
          if (arg1 !== findIndexResult1) {
            return params;
          } else {
            let tmp;
            if (table[params.name] != null) {
              let obj = { params: null };
              obj[0] = params.params;
              tmp = tmp28(obj);
            }
            let tmp2;
            if (table[params.name] != null) {
              obj = { params: null };
              obj[0] = type.payload.params;
              tmp2 = tmp28(obj);
            }
            if (tmp === tmp2) {
              let key = params.key;
            } else {
              let obj2 = type(outer1_2[1]);
              const _HermesInternal = HermesInternal;
              key = "" + params.name + "-" + obj2.nanoid();
            }
            if ("NAVIGATE" === type.type) {
              if (tmp8.payload.merge) {
                if (tmp4) {
                  if (undefined === tmp8.payload.params) {
                    if (undefined === dependencyMap[params.name]) {
                      let params2 = params.params;
                    }
                  }
                  obj = {};
                  const merged = Object.assign(dependencyMap[params.name]);
                  const merged1 = Object.assign(params.params);
                  const merged2 = Object.assign(tmp8.payload.params);
                  params2 = obj;
                }
              }
            }
            if (undefined !== dependencyMap[params.name]) {
              const obj1 = {};
              const merged3 = Object.assign(tmp9[params.name]);
              const merged4 = Object.assign(tmp8.payload.params);
              params = obj1;
            } else {
              params = tmp8.payload.params;
            }
            if ("NAVIGATE" === type.type) {
              if (null != tmp8.payload.path) {
                let path = tmp8.payload.path;
              }
              if (params !== params.params) {
                obj2 = {};
                const merged5 = Object.assign(params);
                obj2.key = key;
                obj2.path = path;
                obj2.params = params;
                let tmp23 = obj2;
              } else {
                tmp23 = params;
              }
              return tmp23;
            }
            path = params.path;
          }
        });
        tmp9 = outer1_6(obj, findIndexResult1, backBehavior, closure_0);
      }
      return tmp9;
    }
    routes = history.routes;
    findIndexResult1 = routes.findIndex((name) => name.name === type.payload.name);
  };
  obj.shouldActionChangeFocus = function shouldActionChangeFocus(type) {
    return "NAVIGATE" === type.type;
  };
  obj.actionCreators = obj;
  return obj;
};
arg5.TabActions = obj;