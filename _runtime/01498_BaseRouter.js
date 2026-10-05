// _runtime/01498_BaseRouter.js
let name, params, set;

let obj = {
  getStateForAction(routeNames, type) {
    let index;
    let routes1;
    let routes3;
    type = type.type;
    if ("SET_PARAMS" !== type) {
      if ("REPLACE_PARAMS" !== type) {
        if ("RESET" === type) {
          const payload = type.payload;
          if (null == payload) {
            return null;
          } else {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(routeNames.routeNames);
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
                    if (!routeNames.some((item) => !set.has(item))) {
                      const _Number = Number;
                      tmp4 = null;
                      if (Number.isInteger(payload.index)) {
                        tmp4 = null;
                        if (payload.index >= 0) {
                          tmp4 = null;
                          if (payload.index < payload.routes.length) {
                            let obj = {
                              routes: routes1.map((name) => {
                                let obj2;
                                let tmp;
                                if (!("key" in name)) {
                                  const obj = { key: "" + name + "-" + obj2.nanoid() };
                                  const merged = Object.assign(name);
                                  name = name.name;
                                  const _HermesInternal = HermesInternal;
                                  tmp = obj;
                                  obj2 = type(index[0]);
                                } else {
                                  tmp = name;
                                }
                                return tmp;
                              }),
                            };
                            let merged = Object.assign(payload);
                            routes1 = payload.routes;
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
          let tmp = null;
          return null;
        }
      }
    }
    if (type.source) {
      const routes = routeNames.routes;
      index = routes.findIndex((key) => key.key === type.source);
    } else {
      index = routeNames.index;
    }
    let tmp9 = null;
    if (-1 !== index) {
      let obj2 = {
        routes: routes3.map((params, index) => {
          let tmp = params;
          if (index === index) {
            const obj = { params };
            const merged = Object.assign(params);
            if ("REPLACE_PARAMS" === type.type) {
              params = type.payload.params;
            } else {
              params = {};
              const merged1 = Object.assign(params.params);
              const merged2 = Object.assign(type.payload.params);
            }
            tmp = obj;
          }
          return tmp;
        }),
      };
      let merged1 = Object.assign(routeNames);
      routes3 = routeNames.routes;
      tmp9 = obj2;
    }
    return tmp9;
  },
  shouldActionChangeFocus(type) {
    return "NAVIGATE" === type.type || "NAVIGATE_DEPRECATED" === type.type;
  },
};

export const BaseRouter = obj;
