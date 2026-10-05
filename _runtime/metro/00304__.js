// _runtime/metro/00304__.js
import reactAll from "../00019_react.js";
import _modDef38 from "00038__.js";
import processColorDefault from "../00050_processColor.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import get_mod from "00305__.js";

let tmp7;
let tmp8;
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
class StatusBar {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, StatusBar);
    const items1 = [...items];
    const obj = _getPrototypeOf(StatusBar);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = _possibleConstructorReturn(self, constructResult);
    tmp3Result._stackEntry = null;
    return tmp3Result;
  }
}
_inherits(StatusBar, reactAll.Component);
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
    const obj = get;
    obj.setHidden(value);
  },
};
let items1 = [
  entry1,
  {
    key: "setBarStyle",
    value: function setBarStyle(barStyle, arg1) {
      StatusBar._defaultProps.barStyle.value = barStyle;
      const obj = get;
      obj.setStyle(barStyle);
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
    value: function setBackgroundColor(value, arg1) {
      const tmp = arg1 || false;
      StatusBar._defaultProps.backgroundColor.value = value;
      const tmp4 = processColorDefault(value);
      if (null != tmp4) {
        _modDef38(typeof tmp4 === "number", "Unexpected color given for StatusBar.setBackgroundColor");
        const tmp2Result = get;
        tmp2Result.setColor(tmp4, tmp);
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
      const obj = get;
      obj.setTranslucent(translucent);
    },
  },
  {
    key: "pushStackEntry",
    value: function pushStackEntry(animated) {
      let tmp2;
      let tmp3;
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
        tmp = { value: animated.backgroundColor, animated: flag };
        const obj = { value: animated.backgroundColor, animated: flag };
      }
      const obj2 = {
        backgroundColor: tmp,
        barStyle: tmp2,
        translucent: animated.translucent,
        hidden: tmp3,
        networkActivityIndicatorVisible: animated.networkActivityIndicatorVisible,
      };
      tmp2 = null;
      if (null != animated.barStyle) {
        tmp2 = { value: animated.barStyle, animated: flag };
        const obj3 = { value: animated.barStyle, animated: flag };
      }
      tmp3 = null;
      if (null != animated.hidden) {
        tmp3 = { value: animated.hidden, animated: flag, transition: str };
        const obj4 = { value: animated.hidden, animated: flag, transition: str };
      }
      const _propsStack = StatusBar._propsStack;
      _propsStack.push(obj2);
      StatusBar._updatePropsStack();
      return obj2;
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
      let tmp2;
      let tmp3;
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
        tmp = { value: animated.backgroundColor, animated: flag };
        const obj = { value: animated.backgroundColor, animated: flag };
      }
      const obj2 = {
        backgroundColor: tmp,
        barStyle: tmp2,
        translucent: animated.translucent,
        hidden: tmp3,
        networkActivityIndicatorVisible: animated.networkActivityIndicatorVisible,
      };
      tmp2 = null;
      if (null != animated.barStyle) {
        tmp2 = { value: animated.barStyle, animated: flag };
        const obj3 = { value: animated.barStyle, animated: flag };
      }
      tmp3 = null;
      if (null != animated.hidden) {
        tmp3 = { value: animated.hidden, animated: flag, transition: str };
        const obj4 = { value: animated.hidden, animated: flag, transition: str };
      }
      const _propsStack = StatusBar._propsStack;
      const index = _propsStack.indexOf(arg0);
      if (-1 !== index) {
        StatusBar._propsStack[index] = obj2;
      }
      StatusBar._updatePropsStack();
      return obj2;
    },
  },
];
const importDefaultResultResult = _createClass(StatusBar, items, items1);
let c2 = importDefaultResultResult;
importDefaultResultResult._propsStack = [];
let get = get_mod;
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
  let obj2 = { value: obj.backgroundColor, animated: flag };
  tmp6 = obj2;
}
let obj3 = {
  backgroundColor: tmp6,
  barStyle: tmp7,
  translucent: obj.translucent,
  hidden: tmp8,
  networkActivityIndicatorVisible: obj.networkActivityIndicatorVisible,
};
tmp7 = null;
if (null != obj.barStyle) {
  let obj4 = { value: obj.barStyle, animated: flag };
  tmp7 = obj4;
}
tmp8 = null;
if (null != obj.hidden) {
  tmp8 = { value: obj.hidden, animated: flag, transition: str2 };
  const obj5 = { value: obj.hidden, animated: flag, transition: str2 };
}
importDefaultResultResult._defaultProps = obj3;
importDefaultResultResult._updateImmediate = null;
importDefaultResultResult._currentValues = null;
get = get_mod;
importDefaultResultResult.currentHeight = get.getConstants().HEIGHT;
importDefaultResultResult._updatePropsStack = () => {
  let _defaultProps;
  clearImmediate(importDefaultResultResult._updateImmediate);
  importDefaultResultResult._updateImmediate = setImmediate(() => {
    let _currentValues;
    let _propsStack;
    ({ _currentValues, _propsStack } = _defaultProps);
    const obj = {};
    const reduce = _propsStack.reduce;
    const merged = Object.assign(_defaultProps._defaultProps);
    const reduced = reduce((arg0, obj) => {
      for (const key10005 in obj) {
        if (null == obj[key10005]) {
          continue;
        } else {
          arg0[key10005] = obj[key10005];
          continue;
        }
        continue;
      }
      return arg0;
    }, obj);
    const obj2 = get;
    obj2.setStyle(reduced.barStyle.value);
    const tmp7 = processColorDefault(reduced.backgroundColor.value);
    if (null == tmp7) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn(
        "`StatusBar._updatePropsStack`: Color " + reduced.backgroundColor.value + " parsed to null or undefined",
      );
    } else {
      _modDef38(typeof tmp7 === "number", "Unexpected color given in StatusBar._updatePropsStack");
      const tmp4Result = get;
      tmp4Result.setColor(tmp7, reduced.backgroundColor.animated);
    }
    let tmp12 = _currentValues;
    if (tmp12) {
      let value;
      if (_currentValues.hidden != null) {
        value = iter.value;
      }
      tmp12 = value === reduced.hidden.value;
    }
    if (!tmp12) {
      const tmp4Result3 = get;
      tmp4Result3.setHidden(reduced.hidden.value);
    }
    const tmp15 = _currentValues && _currentValues.translucent === reduced.translucent && !reduced.translucent;
    if (!tmp15) {
      const tmp4Result4 = get;
      tmp4Result4.setTranslucent(reduced.translucent);
    }
    _defaultProps._currentValues = reduced;
  });
};

export default importDefaultResultResult;
