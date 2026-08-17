// discord_app/modules/forums/native/posts/reactions/ForumPostReactions.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import useLoadForumUnreadCounts from "../../../ForumHooks.tsx";
import BurstReactionButton from "ForumPostReactionButton.tsx";
import useReactionPermissionsDefault from "../../../../messages/useReactionPermissions.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ reactionButtonContainer: { marginEnd: 8 }, actionBarReaction: { marginEnd: 4 }, container: { flexDirection: "row" }, mostCommonContainer: { marginLeft: "auto" } });
const result = require("set").fileFinishedImporting("modules/forums/native/posts/reactions/ForumPostReactions.tsx");

export const MaxForumPostReactions = function MaxForumPostReactions(thread) {
  thread = thread.thread;
  const reactionContainerStyle = thread.reactionContainerStyle;
  dependencyMap = undefined;
  ({ parentChannel, firstMessage, containerWidth, containerStyle } = thread);
  const tmp = callback2();
  dependencyMap = tmp;
  const disableReactionCreates = reactionContainerStyle(10517)(thread).disableReactionCreates;
  let num = 28;
  if (disableReactionCreates) {
    num = 0;
  }
  let obj = thread(8513);
  obj = { containerWidth: containerWidth - num, reactionEmojiWidth: 46, digitWidth: 7.5, message: firstMessage, parentChannel };
  const maxPossibleForumPostReactions = obj.useMaxPossibleForumPostReactions(obj);
  ({ reactions, additionalReactionCount } = maxPossibleForumPostReactions);
  if (0 !== reactions.length) {
    obj = { style: null, children: null };
    let items = [tmp.container, containerStyle];
    obj[0] = items;
    const items1 = [
      reactions.map((emoji) => {
          const obj = { containerStyle: items, thread, reaction: emoji, animateCount: false };
          items = [obj.reactionButtonContainer, reactionContainerStyle];
          let name = emoji.emoji.id;
          if (name == null) {
            name = emoji.emoji.name;
          }
          return closure_1_4(thread(obj[6]).ForumPostReactionButton, obj, name);
        }),
  ,

    ];
    let tmp8 = additionalReactionCount > 0;
    if (tmp8) {
      obj1 = { count: null, containerStyle: null, threadId: null };
      obj1[0] = additionalReactionCount;
      obj1[1] = reactionContainerStyle;
      obj1[2] = thread.id;
      tmp8 = callback(tmp3(10159).AdditionalReactionCount, obj1);
    }
    items1[1] = tmp8;
    let tmp10 = !disableReactionCreates;
    if (!disableReactionCreates) {
      const obj2 = { containerStyle: null, threadId: null };
      obj2[0] = reactionContainerStyle;
      obj2[1] = thread.id;
      tmp10 = callback(tmp3(10159).AddReactionButton, obj2);
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
  thread = thread.thread;
  const reactionContainerStyle = thread.reactionContainerStyle;
  dependencyMap = undefined;
  ({ parentChannel, firstMessage, containerStyle } = thread);
  const tmp = callback2();
  dependencyMap = tmp;
  const disableReactionCreates = reactionContainerStyle(10517)(thread).disableReactionCreates;
  let obj = thread(8513);
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
          const items = [actionBarReaction.actionBarReaction, reactionContainerStyle];
          let name = emoji.emoji.id;
          if (name == null) {
            name = emoji.emoji.name;
          }
          return closure_1_4(thread(actionBarReaction[6]).ForumPostReactionButton, { containerStyle: items, thread, reaction: emoji, animateCount: false }, name);
        }),
  ,

    ];
    let tmp8 = additionalNonUniqueReactionCount > 0;
    if (tmp8) {
      obj1 = { count: null, containerStyle: null, threadId: null };
      obj1[0] = additionalNonUniqueReactionCount;
      const items2 = [tmp.actionBarReaction, reactionContainerStyle];
      obj1[1] = items2;
      obj1[2] = thread.id;
      tmp8 = callback(tmp3(10159).AdditionalReactionCount, obj1);
    }
    items1[1] = tmp8;
    let tmp10 = !disableReactionCreates;
    if (!disableReactionCreates) {
      const obj2 = { containerStyle: null, threadId: null };
      const items3 = [tmp.actionBarReaction, reactionContainerStyle];
      obj2[0] = items3;
      obj2[1] = thread.id;
      tmp10 = callback(tmp3(10159).AddReactionButton, obj2);
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
  thread = thread.thread;
  ({ parentChannel, firstMessage, locationAnalyticsObject } = thread);
  const tmp = callback2();
  ({ disableReactionCreates, disableReactionUpdates } = useReactionPermissionsDefault(thread));
  let obj = useLoadForumUnreadCounts;
  const first = obj.useSomeForumPostReactions({ parentChannel, message: firstMessage }).reactions[0];
  if (null != first) {
    if (!disableReactionUpdates) {
      if (!disableReactionCreates) {
        obj = { containerStyle: null, thread: null, reaction: null, locationAnalyticsObject: null, animateCount: false };
        obj[0] = tmp.mostCommonContainer;
        obj[1] = thread;
        obj[2] = first;
        obj[3] = locationAnalyticsObject;
        let tmp7 = callback(BurstReactionButton.ForumPostReactionButton, obj);
      } else {
        tmp7 = null;
      }
      return tmp7;
    }
  }
  return null;
};