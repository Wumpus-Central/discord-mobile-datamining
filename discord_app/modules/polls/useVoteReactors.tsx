// === Module 11209: useVoteReactors ===

// Module 11209 (useVoteReactors)
import MessageReactionsTypes from "MessageReactionsTypes" /* 7177 */;
import MessageReactionsStore from "MessageReactionsStore" /* 7176 */;

require = fn;
let closure_4 = fn(1074).DEFAULT_NUM_REACTION_USERS;
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/useVoteReactors.tsx");

export default function useVoteReactors(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  let items = [MessageReactionsStore];
  const items1 = [channelId, messageId, reaction.emoji];
  const stateFromStores = channelId(reaction[2]).useStateFromStores(items, () => {
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
  const obj2 = { reactors: stateFromStores, hasMore: null };
  const count_details = reaction.count_details;
  let num;
  if (count_details != null) {
    num = count_details.vote;
  }
  if (num == null) {
    num = 0;
  }
  obj2.hasMore = num > stateFromStores.length;
  return obj2;
};