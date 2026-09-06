// _runtime/01534_CHILD_STATE.js
import _mod1535 from "metro/01535__.js";

require = arg1;
const dependencyMap = arg6;

export const getFocusedRouteNameFromRoute = function getFocusedRouteNameFromRoute(state) {
  state = state[_mod1535.CHILD_STATE];
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
