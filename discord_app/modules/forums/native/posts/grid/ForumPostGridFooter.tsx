// discord_app/modules/forums/native/posts/grid/ForumPostGridFooter.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ForumPostReactions from "../reactions/ForumPostReactions.tsx";
import useTypingUsersIds from "../../../../chat/useTypingUsersIds.tsx";
import ForumPostMessageCountDefault from "../ForumPostMessageCount.tsx";
import ForumPostTypingUsersDefault from "../ForumPostTypingUsers.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const AnalyticsObjects = fn(1074).AnalyticsObjects;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", marginTop: 12 },
  dot: null,
};
let size = {
  height: 4,
  width: 4,
  borderRadius: 2,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  marginHorizontal: 8,
};
obj2.dot = size;
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridFooter.tsx");

export default function ForumPostGridFooter(parentChannel) {
  ({ thread, firstMessage, hasUnreads } = parentChannel);
  const tmp = closure_8();
  const typingUserIds = useTypingUsersIds.useTypingUserIds(thread.id);
  let tmp5Result = typingUserIds.length > 0;
  const obj2 = { style: tmp.footer, children: null };
  const items = [hasOwnProperty(ForumPostMessageCountDefault, { thread, hasUnreads }), ,];
  if (tmp5Result) {
    const obj3 = { children: null };
    const obj4 = { style: tmp.dot };
    const items1 = [hasOwnProperty(View, obj4)];
    const obj5 = { thread, typingUserIds, hasUnreads };
    items1[1] = hasOwnProperty(ForumPostTypingUsersDefault, obj5);
    obj3.children = items1;
    tmp5Result = React5(timestampProducer, obj3);
  }
  items[1] = tmp5Result;
  let tmp7Result = null != firstMessage;
  if (tmp7Result) {
    const obj6 = {
      thread,
      firstMessage,
      parentChannel: parentChannel.parentChannel,
      locationAnalyticsObject: AnalyticsObjects.FORUM_GRID_ITEM_FOOTER,
    };
    tmp7Result = hasOwnProperty(ForumPostReactions.MostCommonForumPostReaction, obj6);
  }
  items[2] = tmp7Result;
  obj2.children = items;
  return React5(View, obj2);
}
