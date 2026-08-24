// === Module 11041: MentionableSelectComponentActionSheet ===

// Module 11041 (MentionableSelectComponentActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "createGuildRoleRecordFromRust" /* 1984 */;
import closure_6 from "createGuildRecordFromRust" /* 1910 */;
import closure_7 from "sortActivity" /* 4564 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
({ Fonts, DEFAULT_ROLE_COLOR_HEX: c9 } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { name: null, discriminator: null, roleCountContainer: null, roleCountText: null };
createCacheKey = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12, lineHeight: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: ThemesDefault.colors.TEXT_MUTED, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
createCacheKey[2] = { display: "flex", flexDirection: "row", flexGrow: 1, alignItems: "center", justifyContent: "flex-end", marginRight: 12 };
createCacheKey[3] = { paddingRight: 4 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: ThemesDefault.colors.TEXT_MUTED, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
const result = require("set").fileFinishedImporting("modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx");

export default function MentionableSelectComponentActionSheet(selectionActionComponent) {
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  const channelId = selectionActionComponent.channelId;
  const guildId = selectionActionComponent.guildId;
  let React;
  let guild;
  closure_5 = undefined;
  ({ labelComponent, containerId, onSubmit, allowEmpty } = selectionActionComponent);
  React = callback2();
  guild = guild.getGuild(guildId);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  closure_5 = channelId(guildId[10])(id, selectionActionComponent(tmp3[11]).MIN_REREQUEST_TIME);
  let items = [selectionActionComponent, channelId];
  const callback = React.useCallback((arg0) => selectionActionComponent(guildId[11]).queryMentionables(selectionActionComponent.type, arg0, channelId), items);
  let tmp7 = channelId(guildId[12])({ selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: callback, onSubmit });
  const selectedOptions = tmp7.selectedOptions;
  const items1 = [guild, guildId];
  ({ options, isSelected, onPressOptionItem, submitSelection, setQuery } = tmp7);
  const callback1 = React.useCallback((type) => {
    if (type.type === selectionActionComponent(guildId[13]).SelectOptionType.USER) {
      const user = closure_1_8.getUser(type.value);
      if (null == user) {
        return null;
      } else {
        const isMobileOnlineResult = closure_1_7.isMobileOnline(user.id);
        const status = closure_1_7.getStatus(user.id);
        let obj = { user: null, isMobileOnline: null, isVROnline: null, status: null, guildId: null, size: null };
        obj[0] = user;
        obj[1] = isMobileOnlineResult;
        obj[2] = closure_1_7.isVROnline(user.id);
        obj[3] = status;
        obj[4] = guildId;
        obj[5] = tmp(tmp2[14]).AvatarSizes.XSMALL;
        return closure_1_10(tmp(tmp2[14]).Avatar, obj);
      }
    } else if (type.type === tmp(tmp2[13]).SelectOptionType.ROLE) {
      if (null != guild) {
        const role = store.getRole(tmp3.id, type.value);
      }
      if (null != guild) {
        if (null != role) {
          let tmpResult = tmp(tmp2[15]);
          if (tmpResult.canGuildUseRoleIcons(tmp3, role)) {
            tmpResult = tmp(tmp2[15]);
            let roleIconData = tmpResult.getRoleIconData(role);
            if (roleIconData == null) {
              roleIconData = {};
            }
            ({ customIconSrc, unicodeEmoji } = roleIconData);
            let tmp7;
            if (null != customIconSrc) {
              obj = { uri: null };
              obj[0] = customIconSrc;
              tmp7 = obj;
            }
            obj1 = { source: null, unicodeEmoji: null, size: 24, name: null };
            obj1[0] = tmp7;
            obj1[1] = unicodeEmoji;
            obj1[3] = role.name;
            return closure_1_10(channelId(tmp2[16]), obj1);
          }
          let colorString;
          if (role != null) {
            colorString = role.colorString;
          }
          if (colorString == null) {
            colorString = closure_1_9;
          }
          const obj2 = { color: null };
          obj2[0] = colorString;
          return closure_1_10(tmp(tmp2[17]).ShieldUserIcon, obj2);
        }
      }
      return null;
    }
  }, items1);
  return callback(channelId(guildId[18]), {
    onPressOptionItem,
    renderIcon: callback1,
    renderDescription(type) {
      if (type.type === selectionActionComponent(guildId[13]).SelectOptionType.USER) {
        const user = closure_1_8.getUser(type.value);
        const obj = { user: null, usernameStyle: null, discriminatorStyle: null, nicknameStyle: null };
        obj[0] = user;
        ({ name: obj[1], discriminator: obj[2], name: obj[3] } = closure_3);
        return closure_1_10(channelId(tmp[19]), obj);
      }
      tmp = guildId;
    },
    renderOptionSuffix(item) {
      if (item.type === selectionActionComponent(guildId[13]).SelectOptionType.ROLE) {
        let role;
        if (null != guild) {
          role = store.getRole(tmp3.id, item.value);
        }
        let tmp7 = null;
        if (null != role) {
          let tmp9;
          if (store != null) {
            tmp9 = tmp8[role.id];
          }
          tmp7 = tmp9;
        }
        if (null != tmp7) {
          let obj = { style: null, children: null };
          obj[0] = closure_3.roleCountContainer;
          obj = { style: null, variant: "text-sm/medium", color: "interactive-text-default", children: null };
          obj[0] = closure_3.roleCountText;
          obj[3] = tmp7;
          const items = [closure_1_10(tmp(tmp2[20]).Text, obj), closure_1_10(tmp(tmp2[21]).UserIcon, { size: "xs" })];
          obj[1] = items;
          return closure_1_11(guild, obj);
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
          let obj = { username: null, discriminator: null };
          obj[0] = type.label;
          let discriminator;
          if (user != null) {
            discriminator = user.discriminator;
          }
          obj[1] = discriminator;
          let formatToPlainStringResult = formatToPlainString(t["zogo/8"], obj);
        } else {
          obj = { username: null, discriminator: null };
          obj[0] = type.label;
          let discriminator1;
          if (user != null) {
            discriminator1 = user.discriminator;
          }
          obj[1] = discriminator1;
          formatToPlainStringResult = formatToPlainString(t.AydQ7a, obj);
        }
        return formatToPlainStringResult;
      } else if (type.type === tmp(tmp2[13]).SelectOptionType.ROLE) {
        const intl = tmp(tmp2[22]).intl;
        obj = { roleName: null };
        obj[0] = type.label;
        return intl.formatToPlainString(tmp(tmp2[22]).t.F6ejkk, obj);
      }
    },
    channelId,
    allowEmpty
  });
};