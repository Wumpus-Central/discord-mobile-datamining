// === Module 14005: ForumPostListFooter ===

// Module 14005 (ForumPostListFooter)
import nativeDefault from "native" /* 575 */;
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 7593 */;
import ForumPostReactions from "ForumPostReactions" /* 11537 */;
import useTypingUsersIds from "useTypingUsersIds" /* 13947 */;
import ForumPostMessageCountDefault from "ForumPostMessageCount" /* 13998 */;
import ForumPostTypingUsersDefault from "ForumPostTypingUsers" /* 13999 */;
import GameInviteVoiceCountDefault from "GameInviteVoiceCount" /* 14006 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AnalyticsObjects = fn(1072).AnalyticsObjects;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5141);
const obj2 = { footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start" }, dot: null };
let size = { height: 4, width: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: 8 };
obj2.dot = size;
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/list/ForumPostListFooter.tsx");

export default function ForumPostListFooter(parentChannel) {
  ({ thread, firstMessage, hasUnreads } = parentChannel);
  const tmp = closure_8();
  const typingUserIds = useTypingUsersIds.useTypingUserIds(thread.id);
  let tmp6Result = typingUserIds.length > 0;
  let isGameInvitesPost = GameInvitesChannelUtils.useIsGameInvitesPost(thread);
  const obj3 = { style: tmp.footer, children: null };
  items = [hasOwnProperty(ForumPostMessageCountDefault, { thread, hasUnreads }), , , ];
  if (isGameInvitesPost) {
    const obj4 = { channel: thread };
    isGameInvitesPost = hasOwnProperty(GameInviteVoiceCountDefault, obj4);
  }
  items[1] = isGameInvitesPost;
  if (tmp6Result) {
    const obj5 = { children: null };
    const obj6 = { style: tmp.dot };
    const items1 = [hasOwnProperty(View, obj6), ];
    const obj7 = { thread, typingUserIds, hasUnreads };
    items1[1] = hasOwnProperty(ForumPostTypingUsersDefault, obj7);
    obj5.children = items1;
    tmp6Result = metroImportDefault(timestampProducer, obj5);
  }
  items[2] = tmp6Result;
  let tmp8Result = null != firstMessage;
  if (tmp8Result) {
    const obj8 = { thread, firstMessage, parentChannel: parentChannel.parentChannel, locationAnalyticsObject: AnalyticsObjects.FORUM_LIST_ITEM_FOOTER };
    tmp8Result = hasOwnProperty(ForumPostReactions.MostCommonForumPostReaction, obj8);
  }
  items[3] = tmp8Result;
  obj3.children = items;
  return metroImportDefault(View, obj3);
};