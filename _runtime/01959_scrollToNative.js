// _runtime/01959_scrollToNative.js
import _mod1668 from "metro/01668__.js";
import dispatchCommandNative from "01956_dispatchCommandNative.js";

const require = globalThis.__r;

let items = [
  {
    code: "(function scrollToNative_Pnpm_scrollToNativeTs1(animatedRef,x,y,animated){let[dispatchCommand]=this.__closure;dispatchCommand(animatedRef,'scrollTo',[x,y,animated]);})",
  },
  dispatchCommandNative.dispatchCommand,
];
let closure_129_0;
[tmp2, tmp3] = items;
let scrollToJest = function scrollToNative(arg0, arg1, arg2, arg3) {
  items = [arg1, arg2, arg3];
  require(arg0, "scrollTo", items);
};
const items1 = [tmp3];
scrollToJest.__closure = items1;
scrollToJest.__workletHash = 10260957486676;
scrollToJest.__initData = tmp2;
if (_mod1668.IS_JEST) {
  scrollToJest = function scrollToJest() {
    const logger = _mod1668.logger;
    logger.warn("scrollTo() is not supported with Jest.");
  };
}

export const scrollTo = scrollToJest;
