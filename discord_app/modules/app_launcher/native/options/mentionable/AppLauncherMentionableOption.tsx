// discord_app/modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import UserCircleIcon from "../../../../../design/components/Icon/native/redesign/generated/UserCircleIcon.tsx";
import stylesDefault from "../../base_components/AppLauncherOptionIcon.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import closure_5 from "../../../../a11y/AccessibilityStore.tsx";
import closure_6 from "../../../../../stores/GuildRoleStore.tsx";
import closure_7 from "../../../../../stores/UserStore.tsx";
import { StatusTypes } from "../../../../../../discord_common/js/shared/Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
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
    if (tmp2(11838).MentionableItemTypes.USER === type) {
      obj = { user: null, guildId: null, animate: null, size: null };
      obj[0] = mentionable.result.user;
      obj[1] = mentionable.guildId;
      obj[2] = !stateFromStores;
      obj[3] = tmp2(1297).AvatarSizes.REFRESH_MEDIUM_32;
      return tmp5(tmp2(1297).Avatar, obj);
    } else if (tmp2(11838).MentionableItemTypes.ROLE === type) {
      obj1 = { role: null };
      obj1[0] = mentionable.result;
      return tmp5(tmp2(11839).RoleIcon, obj1);
    } else {
      const GLOBAL = tmp2(11838).MentionableItemTypes.GLOBAL;
      return tmp7;
    }
  }
  const tmp6 = stylesDefault;
}
createCacheKey = { iconWrapper: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[0] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx");

export default function AppLauncherMentionableOption(option) {
  option = option.option;
  const initialValue = option.initialValue;
  const onMentionablePress = option.onMentionablePress;
  ({ onActionSheetDismiss: closure_3, channel } = option);
  const onPress = option.onPress;
  let guild_id;
  let first;
  closure_8 = undefined;
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
        obj1 = { type: null, result: null };
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
        return closure_1_9(initialValue(tmp6[15]), obj);
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
      onActionSheetDismiss: closure_3
    };
    obj.openLazy(option(onMentionablePress[19])(onMentionablePress[18], onMentionablePress.paths), option(onMentionablePress[12]).APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY, obj);
  };
  obj[7] = autoFocus;
  return jsx(initialValue(onMentionablePress[16]), { style, option, hasError, selected: null != first, selectedItemName: null, leading: null, onPress: null, autoFocus: null });
};