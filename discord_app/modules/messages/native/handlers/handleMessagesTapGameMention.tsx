// discord_app/modules/messages/native/handlers/handleMessagesTapGameMention.tsx
const result = require("set").fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = require("../../../game_profile/GameProfileActionCreators.native.tsx");
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: require("../../../game_profile/GameProfileAnalyticUtils.tsx") /* GameProfileEmbedAction */.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};