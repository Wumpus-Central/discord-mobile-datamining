// discord_app/modules/share/native/showSearchableDestinationListModal.tsx
const result = require("set").fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(outer1_1, closure_0, closure_4) {
  let obj = require("../../../utils/native/ChatInputUtils.tsx") /* getBestActiveInput */;
  obj.dismissKeyboard();
  const obj2 = require("../../../actions/ModalActionCreators.tsx");
  const tmp = require;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    const tmpResult = tmp(7562);
  }
  return obj2.pushLazy(outer1_1, closure_0, closure_4, obj);
};