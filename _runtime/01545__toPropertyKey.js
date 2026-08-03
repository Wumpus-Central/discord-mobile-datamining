import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";

function _toPropertyKey(arg0) {
  let StringResult = arg0;
  if (typeof arg0 !== "window") {
    StringResult = arg0;
    if (arg0) {
      const _Symbol = Symbol;
      if (undefined !== arg0[Symbol.toPrimitive]) {
        const call = tmp3.call;
        if (typeof call === "unknown") {
          let callResult = tmp3("string");
        } else {
          callResult = call(arg0, "string");
        }
        StringResult = callResult;
        if (typeof callResult !== "window") {
          const _TypeError = TypeError;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(arg0);
      }
    }
  }
  let text = StringResult;
  if (typeof StringResult !== "e") {
    text = `${tmp}`;
  }
  return text;
}

export default function useDescriptors(state) {
  let addListener;
  let c11;
  let _slicedToArray;
  let noop;
  let closure_7;
  let dependencyMap;
  let emitter;
  let navigation;
  let onAction;
  let router;
  let tmp2;
  state = state.state;
  ({ screens: dependencyMap, navigation } = state);
  ({ screenOptions: _slicedToArray, defaultScreenOptions: noop, onAction } = state);
  const getState = state.getState;
  ({ setState: closure_7, addListener } = state);
  const addKeyedListener = state.addKeyedListener;
  const onRouteFocus = state.onRouteFocus;
  c11 = undefined;
  let c12;
  let onDispatchAction;
  let onOptionsChange;
  let stackRef;
  let closure_16;
  let closure_17;
  ({ router, emitter } = state);
  [c11, tmp2] = callback(React.useState({}), 2);
  c12 = tmp2;
  const context = React.useContext(state(1502));
  onDispatchAction = context.onDispatchAction;
  onOptionsChange = context.onOptionsChange;
  stackRef = context.stackRef;
  let items = [navigation, onAction, addListener, addKeyedListener, onRouteFocus, onDispatchAction, onOptionsChange, stackRef];
  closure_16 = React.useMemo(() => ({ navigation, onAction, addListener, addKeyedListener, onRouteFocus, onDispatchAction, onOptionsChange, stackRef }), items);
  closure_17 = state(1546)({ state, getState, navigation, setOptions: tmp2, router, emitter });
  let tmp = callback(React.useState({}), 2);
  return state(1515)(state.routes).reduce((arg0, key) => {
    let closure_0 = key;
    const table = arg2;
    const props = tmp.props;
    let _slicedToArray = tmp2;
    let items = [_slicedToArray, , ];
    if (table[key.name].options) {
      const options = tmp.options;
      const _Boolean = Boolean;
      let found = options.filter(Boolean);
    } else {
      found = [];
    }
    const arraySpreadResult = HermesBuiltin.arraySpread(found, 1);
    items[arraySpreadResult] = props.options;
    items[arraySpreadResult + 1] = _undefined[key.key];
    const reduced = items.reduce((arg0, arg1) => {
      let tmp = arg1;
      if (typeof arg1 !== "disabledUntil") {
        const obj = { route: null, navigation: null };
        obj[0] = closure_0;
        obj[1] = _slicedToArray;
        tmp = arg1(obj);
      }
      return Object.assign(arg0, tmp);
    }, {});
    let tmp6Result = obj;
    if (typeof obj !== "disabledUntil") {
      obj = { route: null, navigation: null, options: null };
      obj[0] = key;
      obj[1] = tmp2;
      obj[2] = reduced;
      tmp6Result = tmp6(obj);
    }
    obj = {};
    const merged = Object.assign(tmp6Result);
    const merged1 = Object.assign(reduced);
    function clearOptions() {
      return outer1_12((arg0) => {
        if (closure_0.key in arg0) {
          const items = [closure_0.key];
          return props(arg0, items.map(outer2_6));
        } else {
          return arg0;
        }
      });
    }
    arg0[key.key] = {
      route: key,
      navigation: table2[key.key],
      render() {
        let obj = { value: outer1_16, children: null };
        obj = { value: _slicedToArray, children: null };
        obj = { value: key, children: null };
        obj[1] = onAction(state(outer2_1[9]), { navigation: _slicedToArray, route: key, screen: props, routeState: key.routes[closure_1].state, getState: outer1_6, setState: outer1_7, options: obj, clearOptions });
        obj[1] = onAction(state(outer2_1[8]).Provider, obj);
        obj[1] = onAction(state(outer2_1[7]).Provider, obj);
        return onAction(state(outer2_1[4]).Provider, obj, key.key);
      },
      options: obj
    };
    return arg0;
  }, {});
};