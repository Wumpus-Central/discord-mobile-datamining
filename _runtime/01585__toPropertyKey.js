// === Module 1585: _toPropertyKey ===

// Module 1585 (_toPropertyKey)
import closure_2 from "_objectWithoutProperties" /* 109 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
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
  closure_11 = undefined;
  c12 = undefined;
  c13 = undefined;
  let onDispatchAction;
  let onEmitEvent;
  let onOptionsChange;
  let scheduleUpdate;
  let flushUpdates;
  let stackRef;
  let getIsStateEmitted;
  closure_21 = undefined;
  c22 = undefined;
  c23 = undefined;
  let getOptions;
  let render;
  let reduced;
  ({ router, emitter } = state);
  closure_11 = React.useContext(state(1536).ThemeContext);
  [c12, tmp2] = callback(React.useState({}), 2);
  c13 = tmp2;
  const context = React.useContext(state(1529).NavigationBuilderContext);
  onDispatchAction = context.onDispatchAction;
  onEmitEvent = context.onEmitEvent;
  onOptionsChange = context.onOptionsChange;
  scheduleUpdate = context.scheduleUpdate;
  flushUpdates = context.flushUpdates;
  stackRef = context.stackRef;
  getIsStateEmitted = context.getIsStateEmitted;
  let items = [navigation, onAction, addListener, addKeyedListener, onRouteFocus, onDispatchAction, onEmitEvent, onOptionsChange, getIsStateEmitted, scheduleUpdate, flushUpdates, stackRef];
  closure_21 = React.useMemo(() => ({ navigation, onAction, addListener, addKeyedListener, onRouteFocus, onDispatchAction, onEmitEvent, onOptionsChange, getIsStateEmitted, scheduleUpdate, flushUpdates, stackRef }), items);
  let obj = state(1586);
  const navigationCache = obj.useNavigationCache({ state, getState, navigation, setOptions: tmp2, router, emitter });
  ({ base: c22, navigations: c23 } = navigationCache);
  let tmp = callback(React.useState({}), 2);
  const routeCache = state(1551).useRouteCache(state.routes);
  getOptions = function getOptions(arg0, arg1, arg2) {

  };
  render = function render(route, navigation, options, routeState) {
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
            return closure_2_2(arg0, items.map(closure_2_6));
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
    obj = { value: closure_21, children: tmp2(tmp3(tmp4[9]).NavigationProvider, obj1) };
    return onAction(state(closure_1_1[5]).NavigationBuilderContext.Provider, obj, route.key);
  };
  reduced = routeCache.reduce((arg0, key) => {
    if (typeof getOptions !== "function") {
      HermesBuiltin.throwTypeError();
    }
    state = key;
    dependencyMap = tmp;
    const items = [closure_3, , ];
    if (dependencyMap[key.name].options) {
      const options = tmp2.options;
      const _Boolean = Boolean;
      let found = options.filter(Boolean);
    } else {
      found = [];
    }
    const arraySpreadResult = HermesBuiltin.arraySpread(found, 1);
    items[arraySpreadResult] = dependencyMap[key.name].props.options;
    items[arraySpreadResult + 1] = _undefined[key.key];
    reduced = items.reduce((arg0, fn) => {
      let tmp = fn;
      if (typeof fn === "function") {
        const obj = { route: null, navigation: null, theme: null };
        obj[0] = closure_0;
        obj[1] = closure_1;
        obj[2] = closure_1_11;
        tmp = fn(obj);
      }
      return Object.assign(arg0, tmp);
    }, {});
    state = render(key, tmp, reduced, state.routes[arg2].state);
    arg0[key.key] = {
      route: key,
      navigation: _undefined2[key.key],
      render() {
        return closure_0;
      },
      options: reduced
    };
    return arg0;
  }, {});
  obj = {
    describe(key) {
      if (arg1) {
        if (typeof getOptions !== "function") {
          HermesBuiltin.throwTypeError();
        }
        closure_0 = key;
        dependencyMap = tmp7;
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
        reduced = items.reduce((arg0, fn) => {
          let tmp = fn;
          if (typeof fn === "function") {
            const obj = { route: null, navigation: null, theme: null };
            obj[0] = closure_0;
            obj[1] = closure_1;
            obj[2] = closure_1_11;
            tmp = fn(obj);
          }
          return Object.assign(arg0, tmp);
        }, {});
        closure_0 = render(key, tmp7, reduced, undefined);
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