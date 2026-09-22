// === Module 12262: ForumPostUsername ===

// Module 12262 (ForumPostUsername)
import initialize from "initialize" /* 504 */;
import native from "native" /* 1177 */;
import ForumLayout from "ForumLayout" /* 2052 */;
import Text_Text from "Text/Text" /* 4753 */;
import ForumHooks from "ForumHooks" /* 8132 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 8223 */;
import useChatWidthDefault from "useChatWidth" /* 11782 */;
import ForumPostGridBody from "ForumPostGridBody" /* 12263 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;

require = fn;
function ForumPostUsername(arg0) {
  ({ thread, authorId, authorName, authorColor, authorColors } = arg0);
  ({ containerStyle, roleDotStyle, textStyle, suffix, hasUnreads } = arg0);
  const tmp = closure_8();
  let num = 158;
  if (useForumChannelStore(thread.parent_id).layoutType === ForumLayout.ForumLayout.GRID) {
    num = 72;
  }
  const diff = useChatWidthDefault() - ForumPostGridBody.GRID_HORIZONTAL_PADDING - num;
  const tmp4 = useChatWidthDefault();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => roleStyle.roleStyle);
  if ("username" === stateFromStores) {
    if (null != authorColor) {
      const obj = { color: authorColor };
    }
    const processColorStringsArray = enhanced_role_colors_EnhancedRoleColorUtils.useProcessColorStringsArray(authorColors);
    const tmp2Result4 = enhanced_role_colors_EnhancedRoleColorUtils;
    const useIsRoleStyleAndRoleColorsEligibleForERC = tmp2Result4.useIsRoleStyleAndRoleColorsEligibleForERC;
    const guild_id = thread.guild_id;
    let tmp19Result = null;
    if (null != authorName) {
      const obj2 = { style: null, accessibilityRole: "button", children: null };
      const obj3 = { maxWidth: diff };
      const merged = Object.assign(tmp.authorContainer);
      const items1 = [obj3, tmp9, containerStyle];
      obj2.style = items1;
      let tmp23 = "dot" === stateFromStores && null != authorColor;
      if (tmp23) {
        const obj4 = { style: null, children: null };
        const items2 = [tmp.roleDotContainer, roleDotStyle];
        obj4.style = items2;
        const obj5 = { size: "small", color: authorColor, colors: authorColors };
        obj4.children = timestampProducer(native.RoleDot, obj5);
        tmp23 = timestampProducer(View, obj4);
      }
      const items3 = [tmp23, ];
      let tmp25;
      if (tmp17) {
        tmp25 = processColorStringsArray;
      }
      const obj6 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", gradientColors: tmp25, lineClamp: 1, style: null, children: null };
      const items4 = [{}, textStyle, tmp.authorName];
      obj6.style = items4;
      const items5 = [authorName, suffix];
      obj6.children = items5;
      items3[1] = React5(Text_Text.Text, obj6);
      obj2.children = items3;
      tmp19Result = React5(View, obj2);
    }
    return tmp19Result;
  }
  const tmp2Result = initialize;
}
const View = fn(17).View;
const useForumChannelStore = fn(12258).useForumChannelStore;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4757);
let closure_8 = createStyles.createStyles({ authorContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginEnd: 8 }, roleDotContainer: { alignItems: "center", justifyContent: "center", marginEnd: 2, marginBottom: 4 }, authorName: { overflow: "hidden", flexWrap: "nowrap" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostUsername.tsx");

export const ForumPostAuthor = function ForumPostAuthor(thread) {
  thread = thread.thread;
  ({ hasUnreads, suffix, containerStyle, roleDotStyle, textStyle } = thread);
  const forumPostAuthor = ForumHooks.useForumPostAuthor(thread);
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
    const obj2 = { thread, authorId: null, authorName: null, authorColor: null, authorColors: null, suffix: null, containerStyle: null, roleDotStyle: null, textStyle: null, hasUnreads: null };
    let id;
    if (user != null) {
      id = user.id;
    }
    obj2.authorId = id;
    obj2.authorName = nick;
    obj2.authorColor = colorString;
    obj2.authorColors = colorStrings;
    obj2.suffix = suffix;
    obj2.containerStyle = containerStyle;
    obj2.roleDotStyle = roleDotStyle;
    obj2.textStyle = textStyle;
    obj2.hasUnreads = hasUnreads;
    tmp5Result = timestampProducer(ForumPostUsername, obj2);
  }
  return tmp5Result;
};
export const ForumPostMessageAuthor = function ForumPostMessageAuthor(thread) {
  thread = thread.thread;
  ({ message, hasUnreads, suffix, containerStyle, roleDotStyle, textStyle } = thread);
  const forumPostMessageAuthor = ForumHooks.useForumPostMessageAuthor(message, thread);
  const user = forumPostMessageAuthor.user;
  const obj2 = { thread, authorId: null, authorName: null, authorColor: null, authorColors: null, suffix: null, containerStyle: null, roleDotStyle: null, textStyle: null, hasUnreads: null };
  let id;
  ({ authorName, authorColor, authorColors } = forumPostMessageAuthor);
  if (user != null) {
    id = user.id;
  }
  obj2.authorId = id;
  obj2.authorName = authorName;
  obj2.authorColor = authorColor;
  obj2.authorColors = authorColors;
  obj2.suffix = suffix;
  obj2.containerStyle = containerStyle;
  obj2.roleDotStyle = roleDotStyle;
  obj2.textStyle = textStyle;
  obj2.hasUnreads = hasUnreads;
  return timestampProducer(ForumPostUsername, obj2);
};