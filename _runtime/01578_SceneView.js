// _runtime/01578_SceneView.js
import Fragment from "react/00021_Fragment.js";
import react from "00019_react.js";

const jsx = Fragment.jsx;

export const SceneView = function SceneView(getState) {
  let EnsureSingleNavigator;
  let Provider2;
  let children;
  let childrenResult;
  let component;
  let obj4;
  let obj8;
  let route;
  let routeState;
  let screen;
  ({ screen, route } = getState);
  ({ navigation, routeState } = getState);
  getState = getState.getState;
  const setState = getState.setState;
  const clearOptions = getState.clearOptions;
  const options = getState.options;
  const ref = getState.useRef(undefined);
  const getKey = getState.useCallback(() => ref.current, []);
  let tmp2 = route;
  const tmp3 = routeState;
  let obj = route(routeState[2]);
  let obj2 = { key: route.key, options, navigation };
  const addOptionsGetter = obj.useOptionsGetters(obj2).addOptionsGetter;
  const callback1 = getState.useCallback((current) => {
    ref.current = current;
  }, []);
  let items = [getState, route.key];
  const callback2 = getState.useCallback(() => {
    let key;
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
    let closure_0 = arg0;
    let tmp = getState();
    const routes = tmp.routes;
    const mapped = routes.map((key) => {
      let tmp = key;
      if (key.key === route.key) {
        tmp = key;
        if (key.state !== closure_0) {
          const obj = { state: tmp2 };
          const merged = Object.assign(key);
          tmp = obj;
        }
      }
      return tmp;
    });
    let obj = route(routeState[3]);
    if (!obj.isArrayEqual(tmp.routes, mapped)) {
      const obj2 = { routes: mapped };
      let merged = Object.assign(tmp);
      setState(obj2);
    }
  }, items1);
  const ref2 = getState.useRef(true);
  const effect = getState.useEffect(() => {
    ref2.current = false;
  });
  const effect1 = getState.useEffect(() => clearOptions, []);
  const callback4 = getState.useCallback(() => ref2.current, []);
  const context = getState.useContext(route(routeState[4]).NavigationFocusedRouteStateContext);
  let items2 = [context, , , ,];
  ({ key: arr3[1], name: arr3[2], params: arr3[3], path: arr3[4] } = route);
  const items3 = [routeState, callback2, callback3, getKey, callback1, callback4, addOptionsGetter];
  const memo = getState.useMemo(() => {
    let items;
    let items1;
    let items2;
    let obj = { routes: items };
    let obj2 = { key: route.key, name: route.name, params: route.params, path: route.path };
    items = [obj2];
    function addState(state) {
      let items;
      let tmp2;
      let first;
      if (state != null) {
        first = state.routes[0];
      }
      if (first) {
        obj = { routes: items };
        const obj2 = { state: addState(first.state) };
        const merged = Object.assign(first);
        items = [obj2];
        tmp2 = obj;
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
      const obj3 = { state: obj };
      let merged = Object.assign(first);
      const state = first.state;
      let first1;
      if (state != null) {
        first1 = state.routes[0];
      }
      if (first1) {
        const obj4 = { routes: items1 };
        const obj5 = { state: addState(first1.state) };
        const merged1 = Object.assign(first1);
        items1 = [obj5];
        obj = obj4;
      }
      const obj6 = { routes: items2 };
      items2 = [obj3];
      tmp2 = obj6;
    }
    return tmp2;
  }, items2);
  const memo1 = getState.useMemo(
    () => ({
      state: routeState,
      getState: callback2,
      setState: callback3,
      getKey,
      setKey: callback1,
      getIsInitial: callback4,
      addOptionsGetter,
    }),
    items3,
  );
  if (screen.getComponent) {
    component = screen.getComponent();
  } else {
    component = screen.component;
  }
  let obj3 = { value: memo1, children: setState(Provider2, obj4) };
  const Provider = tmp2(tmp3[5]).NavigationStateContext.Provider;
  obj4 = { value: memo, children: setState(EnsureSingleNavigator, obj8) };
  Provider2 = tmp2(tmp3[4]).NavigationFocusedRouteStateContext.Provider;
  EnsureSingleNavigator = tmp2(tmp3[6]).EnsureSingleNavigator;
  let obj5 = { name: screen.name, render: children, navigation, route, children: childrenResult };
  children = component;
  const StaticContainer = tmp2(tmp3[7]).StaticContainer;
  if (!component) {
    children = screen.children;
  }
  if (undefined !== component) {
    let obj6 = { navigation, route };
    childrenResult = tmp13(component, obj6);
  } else {
    childrenResult = null;
    if (undefined !== screen.children) {
      const obj7 = { navigation, route };
      childrenResult = screen.children(obj7);
    }
  }
  obj8 = { children: setState(StaticContainer, obj5) };
  return setState(Provider, obj3);
};
