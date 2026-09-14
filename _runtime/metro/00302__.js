// === Module 302: ? ===

// Module 302
import nullthrowsDefault from "nullthrows" /* 70 */;
import ViewDefault from "View" /* 108 */;
import dismissKeyboardDefault from "dismissKeyboard" /* 303 */;
import _modDef304 from "module_304" /* 304 */;
import _modDef309 from "module_309" /* 309 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import metroRequire from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;
import get_hairlineWidth from "get hairlineWidth" /* 254 */;

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
  } catch (err) {
  }
}
let closure_3 = ["drawerBackgroundColor", "onDrawerStateChanged", "renderNavigationView", "onDrawerOpen", "onDrawerClose"];
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
    const obj = { style: null, pointerEvents: null, collapsable: false, children: null };
    const items = [drawerSubview.drawerSubview, { width: self.props.drawerWidth, backgroundColor: str }];
    obj.style = items;
    let str2 = "none";
    const tmp = _objectWithoutProperties(props, closure_3);
    if (self.state.drawerOpened) {
      str2 = "auto";
    }
    obj.pointerEvents = str2;
    const items1 = [props.renderNavigationView(), ];
    let tmp8 = tmp2;
    if (tmp2) {
      const obj2 = { style: drawerSubview.drawerStatusBar };
      tmp8 = React7(ViewDefault, obj2);
    }
    items1[1] = tmp8;
    obj.children = items1;
    const obj3 = { style: drawerSubview.mainSubview, collapsable: false, children: null };
    let tmp12 = tmp2;
    const tmp3Result = closure_1_10(ViewDefault, obj);
    if (tmp2) {
      const obj4 = { translucent: true, backgroundColor: self.props.statusBarBackgroundColor };
      tmp12 = React7(_modDef304, obj4);
    }
    const items2 = [tmp12, , ];
    if (tmp2) {
      const obj5 = { style: null };
      const items3 = [drawerSubview.statusBar, ];
      const obj6 = { backgroundColor: self.props.statusBarBackgroundColor };
      items3[1] = obj6;
      obj5.style = items3;
      tmp2 = React7(ViewDefault, obj5);
    }
    items2[1] = tmp2;
    items2[2] = self.props.children;
    obj3.children = items2;
    const tmp4Result = ViewDefault;
    const obj13 = {};
    const tmp3Result2 = closure_1_10(ViewDefault, obj3);
    const merged = Object.assign(tmp);
    obj13.ref = self._nativeRef;
    obj13.drawerBackgroundColor = str;
    obj13.drawerWidth = self.props.drawerWidth;
    obj13.drawerPosition = self.props.drawerPosition;
    obj13.drawerLockMode = self.props.drawerLockMode;
    const items4 = [drawerSubview.base, self.props.style];
    obj13.style = items4;
    ({ _onDrawerSlide: obj7.onDrawerSlide, _onDrawerOpen: obj7.onDrawerOpen, _onDrawerClose: obj7.onDrawerClose, _onDrawerStateChanged: obj7.onDrawerStateChanged } = self);
    const items5 = [tmp3Result2, tmp3Result];
    obj13.children = items5;
    return closure_1_10(_modDef309, obj13);
  }
};
let items = [
  entry,
  {
    key: "openDrawer",
    value: function openDrawer() {
      const Commands = DrawerLayoutAndroid(309).Commands;
      Commands.openDrawer(nullthrowsDefault(this._nativeRef.current));
    }
  },
  {
    key: "closeDrawer",
    value: function closeDrawer() {
      const Commands = DrawerLayoutAndroid(309).Commands;
      Commands.closeDrawer(nullthrowsDefault(this._nativeRef.current));
    }
  },
  {
    key: "blur",
    value: function blur() {
      nullthrowsDefault(this._nativeRef.current).blur();
    }
  },
  {
    key: "focus",
    value: function focus() {
      nullthrowsDefault(this._nativeRef.current).focus();
    }
  },
  {
    key: "measure",
    value: function measure(arg0) {
      nullthrowsDefault(this._nativeRef.current).measure(arg0);
    }
  },
  {
    key: "measureInWindow",
    value: function measureInWindow(arg0) {
      nullthrowsDefault(this._nativeRef.current).measureInWindow(arg0);
    }
  },
  {
    key: "measureLayout",
    value: function measureLayout(arg0, arg1, arg2) {
      nullthrowsDefault(this._nativeRef.current).measureLayout(arg0, arg1, arg2);
    }
  },
  {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      nullthrowsDefault(this._nativeRef.current).setNativeProps(arg0);
    }
  }
];
let items1 = [
  {
    key: "positions",
    get() {
      console.warn("Setting DrawerLayoutAndroid drawerPosition using `DrawerLayoutAndroid.positions` is deprecated. Instead pass the string value \"left\" or \"right\"");
      return { Left: "left", Right: "right" };
    }
  }
];
let obj2 = { base: { flex: 1, elevation: 16 }, mainSubview: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, drawerSubview: { position: "absolute", top: 0, bottom: 0 }, statusBar: null, drawerStatusBar: null };
const importDefaultResultResult = _createClass(DrawerLayoutAndroid, items, items1);
let obj = {
  key: "positions",
  get() {
    console.warn("Setting DrawerLayoutAndroid drawerPosition using `DrawerLayoutAndroid.positions` is deprecated. Instead pass the string value \"left\" or \"right\"");
    return { Left: "left", Right: "right" };
  }
};
obj2.statusBar = { height: _modDef304.currentHeight };
const rect = { position: "absolute", top: 0, left: 0, right: 0, height: _modDef304.currentHeight, backgroundColor: "rgba(0, 0, 0, 0.251)" };
obj2.drawerStatusBar = rect;
const drawerSubview = get_hairlineWidth.create(obj2);

export default importDefaultResultResult;