// === Module 11364: handleMessagesTapGameMention ===

// Module 11364 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8850 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8856 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention });
};