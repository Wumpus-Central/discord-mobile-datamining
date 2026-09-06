// _runtime/metro/00302__.js
import nullthrowsDefault from "../00070_nullthrows.js";
import ViewDefault from "../00108_View.js";
import dismissKeyboardDefault from "../00303_dismissKeyboard.js";
import _modDef304 from "00304__.js";
import _modDef309 from "00309__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import metroRequire from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";
import get_hairlineWidth from "../00254_get_hairlineWidth.js";

const DrawerLayoutAndroid = fn;
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
  } catch (err) {}
}
let closure_3 = [
  "drawerBackgroundColor",
  "onDrawerStateChanged",
  "renderNavigationView",
  "onDrawerOpen",
  "onDrawerClose",
];
const createRef = fn(19).createRef;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_12 = ["Idle", "Dragging", "Settling"];
class DrawerLayoutAndroid {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = hasOwnProperty(this, DrawerLayoutAndroid);
    items1 = [...items];
    tmp2 = closure_7;
    obj = closure_7(DrawerLayoutAndroid);
    tmp3 = metroRequire;
    if (closure_11()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result._nativeRef = closure_8();
    tmp3Result.state = { drawerOpened: false };
    tmp3Result._onDrawerSlide = (arg0) => {
      if (closure_0.props.onDrawerSlide) {
        const props = closure_0.props;
        props.onDrawerSlide(arg0);
      }
      if ("on-drag" === closure_0.props.keyboardDismissMode) {
        dismissKeyboardDefault();
      }
    };
    tmp3Result._onDrawerOpen = () => {
      closure_0.setState({ drawerOpened: true });
      if (closure_0.props.onDrawerOpen) {
        const props = closure_0.props;
        props.onDrawerOpen();
      }
    };
    tmp3Result._onDrawerClose = () => {
      closure_0.setState({ drawerOpened: false });
      if (closure_0.props.onDrawerClose) {
        const props = closure_0.props;
        props.onDrawerClose();
      }
    };
    tmp3Result._onDrawerStateChanged = (arg0) => {
      if (closure_0.props.onDrawerStateChanged) {
        const props = tmp.props;
        props.onDrawerStateChanged(closure_12[arg0.nativeEvent.drawerState]);
      }
    };
    return tmp3Result;
  }
}
_inherits(DrawerLayoutAndroid, noop.Component);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    const drawerBackgroundColor = props.drawerBackgroundColor;
    let str = "white";
    if (undefined !== drawerBackgroundColor) {
      str = drawerBackgroundColor;
    }
    ({ onDrawerStateChanged, onDrawerOpen, onDrawerClose } = props);
    let tmp2 = null != self.props.statusBarBackgroundColor;
    let obj = { style: null, pointerEvents: null, collapsable: false, children: null };
    const items = [drawerSubview.drawerSubview, { width: self.props.drawerWidth, backgroundColor: str }];
    obj.style = items;
    let str2 = "none";
    const tmp = _objectWithoutProperties(props, closure_3);
    if (self.state.drawerOpened) {
      str2 = "auto";
    }
    obj.pointerEvents = str2;
    const items1 = [props.renderNavigationView()];
    let tmp8 = tmp2;
    if (tmp2) {
      obj = { style: drawerSubview.drawerStatusBar };
      tmp8 = React7(ViewDefault, obj);
    }
    items1[1] = tmp8;
    obj.children = items1;
    let tmp3Result = closure_1_10(ViewDefault, obj);
    obj = { style: drawerSubview.mainSubview, collapsable: false, children: null };
    let tmp12 = tmp2;
    let tmp4Result = ViewDefault;
    if (tmp2) {
      const obj1 = { translucent: true, backgroundColor: self.props.statusBarBackgroundColor };
      tmp12 = React7(_modDef304, obj1);
    }
    const items2 = [tmp12, ,];
    if (tmp2) {
      const obj2 = { style: null };
      const items3 = [drawerSubview.statusBar];
      const obj3 = { backgroundColor: self.props.statusBarBackgroundColor };
      items3[1] = obj3;
      obj2.style = items3;
      tmp2 = React7(ViewDefault, obj2);
    }
    items2[1] = tmp2;
    items2[2] = self.props.children;
    obj.children = items2;
    tmp3Result = closure_1_10(tmp4Result, obj);
    const obj4 = {};
    tmp4Result = _modDef309;
    const merged = Object.assign(tmp);
    obj4.ref = self._nativeRef;
    obj4.drawerBackgroundColor = str;
    obj4.drawerWidth = self.props.drawerWidth;
    obj4.drawerPosition = self.props.drawerPosition;
    obj4.drawerLockMode = self.props.drawerLockMode;
    const items4 = [drawerSubview.base, self.props.style];
    obj4.style = items4;
    ({
      _onDrawerSlide: obj7.onDrawerSlide,
      _onDrawerOpen: obj7.onDrawerOpen,
      _onDrawerClose: obj7.onDrawerClose,
      _onDrawerStateChanged: obj7.onDrawerStateChanged,
    } = self);
    const items5 = [tmp3Result, tmp3Result];
    obj4.children = items5;
    return closure_1_10(tmp4Result, obj4);
  },
};
let items = [
  entry,
  {
    key: "openDrawer",
    value: function openDrawer() {
      const Commands = DrawerLayoutAndroid(309).Commands;
      Commands.openDrawer(nullthrowsDefault(this._nativeRef.current));
    },
  },
  {
    key: "closeDrawer",
    value: function closeDrawer() {
      const Commands = DrawerLayoutAndroid(309).Commands;
      Commands.closeDrawer(nullthrowsDefault(this._nativeRef.current));
    },
  },
  {
    key: "blur",
    value: function blur() {
      nullthrowsDefault(this._nativeRef.current).blur();
    },
  },
  {
    key: "focus",
    value: function focus() {
      nullthrowsDefault(this._nativeRef.current).focus();
    },
  },
  {
    key: "measure",
    value: function measure(arg0) {
      nullthrowsDefault(this._nativeRef.current).measure(arg0);
    },
  },
  {
    key: "measureInWindow",
    value: function measureInWindow(arg0) {
      nullthrowsDefault(this._nativeRef.current).measureInWindow(arg0);
    },
  },
  {
    key: "measureLayout",
    value: function measureLayout(arg0, arg1, arg2) {
      nullthrowsDefault(this._nativeRef.current).measureLayout(arg0, arg1, arg2);
    },
  },
  {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      nullthrowsDefault(this._nativeRef.current).setNativeProps(arg0);
    },
  },
];
let obj = {
  key: "positions",
  get() {
    console.warn(
      'Setting DrawerLayoutAndroid drawerPosition using `DrawerLayoutAndroid.positions` is deprecated. Instead pass the string value "left" or "right"',
    );
    return { Left: "left", Right: "right" };
  },
};
let items1 = [obj];
obj = {
  base: { flex: 1, elevation: 16 },
  mainSubview: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
  drawerSubview: { position: "absolute", top: 0, bottom: 0 },
  statusBar: null,
  drawerStatusBar: null,
};
const importDefaultResultResult = _createClass(DrawerLayoutAndroid, items, items1);
obj.statusBar = { height: _modDef304.currentHeight };
const rect = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: _modDef304.currentHeight,
  backgroundColor: "rgba(0, 0, 0, 0.251)",
};
obj.drawerStatusBar = rect;
const drawerSubview = get_hairlineWidth.create(obj);

export default importDefaultResultResult;
