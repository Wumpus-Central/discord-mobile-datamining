// _runtime/metro/01545__.js
function getStateFromRouteParams(params) {
  let items;
  let path;
  let tmp4;
  if (null != params) {
    if (typeof params === "object") {
      let state;
      if ("state" in params) {
        if (params.state) {
          if (typeof params.state === "object") {
            if ("routes" in params.state) {
              let tmp = globalThis;
              const _Array = Array;
              if (Array.isArray(params.state.routes)) {
                const routes = params.state.routes;
                if (
                  routes.every((name) => {
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
                  })
                ) {
                  state = params.state;
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
            const obj2 = { name: params.screen, params, path, state: tmp4 };
            params = undefined;
            if ("params" in params) {
              if (typeof params.params === "object") {
                if (null != params.params) {
                  params = params.params;
                }
              }
            }
            path = undefined;
            if ("path" in params) {
              if (typeof params.path === "string") {
                path = params.path;
              }
            }
            tmp4 = undefined;
            if ("params" in params) {
              if (typeof params.params === "object") {
                if (null != params.params) {
                  tmp4 = getStateFromRouteParams(params.params);
                }
              }
            }
            const obj = { routes: items };
            items = [obj2];
            state = obj;
          }
        }
      }
    }
  }
}

export { getStateFromRouteParams };
