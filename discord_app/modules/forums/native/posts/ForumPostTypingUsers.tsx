// discord_app/modules/forums/native/posts/ForumPostTypingUsers.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { marginEnd: -8, borderWidth: 2, borderRadius: ThemesDefault.radii.round };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, paddingVertical: ThemesDefault.space.PX_4, paddingLeft: 4, borderRadius: ThemesDefault.radii.lg, marginStart: -8, borderWidth: 4, marginEnd: 8, marginTop: -1, marginBottom: -1 };
createCacheKey[4] = { flexShrink: 1 };
createCacheKey[5] = { color: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT };
createCacheKey[6] = { color: ThemesDefault.colors.CARD_PRIMARY_PRESSED_BG };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let closure_7 = { code: "function ForumPostTypingUsersTsx1(){const{forumPostPressedIn,borderColorPressed,borderColor}=this.__closure;return{borderColor:forumPostPressedIn.value?borderColorPressed:borderColor};}" };
const result = require("obj132").fileFinishedImporting("modules/forums/native/posts/ForumPostTypingUsers.tsx");

export default function ForumPostTypingUsers(hasUnreads) {
  ({ thread, typingUserIds } = hasUnreads);
  let color;
  let guildId;
  const tmp = guildId();
  const _require = tmp;
  let obj = _require(color[5]);
  const facepileUsers = obj.useFacepileUsers(thread, typingUserIds);
  obj = { channelId: thread.id, guildId: thread.getGuildId(), typingUserIds };
  color = tmp.borderColor.color;
  const color2 = tmp.borderColorPressed.color;
  const tmp4 = facepileUsers;
  const tmp5 = facepileUsers(color[6]);
  let obj2 = _require(color[7]);
  const forumPostContainerPressedIn = obj2.useForumPostContainerPressedIn();
  const tmp5Result = facepileUsers(color[6])(obj);
  const fn = function _() {
    return { borderColor: forumPostContainerPressedIn.value ? color2 : color };
  };
  fn.__closure = { forumPostPressedIn: forumPostContainerPressedIn, borderColorPressed: color2, borderColor: color };
  fn.__workletHash = 6320844933544;
  fn.__initData = closure_7;
  const animatedStyle = _require(color[8]).useAnimatedStyle(fn);
  let str = "text-muted";
  if (hasUnreads.hasUnreads) {
    str = "text-default";
  }
  guildId = thread.getGuildId();
  let tmp10 = null;
  if (null != guildId) {
    tmp10 = null;
    if (0 !== facepileUsers.length) {
      obj = { style: null, children: null };
      obj[0] = tmp.container;
      let items = [
        facepileUsers.map((item, index) => {
              const items = [lib.typingUser, animatedStyle, ];
              let lastTypingUser = index === facepileUsers.length - 1;
              if (lastTypingUser) {
                lastTypingUser = lib.lastTypingUser;
              }
              items[2] = lastTypingUser;
              const obj = { source: item.getAvatarSource(guildId), size: lib(color[9]).AvatarSizes.SIZE_16 };
              obj[1] = forumPostContainerPressedIn(lib(color[9]).Avatar, obj);
              return forumPostContainerPressedIn(facepileUsers(color[8]).View, obj, item.id);
            }),
  ,

      ];
      obj1 = { style: null, children: null };
      const items1 = [tmp.dots, animatedStyle];
      obj1[0] = items1;
      obj1[1] = forumPostContainerPressedIn(tmp2(tmp3[9]).Ellipsis, {});
      items[1] = forumPostContainerPressedIn(tmp4(tmp3[8]).View, obj1);
      obj2 = { variant: "text-sm/semibold", color: null, style: null, lineClamp: 1, children: null };
      obj2[1] = str;
      obj2[2] = tmp.typingText;
      obj2[4] = tmp5Result;
      items[2] = forumPostContainerPressedIn(tmp2(tmp3[10]).Text, obj2);
      obj[1] = items;
      tmp10 = animatedStyle(color2, obj);
    }
  }
  return tmp10;
};