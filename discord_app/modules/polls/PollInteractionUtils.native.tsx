// discord_app/modules/polls/PollInteractionUtils.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";

const result = obj132.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  const obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(asyncRequireImpl(10885, dependencyMap.paths), "PollVotesActionSheet", obj);
};