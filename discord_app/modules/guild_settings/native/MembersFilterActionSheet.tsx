// discord_app/modules/guild_settings/native/MembersFilterActionSheet.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../GuildSettingsActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import GuildSettingsStore from "../GuildSettingsStore.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let item;

let obj2;
const jsx = Fragment.jsx;
let obj = { listView: obj2 };
obj2 = { marginVertical: 8, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings/native/MembersFilterActionSheet.tsx");

export default function MembersFilterActionSheet(onFilterRoleId) {
  let intl;
  let selectedRoleId;
  ({ guild: require, selectedRoleId } = onFilterRoleId);
  if (selectedRoleId === undefined) {
    selectedRoleId = GuildSettingsStore.getProps().selectedRoleId;
  }
  onFilterRoleId = onFilterRoleId.onFilterRoleId;
  let callback;
  const tmp2 = closure_7();
  let obj = require("get initialized");
  const items = [GuildRoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(require.id));
  const mapped = stateFromStores.map((id) => {
    const obj = { value: id.id };
    const merged = Object.assign(id);
    return obj;
  });
  mapped.unshift(mapped.splice(mapped.length - 1, 1)[0]);
  const items1 = [onFilterRoleId, selectedRoleId];
  callback = callback.useCallback((roleId) => {
    if (roleId !== selectedRoleId) {
      if (null != onFilterRoleId) {
        tmp(roleId);
      } else {
        const obj = GuildSettingsActionCreatorsDefault;
        const role = obj.selectRole(roleId);
      }
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet("MembersFilter");
    }
  }, items1);
  const items2 = [callback, selectedRoleId];
  const callback1 = callback.useCallback((item) => {
    item = item.item;
    const TableRadioRow = require("TableRadioRow").TableRadioRow;
    return (
      <TableRadioRow
        value={item.id}
        label={null}
        legacyCompat_onPress={function legacyCompat_onPress() {
          return callback(item.id);
        }}
        legacyCompat_selected={item.id === selectedRoleId}
      />
    );
  }, items2);
  const ActionSheet = require("ActionSheet").ActionSheet;
  ({ title: intl.string(require("intl").t.pEasFX) });
  const BottomSheetTitleHeader = require("BottomSheetTitleHeader").BottomSheetTitleHeader;
  intl = require("intl").intl;
  return (
    <ActionSheet scrollable header={null}>
      {null}
    </ActionSheet>
  );
}
