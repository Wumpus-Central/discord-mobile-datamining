// discord_app/modules/forums/native/posts/ForumPostTypingUsers.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5142);
let obj2 = {
  container: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 },
  lastTypingUser: { marginEnd: 0 },
  typingUser: { marginEnd: -8, borderWidth: 2, borderRadius: nativeDefault.radii.round },
  dots: null,
  typingText: null,
  borderColor: null,
  borderColorPressed: null,
};
let obj3 = { marginEnd: -8, borderWidth: 2, borderRadius: nativeDefault.radii.round };
obj2.dots = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingVertical: nativeDefault.space.PX_4,
  paddingLeft: 4,
  borderRadius: nativeDefault.radii.lg,
  marginStart: -8,
  borderWidth: 4,
  marginEnd: 8,
  marginTop: -1,
  marginBottom: -1,
};
obj2.typingText = { flexShrink: 1 };
const obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingVertical: nativeDefault.space.PX_4,
  paddingLeft: 4,
  borderRadius: nativeDefault.radii.lg,
  marginStart: -8,
  borderWidth: 4,
  marginEnd: 8,
  marginTop: -1,
  marginBottom: -1,
};
obj2.borderColor = { color: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
let obj5 = { color: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
obj2.borderColorPressed = { color: nativeDefault.colors.CARD_PRIMARY_PRESSED_BG };
let closure_6 = createStyles.createStyles(obj2);
let closure_7 = {
  code: "(function ForumPostTypingUsersTsx1(){let[forumPostPressedIn,borderColorPressed,borderColor]=this.__closure;return{borderColor:forumPostPressedIn.value?borderColorPressed:borderColor};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTypingUsers.tsx");

export default function ForumPostTypingUsers(hasUnreads) {
  ({ thread, typingUserIds } = hasUnreads);
  let animatedStyle;
  let guildId;
  const tmp = closure_6();
  let _require = tmp;
  const facepileUsers = require("ForumHooks").useFacepileUsers(thread, typingUserIds);
  importDefault = facepileUsers;
  const obj2 = { channelId: thread.id, guildId: null, typingUserIds: null };
  let obj = require("ForumHooks");
  const tmp4 = importDefault;
  obj2.guildId = thread.getGuildId();
  obj2.typingUserIds = typingUserIds;
  const tmp5 = require("useTypingText");
  const tmp5Result = require("useTypingText")(obj2);
  const forumPostContainerPressedIn = require("ForumPostContainer").useForumPostContainerPressedIn();
  const obj3 = require("ForumPostContainer");
  items = [closure_7, forumPostContainerPressedIn, tmp.borderColorPressed.color, tmp.borderColor.color];
  _require = undefined;
  importDefault = undefined;
  animatedStyle = undefined;
  [tmp8, tmp9, tmp10, tmp11] = items;
  class ForumPostTypingUsersTsx1 {
    constructor() {
      obj = { borderColor: closure_0.value ? closure_1 : closure_2 };
      return obj;
    }
  }
  const items1 = [tmp9, tmp10, tmp11];
  ForumPostTypingUsersTsx1.__closure = items1;
  ForumPostTypingUsersTsx1.__workletHash = 15202435957297;
  ForumPostTypingUsersTsx1.__initData = tmp8;
  animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(ForumPostTypingUsersTsx1);
  let str = "text-muted";
  if (hasUnreads.hasUnreads) {
    str = "text-default";
  }
  guildId = thread.getGuildId();
  let tmp14 = null;
  if (null != guildId) {
    tmp14 = null;
    if (0 !== facepileUsers.length) {
      const obj5 = { style: tmp.container, children: null };
      const items2 = [
        facepileUsers.map((getAvatarSource, index) => {
          items = [_undefined.typingUser, animatedStyle];
          let lastTypingUser = index === _undefined2.length - 1;
          if (lastTypingUser) {
            lastTypingUser = _undefined.lastTypingUser;
          }
          const obj = {
            style: items,
            children: React4(native.Avatar, {
              source: getAvatarSource.getAvatarSource(guildId),
              size: native.AvatarSizes.SIZE_16,
            }),
          };
          items[2] = lastTypingUser;
          return React4(_modDef1652.View, obj, getAvatarSource.id);
        }),
        ,
      ];
      const obj6 = { style: null, children: null };
      const items3 = [tmp.dots, animatedStyle];
      obj6.style = items3;
      obj6.children = closure_4(tmp2(tmp3[9]).Ellipsis, {});
      items2[1] = closure_4(tmp4(tmp3[8]).View, obj6);
      const obj7 = {
        variant: "body-sm/semibold",
        color: str,
        style: tmp.typingText,
        lineClamp: 1,
        children: tmp5Result,
      };
      items2[2] = closure_4(tmp2(tmp3[10]).Text, obj7);
      obj5.children = items2;
      tmp14 = closure_5(guildId, obj5);
    }
  }
  return tmp14;
}
