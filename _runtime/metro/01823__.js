// _runtime/metro/01823__.js
import react_native from "../01647_react-native.js";
import clampRGBA from "../01686_clampRGBA.js";
import module_1646_mod from "01646__.js";

function setNativePropsFabric(fn, updates) {
  if (globalThis._WORKLET) {
    const tmp6 = fn();
    const obj = clampRGBA;
    obj.processColorsInProps(updates);
    const items = [{ shadowNodeWrapper: tmp6, updates }];
    const obj2 = { shadowNodeWrapper: tmp6, updates };
    global._updatePropsFabric(items);
  } else {
    const logger = react_native.logger;
    logger.warn("setNativeProps() can only be used on the UI runtime.");
  }
}
let obj = { logger: react_native.logger, processColorsInProps: clampRGBA.processColorsInProps };
setNativePropsFabric.__closure = obj;
setNativePropsFabric.__workletHash = 13825557000530;
setNativePropsFabric.__initData = {
  code: "function setNativePropsFabric_Pnpm_setNativePropsTs1(animatedRef,updates){const{logger,processColorsInProps}=this.__closure;if(!_WORKLET){logger.warn('setNativeProps() can only be used on the UI runtime.');return;}const shadowNodeWrapper=animatedRef();processColorsInProps(updates);global._updatePropsFabric([{shadowNodeWrapper:shadowNodeWrapper,updates:updates}]);}",
};
function setNativePropsPaper(viewName, updates) {
  if (globalThis._WORKLET) {
    let value;
    const tmp5 = viewName();
    if (viewName.viewName != null) {
      value = iter.value;
    }
    if (value == null) {
      value = null;
    }
    const obj = clampRGBA;
    obj.processColorsInProps(updates);
    const items = [{ tag: tmp5, name: value, updates }];
    const obj2 = { tag: tmp5, name: value, updates };
    global._updatePropsPaper(items);
  } else {
    const logger = react_native.logger;
    logger.warn("setNativeProps() can only be used on the UI runtime.");
  }
}
let obj2 = { logger: react_native.logger, processColorsInProps: clampRGBA.processColorsInProps };
setNativePropsPaper.__closure = obj2;
setNativePropsPaper.__workletHash = 9895881337862;
setNativePropsPaper.__initData = {
  code: "function setNativePropsPaper_Pnpm_setNativePropsTs2(animatedRef,updates){const{logger,processColorsInProps}=this.__closure;var _viewName$value,_viewName;if(!_WORKLET){logger.warn('setNativeProps() can only be used on the UI runtime.');return;}const tag=animatedRef();const name=(_viewName$value=(_viewName=animatedRef.viewName)===null||_viewName===void 0?void 0:_viewName.value)!==null&&_viewName$value!==void 0?_viewName$value:null;processColorsInProps(updates);global._updatePropsPaper([{tag:tag,name:name,updates:updates}]);}",
};
let module_1646 = module_1646_mod;
module_1646.shouldBeUseWeb();
module_1646 = module_1646_mod;
if (module_1646) {
  let setNativePropsJest;
  if (module_1646.isJest()) {
    setNativePropsJest = function setNativePropsJest() {
      const logger = react_native.logger;
      logger.warn("setNativeProps() is not supported with Jest.");
    };
  } else {
    const _module2 = module_1646;
    setNativePropsJest = _module2.isChromeDebugger()
      ? function setNativePropsChromeDebugger() {
          const logger = react_native.logger;
          logger.warn("setNativeProps() is not supported with Chrome Debugger.");
        }
      : function setNativePropsDefault() {
          const logger = react_native.logger;
          logger.warn("setNativeProps() is not supported on this configuration.");
        };
  }
  setNativePropsPaper = setNativePropsJest;
} else if (module_1646.isFabric()) {
  setNativePropsPaper = setNativePropsFabric;
}

export const setNativeProps = setNativePropsPaper;
