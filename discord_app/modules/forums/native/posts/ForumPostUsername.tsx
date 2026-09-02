// === Module 11800: ForumPostUsername ===

// Module 11800 (ForumPostUsername)
import noopAll from "noop" /* 19 */;
import set from "set" /* 1396 */;
import useLoadForumUnreadCounts from "useLoadForumUnreadCounts" /* 7638 */;
import useChatWidthDefault from "useChatWidth" /* 11346 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import { useForumChannelStore } from "set" /* 11796 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function ForumPostUsername(arg0) {
  ({ thread, authorId, authorName, authorColor, authorColors } = arg0);
  ({ containerStyle, roleDotStyle, textStyle, suffix, hasUnreads } = arg0);
  const tmp = callback2();
  let num = 158;
  if (useForumChannelStore(thread.parent_id).layoutType === set.ForumLayout.GRID) {
    num = 72;
  }
  const diff = useChatWidthDefault() - tmp2(11801).GRID_HORIZONTAL_PADDING - num;
  let tmp2Result = tmp2(586);
  const items = [closure_4];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => roleStyle.roleStyle);
  if ("username" === stateFromStores) {
    if (null != authorColor) {
      let obj = { color: null };
      obj[0] = authorColor;
    }
    tmp2Result = tmp2(7879);
    const processColorStringsArray = tmp2Result.useProcessColorStringsArray(authorColors);
    const tmp2Result1 = tmp2(7879);
    const useIsRoleStyleAndRoleColorsEligibleForERC = tmp2Result1.useIsRoleStyleAndRoleColorsEligibleForERC;
    const guild_id = thread.guild_id;
    let tmp19Result = null;
    if (null != authorName) {
      obj = { style: null, accessibilityRole: "button", children: null };
      obj1 = { maxWidth: null };
      obj1[0] = diff;
      const merged = Object.assign(tmp.authorContainer);
      const items1 = [obj1, tmp9, containerStyle];
      obj[0] = items1;
      let tmp23 = "dot" === stateFromStores && null != authorColor;
      if (tmp23) {
        const obj2 = { style: null, children: null };
        const items2 = [tmp.roleDotContainer, roleDotStyle];
        obj2[0] = items2;
        const obj3 = { size: "small", color: null, colors: null };
        obj3[1] = authorColor;
        obj3[2] = authorColors;
        obj2[1] = callback(tmp2(1296).RoleDot, obj3);
        tmp23 = callback(tmp20, obj2);
      }
      const items3 = [tmp23, ];
      let tmp25;
      if (tmp17) {
        tmp25 = processColorStringsArray;
      }
      const obj4 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", gradientColors: null, lineClamp: 1, style: null, children: null };
      obj4[2] = tmp25;
      const items4 = [{}, textStyle, tmp.authorName];
      obj4[4] = items4;
      const items5 = [authorName, suffix];
      obj4[5] = items5;
      items3[1] = closure_7(tmp2(4474).Text, obj4);
      obj[2] = items3;
      tmp19Result = tmp19(tmp20, obj);
    }
    return tmp19Result;
  }
}
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ authorContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginEnd: 8 }, roleDotContainer: { alignItems: "center", justifyContent: "center", marginEnd: 2, marginBottom: 4 }, authorName: { overflow: "hidden", flexWrap: "nowrap" } });
const result = require("set").fileFinishedImporting("modules/forums/native/posts/ForumPostUsername.tsx");

export const ForumPostAuthor = function ForumPostAuthor(thread) {
  thread = thread.thread;
  ({ hasUnreads, suffix, containerStyle, roleDotStyle, textStyle } = thread);
  let obj = useLoadForumUnreadCounts;
  const forumPostAuthor = obj.useForumPostAuthor(thread);
  ({ user, author } = forumPostAuthor);
  let nick;
  if (author != null) {
    nick = author.nick;
  }
  if (nick == null) {
    let username;
    if (user != null) {
      username = user.username;
    }
    nick = username;
  }
  if (author != null) {
    const colorString = author.colorString;
  }
  if (author != null) {
    const colorStrings = author.colorStrings;
  }
  let tmp5Result = null;
  if (null != user) {
    obj = { thread: null, authorId: null, authorName: null, authorColor: null, authorColors: null, suffix: null, containerStyle: null, roleDotStyle: null, textStyle: null, hasUnreads: null };
    obj[0] = thread;
    let id;
    if (user != null) {
      id = user.id;
    }
    obj[1] = id;
    obj[2] = nick;
    obj[3] = colorString;
    obj[4] = colorStrings;
    obj[5] = suffix;
    obj[6] = containerStyle;
    obj[7] = roleDotStyle;
    obj[8] = textStyle;
    obj[9] = hasUnreads;
    tmp5Result = closure_6(ForumPostUsername, obj);
    const tmp5 = closure_6;
    const tmp6 = ForumPostUsername;
  }
  return tmp5Result;
};
export const ForumPostMessageAuthor = function ForumPostMessageAuthor(thread) {
  thread = thread.thread;
  ({ message, hasUnreads, suffix, containerStyle, roleDotStyle, textStyle } = thread);
  let obj = useLoadForumUnreadCounts;
  const forumPostMessageAuthor = obj.useForumPostMessageAuthor(message, thread);
  const user = forumPostMessageAuthor.user;
  obj = { thread, authorId: null, authorName: null, authorColor: null, authorColors: null, suffix: null, containerStyle: null, roleDotStyle: null, textStyle: null, hasUnreads: null };
  let id;
  ({ authorName, authorColor, authorColors } = forumPostMessageAuthor);
  if (user != null) {
    id = user.id;
  }
  obj[1] = id;
  obj[2] = authorName;
  obj[3] = authorColor;
  obj[4] = authorColors;
  obj[5] = suffix;
  obj[6] = containerStyle;
  obj[7] = roleDotStyle;
  obj[8] = textStyle;
  obj[9] = hasUnreads;
  return closure_6(ForumPostUsername, obj);
};