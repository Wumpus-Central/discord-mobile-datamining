// discord_app/modules/app_launcher/native/options/user/AppLauncherUserOption.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AppLauncherSelectOptionFormRowDefault from "../../base_components/AppLauncherSelectOptionFormRow.tsx";
import stylesDefault from "../../base_components/AppLauncherOptionIcon.tsx";
import UsernameTextDefault from "../../base_components/UsernameText.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../../../a11y/AccessibilityStore.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/app_launcher/native/options/user/AppLauncherUserOption.tsx");

export default function AppLauncherUserOption(option) {
  option = option.option;
  ({ initialValue: importDefault, onUserPress: dependencyMap, onActionSheetDismiss: closure_3, channel } = option);
  const onPress = option.onPress;
  c6 = undefined;
  let callback2;
  ({ style, autoFocus, hasError } = option);
  const guild_id = channel.guild_id;
  let obj = option(589);
  const items = [onPress];
  const stateFromStores = obj.useStateFromStores(items, () => onPress.useReducedMotion);
  const tmp = callback2();
  [tmp6, c6] = callback(channel.useState(() => {
    let userId = null;
    if (null != closure_1) {
      userId = null;
      if ("userMention" === closure_1.type) {
        userId = closure_1.userId;
      }
    }
    return userId;
  }), 2);
  const tmp5 = callback(channel.useState(() => {
    let userId = null;
    if (null != closure_1) {
      userId = null;
      if ("userMention" === closure_1.type) {
        userId = closure_1.userId;
      }
    }
    return userId;
  }), 2);
  [tmp8, c7] = callback(channel.useState(null), 2);
  obj = { style, option, hasError, selected: null, onPress: null, leading: null, selectedItemName: null, autoFocus: null };
  let tmp12 = null != tmp8;
  const tmp7 = callback(channel.useState(null), 2);
  if (!tmp12) {
    tmp12 = null != tmp6;
  }
  obj[3] = tmp12;
  obj[4] = function onPress() {
    if (onPress != null) {
      tmp();
    }
    let obj = option(dependencyMap[8]);
    const result = obj.dismissGlobalKeyboard();
    const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = {
      option,
      channel,
      onUserPress(user) {
        user = user.user;
        if (typeof user === "string") {
          callback2(user);
        } else {
          callback2(user.id);
          callback3(user);
        }
        callback({ user });
      },
      onActionSheetDismiss: closure_3
    };
    obj2.openLazy(option(dependencyMap[11])(dependencyMap[10], dependencyMap.paths), option(dependencyMap[12]).APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY, obj);
  };
  if (null != tmp8) {
    obj = { user: null, guildId: null, animate: null, size: null };
    obj[0] = tmp8;
    obj[1] = guild_id;
    obj[2] = !stateFromStores;
    obj[3] = tmp2(1297).AvatarSizes.REFRESH_MEDIUM_32;
    let tmp9Result = tmp9(tmp2(1297).Avatar, obj);
  } else {
    obj1 = { icon: null, wrapperStyle: null };
    obj1[0] = tmp9(tmp2(9923).UserCircleIcon, { size: "sm", color: "interactive-text-default" });
    obj1[1] = tmp.iconWrapper;
    tmp9Result = tmp9(stylesDefault, obj1);
    const tmp10Result = stylesDefault;
  }
  obj[5] = tmp9Result;
  if (null != tmp8) {
    let obj2 = { guildId: null, user: null };
    obj2[0] = guild_id;
    obj2[1] = tmp8;
    tmp9Result = tmp9(UsernameTextDefault, obj2);
  } else {
    tmp9Result = null;
    if (null != tmp6) {
      const obj3 = { variant: "text-md/medium", color: "text-default", children: null };
      obj3[2] = tmp6;
      tmp9Result = tmp9(tmp2(4734).Text, obj3);
    }
  }
  obj[6] = tmp9Result;
  obj[7] = autoFocus;
  return c6(AppLauncherSelectOptionFormRowDefault, obj);
};