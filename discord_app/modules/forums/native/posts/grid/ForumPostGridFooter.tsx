// === Module 14039: ForumPostGridFooter ===

// Module 14039 (ForumPostGridFooter)
import nativeDefault from "native" /* 575 */;
import ForumPostReactions from "ForumPostReactions" /* 11499 */;
import useTypingUsersIds from "useTypingUsersIds" /* 13988 */;
import ForumPostMessageCountDefault from "ForumPostMessageCount" /* 14040 */;
import ForumPostTypingUsersDefault from "ForumPostTypingUsers" /* 14041 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AnalyticsObjects = fn(1072).AnalyticsObjects;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5142);
let obj2 = { footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", marginTop: 12 }, dot: null };
let size = { height: 4, width: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: 8 };
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
  items = [hasOwnProperty(ForumPostMessageCountDefault, { thread, hasUnreads }), , ];
  if (tmp5Result) {
    const obj3 = { children: null };
    const obj4 = { style: tmp.dot };
    const items1 = [hasOwnProperty(View, obj4), ];
    const obj5 = { thread, typingUserIds, hasUnreads };
    items1[1] = hasOwnProperty(ForumPostTypingUsersDefault, obj5);
    obj3.children = items1;
    tmp5Result = metroImportDefault(timestampProducer, obj3);
  }
  items[1] = tmp5Result;
  let tmp7Result = null != firstMessage;
  if (tmp7Result) {
    const obj6 = { thread, firstMessage, parentChannel: parentChannel.parentChannel, locationAnalyticsObject: AnalyticsObjects.FORUM_GRID_ITEM_FOOTER };
    tmp7Result = hasOwnProperty(ForumPostReactions.MostCommonForumPostReaction, obj6);
  }
  items[2] = tmp7Result;
  obj2.children = items;
  return metroImportDefault(View, obj2);
};