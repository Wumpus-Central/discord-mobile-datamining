// === Module 11706: handleMessagesTapGameMention ===

// Module 11706 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8771 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8777 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};