// === Module 11379: MentionableSelectOptionParts ===

// Module 11379 (MentionableSelectOptionParts)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5088 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5445 */;
import RoleIconUtils from "RoleIconUtils" /* 6883 */;
import RoleIconDefault from "RoleIcon" /* 6901 */;
import ShieldUserIcon from "ShieldUserIcon" /* 8621 */;
import DiscordTagDefault from "DiscordTag" /* 8765 */;
import UserIcon from "UserIcon" /* 11380 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2119 */;
import PresenceStore from "PresenceStore" /* 5108 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ Fonts, DEFAULT_ROLE_COLOR_HEX: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { name: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12, lineHeight: 16 }, discriminator: null, roleCountContainer: null, roleCountText: null };
let obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12, lineHeight: 16 };
obj2.discriminator = { color: nativeDefault.colors.TEXT_MUTED, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
obj2.roleCountContainer = { display: "flex", flexDirection: "row", flexGrow: 1, alignItems: "center", justifyContent: "flex-end", marginRight: 12 };
obj2.roleCountText = { paddingRight: 4 };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserOptionTag(user) {
  const cResult = c.c(4);
  user = user.user;
  const tmp3 = closure_10();
  if (cResult[0] === tmp3.discriminator) {
    if (cResult[1] === tmp3.name) {
      if (cResult[2] === user) {
        let tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
  const tmp5 = closure_1_8(DiscordTagDefault, { user, usernameStyle: tmp3.name, discriminatorStyle: tmp3.discriminator, nicknameStyle: tmp3.name });
  cResult[0] = tmp3.discriminator;
  cResult[1] = tmp3.name;
  cResult[2] = user;
  cResult[3] = tmp5;
  tmp4 = tmp5;
  const obj2 = { user, usernameStyle: tmp3.name, discriminatorStyle: tmp3.discriminator, nicknameStyle: tmp3.name };
}) : (function UserOptionTag(user) {
  const tmp = closure_10();
  return closure_1_8(DiscordTagDefault, { user: user.user, usernameStyle: tmp.name, discriminatorStyle: tmp.discriminator, nicknameStyle: tmp.name });
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleMemberCount(count) {
  const cResult = c.c(7);
  count = count.count;
  const tmp4 = closure_10();
  if (cResult[0] === count) {
    if (cResult[1] === tmp4.roleCountText) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp10 = closure_1_8(UserIcon.UserIcon, { size: "xs" });
      cResult[3] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === tmp4.roleCountContainer) {
      if (cResult[5] === tmp5) {
        let tmp11 = cResult[6];
      }
      return tmp11;
    }
    const obj2 = { style: tmp4.roleCountContainer, children: null };
    const items = [tmp5, tmp8];
    obj2.children = items;
    const tmp14 = options(View, obj2);
    cResult[4] = tmp4.roleCountContainer;
    cResult[5] = tmp5;
    cResult[6] = tmp14;
    tmp11 = tmp14;
  }
  const tmp6 = closure_1_8(Text_Text.Text, { style: tmp4.roleCountText, variant: "text-sm/medium", color: "interactive-text-default", children: count });
  cResult[0] = count;
  cResult[1] = tmp4.roleCountText;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj3 = { style: tmp4.roleCountText, variant: "text-sm/medium", color: "interactive-text-default", children: count };
}) : (function RoleMemberCount(children) {
  const tmp = closure_10();
  const obj = { style: tmp.roleCountContainer, children: null };
  const items = [closure_1_8(Text_Text.Text, { style: tmp.roleCountText, variant: "text-sm/medium", color: "interactive-text-default", children: children.count }), closure_1_8(UserIcon.UserIcon, { size: "xs" })];
  obj.children = items;
  return options(View, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/components/MentionableSelectOptionParts.tsx");

export const renderMentionableOptionIcon = function renderMentionableOptionIcon(type, guild, guildId) {
  if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
    const user = UserStore.getUser(type.value);
    if (null == user) {
      return null;
    } else {
      const isMobileOnlineResult = PresenceStore.isMobileOnline(user.id);
      const tmp15 = guildId;
      const status = PresenceStore.getStatus(user.id);
      const obj = { user, isMobileOnline: isMobileOnlineResult, isVROnline: PresenceStore.isVROnline(user.id), status, guildId: tmp15, size: native.AvatarSizes.XSMALL };
      return closure_1_8(native.Avatar, obj);
    }
  } else if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
    if (null != guild) {
      const role = GuildRoleStore.getRole(guild.id, type.value);
    }
    if (null != guild) {
      if (null != role) {
        if (tmpResult.canGuildUseRoleIcons(guild, role)) {
          const roleIconData = RoleIconUtils.getRoleIconData(role);
          if (null != roleIconData) {
            const obj2 = { src: null, unicodeEmoji: null, size: 24, name: null };
            ({ customIconSrc: obj3.src, unicodeEmoji: obj3.unicodeEmoji } = roleIconData);
            obj2.name = role.name;
            return closure_1_8(RoleIconDefault, obj2);
          }
          const tmpResult2 = RoleIconUtils;
        }
        let colorString;
        if (role != null) {
          colorString = role.colorString;
        }
        if (colorString == null) {
          colorString = React5;
        }
        const obj4 = { color: colorString };
        return closure_1_8(ShieldUserIcon.ShieldUserIcon, obj4);
      }
    }
    return null;
  }
};
export const renderMentionableOptionDescription = function renderMentionableOptionDescription(type) {
  if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
    const obj = { user: UserStore.getUser(type.value) };
    return closure_1_8(closure_11, obj);
  }
};
export const renderMentionableOptionSuffix = function renderMentionableOptionSuffix(type, guild, arg2) {
  if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
    let role;
    if (null != guild) {
      role = GuildRoleStore.getRole(guild.id, type.value);
    }
    let tmp5 = null;
    if (null != role) {
      let tmp7;
      if (arg2 != null) {
        tmp7 = arg2[role.id];
      }
      tmp5 = tmp7;
    }
    if (null != tmp5) {
      const obj = { count: tmp5 };
      return closure_1_8(closure_12, obj);
    }
  }
};
export const mentionableOptionAccessibilityLabel = function mentionableOptionAccessibilityLabel(type) {
  if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
    const user = UserStore.getUser(type.value);
    let bot;
    if (user != null) {
      bot = user.bot;
    }
    const intl2 = util.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = util.t;
    if (bot) {
      const obj2 = { username: type.label, discriminator: null };
      let discriminator;
      if (user != null) {
        discriminator = user.discriminator;
      }
      obj2.discriminator = discriminator;
      let formatToPlainStringResult = formatToPlainString(t["zogo/8"], obj2);
    } else {
      const obj3 = { username: type.label, discriminator: null };
      let discriminator1;
      if (user != null) {
        discriminator1 = user.discriminator;
      }
      obj3.discriminator = discriminator1;
      formatToPlainStringResult = formatToPlainString(t.AydQ7a, obj3);
    }
    return formatToPlainStringResult;
  } else if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
    const intl = util.intl;
    const obj = { roleName: type.label };
    return intl.formatToPlainString(util.t.F6ejkk, obj);
  }
};