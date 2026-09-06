// === Module 12178: AppLauncherMentionableOption ===

// Module 12178 (AppLauncherMentionableOption)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import UserCircleIcon from "UserCircleIcon" /* 10917 */;
import AppLauncherOptionIconDefault from "AppLauncherOptionIcon" /* 12179 */;
import AppLauncherMentionableListActionSheet from "AppLauncherMentionableListActionSheet" /* 12180 */;
import AppLauncherRoleListActionSheet from "AppLauncherRoleListActionSheet" /* 12181 */;
import UsernameTextDefault from "UsernameText" /* 12182 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function MentionableIcon(mentionable) {
  mentionable = mentionable.mentionable;
  let obj = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { icon: null, wrapperStyle: null };
  const tmp = closure_10();
  obj.icon = jsx(UserCircleIcon.UserCircleIcon, { size: "sm", color: "interactive-text-default" });
  obj.wrapperStyle = tmp.iconWrapper;
  const tmp7 = jsx(AppLauncherOptionIconDefault, { icon: null, wrapperStyle: null });
  if (null == mentionable) {
    return tmp7;
  } else {
    const type = mentionable.type;
    if (AppLauncherMentionableListActionSheet.MentionableItemTypes.USER === type) {
      obj = { user: mentionable.result.user, guildId: mentionable.guildId, animate: !stateFromStores, size: native.AvatarSizes.REFRESH_MEDIUM_32 };
      return jsx(native.Avatar, { user: mentionable.result.user, guildId: mentionable.guildId, animate: !stateFromStores, size: native.AvatarSizes.REFRESH_MEDIUM_32 });
    } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE === type) {
      const obj1 = { role: mentionable.result };
      return jsx(AppLauncherRoleListActionSheet.RoleIcon, { role: mentionable.result });
    } else {
      const GLOBAL = AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL;
      return tmp7;
    }
  }
}
const StatusTypes = fn(1085).StatusTypes;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { iconWrapper: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles.iconWrapper = createStyles;
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx");

export default function AppLauncherMentionableOption(option) {
  option = option.option;
  const initialValue = option.initialValue;
  const onMentionablePress = option.onMentionablePress;
  ({ onActionSheetDismiss: _slicedToArray, channel } = option);
  const onPress = option.onPress;
  const guild_id = channel.guild_id;
  ({ style, autoFocus, hasError } = option);
  let tmp = _slicedToArray(channel.useState(() => {
    if (null != initialValue) {
      if ("roleMention" === initialValue.type) {
        const role = GuildRoleStore.getRole(guild_id, initialValue.roleId);
        if (null != role) {
          let obj = { type: AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE, result: role };
          return obj;
        }
      } else if ("userMention" === initialValue.type) {
        const user = UserStore.getUser(initialValue.userId);
        if (null != user) {
          obj = { type: AppLauncherMentionableListActionSheet.MentionableItemTypes.USER, result: null };
          obj = { user, score: 0, status: StatusTypes.UNKNOWN, nick: "" };
          obj.result = obj;
          return obj;
        }
      } else if ("textMention" === initialValue.type) {
        const obj1 = { type: AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL, result: null };
        ({ text: obj5.text, text: obj5.test } = initialValue);
        obj1.result = { text: null, test: null, description: "" };
        return obj1;
      }
    }
    return null;
  }), 2);
  let mentionable = tmp[0];
  closure_8 = tmp[1];
  const items = [onMentionablePress, option.name, initialValue, mentionable];
  const effect = channel.useEffect(() => {
    let tmp = null != initialValue;
    if (tmp) {
      tmp = null == first;
    }
    if (tmp) {
      onMentionablePress({ mentionable: null });
    }
  }, items);
  const items1 = [mentionable, guild_id];
  const memo = channel.useMemo(() => {
    if (null == first) {
      return null;
    } else {
      const type = first.type;
      if (AppLauncherMentionableListActionSheet.MentionableItemTypes.USER === type) {
        const obj = { guildId: guild_id, user: first.result.user };
        return jsx(UsernameTextDefault, { guildId: guild_id, user: first.result.user });
      } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE === type) {
        return first.result.name;
      } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL === type) {
        return first.result.text;
      }
    }
  }, items1);
  let obj = { style, option, hasError, selected: null != mentionable, selectedItemName: null, leading: null, onPress: null, autoFocus: null };
  let tmp7;
  if (null != mentionable) {
    tmp7 = memo;
  }
  obj.selectedItemName = tmp7;
  obj.leading = <MentionableIcon mentionable={mentionable} guildId={guild_id} />;
  obj.onPress = function onPress() {
    if (onPress != null) {
      tmp();
    }
    const obj = {
      option,
      channel,
      onMentionablePress(mentionable) {
        mentionable = mentionable.mentionable;
        closure_1_8(mentionable);
        onMentionablePress({ mentionable });
      },
      onActionSheetDismiss
    };
    obj.openLazy(asyncRequireImpl(12180, dependencyMap.paths), AppLauncherMentionableListActionSheet.APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY, obj);
  };
  obj.autoFocus = autoFocus;
  return jsx(initialValue(onMentionablePress[16]), { style, option, hasError, selected: null != mentionable, selectedItemName: null, leading: null, onPress: null, autoFocus: null });
};