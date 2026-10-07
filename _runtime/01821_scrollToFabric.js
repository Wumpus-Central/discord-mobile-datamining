// === Module 1821: scrollToFabric ===

// Module 1821 (scrollToFabric)
import _mod1647 from "module_1647" /* 1647 */;
import dispatchCommandFabric from "dispatchCommandFabric" /* 1818 */;
import module_1646_mod from "module_1646" /* 1646 */;

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
let module_1646 = module_1646_mod;
module_1646.shouldBeUseWeb();
let module_1646 = module_1646_mod;
if (module_1646) {
  if (module_1646.isJest()) {
    function scrollToJest() {
      const logger = _mod1647.logger;
      logger.warn("scrollTo() is not supported with Jest.");
    }
  } else {
    const _module2 = module_1646;
    scrollToJest = _module2.isChromeDebugger() ? (function scrollToChromeDebugger() {
      const logger = _mod1647.logger;
      logger.warn("scrollTo() is not supported with Chrome Debugger.");
    }) : (function scrollToDefault() {
      const logger = _mod1647.logger;
      logger.warn("scrollTo() is not supported on this configuration.");
    });
  }
} else {
  if (module_1646.isFabric()) {
    scrollToPaper = scrollToFabric;
  }
  exports.scrollTo = scrollToPaper;
}