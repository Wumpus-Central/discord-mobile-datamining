// === Module 11823: handleMessagesTapGameMention ===

// Module 11823 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9401 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9421 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention });
}