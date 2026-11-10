// === Module 13626: showSearchableDestinationListModal ===

// Module 13626 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 5325 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6801 */;
import useIsWindowLarge from "useIsWindowLarge" /* 7186 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(promise, merged, c3) {
  ChatInputUtils.dismissKeyboard();
  const obj2 = ModalActionCreatorsDefault;
  if (!obj3.isIOS()) {
    const obj4 = { presentation: "modal" };
  } else {
    useIsWindowLarge;
  }
  return obj2.pushLazy(promise, merged, c3, obj4);
};