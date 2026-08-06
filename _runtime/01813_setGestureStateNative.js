// _runtime/01813_setGestureStateNative.js
import isJest from "isJest";
import { addLogBoxLog } from "01638_addLogBoxLog.js";

function setGestureStateNative(arg0, arg1) {
  if (globalThis._WORKLET) {
    global._setGestureState(arg0, arg1);
  } else {
    const logger = addLogBoxLog.logger;
    logger.warn("You can not use setGestureState in non-worklet function.");
  }
}
setGestureStateNative.__closure = { logger: require("addLogBoxLog").logger };
setGestureStateNative.__workletHash = 13301434022691;
setGestureStateNative.__initData = { code: "function setGestureStateNative_Pnpm_setGestureStateTs1(handlerTag,newState){const{logger}=this.__closure;if(!_WORKLET){logger.warn('You can not use setGestureState in non-worklet function.');return;}global._setGestureState(handlerTag,newState);}" };
if (!isJest.shouldBeUseWeb()) {
  exports.setGestureState = setGestureStateNative;
} else {
  const _module1 = require("isJest");
  if (_module1.isJest()) {
    function setGestureStateJest() {
      const logger = addLogBoxLog.logger;
      logger.warn("setGestureState() cannot be used with Jest.");
    }
  } else {
    const _module2 = require("isJest");
    setGestureStateJest = _module2.isChromeDebugger() ? (function setGestureStateChromeDebugger() {
      const logger = addLogBoxLog.logger;
      logger.warn("setGestureState() cannot be used with Chrome Debugger.");
    }) : (function setGestureStateDefault() {
      const logger = addLogBoxLog.logger;
      logger.warn("setGestureState() is not supported on this configuration.");
    });
  }
}