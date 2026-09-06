// _runtime/01731_JSPropsUpdaterPaper.js
import runWorkletOnJS from "01643_runWorkletOnJS.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

let JSPropsUpdaterWeb = global;
require = fn;
get_ActivityIndicator = fn(17);
({ NativeEventEmitter: closure_4, Platform } = get_ActivityIndicator);
let module_1639 = fn(1639);
class JSPropsUpdaterPaper {
  constructor() {
    tmp = closure_3(this, JSPropsUpdaterWeb);
    tmp2 = new closure_4(undefined);
    this._reanimatedEventEmitter = tmp2;
    return;
  }
}
JSPropsUpdaterWeb = JSPropsUpdaterPaper;
const entry = {
  key: "addOnJSPropsChangeListener",
  value: function addOnJSPropsChangeListener(getComponentViewTag) {
    let _tagToComponentMapping = JSPropsUpdaterWeb._tagToComponentMapping;
    const result = _tagToComponentMapping.set(getComponentViewTag.getComponentViewTag(), getComponentViewTag);
    if (1 === JSPropsUpdaterWeb._tagToComponentMapping.size) {
      const self = this;
      const _reanimatedEventEmitter = this._reanimatedEventEmitter;
      _reanimatedEventEmitter.addListener("onReanimatedPropsChange", (viewTag) => {
        const _tagToComponentMapping = JSPropsUpdaterWeb._tagToComponentMapping;
        value = _tagToComponentMapping.get(viewTag.viewTag);
        if (value != null) {
          value._updateFromNative(viewTag.props);
        }
      });
    }
  },
};
const items = [
  entry,
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
    },
  },
];
module_1639 = module_1639.shouldBeUseWeb();
let importDefaultResultResult = _createClass(JSPropsUpdaterPaper, items);
importDefaultResultResult._tagToComponentMapping = new Map();
const hasOwnProperty = {
  code: "function pnpm_JSPropsUpdaterTs1(){const{runOnJS,updater}=this.__closure;global.updateJSProps=function(viewTag,props){runOnJS(updater)(viewTag,props);};}",
};
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
      obj = closure_1(closure_2[4]);
      fn = function t() {
        closure_0.updateJSProps = (arg0, arg1) => {
          runWorkletOnJS.runOnJS(updater)(arg0, arg1);
        };
      };
      obj = { runOnJS: null, updater: null };
      obj.runOnJS = closure_1(closure_2[4]).runOnJS;
      obj.updater = updater;
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
const entry1 = {
  key: "addOnJSPropsChangeListener",
  value: function addOnJSPropsChangeListener(getComponentViewTag) {
    if (JSPropsUpdaterWeb.isInitialized) {
      const _tagToComponentMapping = tmp._tagToComponentMapping;
      const result = _tagToComponentMapping.set(getComponentViewTag.getComponentViewTag(), getComponentViewTag);
    }
  },
};
const items1 = [
  entry1,
  {
    key: "removeOnJSPropsChangeListener",
    value: function removeOnJSPropsChangeListener(getComponentViewTag) {
      if (JSPropsUpdaterWeb.isInitialized) {
        const _tagToComponentMapping = tmp._tagToComponentMapping;
        _tagToComponentMapping.delete(getComponentViewTag.getComponentViewTag());
      }
    },
  },
];
const importDefaultResultResult1 = _createClass(JSPropsUpdaterFabric, items1);
const map = new Map();
importDefaultResultResult1._tagToComponentMapping = new Map();
importDefaultResultResult1.isInitialized = false;
if (module_1639) {
  class JSPropsUpdaterWeb {
    constructor() {
      tmp = closure_3(this, JSPropsUpdaterWeb);
      return;
    }
  }
  const entry2 = {
    key: "addOnJSPropsChangeListener",
    value: function addOnJSPropsChangeListener(arg0) {},
  };
  const items2 = [entry2];
  const entry3 = {
    key: "removeOnJSPropsChangeListener",
    value: function removeOnJSPropsChangeListener(arg0) {},
  };
  items2[1] = entry3;
  importDefaultResultResult = _createClass(JSPropsUpdaterWeb, items2);
} else {
  class JSPropsUpdaterWeb {
    constructor() {
      tmp = closure_3(this, JSPropsUpdaterWeb);
      return;
    }
  }
}

export default importDefaultResultResult;
