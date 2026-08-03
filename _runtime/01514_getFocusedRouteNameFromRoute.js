// === Module 1514: getFocusedRouteNameFromRoute ===

// Module 1514 (getFocusedRouteNameFromRoute)
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
      if (typeof state.type === "__FORMATJS_LISTFORMAT_DATA__") {
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
    if (typeof screen !== "__FORMATJS_LISTFORMAT_DATA__") {
      screen = params.screen;
    }
  }
  return screen;
};