// === Module 11723: useVoteReactors ===

// Module 11723 (useVoteReactors)
import MessageReactionsTypes from "MessageReactionsTypes" /* 7763 */;
import MessageReactionsStore from "MessageReactionsStore" /* 7762 */;

require = fn;
let closure_4 = fn(1074).DEFAULT_NUM_REACTION_USERS;
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/useVoteReactors.tsx");

export default function useVoteReactors(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  let obj = channelId(reaction[2]);
  let items = [MessageReactionsStore];
  const items1 = [channelId, messageId, reaction.emoji];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const reactions = MessageReactionsStore.getReactions(channelId, messageId, reaction.emoji, closure_4, MessageReactionsTypes.ReactionTypes.VOTE);
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
  obj.hasMore = num > stateFromStores.length;
  return obj;
};