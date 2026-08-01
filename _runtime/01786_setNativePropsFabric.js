// === Module 1786: setNativePropsFabric ===

// Module 1786 (setNativePropsFabric)
import isJest from "isJest";
import isJest from "isJest";

function setNativePropsFabric(arg0, arg1) {
  if (globalThis._WORKLET) {
    let obj = require(1649) /* call */;
    obj.processColorsInProps(arg1);
    obj = { shadowNodeWrapper: null, updates: null };
    obj[0] = arg0();
    obj[1] = arg1;
    const items = [obj];
    global._updatePropsFabric(items);
    const tmp6 = arg0();
  } else {
    const logger = require(1610) /* addLogBoxLog */.logger;
    logger.warn("setNativeProps() can only be used on the UI runtime.");
  }
}
let obj = { logger: require("addLogBoxLog").logger, processColorsInProps: require("call").processColorsInProps };
setNativePropsFabric.__closure = obj;
setNativePropsFabric.__workletHash = 13825557000530;
setNativePropsFabric.__initData = { code: "function setNativePropsFabric_Pnpm_setNativePropsTs1(animatedRef,updates){const{logger,processColorsInProps}=this.__closure;if(!_WORKLET){logger.warn('setNativeProps() can only be used on the UI runtime.');return;}const shadowNodeWrapper=animatedRef();processColorsInProps(updates);global._updatePropsFabric([{shadowNodeWrapper:shadowNodeWrapper,updates:updates}]);}" };
function setNativePropsPaper(viewName) {
  if (globalThis._WORKLET) {
    let value;
    if (viewName.viewName != null) {
      value = iter.value;
    }
    if (value == null) {
      value = null;
    }
    let obj = require(1649) /* call */;
    obj.processColorsInProps(arg1);
    obj = { tag: null, name: null, updates: null };
    obj[0] = viewName();
    obj[1] = value;
    obj[2] = arg1;
    const items = [obj];
    global._updatePropsPaper(items);
    const tmp5 = viewName();
  } else {
    const logger = require(1610) /* addLogBoxLog */.logger;
    logger.warn("setNativeProps() can only be used on the UI runtime.");
  }
}
obj = { logger: require("addLogBoxLog").logger, processColorsInProps: require("call").processColorsInProps };
setNativePropsPaper.__closure = obj;
setNativePropsPaper.__workletHash = 9895881337862;
setNativePropsPaper.__initData = { code: "function setNativePropsPaper_Pnpm_setNativePropsTs2(animatedRef,updates){const{logger,processColorsInProps}=this.__closure;var _viewName$value,_viewName;if(!_WORKLET){logger.warn('setNativeProps() can only be used on the UI runtime.');return;}const tag=animatedRef();const name=(_viewName$value=(_viewName=animatedRef.viewName)===null||_viewName===void 0?void 0:_viewName.value)!==null&&_viewName$value!==void 0?_viewName$value:null;processColorsInProps(updates);global._updatePropsPaper([{tag:tag,name:name,updates:updates}]);}" };
isJest = isJest.shouldBeUseWeb();
if (isJest) {
  if (isJest.isJest()) {
    function setNativePropsJest() {
      const logger = require(1610) /* addLogBoxLog */.logger;
      logger.warn("setNativeProps() is not supported with Jest.");
    }
  } else {
    const _module2 = require("isJest");
    setNativePropsJest = _module2.isChromeDebugger() ? (function setNativePropsChromeDebugger() {
      const logger = require(1610) /* addLogBoxLog */.logger;
      logger.warn("setNativeProps() is not supported with Chrome Debugger.");
    }) : (function setNativePropsDefault() {
      const logger = require(1610) /* addLogBoxLog */.logger;
      logger.warn("setNativeProps() is not supported on this configuration.");
    });
  }
} else {
  if (isJest.isFabric()) {
    setNativePropsPaper = setNativePropsFabric;
  }
  exports.setNativeProps = setNativePropsPaper;
}