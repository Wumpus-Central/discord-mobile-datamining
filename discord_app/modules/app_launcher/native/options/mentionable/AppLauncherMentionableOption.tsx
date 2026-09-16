// === Module 12320: AppLauncherMentionableOption ===

// Module 12320 (AppLauncherMentionableOption)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import UserCircleIcon from "UserCircleIcon" /* 11066 */;
import AppLauncherOptionIconDefault from "AppLauncherOptionIcon" /* 12321 */;
import AppLauncherMentionableListActionSheet from "AppLauncherMentionableListActionSheet" /* 12322 */;
import AppLauncherRoleListActionSheet from "AppLauncherRoleListActionSheet" /* 12323 */;
import UsernameTextDefault from "UsernameText" /* 12324 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4630 */;
import GuildRoleStore from "GuildRoleStore" /* 2016 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function MentionableIcon(mentionable) {
  mentionable = mentionable.mentionable;
  const tmp = closure_10();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { icon: null, wrapperStyle: null };
  obj2.icon = jsx(UserCircleIcon.UserCircleIcon, { size: "sm", color: "interactive-text-default" });
  obj2.wrapperStyle = tmp.iconWrapper;
  const tmp7 = jsx(AppLauncherOptionIconDefault, { icon: null, wrapperStyle: null });
  if (null == mentionable) {
    return tmp7;
  } else {
    const type = mentionable.type;
    if (AppLauncherMentionableListActionSheet.MentionableItemTypes.USER === type) {
      const obj3 = { user: mentionable.result.user, guildId: mentionable.guildId, animate: !stateFromStores, size: native.AvatarSizes.REFRESH_MEDIUM_32 };
      return jsx(native.Avatar, { user: mentionable.result.user, guildId: mentionable.guildId, animate: !stateFromStores, size: native.AvatarSizes.REFRESH_MEDIUM_32 });
    } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE === type) {
      const obj4 = { role: mentionable.result };
      return jsx(AppLauncherRoleListActionSheet.RoleIcon, { role: mentionable.result });
    } else {
      const GLOBAL = AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL;
      return tmp7;
    }
  }
}
const StatusTypes = fn(1085).StatusTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let obj2 = { iconWrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx");

export default function AppLauncherMentionableOption(option) {
  option = option.option;
  const initialValue = option.initialValue;
  const onMentionablePress = option.onMentionablePress;
  ({ onActionSheetDismiss: _slicedToArray, channel } = option);
  const onPress = option.onPress;
  mentionable = undefined;
  closure_8 = undefined;
  const guild_id = channel.guild_id;
  ({ style, autoFocus, hasError } = option);
  [mentionable, closure_8] = channel.useState(() => {
    if (null != initialValue) {
      if ("roleMention" === initialValue.type) {
        const role = GuildRoleStore.getRole(guild_id, initialValue.roleId);
        if (null != role) {
          const obj2 = { type: AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE, result: role };
          return obj2;
        }
      } else if ("userMention" === initialValue.type) {
        const user = UserStore.getUser(initialValue.userId);
        if (null != user) {
          const obj = { type: AppLauncherMentionableListActionSheet.MentionableItemTypes.USER, result: null };
          const obj3 = { user, score: 0, status: StatusTypes.UNKNOWN, nick: "" };
          obj.result = obj3;
          return obj;
        }
      } else if ("textMention" === initialValue.type) {
        const obj4 = { type: AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL, result: null };
        ({ text: obj5.text, text: obj5.test } = initialValue);
        obj4.result = { text: null, test: null, description: "" };
        return obj4;
      }
    }
    return null;
  });
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
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(12322, dependencyMap.paths), AppLauncherMentionableListActionSheet.APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY, {
      option,
      channel,
      onMentionablePress(mentionable) {
        mentionable = mentionable.mentionable;
        closure_1_8(mentionable);
        onMentionablePress({ mentionable });
      },
      onActionSheetDismiss
    });
  };
  obj.autoFocus = autoFocus;
  return jsx(initialValue(onMentionablePress[16]), { style, option, hasError, selected: null != mentionable, selectedItemName: null, leading: null, onPress: null, autoFocus: null });
};