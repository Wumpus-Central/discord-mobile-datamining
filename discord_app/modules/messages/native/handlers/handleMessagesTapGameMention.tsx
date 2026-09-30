// === Module 11313: handleMessagesTapGameMention ===

// Module 11313 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8329 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8335 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention });
};