// _runtime/01821_scrollToPaper.js
import react_native from "01647_react-native.js";
import dispatchCommandPaper from "01818_dispatchCommandPaper.js";
import module_1646_mod from "metro/01646__.js";

function scrollToFabric(nodeFromPublicInstance, arg1, arg2, arg3) {
  const items = [arg1, arg2, arg3];
  const obj = dispatchCommandPaper;
  obj.dispatchCommand(nodeFromPublicInstance, "scrollTo", items);
}
let obj = { dispatchCommand: dispatchCommandPaper.dispatchCommand };
scrollToFabric.__closure = obj;
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
let module_1646 = module_1646_mod;
module_1646.shouldBeUseWeb();
module_1646 = module_1646_mod;
if (module_1646) {
  let scrollToJest;
  if (module_1646.isJest()) {
    scrollToJest = function scrollToJest() {
      const logger = react_native.logger;
      logger.warn("scrollTo() is not supported with Jest.");
    };
  } else {
    const _module2 = module_1646;
    scrollToJest = _module2.isChromeDebugger()
      ? function scrollToChromeDebugger() {
          const logger = react_native.logger;
          logger.warn("scrollTo() is not supported with Chrome Debugger.");
        }
      : function scrollToDefault() {
          const logger = react_native.logger;
          logger.warn("scrollTo() is not supported on this configuration.");
        };
  }
  scrollToPaper = scrollToJest;
} else if (module_1646.isFabric()) {
  scrollToPaper = scrollToFabric;
}

export const scrollTo = scrollToPaper;
