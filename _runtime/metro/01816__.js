// === Module 1816: ? ===

// Module 1816
import _mod1640 from "module_1640" /* 1640 */;
import _mod1679 from "module_1679" /* 1679 */;
import module_1639 from "module_1639" /* 1639 */;

function setNativePropsFabric(fn, updates) {
  if (globalThis._WORKLET) {
    let obj = _mod1679;
    obj.processColorsInProps(updates);
    obj = { shadowNodeWrapper: fn(), updates };
    const items = [obj];
    global._updatePropsFabric(items);
    const tmp6 = fn();
  } else {
    const logger = _mod1640.logger;
    logger.warn("setNativeProps() can only be used on the UI runtime.");
  }
}
let obj = { logger: _mod1640.logger, processColorsInProps: _mod1679.processColorsInProps };
setNativePropsFabric.__closure = obj;
setNativePropsFabric.__workletHash = 13825557000530;
setNativePropsFabric.__initData = { code: "function setNativePropsFabric_Pnpm_setNativePropsTs1(animatedRef,updates){const{logger,processColorsInProps}=this.__closure;if(!_WORKLET){logger.warn('setNativeProps() can only be used on the UI runtime.');return;}const shadowNodeWrapper=animatedRef();processColorsInProps(updates);global._updatePropsFabric([{shadowNodeWrapper:shadowNodeWrapper,updates:updates}]);}" };
function setNativePropsPaper(viewName, updates) {
  if (globalThis._WORKLET) {
    value = undefined;
    if (viewName.viewName != null) {
      value = iter.value;
    }
    if (value == null) {
      value = null;
    }
    let obj = _mod1679;
    obj.processColorsInProps(updates);
    obj = { tag: viewName(), name: value, updates };
    const items = [obj];
    global._updatePropsPaper(items);
    const tmp5 = viewName();
  } else {
    const logger = _mod1640.logger;
    logger.warn("setNativeProps() can only be used on the UI runtime.");
  }
}
obj = { logger: _mod1640.logger, processColorsInProps: _mod1679.processColorsInProps };
setNativePropsPaper.__closure = obj;
setNativePropsPaper.__workletHash = 9895881337862;
setNativePropsPaper.__initData = { code: "function setNativePropsPaper_Pnpm_setNativePropsTs2(animatedRef,updates){const{logger,processColorsInProps}=this.__closure;var _viewName$value,_viewName;if(!_WORKLET){logger.warn('setNativeProps() can only be used on the UI runtime.');return;}const tag=animatedRef();const name=(_viewName$value=(_viewName=animatedRef.viewName)===null||_viewName===void 0?void 0:_viewName.value)!==null&&_viewName$value!==void 0?_viewName$value:null;processColorsInProps(updates);global._updatePropsPaper([{tag:tag,name:name,updates:updates}]);}" };
module_1639.shouldBeUseWeb();
if (module_1639) {
  if (module_1639.isJest()) {
    function setNativePropsJest() {
      const logger = _mod1640.logger;
      logger.warn("setNativeProps() is not supported with Jest.");
    }
  } else {
    const _module2 = module_1639;
    setNativePropsJest = _module2.isChromeDebugger() ? (function setNativePropsChromeDebugger() {
      const logger = _mod1640.logger;
      logger.warn("setNativeProps() is not supported with Chrome Debugger.");
    }) : (function setNativePropsDefault() {
      const logger = _mod1640.logger;
      logger.warn("setNativeProps() is not supported on this configuration.");
    });
  }
} else {
  if (module_1639.isFabric()) {
    setNativePropsPaper = setNativePropsFabric;
  }
  exports.setNativeProps = setNativePropsPaper;
}