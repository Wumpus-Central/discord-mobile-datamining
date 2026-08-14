// discord_app/modules/share/native/showSearchableDestinationListModal.tsx
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { getBestActiveInput } from "../../../utils/native/ChatInputUtils.tsx";
const result = require("set").fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(outer1_1, closure_0, closure_4) {
  let obj = getBestActiveInput;
  obj.dismissKeyboard();
  const obj2 = ModalActionCreators;
  const tmp = require;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    const tmpResult = tmp(7707);
  }
  return obj2.pushLazy(outer1_1, closure_0, closure_4, obj);
};