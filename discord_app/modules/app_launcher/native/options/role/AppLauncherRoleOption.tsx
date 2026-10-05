// discord_app/modules/app_launcher/native/options/role/AppLauncherRoleOption.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AppLauncherRoleListActionSheet from "AppLauncherRoleListActionSheet.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import GuildRoleStore from "../../../../../stores/GuildRoleStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_launcher/native/options/role/AppLauncherRoleOption.tsx");

export default function AppLauncherRoleOption(option) {
  let autoFocus;
  let channel;
  let closure_8;
  let first;
  let hasError;
  let name;
  let onActionSheetDismiss;
  let onRolePress;
  let style;
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
  const tmp3 = option;
  let tmp4 = onRolePress;
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
    const tmp = null != first && null == stateFromStores;
    if (tmp) {
      onRolePress({ role: null });
    }
  }, items1);
  const obj2 = {
    style,
    option,
    hasError,
    selected: null != stateFromStores,
    selectedItemName: name,
    onPress() {
      if (onPress != null) {
        tmp();
      }
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = {
        option,
        channel,
        onRolePress(role) {
          role = role.role;
          closure_1_8(role.id);
          onRolePress({ role });
        },
        onActionSheetDismiss: _slicedToArray,
      };
      const tmp4 = asyncRequire(11805, dependencyMap.paths);
      openLazy(tmp4, AppLauncherRoleListActionSheet.APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY, obj);
    },
    leading: guild_id(tmp3(tmp4[9]).RoleIcon, { role: stateFromStores }),
    autoFocus,
  };
  name = undefined;
  const tmp8 = require("AppLauncherSelectOptionFormRow");
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  return guild_id(tmp8, obj2);
}
