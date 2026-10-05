// _runtime/metro/01540__.js
const weakMap = new WeakMap();
function createNormalizedConfigItem(arg0) {}
function createNormalizedConfigs(arg0) {}

export const getActionFromState = function getActionFromState(index, initialRouteName) {
  let obj4;
  let reduced;
  let routes;
  let substr;
  const f84223 = (acc, item) => {
    let reduced;
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    if (typeof createNormalizedConfigItem === "function") {
      if (typeof tmp2 === "object") {
        let obj;
        if (null != tmp2) {
          const obj2 = { initialRouteName: tmp2.initialRouteName, screens: reduced };
          reduced = undefined;
          if (null != tmp2.screens) {
            if (typeof createNormalizedConfigs === "function") {
              const _Object = Object;
              const entries = Object.entries(tmp5);
              reduced = entries.reduce(f84223, {});
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          obj = obj2;
        }
        acc[tmp] = obj;
        return acc;
      }
      obj = {};
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const tmp = initialRouteName;
  if (tmp) {
    obj4 = weakMap.get(initialRouteName);
    if (!obj4) {
      if (typeof createNormalizedConfigItem === "function") {
        if (typeof initialRouteName === "object") {
          let obj3;
          if (null != initialRouteName) {
            let obj = { initialRouteName: initialRouteName.initialRouteName, screens: reduced };
            reduced = undefined;
            if (null != initialRouteName.screens) {
              if (typeof createNormalizedConfigs === "function") {
                let _Object = Object;
                let entries = Object.entries(tmp5);
                reduced = entries.reduce(f84223, {});
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            obj3 = obj;
          }
          const result = weakMap.set(initialRouteName, obj3);
          obj4 = obj3;
        }
        obj3 = {};
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  } else {
    obj4 = {};
  }
  if (null != index.index) {
    const routes1 = index.routes;
    substr = routes1.slice(0, index.index + 1);
  } else {
    substr = index.routes;
  }
  if (0 !== substr.length) {
    let tmp11;
    if (1 !== substr.length) {
      if (2 === substr.length) {
        if (undefined === substr[0].key) {
          initialRouteName = undefined;
          const name = substr[0].name;
          if (obj4 != null) {
            initialRouteName = obj4.initialRouteName;
          }
        }
      }
      const action = { type: "RESET", payload: index };
      return action;
    }
    ({ index, routes } = index);
    if (index == null) {
      index = index.routes.length - 1;
    }
    let state1;
    if (routes[index] != null) {
      state1 = tmp9.state;
    }
    if (obj4 != null) {
      const screens = obj4.screens;
      if (screens != null) {
        let name1;
        if (routes[index] != null) {
          name1 = tmp9.name;
        }
        tmp11 = screens[name1];
      }
    }
    let obj5 = {};
    const merged = Object.assign(tmp9.params);
    let tmp15;
    if (routes[index]) {
      const obj8 = { name: null, path: null, params: obj5 };
      ({ name: obj7.name, path: obj7.path } = routes[index]);
      tmp15 = obj8;
    }
    let length = tmp15;
    if (length) {
      let screens1;
      if (tmp11 != null) {
        screens1 = tmp11.screens;
      }
      length = screens1;
    }
    if (length) {
      const _Object2 = Object;
      length = Object.keys(tmp11.screens).length;
    }
    if (length) {
      tmp15.pop = true;
    }
    if (state1) {
      while (0 !== state1.routes.length) {
        let substr1;
        if (null != state1.index) {
          let routes2 = state1.routes;
          substr1 = routes2.slice(0, state1.index + 1);
        } else {
          substr1 = state1.routes;
        }
        let tmp22 = substr1[substr1.length - 1];
        let _Object3 = Object;
        let merged1 = Object.assign(obj5, { initial: "Array", screen: "T", params: "y", state: "IconComponent" });
        if (1 === substr1.length) {
          if (undefined === substr1[0].key) {
            let params;
            obj5.initial = true;
            obj5.screen = tmp22.name;
            if (tmp22.state) {
              let obj9 = {};
              let merged2 = Object.assign(tmp22.params);
              obj5.params = obj9;
              obj5.pop = true;
              params = obj5.params;
            } else {
              ({ path: obj6.path, params: obj6.params } = tmp22);
              params = obj5;
            }
            let state = tmp22.state;
            let tmp27;
            if (tmp11 != null) {
              let screens2 = tmp11.screens;
              if (screens2 != null) {
                tmp27 = screens2[tmp22.name];
              }
            }
            let screens3;
            if (tmp27 != null) {
              screens3 = tmp27.screens;
            }
            if (screens3) {
              let _Object4 = Object;
              screens3 = Object.keys(tmp27.screens).length;
            }
            if (screens3) {
              params.pop = true;
            }
            obj5 = params;
            tmp11 = tmp27;
            state1 = state;
          }
        }
        if (2 === substr1.length) {
          if (undefined === substr1[0].key) {
            let initialRouteName1;
            let name2 = substr1[0].name;
            if (tmp11 != null) {
              initialRouteName1 = tmp11.initialRouteName;
            }
            if (name2 === initialRouteName1) {
              if (undefined === substr1[1].key) {
                obj5.initial = false;
                obj5.screen = tmp22.name;
              }
            }
          }
        }
        obj5.state = state1;
      }
    }
    let screen;
    if (tmp15 != null) {
      screen = tmp15.params.screen;
    }
    if (!screen) {
      let state2;
      if (tmp15 != null) {
        state2 = tmp15.params.state;
      }
      screen = state2;
    }
    if (screen) {
      tmp15.pop = true;
    }
    if (tmp15) {
      const action1 = { type: "NAVIGATE", payload: tmp15 };
      return action1;
    }
  }
};
