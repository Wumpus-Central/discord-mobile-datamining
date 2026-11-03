// === Module 1953: dispatchCommandNative ===

// Module 1953 (dispatchCommandNative)
import _mod1665 from "module_1665" /* 1665 */;
import _mod1705 from "module_1705" /* 1705 */;

let items = [{ code: "(function dispatchCommandNative_Pnpm_dispatchCommandNativeTs1(animatedRef,commandName,args=[]){let[RuntimeKind,logger]=this.__closure;if(globalThis.__RUNTIME_KIND===RuntimeKind.ReactNative){return;}const shadowNodeWrapper=animatedRef.value;if(!shadowNodeWrapper){logger.warn(\"Tried to dispatch command \\\"\"+commandName+\"\\\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.\");return;}global._dispatchCommand(shadowNodeWrapper,commandName,args);})" }, _mod1705.RuntimeKind, _mod1665.logger];
let c0;
let c1;
[tmp2, tmp3, tmp4] = items;
let dispatchCommandJest = function dispatchCommandNative(nodeFromPublicInstance, blur) {
  if (items === undefined) {
    items = [];
  }
  if (globalThis.__RUNTIME_KIND !== _undefined.ReactNative) {
    value = nodeFromPublicInstance.value;
    if (value) {
      _undefined._dispatchCommand(value, blur, items);
    } else {
      const _HermesInternal = HermesInternal;
      _undefined2.warn("Tried to dispatch command \"" + blur + "\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.");
    }
  }
};
const items1 = [tmp3, tmp4];
dispatchCommandJest.__closure = items1;
dispatchCommandJest.__workletHash = 26995694413;
dispatchCommandJest.__initData = tmp2;
if (_mod1665.IS_JEST) {
  dispatchCommandJest = function dispatchCommandJest() {
    const logger = _undefined2(1665).logger;
    logger.warn("dispatchCommand() is not supported with Jest.");
  };
}

export const dispatchCommand = dispatchCommandJest;