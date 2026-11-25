// === Module 12099: handleMessagesTapGameMention ===

// Module 12099 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8707 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8712 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention });
}