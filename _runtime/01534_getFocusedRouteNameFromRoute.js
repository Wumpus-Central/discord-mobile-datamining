// === Module 1534: getFocusedRouteNameFromRoute ===

// Module 1534 (getFocusedRouteNameFromRoute)
import CHILD_STATE from "CHILD_STATE" /* 1535 */;

require = arg1;
const dependencyMap = arg6;
arg5.getFocusedRouteNameFromRoute = function getFocusedRouteNameFromRoute(state) {
  state = state[CHILD_STATE.CHILD_STATE];
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