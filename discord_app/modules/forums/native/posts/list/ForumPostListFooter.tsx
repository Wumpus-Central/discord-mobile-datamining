// === Module 12025: ForumPostListFooter ===

// Module 12025 (ForumPostListFooter)
import nativeDefault from "native" /* 576 */;
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 7272 */;
import ForumPostReactions from "ForumPostReactions" /* 11414 */;
import useTypingUsersIds from "useTypingUsersIds" /* 11966 */;
import ForumPostMessageCountDefault from "ForumPostMessageCount" /* 12018 */;
import ForumPostTypingUsersDefault from "ForumPostTypingUsers" /* 12019 */;
import GameInviteVoiceCountDefault from "GameInviteVoiceCount" /* 12026 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AnalyticsObjects = fn(1074).AnalyticsObjects;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
const createStyles = { footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start" }, dot: null };
let size = { height: 4, width: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: 8 };
createStyles.dot = size;
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/list/ForumPostListFooter.tsx");

export default function ForumPostListFooter(parentChannel) {
  ({ thread, firstMessage, hasUnreads } = parentChannel);
  const tmp = closure_8();
  let obj = useTypingUsersIds;
  const typingUserIds = obj.useTypingUserIds(thread.id);
  let tmp6Result = typingUserIds.length > 0;
  let obj1 = GameInvitesChannelUtils;
  let isGameInvitesPost = obj1.useIsGameInvitesPost(thread);
  obj = { style: tmp.footer, children: null };
  const items = [hasOwnProperty(ForumPostMessageCountDefault, { thread, hasUnreads }), , , ];
  if (isGameInvitesPost) {
    obj = { channel: thread };
    isGameInvitesPost = hasOwnProperty(GameInviteVoiceCountDefault, obj);
  }
  items[1] = isGameInvitesPost;
  if (tmp6Result) {
    obj1 = { children: null };
    const obj2 = { style: tmp.dot };
    const items1 = [hasOwnProperty(View, obj2), ];
    const obj3 = { thread, typingUserIds, hasUnreads };
    items1[1] = hasOwnProperty(ForumPostTypingUsersDefault, obj3);
    obj1.children = items1;
    tmp6Result = React5(timestampProducer, obj1);
  }
  items[2] = tmp6Result;
  let tmp8Result = null != firstMessage;
  if (tmp8Result) {
    const obj4 = { thread, firstMessage, parentChannel: parentChannel.parentChannel, locationAnalyticsObject: AnalyticsObjects.FORUM_LIST_ITEM_FOOTER };
    tmp8Result = hasOwnProperty(ForumPostReactions.MostCommonForumPostReaction, obj4);
  }
  items[3] = tmp8Result;
  obj.children = items;
  return React5(View, obj);
};