import { useTypingUserIds } from "../../../../chat/useTypingUsersIds.tsx";
import { num2 } from "../ForumPostMessageCount.tsx";
import { ForumPostTypingUsers } from "../ForumPostTypingUsers.tsx";
import { MaxForumPostReactions } from "../reactions/ForumPostReactions.tsx";
// discord_app/modules/forums/native/posts/list/ForumPostListFooter.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { AnalyticsObjects } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
const require = arg1;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start" }, dot: null };
createCacheKey = { height: 4, width: 4, borderRadius: 2, backgroundColor: require("Themes").colors.BORDER_SUBTLE, marginHorizontal: 8 };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("modules/forums/native/posts/list/ForumPostListFooter.tsx");

export default function ForumPostListFooter(parentChannel) {
  let firstMessage;
  let hasUnreads;
  let thread;
  ({ thread, firstMessage, hasUnreads } = parentChannel);
  const tmp = createCacheKey();
  let obj = useTypingUserIds /* useTypingUserIds */;
  const typingUserIds = obj.useTypingUserIds(thread.id);
  let tmp5Result = typingUserIds.length > 0;
  obj = { style: tmp.footer, children: null };
  const items = [callback(num2, { thread, hasUnreads }), , ];
  if (tmp5Result) {
    obj = { children: null };
    const obj1 = { style: null };
    obj1[0] = tmp.dot;
    const items1 = [tmp7(tmp6, obj1), ];
    const obj2 = { thread: null, typingUserIds: null, hasUnreads: null };
    obj2[0] = thread;
    obj2[1] = typingUserIds;
    obj2[2] = hasUnreads;
    items1[1] = tmp7(ForumPostTypingUsers, obj2);
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
    tmp7Result = tmp7(MaxForumPostReactions /* MaxForumPostReactions */.MostCommonForumPostReaction, obj3);
  }
  items[2] = tmp7Result;
  obj[1] = items;
  return closure_7(View, obj);
};