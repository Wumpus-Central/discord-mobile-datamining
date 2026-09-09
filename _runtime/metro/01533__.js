// === Module 1533: ? ===

// Module 1533
const weakMap = new WeakMap();
function createNormalizedConfigItem(arg0) {

}
function createNormalizedConfigs(arg0) {

}

export const getActionFromState = function getActionFromState(index, initialRouteName) {
  if (initialRouteName) {
    let obj2 = weakMap;
    let obj1 = weakMap.get(initialRouteName);
    if (!obj1) {
      if (typeof createNormalizedConfigItem === "function") {
        if (typeof initialRouteName !== "object") {
          let obj = {};
          const result = obj2.set(initialRouteName, obj);
        } else {
          let tmp2 = null;
        }
        obj = { initialRouteName: initialRouteName.initialRouteName, screens: null };
        tmp2 = tmp2 != initialRouteName.screens;
        let reduced;
        if (tmp2) {
          if (typeof createNormalizedConfigs === "function") {
            const _Object = Object;
            const entries = Object.entries(tmp5);
            reduced = entries.reduce((acc, item) => {
              [tmp, tmp2] = item;
              if (typeof closure_1_1 === "function") {
                if (typeof tmp2 === "object") {
                  if (null != tmp2) {
                    let obj = { initialRouteName: tmp2.initialRouteName, screens: null };
                    let reduced;
                    if (null != tmp2.screens) {
                      if (typeof closure_1_2 === "function") {
                        let _Object = Object;
                        let entries = Object.entries(tmp5);
                        reduced = entries.reduce((acc, item) => {
                          [tmp, tmp2] = item;
                          if (typeof closure_1_1 === "function") {
                            if (typeof tmp2 === "object") {
                              if (null != tmp2) {
                                let obj = { initialRouteName: tmp2.initialRouteName, screens: null };
                                let reduced;
                                if (null != tmp2.screens) {
                                  if (typeof closure_1_2 === "function") {
                                    let _Object = Object;
                                    let entries = Object.entries(tmp5);
                                    reduced = entries.reduce((acc, item) => {
                                      [tmp, tmp2] = item;
                                      if (typeof closure_1_1 === "function") {
                                        if (typeof tmp2 === "object") {
                                          if (null != tmp2) {
                                            let obj = { initialRouteName: tmp2.initialRouteName, screens: null };
                                            let reduced;
                                            if (null != tmp2.screens) {
                                              if (typeof closure_1_2 === "function") {
                                                let _Object = Object;
                                                let entries = Object.entries(tmp5);
                                                reduced = entries.reduce((acc, item) => {
                                                  [tmp, tmp2] = item;
                                                  if (typeof closure_1_1 === "function") {
                                                    if (typeof tmp2 === "object") {
                                                      if (null != tmp2) {
                                                        let obj = { initialRouteName: tmp2.initialRouteName, screens: null };
                                                        let reduced;
                                                        if (null != tmp2.screens) {
                                                          if (typeof closure_1_2 === "function") {
                                                            let _Object = Object;
                                                            let entries = Object.entries(tmp5);
                                                            reduced = entries.reduce(() => { ... }, {});
                                                          } else {
                                                            throw new TypeError("Trying to call a non-function");
                                                          }
                                                        }
                                                        obj.screens = reduced;
                                                      }
                                                      acc[tmp] = obj;
                                                      return acc;
                                                    }
                                                    obj = {};
                                                  } else {
                                                    throw new TypeError("Trying to call a non-function");
                                                  }
                                                }, {});
                                              } else {
                                                throw new TypeError("Trying to call a non-function");
                                              }
                                            }
                                            obj.screens = reduced;
                                          }
                                          acc[tmp] = obj;
                                          return acc;
                                        }
                                        obj = {};
                                      } else {
                                        throw new TypeError("Trying to call a non-function");
                                      }
                                    }, {});
                                  } else {
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                }
                                obj.screens = reduced;
                              }
                              acc[tmp] = obj;
                              return acc;
                            }
                            obj = {};
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        }, {});
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    obj.screens = reduced;
                  }
                  acc[tmp] = obj;
                  return acc;
                }
                obj = {};
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }, {});
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        obj.screens = reduced;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
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
          initialRouteName = undefined;
          if (obj1 != null) {
            initialRouteName = obj1.initialRouteName;
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
    let state;
    if (routes[index] != null) {
      state = tmp10.state;
    }
    if (obj1 != null) {
      let screens = obj1.screens;
      if (screens != null) {
        let name;
        if (tmp10 != null) {
          name = tmp10.name;
        }
        let tmp12 = screens[name];
      }
    }
    obj2 = {};
    const merged = Object.assign(tmp10.params);
    let tmp16;
    if (routes[index]) {
      const obj3 = { name: null, path: null, params: null };
      ({ name: obj7.name, path: obj7.path } = tmp10);
      obj3.params = obj2;
      tmp16 = obj3;
    }
    let length = tmp16;
    if (tmp16) {
      screens = undefined;
      if (tmp12 != null) {
        screens = tmp12.screens;
      }
      length = screens;
    }
    if (length) {
      const _Object2 = Object;
      length = Object.keys(tmp12.screens).length;
    }
    if (length) {
      tmp16.pop = true;
    }
    if (state) {
      while (0 !== state.routes.length) {
        if (null != state.index) {
          let routes1 = state.routes;
          let substr1 = routes1.slice(0, state.index + 1);
        } else {
          substr1 = state.routes;
        }
        let tmp23 = substr1[substr1.length - 1];
        let _Object3 = Object;
        let merged1 = Object.assign(obj2, { initial: "Array", screen: "flexDirection", params: "y", state: "HermesInternal" });
        if (1 === substr1.length) {
          if (undefined === substr1[0].key) {
            obj2.initial = true;
            obj2.screen = tmp23.name;
            if (tmp23.state) {
              let obj4 = {};
              let merged2 = Object.assign(tmp23.params);
              obj2.params = obj4;
              obj2.pop = true;
              let params = obj2.params;
            } else {
              ({ path: obj6.path, params: obj6.params } = tmp23);
              params = obj2;
            }
            state = tmp23.state;
            let tmp28;
            if (tmp12 != null) {
              let screens2 = tmp12.screens;
              if (screens2 != null) {
                tmp28 = screens2[tmp23.name];
              }
            }
            let screens1;
            if (tmp28 != null) {
              screens1 = tmp28.screens;
            }
            if (screens1) {
              let _Object4 = Object;
              screens1 = Object.keys(tmp28.screens).length;
            }
            if (screens1) {
              params.pop = true;
            }
            obj2 = params;
            tmp12 = tmp28;
          }
        }
        if (2 === substr1.length) {
          if (undefined === substr1[0].key) {
            let initialRouteName1;
            if (tmp12 != null) {
              initialRouteName1 = tmp12.initialRouteName;
            }
            if (substr1[0].name === initialRouteName1) {
              if (undefined === substr1[1].key) {
                obj2.initial = false;
                obj2.screen = tmp23.name;
              }
            }
          }
        }
        obj2.state = state;
      }
    }
    let screen;
    if (tmp16 != null) {
      screen = tmp16.params.screen;
    }
    if (!screen) {
      let state1;
      if (tmp16 != null) {
        state1 = tmp16.params.state;
      }
      screen = state1;
    }
    if (screen) {
      tmp16.pop = true;
    }
    if (tmp16) {
      const action1 = { type: "NAVIGATE", payload: tmp16 };
      return action1;
    }
  }
};