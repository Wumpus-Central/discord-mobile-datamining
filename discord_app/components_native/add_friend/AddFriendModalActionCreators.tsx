// discord_app/components_native/add_friend/AddFriendModalActionCreators.tsx
import asyncRequireImpl from "../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4676 from "../../actions/ModalActionCreators.tsx";
import closure_3 from "../../stores/UserStore.tsx";

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