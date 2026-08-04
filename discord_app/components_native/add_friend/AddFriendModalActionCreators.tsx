import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("AddFriendModalScene").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(13108, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = importDefault(4490);
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(require(1959) /* asyncRequireImpl */(13108, dependencyMap.paths), obj);
    }
  }
};