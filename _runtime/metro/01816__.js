// _runtime/metro/01816__.js
import _mod1641 from "01641__.js";
import 01640__ from "01640__.js";

function setGestureStateNative(arg0, arg1) {
  if (globalThis._WORKLET) {
    global._setGestureState(arg0, arg1);
  } else {
    const logger = _mod1641.logger;
    logger.warn("You can not use setGestureState in non-worklet function.");
  }
}
setGestureStateNative.__closure = { logger: _mod1641.logger };
setGestureStateNative.__workletHash = 13301434022691;
setGestureStateNative.__initData = { code: "function setGestureStateNative_Pnpm_setGestureStateTs1(handlerTag,newState){const{logger}=this.__closure;if(!_WORKLET){logger.warn('You can not use setGestureState in non-worklet function.');return;}global._setGestureState(handlerTag,newState);}" };
if (!module_1640.shouldBeUseWeb()) {
  exports.setGestureState = setGestureStateNative;
} else {
  const _module1 = module_1640;
  if (_module1.isJest()) {
    function setGestureStateJest() {
      const logger = _mod1641.logger;
      logger.warn("setGestureState() cannot be used with Jest.");
    }
  } else {
    const _module2 = module_1640;
    setGestureStateJest = _module2.isChromeDebugger() ? (function setGestureStateChromeDebugger() {
      const logger = _mod1641.logger;
      logger.warn("setGestureState() cannot be used with Chrome Debugger.");
    }) : (function setGestureStateDefault() {
      const logger = _mod1641.logger;
      logger.warn("setGestureState() is not supported on this configuration.");
    });
  }
}