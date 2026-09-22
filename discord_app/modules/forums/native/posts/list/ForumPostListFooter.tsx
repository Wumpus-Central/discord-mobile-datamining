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
const createStyles = fn(4757);
const obj2 = {
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
  const items = [hasOwnProperty(ForumPostMessageCountDefault, { thread, hasUnreads }), , ,];
  if (isGameInvitesPost) {
    const obj4 = { channel: thread };
    isGameInvitesPost = hasOwnProperty(GameInviteVoiceCountDefault, obj4);
  }
  items[1] = isGameInvitesPost;
  if (tmp6Result) {
    const obj5 = { children: null };
    const obj6 = { style: tmp.dot };
    const items1 = [hasOwnProperty(View, obj6)];
    const obj7 = { thread, typingUserIds, hasUnreads };
    items1[1] = hasOwnProperty(ForumPostTypingUsersDefault, obj7);
    obj5.children = items1;
    tmp6Result = React5(timestampProducer, obj5);
  }
  items[2] = tmp6Result;
  let tmp8Result = null != firstMessage;
  if (tmp8Result) {
    const obj8 = {
      thread,
      firstMessage,
      parentChannel: parentChannel.parentChannel,
      locationAnalyticsObject: AnalyticsObjects.FORUM_LIST_ITEM_FOOTER,
    };
    tmp8Result = hasOwnProperty(ForumPostReactions.MostCommonForumPostReaction, obj8);
  }
  items[3] = tmp8Result;
  obj3.children = items;
  return React5(View, obj3);
}
