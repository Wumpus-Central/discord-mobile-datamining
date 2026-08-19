// discord_app/components_native/add_friend/AddFriendModalActionCreators.tsx
import asyncRequireImpl from "../../../_runtime/02007_asyncRequireImpl.js";
import _modDef5260 from "../../actions/ModalActionCreators.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    _modDef5260.pushLazy(asyncRequireImpl(13313, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      const obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(asyncRequireImpl(13313, dependencyMap.paths), obj);
    }
  }
};