// discord_app/modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx
const BOUNTIES_MODAL = "BOUNTIES_MODAL";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default {
  showModal(arg0) {
    let bountyId;
    let sourceQuestContent;
    ({ bountyId, sourceQuestContent } = arg0);
    require("../../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(14153, dependencyMap.paths), { bountyId, sourceQuestContent }, BOUNTIES_MODAL);
  },
  hideModal() {
    require("../../../../actions/ModalActionCreators.tsx").popWithKey(BOUNTIES_MODAL);
  }
};
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";