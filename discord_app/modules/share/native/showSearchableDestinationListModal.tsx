// === Module 11553: showSearchableDestinationListModal ===

// Module 11553 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4985 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import useIsWindowLarge from "useIsWindowLarge" /* 6626 */;
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