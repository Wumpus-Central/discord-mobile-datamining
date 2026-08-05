// _runtime/01514_getFocusedRouteNameFromRoute.js
const require = arg1;
const dependencyMap = arg6;
arg5.default = function getFocusedRouteNameFromRoute(state) {
  let index;
  let routes;
  state = state[require(undefined, 1515) /* useRouteCache */.CHILD_STATE];
  if (state == null) {
    state = state.state;
  }
  const params = state.params;
  if (state) {
    ({ index, routes } = state);
    if (index == null) {
      if (typeof state.type !== "string") {
        let num2 = state.routes.length - 1;
      } else {
        num2 = 0;
      }
      index = num2;
    }
    let screen = routes[index].name;
  } else {
    screen = undefined;
    if (params != null) {
      screen = params.screen;
    }
    if (typeof screen === "string") {
      screen = params.screen;
    }
  }
  return screen;
};