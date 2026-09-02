// === Module 1830: scrollToFabric ===

// Module 1830 (scrollToFabric)
import addLogBoxLog from "addLogBoxLog" /* 1656 */;
import dispatchCommandFabric from "dispatchCommandFabric" /* 1827 */;
import isJest from "isJest" /* 1655 */;

function scrollToFabric(arg0, arg1, arg2, arg3) {
  const items = [arg1, arg2, arg3];
  dispatchCommandFabric.dispatchCommand(arg0, "scrollTo", items);
}
scrollToFabric.__closure = { dispatchCommand: dispatchCommandFabric.dispatchCommand };
scrollToFabric.__workletHash = 5331784934384;
scrollToFabric.__initData = { code: "function scrollToFabric_Pnpm_scrollToTs1(animatedRef,x,y,animated){const{dispatchCommand}=this.__closure;dispatchCommand(animatedRef,'scrollTo',[x,y,animated]);}" };
function scrollToPaper(arg0, arg1, arg2, arg3) {
  if (globalThis._WORKLET) {
    global._scrollToPaper(arg0(), arg1, arg2, arg3);
  }
}
scrollToPaper.__closure = {};
scrollToPaper.__workletHash = 10376977850779;
scrollToPaper.__initData = { code: "function scrollToPaper_Pnpm_scrollToTs2(animatedRef,x,y,animated){if(!_WORKLET){return;}const viewTag=animatedRef();global._scrollToPaper(viewTag,x,y,animated);}" };
isJest = isJest.shouldBeUseWeb();
if (isJest) {
  if (isJest.isJest()) {
    function scrollToJest() {
      const logger = addLogBoxLog.logger;
      logger.warn("scrollTo() is not supported with Jest.");
    }
  } else {
    const _module2 = isJest;
    scrollToJest = _module2.isChromeDebugger() ? (function scrollToChromeDebugger() {
      const logger = addLogBoxLog.logger;
      logger.warn("scrollTo() is not supported with Chrome Debugger.");
    }) : (function scrollToDefault() {
      const logger = addLogBoxLog.logger;
      logger.warn("scrollTo() is not supported on this configuration.");
    });
  }
} else {
  if (isJest.isFabric()) {
    scrollToPaper = scrollToFabric;
  }
  exports.scrollTo = scrollToPaper;
}