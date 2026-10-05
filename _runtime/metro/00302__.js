// _runtime/metro/00302__.js
import react2 from "../00019_react.js";
import nullthrowsDefault from "../00070_nullthrows.js";
import ViewDefault from "../00108_View.js";
import _modDef304 from "00304__.js";
import _mod309 from "00309__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import metroRequire from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import Fragment from "../react/00021_Fragment.js";
import get_hairlineWidth from "../00254_get_hairlineWidth.js";

const _modDef309 = _mod309;
const react = react2;

let c10;
let c9;
let obj3;
let rect;
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
let closure_3 = [
  "drawerBackgroundColor",
  "onDrawerStateChanged",
  "renderNavigationView",
  "onDrawerOpen",
  "onDrawerClose",
];
const createRef = react2.createRef;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_12 = ["Idle", "Dragging", "Settling"];
class DrawerLayoutAndroid {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, DrawerLayoutAndroid);
    const items1 = [...items];
    const obj = _getPrototypeOf(DrawerLayoutAndroid);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = metroRequire(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result._nativeRef = createRef();
    tmp3Result.state = { drawerOpened: false };
    tmp3Result._onDrawerSlide = (arg0) => {
      if (closure_0.props.onDrawerSlide) {
        const props = closure_0.props;
        props.onDrawerSlide(arg0);
      }
      if ("on-drag" === closure_0.props.keyboardDismissMode) {
        closure_2_1(closure_2_2[8])();
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
        props.onDrawerStateChanged(closure_2_12[arg0.nativeEvent.drawerState]);
      }
    };
    return tmp3Result;
  }
}
_inherits(DrawerLayoutAndroid, react.Component);
const entry = {
  key: "render",
  value: function render() {
    let items;
    let items1;
    let items2;
    let items3;
    let items4;
    let items5;
    let onDrawerClose;
    let onDrawerOpen;
    let onDrawerStateChanged;
    let str2;
    const self = this;
    const props = this.props;
    const drawerBackgroundColor = props.drawerBackgroundColor;
    let str = "white";
    if (undefined !== drawerBackgroundColor) {
      str = drawerBackgroundColor;
    }
    ({ onDrawerStateChanged, onDrawerOpen, onDrawerClose } = props);
    const renderNavigationView = props.renderNavigationView;
    let tmp2 = null != self.props.statusBarBackgroundColor;
    const obj = { style: items, pointerEvents: str2, collapsable: false, children: items1 };
    items = [drawerSubview.drawerSubview, { width: self.props.drawerWidth, backgroundColor: str }];
    str2 = "none";
    const tmp = _objectWithoutProperties(props, closure_3);
    const tmp6 = ViewDefault;
    if (self.state.drawerOpened) {
      str2 = "auto";
    }
    items1 = [renderNavigationView()];
    let tmp8 = tmp2;
    if (tmp8) {
      const obj2 = { style: drawerSubview.drawerStatusBar };
      tmp8 = React4(ViewDefault, obj2);
    }
    items1[1] = tmp8;
    let tmp12 = tmp2;
    const obj3 = { style: drawerSubview.mainSubview, collapsable: false, children: items2 };
    const tmp3Result = authStore(tmp6, obj);
    const tmp4Result = ViewDefault;
    if (tmp2) {
      const obj4 = { translucent: true, backgroundColor: self.props.statusBarBackgroundColor };
      tmp12 = React4(_modDef304, obj4);
    }
    items2 = [tmp12, ,];
    if (tmp2) {
      const obj5 = { style: items3 };
      items3 = [drawerSubview.statusBar];
      const obj6 = { backgroundColor: self.props.statusBarBackgroundColor };
      items3[1] = obj6;
      tmp2 = React4(ViewDefault, obj5);
    }
    items2[1] = tmp2;
    items2[2] = self.props.children;
    const obj13 = {
      ref: self._nativeRef,
      drawerBackgroundColor: str,
      drawerWidth: self.props.drawerWidth,
      drawerPosition: self.props.drawerPosition,
      drawerLockMode: self.props.drawerLockMode,
      style: items4,
      children: items5,
    };
    const tmp3Result2 = authStore(tmp4Result, obj3);
    const tmp4Result2 = _modDef309;
    const merged = Object.assign(tmp);
    items4 = [drawerSubview.base, self.props.style];
    ({
      _onDrawerSlide: obj7.onDrawerSlide,
      _onDrawerOpen: obj7.onDrawerOpen,
      _onDrawerClose: obj7.onDrawerClose,
      _onDrawerStateChanged: obj7.onDrawerStateChanged,
    } = self);
    items5 = [tmp3Result2, tmp3Result];
    return authStore(tmp4Result2, obj13);
  },
};
let items = [
  entry,
  {
    key: "openDrawer",
    value: function openDrawer() {
      const Commands = _mod309.Commands;
      Commands.openDrawer(nullthrowsDefault(this._nativeRef.current));
    },
  },
  {
    key: "closeDrawer",
    value: function closeDrawer() {
      const Commands = _mod309.Commands;
      Commands.closeDrawer(nullthrowsDefault(this._nativeRef.current));
    },
  },
  {
    key: "blur",
    value: function blur() {
      const obj = nullthrowsDefault(this._nativeRef.current);
      obj.blur();
    },
  },
  {
    key: "focus",
    value: function focus() {
      const obj = nullthrowsDefault(this._nativeRef.current);
      obj.focus();
    },
  },
  {
    key: "measure",
    value: function measure(arg0) {
      const obj = nullthrowsDefault(this._nativeRef.current);
      obj.measure(arg0);
    },
  },
  {
    key: "measureInWindow",
    value: function measureInWindow(arg0) {
      const obj = nullthrowsDefault(this._nativeRef.current);
      obj.measureInWindow(arg0);
    },
  },
  {
    key: "measureLayout",
    value: function measureLayout(arg0, arg1, arg2) {
      const obj = nullthrowsDefault(this._nativeRef.current);
      obj.measureLayout(arg0, arg1, arg2);
    },
  },
  {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      const obj = nullthrowsDefault(this._nativeRef.current);
      obj.setNativeProps(arg0);
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
const importDefaultResultResult = _createClass(DrawerLayoutAndroid, items, items1);
let obj2 = {
  base: { flex: 1, elevation: 16 },
  mainSubview: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
  drawerSubview: { position: "absolute", top: 0, bottom: 0 },
  statusBar: obj3,
  drawerStatusBar: rect,
};
obj3 = { height: _modDef304.currentHeight };
const create = get_hairlineWidth.create;
rect = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: _modDef304.currentHeight,
  backgroundColor: "rgba(0, 0, 0, 0.251)",
};
const drawerSubview = create(obj2);

export default importDefaultResultResult;
