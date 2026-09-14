// === Module 1571: SceneView ===

// Module 1571 (SceneView)
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;

export const SceneView = function SceneView(getState) {
  ({ screen, route } = getState);
  ({ navigation, routeState } = getState);
  getState = getState.getState;
  const setState = getState.setState;
  const clearOptions = getState.clearOptions;
  getState.useRef(undefined);
  const getKey = getState.useCallback(() => ref.current, []);
  const addOptionsGetter = route(routeState[2]).useOptionsGetters({ key: route.key, options: getState.options, navigation }).addOptionsGetter;
  const callback1 = getState.useCallback((current) => {
    closure_5.current = current;
  }, []);
  let items = [getState, route.key];
  const callback2 = getState.useCallback(() => {
    const routes = getState().routes;
    const found = routes.find((key) => key.key === key.key);
    let state;
    if (found) {
      state = found.state;
    }
    return state;
  }, items);
  let items1 = [getState, route.key, setState];
  const callback3 = getState.useCallback((arg0) => {
    closure_0 = arg0;
    let tmp = getState();
    const routes = tmp.routes;
    const mapped = routes.map((key) => {
      let tmp = key;
      if (key.key === route.key) {
        tmp = key;
        if (key.state !== closure_0) {
          const obj = {};
          const merged = Object.assign(key);
          obj.state = tmp2;
          tmp = obj;
        }
      }
      return tmp;
    });
    if (!obj.isArrayEqual(tmp.routes, mapped)) {
      const obj2 = {};
      let merged = Object.assign(tmp);
      obj2.routes = mapped;
      setState(obj2);
    }
    obj = route(routeState[3]);
  }, items1);
  getState.useRef(true);
  const effect = getState.useEffect(() => {
    closure_11.current = false;
  });
  const effect1 = getState.useEffect(() => clearOptions, []);
  const callback4 = getState.useCallback(() => ref2.current, []);
  const context = getState.useContext(route(routeState[4]).NavigationFocusedRouteStateContext);
  let items2 = [context, , , , ];
  ({ key: arr3[1], name: arr3[2], params: arr3[3], path: arr3[4] } = route);
  const items3 = [routeState, callback2, callback3, getKey, callback1, callback4, addOptionsGetter];
  const memo = getState.useMemo(() => {
    let state = { routes: null };
    let items = [{ key: route.key, name: route.name, params: route.params, path: route.path }];
    state.routes = items;
    function addState(state) {
      let first;
      if (state != null) {
        first = state.routes[0];
      }
      if (first) {
        const obj = { routes: null };
        const obj2 = {};
        const merged = Object.assign(first);
        obj2.state = addState(first.state);
        const items = [obj2];
        obj.routes = items;
        let tmp2 = obj;
      } else {
        tmp2 = obj;
      }
      return tmp2;
    }
    let first;
    if (context != null) {
      first = context.routes[0];
    }
    let tmp2 = state;
    if (first) {
      const obj3 = {};
      let merged = Object.assign(first);
      state = first.state;
      let first1;
      if (state != null) {
        first1 = state.routes[0];
      }
      if (first1) {
        const obj4 = { routes: null };
        const obj5 = {};
        const merged1 = Object.assign(first1);
        obj5.state = addState(first1.state);
        const items1 = [obj5];
        obj4.routes = items1;
        state = obj4;
      }
      const obj6 = { routes: null };
      obj3.state = state;
      const items2 = [obj3];
      obj6.routes = items2;
      tmp2 = obj6;
    }
    return tmp2;
  }, items2);
  const memo1 = getState.useMemo(() => ({ state: routeState, getState: callback2, setState: callback3, getKey, setKey: callback1, getIsInitial: callback4, addOptionsGetter }), items3);
  if (screen.getComponent) {
    let component = screen.getComponent();
  } else {
    component = screen.component;
  }
  let obj3 = { value: memo1, children: null };
  let obj4 = { value: memo, children: null };
  let obj5 = { name: screen.name, render: null, navigation: null, route: null, children: null };
  let children = component;
  if (!component) {
    children = screen.children;
  }
  obj5.render = children;
  obj5.navigation = navigation;
  obj5.route = route;
  if (undefined !== component) {
    let obj6 = { navigation, route };
    let childrenResult = tmp13(component, obj6);
  } else {
    childrenResult = null;
    if (undefined !== screen.children) {
      const obj7 = { navigation, route };
      childrenResult = screen.children(obj7);
    }
  }
  let obj = route(routeState[2]);
  let obj2 = { key: route.key, options: getState.options, navigation };
  obj5.children = childrenResult;
  obj4.children = setState(route(routeState[6]).EnsureSingleNavigator, { children: setState(route(routeState[7]).StaticContainer, obj5) });
  obj3.children = setState(route(routeState[4]).NavigationFocusedRouteStateContext.Provider, obj4);
  return setState(route(routeState[5]).NavigationStateContext.Provider, obj3);
};