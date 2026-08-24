// discord_app/modules/share/native/showSearchableDestinationListModal.tsx
import set from "../../../../_runtime/00002_set.js";
import getBestActiveInput from "../../../utils/native/ChatInputUtils.tsx";
import _modDef5265 from "../../../actions/ModalActionCreators.tsx";
import useIsWindowLarge from "../../screen/native/useIsWindowLarge.tsx";

const result = set.fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(closure_1_1, closure_0, closure_4) {
  let obj = getBestActiveInput;
  obj.dismissKeyboard();
  const obj2 = _modDef5265;
  const tmp = require;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    const tmpResult = useIsWindowLarge;
  }
  return obj2.pushLazy(closure_1_1, closure_0, closure_4, obj);
};