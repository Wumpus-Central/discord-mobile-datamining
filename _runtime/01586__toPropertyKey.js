// _runtime/01586__toPropertyKey.js
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

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

export const useDescriptors = function useDescriptors(state) {
  state = state.state;
  ({ screens: dependencyMap, navigation } = state);
  ({ screenOptions: closure_3, screenLayout: closure_4, onAction } = state);
  const getState = state.getState;
  ({ setState: closure_7, addListener } = state);
  const addKeyedListener = state.addKeyedListener;
  const onRouteFocus = state.onRouteFocus;
  c12 = undefined;
  c22 = undefined;
  c23 = undefined;
  ({ router, emitter } = state);
  closure_11 = React.useContext(state(1537).ThemeContext);
  [c12, tmp2] = callback(React.useState({}), 2);
  c13 = tmp2;
  const context = React.useContext(state(1530).NavigationBuilderContext);
  const onDispatchAction = context.onDispatchAction;
  const onEmitEvent = context.onEmitEvent;
  const onOptionsChange = context.onOptionsChange;
  const scheduleUpdate = context.scheduleUpdate;
  const flushUpdates = context.flushUpdates;
  const stackRef = context.stackRef;
  const getIsStateEmitted = context.getIsStateEmitted;
  let items = [navigation, onAction, addListener, addKeyedListener, onRouteFocus, onDispatchAction, onEmitEvent, onOptionsChange, getIsStateEmitted, scheduleUpdate, flushUpdates, stackRef];
  closure_21 = React.useMemo(() => ({ navigation, onAction, addListener, addKeyedListener, onRouteFocus, onDispatchAction, onEmitEvent, onOptionsChange, getIsStateEmitted, scheduleUpdate, flushUpdates, stackRef }), items);
  let obj = state(1587);
  const navigationCache = obj.useNavigationCache({ state, getState, navigation, setOptions: tmp2, router, emitter });
  ({ base: c22, navigations: c23 } = navigationCache);
  let tmp = callback(React.useState({}), 2);
  const routeCache = state(1552).useRouteCache(state.routes);
  function getOptions(arg0, arg1, arg2) {

  }
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
      setState: closure_7,
      options,
      clearOptions() {
        return closure_1_13((arg0) => {
          if (closure_0.key in arg0) {
            const items = [closure_0.key];
            return navigation(arg0, items.map(getState));
          } else {
            return arg0;
          }
        });
      }
    };
    const tmp5 = onAction(state(closure_1_1[8]).SceneView, obj);
    let layoutResult = tmp5;
    if (null != layout) {
      obj = { route: null, navigation: null, options: null, theme: null, children: null };
      obj[0] = route;
      obj[1] = navigation;
      obj[2] = options;
      obj[3] = closure_11;
      obj[4] = tmp5;
      layoutResult = layout(obj);
    }
    obj = { value: closure_21, children: onAction(state(closure_1_1[9]).NavigationProvider, obj1) };
    return onAction(state(closure_1_1[5]).NavigationBuilderContext.Provider, obj, route.key);
  }
  let reduced = routeCache.reduce((acc, item, index) => {
    if (typeof getOptions !== "function") {
      HermesBuiltin.throwTypeError();
    }
    state = item;
    dependencyMap = tmp;
    const items = [closure_3, , ];
    if (dependencyMap[item.name].options) {
      const options = tmp2.options;
      const _Boolean = Boolean;
      let found = options.filter(Boolean);
    } else {
      found = [];
    }
    const arraySpreadResult = HermesBuiltin.arraySpread(found, 1);
    items[arraySpreadResult] = dependencyMap[item.name].props.options;
    items[arraySpreadResult + 1] = _undefined[item.key];
    reduced = items.reduce((acc, item, index) => {
      let tmp = item;
      if (typeof item === "function") {
        const obj = { route: null, navigation: null, theme: null };
        obj[0] = closure_0;
        obj[1] = closure_1;
        obj[2] = closure_1_11;
        tmp = item(obj);
      }
      return Object.assign(acc, tmp);
    }, {});
    state = render(item, tmp, reduced, state.routes[index].state);
    acc[item.key] = {
      route: item,
      navigation: _undefined2[item.key],
      render() {
        return closure_0;
      },
      options: reduced
    };
    return acc;
  }, {});
  obj = {
    describe(key) {
      if (arg1) {
        if (typeof getOptions !== "function") {
          HermesBuiltin.throwTypeError();
        }
        closure_0 = key;
        dependencyMap = c22;
        const items = [closure_3, , ];
        if (dependencyMap[key.name].options) {
          const options = tmp10.options;
          const _Boolean = Boolean;
          let found = options.filter(Boolean);
        } else {
          found = [];
        }
        let obj = {};
        const arraySpreadResult = HermesBuiltin.arraySpread(found, 1);
        items[arraySpreadResult] = dependencyMap[key.name].props.options;
        items[arraySpreadResult + 1] = obj;
        reduced = items.reduce((acc, item, index) => {
          let tmp = item;
          if (typeof item === "function") {
            const obj = { route: null, navigation: null, theme: null };
            obj[0] = closure_0;
            obj[1] = closure_1;
            obj[2] = closure_1_11;
            tmp = item(obj);
          }
          return Object.assign(acc, tmp);
        }, {});
        closure_0 = render(key, c22, reduced, undefined);
        obj = { route: null, navigation: null, render: null, options: null };
        obj[0] = key;
        obj[1] = c22;
        obj[2] = function render() {
          return closure_0;
        };
        obj[3] = reduced;
        return obj;
      } else if (key.key in reduced) {
        return tmp[key.key];
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        error = new Error("Couldn't find a route with the key " + key.key + ".");
        throw error;
      }
    },
    descriptors: reduced
  };
  return obj;
};