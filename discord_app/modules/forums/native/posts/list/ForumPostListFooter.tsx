// discord_app/modules/forums/native/posts/list/ForumPostListFooter.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import GAME_INVITES_CHANNEL_NO_MIC_TAG_NAME from "../../../../game_invite_channels/GameInvitesChannelUtils.tsx";
import MaxForumPostReactions from "../reactions/ForumPostReactions.tsx";
import useTypingUserIds from "../../../../chat/useTypingUsersIds.tsx";
import num2Default from "../ForumPostMessageCount.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { AnalyticsObjects } from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = {
  footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start" },
  dot: null,
};
createCacheKey = {
  height: 4,
  width: 4,
  borderRadius: 2,
  backgroundColor: ThemesDefault.colors.BORDER_SUBTLE,
  marginHorizontal: 8,
};
createCacheKey[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/forums/native/posts/list/ForumPostListFooter.tsx");

export default function ForumPostListFooter(parentChannel) {
  ({ thread, firstMessage, hasUnreads } = parentChannel);
  const tmp = callback2();
  let obj = useTypingUserIds;
  const typingUserIds = obj.useTypingUserIds(thread.id);
  let tmp6Result = typingUserIds.length > 0;
  obj1 = GAME_INVITES_CHANNEL_NO_MIC_TAG_NAME;
  let isGameInvitesPost = obj1.useIsGameInvitesPost(thread);
  obj = { style: tmp.footer, children: null };
  const items = [callback(num2Default, { thread, hasUnreads }), , ,];
  if (isGameInvitesPost) {
    obj = { channel: null };
    obj[0] = thread;
    isGameInvitesPost = tmp8(tmp9(11827), obj);
  }
  items[1] = isGameInvitesPost;
  if (tmp6Result) {
    obj1 = { children: null };
    const obj2 = { style: null };
    obj2[0] = tmp.dot;
    const items1 = [tmp8(tmp7, obj2)];
    const obj3 = { thread: null, typingUserIds: null, hasUnreads: null };
    obj3[0] = thread;
    obj3[1] = typingUserIds;
    obj3[2] = hasUnreads;
    items1[1] = tmp8(tmp9(11820), obj3);
    obj1[0] = items1;
    tmp6Result = tmp6(closure_6, obj1);
  }
  items[2] = tmp6Result;
  let tmp8Result = null != firstMessage;
  if (tmp8Result) {
    const obj4 = { thread: null, firstMessage: null, parentChannel: null, locationAnalyticsObject: null };
    obj4[0] = thread;
    obj4[1] = firstMessage;
    obj4[2] = parentChannel.parentChannel;
    obj4[3] = AnalyticsObjects.FORUM_LIST_ITEM_FOOTER;
    tmp8Result = tmp8(MaxForumPostReactions.MostCommonForumPostReaction, obj4);
  }
  items[3] = tmp8Result;
  obj[1] = items;
  return closure_7(View, obj);
}
