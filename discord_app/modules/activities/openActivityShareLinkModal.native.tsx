// === Module 16561: openActivityShareLinkModal ===

// Module 16561 (openActivityShareLinkModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 13601 */;
import size from "module_2" /* 2 */;

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = size.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export function openActivityShareLinkModal(arg0) {
  ({ applicationId, customId, linkId, channelId, message, onShare } = arg0);
  showSearchableDestinationListModalDefault(asyncRequireImpl(16562, dependencyMap.paths), { applicationId, customId, linkId, channelId, message, onShare }, ACTIVITY_SHARE_LINK_MODAL);
}
export function closeActivityShareLinkModal() {
  ModalActionCreatorsDefault.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
}