// === Module 11162: handleMessagesTapGameMention ===

// Module 11162 (handleMessagesTapGameMention)
import set from "set" /* 2 */;
import _modDef8769 from "module_8769" /* 8769 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 8775 */;

const result = set.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = _modDef8769;
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileEmbedAction.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};