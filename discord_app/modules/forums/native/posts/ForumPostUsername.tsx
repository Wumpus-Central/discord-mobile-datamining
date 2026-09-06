// discord_app/modules/forums/native/posts/ForumPostUsername.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import native from "../../../../design/void/native.tsx";
import ForumLayout from "../../../../../discord_common/js/shared/shared-constants/ForumLayout.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ForumHooks from "../../ForumHooks.tsx";
import enhanced_role_colors_EnhancedRoleColorUtils from "../../../premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";
import useChatWidthDefault from "../../../chat/native/useChatWidth.tsx";
import ForumPostGridBody from "grid/ForumPostGridBody.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

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
  let tmp2Result = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => roleStyle.roleStyle);
  if ("username" === stateFromStores) {
    if (null != authorColor) {
      let obj = { color: authorColor };
    }
    tmp2Result = enhanced_role_colors_EnhancedRoleColorUtils;
    const processColorStringsArray = tmp2Result.useProcessColorStringsArray(authorColors);
    const tmp2Result1 = enhanced_role_colors_EnhancedRoleColorUtils;
    const useIsRoleStyleAndRoleColorsEligibleForERC = tmp2Result1.useIsRoleStyleAndRoleColorsEligibleForERC;
    const guild_id = thread.guild_id;
    let tmp19Result = null;
    if (null != authorName) {
      obj = { style: null, accessibilityRole: "button", children: null };
      const obj1 = { maxWidth: diff };
      const merged = Object.assign(tmp.authorContainer);
      const items1 = [obj1, tmp9, containerStyle];
      obj.style = items1;
      let tmp23 = "dot" === stateFromStores && null != authorColor;
      if (tmp23) {
        const obj2 = { style: null, children: null };
        const items2 = [tmp.roleDotContainer, roleDotStyle];
        obj2.style = items2;
        const obj3 = { size: "small", color: authorColor, colors: authorColors };
        obj2.children = timestampProducer(native.RoleDot, obj3);
        tmp23 = timestampProducer(View, obj2);
      }
      const items3 = [tmp23];
      let tmp25;
      if (tmp17) {
        tmp25 = processColorStringsArray;
      }
      const obj4 = {
        variant: "text-sm/semibold",
        color: "mobile-text-heading-primary",
        gradientColors: tmp25,
        lineClamp: 1,
        style: null,
        children: null,
      };
      const items4 = [{}, textStyle, tmp.authorName];
      obj4.style = items4;
      const items5 = [authorName, suffix];
      obj4.children = items5;
      items3[1] = React5(Text_Text.Text, obj4);
      obj.children = items3;
      tmp19Result = React5(View, obj);
    }
    return tmp19Result;
  }
  const tmp4 = useChatWidthDefault();
}
const View = fn(17).View;
const useForumChannelStore = fn(12001).useForumChannelStore;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({
  authorContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginEnd: 8 },
  roleDotContainer: { alignItems: "center", justifyContent: "center", marginEnd: 2, marginBottom: 4 },
  authorName: { overflow: "hidden", flexWrap: "nowrap" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostUsername.tsx");

export const ForumPostAuthor = function ForumPostAuthor(thread) {
  thread = thread.thread;
  ({ hasUnreads, suffix, containerStyle, roleDotStyle, textStyle } = thread);
  let obj = ForumHooks;
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
    obj = {
      thread,
      authorId: null,
      authorName: null,
      authorColor: null,
      authorColors: null,
      suffix: null,
      containerStyle: null,
      roleDotStyle: null,
      textStyle: null,
      hasUnreads: null,
    };
    let id;
    if (user != null) {
      id = user.id;
    }
    obj.authorId = id;
    obj.authorName = nick;
    obj.authorColor = colorString;
    obj.authorColors = colorStrings;
    obj.suffix = suffix;
    obj.containerStyle = containerStyle;
    obj.roleDotStyle = roleDotStyle;
    obj.textStyle = textStyle;
    obj.hasUnreads = hasUnreads;
    tmp5Result = timestampProducer(ForumPostUsername, obj);
  }
  return tmp5Result;
};
export const ForumPostMessageAuthor = function ForumPostMessageAuthor(thread) {
  thread = thread.thread;
  ({ message, hasUnreads, suffix, containerStyle, roleDotStyle, textStyle } = thread);
  let obj = ForumHooks;
  const forumPostMessageAuthor = obj.useForumPostMessageAuthor(message, thread);
  const user = forumPostMessageAuthor.user;
  obj = {
    thread,
    authorId: null,
    authorName: null,
    authorColor: null,
    authorColors: null,
    suffix: null,
    containerStyle: null,
    roleDotStyle: null,
    textStyle: null,
    hasUnreads: null,
  };
  let id;
  ({ authorName, authorColor, authorColors } = forumPostMessageAuthor);
  if (user != null) {
    id = user.id;
  }
  obj.authorId = id;
  obj.authorName = authorName;
  obj.authorColor = authorColor;
  obj.authorColors = authorColors;
  obj.suffix = suffix;
  obj.containerStyle = containerStyle;
  obj.roleDotStyle = roleDotStyle;
  obj.textStyle = textStyle;
  obj.hasUnreads = hasUnreads;
  return timestampProducer(ForumPostUsername, obj);
};
