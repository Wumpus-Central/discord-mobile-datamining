// === Module 11808: PollInteractionUtils ===

// Module 11808 (PollInteractionUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  const obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(asyncRequireImpl(11809, dependencyMap.paths), "PollVotesActionSheet", obj);
};