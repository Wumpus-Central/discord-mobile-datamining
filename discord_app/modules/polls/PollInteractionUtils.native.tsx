// discord_app/modules/polls/PollInteractionUtils.native.tsx
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(11359, dependencyMap.paths), "PollVotesActionSheet", obj2);
};
