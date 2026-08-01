// === Module 1488: nanoid ===

// Module 1488 (nanoid)
const require = arg1;
const dependencyMap = arg6;
arg5.default = {
  getStateForAction(routes, type) {
    let closure_0 = routes;
    let closure_1 = type;
    type = type.type;
    if ("SET_PARAMS" === type) {
      if (type.source) {
        routes = routes.routes;
        let index = routes.findIndex((key) => key.key === type.source);
      } else {
        index = routes.index;
      }
      let tmp8 = null;
      if (-1 !== index) {
        let obj = {};
        let merged = Object.assign(routes);
        routes = routes.routes;
        obj.routes = routes.map((params) => {
          let tmp = params;
          if (arg1 === index) {
            let obj = {};
            const merged = Object.assign(params);
            obj = {};
            const merged1 = Object.assign(params.params);
            const merged2 = Object.assign(type.payload.params);
            obj.params = obj;
            tmp = obj;
          }
          return tmp;
        });
        tmp8 = obj;
      }
      return tmp8;
    } else if ("RESET" === type) {
      const payload = type.payload;
      let tmp2 = null;
      if (0 !== payload.routes.length) {
        const routes2 = payload.routes;
        tmp2 = null;
        if (!routes2.some((name) => {
          const routeNames = lib.routeNames;
          return !routeNames.includes(name.name);
        })) {
          let tmp3 = payload;
          if (false === payload.stale) {
            let tmp4 = null;
            if (routes.routeNames.length === payload.routeNames.length) {
              let routeNames = payload.routeNames;
              tmp4 = null;
              if (!routeNames.some((arg0) => {
                const routeNames = lib.routeNames;
                return !routeNames.includes(arg0);
              })) {
                obj = {};
                let merged1 = Object.assign(payload);
                const routes1 = payload.routes;
                obj.routes = routes1.map((key) => {
                  let tmp = key;
                  if (!key.key) {
                    const obj = {};
                    const merged = Object.assign(key);
                    const _HermesInternal = HermesInternal;
                    obj.key = "" + key.name + "-" + lib(type[0]).nanoid();
                    tmp = obj;
                    const obj2 = lib(type[0]);
                  }
                  return tmp;
                });
                tmp4 = obj;
              }
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
      }
      return tmp2;
    } else {
      return null;
    }
  },
  shouldActionChangeFocus(type) {
    return "NAVIGATE" === type.type;
  }
};