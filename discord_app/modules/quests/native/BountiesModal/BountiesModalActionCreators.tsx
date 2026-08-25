// === Module 14457: BOUNTIES_MODAL_KEY ===

// Module 14457 (BOUNTIES_MODAL_KEY)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;

const BOUNTIES_MODAL = "BOUNTIES_MODAL";
const result = set.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default {
  showModal(arg0) {
    ({ bountyId, sourceQuestContent } = arg0);
    _modDef4611.pushLazy(asyncRequireImpl(14458, dependencyMap.paths), { bountyId, sourceQuestContent }, BOUNTIES_MODAL);
  },
  hideModal() {
    _modDef4611.popWithKey(BOUNTIES_MODAL);
  }
};
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";