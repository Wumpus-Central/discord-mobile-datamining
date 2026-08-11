// _runtime/01526_findFocusedRoute.js
arg5.findFocusedRoute = function findFocusedRoute(stateForPath) {
  let index;
  let index3;
  let routes;
  let routes2;
  let state2;
  let state;
  if (stateForPath != null) {
    ({ index, routes } = stateForPath);
    if (index == null) {
      index = stateForPath.routes.length - 1;
    }
    if (routes[index] != null) {
      state = tmp2.state;
    }
  }
  let tmp3 = stateForPath;
  let tmp4 = stateForPath;
  if (null != state) {
    do {
      let index2 = tmp3.index;
      let tmp5 = tmp3;
      if (index2 == null) {
        index2 = tmp3.routes.length - 1;
      }
      let tmp6 = tmp3.routes[index2];
      let state1;
      if (tmp6 != null) {
        state1 = tmp6.state;
      }
      state2 = undefined;
      if (state1 != null) {
        ({ index: index3, routes: routes2 } = state1);
        if (index3 == null) {
          index3 = state1.routes.length - 1;
        }
        let tmp9 = routes2[index3];
        if (tmp9 != null) {
          state2 = tmp9.state;
        }
      }
      tmp3 = state1;
      tmp4 = state1;
    } while (null != state2);
  }
  let tmp10;
  if (tmp4 != null) {
    index = undefined;
    if (tmp4 != null) {
      index = tmp4.index;
    }
    if (index == null) {
      index = tmp4.routes.length - 1;
    }
    tmp10 = tmp4.routes[index];
  }
  return tmp10;
};