// discord_app/modules/forums/native/posts/list/ForumPostListFooter.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import GameInvitesChannelUtils from "../../../../game_invite_channels/GameInvitesChannelUtils.tsx";
import ForumPostReactions from "../reactions/ForumPostReactions.tsx";
import useTypingUsersIds from "../../../../chat/useTypingUsersIds.tsx";
import ForumPostMessageCountDefault from "../ForumPostMessageCount.tsx";
import ForumPostTypingUsersDefault from "../ForumPostTypingUsers.tsx";
import GameInviteVoiceCountDefault from "../../../../game_invite_channels/native/GameInviteVoiceCount.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const AnalyticsObjects = fn(1074).AnalyticsObjects;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
const createStyles = {
  footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start" },
  dot: null,
};
let size = {
  height: 4,
  width: 4,
  borderRadius: 2,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  marginHorizontal: 8,
};
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
  const items = [hasOwnProperty(ForumPostMessageCountDefault, { thread, hasUnreads }), , ,];
  if (isGameInvitesPost) {
    obj = { channel: thread };
    isGameInvitesPost = hasOwnProperty(GameInviteVoiceCountDefault, obj);
  }
  items[1] = isGameInvitesPost;
  if (tmp6Result) {
    obj1 = { children: null };
    const obj2 = { style: tmp.dot };
    const items1 = [hasOwnProperty(View, obj2)];
    const obj3 = { thread, typingUserIds, hasUnreads };
    items1[1] = hasOwnProperty(ForumPostTypingUsersDefault, obj3);
    obj1.children = items1;
    tmp6Result = React5(timestampProducer, obj1);
  }
  items[2] = tmp6Result;
  let tmp8Result = null != firstMessage;
  if (tmp8Result) {
    const obj4 = {
      thread,
      firstMessage,
      parentChannel: parentChannel.parentChannel,
      locationAnalyticsObject: AnalyticsObjects.FORUM_LIST_ITEM_FOOTER,
    };
    tmp8Result = hasOwnProperty(ForumPostReactions.MostCommonForumPostReaction, obj4);
  }
  items[3] = tmp8Result;
  obj.children = items;
  return React5(View, obj);
}
