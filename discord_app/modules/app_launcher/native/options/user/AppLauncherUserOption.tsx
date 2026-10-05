// discord_app/modules/app_launcher/native/options/user/AppLauncherUserOption.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import KeyboardManagerUtils from "../../../../../utils/native/KeyboardManagerUtils.tsx";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AppLauncherSelectOptionFormRowDefault from "../../base_components/AppLauncherSelectOptionFormRow.tsx";
import AppLauncherOptionIconDefault from "../../base_components/AppLauncherOptionIcon.tsx";
import UsernameTextDefault from "../../base_components/UsernameText.tsx";
import AppLauncherUserListActionSheet from "AppLauncherUserListActionSheet.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let obj2;
let jsx = Fragment.jsx;
let obj = { iconWrapper: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_7 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/app_launcher/native/options/user/AppLauncherUserOption.tsx");

export default function AppLauncherUserOption(option) {
  let autoFocus;
  let c6;
  let c7;
  let channel;
  let hasError;
  let onActionSheetDismiss;
  let style;
  let tmp12;
  let tmp6;
  let tmp8;
  let tmp9Result;
  let tmp9Result2;
  option = option.option;
  ({ initialValue: importDefault, onUserPress: dependencyMap, onActionSheetDismiss: _slicedToArray, channel } = option);
  const onPress = option.onPress;
  jsx = undefined;
  c7 = undefined;
  ({ style, autoFocus, hasError } = option);
  const guild_id = channel.guild_id;
  const tmp = c7();
  let obj = option(504);
  const items = [onPress];
  const stateFromStores = obj.useStateFromStores(items, () => onPress.useReducedMotion);
  let tmp5 = _slicedToArray(
    channel.useState(() => {
      let userId = null;
      if (null != importDefault) {
        userId = null;
        if ("userMention" === importDefault.type) {
          userId = importDefault.userId;
        }
      }
      return userId;
    }),
    2,
  );
  [tmp6, c6] = tmp5;
  [tmp8, c7] = _slicedToArray(channel.useState(null), 2);
  let obj2 = {
    style,
    option,
    hasError,
    selected: tmp12,
    onPress() {
      if (onPress != null) {
        tmp();
      }
      const obj = KeyboardManagerUtils;
      const result = obj.dismissGlobalKeyboard();
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj2 = {
        option,
        channel,
        onUserPress(user) {
          user = user.user;
          if (typeof user === "string") {
            closure_1_6(user);
          } else {
            closure_1_6(user.id);
            closure_1_7(user);
          }
          closure_1_2({ user });
        },
        onActionSheetDismiss: _slicedToArray,
      };
      const tmp5 = asyncRequire(11811, dependencyMap.paths);
      openLazy(tmp5, AppLauncherUserListActionSheet.APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY, obj2);
    },
    leading: tmp9Result,
    selectedItemName: tmp9Result2,
    autoFocus,
  };
  tmp12 = null != tmp8;
  const tmp7 = _slicedToArray(channel.useState(null), 2);
  const tmp11 = AppLauncherSelectOptionFormRowDefault;
  if (!tmp12) {
    tmp12 = null != tmp6;
  }
  if (null != tmp8) {
    const obj3 = {
      user: tmp8,
      guildId: guild_id,
      animate: !stateFromStores,
      size: option(1188).AvatarSizes.REFRESH_MEDIUM_32,
    };
    const Avatar = tmp2(1188).Avatar;
    tmp9Result = tmp9(Avatar, obj3);
  } else {
    const obj4 = {
      icon: jsx(option(10654).UserCircleIcon, { size: "sm", color: "interactive-text-default" }),
      wrapperStyle: tmp.iconWrapper,
    };
    const tmp10Result = AppLauncherOptionIconDefault;
    tmp9Result = tmp9(tmp10Result, obj4);
  }
  if (null != tmp8) {
    const obj5 = { guildId: guild_id, user: tmp8 };
    tmp9Result2 = tmp9(UsernameTextDefault, obj5);
  } else {
    tmp9Result2 = null;
    if (null != tmp6) {
      const obj6 = { variant: "text-md/medium", color: "text-default", children: tmp6 };
      tmp9Result2 = tmp9(tmp2(4886).Text, obj6);
    }
  }
  return jsx(tmp11, obj2);
}
