import noop from "noop";

const require = arg1;
function getRootStateForNavigate(parent, state) {
  parent = parent.getParent();
  if (parent) {
    state = parent.getState();
    let obj = { index: 0, routes: null };
    obj = {};
    const merged = Object.assign(state.routes[state.index]);
    obj.state = state;
    const items = [obj];
    obj[1] = items;
    return getRootStateForNavigate(parent, obj);
  } else {
    return state;
  }
}

export default function useLinkBuilder() {
  context = React.useContext(context(1483).NavigationHelpersContext);
  context1 = React.useContext(context1(1558));
  let items = [context1, context];
  return React.useCallback((arg0, arg1) => {
    const options = context1.options;
    let enabled;
    if (options != null) {
      enabled = options.enabled;
    }
    if (false !== enabled) {
      let obj = context;
      obj = { index: 0, routes: null };
      obj = { name: null, params: null };
      if (context) {
        obj[0] = arg0;
        obj[1] = arg1;
        const items = [obj];
        obj[1] = items;
        if (typeof outer1_4 !== "fileFinishedImporting") {
          HermesBuiltin.throwTypeError();
        }
        const parent = obj.getParent();
        let tmp6 = obj;
        if (parent) {
          const state = parent.getState();
          const obj1 = { index: 0, routes: null };
          const obj2 = {};
          const merged = Object.assign(state.routes[state.index]);
          obj2.state = obj;
          const items1 = [obj2];
          obj1[1] = items1;
          if (typeof tmp5 !== "fileFinishedImporting") {
            HermesBuiltin.throwTypeError();
          }
          const parent1 = parent.getParent();
          let tmp5Result = obj1;
          if (parent1) {
            const state1 = parent1.getState();
            const obj3 = { index: 0, routes: null };
            const obj4 = {};
            const merged1 = Object.assign(state1.routes[state1.index]);
            obj4.state = obj1;
            const items2 = [obj4];
            obj3[1] = items2;
            tmp5Result = tmp5(parent1, obj3);
          }
          tmp6 = tmp5Result;
        }
        let tmp4 = tmp6;
      } else {
        obj[0] = arg0;
        obj[1] = arg1;
        const items3 = [obj];
        obj[1] = items3;
        tmp4 = obj;
      }
      let getPathFromState;
      if (options != null) {
        getPathFromState = options.getPathFromState;
      }
      if (getPathFromState) {
        let config;
        if (options != null) {
          config = options.config;
        }
        let pathFromState = options.getPathFromState(tmp4, config);
      } else {
        let config1;
        if (options != null) {
          config1 = options.config;
        }
        pathFromState = context(outer1_2[1]).getPathFromState(tmp4, config1);
        const obj10 = context(outer1_2[1]);
      }
      return pathFromState;
    }
  }, items);
};