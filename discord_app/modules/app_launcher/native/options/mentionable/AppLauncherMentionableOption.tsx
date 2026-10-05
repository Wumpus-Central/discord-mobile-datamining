// discord_app/modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../../discord_common/js/shared/Constants.tsx";
import native from "../../../../../design/void/native.tsx";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserCircleIcon from "../../../../../design/components/Icon/native/redesign/generated/UserCircleIcon.tsx";
import AppLauncherMentionableListActionSheet from "AppLauncherMentionableListActionSheet.tsx";
import AppLauncherRoleListActionSheet from "../role/AppLauncherRoleListActionSheet.tsx";
import AppLauncherOptionIconDefault from "../../base_components/AppLauncherOptionIcon.tsx";
import UsernameTextDefault from "../../base_components/UsernameText.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import GuildRoleStore from "../../../../../stores/GuildRoleStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let obj2;
const StatusTypes = Constants.StatusTypes;
const jsx = Fragment.jsx;
let obj = { iconWrapper: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let guildId;
      let mentionable;
      let tmp12;
      let tmp5;
      let tmp6;
      let tmp9;
      let useReducedMotion;
      const obj = react2;
      const cResult = obj.c(11);
      ({ mentionable, guildId } = arg0);
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function s() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = jsx(UserCircleIcon.UserCircleIcon, { size: "sm", color: "interactive-text-default" });
        cResult[2] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== tmp4.iconWrapper) {
        const tmp15 = jsx(AppLauncherOptionIconDefault, { icon: tmp9, wrapperStyle: tmp4.iconWrapper });
        cResult[3] = tmp4.iconWrapper;
        cResult[4] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[4];
      }
      if (null == mentionable) {
        return tmp12;
      } else {
        const type = mentionable.type;
        if (AppLauncherMentionableListActionSheet.MentionableItemTypes.USER === type) {
          const user = mentionable.result.user;
          if (cResult[5] === guildId) {
            if (cResult[6] === !stateFromStores) {
              let tmp20;
              if (cResult[7] === user) {
                tmp20 = cResult[8];
              }
              return tmp20;
            }
          }
          const Avatar = native.Avatar;
          const tmp22 = (
            <Avatar
              user={user}
              guildId={guildId}
              animate={!stateFromStores}
              size={native.AvatarSizes.REFRESH_MEDIUM_32}
            />
          );
          cResult[5] = guildId;
          cResult[6] = !stateFromStores;
          cResult[7] = user;
          cResult[8] = tmp22;
          tmp20 = tmp22;
        } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE === type) {
          let tmp16;
          const result = mentionable.result;
          if (cResult[9] !== result) {
            const tmp18 = jsx(AppLauncherRoleListActionSheet.RoleIcon, { role: result });
            cResult[9] = result;
            cResult[10] = tmp18;
            tmp16 = tmp18;
          } else {
            tmp16 = cResult[10];
          }
          return tmp16;
        } else {
          const GLOBAL = AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL;
          return tmp12;
        }
      }
    }
  : (mentionable) => {
      let useReducedMotion;
      mentionable = mentionable.mentionable;
      const guildId = mentionable.guildId;
      const items = [AccessibilityStore];
      const tmp = closure_10();
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      AppLauncherOptionIconDefault;
      const tmp7 = <tmp6 icon={null} wrapperStyle={tmp.iconWrapper} />;
      if (null == mentionable) {
        return tmp7;
      } else {
        const type = mentionable.type;
        if (AppLauncherMentionableListActionSheet.MentionableItemTypes.USER === type) {
          const Avatar = native.Avatar;
          return (
            <Avatar
              user={mentionable.result.user}
              guildId={guildId}
              animate={!stateFromStores}
              size={native.AvatarSizes.REFRESH_MEDIUM_32}
            />
          );
        } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE === type) {
          return jsx(AppLauncherRoleListActionSheet.RoleIcon, { role: mentionable.result });
        } else {
          const GLOBAL = AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL;
          return tmp7;
        }
      }
    };
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx",
);

export default function AppLauncherMentionableOption(option) {
  let autoFocus;
  let channel;
  let closure_8;
  let hasError;
  let mentionable;
  let onActionSheetDismiss;
  let style;
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
    let obj9;
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
          const obj = { type: AppLauncherMentionableListActionSheet.MentionableItemTypes.USER, result: obj3 };
          return obj;
        }
      } else if ("textMention" === initialValue.type) {
        const obj4 = { type: AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL, result: obj9 };
        obj9 = { text: null, test: null, description: "" };
        ({ text: obj5.text, text: obj5.test } = initialValue);
        return obj4;
      }
    }
    return null;
  });
  const items = [onMentionablePress, option.name, initialValue, mentionable];
  const effect = channel.useEffect(() => {
    const tmp = null != initialValue && null == first;
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
        return jsx(UsernameTextDefault, { guildId: guild_id, user: first.result.user });
      } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE === type) {
        return first.result.name;
      } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL === type) {
        return first.result.text;
      }
    }
  }, items1);
  let tmp7;
  initialValue(onMentionablePress[18]);
  if (null != mentionable) {
    tmp7 = memo;
  }
  return (
    <tmp6
      style={style}
      option={option}
      hasError={hasError}
      selected={null != mentionable}
      selectedItemName={tmp7}
      leading={null}
      onPress={function onPress() {
        if (onPress != null) {
          tmp();
        }
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        ActionSheetActionCreatorsDefault;
        const obj = {
          option,
          channel,
          onMentionablePress(mentionable) {
            mentionable = mentionable.mentionable;
            closure_1_8(mentionable);
            onMentionablePress({ mentionable });
          },
          onActionSheetDismiss: _slicedToArray,
        };
        const tmp4 = asyncRequire(11804, dependencyMap.paths);
        openLazy(tmp4, AppLauncherMentionableListActionSheet.APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY, obj);
      }}
      autoFocus={autoFocus}
    />
  );
}
