// _runtime/metro/01576__.js
import Fragment from "../react/00021_Fragment.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _slicedToArray from "00032__slicedToArray.js";
import react from "../00019_react.js";

function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (StringResult) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const callResult = obj[Symbol.toPrimitive].call(obj[Symbol.toPrimitive], "string");
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(obj);
      }
    }
  }
  let text = StringResult;
  if (typeof StringResult !== "symbol") {
    text = `${tmp}`;
  }
  return text;
}
const jsx = Fragment.jsx;

export const useDescriptors = function useDescriptors(state) {
  let _undefined;
  let addListener;
  let c12;
  let c22;
  let c23;
  let closure_7;
  let emitter;
  let onAction;
  let router;
  let setState;
  let tmp2;
  state = state.state;
  ({ screens: dependencyMap, navigation } = state);
  ({ screenOptions: _slicedToArray, screenLayout: react, onAction } = state);
  const getState = state.getState;
  ({ setState: closure_7, addListener } = state);
  const addKeyedListener = state.addKeyedListener;
  const onRouteFocus = state.onRouteFocus;
  c12 = undefined;
  c22 = undefined;
  c23 = undefined;
  ({ router, emitter } = state);
  const theme = react.useContext(state(1527).ThemeContext);
  let tmp = _slicedToArray(react.useState({}), 2);
  [c12, tmp2] = tmp;
  let c13 = tmp2;
  const context = react.useContext(state(1520).NavigationBuilderContext);
  const onDispatchAction = context.onDispatchAction;
  const onEmitEvent = context.onEmitEvent;
  const onOptionsChange = context.onOptionsChange;
  const scheduleUpdate = context.scheduleUpdate;
  const flushUpdates = context.flushUpdates;
  const stackRef = context.stackRef;
  const getIsStateEmitted = context.getIsStateEmitted;
  let items = [
    navigation,
    onAction,
    addListener,
    addKeyedListener,
    onRouteFocus,
    onDispatchAction,
    onEmitEvent,
    onOptionsChange,
    getIsStateEmitted,
    scheduleUpdate,
    flushUpdates,
    stackRef,
  ];
  const value = react.useMemo(
    () => ({
      navigation,
      onAction,
      addListener,
      addKeyedListener,
      onRouteFocus,
      onDispatchAction,
      onEmitEvent,
      onOptionsChange,
      getIsStateEmitted,
      scheduleUpdate,
      flushUpdates,
      stackRef,
    }),
    items,
  );
  let obj = state(1577);
  const navigationCache = obj.useNavigationCache({ state, getState, navigation, setOptions: tmp2, router, emitter });
  ({ base: c22, navigations: c23 } = navigationCache);
  let obj2 = state(1542);
  const routeCache = obj2.useRouteCache(state.routes);
  function getOptions(arg0, arg1, arg2) {}
  function render(route, navigation, options, routeState) {
    let obj4;
    let closure_0 = route;
    const props = tmp.props;
    let layout = props.layout;
    if (layout == null) {
      layout = tmp.layout;
    }
    if (layout == null) {
      layout = closure_4;
    }
    const obj = {
      navigation,
      route,
      screen: props,
      routeState,
      getState,
      setState,
      options,
      clearOptions() {
        return c13((arg0) => {
          if (route.key in arg0) {
            const items = [route.key];
            return navigation(arg0, items.map(getState));
          } else {
            return arg0;
          }
        });
      },
    };
    const tmp5 = onAction(state(dependencyMap[8]).SceneView, obj);
    let layoutResult = tmp5;
    if (null != layout) {
      const obj2 = { route, navigation, options, theme, children: tmp5 };
      layoutResult = layout(obj2);
    }
    const obj3 = { value, children: onAction(state(dependencyMap[9]).NavigationProvider, obj4) };
    const Provider = state(dependencyMap[5]).NavigationBuilderContext.Provider;
    obj4 = { route, navigation, children: layoutResult };
    return onAction(Provider, obj3, route.key);
  }
  let reduced = routeCache.reduce((acc, route, index) => {
    if (typeof getOptions === "function") {
      let found;
      state = route;
      let closure_1 = tmp2;
      const items = [closure_3, ,];
      const props = tmp5.props;
      if (closure_1[route.name].options) {
        const options = tmp5.options;
        const _Boolean = Boolean;
        found = options.filter(Boolean);
      } else {
        found = [];
      }
      const arraySpreadResult = HermesBuiltin.arraySpread(items, found, 1);
      items[arraySpreadResult] = props.options;
      items[arraySpreadResult + 1] = tmp3;
      reduced = items.reduce((acc, fn) => {
        let tmp = fn;
        const _Object = Object;
        if (typeof fn === "function") {
          const obj = { route, navigation, theme };
          tmp = fn(obj);
        }
        return assign(acc, tmp);
      }, {});
      state = render(route, tmp2, reduced, state.routes[index].state);
      const obj = {
        route,
        navigation: _undefined[route.key],
        render() {
          return closure_0;
        },
        options: reduced,
      };
      acc[route.key] = obj;
      return acc;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }, {});
  let obj3 = {
    describe(route, arg1) {
      const tmp2 = arg1;
      if (tmp2) {
        if (typeof getOptions === "function") {
          let found;
          const items = [closure_3, ,];
          const props = tmp10.props;
          if (navigation[route.name].options) {
            const options = tmp10.options;
            const _Boolean = Boolean;
            found = options.filter(Boolean);
          } else {
            found = [];
          }
          let obj = {};
          const arraySpreadResult = HermesBuiltin.arraySpread(items, found, 1);
          items[arraySpreadResult] = props.options;
          items[arraySpreadResult + 1] = obj;
          reduced = items.reduce((acc, fn) => {
            let tmp = fn;
            const _Object = Object;
            if (typeof fn === "function") {
              const obj = { route, navigation, theme };
              tmp = fn(obj);
            }
            return assign(acc, tmp);
          }, {});
          route = render(route, navigation, reduced, undefined);
          return {
            route,
            navigation,
            render() {
              return closure_0;
            },
            options: reduced,
          };
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (route.key in reduced) {
        return tmp3[route.key];
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("Couldn't find a route with the key " + route.key + ".");
        throw error;
      }
    },
    descriptors: reduced,
  };
  return obj3;
};
