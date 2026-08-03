const result = require("set").fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(outer1_1, closure_0, closure_4) {
  let obj = require(4052) /* getBestActiveInput */;
  obj.dismissKeyboard();
  const obj2 = importDefault(4399);
  const tmp = require;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    const tmpResult = tmp(6564);
  }
  return obj2.pushLazy(outer1_1, closure_0, closure_4, obj);
};