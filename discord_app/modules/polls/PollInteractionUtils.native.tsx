// discord_app/modules/polls/PollInteractionUtils.native.tsx
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  const obj = {
    channelId: message.channel_id,
    messageId: message.id,
    initialAnswerId: initialAnswerId.initialAnswerId,
  };
  obj.openLazy(asyncRequireImpl(11716, dependencyMap.paths), "PollVotesActionSheet", obj);
};
