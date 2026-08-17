// _runtime/13787__isNativeReflectConstruct.js
import FullScreenOverlay from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_1 from "_possibleConstructorReturn" /* 93 */;
import closure_2 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "noop" /* 19 */;
import closure_4 from "get ActivityIndicator" /* 17 */;
import closure_5 from "jsxProd" /* 21 */;

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
let closure_6 = { container: { position: "absolute", left: 0, top: 0, right: 0, bottom: 0, zIndex: 1000, opacity: 0.25 }, debugContainer: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center", backgroundColor: "transparent", zIndex: 2000 }, debugTextContainer: { backgroundColor: "lightgray", margin: 50, padding: 20 }, debugText: { color: "red", fontSize: 16, marginBottom: 10 } };
class FullScreenOverlay {
  constructor(arg0) {
    self = this;
    tmp = FullScreenOverlay(this, closure_0);
    items = [];
    items[0] = global;
    tmp2 = closure_2;
    obj = closure_2(closure_0);
    tmp3 = closure_1;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    obj = { opacity: closure_6.container.opacity, uri: null, justifyContent: "center", alignItems: "center" };
    tmp3Result.state = obj;
    emitter = global.emitter;
    onResult = emitter.on("overlay", (arg0) => {
      const merged = Object.assign(state.state);
      const merged1 = Object.assign(arg0);
      state.setState({});
    });
    return tmp3Result;
  }
}
_inherits(FullScreenOverlay, value.Component);
obj = {
  key: "createContainerStyle",
  value: function createContainerStyle() {
    const Dimensions = closure_4.Dimensions;
    ({ opacity, justifyContent, alignItems } = this.state);
    const value = Dimensions.get("window");
    const obj = {};
    ({ width, height } = value);
    const merged = Object.assign(closure_6.container);
    obj.opacity = opacity;
    obj.width = width;
    obj.height = height;
    obj.justifyContent = justifyContent;
    obj.alignItems = alignItems;
    return obj;
  }
};
let items = [
  obj,
  {
    key: "renderDebug",
    value: function renderDebug() {
      return null;
    }
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      const state = this.state;
      ({ uri, growToWindow, marginLeft } = state);
      let num = 0;
      ({ width, height, resizeMode } = state);
      if (undefined !== marginLeft) {
        num = marginLeft;
      }
      const marginRight = state.marginRight;
      let num2 = 0;
      if (undefined !== marginRight) {
        num2 = marginRight;
      }
      const marginTop = state.marginTop;
      let num3 = 0;
      if (undefined !== marginTop) {
        num3 = marginTop;
      }
      const marginBottom = state.marginBottom;
      let obj = { width, height, marginTop: num3, marginRight: num2, marginBottom: null, marginLeft: null };
      let num4 = 0;
      if (undefined !== marginBottom) {
        num4 = marginBottom;
      }
      obj[4] = num4;
      obj[5] = num;
      if (growToWindow) {
        const Dimensions = closure_4.Dimensions;
        const value = Dimensions.get("window");
        ({ width: obj.width, height: obj.height } = value);
      }
      const jsx = React.jsx;
      if (uri) {
        obj = { source: null, style: null, resizeMode: null };
        obj = { uri: null };
        obj[0] = uri;
        obj[0] = obj;
        obj[1] = obj;
        let tmp8 = null;
        if (growToWindow) {
          tmp8 = resizeMode;
        }
        obj[2] = tmp8;
        let jsxResult = <tmp4.Image uri={null} />;
        let tmp6 = tmp4;
        let tmp7 = tmp3;
      } else {
        jsxResult = <tmp4.View />;
        tmp6 = tmp4;
        tmp7 = tmp3;
      }
      obj1 = { children: null };
      ({ jsxs, Fragment, jsx: jsx2 } = tmp7);
      const items = [jsx2(tmp6.View, { style: self.createContainerStyle(), pointerEvents: "none", children: jsxResult }), self.renderDebug()];
      obj1[0] = items;
      return <>{null}</>;
    }
  }
];

export default _createClass(FullScreenOverlay, items);