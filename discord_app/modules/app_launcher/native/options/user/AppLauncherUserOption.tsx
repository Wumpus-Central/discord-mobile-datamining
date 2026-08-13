// discord_app/modules/app_launcher/native/options/user/AppLauncherUserOption.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { AppLauncherSelectOptionFormRow } from "../../base_components/AppLauncherSelectOptionFormRow.tsx";

const require = arg1;
createCacheKey = { iconWrapper: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/app_launcher/native/options/user/AppLauncherUserOption.tsx");

export default function AppLauncherUserOption(option) {
  let autoFocus;
  let c6;
  let c7;
  let channel;
  let _slicedToArray;
  let dependencyMap;
  let hasError;
  let importDefault;
  let style;
  let tmp6;
  let tmp8;
  option = option.option;
  ({ initialValue: importDefault, onUserPress: dependencyMap, onActionSheetDismiss: _slicedToArray, channel } = option);
  const onPress = option.onPress;
  c6 = undefined;
  let createCacheKey;
  ({ style, autoFocus, hasError } = option);
  const guild_id = channel.guild_id;
  let obj = option(589);
  const items = [onPress];
  const stateFromStores = obj.useStateFromStores(items, () => onPress.useReducedMotion);
  const tmp = createCacheKey();
  [tmp6, c6] = callback(channel.useState(() => {
    let userId = null;
    if (null != closure_1) {
      userId = null;
      if ("userMention" === tmp.type) {
        userId = tmp.userId;
      }
    }
    return userId;
  }), 2);
  const tmp5 = callback(channel.useState(() => {
    let userId = null;
    if (null != closure_1) {
      userId = null;
      if ("userMention" === tmp.type) {
        userId = tmp.userId;
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
    let obj = option(outer1_2[8]);
    const result = obj.dismissGlobalKeyboard();
    const obj2 = outer1_1(outer1_2[9]);
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
      onActionSheetDismiss: _slicedToArray
    };
    obj2.openLazy(option(outer1_2[11])(outer1_2[10], outer1_2.paths), option(outer1_2[12]).APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY, obj);
  };
  if (null != tmp8) {
    obj = { user: null, guildId: null, animate: null, size: null };
    obj[0] = tmp8;
    obj[1] = guild_id;
    obj[2] = !stateFromStores;
    obj[3] = tmp2(1297).AvatarSizes.REFRESH_MEDIUM_32;
    let tmp9Result = tmp9(tmp2(1297).Avatar, obj);
  } else {
    const obj1 = { icon: null, wrapperStyle: null };
    obj1[0] = tmp9(tmp2(9719).UserCircleIcon, { size: "sm", color: "interactive-text-default" });
    obj1[1] = tmp.iconWrapper;
    tmp9Result = tmp9(tmp10(11624), obj1);
    const tmp10Result = tmp10(11624);
  }
  obj[5] = tmp9Result;
  if (null != tmp8) {
    let obj2 = { guildId: null, user: null };
    obj2[0] = guild_id;
    obj2[1] = tmp8;
    tmp9Result = tmp9(tmp10(11627), obj2);
  } else {
    tmp9Result = null;
    if (null != tmp6) {
      const obj3 = { variant: "text-md/medium", color: "text-default", children: null };
      obj3[2] = tmp6;
      tmp9Result = tmp9(tmp2(4338).Text, obj3);
    }
  }
  obj[6] = tmp9Result;
  obj[7] = autoFocus;
  return c6(AppLauncherSelectOptionFormRow, obj);
};