// === Module 14557: BOUNTIES_MODAL_KEY ===

// Module 14557 (BOUNTIES_MODAL_KEY)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

const BOUNTIES_MODAL = "BOUNTIES_MODAL";
const result = set.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default {
  showModal(arg0) {
    ({ bountyId, sourceQuestContent } = arg0);
    _modDef4676.pushLazy(asyncRequireImpl(14558, dependencyMap.paths), { bountyId, sourceQuestContent }, BOUNTIES_MODAL);
  },
  hideModal() {
    _modDef4676.popWithKey(BOUNTIES_MODAL);
  }
};
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";