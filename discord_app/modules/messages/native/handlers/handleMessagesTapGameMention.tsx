// discord_app/modules/messages/native/handlers/handleMessagesTapGameMention.tsx
import set from "set" /* 2 */;
import _modDef9096 from "module_9096" /* 9096 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 9101 */;

const result = set.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = _modDef9096;
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileEmbedAction.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};