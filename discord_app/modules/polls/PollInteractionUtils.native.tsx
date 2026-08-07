// discord_app/modules/polls/PollInteractionUtils.native.tsx
import { asyncRequireImpl } from "../../../_runtime/01988_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(asyncRequireImpl(10218, dependencyMap.paths), "PollVotesActionSheet", obj);
};