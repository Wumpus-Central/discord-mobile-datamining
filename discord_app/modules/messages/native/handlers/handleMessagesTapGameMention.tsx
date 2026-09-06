// === Module 11613: handleMessagesTapGameMention ===

// Module 11613 (handleMessagesTapGameMention)
import set from "set" /* 2 */;
import _modDef8680 from "module_8680" /* 8680 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 8686 */;

const result = set.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = _modDef8680;
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileEmbedAction.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};