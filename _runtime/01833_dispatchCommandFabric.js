// === Module 1833: dispatchCommandFabric ===

// Module 1833 (dispatchCommandFabric)
import _mod1662 from "module_1662" /* 1662 */;
import module_1661_mod from "module_1661" /* 1661 */;

function dispatchCommandFabric(fn, arg1) {
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  if (globalThis._WORKLET) {
    const tmp3 = fn();
    if (tmp3) {
      const result = global._dispatchCommandFabric(tmp3, arg1, items);
    } else {
      const logger = _mod1662.logger;
      const _HermesInternal = HermesInternal;
      logger.warn("Tried to dispatch command \"" + arg1 + "\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.");
    }
  }
}
dispatchCommandFabric.__closure = { logger: _mod1662.logger };
dispatchCommandFabric.__workletHash = 9994297174981;
dispatchCommandFabric.__initData = { code: "function dispatchCommandFabric_Pnpm_dispatchCommandTs1(animatedRef,commandName,args=[]){const{logger}=this.__closure;if(!_WORKLET){return;}const shadowNodeWrapper=animatedRef();if(!shadowNodeWrapper){logger.warn(\"Tried to dispatch command \\\"\"+commandName+\"\\\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.\");return;}global._dispatchCommandFabric(shadowNodeWrapper,commandName,args);}" };
function dispatchCommandPaper(fn, arg1) {
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  if (globalThis._WORKLET) {
    const tmp3 = fn();
    if (tmp3 < 0) {
      const logger = _mod1662.logger;
      const _HermesInternal = HermesInternal;
      logger.warn("Tried to dispatch command \"" + arg1 + "\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.");
    } else {
      const result = global._dispatchCommandPaper(tmp3, arg1, items);
    }
  }
}
const obj = { logger: _mod1662.logger };
dispatchCommandPaper.__closure = { logger: _mod1662.logger };
dispatchCommandPaper.__workletHash = 16962176072769;
dispatchCommandPaper.__initData = { code: "function dispatchCommandPaper_Pnpm_dispatchCommandTs2(animatedRef,commandName,args=[]){const{logger}=this.__closure;if(!_WORKLET){return;}const viewTag=animatedRef();if(viewTag<0){logger.warn(\"Tried to dispatch command \\\"\"+commandName+\"\\\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.\");return;}global._dispatchCommandPaper(viewTag,commandName,args);}" };
let module_1661 = module_1661_mod;
module_1661.shouldBeUseWeb();
let module_1661 = module_1661_mod;
if (module_1661) {
  if (module_1661.isJest()) {
    function dispatchCommandJest() {
      const logger = _mod1662.logger;
      logger.warn("dispatchCommand() is not supported with Jest.");
    }
  } else {
    const _module2 = module_1661;
    dispatchCommandJest = _module2.isChromeDebugger() ? (function dispatchCommandChromeDebugger() {
      const logger = _mod1662.logger;
      logger.warn("dispatchCommand() is not supported with Chrome Debugger.");
    }) : (function dispatchCommandDefault() {
      const logger = _mod1662.logger;
      logger.warn("dispatchCommand() is not supported on this configuration.");
    });
  }
} else {
  if (module_1661.isFabric()) {
    dispatchCommandPaper = dispatchCommandFabric;
  }
  exports.dispatchCommand = dispatchCommandPaper;
}