// discord_common/js/packages/rtn-codegen/js/ChatInputNativeComponent.tsx
import _mod26 from "../../../../../_runtime/metro/00026__.js";
import renderElement from "../../../../../_runtime/00114_renderElement.js";
import weakSet from "../../../../../_runtime/00106_weakSet.js";
import 00065__ from "../../../../../_runtime/metro/00065__.js";
import size from "../../../../../_runtime/metro/00002__.js";

let Commands = { uiViewClassName: "DCDChatInput", directEventTypes: { topChangeContentSize: { registrationName: "onChangeContentSize" }, topEndBlur: { registrationName: "onEndBlur" }, topBeginFocus: { registrationName: "onBeginFocus" }, topSelectionOrTextChange: { registrationName: "onSelectionOrTextChange" }, topTextFlushed: { registrationName: "onTextFlushed" }, topPasteImage: { registrationName: "onPasteImage" }, topPasteCommand: { registrationName: "onPasteCommand" }, topRequestSend: { registrationName: "onRequestSend" }, topTapAction: { registrationName: "onTapAction" } }, validAttributes: null };
Commands = { textColor: _mod26.colorAttribute, editable: true, shouldShowCursor: true, placeholder: true, placeholderColor: _mod26.colorAttribute, markAsSpoilerTitle: true, keyboardAppearance: true, selectionColor: _mod26.colorAttribute, setNoExtractUI: true, keyboardType: true, maxHeight: true, verticalInset: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onChangeContentSize: true, onEndBlur: true, onBeginFocus: true, onSelectionOrTextChange: true, onTextFlushed: true, onPasteImage: true, onPasteCommand: true, onRequestSend: true, onTapAction: true }));
Commands.validAttributes = Commands;
Commands = {
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
const value = module_65.get("DCDChatInput", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ChatInputNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = Commands;
export { Commands };