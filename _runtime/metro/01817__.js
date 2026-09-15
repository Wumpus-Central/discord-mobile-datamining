// _runtime/metro/01817__.js
import _mod1641 from "01641__.js";
import _mod1680 from "01680__.js";
import module_1640_mod from "01640__.js";

function setNativePropsFabric(fn, updates) {
  if (globalThis._WORKLET) {
    const tmp6 = fn();
    _mod1680.processColorsInProps(updates);
    const obj2 = { shadowNodeWrapper: tmp6, updates };
    const items = [obj2];
    global._updatePropsFabric(items);
  } else {
    const logger = _mod1641.logger;
    logger.warn("setNativeProps() can only be used on the UI runtime.");
  }
}
setNativePropsFabric.__closure = { logger: _mod1641.logger, processColorsInProps: _mod1680.processColorsInProps };
setNativePropsFabric.__workletHash = 13825557000530;
setNativePropsFabric.__initData = {
  code: "function setNativePropsFabric_Pnpm_setNativePropsTs1(animatedRef,updates){const{logger,processColorsInProps}=this.__closure;if(!_WORKLET){logger.warn('setNativeProps() can only be used on the UI runtime.');return;}const shadowNodeWrapper=animatedRef();processColorsInProps(updates);global._updatePropsFabric([{shadowNodeWrapper:shadowNodeWrapper,updates:updates}]);}",
};
function setNativePropsPaper(viewName, updates) {
  if (globalThis._WORKLET) {
    value = undefined;
    if (viewName.viewName != null) {
      value = iter.value;
    }
    if (value == null) {
      value = null;
    }
    const tmp5 = viewName();
    _mod1680.processColorsInProps(updates);
    const obj2 = { tag: tmp5, name: value, updates };
    const items = [obj2];
    global._updatePropsPaper(items);
  } else {
    const logger = _mod1641.logger;
    logger.warn("setNativeProps() can only be used on the UI runtime.");
  }
}
let obj = { logger: _mod1641.logger, processColorsInProps: _mod1680.processColorsInProps };
setNativePropsPaper.__closure = { logger: _mod1641.logger, processColorsInProps: _mod1680.processColorsInProps };
setNativePropsPaper.__workletHash = 9895881337862;
setNativePropsPaper.__initData = {
  code: "function setNativePropsPaper_Pnpm_setNativePropsTs2(animatedRef,updates){const{logger,processColorsInProps}=this.__closure;var _viewName$value,_viewName;if(!_WORKLET){logger.warn('setNativeProps() can only be used on the UI runtime.');return;}const tag=animatedRef();const name=(_viewName$value=(_viewName=animatedRef.viewName)===null||_viewName===void 0?void 0:_viewName.value)!==null&&_viewName$value!==void 0?_viewName$value:null;processColorsInProps(updates);global._updatePropsPaper([{tag:tag,name:name,updates:updates}]);}",
};
let module_1640 = module_1640_mod;
module_1640.shouldBeUseWeb();
let module_1640 = module_1640_mod;
if (module_1640) {
  if (module_1640.isJest()) {
    function setNativePropsJest() {
      const logger = _mod1641.logger;
      logger.warn("setNativeProps() is not supported with Jest.");
    }
  } else {
    const _module2 = module_1640;
    setNativePropsJest = _module2.isChromeDebugger()
      ? function setNativePropsChromeDebugger() {
          const logger = _mod1641.logger;
          logger.warn("setNativeProps() is not supported with Chrome Debugger.");
        }
      : function setNativePropsDefault() {
          const logger = _mod1641.logger;
          logger.warn("setNativeProps() is not supported on this configuration.");
        };
  }
} else {
  if (module_1640.isFabric()) {
    setNativePropsPaper = setNativePropsFabric;
  }
  exports.setNativeProps = setNativePropsPaper;
}
