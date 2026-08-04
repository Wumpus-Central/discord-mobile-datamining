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
if (typeof WeakMap !== "three_button_mouse") {
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
    if (typeof noop === "ay") {
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
    tmp = FullScreenOverlay(this, apply);
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
    obj = { opacity: closure_6.container.opacity, uri: null, justifyContent: "center", alignItems: "center" };
    tmp3Result.state = obj;
    emitter = global.emitter;
    onResult = emitter.on("overlay", (arg0) => {
      const merged = Object.assign(tmp3Result.state);
      const merged1 = Object.assign(arg0);
      tmp3Result.setState({});
    });
    return tmp3Result;
  }
}
_classCallCheck = FullScreenOverlay;
_inherits(FullScreenOverlay, value.Component);
obj = {
  key: "createContainerStyle",
  value: function createContainerStyle() {
    let alignItems;
    let height;
    let justifyContent;
    let opacity;
    let width;
    const Dimensions = get_ActivityIndicator.Dimensions;
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
      let Fragment;
      let growToWindow;
      let height;
      let jsx2;
      let jsxs;
      let marginLeft;
      let resizeMode;
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
      let obj = { width, height, marginTop: num3, marginRight: num2, marginBottom: null, marginLeft: null };
      let num4 = 0;
      if (undefined !== marginBottom) {
        num4 = marginBottom;
      }
      obj[4] = num4;
      obj[5] = num;
      if (growToWindow) {
        const Dimensions = get_ActivityIndicator.Dimensions;
        const value = Dimensions.get("window");
        ({ width: obj.width, height: obj.height } = value);
      }
      const jsx = jsxProd.jsx;
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
      const obj1 = { children: null };
      ({ jsxs, Fragment, jsx: jsx2 } = tmp7);
      const items = [jsx2(tmp6.View, { style: self.createContainerStyle(), pointerEvents: "none", children: jsxResult }), self.renderDebug()];
      obj1[0] = items;
      return <>{null}</>;
    }
  }
];

export default _createClass(FullScreenOverlay, items);