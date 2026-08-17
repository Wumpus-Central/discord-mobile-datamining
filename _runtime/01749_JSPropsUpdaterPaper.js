// _runtime/01749_JSPropsUpdaterPaper.js
import runWorkletOnJS from "01661_runWorkletOnJS.js";
import closure_3 from "metro/00041__classCallCheck.js";
import importDefaultResult from "metro/00042__createClass.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import isJest from "01657_isJest.js";

let JSPropsUpdaterWeb = global;
require = arg1;
({ NativeEventEmitter: c4, Platform } = get_ActivityIndicator);
class JSPropsUpdaterPaper {
  constructor() {
    tmp = closure_3(this, JSPropsUpdaterWeb);
    tmp2 = new NativeEventEmitter(undefined);
    this._reanimatedEventEmitter = tmp2;
    return;
  }
}
JSPropsUpdaterWeb = JSPropsUpdaterPaper;
isJest = {
  key: "addOnJSPropsChangeListener",
  value: function addOnJSPropsChangeListener(getComponentViewTag) {
    let _tagToComponentMapping = JSPropsUpdaterWeb._tagToComponentMapping;
    const result = _tagToComponentMapping.set(getComponentViewTag.getComponentViewTag(), getComponentViewTag);
    if (1 === JSPropsUpdaterWeb._tagToComponentMapping.size) {
      const self = this;
      const _reanimatedEventEmitter = this._reanimatedEventEmitter;
      _reanimatedEventEmitter.addListener("onReanimatedPropsChange", (viewTag) => {
        const _tagToComponentMapping = obj._tagToComponentMapping;
        const value = _tagToComponentMapping.get(viewTag.viewTag);
        if (value != null) {
          value._updateFromNative(viewTag.props);
        }
      });
    }
  }
};
const items = [
  isJest,
  {
    key: "removeOnJSPropsChangeListener",
    value: function removeOnJSPropsChangeListener(getComponentViewTag) {
      const _tagToComponentMapping = JSPropsUpdaterWeb._tagToComponentMapping;
      _tagToComponentMapping.delete(getComponentViewTag.getComponentViewTag());
      if (0 === JSPropsUpdaterWeb._tagToComponentMapping.size) {
        const self = this;
        const _reanimatedEventEmitter = this._reanimatedEventEmitter;
        _reanimatedEventEmitter.removeAllListeners("onReanimatedPropsChange");
      }
    }
  }
];
isJest = isJest.shouldBeUseWeb();
let importDefaultResultResult = importDefaultResult(JSPropsUpdaterPaper, items);
importDefaultResultResult._tagToComponentMapping = new Map();
let closure_5 = { code: "function pnpm_JSPropsUpdaterTs1(){const{runOnJS,updater}=this.__closure;global.updateJSProps=function(viewTag,props){runOnJS(updater)(viewTag,props);};}" };
class JSPropsUpdaterFabric {
  constructor() {
    tmp = updater;
    tmp2 = closure_3(this, updater);
    if (!updater.isInitialized) {
      updater = function updater(value, props) {
        const _tagToComponentMapping = updater._tagToComponentMapping;
        value = _tagToComponentMapping.get(value);
        if (value != null) {
          value._updateFromNative(props);
        }
      };
      tmp3 = closure_1;
      tmp4 = closure_2;
      obj = require("runWorkletOnJS");
      fn = function t() {
        JSPropsUpdaterWeb.updateJSProps = (arg0, arg1) => {
          closure_2_1(closure_2_2[4]).runOnJS(closure_0)(arg0, arg1);
        };
      };
      obj = { runOnJS: null, updater: null };
      obj[0] = require("runWorkletOnJS").runOnJS;
      obj[1] = updater;
      fn.__closure = obj;
      num = 2068327241111;
      fn.__workletHash = 2068327241111;
      tmp5 = closure_5;
      fn.__initData = closure_5;
      tmp6 = obj.runOnUIImmediately(fn)();
      flag = true;
      tmp.isInitialized = true;
    }
    return;
  }
}
JSPropsUpdaterWeb = JSPropsUpdaterFabric;
isJest = {
  key: "addOnJSPropsChangeListener",
  value: function addOnJSPropsChangeListener(getComponentViewTag) {
    if (JSPropsUpdaterWeb.isInitialized) {
      const _tagToComponentMapping = tmp._tagToComponentMapping;
      const result = _tagToComponentMapping.set(getComponentViewTag.getComponentViewTag(), getComponentViewTag);
    }
  }
};
const items1 = [
  isJest,
  {
    key: "removeOnJSPropsChangeListener",
    value: function removeOnJSPropsChangeListener(getComponentViewTag) {
      if (JSPropsUpdaterWeb.isInitialized) {
        const _tagToComponentMapping = tmp._tagToComponentMapping;
        _tagToComponentMapping.delete(getComponentViewTag.getComponentViewTag());
      }
    }
  }
];
const importDefaultResultResult1 = importDefaultResult(JSPropsUpdaterFabric, items1);
const map = new Map();
importDefaultResultResult1._tagToComponentMapping = new Map();
importDefaultResultResult1.isInitialized = false;
if (isJest) {
  class JSPropsUpdaterWeb {
    constructor() {
      tmp = closure_3(this, JSPropsUpdaterWeb);
      return;
    }
  }
  const obj1 = { key: "addOnJSPropsChangeListener", value: null };
  obj1[1] = function addOnJSPropsChangeListener(arg0) {

  };
  const items2 = [obj1, ];
  const obj2 = { key: "removeOnJSPropsChangeListener", value: null };
  obj2[1] = function removeOnJSPropsChangeListener(arg0) {

  };
  items2[1] = obj2;
  importDefaultResultResult = importDefaultResult(JSPropsUpdaterWeb, items2);
} else {
  class JSPropsUpdaterWeb {
    constructor() {
      tmp = closure_3(this, JSPropsUpdaterWeb);
      return;
    }
  }
}

export default importDefaultResultResult;