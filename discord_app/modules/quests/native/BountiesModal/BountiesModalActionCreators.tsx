// discord_app/modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const BOUNTIES_MODAL = "BOUNTIES_MODAL";
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default {
  showModal(arg0) {
    ({ bountyId, sourceQuestContent } = arg0);
    ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(15003, dependencyMap.paths),
      { bountyId, sourceQuestContent },
      BOUNTIES_MODAL,
    );
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(BOUNTIES_MODAL);
  },
};
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";
