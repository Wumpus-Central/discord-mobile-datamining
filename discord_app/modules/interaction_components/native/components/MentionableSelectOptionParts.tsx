// discord_app/modules/interaction_components/native/components/MentionableSelectOptionParts.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import InteractionComponentTypes from "../../InteractionComponentTypes.tsx";
import RoleIconUtils from "../../../guild_boosting/RoleIconUtils.tsx";
import RoleIconDefault from "../../../roles/native/RoleIcon.tsx";
import ShieldUserIcon from "../../../../design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx";
import DiscordTagDefault from "../../../user_profile/native/DiscordTag.tsx";
import UserIcon from "../../../../design/components/Icon/native/redesign/generated/UserIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import PresenceStore from "../../../../stores/PresenceStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function UserOptionTag(user) {
  const tmp = closure_10();
  return React6(DiscordTagDefault, {
    user: user.user,
    usernameStyle: tmp.name,
    discriminatorStyle: tmp.discriminator,
    nicknameStyle: tmp.name,
  });
}
function RoleMemberCount(children) {
  const tmp = closure_10();
  const obj = { style: tmp.roleCountContainer, children: null };
  const items = [
    React6(Text_Text.Text, {
      style: tmp.roleCountText,
      variant: "text-sm/medium",
      color: "interactive-text-default",
      children: children.count,
    }),
    React6(UserIcon.UserIcon, { size: "xs" }),
  ];
  obj.children = items;
  return React7(View, obj);
}
const View = fn(17).View;
const Constants = fn(1072);
({ Fonts, DEFAULT_ROLE_COLOR_HEX: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  name: {
    color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
    fontFamily: Fonts.PRIMARY_MEDIUM,
    fontSize: 12,
    lineHeight: 16,
  },
  discriminator: null,
  roleCountContainer: null,
  roleCountText: null,
};
let obj3 = {
  color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  fontFamily: Fonts.PRIMARY_MEDIUM,
  fontSize: 12,
  lineHeight: 16,
};
obj2.discriminator = { color: nativeDefault.colors.TEXT_MUTED, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
obj2.roleCountContainer = {
  display: "flex",
  flexDirection: "row",
  flexGrow: 1,
  alignItems: "center",
  justifyContent: "flex-end",
  marginRight: 12,
};
obj2.roleCountText = { paddingRight: 4 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/interaction_components/native/components/MentionableSelectOptionParts.tsx",
);

export function renderMentionableOptionIcon(type, guild, guildId) {
  if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
    const user = UserStore.getUser(type.value);
    if (null == user) {
      return null;
    } else {
      const isMobileOnlineResult = PresenceStore.isMobileOnline(user.id);
      const tmp15 = guildId;
      const status = PresenceStore.getStatus(user.id);
      const obj = {
        user,
        isMobileOnline: isMobileOnlineResult,
        isVROnline: PresenceStore.isVROnline(user.id),
        status,
        guildId: tmp15,
        size: native.AvatarSizes.XSMALL,
      };
      return React6(native.Avatar, obj);
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
            return React6(RoleIconDefault, obj2);
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
        return React6(ShieldUserIcon.ShieldUserIcon, obj4);
      }
    }
    return null;
  }
}
export function renderMentionableOptionDescription(type) {
  if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
    const obj = { user: UserStore.getUser(type.value) };
    return React6(UserOptionTag, obj);
  }
}
export function renderMentionableOptionSuffix(type, guild, arg2) {
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
      return React6(RoleMemberCount, obj);
    }
  }
}
export function mentionableOptionAccessibilityLabel(type) {
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
}
