// === Module 10634: showSearchableDestinationListModal ===

// Module 10634 (showSearchableDestinationListModal)
import set from "set" /* 2 */;
import getBestActiveInput from "getBestActiveInput" /* 4307 */;
import _modDef4676 from "module_4676" /* 4676 */;
import useIsWindowLarge from "useIsWindowLarge" /* 7651 */;

const result = set.fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(closure_1_1, closure_0, c3) {
  let obj = getBestActiveInput;
  obj.dismissKeyboard();
  const obj2 = _modDef4676;
  const tmp = require;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    const tmpResult = useIsWindowLarge;
  }
  return obj2.pushLazy(closure_1_1, closure_0, c3, obj);
};