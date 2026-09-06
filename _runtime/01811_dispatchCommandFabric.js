// _runtime/01811_dispatchCommandFabric.js
import addLogBoxLog from "01640_addLogBoxLog.js";
import isJest from "01639_isJest.js";

function dispatchCommandFabric(arg0, arg1) {
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  if (globalThis._WORKLET) {
    const tmp3 = arg0();
    if (tmp3) {
      const result = global._dispatchCommandFabric(tmp3, arg1, items);
    } else {
      const logger = addLogBoxLog.logger;
      const _HermesInternal = HermesInternal;
      logger.warn(
        'Tried to dispatch command "' +
          arg1 +
          '" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.',
      );
    }
  }
}
let obj = { logger: addLogBoxLog.logger };
dispatchCommandFabric.__closure = obj;
dispatchCommandFabric.__workletHash = 9994297174981;
dispatchCommandFabric.__initData = {
  code: 'function dispatchCommandFabric_Pnpm_dispatchCommandTs1(animatedRef,commandName,args=[]){const{logger}=this.__closure;if(!_WORKLET){return;}const shadowNodeWrapper=animatedRef();if(!shadowNodeWrapper){logger.warn("Tried to dispatch command \\""+commandName+"\\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.");return;}global._dispatchCommandFabric(shadowNodeWrapper,commandName,args);}',
};
function dispatchCommandPaper(arg0, arg1) {
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  if (globalThis._WORKLET) {
    const tmp3 = arg0();
    if (tmp3 < 0) {
      const logger = addLogBoxLog.logger;
      const _HermesInternal = HermesInternal;
      logger.warn(
        'Tried to dispatch command "' +
          arg1 +
          '" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.',
      );
    } else {
      const result = global._dispatchCommandPaper(tmp3, arg1, items);
    }
  }
}
obj = { logger: addLogBoxLog.logger };
dispatchCommandPaper.__closure = obj;
dispatchCommandPaper.__workletHash = 16962176072769;
dispatchCommandPaper.__initData = {
  code: 'function dispatchCommandPaper_Pnpm_dispatchCommandTs2(animatedRef,commandName,args=[]){const{logger}=this.__closure;if(!_WORKLET){return;}const viewTag=animatedRef();if(viewTag<0){logger.warn("Tried to dispatch command \\""+commandName+"\\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.");return;}global._dispatchCommandPaper(viewTag,commandName,args);}',
};
isJest = isJest.shouldBeUseWeb();
if (isJest) {
  if (isJest.isJest()) {
    function dispatchCommandJest() {
      const logger = addLogBoxLog.logger;
      logger.warn("dispatchCommand() is not supported with Jest.");
    }
  } else {
    const _module2 = isJest;
    dispatchCommandJest = _module2.isChromeDebugger()
      ? function dispatchCommandChromeDebugger() {
          const logger = addLogBoxLog.logger;
          logger.warn("dispatchCommand() is not supported with Chrome Debugger.");
        }
      : function dispatchCommandDefault() {
          const logger = addLogBoxLog.logger;
          logger.warn("dispatchCommand() is not supported on this configuration.");
        };
  }
} else {
  if (isJest.isFabric()) {
    dispatchCommandPaper = dispatchCommandFabric;
  }
  exports.dispatchCommand = dispatchCommandPaper;
}
