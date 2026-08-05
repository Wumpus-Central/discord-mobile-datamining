// _runtime/01513_createNormalizedConfigItem.js
function createNormalizedConfigItem(arg0) {

}
function createNormalizedConfigs(arg0) {

}
arg5.default = function getActionFromState(stateFromPath, config1) {
  let index;
  let routes;
  let reduce = config1;
  if (config1) {
    if (typeof createNormalizedConfigItem !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (typeof reduce !== "object") {
      let obj = {};
    } else {
      let tmp2 = null;
    }
    obj = { initialRouteName: null, screens: null };
    obj[0] = reduce.initialRouteName;
    tmp2 = tmp2 != reduce.screens;
    let reduced;
    if (tmp2) {
      if (typeof createNormalizedConfigs !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const _Object = Object;
      const entries = Object.entries(reduce.screens);
      reduce = entries.reduce;
      reduced = reduce((arg0, arg1) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg1;
        if (typeof closure_0 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (typeof tmp2 === "object") {
          if (null != tmp2) {
            let obj = { initialRouteName: null, screens: null };
            obj[0] = tmp2.initialRouteName;
            let reduced;
            if (null != tmp2.screens) {
              if (typeof closure_1 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              let _Object = Object;
              let entries = Object.entries(tmp2.screens);
              reduced = entries.reduce((arg0, arg1) => {
                let tmp;
                let tmp2;
                [tmp, tmp2] = arg1;
                if (typeof closure_0 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                if (typeof tmp2 === "object") {
                  if (null != tmp2) {
                    let obj = { initialRouteName: null, screens: null };
                    obj[0] = tmp2.initialRouteName;
                    let reduced;
                    if (null != tmp2.screens) {
                      if (typeof closure_1 !== "function") {
                        HermesBuiltin.throwTypeError();
                      }
                      let _Object = Object;
                      let entries = Object.entries(tmp2.screens);
                      reduced = entries.reduce((arg0, arg1) => {
                        let tmp;
                        let tmp2;
                        [tmp, tmp2] = arg1;
                        if (typeof closure_0 !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        if (typeof tmp2 === "object") {
                          if (null != tmp2) {
                            let obj = { initialRouteName: null, screens: null };
                            obj[0] = tmp2.initialRouteName;
                            let reduced;
                            if (null != tmp2.screens) {
                              if (typeof closure_1 !== "function") {
                                HermesBuiltin.throwTypeError();
                              }
                              let _Object = Object;
                              let entries = Object.entries(tmp2.screens);
                              reduced = entries.reduce((arg0, arg1) => {
                                let tmp;
                                let tmp2;
                                [tmp, tmp2] = arg1;
                                if (typeof closure_0 !== "function") {
                                  HermesBuiltin.throwTypeError();
                                }
                                if (typeof tmp2 === "object") {
                                  if (null != tmp2) {
                                    let obj = { initialRouteName: null, screens: null };
                                    obj[0] = tmp2.initialRouteName;
                                    let reduced;
                                    if (null != tmp2.screens) {
                                      if (typeof closure_1 !== "function") {
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
  } else {
    obj = {};
    if (null != stateFromPath.index) {
      routes = stateFromPath.routes;
      let substr = routes.slice(0, stateFromPath.index + 1);
    } else {
      substr = stateFromPath.routes;
    }
    if (0 !== substr.length) {
      if (1 !== substr.length) {
        const obj1 = { type: "RESET", payload: null };
        obj1[1] = stateFromPath;
        return obj1;
      }
      ({ index, routes } = stateFromPath);
      if (index == null) {
        index = stateFromPath.routes.length - 1;
      }
      let state;
      if (routes[index] != null) {
        state = tmp9.state;
      }
      const screens = obj.screens;
      if (screens != null) {
        let name;
        if (tmp9 != null) {
          name = tmp9.name;
        }
        let tmp11 = screens[name];
      }
      let obj2 = {};
      const merged = Object.assign(tmp9.params);
      let tmp15;
      if (routes[index]) {
        const obj3 = { name: null, path: null, params: null };
        ({ name: obj6[0], path: obj6[1] } = tmp9);
        obj3[2] = obj2;
        tmp15 = obj3;
      }
      if (state) {
        while (0 !== state.routes.length) {
          if (null != state.index) {
            let routes1 = state.routes;
            let substr1 = routes1.slice(0, state.index + 1);
          } else {
            substr1 = state.routes;
          }
          let tmp20 = substr1[substr1.length - 1];
          let _Object2 = Object;
          let merged1 = Object.assign(obj2, { initial: "PX_8", screen: "accessible", params: "Boolean", state: "Symbol" });
          if (1 === substr1.length) {
            if (undefined === substr1[0].key) {
              obj2.initial = true;
              obj2.screen = tmp20.name;
              if (tmp20.state) {
                let obj4 = {};
                let tmp23 = obj4;
                let merged2 = Object.assign(tmp20.params);
                obj2.params = obj4;
                let params = obj2.params;
              } else {
                ({ path: obj5.path, params: obj5.params } = tmp20);
                params = obj2;
              }
              state = tmp20.state;
              let tmp25;
              if (tmp11 != null) {
                let screens2 = tmp11.screens;
                if (screens2 != null) {
                  tmp25 = screens2[tmp20.name];
                }
              }
              tmp11 = tmp25;
              obj2 = params;
            }
          }
          if (2 === substr1.length) {
            if (undefined === substr1[0].key) {
              let initialRouteName;
              if (tmp11 != null) {
                initialRouteName = tmp11.initialRouteName;
              }
              if (substr1[0].name === initialRouteName) {
                if (undefined === substr1[1].key) {
                  obj2.initial = false;
                  obj2.screen = tmp20.name;
                }
              }
            }
          }
          obj2.state = state;
        }
      }
      if (tmp15) {
        const obj5 = { type: "NAVIGATE", payload: null };
        obj5[1] = tmp15;
        return obj5;
      }
    }
  }
};