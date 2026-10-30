// === Module 1829: scrollToFabric ===

// Module 1829 (scrollToFabric)
import _mod1655 from "module_1655" /* 1655 */;
import dispatchCommandFabric from "dispatchCommandFabric" /* 1826 */;
import module_1654_mod from "module_1654" /* 1654 */;

function scrollToFabric(arg0, arg1, arg2, arg3) {
  const items = [arg1, arg2, arg3];
  dispatchCommandFabric.dispatchCommand(arg0, "scrollTo", items);
}
scrollToFabric.__closure = { dispatchCommand: dispatchCommandFabric.dispatchCommand };
scrollToFabric.__workletHash = 5331784934384;
scrollToFabric.__initData = { code: "function scrollToFabric_Pnpm_scrollToTs1(animatedRef,x,y,animated){const{dispatchCommand}=this.__closure;dispatchCommand(animatedRef,'scrollTo',[x,y,animated]);}" };
function scrollToPaper(fn, arg1, arg2, arg3) {
  if (globalThis._WORKLET) {
    global._scrollToPaper(fn(), arg1, arg2, arg3);
  }
}
scrollToPaper.__closure = {};
scrollToPaper.__workletHash = 10376977850779;
scrollToPaper.__initData = { code: "function scrollToPaper_Pnpm_scrollToTs2(animatedRef,x,y,animated){if(!_WORKLET){return;}const viewTag=animatedRef();global._scrollToPaper(viewTag,x,y,animated);}" };
let module_1654 = module_1654_mod;
module_1654.shouldBeUseWeb();
let module_1654 = module_1654_mod;
if (module_1654) {
  if (module_1654.isJest()) {
    function scrollToJest() {
      const logger = _mod1655.logger;
      logger.warn("scrollTo() is not supported with Jest.");
    }
  } else {
    const _module2 = module_1654;
    scrollToJest = _module2.isChromeDebugger() ? (function scrollToChromeDebugger() {
      const logger = _mod1655.logger;
      logger.warn("scrollTo() is not supported with Chrome Debugger.");
    }) : (function scrollToDefault() {
      const logger = _mod1655.logger;
      logger.warn("scrollTo() is not supported on this configuration.");
    });
  }
} else {
  if (module_1654.isFabric()) {
    scrollToPaper = scrollToFabric;
  }
  exports.scrollTo = scrollToPaper;
}