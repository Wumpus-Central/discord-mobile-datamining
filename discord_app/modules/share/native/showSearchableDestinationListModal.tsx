// === Module 10720: showSearchableDestinationListModal ===

// Module 10720 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ChatInputUtils from "ChatInputUtils" /* 4751 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import useIsWindowLarge from "useIsWindowLarge" /* 6440 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(promise, merged, c3) {
  let obj3;
  const obj = ChatInputUtils;
  obj.dismissKeyboard();
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  ModalActionCreatorsDefault;
  const obj2 = PlatformUtils;
  if (!obj2.isIOS()) {
    obj3 = { presentation: "modal" };
  } else {
    useIsWindowLarge;
  }
  return pushLazy(promise, merged, c3, obj3);
};