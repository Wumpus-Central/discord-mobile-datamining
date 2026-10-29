// === Module 16798: BountiesModalActionCreators ===

// Module 16798 (BountiesModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import size from "module_2" /* 2 */;

const BOUNTIES_MODAL = "BOUNTIES_MODAL";
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default {
  showModal(arg0) {
    ({ bountyId, sourceQuestContent, variant, bounty } = arg0);
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16799, dependencyMap.paths), { bountyId, sourceQuestContent, variant, bounty }, BOUNTIES_MODAL);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(BOUNTIES_MODAL);
  }
};
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";