// === Module 15736: openActivityShareLinkModal ===

// Module 15736 (openActivityShareLinkModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 12897 */;
import size from "module_2" /* 2 */;

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = size.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  ({ applicationId, customId, linkId, channelId, message, onShare } = arg0);
  showSearchableDestinationListModalDefault(asyncRequireImpl(15737, dependencyMap.paths), { applicationId, customId, linkId, channelId, message, onShare }, ACTIVITY_SHARE_LINK_MODAL);
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  ModalActionCreatorsDefault.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};