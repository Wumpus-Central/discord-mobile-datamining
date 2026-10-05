// === Module 9928: EmojiPickerNativeComponent ===

// Module 9928 (EmojiPickerNativeComponent)
import renderElement from "renderElement" /* 114 */;
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "EmojiPickerView", directEventTypes: { topStickyHeaderRender: { registrationName: "onStickyHeaderRender" }, topPressEmoji: { registrationName: "onPressEmoji" }, topLongPressEmoji: { registrationName: "onLongPressEmoji" }, topScroll: { registrationName: "onScroll" }, topScrollBeginDrag: { registrationName: "onScrollBeginDrag" }, topScrollEndDrag: { registrationName: "onScrollEndDrag" }, topShowNitroUpsell: { registrationName: "onShowNitroUpsell" } }, validAttributes: obj2 };
obj2 = { config: true, paddingTop: true, paddingBottom: true, useTier0UpsellContent: true, emojiData: true, emojiMargin: true, emojiSize: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onStickyHeaderRender: true, onPressEmoji: true, onLongPressEmoji: true, onScroll: true, onScrollBeginDrag: true, onScrollEndDrag: true, onShowNitroUpsell: true }));
const obj3 = {
  refreshEmojis(current) {
    const obj = renderElement;
    obj.dispatchCommand(current, "refreshEmojis", []);
  },
  scrollingEnabled(nodeFromPublicInstance, arg1) {
    const items = [arg1];
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "scrollingEnabled", items);
  },
  scrollToHeaderIndex(nodeFromPublicInstance, arg1, arg2) {
    const items = [arg1, arg2];
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "scrollToHeaderIndex", items);
  }
};
const value = module_65.get("EmojiPickerView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/EmojiPickerNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
export const Commands = obj3;