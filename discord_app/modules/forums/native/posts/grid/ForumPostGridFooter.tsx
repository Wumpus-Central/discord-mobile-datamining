// === Module 12017: ForumPostGridFooter ===

// Module 12017 (ForumPostGridFooter)
import nativeDefault from "native" /* 576 */;
import ForumPostReactions from "ForumPostReactions" /* 11414 */;
import useTypingUsersIds from "useTypingUsersIds" /* 11966 */;
import ForumPostMessageCountDefault from "ForumPostMessageCount" /* 12018 */;
import ForumPostTypingUsersDefault from "ForumPostTypingUsers" /* 12019 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AnalyticsObjects = fn(1074).AnalyticsObjects;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
const createStyles = { footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", marginTop: 12 }, dot: null };
let size = { height: 4, width: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: 8 };
createStyles.dot = size;
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridFooter.tsx");

export default function ForumPostGridFooter(parentChannel) {
  ({ thread, firstMessage, hasUnreads } = parentChannel);
  const tmp = closure_8();
  let obj = useTypingUsersIds;
  const typingUserIds = obj.useTypingUserIds(thread.id);
  let tmp5Result = typingUserIds.length > 0;
  obj = { style: tmp.footer, children: null };
  const items = [hasOwnProperty(ForumPostMessageCountDefault, { thread, hasUnreads }), , ];
  if (tmp5Result) {
    obj = { children: null };
    const obj1 = { style: tmp.dot };
    const items1 = [hasOwnProperty(View, obj1), ];
    const obj2 = { thread, typingUserIds, hasUnreads };
    items1[1] = hasOwnProperty(ForumPostTypingUsersDefault, obj2);
    obj.children = items1;
    tmp5Result = React5(timestampProducer, obj);
  }
  items[1] = tmp5Result;
  let tmp7Result = null != firstMessage;
  if (tmp7Result) {
    const obj3 = { thread, firstMessage, parentChannel: parentChannel.parentChannel, locationAnalyticsObject: AnalyticsObjects.FORUM_GRID_ITEM_FOOTER };
    tmp7Result = hasOwnProperty(ForumPostReactions.MostCommonForumPostReaction, obj3);
  }
  items[2] = tmp7Result;
  obj.children = items;
  return React5(View, obj);
};