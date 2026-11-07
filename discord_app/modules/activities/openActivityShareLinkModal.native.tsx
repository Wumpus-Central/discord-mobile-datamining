// === Module 16631: openActivityShareLinkModal ===

// Module 16631 (openActivityShareLinkModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 13612 */;
import size from "module_2" /* 2 */;

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = size.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export function openActivityShareLinkModal(arg0) {
  ({ applicationId, customId, linkId, channelId, message, onShare } = arg0);
  showSearchableDestinationListModalDefault(asyncRequireImpl(16632, dependencyMap.paths), { applicationId, customId, linkId, channelId, message, onShare }, ACTIVITY_SHARE_LINK_MODAL);
}
export function closeActivityShareLinkModal() {
  ModalActionCreatorsDefault.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
}