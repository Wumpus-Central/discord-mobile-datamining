// === Module 1538: getStateFromRouteParams ===

// Module 1538 (getStateFromRouteParams)
function getStateFromRouteParams(params) {
  if (null != params) {
    if (typeof params === "object") {
      if ("state" in params) {
        if (params.state) {
          if (typeof params.state === "object") {
            if ("routes" in params.state) {
              const _Array = Array;
              if (Array.isArray(params.state.routes)) {
                const routes = params.state.routes;
                if (routes.every((obj) => {
                  let tmp = typeof obj === "object";
                  if (typeof obj === "object") {
                    tmp = null != obj;
                  }
                  if (tmp) {
                    tmp = "name" in obj;
                  }
                  if (tmp) {
                    tmp = typeof obj.name === "string";
                  }
                  return tmp;
                })) {
                  let state = params.state;
                }
                return state;
              }
            }
          }
        }
      }
      if ("screen" in params) {
        if (params.screen) {
          if (typeof params.screen === "string") {
            let obj = { name: null, params: null, path: null, state: null };
            obj[0] = params.screen;
            params = undefined;
            if ("params" in params) {
              if (typeof params.params === "object") {
                if (null != params.params) {
                  params = params.params;
                }
              }
            }
            obj[1] = params;
            let path;
            if ("path" in params) {
              if (typeof params.path === "string") {
                path = params.path;
              }
            }
            obj[2] = path;
            let tmp4;
            if ("params" in params) {
              if (typeof params.params === "object") {
                if (null != params.params) {
                  tmp4 = getStateFromRouteParams(params.params);
                }
              }
            }
            obj = { routes: null };
            obj[3] = tmp4;
            const items = [obj];
            obj[0] = items;
            state = obj;
          }
        }
      }
    }
  }
}
arg5.getStateFromRouteParams = getStateFromRouteParams;