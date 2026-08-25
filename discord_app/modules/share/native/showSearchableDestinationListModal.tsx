// === Module 11232: showSearchableDestinationListModal ===

// Module 11232 (showSearchableDestinationListModal)
import set from "set" /* 2 */;
import getBestActiveInput from "getBestActiveInput" /* 4242 */;
import _modDef4611 from "module_4611" /* 4611 */;
import useIsWindowLarge from "useIsWindowLarge" /* 7785 */;

const result = set.fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(closure_1_1, closure_0, closure_4) {
  let obj = getBestActiveInput;
  obj.dismissKeyboard();
  const obj2 = _modDef4611;
  const tmp = require;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    const tmpResult = useIsWindowLarge;
  }
  return obj2.pushLazy(closure_1_1, closure_0, closure_4, obj);
};