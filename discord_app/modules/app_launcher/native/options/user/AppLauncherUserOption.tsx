// discord_app/modules/app_launcher/native/options/user/AppLauncherUserOption.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import KeyboardManagerUtils from "../../../../../utils/native/KeyboardManagerUtils.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
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
fn(4560);
let createStyles = { iconWrapper: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles.iconWrapper = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
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
  let obj = option(504);
  const items = [onPress];
  const stateFromStores = obj.useStateFromStores(items, () => onPress.useReducedMotion);
  const tmp = c7();
  [tmp6, c6] = _slicedToArray(
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
  [tmp8, c7] = _slicedToArray(channel.useState(null), 2);
  obj = {
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
  obj.selected = tmp12;
  obj.onPress = function onPress() {
    if (onPress != null) {
      tmp();
    }
    let obj = KeyboardManagerUtils;
    const result = obj.dismissGlobalKeyboard();
    const obj2 = ActionSheetActionCreatorsDefault;
    obj = {
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
    };
    obj2.openLazy(
      asyncRequireImpl(12185, dependencyMap.paths),
      AppLauncherUserListActionSheet.APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY,
      obj,
    );
  };
  if (null != tmp8) {
    obj = { user: tmp8, guildId: guild_id, animate: !stateFromStores, size: tmp2(1178).AvatarSizes.REFRESH_MEDIUM_32 };
    let tmp9Result = tmp9(tmp2(1178).Avatar, obj);
  } else {
    const obj1 = {
      icon: tmp9(tmp2(10917).UserCircleIcon, { size: "sm", color: "interactive-text-default" }),
      wrapperStyle: tmp.iconWrapper,
    };
    tmp9Result = tmp9(AppLauncherOptionIconDefault, obj1);
    const tmp10Result = AppLauncherOptionIconDefault;
  }
  obj.leading = tmp9Result;
  if (null != tmp8) {
    let obj2 = { guildId: guild_id, user: tmp8 };
    tmp9Result = tmp9(UsernameTextDefault, obj2);
  } else {
    tmp9Result = null;
    if (null != tmp6) {
      const obj3 = { variant: "text-md/medium", color: "text-default", children: tmp6 };
      tmp9Result = tmp9(tmp2(4556).Text, obj3);
    }
  }
  obj.selectedItemName = tmp9Result;
  obj.autoFocus = autoFocus;
  return jsx(AppLauncherSelectOptionFormRowDefault, obj);
}
