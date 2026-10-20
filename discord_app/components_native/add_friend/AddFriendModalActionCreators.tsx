// === Module 14911: AddFriendModalActionCreators ===

// Module 14911 (AddFriendModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import UserStore from "UserStore" /* 1392 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14912, dependencyMap.paths));
  },
  openAddFriendModal(sourceMetadata) {
    if (null != UserStore.getCurrentUser()) {
      const obj2 = { sourceMetadata };
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14912, dependencyMap.paths), obj2);
    }
  }
};