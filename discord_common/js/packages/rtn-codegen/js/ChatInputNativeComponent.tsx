// === Module 11528: __INTERNAL_VIEW_CONFIG ===

// Module 11528 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import result2 from "result" /* 26 */;
import renderElement from "renderElement" /* 114 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

let obj = { uiViewClassName: "DCDChatInput", directEventTypes: { topChangeContentSize: { registrationName: "onChangeContentSize" }, topEndBlur: { registrationName: "onEndBlur" }, topBeginFocus: { registrationName: "onBeginFocus" }, topSelectionOrTextChange: { registrationName: "onSelectionOrTextChange" }, topTextFlushed: { registrationName: "onTextFlushed" }, topPasteImage: { registrationName: "onPasteImage" }, topPasteCommand: { registrationName: "onPasteCommand" }, topRequestSend: { registrationName: "onRequestSend" }, topTapAction: { registrationName: "onTapAction" } }, validAttributes: null };
obj = { textColor: result2.colorAttribute, editable: true, shouldShowCursor: true, placeholder: true, placeholderColor: result2.colorAttribute, markAsSpoilerTitle: true, keyboardAppearance: true, selectionColor: result2.colorAttribute, setNoExtractUI: true, keyboardType: true, maxHeight: true, verticalInset: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onChangeContentSize: true, onEndBlur: true, onBeginFocus: true, onSelectionOrTextChange: true, onTextFlushed: true, onPasteImage: true, onPasteCommand: true, onRequestSend: true, onTapAction: true }));
obj[2] = obj;
obj = {
  backspace(arg0) {
    renderElement.dispatchCommand(arg0, "backspace", []);
  },
  blur(arg0) {
    renderElement.dispatchCommand(arg0, "blur", []);
  },
  focus(arg0) {
    renderElement.dispatchCommand(arg0, "focus", []);
  },
  openCustomKeyboard(arg0) {
    renderElement.dispatchCommand(arg0, "openCustomKeyboard", []);
  },
  closeCustomKeyboard(arg0) {
    renderElement.dispatchCommand(arg0, "closeCustomKeyboard", []);
  },
  openSystemKeyboard(arg0) {
    renderElement.dispatchCommand(arg0, "openSystemKeyboard", []);
  },
  replaceRange(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    const items = [arg1, arg2, arg3, arg4, arg5, arg6];
    renderElement.dispatchCommand(arg0, "replaceRange", items);
  },
  setSelectedRange(arg0, arg1, arg2) {
    const items = [arg1, arg2];
    renderElement.dispatchCommand(arg0, "setSelectedRange", items);
  },
  setText(arg0, arg1) {
    const items = [arg1];
    renderElement.dispatchCommand(arg0, "setText", items);
  },
  flushText(arg0, arg1) {
    const items = [arg1];
    renderElement.dispatchCommand(arg0, "flushText", items);
  },
  updateTextBlocks(arg0, arg1, arg2) {
    const items = [arg1, arg2];
    renderElement.dispatchCommand(arg0, "updateTextBlocks", items);
  }
};
const value = setRuntimeConfigProvider.get("DCDChatInput", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ChatInputNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;