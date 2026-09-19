// === Module 12270: ForumPostTypingUsers ===

// Module 12270 (ForumPostTypingUsers)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4492 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 }, lastTypingUser: { marginEnd: 0 }, typingUser: { marginEnd: -8, borderWidth: 2, borderRadius: nativeDefault.radii.round }, dots: null, typingText: null, borderColor: null, borderColorPressed: null };
let obj3 = { marginEnd: -8, borderWidth: 2, borderRadius: nativeDefault.radii.round };
obj2.dots = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingVertical: nativeDefault.space.PX_4, paddingLeft: 4, borderRadius: nativeDefault.radii.lg, marginStart: -8, borderWidth: 4, marginEnd: 8, marginTop: -1, marginBottom: -1 };
obj2.typingText = { flexShrink: 1 };
const obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingVertical: nativeDefault.space.PX_4, paddingLeft: 4, borderRadius: nativeDefault.radii.lg, marginStart: -8, borderWidth: 4, marginEnd: 8, marginTop: -1, marginBottom: -1 };
obj2.borderColor = { color: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
let obj5 = { color: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
obj2.borderColorPressed = { color: nativeDefault.colors.CARD_PRIMARY_PRESSED_BG };
let closure_6 = createStyles.createStyles(obj2);
const __initData = { code: "function ForumPostTypingUsersTsx1(){const{forumPostPressedIn,borderColorPressed,borderColor}=this.__closure;return{borderColor:forumPostPressedIn.value?borderColorPressed:borderColor};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTypingUsers.tsx");

export default function ForumPostTypingUsers(hasUnreads) {
  ({ thread, typingUserIds } = hasUnreads);
  let color;
  let guildId;
  const tmp = guildId();
  _require = tmp;
  const facepileUsers = require("ForumHooks").useFacepileUsers(thread, typingUserIds);
  const obj2 = { channelId: thread.id, guildId: null, typingUserIds: null };
  let obj = require("ForumHooks");
  const tmp4 = facepileUsers;
  obj2.guildId = thread.getGuildId();
  obj2.typingUserIds = typingUserIds;
  color = tmp.borderColor.color;
  const color2 = tmp.borderColorPressed.color;
  const tmp5 = facepileUsers(color[6]);
  const tmp5Result = facepileUsers(color[6])(obj2);
  const forumPostContainerPressedIn = require("ForumPostContainer").useForumPostContainerPressedIn();
  const obj3 = require("ForumPostContainer");
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
      const obj5 = { style: tmp.container, children: null };
      let items = [
        facepileUsers.map((getAvatarSource, index) => {
              const items = [closure_0.typingUser, animatedStyle, ];
              let lastTypingUser = index === facepileUsers.length - 1;
              if (lastTypingUser) {
                lastTypingUser = closure_0.lastTypingUser;
              }
              const obj = { style: items, children: React4(native.Avatar, { source: getAvatarSource.getAvatarSource(guildId), size: native.AvatarSizes.SIZE_16 }) };
              items[2] = lastTypingUser;
              return React4(ReanimatedRexportDefault.View, obj, getAvatarSource.id);
            }),
  ,

      ];
      const obj6 = { style: null, children: null };
      const items1 = [tmp.dots, animatedStyle];
      obj6.style = items1;
      obj6.children = forumPostContainerPressedIn(tmp2(tmp3[9]).Ellipsis, {});
      items[1] = forumPostContainerPressedIn(tmp4(tmp3[8]).View, obj6);
      const obj7 = { variant: "text-sm/semibold", color: str, style: tmp.typingText, lineClamp: 1, children: tmp5Result };
      items[2] = forumPostContainerPressedIn(tmp2(tmp3[10]).Text, obj7);
      obj5.children = items;
      tmp10 = animatedStyle(color2, obj5);
    }
  }
  return tmp10;
};