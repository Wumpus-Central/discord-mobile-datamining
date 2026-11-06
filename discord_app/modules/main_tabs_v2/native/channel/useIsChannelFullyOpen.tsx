// === Module 11406: useIsChannelFullyOpen ===

// Module 11406 (useIsChannelFullyOpen)
import MainTabsNavigatorPanelContextDefault from "MainTabsNavigatorPanelContext" /* 11401 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let items = [{ code: "(function getIsChannelFullyOpen_useIsChannelFullyOpenTsx1({isInMainTabs:isInMainTabs,translateX:translateX}){return!isInMainTabs||translateX.get()===0;})" }];
[tmp2] = items;
function getIsChannelFullyOpen(c3) {
  ({ isInMainTabs, translateX } = c3);
  let tmp = !isInMainTabs;
  if (isInMainTabs) {
    tmp = 0 === translateX.get();
  }
  return tmp;
}
getIsChannelFullyOpen.__workletHash = 2525740831781;
getIsChannelFullyOpen.__initData = tmp2;
let closure_6 = { code: "(function useIsChannelFullyOpenTsx2(){let[getIsChannelFullyOpen,isInMainTabs,translateX]=this.__closure;return getIsChannelFullyOpen({isInMainTabs:isInMainTabs,translateX:translateX});})" };
let closure_7 = { code: "(function useIsChannelFullyOpenTsx3(open,wasOpen){let[scheduleOnRN,setIsOpen]=this.__closure;if(open!==wasOpen){scheduleOnRN(setIsOpen,open);}})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useIsChannelFullyOpen.tsx");

export default function useIsChannelFullyOpen() {
  const context = noop.useContext(MainTabsNavigatorPanelContextDefault);
  const isInMainTabs = context.isInMainTabs;
  _require = isInMainTabs;
  const translateX = context.translateX;
  [tmp4, tmp5] = noop.useState(() => {
    if (typeof getIsChannelFullyOpen === "function") {
      let tmp2 = !c0;
      if (c0) {
        tmp2 = 0 === isInMainTabs.get();
      }
      return tmp2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  const tmp3 = _slicedToArray(noop.useState(() => {
    if (typeof getIsChannelFullyOpen === "function") {
      let tmp2 = !c0;
      if (c0) {
        tmp2 = 0 === isInMainTabs.get();
      }
      return tmp2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }), 2);
  const tmp6 = _require;
  items = [closure_6, getIsChannelFullyOpen, isInMainTabs, translateX];
  dependencyMap = undefined;
  [tmp7, tmp8, tmp9, tmp10] = items;
  function useIsChannelFullyOpenTsx2() {
    return _undefined({ isInMainTabs, translateX });
  }
  const items1 = [tmp8, tmp9, tmp10];
  useIsChannelFullyOpenTsx2.__closure = items1;
  useIsChannelFullyOpenTsx2.__workletHash = 2274606773816;
  useIsChannelFullyOpenTsx2.__initData = tmp7;
  const items2 = [closure_7, tmp6(1705).scheduleOnRN, tmp5];
  _require = undefined;
  importDefault = undefined;
  [tmp11, tmp12, tmp13] = items2;
  function useIsChannelFullyOpenTsx3(arg0, arg1) {
    if (arg0 !== arg1) {
      _undefined(c1, arg0);
    }
  }
  const items3 = [tmp12, tmp13];
  useIsChannelFullyOpenTsx3.__closure = items3;
  useIsChannelFullyOpenTsx3.__workletHash = 11624957574532;
  useIsChannelFullyOpenTsx3.__initData = tmp11;
  const animatedReaction = require("module_1652").useAnimatedReaction(useIsChannelFullyOpenTsx2, useIsChannelFullyOpenTsx3);
  return tmp4;
};
export { getIsChannelFullyOpen };