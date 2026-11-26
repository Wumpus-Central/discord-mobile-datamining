// === Module 12228: PollInteractionUtils ===

// Module 12228 (PollInteractionUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12229, dependencyMap.paths), "PollVotesActionSheet", { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId });
}