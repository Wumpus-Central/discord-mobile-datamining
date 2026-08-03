// === Module 10051: showSearchableDestinationListModal ===

// Module 10051 (showSearchableDestinationListModal)
const result = require("set").fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(outer1_1, closure_0, closure_4) {
  let obj = require(4114) /* getBestActiveInput */;
  obj.dismissKeyboard();
  const obj2 = importDefault(4461);
  const tmp = require;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    const tmpResult = tmp(7550);
  }
  return obj2.pushLazy(outer1_1, closure_0, closure_4, obj);
};