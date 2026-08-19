// discord_app/modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../../design/void/native.tsx";
import UserCircleIcon from "../../../../../design/components/Icon/native/redesign/generated/UserCircleIcon.tsx";
import stylesDefault from "../../base_components/AppLauncherOptionIcon.tsx";
import AppLauncherMentionableListActionSheet from "AppLauncherMentionableListActionSheet.tsx";
import RoleIcon from "../role/AppLauncherRoleListActionSheet.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../../../a11y/AccessibilityStore.tsx";
import createGuildRoleRecordFromRust from "../../../../../stores/GuildRoleStore.tsx";
import mergeGuildAvatar from "../../../../../stores/UserStore.tsx";
import { StatusTypes } from "../../../../../../discord_common/js/shared/Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function MentionableIcon(mentionable) {
  mentionable = mentionable.mentionable;
  let obj = initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { icon: null, wrapperStyle: null };
  const tmp = callback2();
  obj[0] = jsx(UserCircleIcon.UserCircleIcon, { size: "sm", color: "interactive-text-default" });
  obj[1] = tmp.iconWrapper;
  const tmp7 = jsx(stylesDefault, { icon: null, wrapperStyle: null });
  if (null == mentionable) {
    return tmp7;
  } else {
    const type = mentionable.type;
    if (AppLauncherMentionableListActionSheet.MentionableItemTypes.USER === type) {
      obj = { user: null, guildId: null, animate: null, size: null };
      obj[0] = mentionable.result.user;
      obj[1] = mentionable.guildId;
      obj[2] = !stateFromStores;
      obj[3] = Button.AvatarSizes.REFRESH_MEDIUM_32;
      return jsx(Button.Avatar, { user: null, guildId: null, animate: null, size: null });
    } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE === type) {
      obj1 = { role: null };
      obj1[0] = mentionable.result;
      return jsx(RoleIcon.RoleIcon, { role: null });
    } else {
      const GLOBAL = AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL;
      return tmp7;
    }
  }
}
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[0] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx");

export default function AppLauncherMentionableOption(option) {
  option = option.option;
  const initialValue = option.initialValue;
  const onMentionablePress = option.onMentionablePress;
  ({ onActionSheetDismiss: closure_3, channel } = option);
  const onPress = option.onPress;
  const guild_id = channel.guild_id;
  ({ style, autoFocus, hasError } = option);
  let tmp = callback(channel.useState(() => {
    if (null != initialValue) {
      if ("roleMention" === initialValue.type) {
        const role = guild_id.getRole(guild_id, initialValue.roleId);
        if (null != role) {
          let obj = { type: null, result: null };
          obj[0] = option(onMentionablePress[12]).MentionableItemTypes.ROLE;
          obj[1] = role;
          return obj;
        }
      } else if ("userMention" === initialValue.type) {
        const user = first.getUser(initialValue.userId);
        if (null != user) {
          obj = { type: null, result: null };
          obj[0] = option(onMentionablePress[12]).MentionableItemTypes.USER;
          obj = { user: null, score: 0, status: null, nick: "" };
          obj[0] = user;
          obj[2] = constants.UNKNOWN;
          obj[1] = obj;
          return obj;
        }
      } else if ("textMention" === initialValue.type) {
        obj1 = { type: null, result: null };
        obj1[0] = option(onMentionablePress[12]).MentionableItemTypes.GLOBAL;
        ({ text: obj5[0], text: obj5[1] } = initialValue);
        obj1[1] = { text: null, test: null, description: "" };
        return obj1;
      }
    }
    return null;
  }), 2);
  const first = tmp[0];
  closure_8 = tmp[1];
  const items = [onMentionablePress, option.name, initialValue, first];
  const effect = channel.useEffect(() => {
    let tmp = null != initialValue;
    if (tmp) {
      tmp = null == first;
    }
    if (tmp) {
      onMentionablePress({ mentionable: null });
    }
  }, items);
  const items1 = [first, guild_id];
  const memo = channel.useMemo(() => {
    if (null == first) {
      return null;
    } else {
      const type = first.type;
      if (option(onMentionablePress[12]).MentionableItemTypes.USER === type) {
        const obj = { guildId: null, user: null };
        obj[0] = guild_id;
        obj[1] = first.result.user;
        return jsx(initialValue(onMentionablePress[15]), { guildId: null, user: null });
      } else if (option(onMentionablePress[12]).MentionableItemTypes.ROLE === type) {
        return first.result.name;
      } else if (option(onMentionablePress[12]).MentionableItemTypes.GLOBAL === type) {
        return first.result.text;
      }
    }
  }, items1);
  let obj = { style, option, hasError, selected: null != first, selectedItemName: null, leading: null, onPress: null, autoFocus: null };
  let tmp7;
  if (null != first) {
    tmp7 = memo;
  }
  obj[4] = tmp7;
  obj[5] = <MentionableIcon mentionable={first} guildId={guild_id} />;
  obj[6] = function onPress() {
    if (onPress != null) {
      tmp();
    }
    initialValue(onMentionablePress[17]);
    const obj = {
      option,
      channel,
      onMentionablePress(mentionable) {
        mentionable = mentionable.mentionable;
        callback2(mentionable);
        callback({ mentionable });
      },
      onActionSheetDismiss: closure_3
    };
    obj.openLazy(option(onMentionablePress[19])(onMentionablePress[18], onMentionablePress.paths), option(onMentionablePress[12]).APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY, obj);
  };
  obj[7] = autoFocus;
  return jsx(initialValue(onMentionablePress[16]), { style, option, hasError, selected: null != first, selectedItemName: null, leading: null, onPress: null, autoFocus: null });
};