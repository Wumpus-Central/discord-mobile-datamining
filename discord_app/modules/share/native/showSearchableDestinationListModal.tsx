// === Module 9078: showSearchableDestinationListModal ===

// Module 9078 (showSearchableDestinationListModal)
import obj132 from "obj132" /* 2 */;
import getBestActiveInput from "getBestActiveInput" /* 4237 */;
import _modDef5260 from "module_5260" /* 5260 */;
import useIsWindowLarge from "useIsWindowLarge" /* 7925 */;

const result = obj132.fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(closure_1_1, closure_0, closure_4) {
  let obj = getBestActiveInput;
  obj.dismissKeyboard();
  const obj2 = _modDef5260;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    useIsWindowLarge;
  }
  return obj2.pushLazy(closure_1_1, closure_0, closure_4, obj);
};