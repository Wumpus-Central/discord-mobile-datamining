// discord_app/modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx
import { asyncRequireImpl } from "../../../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
const BOUNTIES_MODAL = "BOUNTIES_MODAL";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default {
  showModal(arg0) {
    let bountyId;
    let sourceQuestContent;
    ({ bountyId, sourceQuestContent } = arg0);
    ModalActionCreators.pushLazy(asyncRequireImpl(14328, dependencyMap.paths), { bountyId, sourceQuestContent }, BOUNTIES_MODAL);
  },
  hideModal() {
    ModalActionCreators.popWithKey(BOUNTIES_MODAL);
  }
};
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";