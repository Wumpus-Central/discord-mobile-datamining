// _runtime/01587_SceneView.js
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;

export const SceneView = function SceneView(getState) {
  let navigation;
  let route;
  let routeState;
  let screen;
  ({ screen, route } = getState);
  ({ navigation, routeState } = getState);
  getState = getState.getState;
  const setState = getState.setState;
  const clearOptions = getState.clearOptions;
  let closure_5;
  let callback;
  let addOptionsGetter;
  let callback1;
  let callback2;
  let callback3;
  let closure_11;
  let callback4;
  let context;
  closure_5 = getState.useRef(undefined);
  callback = getState.useCallback(() => ref.current, []);
  let obj = route(routeState[2]);
  obj = { key: route.key, options: getState.options, navigation };
  addOptionsGetter = obj.useOptionsGetters(obj).addOptionsGetter;
  callback1 = getState.useCallback((current) => {
    closure_5.current = current;
  }, []);
  let items = [getState, route.key];
  callback2 = getState.useCallback(() => {
    const routes = getState().routes;
    const found = routes.find((key) => key.key === key.key);
    let state;
    if (found) {
      state = found.state;
    }
    return state;
  }, items);
  let items1 = [getState, route.key, setState];
  callback3 = getState.useCallback((arg0) => {
    let closure_0 = arg0;
    let tmp = getState();
    const routes = tmp.routes;
    const mapped = routes.map((key) => {
      let tmp = key;
      if (key.key === key.key) {
        tmp = key;
        if (key.state !== key) {
          const obj = {};
          const merged = Object.assign(key);
          obj.state = tmp2;
          tmp = obj;
        }
      }
      return tmp;
    });
    let obj = route(routeState[3]);
    if (!obj.isArrayEqual(tmp.routes, mapped)) {
      obj = {};
      let merged = Object.assign(tmp);
      obj.routes = mapped;
      setState(obj);
    }
  }, items1);
  closure_11 = getState.useRef(true);
  const effect = getState.useEffect(() => {
    closure_11.current = false;
  });
  const effect1 = getState.useEffect(() => clearOptions, []);
  callback4 = getState.useCallback(() => ref2.current, []);
  context = getState.useContext(route(routeState[4]).NavigationFocusedRouteStateContext);
  let items2 = [context, , , , ];
  ({ key: arr3[1], name: arr3[2], params: arr3[3], path: arr3[4] } = route);
  const items3 = [routeState, callback2, callback3, callback, callback1, callback4, addOptionsGetter];
  const memo = getState.useMemo(() => {
    let obj = { routes: items };
    obj = { key: obj.key, name: obj.name, params: obj.params, path: obj.path };
    items = [obj];
    function addState(state) {
      let first;
      if (state != null) {
        first = state.routes[0];
      }
      if (first) {
        let obj = { routes: null };
        obj = {};
        const merged = Object.assign(first);
        obj.state = addState(first.state);
        const items = [obj];
        obj[0] = items;
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
    let tmp2 = obj;
    if (first) {
      obj = {};
      let merged = Object.assign(first);
      const state = first.state;
      let first1;
      if (state != null) {
        first1 = state.routes[0];
      }
      if (first1) {
        const obj1 = { routes: null };
        const obj2 = {};
        const merged1 = Object.assign(first1);
        obj2.state = addState(first1.state);
        const items1 = [obj2];
        obj1[0] = items1;
        obj = obj1;
      }
      const obj3 = { routes: null };
      obj.state = obj;
      const items2 = [obj];
      obj3[0] = items2;
      tmp2 = obj3;
    }
    return tmp2;
  }, items2);
  const memo1 = getState.useMemo(() => ({ state: routeState, getState: callback2, setState: callback3, getKey: callback, setKey: callback1, getIsInitial: callback4, addOptionsGetter }), items3);
  if (screen.getComponent) {
    let component = screen.getComponent();
  } else {
    component = screen.component;
  }
  obj = { value: memo1, children: null };
  let obj1 = { value: memo, children: null };
  let obj2 = { name: screen.name, render: null, navigation: null, route: null, children: null };
  let children = component;
  if (!component) {
    children = screen.children;
  }
  obj2[1] = children;
  obj2[2] = navigation;
  obj2[3] = route;
  if (undefined !== component) {
    let obj3 = { navigation: null, route: null };
    obj3[0] = navigation;
    obj3[1] = route;
    let childrenResult = tmp13(component, obj3);
  } else {
    childrenResult = null;
    if (undefined !== screen.children) {
      const obj4 = { navigation: null, route: null };
      obj4[0] = navigation;
      obj4[1] = route;
      childrenResult = screen.children(obj4);
    }
  }
  obj2[4] = childrenResult;
  obj1[1] = setState(route(routeState[6]).EnsureSingleNavigator, { children: setState(route(routeState[7]).StaticContainer, obj2) });
  obj[1] = setState(route(routeState[4]).NavigationFocusedRouteStateContext.Provider, obj1);
  return setState(route(routeState[5]).NavigationStateContext.Provider, obj);
};