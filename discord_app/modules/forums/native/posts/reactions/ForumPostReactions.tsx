// discord_app/modules/forums/native/posts/reactions/ForumPostReactions.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ reactionButtonContainer: { marginEnd: 8 }, actionBarReaction: { marginEnd: 4 }, container: { flexDirection: "row" }, mostCommonContainer: { marginLeft: "auto" } });
const result = require("jsxProd").fileFinishedImporting("modules/forums/native/posts/reactions/ForumPostReactions.tsx");

export const MaxForumPostReactions = function MaxForumPostReactions(thread) {
  let additionalReactionCount;
  let containerStyle;
  let containerWidth;
  let firstMessage;
  let parentChannel;
  let reactions;
  thread = thread.thread;
  const reactionContainerStyle = thread.reactionContainerStyle;
  let dependencyMap;
  ({ parentChannel, firstMessage, containerWidth, containerStyle } = thread);
  const tmp = callback2();
  dependencyMap = tmp;
  const disableReactionCreates = reactionContainerStyle(10113)(thread).disableReactionCreates;
  let num = 28;
  if (disableReactionCreates) {
    num = 0;
  }
  let obj = thread(8214);
  obj = { containerWidth: containerWidth - num, reactionEmojiWidth: 46, digitWidth: 7.5, message: firstMessage, parentChannel };
  const maxPossibleForumPostReactions = obj.useMaxPossibleForumPostReactions(obj);
  ({ reactions, additionalReactionCount } = maxPossibleForumPostReactions);
  if (0 !== reactions.length) {
    obj = { style: null, children: null };
    let items = [tmp.container, containerStyle];
    obj[0] = items;
    const items1 = [
      reactions.map((emoji) => {
          const items = [_undefined.reactionButtonContainer, reactionContainerStyle];
          let name = emoji.emoji.id;
          if (name == null) {
            name = emoji.emoji.name;
          }
          return outer1_4(thread(_undefined[6]).ForumPostReactionButton, { containerStyle: items, thread, reaction: emoji, animateCount: false }, name);
        }),
  ,

    ];
    let tmp8 = additionalReactionCount > 0;
    if (tmp8) {
      const obj1 = { count: null, containerStyle: null, threadId: null };
      obj1[0] = additionalReactionCount;
      obj1[1] = reactionContainerStyle;
      obj1[2] = thread.id;
      tmp8 = callback(tmp3(9814).AdditionalReactionCount, obj1);
    }
    items1[1] = tmp8;
    let tmp10 = !disableReactionCreates;
    if (!disableReactionCreates) {
      const obj2 = { containerStyle: null, threadId: null };
      obj2[0] = reactionContainerStyle;
      obj2[1] = thread.id;
      tmp10 = callback(tmp3(9814).AddReactionButton, obj2);
    }
    items1[2] = tmp10;
    obj[1] = items1;
    let tmp6Result = closure_5(View, obj);
    const tmp6 = closure_5;
    const tmp7 = View;
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
};
export const ForumPostActionBarReactions = function ForumPostActionBarReactions(thread) {
  let additionalNonUniqueReactionCount;
  let containerStyle;
  let firstMessage;
  let parentChannel;
  let reactions;
  thread = thread.thread;
  const reactionContainerStyle = thread.reactionContainerStyle;
  let dependencyMap;
  ({ parentChannel, firstMessage, containerStyle } = thread);
  const tmp = callback2();
  dependencyMap = tmp;
  const disableReactionCreates = reactionContainerStyle(10113)(thread).disableReactionCreates;
  let obj = thread(8214);
  obj = { message: firstMessage, parentChannel, sorted: false, count: null };
  let num = 2;
  if (disableReactionCreates) {
    num = 3;
  }
  obj[3] = num;
  const someForumPostReactions = obj.useSomeForumPostReactions(obj);
  ({ reactions, additionalNonUniqueReactionCount } = someForumPostReactions);
  if (0 !== reactions.length) {
    obj = { style: null, children: null };
    let items = [tmp.container, containerStyle];
    obj[0] = items;
    const items1 = [
      reactions.map((emoji) => {
          const items = [_undefined.actionBarReaction, reactionContainerStyle];
          let name = emoji.emoji.id;
          if (name == null) {
            name = emoji.emoji.name;
          }
          return outer1_4(thread(_undefined[6]).ForumPostReactionButton, { containerStyle: items, thread, reaction: emoji, animateCount: false }, name);
        }),
  ,

    ];
    let tmp8 = additionalNonUniqueReactionCount > 0;
    if (tmp8) {
      const obj1 = { count: null, containerStyle: null, threadId: null };
      obj1[0] = additionalNonUniqueReactionCount;
      const items2 = [tmp.actionBarReaction, reactionContainerStyle];
      obj1[1] = items2;
      obj1[2] = thread.id;
      tmp8 = callback(tmp3(9814).AdditionalReactionCount, obj1);
    }
    items1[1] = tmp8;
    let tmp10 = !disableReactionCreates;
    if (!disableReactionCreates) {
      const obj2 = { containerStyle: null, threadId: null };
      const items3 = [tmp.actionBarReaction, reactionContainerStyle];
      obj2[0] = items3;
      obj2[1] = thread.id;
      tmp10 = callback(tmp3(9814).AddReactionButton, obj2);
    }
    items1[2] = tmp10;
    obj[1] = items1;
    let tmp6Result = closure_5(View, obj);
    const tmp6 = closure_5;
    const tmp7 = View;
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
};
export const MostCommonForumPostReaction = function MostCommonForumPostReaction(thread) {
  let disableReactionCreates;
  let disableReactionUpdates;
  let firstMessage;
  let locationAnalyticsObject;
  let parentChannel;
  thread = thread.thread;
  ({ parentChannel, firstMessage, locationAnalyticsObject } = thread);
  const tmp = callback2();
  ({ disableReactionCreates, disableReactionUpdates } = importDefault(10113)(thread));
  let obj = require(8214) /* useLoadForumUnreadCounts */;
  const first = obj.useSomeForumPostReactions({ parentChannel, message: firstMessage }).reactions[0];
  if (null != first) {
    if (!disableReactionUpdates) {
      if (!disableReactionCreates) {
        obj = { containerStyle: null, thread: null, reaction: null, locationAnalyticsObject: null, animateCount: false };
        obj[0] = tmp.mostCommonContainer;
        obj[1] = thread;
        obj[2] = first;
        obj[3] = locationAnalyticsObject;
        let tmp7 = callback(require(9814) /* BurstReactionButton */.ForumPostReactionButton, obj);
      } else {
        tmp7 = null;
      }
      return tmp7;
    }
  }
  return null;
};