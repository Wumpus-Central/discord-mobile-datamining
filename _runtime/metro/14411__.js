// _runtime/metro/14411__.js
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";
import get_ActivityIndicator from "00017__.js";
import jsxProd from "../react/00021_jsxProd.js";

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
_possibleConstructorReturn;
if (typeof WeakMap === "function") {
  const _WeakMap = WeakMap;
  const weakMap = new WeakMap();
  const _WeakMap2 = WeakMap;
  const weakMap1 = new WeakMap();
}
if (!noop) {
  let merged = Object.assign({ default: null });
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
const container = { container: { position: "absolute", left: 0, top: 0, right: 0, bottom: 0, zIndex: 1000, opacity: 0.25 }, debugContainer: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center", backgroundColor: "transparent", zIndex: 2000 }, debugTextContainer: { backgroundColor: "lightgray", margin: 50, padding: 20 }, debugText: { color: "red", fontSize: 16, marginBottom: 10 } };
class FullScreenOverlay {
  constructor(arg0) {
    self = this;
    tmp = closure_0(this, FullScreenOverlay);
    items = [];
    items[0] = global;
    tmp2 = c2;
    obj = c2(FullScreenOverlay);
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
    obj = { opacity: metroRequire.container.opacity, uri: null, justifyContent: "center", alignItems: "center" };
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
_classCallCheck = FullScreenOverlay;
_inherits(FullScreenOverlay, value.Component);
const entry = {
  key: "createContainerStyle",
  value: function createContainerStyle() {
    const Dimensions = get_ActivityIndicator.Dimensions;
    ({ opacity, justifyContent, alignItems } = this.state);
    value = Dimensions.get("window");
    const obj = {};
    ({ width, height } = value);
    const merged = Object.assign(container.container);
    obj.opacity = opacity;
    obj.width = width;
    obj.height = height;
    obj.justifyContent = justifyContent;
    obj.alignItems = alignItems;
    return obj;
  }
};
let items = [
  entry,
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
      const size = { width, height, marginTop: num3, marginRight: num2, marginBottom: null, marginLeft: null };
      let num4 = 0;
      if (undefined !== marginBottom) {
        num4 = marginBottom;
      }
      size.marginBottom = num4;
      size.marginLeft = num;
      if (growToWindow) {
        const Dimensions = get_ActivityIndicator.Dimensions;
        value = Dimensions.get("window");
        ({ width: obj.width, height: obj.height } = value);
      }
      const jsx = jsxProd.jsx;
      if (uri) {
        let obj = { source: null, style: null, resizeMode: null };
        obj = { uri };
        obj.source = obj;
        obj.style = size;
        let tmp8 = null;
        if (growToWindow) {
          tmp8 = resizeMode;
        }
        obj.resizeMode = tmp8;
        let jsxResult = <get ActivityIndicator.Image uri={uri} />;
        let tmp6 = get_ActivityIndicator;
        let tmp7 = jsxProd;
      } else {
        jsxResult = <get ActivityIndicator.View />;
        tmp6 = get_ActivityIndicator;
        tmp7 = jsxProd;
      }
      const obj1 = { children: null };
      ({ jsxs, Fragment, jsx: jsx2 } = tmp7);
      const items = [jsx2(tmp6.View, { style: self.createContainerStyle(), pointerEvents: "none", children: jsxResult }), self.renderDebug()];
      obj1.children = items;
      return <>{null}</>;
    }
  }
];

export default _createClass(FullScreenOverlay, items);