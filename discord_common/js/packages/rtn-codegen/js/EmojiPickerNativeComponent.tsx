// === Module 10324: EmojiPickerNativeComponent ===

// Module 10324 (EmojiPickerNativeComponent)
import renderElement from "renderElement" /* 114 */;
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let Commands = { uiViewClassName: "EmojiPickerView", directEventTypes: { topStickyHeaderRender: { registrationName: "onStickyHeaderRender" }, topPressEmoji: { registrationName: "onPressEmoji" }, topLongPressEmoji: { registrationName: "onLongPressEmoji" }, topScroll: { registrationName: "onScroll" }, topScrollBeginDrag: { registrationName: "onScrollBeginDrag" }, topScrollEndDrag: { registrationName: "onScrollEndDrag" }, topShowNitroUpsell: { registrationName: "onShowNitroUpsell" } }, validAttributes: null };
Commands = { config: true, paddingTop: true, paddingBottom: true, useTier0UpsellContent: true, emojiData: true, emojiMargin: true, emojiSize: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onStickyHeaderRender: true, onPressEmoji: true, onLongPressEmoji: true, onScroll: true, onScrollBeginDrag: true, onScrollEndDrag: true, onShowNitroUpsell: true }));
Commands.validAttributes = Commands;
Commands = {
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
const value = module_65.get("EmojiPickerView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/EmojiPickerNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = Commands;
export { Commands };