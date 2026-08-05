// discord_app/modules/polls/PollInteractionUtils.native.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  let obj = require("../action_sheet/native/ActionSheetActionCreators.tsx");
  obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(10199, dependencyMap.paths), "PollVotesActionSheet", obj);
};