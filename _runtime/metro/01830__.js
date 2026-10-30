// _runtime/metro/01830__.js
import _mod1655 from "01655__.js";
import 01654__ from "01654__.js";

function setGestureStateNative(arg0, arg1) {
  if (globalThis._WORKLET) {
    global._setGestureState(arg0, arg1);
  } else {
    const logger = _mod1655.logger;
    logger.warn("You can not use setGestureState in non-worklet function.");
  }
}
setGestureStateNative.__closure = { logger: _mod1655.logger };
setGestureStateNative.__workletHash = 13301434022691;
setGestureStateNative.__initData = { code: "function setGestureStateNative_Pnpm_setGestureStateTs1(handlerTag,newState){const{logger}=this.__closure;if(!_WORKLET){logger.warn('You can not use setGestureState in non-worklet function.');return;}global._setGestureState(handlerTag,newState);}" };
if (!module_1654.shouldBeUseWeb()) {
  exports.setGestureState = setGestureStateNative;
} else {
  const _module1 = module_1654;
  if (_module1.isJest()) {
    function setGestureStateJest() {
      const logger = _mod1655.logger;
      logger.warn("setGestureState() cannot be used with Jest.");
    }
  } else {
    const _module2 = module_1654;
    setGestureStateJest = _module2.isChromeDebugger() ? (function setGestureStateChromeDebugger() {
      const logger = _mod1655.logger;
      logger.warn("setGestureState() cannot be used with Chrome Debugger.");
    }) : (function setGestureStateDefault() {
      const logger = _mod1655.logger;
      logger.warn("setGestureState() is not supported on this configuration.");
    });
  }
}