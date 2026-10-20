// === Module 12727: showSearchableDestinationListModal ===

// Module 12727 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 5120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import useIsWindowLarge from "useIsWindowLarge" /* 6989 */;
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