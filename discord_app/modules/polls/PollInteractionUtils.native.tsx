// === Module 11535: PollInteractionUtils ===

// Module 11535 (PollInteractionUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11536, dependencyMap.paths), "PollVotesActionSheet", { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId });
};