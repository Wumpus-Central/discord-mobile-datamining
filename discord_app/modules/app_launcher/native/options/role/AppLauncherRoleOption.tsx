// === Module 12334: AppLauncherRoleOption ===

// Module 12334 (AppLauncherRoleOption)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import AppLauncherRoleListActionSheet from "AppLauncherRoleListActionSheet" /* 12332 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2016 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/role/AppLauncherRoleOption.tsx");

export default function AppLauncherRoleOption(option) {
  option = option.option;
  ({ initialValue: importDefault, onRolePress } = option);
  ({ onActionSheetDismiss: _slicedToArray, channel } = option);
  const onPress = option.onPress;
  first = undefined;
  closure_8 = undefined;
  const guild_id = channel.guild_id;
  ({ style, autoFocus, hasError } = option);
  [first, closure_8] = channel.useState(() => {
    let roleId = null;
    if (null != importDefault) {
      roleId = null;
      if ("roleMention" === importDefault.type) {
        roleId = importDefault.roleId;
      }
    }
    return roleId;
  });
  const items = [onPress];
  const stateFromStores = option(onRolePress[4]).useStateFromStores(items, () => {
    if (null != first) {
      let role;
      if (null != guild_id) {
        role = GuildRoleStore.getRole(tmp2, tmp);
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
  const obj2 = { style, option, hasError, selected: null != stateFromStores, selectedItemName: null, onPress: null, leading: null, autoFocus: null };
  let name;
  let obj = option(onRolePress[4]);
  const tmp3 = option;
  const tmp4 = onRolePress;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  obj2.selectedItemName = name;
  obj2.onPress = function onPress() {
    if (onPress != null) {
      tmp();
    }
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(12332, dependencyMap.paths), AppLauncherRoleListActionSheet.APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY, {
      option,
      channel,
      onRolePress(role) {
        role = role.role;
        closure_1_8(role.id);
        onRolePress({ role });
      },
      onActionSheetDismiss
    });
  };
  obj2.leading = guild_id(tmp3(tmp4[9]).RoleIcon, { role: stateFromStores });
  obj2.autoFocus = autoFocus;
  return guild_id(require("AppLauncherSelectOptionFormRow"), obj2);
};