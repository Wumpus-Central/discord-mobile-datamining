// === Module 11282: useVoteReactors ===

// Module 11282 (useVoteReactors)
import closure_3 from "reactionKey" /* 7365 */;
import { DEFAULT_NUM_REACTION_USERS as closure_4 } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/polls/useVoteReactors.tsx");

export default function useVoteReactors(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  let obj = channelId(reaction[2]);
  let items = [closure_3];
  const items1 = [channelId, messageId, reaction.emoji];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const reactions = closure_1_3.getReactions(channelId, messageId, reaction.emoji, closure_1_4, channelId(reaction[3]).ReactionTypes.VOTE);
    let items;
    if (reactions != null) {
      items = reactions.values();
    }
    if (items == null) {
      items = [];
    }
    return Array.from(items);
  }, items1, messageId(reaction[4]));
  obj = { reactors: stateFromStores, hasMore: null };
  const count_details = reaction.count_details;
  let num;
  if (count_details != null) {
    num = count_details.vote;
  }
  if (num == null) {
    num = 0;
  }
  obj[1] = num > stateFromStores.length;
  return obj;
};