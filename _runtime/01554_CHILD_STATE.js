// === Module 1554: CHILD_STATE ===

// Module 1554 (CHILD_STATE)
import _mod1555 from "module_1555" /* 1555 */;

require = arg1;
const dependencyMap = arg6;

export const getFocusedRouteNameFromRoute = function getFocusedRouteNameFromRoute(state) {
  state = state[_mod1555.CHILD_STATE];
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
    let screen1;
    if (params != null) {
      screen1 = params.screen;
    }
    if (typeof screen1 === "string") {
      screen = params.screen;
    }
  }
  return screen;
};