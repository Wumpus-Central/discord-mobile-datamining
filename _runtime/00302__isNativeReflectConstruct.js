// _runtime/00302__isNativeReflectConstruct.js
import nullthrowsDefault from "nullthrows" /* 70 */;
import ViewDefault from "View" /* 108 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 304 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import closure_5 from "_classCallCheck" /* 41 */;
import closure_6 from "_possibleConstructorReturn" /* 93 */;
import closure_7 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import importDefaultResult1 from "_inherits" /* 98 */;
import { createRef } from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;
import importDefaultResult2 from "get hairlineWidth" /* 254 */;

const DrawerLayoutAndroid = arg1;
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
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_12 = ["Idle", "Dragging", "Settling"];
class DrawerLayoutAndroid {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_5(this, closure_0);
    items1 = [...items];
    tmp2 = closure_7;
    obj = closure_7(closure_0);
    tmp3 = closure_6;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result._nativeRef = createRef();
    tmp3Result.state = { drawerOpened: false };
    tmp3Result._onDrawerSlide = (arg0) => {
      if (store.props.onDrawerSlide) {
        const props = tmp.props;
        props.onDrawerSlide(arg0);
      }
      if ("on-drag" === store.props.keyboardDismissMode) {
        closure_1_1(closure_1_2[8])();
      }
    };
    tmp3Result._onDrawerOpen = () => {
      store.setState({ drawerOpened: true });
      if (store.props.onDrawerOpen) {
        const props = store.props;
        props.onDrawerOpen();
      }
    };
    tmp3Result._onDrawerClose = () => {
      store.setState({ drawerOpened: false });
      if (store.props.onDrawerClose) {
        const props = store.props;
        props.onDrawerClose();
      }
    };
    tmp3Result._onDrawerStateChanged = (arg0) => {
      if (store.props.onDrawerStateChanged) {
        const props = tmp.props;
        props.onDrawerStateChanged(closure_1_12[arg0.nativeEvent.drawerState]);
      }
    };
    return tmp3Result;
  }
}
importDefaultResult1(DrawerLayoutAndroid, importAllResult.Component);
let obj = {
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
    let obj = { style: items, pointerEvents: null, collapsable: false, children: null };
    items = [drawerSubview.drawerSubview, { width: self.props.drawerWidth, backgroundColor: str }];
    let str2 = "none";
    const tmp = callback(props, closure_3);
    if (self.state.drawerOpened) {
      str2 = "auto";
    }
    obj[1] = str2;
    const items1 = [props.renderNavigationView(), ];
    let tmp8 = tmp2;
    if (tmp2) {
      obj = { style: null };
      obj[0] = tmp7.drawerStatusBar;
      tmp8 = callback4(tmp4(108), obj);
    }
    items1[1] = tmp8;
    obj[3] = items1;
    let tmp3Result = tmp3(ViewDefault, obj);
    obj = { style: tmp7.mainSubview, collapsable: false, children: null };
    let tmp12 = tmp2;
    let tmp4Result = tmp4(108);
    if (tmp2) {
      obj1 = { translucent: true, backgroundColor: null };
      obj1[1] = self.props.statusBarBackgroundColor;
      tmp12 = callback4(tmp4(304), obj1);
    }
    const items2 = [tmp12, , ];
    if (tmp2) {
      const obj2 = { style: null };
      const items3 = [tmp7.statusBar, ];
      const obj3 = { backgroundColor: null };
      obj3[0] = self.props.statusBarBackgroundColor;
      items3[1] = obj3;
      obj2[0] = items3;
      tmp2 = callback4(tmp4(108), obj2);
    }
    items2[1] = tmp2;
    items2[2] = self.props.children;
    obj[2] = items2;
    tmp3Result = tmp3(tmp4Result, obj);
    const obj4 = {};
    tmp4Result = tmp4(309);
    const merged = Object.assign(tmp);
    obj4.ref = self._nativeRef;
    obj4.drawerBackgroundColor = str;
    obj4.drawerWidth = self.props.drawerWidth;
    obj4.drawerPosition = self.props.drawerPosition;
    obj4.drawerLockMode = self.props.drawerLockMode;
    const items4 = [drawerSubview.base, self.props.style];
    obj4.style = items4;
    ({ _onDrawerSlide: obj7.onDrawerSlide, _onDrawerOpen: obj7.onDrawerOpen, _onDrawerClose: obj7.onDrawerClose, _onDrawerStateChanged: obj7.onDrawerStateChanged } = self);
    const items5 = [tmp3Result, tmp3Result];
    obj4.children = items5;
    return closure_10(tmp4Result, obj4);
  }
};
let items = [
  obj,
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
obj = {
  key: "positions",
  get() {
    console.warn("Setting DrawerLayoutAndroid drawerPosition using `DrawerLayoutAndroid.positions` is deprecated. Instead pass the string value \"left\" or \"right\"");
    return { Left: "left", Right: "right" };
  }
};
let items1 = [obj];
const importDefaultResultResult = importDefaultResult(DrawerLayoutAndroid, items, items1);
obj = { base: { flex: 1, elevation: 16 }, mainSubview: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, drawerSubview: { position: "absolute", top: 0, bottom: 0 }, statusBar: null, drawerStatusBar: null };
obj[3] = { height: _isNativeReflectConstructDefault.currentHeight };
let obj1 = { height: _isNativeReflectConstructDefault.currentHeight };
obj[4] = { position: "absolute", top: 0, left: 0, right: 0, height: _isNativeReflectConstructDefault.currentHeight, backgroundColor: "rgba(0, 0, 0, 0.251)" };
let closure_13 = importDefaultResult2.create(obj);

export default importDefaultResultResult;