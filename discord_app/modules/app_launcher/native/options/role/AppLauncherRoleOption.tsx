// discord_app/modules/app_launcher/native/options/role/AppLauncherRoleOption.tsx
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AppLauncherRoleListActionSheet from "AppLauncherRoleListActionSheet.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildRoleStore from "../../../../../stores/GuildRoleStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/role/AppLauncherRoleOption.tsx");

export default function AppLauncherRoleOption(option) {
  option = option.option;
  ({ initialValue: importDefault, onRolePress } = option);
  ({ onActionSheetDismiss: _slicedToArray, channel } = option);
  const onPress = option.onPress;
  const guild_id = channel.guild_id;
  ({ style, autoFocus, hasError } = option);
  let tmp = _slicedToArray(
    channel.useState(() => {
      let roleId = null;
      if (null != importDefault) {
        roleId = null;
        if ("roleMention" === tmp.type) {
          roleId = tmp.roleId;
        }
      }
      return roleId;
    }),
    2,
  );
  const first = tmp[0];
  closure_8 = tmp[1];
  let obj = option(onRolePress[4]);
  const items = [onPress];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  obj = {
    style,
    option,
    hasError,
    selected: null != stateFromStores,
    selectedItemName: null,
    onPress: null,
    leading: null,
    autoFocus: null,
  };
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  obj.selectedItemName = name;
  obj.onPress = function onPress() {
    if (onPress != null) {
      tmp();
    }
    const obj = {
      option,
      channel,
      onRolePress(role) {
        role = role.role;
        closure_1_8(role.id);
        onRolePress({ role });
      },
      onActionSheetDismiss,
    };
    obj.openLazy(
      asyncRequireImpl(12181, dependencyMap.paths),
      AppLauncherRoleListActionSheet.APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY,
      obj,
    );
  };
  obj.leading = guild_id(option(onRolePress[9]).RoleIcon, { role: stateFromStores });
  obj.autoFocus = autoFocus;
  return guild_id(require("AppLauncherSelectOptionFormRow"), obj);
}
