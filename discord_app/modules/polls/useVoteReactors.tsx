// === Module 11353: useVoteReactors ===

// Module 11353 (useVoteReactors)
import Constants from "Constants" /* 1085 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7259 */;
import MessageReactionsStore from "MessageReactionsStore" /* 7258 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channelId;

let closure_4 = Constants.DEFAULT_NUM_REACTION_USERS;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let reaction;
  const obj = channelId(reaction[3]);
  const cResult = obj.c(9);
  const tmp = channelId;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  reaction = channelId.reaction;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [MessageReactionsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === messageId) {
      let tmp6;
      let tmp7;
      if (cResult[3] === reaction.emoji) {
        tmp6 = cResult[4];
        tmp7 = cResult[5];
      }
      const tmpResult = tmp(reaction[5]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7, messageId(tmp2[6]));
      const count_details = reaction.count_details;
      let num2;
      if (count_details != null) {
        num2 = count_details.vote;
      }
      if (num2 == null) {
        num2 = 0;
      }
      if (cResult[6] === stateFromStores) {
        let tmp15;
        if (cResult[7] === num2 > stateFromStores.length) {
          tmp15 = cResult[8];
        }
        return tmp15;
      }
      const obj2 = { reactors: stateFromStores, hasMore: num2 > stateFromStores.length };
      cResult[6] = stateFromStores;
      cResult[7] = num2 > stateFromStores.length;
      cResult[8] = obj2;
      tmp15 = obj2;
    }
  }
  const fn = function c() {
    const reactions = MessageReactionsStore.getReactions(channelId, messageId, reaction.emoji, closure_4, MessageReactionsTypes.ReactionTypes.VOTE);
    let items;
    const _Array = Array;
    if (reactions != null) {
      items = reactions.values();
    }
    if (items == null) {
      items = [];
    }
    return from(items);
  };
  const items1 = [channelId, messageId, reaction.emoji];
  cResult[1] = channelId;
  cResult[2] = messageId;
  cResult[3] = reaction.emoji;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : ((channelId) => {
  let num;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  let items = [MessageReactionsStore];
  const items1 = [channelId, messageId, reaction.emoji];
  const obj = channelId(reaction[5]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const reactions = MessageReactionsStore.getReactions(channelId, messageId, reaction.emoji, closure_4, MessageReactionsTypes.ReactionTypes.VOTE);
    let items;
    const _Array = Array;
    if (reactions != null) {
      items = reactions.values();
    }
    if (items == null) {
      items = [];
    }
    return from(items);
  }, items1, messageId(reaction[6]));
  const count_details = reaction.count_details;
  const obj2 = { reactors: stateFromStores, hasMore: num > stateFromStores.length };
  num = undefined;
  if (count_details != null) {
    num = count_details.vote;
  }
  if (num == null) {
    num = 0;
  }
  return obj2;
});
const result = size.fileFinishedImporting("modules/polls/useVoteReactors.tsx");

export default tmp2;