// === Module 11193: ForumPostGridFooter ===

// Module 11193 (ForumPostGridFooter)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import MaxForumPostReactions from "MaxForumPostReactions" /* 10627 */;
import useTypingUserIds from "useTypingUserIds" /* 11151 */;
import num2Default from "num2" /* 11194 */;
import ForumPostTypingUsersDefault from "ForumPostTypingUsers" /* 11195 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { AnalyticsObjects } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { height: 4, width: 4, borderRadius: 2, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginHorizontal: 8 };
createCacheKey[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridFooter.tsx");

export default function ForumPostGridFooter(parentChannel) {
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
    const items1 = [callback(View, obj1), ];
    const obj2 = { thread: null, typingUserIds: null, hasUnreads: null };
    obj2[0] = thread;
    obj2[1] = typingUserIds;
    obj2[2] = hasUnreads;
    items1[1] = callback(ForumPostTypingUsersDefault, obj2);
    obj[0] = items1;
    tmp5Result = callback(closure_6, obj);
  }
  items[1] = tmp5Result;
  let tmp7Result = null != firstMessage;
  if (tmp7Result) {
    const obj3 = { thread: null, firstMessage: null, parentChannel: null, locationAnalyticsObject: null };
    obj3[0] = thread;
    obj3[1] = firstMessage;
    obj3[2] = parentChannel.parentChannel;
    obj3[3] = AnalyticsObjects.FORUM_GRID_ITEM_FOOTER;
    tmp7Result = callback(MaxForumPostReactions.MostCommonForumPostReaction, obj3);
  }
  items[2] = tmp7Result;
  obj[1] = items;
  return callback(View, obj);
};