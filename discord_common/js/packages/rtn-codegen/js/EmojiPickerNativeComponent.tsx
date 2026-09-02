// === Module 9176: __INTERNAL_VIEW_CONFIG ===

// Module 9176 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import renderElement from "renderElement" /* 114 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

let obj = { uiViewClassName: "EmojiPickerView", directEventTypes: { topStickyHeaderRender: { registrationName: "onStickyHeaderRender" }, topPressEmoji: { registrationName: "onPressEmoji" }, topLongPressEmoji: { registrationName: "onLongPressEmoji" }, topScroll: { registrationName: "onScroll" }, topScrollBeginDrag: { registrationName: "onScrollBeginDrag" }, topScrollEndDrag: { registrationName: "onScrollEndDrag" }, topShowNitroUpsell: { registrationName: "onShowNitroUpsell" } }, validAttributes: null };
obj = { config: true, paddingTop: true, paddingBottom: true, useTier0UpsellContent: true, emojiData: true, emojiMargin: true, emojiSize: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onStickyHeaderRender: true, onPressEmoji: true, onLongPressEmoji: true, onScroll: true, onScrollBeginDrag: true, onScrollEndDrag: true, onShowNitroUpsell: true }));
obj[2] = obj;
obj = {
  refreshEmojis(current) {
    renderElement.dispatchCommand(current, "refreshEmojis", []);
  },
  scrollingEnabled(current, arg1) {
    const items = [arg1];
    renderElement.dispatchCommand(current, "scrollingEnabled", items);
  },
  scrollToHeaderIndex(arg0, arg1, arg2) {
    const items = [arg1, arg2];
    renderElement.dispatchCommand(arg0, "scrollToHeaderIndex", items);
  }
};
const value = setRuntimeConfigProvider.get("EmojiPickerView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/EmojiPickerNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;