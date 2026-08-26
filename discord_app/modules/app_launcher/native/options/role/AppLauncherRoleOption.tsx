// === Module 11841: AppLauncherRoleOption ===

// Module 11841 (AppLauncherRoleOption)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "createGuildRoleRecordFromRust" /* 1985 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/app_launcher/native/options/role/AppLauncherRoleOption.tsx");

export default function AppLauncherRoleOption(option) {
  option = option.option;
  ({ initialValue: importDefault, onRolePress } = option);
  ({ onActionSheetDismiss: closure_3, channel } = option);
  const onPress = option.onPress;
  let guild_id;
  let first;
  closure_8 = undefined;
  let stateFromStores;
  guild_id = channel.guild_id;
  ({ style, autoFocus, hasError } = option);
  let tmp = callback(channel.useState(() => {
    let roleId = null;
    if (null != closure_1) {
      roleId = null;
      if ("roleMention" === tmp.type) {
        roleId = tmp.roleId;
      }
    }
    return roleId;
  }), 2);
  first = tmp[0];
  closure_8 = tmp[1];
  let obj = option(onRolePress[4]);
  const items = [onPress];
  stateFromStores = obj.useStateFromStores(items, () => {
    if (null != first) {
      let role;
      if (null != guild_id) {
        role = onPress.getRole(tmp2, tmp);
      }
      return role;
    }
  });
  const items1 = [onRolePress, option.name, stateFromStores, first];
  const effect = channel.useEffect(() => {
    let tmp = null != first;
    if (tmp) {
      tmp = null == stateFromStores;
    }
    if (tmp) {
      onRolePress({ role: null });
    }
  }, items1);
  obj = { style, option, hasError, selected: null != stateFromStores, selectedItemName: null, onPress: null, leading: null, autoFocus: null };
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  obj[4] = name;
  obj[5] = function onPress() {
    if (onPress != null) {
      tmp();
    }
    let obj = closure_1_1(onRolePress[6]);
    obj = {
      option,
      channel,
      onRolePress(role) {
        role = role.role;
        callback2(role.id);
        callback({ role });
      },
      onActionSheetDismiss: closure_3
    };
    obj.openLazy(option(onRolePress[8])(onRolePress[7], onRolePress.paths), option(onRolePress[9]).APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY, obj);
  };
  obj[6] = guild_id(option(onRolePress[9]).RoleIcon, { role: stateFromStores });
  obj[7] = autoFocus;
  return guild_id(importDefault(onRolePress[5]), obj);
};