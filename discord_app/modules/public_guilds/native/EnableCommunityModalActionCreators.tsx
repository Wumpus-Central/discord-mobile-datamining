// discord_app/modules/public_guilds/native/EnableCommunityModalActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02010_asyncRequireImpl.js";
import _modDef4689 from "../../../actions/ModalActionCreators.tsx";

const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = set.fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    _modDef4689.pushLazy(asyncRequireImpl(17177, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    _modDef4689.popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};