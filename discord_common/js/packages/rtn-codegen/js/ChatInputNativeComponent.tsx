// === Module 11603: ChatInputNativeComponent ===

// Module 11603 (ChatInputNativeComponent)
import _mod26 from "module_26" /* 26 */;
import renderElement from "renderElement" /* 114 */;
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDChatInput", directEventTypes: { topChangeContentSize: { registrationName: "onChangeContentSize" }, topEndBlur: { registrationName: "onEndBlur" }, topBeginFocus: { registrationName: "onBeginFocus" }, topSelectionOrTextChange: { registrationName: "onSelectionOrTextChange" }, topTextFlushed: { registrationName: "onTextFlushed" }, topPasteImage: { registrationName: "onPasteImage" }, topPasteCommand: { registrationName: "onPasteCommand" }, topRequestSend: { registrationName: "onRequestSend" }, topTapAction: { registrationName: "onTapAction" } }, validAttributes: obj2 };
obj2 = { textColor: _mod26.colorAttribute, editable: true, shouldShowCursor: true, placeholder: true, placeholderColor: _mod26.colorAttribute, markAsSpoilerTitle: true, keyboardAppearance: true, selectionColor: _mod26.colorAttribute, setNoExtractUI: true, keyboardType: true, maxHeight: true, verticalInset: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onChangeContentSize: true, onEndBlur: true, onBeginFocus: true, onSelectionOrTextChange: true, onTextFlushed: true, onPasteImage: true, onPasteCommand: true, onRequestSend: true, onTapAction: true }));
const obj3 = {
  backspace(nodeFromPublicInstance) {
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "backspace", []);
  },
  blur(nodeFromPublicInstance) {
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "blur", []);
  },
  focus(nodeFromPublicInstance) {
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "focus", []);
  },
  openCustomKeyboard(nodeFromPublicInstance) {
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "openCustomKeyboard", []);
  },
  closeCustomKeyboard(nodeFromPublicInstance) {
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "closeCustomKeyboard", []);
  },
  openSystemKeyboard(nodeFromPublicInstance) {
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "openSystemKeyboard", []);
  },
  replaceRange(nodeFromPublicInstance, arg1, arg2, arg3, arg4, arg5, arg6) {
    const items = [arg1, arg2, arg3, arg4, arg5, arg6];
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "replaceRange", items);
  },
  setSelectedRange(nodeFromPublicInstance, arg1, arg2) {
    const items = [arg1, arg2];
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "setSelectedRange", items);
  },
  setText(nodeFromPublicInstance, arg1) {
    const items = [arg1];
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "setText", items);
  },
  flushText(nodeFromPublicInstance, arg1) {
    const items = [arg1];
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "flushText", items);
  },
  updateTextBlocks(nodeFromPublicInstance, arg1, arg2) {
    const items = [arg1, arg2];
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "updateTextBlocks", items);
  }
};
const value = module_65.get("DCDChatInput", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ChatInputNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
export const Commands = obj3;