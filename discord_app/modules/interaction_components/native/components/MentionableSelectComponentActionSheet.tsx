// discord_app/modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import InteractionComponentTypes from "../../InteractionComponentTypes.tsx";
import RoleIconDefault from "../../../roles/native/RoleIcon.tsx";
import SearchableSelectActionComponentUtils from "../../SearchableSelectActionComponentUtils.tsx";
import DiscordTagDefault from "../../../user_profile/native/DiscordTag.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PresenceStore from "../../../../stores/PresenceStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ Fonts, DEFAULT_ROLE_COLOR_HEX: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { name: null, discriminator: null, roleCountContainer: null, roleCountText: null };
createStyles = {
  color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  fontFamily: Fonts.PRIMARY_MEDIUM,
  fontSize: 12,
  lineHeight: 16,
};
createStyles.name = createStyles;
createStyles.discriminator = { color: nativeDefault.colors.TEXT_MUTED, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
createStyles.roleCountContainer = {
  display: "flex",
  flexDirection: "row",
  flexGrow: 1,
  alignItems: "center",
  justifyContent: "flex-end",
  marginRight: 12,
};
createStyles.roleCountText = { paddingRight: 4 };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx",
);

export default function MentionableSelectComponentActionSheet(selectionActionComponent) {
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  const channelId = selectionActionComponent.channelId;
  const guildId = selectionActionComponent.guildId;
  closure_5 = undefined;
  ({ labelComponent, containerId, onSubmit, allowEmpty } = selectionActionComponent);
  noop = closure_12();
  const guild = GuildStore.getGuild(guildId);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  closure_5 = channelId(guildId[10])(id, selectionActionComponent(tmp3[11]).MIN_REREQUEST_TIME);
  let items = [selectionActionComponent, channelId];
  const callback = noop.useCallback(
    (query) => SearchableSelectActionComponentUtils.queryMentionables(selectionActionComponent.type, query, channelId),
    items,
  );
  let tmp7 = channelId(guildId[12])({
    selectActionComponent: selectionActionComponent,
    containerId,
    guildId,
    queryOptions: callback,
    onSubmit,
  });
  const selectedOptions = tmp7.selectedOptions;
  const items1 = [guild, guildId];
  ({ options, isSelected, onPressOptionItem, submitSelection, setQuery } = tmp7);
  const callback1 = noop.useCallback((type) => {
    if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
      user = UserStore.getUser(type.value);
      if (null == user) {
        return null;
      } else {
        const isMobileOnlineResult = PresenceStore.isMobileOnline(user.id);
        const status = PresenceStore.getStatus(user.id);
        let obj = {
          user,
          isMobileOnline: isMobileOnlineResult,
          isVROnline: PresenceStore.isVROnline(user.id),
          status,
          guildId,
          size: tmp(1178).AvatarSizes.XSMALL,
        };
        return closure_2_10(tmp(1178).Avatar, obj);
      }
    } else if (type.type === tmp(4792).SelectOptionType.ROLE) {
      if (null != guild) {
        const role = GuildRoleStore.getRole(tmp3.id, type.value);
      }
      if (null != guild) {
        if (null != role) {
          let tmpResult = tmp(7187);
          if (tmpResult.canGuildUseRoleIcons(tmp3, role)) {
            tmpResult = tmp(7187);
            let roleIconData = tmpResult.getRoleIconData(role);
            if (roleIconData == null) {
              roleIconData = {};
            }
            ({ customIconSrc, unicodeEmoji } = roleIconData);
            let tmp7;
            if (null != customIconSrc) {
              obj = { uri: customIconSrc };
              tmp7 = obj;
            }
            const obj1 = { source: tmp7, unicodeEmoji, size: 24, name: role.name };
            return closure_2_10(RoleIconDefault, obj1);
          }
          let colorString;
          if (role != null) {
            colorString = role.colorString;
          }
          if (colorString == null) {
            colorString = React7;
          }
          const obj2 = { color: colorString };
          return closure_2_10(tmp(9752).ShieldUserIcon, obj2);
        }
      }
      return null;
    }
  }, items1);
  return closure_10(channelId(guildId[18]), {
    onPressOptionItem,
    renderIcon: callback1,
    renderDescription(type) {
      if (type.type === InteractionComponentTypes.SelectOptionType.USER) {
        user = UserStore.getUser(type.value);
        const obj = { user, usernameStyle: null, discriminatorStyle: null, nicknameStyle: null };
        ({ name: obj.usernameStyle, discriminator: obj.discriminatorStyle, name: obj.nicknameStyle } = closure_3);
        return closure_2_10(DiscordTagDefault, obj);
      }
    },
    renderOptionSuffix(type) {
      if (type.type === InteractionComponentTypes.SelectOptionType.ROLE) {
        let role;
        if (null != guild) {
          role = GuildRoleStore.getRole(tmp3.id, type.value);
        }
        let tmp7 = null;
        if (null != role) {
          let tmp9;
          if (closure_5 != null) {
            tmp9 = tmp8[role.id];
          }
          tmp7 = tmp9;
        }
        if (null != tmp7) {
          let obj = { style: closure_3.roleCountContainer, children: null };
          obj = {
            style: closure_3.roleCountText,
            variant: "text-sm/medium",
            color: "interactive-text-default",
            children: tmp7,
          };
          const items = [closure_2_10(tmp(4556).Text, obj), closure_2_10(tmp(11825).UserIcon, { size: "xs" })];
          obj.children = items;
          return closure_2_11(View, obj);
        }
      }
    },
    selectionActionComponent,
    labelComponent,
    options,
    selectedCount: selectedOptions.length,
    selectedOptions,
    isSelected,
    submitSelection,
    onQueryChange: setQuery,
    itemAccessibilityLabel(type) {
      if (type.type === selectionActionComponent(guildId[13]).SelectOptionType.USER) {
        user = user.getUser(type.value);
        let bot;
        if (user != null) {
          bot = user.bot;
        }
        const intl2 = tmp(tmp2[22]).intl;
        const formatToPlainString = intl2.formatToPlainString;
        const t = tmp(tmp2[22]).t;
        if (bot) {
          let obj = { username: type.label, discriminator: null };
          let discriminator;
          if (user != null) {
            discriminator = user.discriminator;
          }
          obj.discriminator = discriminator;
          let formatToPlainStringResult = formatToPlainString(t["zogo/8"], obj);
        } else {
          obj = { username: type.label, discriminator: null };
          let discriminator1;
          if (user != null) {
            discriminator1 = user.discriminator;
          }
          obj.discriminator = discriminator1;
          formatToPlainStringResult = formatToPlainString(t.AydQ7a, obj);
        }
        return formatToPlainStringResult;
      } else if (type.type === tmp(tmp2[13]).SelectOptionType.ROLE) {
        const intl = tmp(tmp2[22]).intl;
        obj = { roleName: type.label };
        return intl.formatToPlainString(tmp(tmp2[22]).t.F6ejkk, obj);
      }
    },
    channelId,
    allowEmpty,
  });
}
