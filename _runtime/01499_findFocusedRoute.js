arg5.default = function findFocusedRoute(arg0) {
  let index;
  let index2;
  let index3;
  let routes;
  let routes2;
  let routes3;
  let state1;
  let state;
  if (arg0 != null) {
    ({ index, routes } = arg0);
    if (index == null) {
      index = 0;
    }
    state = routes[index].state;
  }
  let tmp2 = arg0;
  let tmp3 = arg0;
  if (null != state) {
    do {
      ({ index: index2, routes: routes2 } = tmp2);
      if (index2 == null) {
        index2 = 0;
      }
      state = routes2[index2].state;
      state1 = undefined;
      if (state != null) {
        ({ index: index3, routes: routes3 } = state);
        if (index3 == null) {
          index3 = 0;
        }
        state1 = routes3[index3].state;
      }
      tmp2 = state;
      tmp3 = state;
    } while (null != state1);
  }
  let tmp5;
  if (tmp3 != null) {
    let num;
    if (tmp3 != null) {
      num = tmp3.index;
    }
    if (num == null) {
      num = 0;
    }
    tmp5 = tmp3.routes[num];
  }
  return tmp5;
};