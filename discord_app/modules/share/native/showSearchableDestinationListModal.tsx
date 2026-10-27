// === Module 12913: showSearchableDestinationListModal ===

// Module 12913 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 5160 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import useIsWindowLarge from "useIsWindowLarge" /* 7040 */;
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