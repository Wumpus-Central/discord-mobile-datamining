// === Module 13405: ? ===

// Module 13405
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;

require = arg1;
const result = require("set").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    _modDef4611.pushLazy(asyncRequireImpl(13406, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = _modDef4611;
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(asyncRequireImpl(13406, dependencyMap.paths), obj);
    }
  }
};