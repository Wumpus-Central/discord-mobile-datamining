// discord_app/modules/app_launcher/native/options/role/AppLauncherRoleOption.tsx
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import createGuildRoleRecordFromRust from "../../../../../stores/GuildRoleStore.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/options/role/AppLauncherRoleOption.tsx");

export default function AppLauncherRoleOption(option) {
  option = option.option;
  ({ initialValue: importDefault, onRolePress } = option);
  ({ onActionSheetDismiss: closure_3, channel } = option);
  const onPress = option.onPress;
  const guild_id = channel.guild_id;
  ({ style, autoFocus, hasError } = option);
  let tmp = callback(channel.useState(() => {
    let roleId = null;
    if (null != closure_1) {
      roleId = null;
      if ("roleMention" === closure_1.type) {
        roleId = closure_1.roleId;
      }
    }
    return roleId;
  }), 2);
  const first = tmp[0];
  closure_8 = tmp[1];
  let obj = option(onRolePress[4]);
  const items = [onPress];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
    importDefault(onRolePress[6]);
    const obj = {
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