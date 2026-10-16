// _runtime/01836_scrollToFabric.js
import _mod1662 from "metro/01662__.js";
import dispatchCommandFabric from "01833_dispatchCommandFabric.js";
import module_1661_mod from "metro/01661__.js";

function scrollToFabric(arg0, arg1, arg2, arg3) {
  const items = [arg1, arg2, arg3];
  dispatchCommandFabric.dispatchCommand(arg0, "scrollTo", items);
}
scrollToFabric.__closure = { dispatchCommand: dispatchCommandFabric.dispatchCommand };
scrollToFabric.__workletHash = 5331784934384;
scrollToFabric.__initData = {
  code: "function scrollToFabric_Pnpm_scrollToTs1(animatedRef,x,y,animated){const{dispatchCommand}=this.__closure;dispatchCommand(animatedRef,'scrollTo',[x,y,animated]);}",
};
function scrollToPaper(fn, arg1, arg2, arg3) {
  if (globalThis._WORKLET) {
    global._scrollToPaper(fn(), arg1, arg2, arg3);
  }
}
scrollToPaper.__closure = {};
scrollToPaper.__workletHash = 10376977850779;
scrollToPaper.__initData = {
  code: "function scrollToPaper_Pnpm_scrollToTs2(animatedRef,x,y,animated){if(!_WORKLET){return;}const viewTag=animatedRef();global._scrollToPaper(viewTag,x,y,animated);}",
};
let module_1661 = module_1661_mod;
module_1661.shouldBeUseWeb();
let module_1661 = module_1661_mod;
if (module_1661) {
  if (module_1661.isJest()) {
    function scrollToJest() {
      const logger = _mod1662.logger;
      logger.warn("scrollTo() is not supported with Jest.");
    }
  } else {
    const _module2 = module_1661;
    scrollToJest = _module2.isChromeDebugger()
      ? function scrollToChromeDebugger() {
          const logger = _mod1662.logger;
          logger.warn("scrollTo() is not supported with Chrome Debugger.");
        }
      : function scrollToDefault() {
          const logger = _mod1662.logger;
          logger.warn("scrollTo() is not supported on this configuration.");
        };
  }
} else {
  if (module_1661.isFabric()) {
    scrollToPaper = scrollToFabric;
  }
  exports.scrollTo = scrollToPaper;
}
