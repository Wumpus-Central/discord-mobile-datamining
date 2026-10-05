// === Module 1738: ? ===

// Module 1738
import setupMicrotasks from "setupMicrotasks" /* 1650 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import react_native from "react-native" /* 17 */;
import module_1646_mod from "module_1646" /* 1646 */;

let Platform;
let closure_4;
({ NativeEventEmitter: closure_4, Platform } = react_native);
let module_1646 = module_1646_mod;
class JSPropsUpdaterPaper {
  constructor() {
    _classCallCheck(this, JSPropsUpdaterPaper);
    this._reanimatedEventEmitter = new React3(undefined);
    new React3(undefined);
  }
}
const entry = {
  key: "addOnJSPropsChangeListener",
  value: function addOnJSPropsChangeListener(getComponentViewTag) {
    let _tagToComponentMapping = JSPropsUpdaterPaper._tagToComponentMapping;
    const result = _tagToComponentMapping.set(getComponentViewTag.getComponentViewTag(), getComponentViewTag);
    if (1 === JSPropsUpdaterPaper._tagToComponentMapping.size) {
      const self = this;
      const _reanimatedEventEmitter = this._reanimatedEventEmitter;
      _reanimatedEventEmitter.addListener("onReanimatedPropsChange", (viewTag) => {
        const _tagToComponentMapping = JSPropsUpdaterPaper._tagToComponentMapping;
        const value = _tagToComponentMapping.get(viewTag.viewTag);
        if (value != null) {
          value._updateFromNative(viewTag.props);
        }
      });
    }
  }
};
const items = [
  entry,
  {
    key: "removeOnJSPropsChangeListener",
    value: function removeOnJSPropsChangeListener(getComponentViewTag) {
      const _tagToComponentMapping = JSPropsUpdaterPaper._tagToComponentMapping;
      _tagToComponentMapping.delete(getComponentViewTag.getComponentViewTag());
      if (0 === JSPropsUpdaterPaper._tagToComponentMapping.size) {
        const self = this;
        const _reanimatedEventEmitter = this._reanimatedEventEmitter;
        _reanimatedEventEmitter.removeAllListeners("onReanimatedPropsChange");
      }
    }
  }
];
module_1646 = module_1646.shouldBeUseWeb();
let importDefaultResultResult = _createClass(JSPropsUpdaterPaper, items);
importDefaultResultResult._tagToComponentMapping = new Map();
let closure_5 = { code: "function pnpm_JSPropsUpdaterTs1(){const{runOnJS,updater}=this.__closure;global.updateJSProps=function(viewTag,props){runOnJS(updater)(viewTag,props);};}" };
new Map();
class JSPropsUpdaterFabric {
  constructor() {
    let updater;
    _classCallCheck(this, updater);
    const tmp = updater;
    if (!updater.isInitialized) {
      updater = function updater(value, props) {
        const _tagToComponentMapping = updater._tagToComponentMapping;
        value = _tagToComponentMapping.get(value);
        if (value != null) {
          value._updateFromNative(props);
        }
      };
      const fn = function t() {
        global.updateJSProps = (arg0, arg1) => {
          const obj = setupMicrotasks;
          obj.runOnJS(updater)(arg0, arg1);
        };
      };
      let obj = { runOnJS: setupMicrotasks.runOnJS, updater };
      const runOnUIImmediately = setupMicrotasks.runOnUIImmediately;
      setupMicrotasks;
      fn.__closure = obj;
      fn.__workletHash = 2068327241111;
      fn.__initData = __initData;
      runOnUIImmediately(fn)();
      tmp.isInitialized = true;
    }
  }
}
const entry1 = {
  key: "addOnJSPropsChangeListener",
  value: function addOnJSPropsChangeListener(getComponentViewTag) {
    if (JSPropsUpdaterFabric.isInitialized) {
      const _tagToComponentMapping = tmp._tagToComponentMapping;
      const result = _tagToComponentMapping.set(getComponentViewTag.getComponentViewTag(), getComponentViewTag);
    }
  }
};
const items1 = [
  entry1,
  {
    key: "removeOnJSPropsChangeListener",
    value: function removeOnJSPropsChangeListener(getComponentViewTag) {
      if (JSPropsUpdaterFabric.isInitialized) {
        const _tagToComponentMapping = tmp._tagToComponentMapping;
        _tagToComponentMapping.delete(getComponentViewTag.getComponentViewTag());
      }
    }
  }
];
const importDefaultResultResult1 = _createClass(JSPropsUpdaterFabric, items1);
importDefaultResultResult1._tagToComponentMapping = new Map();
importDefaultResultResult1.isInitialized = false;
new Map();
if (module_1646) {
  class JSPropsUpdaterWeb {
    constructor() {
      _classCallCheck(this, JSPropsUpdaterWeb);
    }
  }
  const entry2 = {
    key: "addOnJSPropsChangeListener",
    value: function addOnJSPropsChangeListener(arg0) {

      }
  };
  const items2 = [entry2, ];
  const entry3 = {
    key: "removeOnJSPropsChangeListener",
    value: function removeOnJSPropsChangeListener(arg0) {

      }
  };
  items2[1] = entry3;
  importDefaultResultResult = _createClass(JSPropsUpdaterWeb, items2);
} else {
  class JSPropsUpdaterWeb {
    constructor() {
      _classCallCheck(this, JSPropsUpdaterWeb);
    }
  }
}

export default importDefaultResultResult;