// discord_app/modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserCircleIcon from "../../../../../design/components/Icon/native/redesign/generated/UserCircleIcon.tsx";
import AppLauncherOptionIconDefault from "../../base_components/AppLauncherOptionIcon.tsx";
import AppLauncherMentionableListActionSheet from "AppLauncherMentionableListActionSheet.tsx";
import UsernameTextDefault from "../../base_components/UsernameText.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import GuildRoleStore from "../../../../../stores/GuildRoleStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

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
    if (tmp2(12180).MentionableItemTypes.USER === type) {
      obj = {
        user: mentionable.result.user,
        guildId: mentionable.guildId,
        animate: !stateFromStores,
        size: tmp2(1178).AvatarSizes.REFRESH_MEDIUM_32,
      };
      return tmp5(tmp2(1178).Avatar, obj);
    } else if (tmp2(12180).MentionableItemTypes.ROLE === type) {
      const obj1 = { role: mentionable.result };
      return tmp5(tmp2(12181).RoleIcon, obj1);
    } else {
      const GLOBAL = tmp2(12180).MentionableItemTypes.GLOBAL;
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
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx",
);

export default function AppLauncherMentionableOption(option) {
  option = option.option;
  const initialValue = option.initialValue;
  const onMentionablePress = option.onMentionablePress;
  ({ onActionSheetDismiss: _slicedToArray, channel } = option);
  const onPress = option.onPress;
  const guild_id = channel.guild_id;
  ({ style, autoFocus, hasError } = option);
  let tmp = _slicedToArray(
    channel.useState(() => {
      if (null != initialValue) {
        if ("roleMention" === tmp.type) {
          const role = GuildRoleStore.getRole(guild_id, tmp.roleId);
          if (null != role) {
            let obj = { type: AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE, result: role };
            return obj;
          }
        } else if ("userMention" === tmp.type) {
          const user = UserStore.getUser(tmp.userId);
          if (null != user) {
            obj = { type: AppLauncherMentionableListActionSheet.MentionableItemTypes.USER, result: null };
            obj = { user, score: 0, status: StatusTypes.UNKNOWN, nick: "" };
            obj.result = obj;
            return obj;
          }
        } else if ("textMention" === tmp.type) {
          const obj1 = { type: AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL, result: null };
          ({ text: obj5.text, text: obj5.test } = tmp);
          obj1.result = { text: null, test: null, description: "" };
          return obj1;
        }
      }
      return null;
    }),
    2,
  );
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
      const type = tmp.type;
      if (AppLauncherMentionableListActionSheet.MentionableItemTypes.USER === type) {
        const obj = { guildId: guild_id, user: tmp.result.user };
        return jsx(UsernameTextDefault, { guildId: guild_id, user: tmp.result.user });
      } else if (tmp5(12180).MentionableItemTypes.ROLE === type) {
        return tmp.result.name;
      } else if (tmp5(12180).MentionableItemTypes.GLOBAL === type) {
        return tmp.result.text;
      }
    }
  }, items1);
  let obj = {
    style,
    option,
    hasError,
    selected: null != mentionable,
    selectedItemName: null,
    leading: null,
    onPress: null,
    autoFocus: null,
  };
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
      onActionSheetDismiss,
    };
    obj.openLazy(
      asyncRequireImpl(12180, dependencyMap.paths),
      AppLauncherMentionableListActionSheet.APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY,
      obj,
    );
  };
  obj.autoFocus = autoFocus;
  return jsx(initialValue(onMentionablePress[16]), {
    style,
    option,
    hasError,
    selected: null != mentionable,
    selectedItemName: null,
    leading: null,
    onPress: null,
    autoFocus: null,
  });
}
