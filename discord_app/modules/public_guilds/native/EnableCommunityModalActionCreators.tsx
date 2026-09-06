// discord_app/modules/public_guilds/native/EnableCommunityModalActionCreators.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = size.fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(17662, dependencyMap.paths),
      undefined,
      ENABLED_COMMUNITY_MODAL_KEY,
    );
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  },
};
