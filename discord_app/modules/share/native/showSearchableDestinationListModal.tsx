// === Module 10652: showSearchableDestinationListModal ===

// Module 10652 (showSearchableDestinationListModal)
import set from "set" /* 2 */;
import getBestActiveInput from "getBestActiveInput" /* 4308 */;
import _modDef4689 from "module_4689" /* 4689 */;
import useIsWindowLarge from "useIsWindowLarge" /* 7665 */;

const result = set.fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(closure_1_1, closure_0, c3) {
  let obj = getBestActiveInput;
  obj.dismissKeyboard();
  const obj2 = _modDef4689;
  const tmp = require;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    const tmpResult = useIsWindowLarge;
  }
  return obj2.pushLazy(closure_1_1, closure_0, c3, obj);
};