// _runtime/01507_nanoid.js
const require = arg1;
const dependencyMap = arg6;
arg5.BaseRouter = {
  getStateForAction(routeNames, type) {
    closure_0 = type;
    type = type.type;
    if ("SET_PARAMS" !== type) {
      if ("REPLACE_PARAMS" !== type) {
        if ("RESET" === type) {
          const payload = type.payload;
          if (null == payload) {
            return null;
          } else {
            const _Set = Set;
            const set = new Set(routeNames.routeNames);
            let tmp8 = null;
            if (0 !== payload.routes.length) {
              const routes2 = payload.routes;
              tmp8 = null;
              if (!routes2.some((name) => !set.has(name.name))) {
                let tmp3 = payload;
                if (false === payload.stale) {
                  let tmp4 = null;
                  if (routeNames.routeNames.length === payload.routeNames.length) {
                    routeNames = payload.routeNames;
                    tmp4 = null;
                    if (!routeNames.some((arg0) => !set.has(arg0))) {
                      const _Number = Number;
                      tmp4 = null;
                      if (Number.isInteger(payload.index)) {
                        tmp4 = null;
                        if (payload.index >= 0) {
                          tmp4 = null;
                          if (payload.index < payload.routes.length) {
                            let obj = {};
                            let merged = Object.assign(payload);
                            let routes = payload.routes;
                            obj.routes = routes.map((name) => {
                              if (!("key" in name)) {
                                const obj = {};
                                const merged = Object.assign(name);
                                const _HermesInternal = HermesInternal;
                                obj.key = "" + name.name + "-" + type(index[0]).nanoid();
                                let tmp = obj;
                                const obj2 = type(index[0]);
                              } else {
                                tmp = name;
                              }
                              return tmp;
                            });
                            tmp4 = obj;
                          }
                        }
                      }
                    }
                  }
                  tmp3 = tmp4;
                }
                tmp8 = tmp3;
              }
            }
            return tmp8;
          }
        } else {
          return null;
        }
      }
    }
    if (type.source) {
      routes = routeNames.routes;
      let index = routes.findIndex((key) => key.key === type.source);
    } else {
      index = routeNames.index;
    }
    let tmp9 = null;
    if (-1 !== index) {
      obj = {};
      let merged1 = Object.assign(routeNames);
      const routes1 = routeNames.routes;
      obj.routes = routes1.map((params) => {
        if (arg1 !== index) {
          return params;
        } else {
          const obj = {};
          const merged = Object.assign(params);
          payload = type;
          if ("REPLACE_PARAMS" === type.type) {
            ({ payload, params } = payload);
          } else {
            params = {};
            const merged1 = Object.assign(params.params);
            const merged2 = Object.assign(payload.payload.params);
          }
          obj.params = params;
        }
      });
      tmp9 = obj;
    }
    return tmp9;
  },
  shouldActionChangeFocus(type) {
    let tmp = "NAVIGATE" === type.type;
    if (!tmp) {
      tmp = "NAVIGATE_DEPRECATED" === type.type;
    }
    return tmp;
  }
};