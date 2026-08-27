// === Module 7712: __INTERNAL_VIEW_CONFIG ===

// Module 7712 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import renderElement from "renderElement" /* 114 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

let obj = { uiViewClassName: "FastestList", directEventTypes: { topLayout: { registrationName: "onLayout" }, topScroll: { registrationName: "onScroll" }, topScrollBeginDrag: { registrationName: "onScrollBeginDrag" }, topScrollEndDrag: { registrationName: "onScrollEndDrag" }, topVisibleItemsChanged: { registrationName: "onVisibleItemsChanged" }, topUnexpectedItemSize: { registrationName: "onUnexpectedItemSize" } }, validAttributes: null };
obj = { insetStart: true, insetEnd: true, horizontal: true, keyboardDismissOnDrag: true, placeholderConfig: true, renderAhead: true, scrollEventThrottle: true, sectionsVersioned: true, showsHorizontalScrollIndicator: true, showsVerticalScrollIndicator: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onLayout: true, onScroll: true, onScrollBeginDrag: true, onScrollEndDrag: true, onVisibleItemsChanged: true, onUnexpectedItemSize: true }));
obj[2] = obj;
obj = {
  scrollToLocation(arg0, arg1, arg2, arg3, arg4) {
    const items = [arg1, arg2, arg3, arg4];
    renderElement.dispatchCommand(arg0, "scrollToLocation", items);
  },
  scrollToTop(arg0, arg1) {
    const items = [arg1];
    renderElement.dispatchCommand(arg0, "scrollToTop", items);
  }
};
const value = setRuntimeConfigProvider.get("FastestList", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/FastestListNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;