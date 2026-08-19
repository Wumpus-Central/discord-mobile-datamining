// discord_app/modules/messages/native/handlers/handleMessagesTapGameMention.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import _modDef9096 from "../../../game_profile/GameProfileActionCreators.native.tsx";
import GameProfileEmbedAction from "../../../game_profile/GameProfileAnalyticUtils.tsx";

const result = obj132.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileEmbedAction.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};