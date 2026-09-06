// === Module 1538: ? ===

// Module 1538
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
                if (routes.every((name) => {
                  let tmp = typeof name === "object";
                  if (typeof name === "object") {
                    tmp = null != name;
                  }
                  if (tmp) {
                    tmp = "name" in name;
                  }
                  if (tmp) {
                    tmp = typeof name.name === "string";
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
            let obj = { name: params.screen, params: null, path: null, state: null };
            params = undefined;
            if ("params" in params) {
              if (typeof params.params === "object") {
                if (null != params.params) {
                  params = params.params;
                }
              }
            }
            obj.params = params;
            let path;
            if ("path" in params) {
              if (typeof params.path === "string") {
                path = params.path;
              }
            }
            obj.path = path;
            let tmp4;
            if ("params" in params) {
              if (typeof params.params === "object") {
                if (null != params.params) {
                  tmp4 = getStateFromRouteParams(params.params);
                }
              }
            }
            obj = { routes: null, state: tmp4 };
            const items = [obj];
            obj.routes = items;
            state = obj;
          }
        }
      }
    }
  }
}

export { getStateFromRouteParams };