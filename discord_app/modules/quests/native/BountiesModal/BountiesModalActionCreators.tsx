// === Module 17228: BountiesModalActionCreators ===

// Module 17228 (BountiesModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

const BOUNTIES_MODAL = "BOUNTIES_MODAL";
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default {
  showModal(arg0) {
    ({ bountyId, sourceQuestContent, variant, bounty } = arg0);
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17229, dependencyMap.paths), { bountyId, sourceQuestContent, variant, bounty }, BOUNTIES_MODAL);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(BOUNTIES_MODAL);
  }
};
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";