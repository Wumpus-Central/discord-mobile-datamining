// discord_app/modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const BOUNTIES_MODAL = "BOUNTIES_MODAL";
let obj = {
  showModal(arg0) {
    let bounty;
    let bountyId;
    let sourceQuestContent;
    let variant;
    ({ bountyId, sourceQuestContent, variant, bounty } = arg0);
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(
      asyncRequire(14828, dependencyMap.paths),
      { bountyId, sourceQuestContent, variant, bounty },
      BOUNTIES_MODAL,
    );
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(BOUNTIES_MODAL);
  },
};
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default obj;
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";
