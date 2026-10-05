// _runtime/metro/14195__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import map from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import react from "../00019_react.js";
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";

let value;
let weakMap;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
if (typeof WeakMap === "function") {
  const _WeakMap = WeakMap;
  let self = this;
  const self2 = this;
  weakMap = new WeakMap();
  const _WeakMap2 = WeakMap;
  const self3 = this;
  const weakMap1 = new WeakMap();
}
if (!react) {
  const merged = Object.assign({ default: null });
  merged[0] = react;
  value = merged;
  if (null !== react) {
    if (typeof react === "object") {
      if (!weakMap) {
        value = merged;
        const keys = Object.keys();
        if (keys !== undefined) {
          value = merged;
          while (keys[tmp] !== undefined) {
            let callResult = "default" !== tmp12;
            if (callResult) {
              let hasOwnProperty = {}.hasOwnProperty;
              callResult = hasOwnProperty.call(react, tmp12);
            }
            if (!callResult) {
              continue;
            } else {
              let _Object = Object;
              let ownPropertyDescriptor = defineProperty;
              if (ownPropertyDescriptor) {
                let _Object2 = Object;
                ownPropertyDescriptor = Object.getOwnPropertyDescriptor(react, tmp12);
              }
              if (!ownPropertyDescriptor) {
                merged[tmp12] = react[tmp12];
                continue;
              } else {
                let definePropertyResult1 = defineProperty(merged, tmp12, ownPropertyDescriptor);
                continue;
              }
              continue;
            }
            continue;
          }
        }
      } else if (weakMap.has(react)) {
        value = weakMap.get(react);
      } else {
        const result = weakMap.set(react, merged);
      }
    } else {
      value = merged;
    }
  }
} else {
  value = react;
}
class StorybookSwitcher {
  constructor(emitter) {
    let constructResult;
    const self = this;
    _classCallCheck(this, StorybookSwitcher);
    const items = [emitter];
    let obj = _getPrototypeOf(StorybookSwitcher);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = map(self, constructResult);
    let closure_0 = tmp3Result;
    tmp3Result.state = { showStorybook: false };
    emitter = emitter.emitter;
    emitter.on("storybook", (showStorybook) => {
      const obj = { showStorybook };
      state.setState(obj);
    });
    return tmp3Result;
  }
}
_inherits(StorybookSwitcher, value.Component);
const entry = {
  key: "render",
  value: function render() {
    let children = this.props.children;
    const jsx = Fragment.jsx;
    const View = react_native.View;
    if (this.state.showStorybook) {
      children = <tmp />;
    }
    return <View style={{ flex: 1 }}>{children}</View>;
  },
};
let items = [entry];

export default _createClass(StorybookSwitcher, items);
