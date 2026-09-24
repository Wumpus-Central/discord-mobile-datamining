// discord_app/modules/guild_settings/native/MembersFilterActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../GuildSettingsActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import GuildSettingsStore from "../GuildSettingsStore.tsx";

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj2 = { listView: { marginVertical: 8, borderRadius: nativeDefault.radii.lg, overflow: "hidden" } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/MembersFilterActionSheet.tsx");

export default function MembersFilterActionSheet(onFilterRoleId) {
  ({ guild: require, selectedRoleId } = onFilterRoleId);
  if (selectedRoleId === undefined) {
    selectedRoleId = GuildSettingsStore.getProps().selectedRoleId;
  }
  onFilterRoleId = onFilterRoleId.onFilterRoleId;
  let callback;
  const tmp2 = closure_7();
  const items = [GuildRoleStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    GuildRoleStore.getSortedRoles(require.id),
  );
  const mapped = stateFromStores.map((id) => {
    const merged = Object.assign(id);
    return { value: id.id };
  });
  mapped.unshift(mapped.splice(mapped.length - 1, 1)[0]);
  const items1 = [onFilterRoleId, selectedRoleId];
  callback = callback.useCallback((hideActionSheet) => {
    if (hideActionSheet !== selectedRoleId) {
      let hideActionSheetResult = onFilterRoleId;
      if (null != onFilterRoleId) {
        const result = hideActionSheetResult(hideActionSheet);
      } else {
        const role = GuildSettingsActionCreatorsDefault.selectRole(hideActionSheet);
      }
      hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
      hideActionSheetResult = hideActionSheet("MembersFilter");
    }
  }, items1);
  const items2 = [callback, selectedRoleId];
  const callback1 = callback.useCallback((item) => {
    item = item.item;
    const obj = {
      value: item.id,
      label: jsx(selectedRoleId(onFilterRoleId[10]), { role: item, dotBackground: true, children: item.name }),
      legacyCompat_onPress() {
        return callback(item.id);
      },
      legacyCompat_selected: item.id === selectedRoleId,
    };
    return jsx(require("TableRadioRow").TableRadioRow, {
      value: item.id,
      label: jsx(selectedRoleId(onFilterRoleId[10]), { role: item, dotBackground: true, children: item.name }),
      legacyCompat_onPress() {
        return callback(item.id);
      },
      legacyCompat_selected: item.id === selectedRoleId,
    });
  }, items2);
  const obj2 = { scrollable: true, header: null, children: null };
  const obj3 = { title: null };
  const intl = require("util").intl;
  obj3.title = intl.string(require("util").t.pEasFX);
  obj2.header = jsx(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: null });
  obj2.children = jsx(require("BottomSheetModal").BottomSheetFlatList, {
    data: mapped,
    keyExtractor(id) {
      return id.id;
    },
    renderItem: callback1,
    contentContainerStyle: tmp2.listView,
    initialNumToRender: 10,
    removeClippedSubviews: false,
  });
  return jsx(require("ActionSheet").ActionSheet, { scrollable: true, header: null, children: null });
}
