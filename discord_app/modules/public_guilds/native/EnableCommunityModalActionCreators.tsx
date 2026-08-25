// discord_app/modules/public_guilds/native/EnableCommunityModalActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4611 from "../../../actions/ModalActionCreators.tsx";

const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = set.fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    _modDef4611.pushLazy(asyncRequireImpl(17008, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    _modDef4611.popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};