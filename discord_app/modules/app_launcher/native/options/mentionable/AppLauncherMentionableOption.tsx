// discord_app/modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx
import _slicedToArray from "_slicedToArray";
import asyncRequireImpl from "asyncRequireImpl";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import { StatusTypes } from "sum";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../../discord_common/js/packages/flux/index.tsx";
import { UserCircleIcon } from "../../../../../design/components/Icon/native/redesign/generated/UserCircleIcon.tsx";
import { styles } from "../../base_components/AppLauncherOptionIcon.tsx";

const require = arg1;
function MentionableIcon(mentionable) {
  mentionable = mentionable.mentionable;
  let obj = initialize;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { icon: null, wrapperStyle: null };
  const tmp = createCacheKey();
  obj[0] = jsx(UserCircleIcon.UserCircleIcon, { size: "sm", color: "interactive-text-default" });
  obj[1] = tmp.iconWrapper;
  const tmp7 = jsx(styles, { icon: null, wrapperStyle: null });
  if (null == mentionable) {
    return tmp7;
  } else {
    const type = mentionable.type;
    if (tmp2(11358).MentionableItemTypes.USER === type) {
      obj = { user: null, guildId: null, animate: null, size: null };
      obj[0] = mentionable.result.user;
      obj[1] = mentionable.guildId;
      obj[2] = !stateFromStores;
      obj[3] = tmp2(1297).AvatarSizes.REFRESH_MEDIUM_32;
      return tmp5(tmp2(1297).Avatar, obj);
    } else if (tmp2(11358).MentionableItemTypes.ROLE === type) {
      const obj1 = { role: null };
      obj1[0] = mentionable.result;
      return tmp5(tmp2(11359).RoleIcon, obj1);
    } else {
      const GLOBAL = tmp2(11358).MentionableItemTypes.GLOBAL;
      return tmp7;
    }
  }
  const tmp6 = styles;
}
createCacheKey = { iconWrapper: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx");

export default function AppLauncherMentionableOption(option) {
  let autoFocus;
  let channel;
  let _slicedToArray;
  let hasError;
  let style;
  option = option.option;
  const initialValue = option.initialValue;
  const onMentionablePress = option.onMentionablePress;
  ({ onActionSheetDismiss: _slicedToArray, channel } = option);
  const onPress = option.onPress;
  let guild_id;
  let first;
  let closure_8;
  guild_id = channel.guild_id;
  ({ style, autoFocus, hasError } = option);
  let tmp = callback(channel.useState(() => {
    if (null != initialValue) {
      if ("roleMention" === tmp.type) {
        const role = guild_id.getRole(guild_id, tmp.roleId);
        if (null != role) {
          let obj = { type: null, result: null };
          obj[0] = option(onMentionablePress[12]).MentionableItemTypes.ROLE;
          obj[1] = role;
          return obj;
        }
      } else if ("userMention" === tmp.type) {
        const user = first.getUser(tmp.userId);
        if (null != user) {
          obj = { type: null, result: null };
          obj[0] = option(onMentionablePress[12]).MentionableItemTypes.USER;
          obj = { user: null, score: 0, status: null, nick: "" };
          obj[0] = user;
          obj[2] = constants.UNKNOWN;
          obj[1] = obj;
          return obj;
        }
      } else if ("textMention" === tmp.type) {
        const obj1 = { type: null, result: null };
        obj1[0] = option(onMentionablePress[12]).MentionableItemTypes.GLOBAL;
        ({ text: obj5[0], text: obj5[1] } = tmp);
        obj1[1] = { text: null, test: null, description: "" };
        return obj1;
      }
    }
    return null;
  }), 2);
  first = tmp[0];
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
      const type = tmp.type;
      if (option(onMentionablePress[12]).MentionableItemTypes.USER === type) {
        const obj = { guildId: null, user: null };
        obj[0] = guild_id;
        obj[1] = tmp.result.user;
        return outer1_9(initialValue(tmp6[15]), obj);
      } else if (tmp5(tmp6[12]).MentionableItemTypes.ROLE === type) {
        return tmp.result.name;
      } else if (tmp5(tmp6[12]).MentionableItemTypes.GLOBAL === type) {
        return tmp.result.text;
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
    let obj = initialValue(onMentionablePress[17]);
    obj = {
      option,
      channel,
      onMentionablePress(mentionable) {
        mentionable = mentionable.mentionable;
        callback2(mentionable);
        callback({ mentionable });
      },
      onActionSheetDismiss: _slicedToArray
    };
    obj.openLazy(option(onMentionablePress[19])(onMentionablePress[18], onMentionablePress.paths), option(onMentionablePress[12]).APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY, obj);
  };
  obj[7] = autoFocus;
  return jsx(initialValue(onMentionablePress[16]), { style, option, hasError, selected: null != first, selectedItemName: null, leading: null, onPress: null, autoFocus: null });
};