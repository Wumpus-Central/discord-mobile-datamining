// discord_app/modules/game_organization_invites/native/openGameOrganizationJoinOutcomeModal.tsx
import asyncRequireImpl from "../../../../_runtime/02121_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import GameOrganizationInviteConstants from "../GameOrganizationInviteConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_MODAL_KEY;
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/openGameOrganizationJoinOutcomeModal.tsx",
);

export default function openGameOrganizationJoinOutcomeModal(code, result) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14082, dependencyMap.paths), { code, result }, closure_3);
}
