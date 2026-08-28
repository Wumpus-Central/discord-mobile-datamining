// discord_app/modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02010_asyncRequireImpl.js";
import _modDef4689 from "../../../actions/ModalActionCreators.tsx";

let c3 = "create-game-invite-post";
const result = set.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx");

export const openCreateGameInvitePostModal = function openCreateGameInvitePostModal(closure_0) {
  _modDef4689.pushLazy(asyncRequireImpl(12242, dependencyMap.paths), closure_0, c3);
};
export const closeCreateGameInvitePostModal = function closeCreateGameInvitePostModal() {
  _modDef4689.popWithKey(c3);
};