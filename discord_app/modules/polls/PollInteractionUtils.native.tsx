// === Module 12746: PollInteractionUtils ===

// Module 12746 (PollInteractionUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12747, dependencyMap.paths), "PollVotesActionSheet", { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId });
}