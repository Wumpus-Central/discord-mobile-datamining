// _runtime/13805__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";
import "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
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
  let obj = Object.create(null);
  obj[0] = noop;
  let value = obj;
  if (null !== noop) {
    if (typeof noop === "object") {
      if (!weakMap) {
        value = obj;
        const keys = Object.keys();
        if (keys !== undefined) {
          value = obj;
          while (keys[tmp] !== undefined) {
            let tmp21 = tmp12;
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
                  obj[tmp12] = noop[tmp12];
                  continue;
                } else {
                  let definePropertyResult1 = defineProperty(obj, tmp12, ownPropertyDescriptor);
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
        const result = weakMap.set(noop, obj);
      }
    } else {
      value = obj;
    }
  }
} else {
  value = noop;
}
class StorybookSwitcher {
  constructor(arg0) {
    self = this;
    tmp = StorybookSwitcher(this, apply);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.state = { showStorybook: false };
    emitter = global.emitter;
    onResult = emitter.on("storybook", (showStorybook) => {
      tmp3Result.setState({ showStorybook });
    });
    return tmp3Result;
  }
}
_classCallCheck = StorybookSwitcher;
_inherits(StorybookSwitcher, value.Component);
obj = {
  key: "render",
  value: function render() {
    let children = this.props.children;
    const obj = { style: { flex: 1 }, children: null };
    if (this.state.showStorybook) {
      children = <tmp />;
    }
    obj[1] = children;
    return <get ActivityIndicator.View style={{ flex: 1 }}>{null}</get ActivityIndicator.View>;
  }
};
let items = [obj];

export default _createClass(StorybookSwitcher, items);