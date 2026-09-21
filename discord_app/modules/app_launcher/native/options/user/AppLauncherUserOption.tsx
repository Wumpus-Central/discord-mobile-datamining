// discord_app/modules/app_launcher/native/options/user/AppLauncherUserOption.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import KeyboardManagerUtils from "../../../../../utils/native/KeyboardManagerUtils.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AppLauncherSelectOptionFormRowDefault from "../../base_components/AppLauncherSelectOptionFormRow.tsx";
import AppLauncherOptionIconDefault from "../../base_components/AppLauncherOptionIcon.tsx";
import UsernameTextDefault from "../../base_components/UsernameText.tsx";
import AppLauncherUserListActionSheet from "AppLauncherUserListActionSheet.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";

require = fn;
let jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = { iconWrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/options/user/AppLauncherUserOption.tsx");

export default function AppLauncherUserOption(option) {
  option = option.option;
  ({ initialValue: importDefault, onUserPress: dependencyMap, onActionSheetDismiss: _slicedToArray, channel } = option);
  const onPress = option.onPress;
  jsx = undefined;
  c7 = undefined;
  ({ style, autoFocus, hasError } = option);
  const guild_id = channel.guild_id;
  const tmp = c7();
  const items = [onPress];
  const stateFromStores = option(504).useStateFromStores(items, () => onPress.useReducedMotion);
  let obj = option(504);
  [tmp6, c6] = channel.useState(() => {
    let userId = null;
    if (null != importDefault) {
      userId = null;
      if ("userMention" === importDefault.type) {
        userId = importDefault.userId;
      }
    }
    return userId;
  });
  const tmp5 = _slicedToArray(
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
  [tmp8, c7] = channel.useState(null);
  let obj2 = {
    style,
    option,
    hasError,
    selected: null,
    onPress: null,
    leading: null,
    selectedItemName: null,
    autoFocus: null,
  };
  let tmp12 = null != tmp8;
  const tmp7 = _slicedToArray(channel.useState(null), 2);
  if (!tmp12) {
    tmp12 = null != tmp6;
  }
  obj2.selected = tmp12;
  obj2.onPress = function onPress() {
    if (onPress != null) {
      tmp();
    }
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(
      asyncRequireImpl(12438, dependencyMap.paths),
      AppLauncherUserListActionSheet.APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY,
      {
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
        onActionSheetDismiss,
      },
    );
  };
  if (null != tmp8) {
    const obj3 = {
      user: tmp8,
      guildId: guild_id,
      animate: !stateFromStores,
      size: tmp2(1177).AvatarSizes.REFRESH_MEDIUM_32,
    };
    let tmp9Result = tmp9(tmp2(1177).Avatar, obj3);
  } else {
    const obj4 = {
      icon: tmp9(tmp2(11181).UserCircleIcon, { size: "sm", color: "interactive-text-default" }),
      wrapperStyle: tmp.iconWrapper,
    };
    tmp9Result = tmp9(AppLauncherOptionIconDefault, obj4);
    const tmp10Result = AppLauncherOptionIconDefault;
  }
  obj2.leading = tmp9Result;
  if (null != tmp8) {
    const obj5 = { guildId: guild_id, user: tmp8 };
    let tmp9Result2 = tmp9(UsernameTextDefault, obj5);
  } else {
    tmp9Result2 = null;
    if (null != tmp6) {
      const obj6 = { variant: "text-md/medium", color: "text-default", children: tmp6 };
      tmp9Result2 = tmp9(tmp2(4752).Text, obj6);
    }
  }
  obj2.selectedItemName = tmp9Result2;
  obj2.autoFocus = autoFocus;
  return jsx(AppLauncherSelectOptionFormRowDefault, obj2);
}
