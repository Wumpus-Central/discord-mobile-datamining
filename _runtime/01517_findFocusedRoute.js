// _runtime/01517_findFocusedRoute.js

export const findFocusedRoute = function findFocusedRoute(stateForPath) {
  let index;
  let index3;
  let routes;
  let routes3;
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
      let routes2 = tmp3.routes;
      if (index2 == null) {
        index2 = tmp3.routes.length - 1;
      }
      let tmp6 = routes2[index2];
      let state1;
      if (tmp6 != null) {
        state1 = tmp6.state;
      }
      state2 = undefined;
      if (state1 != null) {
        ({ index: index3, routes: routes3 } = state1);
        if (index3 == null) {
          index3 = state1.routes.length - 1;
        }
        let tmp9 = routes3[index3];
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
    let index1;
    const routes4 = tmp4.routes;
    if (tmp4 != null) {
      index1 = tmp4.index;
    }
    if (index1 == null) {
      index1 = tmp4.routes.length - 1;
    }
    tmp10 = routes4[index1];
  }
  return tmp10;
};
