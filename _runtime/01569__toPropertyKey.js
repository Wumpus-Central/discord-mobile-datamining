// _runtime/01569__toPropertyKey.js
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import _slicedToArray from "metro/00032__.js";
import noop from "metro/00019__.js";

const require = fn;
function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (obj) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const call = tmp3.call;
        if (typeof call === "unknown") {
          let callResult = tmp3("string");
        } else {
          callResult = call(obj, "string");
        }
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
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
const jsx = fn(21).jsx;

export const useDescriptors = function useDescriptors(state) {
  state = state.state;
  ({ screens: dependencyMap, navigation } = state);
  ({ screenOptions: _slicedToArray, screenLayout: noop, onAction } = state);
  const getState = state.getState;
  ({ setState: closure_7, addListener } = state);
  const addKeyedListener = state.addKeyedListener;
  const onRouteFocus = state.onRouteFocus;
  c12 = undefined;
  c22 = undefined;
  c23 = undefined;
  ({ router, emitter } = state);
  const theme = noop.useContext(state(1520).ThemeContext);
  [c12, tmp2] = _slicedToArray(noop.useState({}), 2);
  c13 = tmp2;
  const context = noop.useContext(state(1513).NavigationBuilderContext);
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
  value = noop.useMemo(
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
  let obj = state(1570);
  const navigationCache = obj.useNavigationCache({ state, getState, navigation, setOptions: tmp2, router, emitter });
  ({ base: c22, navigations: c23 } = navigationCache);
  let tmp = _slicedToArray(noop.useState({}), 2);
  const routeCache = state(1535).useRouteCache(state.routes);
  function getOptions(arg0, arg1, arg2) {}
  function render(route, navigation, options, routeState) {
    closure_0 = route;
    const props = tmp.props;
    let layout = props.layout;
    if (layout == null) {
      layout = tmp.layout;
    }
    if (layout == null) {
      layout = closure_4;
    }
    let obj = {
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
    const tmp5 = onAction(state(1571).SceneView, obj);
    let layoutResult = tmp5;
    if (null != layout) {
      obj = { route, navigation, options, theme, children: tmp5 };
      layoutResult = layout(obj);
    }
    obj = { value, children: onAction(state(1524).NavigationProvider, { route, navigation, children: layoutResult }) };
    return onAction(state(1513).NavigationBuilderContext.Provider, obj, route.key);
  }
  let reduced = routeCache.reduce((acc, route, index) => {
    if (typeof getOptions === "function") {
      state = route;
      dependencyMap = tmp;
      const items = [closure_3, ,];
      if (dependencyMap[route.name].options) {
        const options = tmp4.options;
        const _Boolean = Boolean;
        let found = options.filter(Boolean);
      } else {
        found = [];
      }
      const arraySpreadResult = HermesBuiltin.arraySpread(found, 1);
      items[arraySpreadResult] = dependencyMap[route.name].props.options;
      items[arraySpreadResult + 1] = tmp2;
      reduced = items.reduce((acc, fn) => {
        let tmp = fn;
        if (typeof fn === "function") {
          const obj = { route, navigation, theme };
          tmp = fn(obj);
        }
        return Object.assign(acc, tmp);
      }, {});
      state = render(route, tmp, reduced, state.routes[index].state);
      const obj = {
        route,
        navigation: tmp,
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
  obj = {
    describe(route, arg1) {
      if (arg1) {
        if (typeof getOptions === "function") {
          dependencyMap = tmp7;
          const items = [closure_3, ,];
          if (dependencyMap[route.name].options) {
            const options = tmp10.options;
            const _Boolean = Boolean;
            let found = options.filter(Boolean);
          } else {
            found = [];
          }
          let obj = {};
          const arraySpreadResult = HermesBuiltin.arraySpread(found, 1);
          items[arraySpreadResult] = dependencyMap[route.name].props.options;
          items[arraySpreadResult + 1] = obj;
          reduced = items.reduce((acc, fn) => {
            let tmp = fn;
            if (typeof fn === "function") {
              const obj = { route, navigation, theme };
              tmp = fn(obj);
            }
            return Object.assign(acc, tmp);
          }, {});
          route = render(route, tmp7, reduced, undefined);
          obj = {
            route,
            navigation: tmp7,
            render() {
              return closure_0;
            },
            options: reduced,
          };
          return obj;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (route.key in reduced) {
        return tmp[route.key];
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Couldn't find a route with the key " + route.key + ".");
        throw error;
      }
    },
    descriptors: reduced,
  };
  return obj;
};
