// discord_app/modules/forums/native/posts/list/ForumPostListFooter.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import MaxForumPostReactions from "../reactions/ForumPostReactions.tsx";
import useTypingUserIds from "../../../../chat/useTypingUsersIds.tsx";
import num2Default from "../ForumPostMessageCount.tsx";
import ForumPostTypingUsersDefault from "../ForumPostTypingUsers.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { AnalyticsObjects } from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start" }, dot: null };
createCacheKey = { height: 4, width: 4, borderRadius: 2, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginHorizontal: 8 };
createCacheKey[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/forums/native/posts/list/ForumPostListFooter.tsx");

export default function ForumPostListFooter(parentChannel) {
  ({ thread, firstMessage, hasUnreads } = parentChannel);
  const tmp = callback2();
  let obj = useTypingUserIds;
  const typingUserIds = obj.useTypingUserIds(thread.id);
  let tmp5Result = typingUserIds.length > 0;
  obj = { style: tmp.footer, children: null };
  const items = [callback(num2Default, { thread, hasUnreads }), , ];
  if (tmp5Result) {
    obj = { children: null };
    obj1 = { style: null };
    obj1[0] = tmp.dot;
    const items1 = [tmp7(tmp6, obj1), ];
    const obj2 = { thread: null, typingUserIds: null, hasUnreads: null };
    obj2[0] = thread;
    obj2[1] = typingUserIds;
    obj2[2] = hasUnreads;
    items1[1] = tmp7(ForumPostTypingUsersDefault, obj2);
    obj[0] = items1;
    tmp5Result = tmp5(closure_6, obj);
  }
  items[1] = tmp5Result;
  let tmp7Result = null != firstMessage;
  if (tmp7Result) {
    const obj3 = { thread: null, firstMessage: null, parentChannel: null, locationAnalyticsObject: null };
    obj3[0] = thread;
    obj3[1] = firstMessage;
    obj3[2] = parentChannel.parentChannel;
    obj3[3] = AnalyticsObjects.FORUM_LIST_ITEM_FOOTER;
    tmp7Result = tmp7(MaxForumPostReactions.MostCommonForumPostReaction, obj3);
  }
  items[2] = tmp7Result;
  obj[1] = items;
  return closure_7(View, obj);
};