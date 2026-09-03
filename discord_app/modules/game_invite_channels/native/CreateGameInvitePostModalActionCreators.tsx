// discord_app/modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02008_asyncRequireImpl.js";
import _modDef4724 from "../../../actions/ModalActionCreators.tsx";

let c3 = "create-game-invite-post";
const result = set.fileFinishedImporting(
  "modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx",
);

export const openCreateGameInvitePostModal = function openCreateGameInvitePostModal(closure_0) {
  _modDef4724.pushLazy(asyncRequireImpl(12545, dependencyMap.paths), closure_0, c3);
};
export const closeCreateGameInvitePostModal = function closeCreateGameInvitePostModal() {
  _modDef4724.popWithKey(c3);
};
