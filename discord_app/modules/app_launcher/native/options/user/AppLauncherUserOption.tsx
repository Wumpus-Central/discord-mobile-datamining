// discord_app/modules/app_launcher/native/options/user/AppLauncherUserOption.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AppLauncherSelectOptionFormRowDefault from "../../base_components/AppLauncherSelectOptionFormRow.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import closure_5 from "../../../../a11y/AccessibilityStore.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
createCacheKey = { iconWrapper: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/app_launcher/native/options/user/AppLauncherUserOption.tsx");

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
    let obj = option(closure_1_2[8]);
    const result = obj.dismissGlobalKeyboard();
    const obj2 = closure_1_1(closure_1_2[9]);
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
    obj2.openLazy(option(closure_1_2[11])(closure_1_2[10], closure_1_2.paths), option(closure_1_2[12]).APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY, obj);
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
    obj1[0] = tmp9(tmp2(10655).UserCircleIcon, { size: "sm", color: "interactive-text-default" });
    obj1[1] = tmp.iconWrapper;
    tmp9Result = tmp9(tmp10(11749), obj1);
    const tmp10Result = tmp10(11749);
  }
  obj[5] = tmp9Result;
  if (null != tmp8) {
    let obj2 = { guildId: null, user: null };
    obj2[0] = guild_id;
    obj2[1] = tmp8;
    tmp9Result = tmp9(tmp10(11752), obj2);
  } else {
    tmp9Result = null;
    if (null != tmp6) {
      const obj3 = { variant: "text-md/medium", color: "text-default", children: null };
      obj3[2] = tmp6;
      tmp9Result = tmp9(tmp2(4474).Text, obj3);
    }
  }
  obj[6] = tmp9Result;
  obj[7] = autoFocus;
  return c6(AppLauncherSelectOptionFormRowDefault, obj);
};