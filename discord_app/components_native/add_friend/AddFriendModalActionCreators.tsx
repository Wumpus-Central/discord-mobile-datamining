// discord_app/components_native/add_friend/AddFriendModalActionCreators.tsx
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13853, dependencyMap.paths));
  },
  openAddFriendModal(sourceMetadata) {
    if (null != UserStore.getCurrentUser()) {
      const obj = { sourceMetadata };
      obj.pushLazy(asyncRequireImpl(13853, dependencyMap.paths), obj);
    }
  },
};
