// discord_app/modules/polls/useVoteReactors.tsx
import MessageReactionsTypes from "../messages/MessageReactionsTypes.tsx";
import MessageReactionsStore from "../../stores/MessageReactionsStore.tsx";

require = fn;
let closure_4 = fn(1085).DEFAULT_NUM_REACTION_USERS;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/useVoteReactors.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      const cResult = channelId(reaction[3]).c(9);
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      reaction = channelId.reaction;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [MessageReactionsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        if (cResult[2] === messageId) {
          if (cResult[3] === reaction.emoji) {
            let tmp6 = cResult[4];
            let tmp7 = cResult[5];
          }
          const tmpResult = tmp(tmp2[5]);
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
            if (cResult[7] === tmp14) {
              let tmp15 = cResult[8];
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
        const reactions = MessageReactionsStore.getReactions(
          channelId,
          messageId,
          reaction.emoji,
          closure_4,
          MessageReactionsTypes.ReactionTypes.VOTE,
        );
        let items;
        if (reactions != null) {
          items = reactions.values();
        }
        if (items == null) {
          items = [];
        }
        return Array.from(items);
      };
      const items1 = [channelId, messageId, reaction.emoji];
      cResult[1] = channelId;
      cResult[2] = messageId;
      cResult[3] = reaction.emoji;
      cResult[4] = fn;
      cResult[5] = items1;
      tmp7 = items1;
      tmp6 = fn;
      const obj = channelId(reaction[3]);
      tmp = channelId;
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      const reaction = channelId.reaction;
      let items = [MessageReactionsStore];
      const items1 = [channelId, messageId, reaction.emoji];
      const stateFromStores = channelId(reaction[5]).useStateFromStores(
        items,
        () => {
          const reactions = MessageReactionsStore.getReactions(
            channelId,
            messageId,
            reaction.emoji,
            closure_4,
            MessageReactionsTypes.ReactionTypes.VOTE,
          );
          let items;
          if (reactions != null) {
            items = reactions.values();
          }
          if (items == null) {
            items = [];
          }
          return Array.from(items);
        },
        items1,
        messageId(reaction[6]),
      );
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
