import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "DCDChatInput", directEventTypes: { topChangeContentSize: { registrationName: "onChangeContentSize" }, topEndBlur: { registrationName: "onEndBlur" }, topBeginFocus: { registrationName: "onBeginFocus" }, topSelectionOrTextChange: { registrationName: "onSelectionOrTextChange" }, topTextFlushed: { registrationName: "onTextFlushed" }, topPasteImage: { registrationName: "onPasteImage" }, topPasteCommand: { registrationName: "onPasteCommand" }, topRequestSend: { registrationName: "onRequestSend" }, topTapAction: { registrationName: "onTapAction" } }, validAttributes: null };
obj = { textColor: true, editable: true, shouldShowCursor: true, placeholder: true, placeholderColor: true, markAsSpoilerTitle: true, keyboardAppearance: true, selectionColor: true, setNoExtractUI: true, keyboardType: true, maxHeight: true, verticalInset: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onChangeContentSize: true, onEndBlur: true, onBeginFocus: true, onSelectionOrTextChange: true, onTextFlushed: true, onPasteImage: true, onPasteCommand: true, onRequestSend: true, onTapAction: true }));
obj[2] = obj;
obj = {
  backspace(arg0) {
    require(114) /* renderElement */.dispatchCommand(arg0, "backspace", []);
  },
  blur(arg0) {
    require(114) /* renderElement */.dispatchCommand(arg0, "blur", []);
  },
  focus(arg0) {
    require(114) /* renderElement */.dispatchCommand(arg0, "focus", []);
  },
  openCustomKeyboard(arg0) {
    require(114) /* renderElement */.dispatchCommand(arg0, "openCustomKeyboard", []);
  },
  closeCustomKeyboard(arg0) {
    require(114) /* renderElement */.dispatchCommand(arg0, "closeCustomKeyboard", []);
  },
  openSystemKeyboard(arg0) {
    require(114) /* renderElement */.dispatchCommand(arg0, "openSystemKeyboard", []);
  },
  replaceRange(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    const items = [arg1, arg2, arg3, arg4, arg5, arg6];
    require(114) /* renderElement */.dispatchCommand(arg0, "replaceRange", items);
  },
  setSelectedRange(arg0, arg1, arg2) {
    const items = [arg1, arg2];
    require(114) /* renderElement */.dispatchCommand(arg0, "setSelectedRange", items);
  },
  setText(arg0, arg1) {
    const items = [arg1];
    require(114) /* renderElement */.dispatchCommand(arg0, "setText", items);
  },
  flushText(arg0, arg1) {
    const items = [arg1];
    require(114) /* renderElement */.dispatchCommand(arg0, "flushText", items);
  },
  updateTextBlocks(arg0, arg1, arg2) {
    const items = [arg1, arg2];
    require(114) /* renderElement */.dispatchCommand(arg0, "updateTextBlocks", items);
  }
};
const value = setRuntimeConfigProvider.get("DCDChatInput", () => obj);
const result = require("renderElement").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ChatInputNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;