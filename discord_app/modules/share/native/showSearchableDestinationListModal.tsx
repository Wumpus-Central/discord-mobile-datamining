// === Module 10707: showSearchableDestinationListModal ===

// Module 10707 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ChatInputUtils from "ChatInputUtils" /* 4745 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import useIsWindowLarge from "useIsWindowLarge" /* 6433 */;
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