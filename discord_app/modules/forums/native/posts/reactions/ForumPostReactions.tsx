// discord_app/modules/forums/native/posts/reactions/ForumPostReactions.tsx
import ForumHooks from "../../../ForumHooks.tsx";
import ForumPostReactionButton from "ForumPostReactionButton.tsx";
import useReactionPermissionsDefault from "../../../../messages/useReactionPermissions.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4638);
let closure_6 = createStyles.createStyles({
  reactionButtonContainer: { marginEnd: 8 },
  actionBarReaction: { marginEnd: 4 },
  container: { flexDirection: "row" },
  mostCommonContainer: { marginLeft: "auto" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/reactions/ForumPostReactions.tsx");

export const MaxForumPostReactions = function MaxForumPostReactions(thread) {
  thread = thread.thread;
  const reactionContainerStyle = thread.reactionContainerStyle;
  ({ parentChannel, firstMessage, containerWidth, containerStyle } = thread);
  const tmp = closure_6();
  dependencyMap = tmp;
  const disableReactionCreates = reactionContainerStyle(11460)(thread).disableReactionCreates;
  let num = 28;
  if (disableReactionCreates) {
    num = 0;
  }
  const maxPossibleForumPostReactions = thread(8001).useMaxPossibleForumPostReactions({
    containerWidth: containerWidth - num,
    reactionEmojiWidth: 46,
    digitWidth: 7.5,
    message: firstMessage,
    parentChannel,
  });
  ({ reactions, additionalReactionCount } = maxPossibleForumPostReactions);
  if (0 !== reactions.length) {
    const obj3 = { style: null, children: null };
    let items = [tmp.container, containerStyle];
    obj3.style = items;
    const items1 = [
      reactions.map((reaction) => {
        const obj = { containerStyle: null, thread, reaction, animateCount: false };
        const items = [closure_2.reactionButtonContainer, reactionContainerStyle];
        obj.containerStyle = items;
        let name = reaction.emoji.id;
        if (name == null) {
          name = reaction.emoji.name;
        }
        return React4(ForumPostReactionButton.ForumPostReactionButton, obj, name);
      }),
      ,
    ];
    let tmp8 = additionalReactionCount > 0;
    if (tmp8) {
      const obj4 = { count: additionalReactionCount, containerStyle: reactionContainerStyle, threadId: thread.id };
      tmp8 = closure_4(tmp3(10357).AdditionalReactionCount, obj4);
    }
    items1[1] = tmp8;
    let tmp10 = !disableReactionCreates;
    if (!disableReactionCreates) {
      const obj5 = { containerStyle: reactionContainerStyle, threadId: thread.id };
      tmp10 = closure_4(tmp3(10357).AddReactionButton, obj5);
    }
    items1[2] = tmp10;
    obj3.children = items1;
    let tmp6Result = closure_5(View, obj3);
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
};
export const ForumPostActionBarReactions = function ForumPostActionBarReactions(thread) {
  thread = thread.thread;
  const reactionContainerStyle = thread.reactionContainerStyle;
  ({ parentChannel, firstMessage, containerStyle } = thread);
  const tmp = closure_6();
  dependencyMap = tmp;
  const disableReactionCreates = reactionContainerStyle(11460)(thread).disableReactionCreates;
  const obj2 = { message: firstMessage, parentChannel, sorted: false, count: null };
  let num = 2;
  if (disableReactionCreates) {
    num = 3;
  }
  obj2.count = num;
  const someForumPostReactions = thread(8001).useSomeForumPostReactions(obj2);
  ({ reactions, additionalNonUniqueReactionCount } = someForumPostReactions);
  if (0 !== reactions.length) {
    const obj3 = { style: null, children: null };
    let items = [tmp.container, containerStyle];
    obj3.style = items;
    const items1 = [
      reactions.map((reaction) => {
        const obj = { containerStyle: null, thread, reaction, animateCount: false };
        const items = [actionBarReaction.actionBarReaction, reactionContainerStyle];
        obj.containerStyle = items;
        let name = reaction.emoji.id;
        if (name == null) {
          name = reaction.emoji.name;
        }
        return React4(ForumPostReactionButton.ForumPostReactionButton, obj, name);
      }),
      ,
    ];
    let tmp8 = additionalNonUniqueReactionCount > 0;
    if (tmp8) {
      const obj4 = { count: additionalNonUniqueReactionCount, containerStyle: null, threadId: null };
      const items2 = [tmp.actionBarReaction, reactionContainerStyle];
      obj4.containerStyle = items2;
      obj4.threadId = thread.id;
      tmp8 = closure_4(tmp3(10357).AdditionalReactionCount, obj4);
    }
    items1[1] = tmp8;
    let tmp10 = !disableReactionCreates;
    if (!disableReactionCreates) {
      const obj5 = { containerStyle: null, threadId: null };
      const items3 = [tmp.actionBarReaction, reactionContainerStyle];
      obj5.containerStyle = items3;
      obj5.threadId = thread.id;
      tmp10 = closure_4(tmp3(10357).AddReactionButton, obj5);
    }
    items1[2] = tmp10;
    obj3.children = items1;
    let tmp6Result = closure_5(View, obj3);
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
};
export const MostCommonForumPostReaction = function MostCommonForumPostReaction(thread) {
  thread = thread.thread;
  ({ parentChannel, firstMessage, locationAnalyticsObject } = thread);
  const tmp = closure_6();
  ({ disableReactionCreates, disableReactionUpdates } = useReactionPermissionsDefault(thread));
  const tmp3 = useReactionPermissionsDefault(thread);
  const first = ForumHooks.useSomeForumPostReactions({ parentChannel, message: firstMessage }).reactions[0];
  if (null != first) {
    if (!disableReactionUpdates) {
      if (!disableReactionCreates) {
        const obj2 = {
          containerStyle: tmp.mostCommonContainer,
          thread,
          reaction: first,
          locationAnalyticsObject,
          animateCount: false,
        };
        let tmp7 = React4(ForumPostReactionButton.ForumPostReactionButton, obj2);
      } else {
        tmp7 = null;
      }
      return tmp7;
    }
  }
  return null;
};
