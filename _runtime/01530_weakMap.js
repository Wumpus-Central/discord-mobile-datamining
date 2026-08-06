// _runtime/01530_weakMap.js
const weakMap = new WeakMap();
function createNormalizedConfigItem(arg0) {

}
function createNormalizedConfigs(arg0) {

}
arg5.getActionFromState = function getActionFromState(index, obj) {
  let routes;
  if (obj) {
    let obj2 = weakMap;
    let obj1 = weakMap.get(obj);
    if (!obj1) {
      if (typeof createNormalizedConfigItem !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof obj !== "object") {
        obj = {};
        const result = obj2.set(obj, obj);
      } else {
        let tmp2 = null;
      }
      obj = { initialRouteName: null, screens: null };
      obj[0] = obj.initialRouteName;
      tmp2 = tmp2 != obj.screens;
      let reduced;
      if (tmp2) {
        if (typeof createNormalizedConfigs !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Object = Object;
        const entries = Object.entries(obj.screens);
        reduced = entries.reduce((arg0, arg1) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg1;
          if (typeof closure_1 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          if (typeof tmp2 === "object") {
            if (null != tmp2) {
              let obj = { initialRouteName: null, screens: null };
              obj[0] = tmp2.initialRouteName;
              let reduced;
              if (null != tmp2.screens) {
                if (typeof closure_2 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                let _Object = Object;
                let entries = Object.entries(tmp2.screens);
                reduced = entries.reduce((arg0, arg1) => {
                  let tmp;
                  let tmp2;
                  [tmp, tmp2] = arg1;
                  if (typeof closure_1 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  if (typeof tmp2 === "object") {
                    if (null != tmp2) {
                      let obj = { initialRouteName: null, screens: null };
                      obj[0] = tmp2.initialRouteName;
                      let reduced;
                      if (null != tmp2.screens) {
                        if (typeof closure_2 !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        let _Object = Object;
                        let entries = Object.entries(tmp2.screens);
                        reduced = entries.reduce((arg0, arg1) => {
                          let tmp;
                          let tmp2;
                          [tmp, tmp2] = arg1;
                          if (typeof closure_1 !== "function") {
                            HermesBuiltin.throwTypeError();
                          }
                          if (typeof tmp2 === "object") {
                            if (null != tmp2) {
                              let obj = { initialRouteName: null, screens: null };
                              obj[0] = tmp2.initialRouteName;
                              let reduced;
                              if (null != tmp2.screens) {
                                if (typeof closure_2 !== "function") {
                                  HermesBuiltin.throwTypeError();
                                }
                                let _Object = Object;
                                let entries = Object.entries(tmp2.screens);
                                reduced = entries.reduce((arg0, arg1) => {
                                  let tmp;
                                  let tmp2;
                                  [tmp, tmp2] = arg1;
                                  if (typeof closure_1 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  if (typeof tmp2 === "object") {
                                    if (null != tmp2) {
                                      let obj = { initialRouteName: null, screens: null };
                                      obj[0] = tmp2.initialRouteName;
                                      let reduced;
                                      if (null != tmp2.screens) {
                                        if (typeof closure_2 !== "function") {
                                          HermesBuiltin.throwTypeError();
                                        }
                                        let _Object = Object;
                                        let entries = Object.entries(tmp2.screens);
                                        reduced = entries.reduce(() => { ... }, {});
                                      }
                                      obj[1] = reduced;
                                    }
                                    arg0[tmp] = {};
                                    return arg0;
                                  }
                                }, {});
                              }
                              obj[1] = reduced;
                            }
                            arg0[tmp] = {};
                            return arg0;
                          }
                        }, {});
                      }
                      obj[1] = reduced;
                    }
                    arg0[tmp] = {};
                    return arg0;
                  }
                }, {});
              }
              obj[1] = reduced;
            }
            arg0[tmp] = {};
            return arg0;
          }
        }, {});
      }
      obj[1] = reduced;
    }
  } else {
    obj1 = {};
  }
  if (null != index.index) {
    routes = index.routes;
    let substr = routes.slice(0, index.index + 1);
  } else {
    substr = index.routes;
  }
  if (0 !== substr.length) {
    if (1 !== substr.length) {
      if (2 === substr.length) {
        if (undefined === substr[0].key) {
          let initialRouteName;
          if (obj1 != null) {
            initialRouteName = obj1.initialRouteName;
          }
        }
      }
      obj2 = { type: "RESET", payload: null };
      obj2[1] = index;
      return obj2;
    }
    ({ index, routes } = index);
    if (index == null) {
      index = index.routes.length - 1;
    }
    let state;
    if (routes[index] != null) {
      state = tmp9.state;
    }
    if (obj1 != null) {
      let screens = obj1.screens;
      if (screens != null) {
        let name;
        if (tmp9 != null) {
          name = tmp9.name;
        }
        let tmp11 = screens[name];
      }
    }
    let obj3 = {};
    const merged = Object.assign(tmp9.params);
    let tmp15;
    if (routes[index]) {
      const obj4 = { name: null, path: null, params: null };
      ({ name: obj7[0], path: obj7[1] } = tmp9);
      obj4[2] = obj3;
      tmp15 = obj4;
    }
    let length = tmp15;
    if (tmp15) {
      screens = undefined;
      if (tmp11 != null) {
        screens = tmp11.screens;
      }
      length = screens;
    }
    if (length) {
      const _Object2 = Object;
      length = Object.keys(tmp11.screens).length;
    }
    if (length) {
      tmp15.pop = true;
    }
    if (state) {
      while (0 !== state.routes.length) {
        if (null != state.index) {
          let routes1 = state.routes;
          let substr1 = routes1.slice(0, state.index + 1);
        } else {
          substr1 = state.routes;
        }
        let tmp22 = substr1[substr1.length - 1];
        let _Object3 = Object;
        let merged1 = Object.assign(obj3, { initial: "Date", screen: "isArray", params: "isArray", state: "ty" });
        if (1 === substr1.length) {
          if (undefined === substr1[0].key) {
            obj3.initial = true;
            obj3.screen = tmp22.name;
            if (tmp22.state) {
              let obj5 = {};
              let tmp25 = obj5;
              let merged2 = Object.assign(tmp22.params);
              obj3.params = obj5;
              obj3.pop = true;
              let params = obj3.params;
            } else {
              ({ path: obj6.path, params: obj6.params } = tmp22);
              params = obj3;
            }
            state = tmp22.state;
            let tmp27;
            if (tmp11 != null) {
              let screens2 = tmp11.screens;
              if (screens2 != null) {
                tmp27 = screens2[tmp22.name];
              }
            }
            let screens1;
            if (tmp27 != null) {
              screens1 = tmp27.screens;
            }
            if (screens1) {
              let _Object4 = Object;
              screens1 = Object.keys(tmp27.screens).length;
            }
            if (screens1) {
              params.pop = true;
            }
            obj3 = params;
            tmp11 = tmp27;
          }
        }
        if (2 === substr1.length) {
          if (undefined === substr1[0].key) {
            let initialRouteName1;
            if (tmp11 != null) {
              initialRouteName1 = tmp11.initialRouteName;
            }
            if (substr1[0].name === initialRouteName1) {
              if (undefined === substr1[1].key) {
                obj3.initial = false;
                obj3.screen = tmp22.name;
              }
            }
          }
        }
        obj3.state = state;
      }
    }
    let screen;
    if (tmp15 != null) {
      screen = tmp15.params.screen;
    }
    if (!screen) {
      let state1;
      if (tmp15 != null) {
        state1 = tmp15.params.state;
      }
      screen = state1;
    }
    if (screen) {
      tmp15.pop = true;
    }
    if (tmp15) {
      const obj6 = { type: "NAVIGATE", payload: null };
      obj6[1] = tmp15;
      return obj6;
    }
  }
};