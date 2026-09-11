// === Module 11070: showSearchableDestinationListModal ===

// Module 11070 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4472 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import useIsWindowLarge from "useIsWindowLarge" /* 7016 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(promise, merged, c3) {
  let obj = ChatInputUtils;
  obj.dismissKeyboard();
  const obj2 = ModalActionCreatorsDefault;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    useIsWindowLarge;
  }
  return obj2.pushLazy(promise, merged, c3, obj);
};