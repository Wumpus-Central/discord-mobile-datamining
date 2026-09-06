// === Module 12019: ForumPostTypingUsers ===

// Module 12019 (ForumPostTypingUsers)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 }, lastTypingUser: { marginEnd: 0 }, typingUser: null, dots: null, typingText: null, borderColor: null, borderColorPressed: null };
createStyles = { marginEnd: -8, borderWidth: 2, borderRadius: nativeDefault.radii.round };
createStyles.typingUser = createStyles;
createStyles.dots = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingVertical: nativeDefault.space.PX_4, paddingLeft: 4, borderRadius: nativeDefault.radii.lg, marginStart: -8, borderWidth: 4, marginEnd: 8, marginTop: -1, marginBottom: -1 };
createStyles.typingText = { flexShrink: 1 };
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingVertical: nativeDefault.space.PX_4, paddingLeft: 4, borderRadius: nativeDefault.radii.lg, marginStart: -8, borderWidth: 4, marginEnd: 8, marginTop: -1, marginBottom: -1 };
createStyles.borderColor = { color: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
let obj2 = { color: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
createStyles.borderColorPressed = { color: nativeDefault.colors.CARD_PRIMARY_PRESSED_BG };
let closure_6 = createStyles.createStyles(createStyles);
const __initData = { code: "function ForumPostTypingUsersTsx1(){const{forumPostPressedIn,borderColorPressed,borderColor}=this.__closure;return{borderColor:forumPostPressedIn.value?borderColorPressed:borderColor};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTypingUsers.tsx");

export default function ForumPostTypingUsers(hasUnreads) {
  ({ thread, typingUserIds } = hasUnreads);
  let color;
  let guildId;
  const tmp = guildId();
  _require = tmp;
  let obj = require("ForumHooks");
  const facepileUsers = obj.useFacepileUsers(thread, typingUserIds);
  obj = { channelId: thread.id, guildId: thread.getGuildId(), typingUserIds };
  color = tmp.borderColor.color;
  const color2 = tmp.borderColorPressed.color;
  const tmp4 = facepileUsers;
  const tmp5 = facepileUsers(color[6]);
  let obj2 = require("ForumPostContainer");
  const forumPostContainerPressedIn = obj2.useForumPostContainerPressedIn();
  const tmp5Result = facepileUsers(color[6])(obj);
  const fn = function _() {
    return { borderColor: forumPostContainerPressedIn.value ? color2 : color };
  };
  fn.__closure = { forumPostPressedIn: forumPostContainerPressedIn, borderColorPressed: color2, borderColor: color };
  fn.__workletHash = 6320844933544;
  fn.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  let str = "text-muted";
  if (hasUnreads.hasUnreads) {
    str = "text-default";
  }
  guildId = thread.getGuildId();
  let tmp10 = null;
  if (null != guildId) {
    tmp10 = null;
    if (0 !== facepileUsers.length) {
      obj = { style: tmp.container, children: null };
      let items = [
        facepileUsers.map((getAvatarSource, index) => {
              const items = [closure_0.typingUser, animatedStyle, ];
              let lastTypingUser = index === facepileUsers.length - 1;
              if (lastTypingUser) {
                lastTypingUser = closure_0.lastTypingUser;
              }
              let obj = { style: items, children: null };
              items[2] = lastTypingUser;
              obj = { source: getAvatarSource.getAvatarSource(guildId), size: native.AvatarSizes.SIZE_16 };
              obj.children = React4(native.Avatar, obj);
              return React4(ReanimatedRexportDefault.View, obj, getAvatarSource.id);
            }),
  ,

      ];
      const obj1 = { style: null, children: null };
      const items1 = [tmp.dots, animatedStyle];
      obj1.style = items1;
      obj1.children = forumPostContainerPressedIn(tmp2(tmp3[9]).Ellipsis, {});
      items[1] = forumPostContainerPressedIn(tmp4(tmp3[8]).View, obj1);
      obj2 = { variant: "text-sm/semibold", color: str, style: tmp.typingText, lineClamp: 1, children: tmp5Result };
      items[2] = forumPostContainerPressedIn(tmp2(tmp3[10]).Text, obj2);
      obj.children = items;
      tmp10 = animatedStyle(color2, obj);
    }
  }
  return tmp10;
};