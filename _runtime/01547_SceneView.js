// _runtime/01547_SceneView.js
import noop from "noop";
import { jsx } from "jsxProd";


export default function SceneView(getState) {
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
  closure_5 = getState.useRef();
  callback = getState.useCallback(() => ref.current, []);
  let obj = { key: route.key, options: getState.options, navigation };
  addOptionsGetter = route(routeState[2])(obj).addOptionsGetter;
  callback1 = getState.useCallback((current) => {
    closure_5.current = current;
  }, []);
  const items = [getState, route.key];
  callback2 = getState.useCallback(() => {
    const routes = getState().routes;
    const found = routes.find((key) => key.key === key.key);
    let state;
    if (found) {
      state = found.state;
    }
    return state;
  }, items);
  const items1 = [getState, route.key, setState];
  callback3 = getState.useCallback((arg0) => {
    let closure_0 = arg0;
    let tmp = getState();
    let obj = {};
    let merged = Object.assign(tmp);
    const routes = tmp.routes;
    obj.routes = routes.map((key) => {
      let tmp = key;
      if (key.key === key.key) {
        const obj = {};
        const merged = Object.assign(key);
        obj.state = key;
        tmp = obj;
      }
      return tmp;
    });
    setState(obj);
  }, items1);
  closure_11 = getState.useRef(true);
  const effect = getState.useEffect(() => {
    closure_11.current = false;
  });
  const effect1 = getState.useEffect(() => clearOptions, []);
  callback4 = getState.useCallback(() => ref2.current, []);
  const items2 = [routeState, callback2, callback3, callback, callback1, callback4, addOptionsGetter];
  const memo = getState.useMemo(() => ({ state: routeState, getState: callback2, setState: callback3, getKey: callback, setKey: callback1, getIsInitial: callback4, addOptionsGetter }), items2);
  if (screen.getComponent) {
    let component = screen.getComponent();
  } else {
    component = screen.component;
  }
  obj = { value: memo, children: null };
  let tmp2Result = tmp2(tmp3[4]);
  obj = { name: screen.name, render: null, navigation: null, route: null, children: null };
  let children = component;
  tmp2Result = tmp2(tmp3[5]);
  if (!component) {
    children = screen.children;
  }
  obj[1] = children;
  obj[2] = navigation;
  obj[3] = route;
  if (undefined !== component) {
    const obj1 = { navigation: null, route: null };
    obj1[0] = navigation;
    obj1[1] = route;
    let childrenResult = tmp11(component, obj1);
  } else {
    childrenResult = null;
    if (undefined !== screen.children) {
      const obj2 = { navigation: null, route: null };
      obj2[0] = navigation;
      obj2[1] = route;
      childrenResult = screen.children(obj2);
    }
  }
  obj[4] = childrenResult;
  obj[1] = setState(tmp2Result, { children: setState(tmp2Result, obj) });
  return setState(route(routeState[3]).Provider, obj);
};