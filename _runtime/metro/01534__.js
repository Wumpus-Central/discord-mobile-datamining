// _runtime/metro/01534__.js
const weakMap = new WeakMap();
function createNormalizedConfigItem(arg0) {

}
function createNormalizedConfigs(arg0) {

}

export const getActionFromState = function getActionFromState(index, initialRouteName) {
  if (initialRouteName) {
    let obj4 = weakMap.get(initialRouteName);
    if (!obj4) {
      if (typeof createNormalizedConfigItem === "function") {
        if (typeof initialRouteName !== "object") {
          let obj = {};
          const result = weakMap.set(initialRouteName, obj);
        } else {
          let tmp2 = null;
        }
        const obj3 = { initialRouteName: initialRouteName.initialRouteName, screens: null };
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
                    let obj2 = { initialRouteName: tmp2.initialRouteName, screens: null };
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
                                let obj2 = { initialRouteName: tmp2.initialRouteName, screens: null };
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
                                            let obj2 = { initialRouteName: tmp2.initialRouteName, screens: null };
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
                                                        let obj2 = { initialRouteName: tmp2.initialRouteName, screens: null };
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
                                                        obj2.screens = reduced;
                                                        let obj = obj2;
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
                                            obj2.screens = reduced;
                                            let obj = obj2;
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
                                obj2.screens = reduced;
                                let obj = obj2;
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
                    obj2.screens = reduced;
                    let obj = obj2;
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
        obj3.screens = reduced;
        obj = obj3;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  } else {
    obj4 = {};
  }
  if (null != index.index) {
    const routes1 = index.routes;
    let substr = routes1.slice(0, index.index + 1);
  } else {
    substr = index.routes;
  }
  if (0 !== substr.length) {
    if (1 !== substr.length) {
      if (2 === substr.length) {
        if (undefined === substr[0].key) {
          initialRouteName = undefined;
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
      state1 = tmp10.state;
    }
    if (obj4 != null) {
      const screens = obj4.screens;
      if (screens != null) {
        let name;
        if (tmp10 != null) {
          name = tmp10.name;
        }
        let tmp12 = screens[name];
      }
    }
    let obj5 = {};
    const merged = Object.assign(tmp10.params);
    let tmp16;
    if (routes[index]) {
      const obj8 = { name: null, path: null, params: null };
      ({ name: obj7.name, path: obj7.path } = tmp10);
      obj8.params = obj5;
      tmp16 = obj8;
    }
    let length = tmp16;
    if (tmp16) {
      let screens1;
      if (tmp12 != null) {
        screens1 = tmp12.screens;
      }
      length = screens1;
    }
    if (length) {
      const _Object2 = Object;
      length = Object.keys(tmp12.screens).length;
    }
    if (length) {
      tmp16.pop = true;
    }
    if (state1) {
      while (0 !== state1.routes.length) {
        if (null != state1.index) {
          let routes2 = state1.routes;
          let substr1 = routes2.slice(0, state1.index + 1);
        } else {
          substr1 = state1.routes;
        }
        let tmp23 = substr1[substr1.length - 1];
        let _Object3 = Object;
        let merged1 = Object.assign(obj5, { initial: "Array", screen: "paddingHorizontal", params: "guild_id", state: "opacity" });
        if (1 === substr1.length) {
          if (undefined === substr1[0].key) {
            obj5.initial = true;
            obj5.screen = tmp23.name;
            if (tmp23.state) {
              let obj9 = {};
              let merged2 = Object.assign(tmp23.params);
              obj5.params = obj9;
              obj5.pop = true;
              let params = obj5.params;
            } else {
              ({ path: obj6.path, params: obj6.params } = tmp23);
              params = obj5;
            }
            let state = tmp23.state;
            let tmp28;
            if (tmp12 != null) {
              let screens2 = tmp12.screens;
              if (screens2 != null) {
                tmp28 = screens2[tmp23.name];
              }
            }
            let screens3;
            if (tmp28 != null) {
              screens3 = tmp28.screens;
            }
            if (screens3) {
              let _Object4 = Object;
              screens3 = Object.keys(tmp28.screens).length;
            }
            if (screens3) {
              params.pop = true;
            }
            obj5 = params;
            tmp12 = tmp28;
            state1 = state;
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
                obj5.initial = false;
                obj5.screen = tmp23.name;
              }
            }
          }
        }
        obj5.state = state1;
      }
    }
    let screen;
    if (tmp16 != null) {
      screen = tmp16.params.screen;
    }
    if (!screen) {
      let state2;
      if (tmp16 != null) {
        state2 = tmp16.params.state;
      }
      screen = state2;
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