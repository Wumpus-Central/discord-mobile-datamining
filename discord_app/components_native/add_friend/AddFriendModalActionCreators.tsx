// discord_app/components_native/add_friend/AddFriendModalActionCreators.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { asyncRequireImpl } from "../../../_runtime/01988_asyncRequireImpl.js";
import { ModalActionCreators } from "../../actions/ModalActionCreators.tsx";

const require = arg1;
const result = require("AddFriendModalScene").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    ModalActionCreators.pushLazy(asyncRequireImpl(13202, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = ModalActionCreators;
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(asyncRequireImpl(13202, dependencyMap.paths), obj);
    }
  }
};