// discord_app/modules/activities/openActivityShareLinkModal.native.tsx
import asyncRequireImpl from "../../../_runtime/02002_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import showSearchableDestinationListModalDefault from "../share/native/showSearchableDestinationListModal.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = size.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  ({ applicationId, customId, linkId, channelId, message, onShare } = arg0);
  showSearchableDestinationListModalDefault(
    asyncRequireImpl(15737, dependencyMap.paths),
    { applicationId, customId, linkId, channelId, message, onShare },
    ACTIVITY_SHARE_LINK_MODAL,
  );
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  ModalActionCreatorsDefault.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};
