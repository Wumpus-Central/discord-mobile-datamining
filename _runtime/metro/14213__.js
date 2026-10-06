// === Module 14213: ? ===

// Module 14213
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

let value;
let weakMap;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
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
  }
};
let items = [entry];

export default _createClass(StorybookSwitcher, items);