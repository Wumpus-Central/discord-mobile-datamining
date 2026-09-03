// discord_app/modules/messages/native/handlers/handleMessagesTapGameMention.tsx
import set from "../../../../../_runtime/00002_set.js";
import _modDef8825 from "../../../game_profile/GameProfileActionCreators.native.tsx";
import GameProfileEmbedAction from "../../../game_profile/GameProfileAnalyticUtils.tsx";

const result = set.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = _modDef8825;
  obj = {
    gameId,
    gameProfileModalChecks: { shouldOpenGameProfile: true, gameId },
    source: GameProfileEmbedAction.GameProfileSources.GameMention,
  };
  obj.openGameProfileModal(obj);
};
