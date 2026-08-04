import noop from "noop";
import { Platform } from "get ActivityIndicator";

const require = arg1;
const f23485 = (state) => {
  state = undefined;
  if (state != null) {
    state = state.state;
  }
  if (state) {
    state = state.state;
  } else {
    let screen;
    if (state != null) {
      screen = state.screen;
    }
    if (screen) {
      let obj = { name: null, params: null, state: null };
      ({ screen: obj[0], params: obj[1] } = state);
      let tmp3;
      if (state.screen) {
        tmp3 = f23485(state.params);
      }
      obj = { routes: null };
      obj[2] = tmp3;
      const items = [obj];
      obj[0] = items;
      state = obj;
    }
  }
  return state;
};

export default function useLinkProps(to) {
  to = to.to;
  const action = to.action;
  let dependencyMap;
  let React;
  let closure_4;
  dependencyMap = React.useContext(to(1483).NavigationContainerRefContext);
  React = React.useContext(to(1483).NavigationHelpersContext);
  const options = React.useContext(action(1558)).options;
  closure_4 = action(1559)();
  let getPathFromState;
  if (options != null) {
    getPathFromState = options.getPathFromState;
  }
  if (getPathFromState == null) {
    getPathFromState = to(1483).getPathFromState;
  }
  let pathFromState = to;
  if (typeof to !== "string") {
    let obj = { name: null, params: null, state: null };
    ({ screen: obj7[0], params: obj7[1] } = to);
    const params2 = to.params;
    if (typeof closure_4 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let state;
    if (params2 != null) {
      state = params2.state;
    }
    if (state) {
      state = params2.state;
    } else {
      let screen;
      if (params2 != null) {
        screen = params2.screen;
      }
      if (screen) {
        obj = { name: null, params: null, state: null };
        ({ screen: obj[0], params: obj[1] } = params2);
        if (!params2.screen) {
          obj = { routes: null };
          obj[2] = undefined;
          const items = [obj];
          obj[0] = items;
          state = obj;
        } else {
          const params = params2.params;
          if (typeof tmp12 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          let state1;
          if (params != null) {
            state1 = params.state;
          }
          if (state1) {
            let state2 = params.state;
          } else {
            let screen1;
            if (params != null) {
              screen1 = params.screen;
            }
            if (screen1) {
              const obj1 = { name: null, params: null, state: null };
              ({ screen: obj2[0], params: obj2[1] } = params);
              let tmp12Result;
              if (params.screen) {
                tmp12Result = tmp12(params.params);
              }
              let obj2 = { routes: null };
              obj1[2] = tmp12Result;
              const items1 = [obj1];
              obj2[0] = items1;
              state2 = obj2;
            }
          }
        }
      }
    }
    const obj3 = { routes: null };
    obj[2] = state;
    const items2 = [obj];
    obj3[0] = items2;
    let config;
    if (options != null) {
      config = options.config;
    }
    pathFromState = getPathFromState(obj3, config);
  }
  return {
    href: pathFromState,
    accessibilityRole: "link",
    onPress(defaultPrevented) {
      if (!defaultPrevented) {
        if (action) {
          if (noop) {
            obj.dispatch(tmp);
          } else {
            if (closure_2) {
              obj2.dispatch(tmp);
            } else {
              const _Error = Error;
              const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
              throw error;
            }
            obj2 = closure_2;
          }
          obj = noop;
        } else {
          callback(to);
        }
      }
    }
  };
};