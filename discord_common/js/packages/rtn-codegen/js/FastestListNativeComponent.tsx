// discord_common/js/packages/rtn-codegen/js/FastestListNativeComponent.tsx
import renderElement from "../../../../../_runtime/00114_renderElement.js";
import weakSet from "../../../../../_runtime/00106_weakSet.js";
import 00065__ from "../../../../../_runtime/metro/00065__.js";
import size from "../../../../../_runtime/metro/00002__.js";

let Commands = { uiViewClassName: "FastestList", directEventTypes: { topLayout: { registrationName: "onLayout" }, topScroll: { registrationName: "onScroll" }, topScrollBeginDrag: { registrationName: "onScrollBeginDrag" }, topScrollEndDrag: { registrationName: "onScrollEndDrag" }, topVisibleItemsChanged: { registrationName: "onVisibleItemsChanged" }, topUnexpectedItemSize: { registrationName: "onUnexpectedItemSize" } }, validAttributes: null };
Commands = { insetStart: true, insetEnd: true, horizontal: true, keyboardDismissOnDrag: true, placeholderConfig: true, renderAhead: true, scrollEventThrottle: true, sectionsVersioned: true, showsHorizontalScrollIndicator: true, showsVerticalScrollIndicator: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onLayout: true, onScroll: true, onScrollBeginDrag: true, onScrollEndDrag: true, onVisibleItemsChanged: true, onUnexpectedItemSize: true }));
Commands.validAttributes = Commands;
Commands = {
  scrollToLocation(arg0, arg1, arg2, arg3, arg4) {
    const items = [arg1, arg2, arg3, arg4];
    renderElement.dispatchCommand(arg0, "scrollToLocation", items);
  },
  scrollToTop(arg0, arg1) {
    const items = [arg1];
    renderElement.dispatchCommand(arg0, "scrollToTop", items);
  }
};
const value = module_65.get("FastestList", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/FastestListNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = Commands;
export { Commands };