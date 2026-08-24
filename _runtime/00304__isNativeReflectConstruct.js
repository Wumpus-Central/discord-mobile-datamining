// _runtime/00304__isNativeReflectConstruct.js
import noopAll from "00019_noop.js";
import closure_3 from "metro/00041__classCallCheck.js";
import closure_4 from "metro/00093__possibleConstructorReturn.js";
import closure_5 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import importDefaultResult1 from "00098__inherits.js";
import importDefaultResult2 from "00305_getConstants.js";

const StatusBar = importDefault;
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
class StatusBar {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_3(this, StatusBar);
    items1 = [...items];
    tmp2 = closure_5;
    obj = closure_5(StatusBar);
    tmp3 = closure_4;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._stackEntry = null;
    return tmp3Result;
  }
}
importDefaultResult1(StatusBar, noopAll.Component);
let obj = {
  key: "componentDidMount",
  value: function componentDidMount() {
    this._stackEntry = StatusBar.pushStackEntry(this.props);
  }
};
let items = [
  obj,
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (null != this._stackEntry) {
        StatusBar.popStackEntry(tmp._stackEntry);
      }
    }
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      const self = this;
      if (null != this._stackEntry) {
        self._stackEntry = StatusBar.replaceStackEntry(self._stackEntry, self.props);
      }
    }
  },
  {
    key: "render",
    value: function render() {
      return null;
    }
  }
];
obj = {
  key: "setHidden",
  value: function setHidden(value) {
    StatusBar._defaultProps.hidden.value = value;
    StatusBar(305).setHidden(value);
  }
};
let items1 = [
  obj,
  {
    key: "setBarStyle",
    value: function setBarStyle(barStyle) {
      StatusBar._defaultProps.barStyle.value = barStyle;
      StatusBar(305).setStyle(barStyle);
    }
  },
  {
    key: "setNetworkActivityIndicatorVisible",
    value: function setNetworkActivityIndicatorVisible(arg0) {
      console.warn("`setNetworkActivityIndicatorVisible` is only available on iOS");
    }
  },
  {
    key: "setBackgroundColor",
    value: function setBackgroundColor(value, animated) {
      let flag = animated;
      if (!animated) {
        flag = false;
      }
      StatusBar._defaultProps.backgroundColor.value = value;
      const tmp3 = StatusBar(50)(value);
      if (null != tmp3) {
        tmp(38)(typeof tmp3 === "number", "Unexpected color given for StatusBar.setBackgroundColor");
        tmp(305).setColor(tmp3, flag);
        const tmpResult = tmp(305);
      } else {
        const _console = console;
        const _String = String;
        const _HermesInternal = HermesInternal;
        console.warn("`StatusBar.setBackgroundColor`: Color " + String(value) + " parsed to null or undefined");
      }
    }
  },
  {
    key: "setTranslucent",
    value: function setTranslucent(translucent) {
      StatusBar._defaultProps.translucent = translucent;
      StatusBar(305).setTranslucent(translucent);
    }
  },
  {
    key: "pushStackEntry",
    value: function pushStackEntry(animated) {
      let flag = animated.animated;
      if (flag == null) {
        flag = false;
      }
      let str = animated.showHideTransition;
      if (str == null) {
        str = "fade";
      }
      let tmp = null;
      if (null != animated.backgroundColor) {
        let obj = { value: null, animated: null };
        obj[0] = animated.backgroundColor;
        obj[1] = flag;
        tmp = obj;
      }
      obj = { backgroundColor: tmp, barStyle: null, translucent: null, hidden: null, networkActivityIndicatorVisible: null };
      let tmp2 = null;
      if (null != animated.barStyle) {
        obj = { value: null, animated: null };
        obj[0] = animated.barStyle;
        obj[1] = flag;
        tmp2 = obj;
      }
      obj[1] = tmp2;
      obj[2] = animated.translucent;
      let tmp3 = null;
      if (null != animated.hidden) {
        obj1 = { value: null, animated: null, transition: null };
        obj1[0] = animated.hidden;
        obj1[1] = flag;
        obj1[2] = str;
        tmp3 = obj1;
      }
      obj[3] = tmp3;
      obj[4] = animated.networkActivityIndicatorVisible;
      const _propsStack = StatusBar._propsStack;
      _propsStack.push(obj);
      StatusBar._updatePropsStack();
      return obj;
    }
  },
  {
    key: "popStackEntry",
    value: function popStackEntry(arg0) {
      const _propsStack = StatusBar._propsStack;
      const index = _propsStack.indexOf(arg0);
      if (-1 !== index) {
        const _propsStack1 = obj._propsStack;
        _propsStack1.splice(index, 1);
      }
      StatusBar._updatePropsStack();
    }
  },
  {
    key: "replaceStackEntry",
    value: function replaceStackEntry(arg0, animated) {
      let flag = animated.animated;
      if (flag == null) {
        flag = false;
      }
      let str = animated.showHideTransition;
      if (str == null) {
        str = "fade";
      }
      let tmp = null;
      if (null != animated.backgroundColor) {
        let obj = { value: null, animated: null };
        obj[0] = animated.backgroundColor;
        obj[1] = flag;
        tmp = obj;
      }
      obj = { backgroundColor: tmp, barStyle: null, translucent: null, hidden: null, networkActivityIndicatorVisible: null };
      let tmp2 = null;
      if (null != animated.barStyle) {
        obj = { value: null, animated: null };
        obj[0] = animated.barStyle;
        obj[1] = flag;
        tmp2 = obj;
      }
      obj[1] = tmp2;
      obj[2] = animated.translucent;
      let tmp3 = null;
      if (null != animated.hidden) {
        obj1 = { value: null, animated: null, transition: null };
        obj1[0] = animated.hidden;
        obj1[1] = flag;
        obj1[2] = str;
        tmp3 = obj1;
      }
      obj[3] = tmp3;
      obj[4] = animated.networkActivityIndicatorVisible;
      const _propsStack = StatusBar._propsStack;
      const index = _propsStack.indexOf(arg0);
      if (-1 !== index) {
        obj5._propsStack[index] = obj;
      }
      StatusBar._updatePropsStack();
      return obj;
    }
  }
];
const importDefaultResultResult = importDefaultResult(StatusBar, items, items1);
let obj1 = importDefaultResultResult;
importDefaultResultResult._propsStack = [];
let str = importDefaultResult2.getConstants().DEFAULT_BACKGROUND_COLOR;
if (str == null) {
  str = "black";
}
obj = { backgroundColor: str, barStyle: "default", translucent: false, hidden: false, networkActivityIndicatorVisible: false };
let flag = obj.animated;
if (flag == null) {
  flag = false;
}
let str2 = obj.showHideTransition;
if (str2 == null) {
  str2 = "fade";
}
let tmp6 = null;
if (null != obj.backgroundColor) {
  obj1 = { value: null, animated: null };
  obj1[0] = obj.backgroundColor;
  obj1[1] = flag;
  tmp6 = obj1;
}
const obj2 = { backgroundColor: tmp6, barStyle: null, translucent: null, hidden: null, networkActivityIndicatorVisible: null };
let tmp7 = null;
if (null != obj.barStyle) {
  const obj3 = { value: null, animated: null };
  obj3[0] = obj.barStyle;
  obj3[1] = flag;
  tmp7 = obj3;
}
obj2[1] = tmp7;
obj2[2] = obj.translucent;
let tmp8 = null;
if (null != obj.hidden) {
  const obj4 = { value: null, animated: null, transition: null };
  obj4[0] = obj.hidden;
  obj4[1] = flag;
  obj4[2] = str2;
  tmp8 = obj4;
}
obj2[3] = tmp8;
obj2[4] = obj.networkActivityIndicatorVisible;
importDefaultResultResult._defaultProps = obj2;
importDefaultResultResult._updateImmediate = null;
importDefaultResultResult._currentValues = null;
importDefaultResultResult.currentHeight = importDefaultResult2.getConstants().HEIGHT;
importDefaultResultResult._updatePropsStack = () => {
  clearImmediate(importDefaultResultResult._updateImmediate);
  importDefaultResultResult._updateImmediate = setImmediate(() => {
    ({ _currentValues, _propsStack } = _defaultProps);
    const merged = Object.assign(_defaultProps._defaultProps);
    const reduced = _propsStack.reduce((arg0, obj) => {
      for (const key10005 in arg1) {
        let tmp = key10005;
        if (null == arg1[key10005]) {
          continue;
        } else {
          arg0[key10005] = arg1[key10005];
          continue;
        }
        continue;
      }
      return arg0;
    }, {});
    callback(305).setStyle(reduced.barStyle.value);
    const tmp7 = callback(50)(reduced.backgroundColor.value);
    if (null == tmp7) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn("`StatusBar._updatePropsStack`: Color " + reduced.backgroundColor.value + " parsed to null or undefined");
    } else {
      tmp4(38)(typeof tmp7 === "number", "Unexpected color given in StatusBar._updatePropsStack");
      let tmp4Result = tmp4(305);
      tmp4Result.setColor(tmp7, reduced.backgroundColor.animated);
    }
    let tmp12 = _currentValues;
    if (_currentValues) {
      let value;
      if (_currentValues.hidden != null) {
        value = iter.value;
      }
      tmp12 = value === reduced.hidden.value;
    }
    if (!tmp12) {
      tmp4Result = tmp4(305);
      tmp4Result.setHidden(reduced.hidden.value);
    }
    let tmp15 = _currentValues;
    if (_currentValues) {
      tmp15 = _currentValues.translucent === reduced.translucent;
    }
    if (tmp15) {
      tmp15 = !reduced.translucent;
    }
    if (!tmp15) {
      tmp4(305).setTranslucent(reduced.translucent);
      const tmp4Result1 = tmp4(305);
    }
    _defaultProps._currentValues = reduced;
  });
};

export default importDefaultResultResult;