// discord_app/components_native/add_friend/AddFriendModalActionCreators.tsx
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("AddFriendModalScene").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    require("../../actions/ModalActionCreators.tsx").pushLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(13107, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = require("../../actions/ModalActionCreators.tsx");
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(13107, dependencyMap.paths), obj);
    }
  }
};