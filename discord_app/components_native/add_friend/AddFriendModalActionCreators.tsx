// === Module 13505: ? ===

// Module 13505
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;

require = arg1;
const result = require("set").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    _modDef4676.pushLazy(asyncRequireImpl(13506, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = _modDef4676;
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(asyncRequireImpl(13506, dependencyMap.paths), obj);
    }
  }
};