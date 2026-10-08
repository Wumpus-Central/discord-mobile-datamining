// === Module 13903: AddFriendModalActionCreators ===

// Module 13903 (AddFriendModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13904, dependencyMap.paths));
  },
  openAddFriendModal(sourceMetadata) {
    if (null != UserStore.getCurrentUser()) {
      const obj2 = { sourceMetadata };
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13904, dependencyMap.paths), obj2);
    }
  }
};