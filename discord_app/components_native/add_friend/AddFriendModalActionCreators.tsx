// === Module 13312: ? ===

// Module 13312
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

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