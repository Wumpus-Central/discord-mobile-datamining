// discord_app/modules/public_guilds/native/EnableCommunityModalActionCreators.tsx
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    ModalActionCreators.pushLazy(asyncRequireImpl(16819, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    ModalActionCreators.popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};