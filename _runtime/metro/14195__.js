// _runtime/metro/14195__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import map from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import react from "../00019_react.js";
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";

let size;

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
  let tmp7 = null;
  let merged = Object.assign({ default: null });
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
const metroRequire = {
  container: { position: "absolute", left: 0, top: 0, right: 0, bottom: 0, zIndex: 1000, opacity: 0.25 },
  debugContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    zIndex: 2000,
  },
  debugTextContainer: { backgroundColor: "lightgray", margin: 50, padding: 20 },
  debugText: { color: "red", fontSize: 16, marginBottom: 10 },
};
class FullScreenOverlay {
  constructor(emitter) {
    let constructResult;
    const self = this;
    _classCallCheck(this, FullScreenOverlay);
    const items = [emitter];
    let obj = _getPrototypeOf(FullScreenOverlay);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = map(self, constructResult);
    let closure_0 = tmp3Result;
    const obj2 = { opacity: container.container.opacity, uri: null, justifyContent: "center", alignItems: "center" };
    tmp3Result.state = obj2;
    emitter = emitter.emitter;
    emitter.on("overlay", (arg0) => {
      const setState = closure_0.setState;
      const obj = {};
      const merged = Object.assign(closure_0.state);
      const merged1 = Object.assign(arg0);
      setState(obj);
    });
    return tmp3Result;
  }
}
_inherits(FullScreenOverlay, value.Component);
const entry = {
  key: "createContainerStyle",
  value: function createContainerStyle() {
    let alignItems;
    let height;
    let justifyContent;
    let opacity;
    let width;
    const Dimensions = react_native.Dimensions;
    ({ opacity, justifyContent, alignItems } = this.state);
    const value = Dimensions.get("window");
    const obj = { opacity, width, height, justifyContent, alignItems };
    ({ width, height } = value);
    const merged = Object.assign(container.container);
    return obj;
  },
};
let items = [
  entry,
  {
    key: "renderDebug",
    value: function renderDebug() {
      return null;
    },
  },
  {
    key: "render",
    value: function render() {
      let growToWindow;
      let height;
      let jsx2;
      let jsxResult;
      let jsxs;
      let marginLeft;
      let num4;
      let resizeMode;
      let tmp6;
      let tmp7;
      let uri;
      let width;
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
      size = { width, height, marginTop: num3, marginRight: num2, marginBottom: num4, marginLeft: num };
      num4 = 0;
      if (undefined !== marginBottom) {
        num4 = marginBottom;
      }
      if (growToWindow) {
        const Dimensions = react_native.Dimensions;
        const value = Dimensions.get("window");
        ({ width: obj.width, height: obj.height } = value);
      }
      const jsx = Fragment.jsx;
      if (uri) {
        let tmp8 = null;
        const Image = react_native.Image;
        const obj3 = { uri };
        if (growToWindow) {
          tmp8 = resizeMode;
        }
        jsxResult = <Image source={obj3} style={size} resizeMode={tmp8} />;
        tmp6 = react_native;
        tmp7 = Fragment;
      } else {
        jsxResult = <react-native.View />;
        tmp6 = react_native;
        tmp7 = Fragment;
      }
      ({ jsxs, Fragment, jsx: jsx2 } = tmp7);
      const items = [,];
      const obj5 = { style: self.createContainerStyle(), pointerEvents: "none", children: jsxResult };
      items[0] = jsx2(tmp6.View, obj5);
      items[1] = self.renderDebug();
      return <>{items}</>;
    },
  },
];

export default _createClass(FullScreenOverlay, items);
