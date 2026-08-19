// _runtime/01508_nanoid.js
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
              if (!routes2.some((item, index) => !set.has(item.name))) {
                let tmp3 = payload;
                if (false === payload.stale) {
                  let tmp4 = null;
                  if (routeNames.routeNames.length === payload.routeNames.length) {
                    routeNames = payload.routeNames;
                    tmp4 = null;
                    if (!routeNames.some((item, index) => !set.has(item))) {
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
                            obj.routes = routes.map((item, index) => {
                              if (!("key" in item)) {
                                const obj = {};
                                const merged = Object.assign(item);
                                const _HermesInternal = HermesInternal;
                                obj.key = "" + item.name + "-" + type(index[0]).nanoid();
                                let tmp = obj;
                                const obj2 = type(index[0]);
                              } else {
                                tmp = item;
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
      let index = routes.findIndex((item, index) => item.key === type.source);
    } else {
      index = routeNames.index;
    }
    let tmp9 = null;
    if (-1 !== index) {
      obj = {};
      let merged1 = Object.assign(routeNames);
      const routes1 = routeNames.routes;
      obj.routes = routes1.map((item, index) => {
        if (index !== index) {
          return item;
        } else {
          const obj = {};
          const merged = Object.assign(item);
          payload = type;
          if ("REPLACE_PARAMS" === type.type) {
            ({ payload, params } = payload);
          } else {
            params = {};
            const merged1 = Object.assign(item.params);
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