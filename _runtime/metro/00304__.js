// _runtime/metro/00304__.js
import _modAll19 from "00019__.js";
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import get from "00305__.js";

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
  } catch (err) {}
}
_possibleConstructorReturnDefault;
class StatusBar {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_3(this, StatusBar);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(StatusBar);
    tmp3 = closure_4;
    if (metroRequire()) {
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
_inherits(StatusBar, _modAll19.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    this._stackEntry = StatusBar.pushStackEntry(this.props);
  },
};
let items = [
  entry,
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (null != this._stackEntry) {
        StatusBar.popStackEntry(tmp._stackEntry);
      }
    },
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      const self = this;
      if (null != this._stackEntry) {
        self._stackEntry = StatusBar.replaceStackEntry(self._stackEntry, self.props);
      }
    },
  },
  {
    key: "render",
    value: function render() {
      return null;
    },
  },
];
const entry1 = {
  key: "setHidden",
  value: function setHidden(value, arg1) {
    StatusBar._defaultProps.hidden.value = value;
    StatusBar(305).setHidden(value);
  },
};
let items1 = [
  entry1,
  {
    key: "setBarStyle",
    value: function setBarStyle(barStyle, arg1) {
      StatusBar._defaultProps.barStyle.value = barStyle;
      StatusBar(305).setStyle(barStyle);
    },
  },
  {
    key: "setNetworkActivityIndicatorVisible",
    value: function setNetworkActivityIndicatorVisible(arg0) {
      console.warn("`setNetworkActivityIndicatorVisible` is only available on iOS");
    },
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
        StatusBar(38)(typeof tmp3 === "number", "Unexpected color given for StatusBar.setBackgroundColor");
        StatusBar(305).setColor(tmp3, flag);
        const tmpResult = StatusBar(305);
      } else {
        const _console = console;
        const _String = String;
        const _HermesInternal = HermesInternal;
        console.warn("`StatusBar.setBackgroundColor`: Color " + String(value) + " parsed to null or undefined");
      }
    },
  },
  {
    key: "setTranslucent",
    value: function setTranslucent(translucent) {
      StatusBar._defaultProps.translucent = translucent;
      StatusBar(305).setTranslucent(translucent);
    },
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
        let obj = { value: animated.backgroundColor, animated: flag };
        tmp = obj;
      }
      obj = {
        backgroundColor: tmp,
        barStyle: null,
        translucent: null,
        hidden: null,
        networkActivityIndicatorVisible: null,
      };
      let tmp2 = null;
      if (null != animated.barStyle) {
        obj = { value: animated.barStyle, animated: flag };
        tmp2 = obj;
      }
      obj.barStyle = tmp2;
      obj.translucent = animated.translucent;
      let tmp3 = null;
      if (null != animated.hidden) {
        const obj1 = { value: animated.hidden, animated: flag, transition: str };
        tmp3 = obj1;
      }
      obj.hidden = tmp3;
      obj.networkActivityIndicatorVisible = animated.networkActivityIndicatorVisible;
      const _propsStack = StatusBar._propsStack;
      _propsStack.push(obj);
      StatusBar._updatePropsStack();
      return obj;
    },
  },
  {
    key: "popStackEntry",
    value: function popStackEntry(arg0) {
      const _propsStack = StatusBar._propsStack;
      const index = _propsStack.indexOf(arg0);
      if (-1 !== index) {
        const _propsStack1 = StatusBar._propsStack;
        _propsStack1.splice(index, 1);
      }
      StatusBar._updatePropsStack();
    },
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
        let obj = { value: animated.backgroundColor, animated: flag };
        tmp = obj;
      }
      obj = {
        backgroundColor: tmp,
        barStyle: null,
        translucent: null,
        hidden: null,
        networkActivityIndicatorVisible: null,
      };
      let tmp2 = null;
      if (null != animated.barStyle) {
        obj = { value: animated.barStyle, animated: flag };
        tmp2 = obj;
      }
      obj.barStyle = tmp2;
      obj.translucent = animated.translucent;
      let tmp3 = null;
      if (null != animated.hidden) {
        const obj1 = { value: animated.hidden, animated: flag, transition: str };
        tmp3 = obj1;
      }
      obj.hidden = tmp3;
      obj.networkActivityIndicatorVisible = animated.networkActivityIndicatorVisible;
      const _propsStack = StatusBar._propsStack;
      const index = _propsStack.indexOf(arg0);
      if (-1 !== index) {
        StatusBar._propsStack[index] = obj;
      }
      StatusBar._updatePropsStack();
      return obj;
    },
  },
];
const importDefaultResultResult = _createClass(StatusBar, items, items1);
let c2 = importDefaultResultResult;
importDefaultResultResult._propsStack = [];
let str = get.getConstants().DEFAULT_BACKGROUND_COLOR;
if (str == null) {
  str = "black";
}
let obj = {
  backgroundColor: str,
  barStyle: "default",
  translucent: false,
  hidden: false,
  networkActivityIndicatorVisible: false,
};
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
  obj = { value: null, animated: null };
  obj.value = obj.backgroundColor;
  obj.animated = flag;
  tmp6 = obj;
}
let obj1 = {
  backgroundColor: tmp6,
  barStyle: null,
  translucent: null,
  hidden: null,
  networkActivityIndicatorVisible: null,
};
let tmp7 = null;
if (null != obj.barStyle) {
  let obj2 = { value: obj.barStyle, animated: flag };
  tmp7 = obj2;
}
obj1.barStyle = tmp7;
obj1.translucent = obj.translucent;
let tmp8 = null;
if (null != obj.hidden) {
  const obj3 = { value: obj.hidden, animated: flag, transition: str2 };
  tmp8 = obj3;
}
obj1.hidden = tmp8;
obj1.networkActivityIndicatorVisible = obj.networkActivityIndicatorVisible;
importDefaultResultResult._defaultProps = obj1;
importDefaultResultResult._updateImmediate = null;
importDefaultResultResult._currentValues = null;
importDefaultResultResult.currentHeight = get.getConstants().HEIGHT;
importDefaultResultResult._updatePropsStack = () => {
  clearImmediate(importDefaultResultResult._updateImmediate);
  importDefaultResultResult._updateImmediate = setImmediate(() => {
    ({ _currentValues, _propsStack } = _defaultProps);
    const merged = Object.assign(_defaultProps._defaultProps);
    const reduced = _propsStack.reduce((acc, item) => {
      for (const key10005 in arg1) {
        if (null == arg1[key10005]) {
          continue;
        } else {
          arg0[key10005] = arg1[key10005];
          continue;
        }
        continue;
      }
      return acc;
    }, {});
    StatusBar(305).setStyle(reduced.barStyle.value);
    const tmp7 = StatusBar(50)(reduced.backgroundColor.value);
    if (null == tmp7) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn(
        "`StatusBar._updatePropsStack`: Color " + reduced.backgroundColor.value + " parsed to null or undefined",
      );
    } else {
      StatusBar(38)(typeof tmp7 === "number", "Unexpected color given in StatusBar._updatePropsStack");
      let tmp4Result = StatusBar(305);
      tmp4Result.setColor(tmp7, reduced.backgroundColor.animated);
    }
    let tmp12 = _currentValues;
    if (_currentValues) {
      value = undefined;
      if (_currentValues.hidden != null) {
        value = iter.value;
      }
      tmp12 = value === reduced.hidden.value;
    }
    if (!tmp12) {
      tmp4Result = StatusBar(305);
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
      StatusBar(305).setTranslucent(reduced.translucent);
      const tmp4Result1 = StatusBar(305);
    }
    _defaultProps._currentValues = reduced;
    const obj = {};
    const obj2 = StatusBar(305);
  });
};

export default importDefaultResultResult;
