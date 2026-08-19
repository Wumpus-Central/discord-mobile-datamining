// discord_app/modules/share/native/showSearchableDestinationListModal.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import getBestActiveInput from "../../../utils/native/ChatInputUtils.tsx";
import _modDef5260 from "../../../actions/ModalActionCreators.tsx";
import useIsWindowLarge from "../../screen/native/useIsWindowLarge.tsx";

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