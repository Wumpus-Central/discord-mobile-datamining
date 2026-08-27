// === Module 9453: pushStackEntry ===

// Module 9453 (pushStackEntry)
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import keys from "keys" /* 644 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
keys = keys.create(() => ({ autoHideHomeIndicator: false }));
let HomeIndicator;
const Component = importAllResult.Component;
class HomeIndicator extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult._stackEntry = null;
    return applyArgumentsResult;
  }
}
const prototype = HomeIndicator.prototype;
HomeIndicator["pushStackEntry"] = function pushStackEntry(prefersHidden) {
  const obj = { prefersHidden: prefersHidden.prefersHidden, prefersDeferringSystemGestures: prefersHidden.prefersDeferringSystemGestures };
  const _propsStack = HomeIndicator._propsStack;
  _propsStack.push(obj);
  HomeIndicator._updatePropsStack();
  return obj;
};
HomeIndicator["popStackEntry"] = function popStackEntry(arg0) {
  let num = -1;
  if (null != arg0) {
    const _propsStack = HomeIndicator._propsStack;
    num = _propsStack.indexOf(arg0);
  }
  if (-1 !== num) {
    const _propsStack1 = HomeIndicator._propsStack;
    _propsStack1.splice(num, 1);
    HomeIndicator._updatePropsStack();
  }
};
HomeIndicator["replaceStackEntry"] = function replaceStackEntry(arg0, prefersHidden) {
  const obj = { prefersHidden: prefersHidden.prefersHidden, prefersDeferringSystemGestures: prefersHidden.prefersDeferringSystemGestures };
  let num = -1;
  if (null != arg0) {
    const _propsStack = HomeIndicator._propsStack;
    num = _propsStack.indexOf(arg0);
  }
  if (-1 !== num) {
    HomeIndicator._propsStack[num] = obj;
  }
  HomeIndicator._updatePropsStack();
  return obj;
};
HomeIndicator["_updatePropsStack"] = function _updatePropsStack() {
  clearImmediate(HomeIndicator._updateImmediate);
  HomeIndicator._updateImmediate = setImmediate(() => {
    let obj = closure_5._propsStack[closure_5._propsStack.length - 1];
    if (obj == null) {
      obj = {};
    }
    const prefersHidden = obj.prefersHidden;
    const callback = tmp;
    const prefersDeferringSystemGestures = obj.prefersDeferringSystemGestures;
    callback(705).batchUpdates(() => closure_1_4.setState({ autoHideHomeIndicator: closure_0 }));
    const obj2 = callback(705);
    const tmp2 = undefined !== prefersDeferringSystemGestures && prefersDeferringSystemGestures;
    if (obj3.isAndroid()) {
      const result = callback2(1641).setNavigationBarVisible(!tmp);
      const obj4 = callback2(1641);
    } else if (DCDHomeIndicator.DCDHomeIndicator) {
      DCDHomeIndicator = tmp5.DCDHomeIndicator;
      DCDHomeIndicator.setPrefersAutoHidden(tmp);
      const DCDHomeIndicator2 = tmp5.DCDHomeIndicator;
      const result1 = DCDHomeIndicator2.setPrefersDeferringSystemGestures(tmp2);
    }
  });
};
prototype["componentDidMount"] = function componentDidMount() {
  this._stackEntry = HomeIndicator.pushStackEntry(this.props);
};
prototype["componentDidUpdate"] = function componentDidUpdate() {
  this._stackEntry = HomeIndicator.replaceStackEntry(this._stackEntry, this.props);
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  HomeIndicator.popStackEntry(this._stackEntry);
  this._stackEntry = null;
};
prototype["render"] = function render() {
  return null;
};
HomeIndicator.defaultProps = { prefersHidden: false, prefersDeferringSystemGestures: false };
HomeIndicator._propsStack = [];
HomeIndicator._updateImmediate = null;
let result = require("set").fileFinishedImporting("modules/voice_panel/native/HomeIndicator.tsx");

export default HomeIndicator;
export const useHomeIndicatorStore = keys;