// === Module 9062: HomeIndicator ===

// Module 9062 (HomeIndicator)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

let DCDHomeIndicator;

const NativeModules = react_native.NativeModules;
const useHomeIndicatorStore = module_570.create(() => ({ autoHideHomeIndicator: false }));
const Component = react.Component;
class HomeIndicator extends Component {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult._stackEntry = null;
    return applyArgumentsResult;
  }
  static pushStackEntry(prefersHidden) {
    const obj = { prefersHidden: prefersHidden.prefersHidden, prefersDeferringSystemGestures: prefersHidden.prefersDeferringSystemGestures };
    const _propsStack = HomeIndicator._propsStack;
    _propsStack.push(obj);
    HomeIndicator._updatePropsStack();
    return obj;
  }
  static popStackEntry(arg0) {
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
  }
  static replaceStackEntry(arg0, prefersHidden) {
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
  }
  static _updatePropsStack() {
    let state;
    clearImmediate(HomeIndicator._updateImmediate);
    HomeIndicator._updateImmediate = setImmediate(() => {
      let obj = closure_5._propsStack[closure_5._propsStack.length - 1];
      if (obj == null) {
        obj = {};
      }
      const prefersHidden = obj.prefersHidden;
      const autoHideHomeIndicator = tmp;
      const prefersDeferringSystemGestures = obj.prefersDeferringSystemGestures;
      const tmp2 = undefined !== prefersDeferringSystemGestures && prefersDeferringSystemGestures;
      const obj2 = autoHideHomeIndicator(closure_2[3]);
      obj2.batchUpdates(() => {
        const obj = { autoHideHomeIndicator };
        return state.setState(obj);
      });
      const obj3 = autoHideHomeIndicator(closure_2[4]);
      if (obj3.isAndroid()) {
        const obj4 = closure_1(closure_2[5]);
        const result = obj4.setNavigationBarVisible(!tmp);
      } else if (DCDHomeIndicator.DCDHomeIndicator) {
        DCDHomeIndicator = tmp5.DCDHomeIndicator;
        DCDHomeIndicator.setPrefersAutoHidden(undefined !== prefersHidden && prefersHidden);
        const DCDHomeIndicator2 = tmp5.DCDHomeIndicator;
        const result1 = DCDHomeIndicator2.setPrefersDeferringSystemGestures(tmp2);
      }
    });
  }
  componentDidMount() {
    this._stackEntry = HomeIndicator.pushStackEntry(this.props);
  }
  componentDidUpdate() {
    this._stackEntry = HomeIndicator.replaceStackEntry(this._stackEntry, this.props);
  }
  componentWillUnmount() {
    HomeIndicator.popStackEntry(this._stackEntry);
    this._stackEntry = null;
  }
  render() {
    return null;
  }
}
const prototype = HomeIndicator.prototype;
HomeIndicator.defaultProps = { prefersHidden: false, prefersDeferringSystemGestures: false };
HomeIndicator._propsStack = [];
HomeIndicator._updateImmediate = null;
let result = size.fileFinishedImporting("modules/voice_panel/native/HomeIndicator.tsx");

export default HomeIndicator;
export { useHomeIndicatorStore };