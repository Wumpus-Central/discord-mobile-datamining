// discord_app/modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02008_asyncRequireImpl.js";
import _modDef4724 from "../../../../actions/ModalActionCreators.tsx";

const BOUNTIES_MODAL = "BOUNTIES_MODAL";
const result = set.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default {
  showModal(arg0) {
    ({ bountyId, sourceQuestContent } = arg0);
    _modDef4724.pushLazy(
      asyncRequireImpl(14847, dependencyMap.paths),
      { bountyId, sourceQuestContent },
      BOUNTIES_MODAL,
    );
  },
  hideModal() {
    _modDef4724.popWithKey(BOUNTIES_MODAL);
  },
};
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";
