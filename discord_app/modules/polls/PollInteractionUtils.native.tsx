// === Module 10884: showVotesForAnswer ===

// Module 10884 (showVotesForAnswer)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const result = obj132.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  const obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(asyncRequireImpl(10885, dependencyMap.paths), "PollVotesActionSheet", obj);
};