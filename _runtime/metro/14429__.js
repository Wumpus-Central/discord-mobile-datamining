// === Module 14429: ? ===

// Module 14429
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
if (typeof WeakMap === "function") {
  const _WeakMap = WeakMap;
  const weakMap = new WeakMap();
  const _WeakMap2 = WeakMap;
  const weakMap1 = new WeakMap();
}
if (!noop) {
  const merged = Object.assign({ default: null });
  merged[0] = noop;
  let value = merged;
  if (null !== noop) {
    if (typeof noop === "object") {
      if (!weakMap) {
        value = merged;
        const keys = Object.keys();
        if (keys !== undefined) {
          value = merged;
          while (keys[tmp] !== undefined) {
            let tmp22 = "default" !== tmp12;
            if (!tmp22) {
              if (!tmp22) {
                continue;
              } else {
                let _Object = Object;
                let ownPropertyDescriptor = defineProperty;
                if (defineProperty) {
                  let _Object2 = Object;
                  ownPropertyDescriptor = Object.getOwnPropertyDescriptor(noop, tmp12);
                }
                if (!ownPropertyDescriptor) {
                  merged[tmp12] = noop[tmp12];
                  continue;
                } else {
                  let definePropertyResult1 = defineProperty(merged, tmp12, ownPropertyDescriptor);
                  continue;
                }
                continue;
              }
              continue;
            } else {
              let hasOwnProperty = {}.hasOwnProperty;
              let call = hasOwnProperty.call;
              let tmp13 = typeof call === "unknown" ? hasOwnProperty(tmp12) : call(noop, tmp12);
            }
          }
        }
      } else if (weakMap.has(noop)) {
        value = weakMap.get(noop);
      } else {
        const result = weakMap.set(noop, merged);
      }
    } else {
      value = merged;
    }
  }
} else {
  value = noop;
}
class StorybookSwitcher {
  constructor(arg0) {
    self = this;
    tmp = closure_0(this, StorybookSwitcher);
    items = [];
    items[0] = global;
    tmp2 = c2;
    obj = c2(StorybookSwitcher);
    tmp3 = closure_1;
    if (closure_3()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.state = { showStorybook: false };
    emitter = global.emitter;
    onResult = emitter.on("storybook", (showStorybook) => {
      state.setState({ showStorybook });
    });
    return tmp3Result;
  }
}
_classCallCheck = StorybookSwitcher;
_inherits(StorybookSwitcher, value.Component);
const entry = {
  key: "render",
  value: function render() {
    let children = this.props.children;
    const obj = { style: { flex: 1 }, children: null };
    if (this.state.showStorybook) {
      children = <tmp />;
    }
    obj.children = children;
    return <get ActivityIndicator.View style={{ flex: 1 }}>{null}</get ActivityIndicator.View>;
  }
};
let items = [entry];

export default _createClass(StorybookSwitcher, items);