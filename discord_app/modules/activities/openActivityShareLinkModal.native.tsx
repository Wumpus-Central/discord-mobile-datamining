// === Module 15853: openActivityShareLinkModal ===

// Module 15853 (openActivityShareLinkModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 8899 */;
import size from "module_2" /* 2 */;

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = size.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export function openActivityShareLinkModal(arg0) {
  ({ applicationId, customId, linkId, channelId, message, onShare } = arg0);
  showSearchableDestinationListModalDefault(asyncRequireImpl(15854, dependencyMap.paths), { applicationId, customId, linkId, channelId, message, onShare }, ACTIVITY_SHARE_LINK_MODAL);
}
export function closeActivityShareLinkModal() {
  ModalActionCreatorsDefault.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
}