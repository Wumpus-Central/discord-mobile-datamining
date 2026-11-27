// discord_app/modules/guild_settings/integrations/permission/native/AddCommandPermissionsSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ApplicationCommandTypes from "../../../../application_commands/ApplicationCommandTypes.tsx";
import TableCheckboxRow from "../../../../../design/components/TableRow/native/TableCheckboxRow.native.tsx";
import useCommandPermissionEntryDisplay from "useCommandPermissionEntryDisplay.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../../stores/GuildStore.tsx";

require = fn;
function ChannelRow(arg0) {
  let tmp = null;
  ({ guild, id } = arg0);
  const merged = Object.assign(arg0, Object.assign({ guild: 0, id: 0 }));
  const channelEntryDisplay = useCommandPermissionEntryDisplay.useChannelEntryDisplay(guild, id);
  if (null != channelEntryDisplay) {
    const obj2 = {};
    const merged1 = Object.assign(channelEntryDisplay);
    const merged2 = Object.assign(merged);
    tmp = hasOwnProperty(TableCheckboxRow.TableCheckboxRow, obj2);
  }
  return tmp;
}
function RoleRow(arg0) {
  let tmp = null;
  ({ guild, id } = arg0);
  const merged = Object.assign(arg0, Object.assign({ guild: 0, id: 0 }));
  const roleEntryDisplay = useCommandPermissionEntryDisplay.useRoleEntryDisplay(guild, id);
  if (null != roleEntryDisplay) {
    const obj2 = {};
    const merged1 = Object.assign(roleEntryDisplay);
    const merged2 = Object.assign(merged);
    tmp = hasOwnProperty(TableCheckboxRow.TableCheckboxRow, obj2);
  }
  return tmp;
}
function UserRow(arg0) {
  let tmp = null;
  ({ guild, id } = arg0);
  const merged = Object.assign(arg0, Object.assign({ guild: 0, id: 0 }));
  const userEntryDisplay = useCommandPermissionEntryDisplay.useUserEntryDisplay(guild, id);
  if (null != userEntryDisplay) {
    const obj2 = {};
    const merged1 = Object.assign(userEntryDisplay);
    const merged2 = Object.assign(merged);
    tmp = hasOwnProperty(TableCheckboxRow.TableCheckboxRow, obj2);
  }
  return tmp;
}
function EntryRow(entry) {
  entry = entry.entry;
  const merged = Object.assign(entry, Object.assign({ entry: 0 }));
  const type = entry.type;
  if (ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL === type) {
    const obj2 = { id: entry.id };
    const merged1 = Object.assign(merged);
    return hasOwnProperty(ChannelRow, obj2);
  } else if (ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE === type) {
    const obj3 = { id: entry.id };
    const merged2 = Object.assign(merged);
    return hasOwnProperty(RoleRow, obj3);
  } else if (ApplicationCommandTypes.ApplicationCommandPermissionType.USER === type) {
    const obj = { id: entry.id };
    const merged3 = Object.assign(merged);
    return hasOwnProperty(UserRow, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5043);
let obj2 = {
  container: { flex: 1 },
  search: {
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingVertical: nativeDefault.space.PX_12,
    gap: nativeDefault.space.PX_8,
  },
  list: null,
};
let obj3 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_8,
};
obj2.list = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/permission/native/AddCommandPermissionsSheet.tsx",
);

export default function AddCommandPermissionsSheet(guildId) {
  guildId = guildId.guildId;
  const searchPlaceholder = guildId.searchPlaceholder;
  dependencyMap = undefined;
  isSelected = undefined;
  c4 = undefined;
  maximumPermissionsSelected = undefined;
  closure_6 = undefined;
  ({ editPermissions, hasMemberSearch, title, overwrittenKeys, search, selectedPermissionCount } = guildId);
  let tmp = closure_7();
  items = [c4];
  const items1 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const tmp6 = stateFromStores(20082)({
    editPermissions,
    guildId,
    hasMemberSearch,
    overwrittenKeys,
    search,
    selectedPermissionCount,
  });
  ({ filteredResults, onSelect: c2, isSelected } = tmp6);
  ({ submit: c4, maximumPermissionsSelected } = tmp6);
  if (null == stateFromStores) {
    return null;
  } else {
    closure_6 = filteredResults.length - 1;
    const obj2 = { title, trailing: null };
    const obj3 = { size: "sm", text: null, variant: null, disabled: null, onPress: null };
    const intl2 = tmp2(1112).intl;
    obj3.text = intl2.string(tmp2(1112).t.OYkgVk);
    let str = "primary";
    if (0 === tmp8) {
      str = "secondary";
    }
    const obj4 = { scrollable: true, startExpanded: true, header: null, children: null };
    obj3.variant = str;
    obj3.disabled = 0 === tmp8;
    obj3.onPress = function handleAdd() {
      _undefined2();
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    obj2.trailing = maximumPermissionsSelected(tmp2(5641).Button, obj3);
    obj4.header = maximumPermissionsSelected(tmp2(7507).BottomSheetTitleHeader, obj2);
    const obj5 = { style: tmp.container, children: null };
    const obj6 = { style: tmp.search, children: null };
    const obj7 = { size: "md", placeholder: searchPlaceholder, accessibilityLabel: searchPlaceholder, onChange: tmp7 };
    const items2 = [maximumPermissionsSelected(tmp2(7406).SearchBar, obj7)];
    let tmp12Result = null;
    if (maximumPermissionsSelected) {
      const obj8 = { variant: "body-sm/medium", color: "text-muted", children: null };
      const intl = tmp2(1112).intl;
      obj8.children = intl.string(tmp2(1112).t["XTwtW/"]);
      tmp12Result = tmp12(tmp2(5634).Text, obj8);
    }
    items2[1] = tmp12Result;
    obj6.children = items2;
    const items3 = [closure_6(isSelected, obj6)];
    const obj9 = {
      data: filteredResults,
      extraData: isSelected,
      keyExtractor(id) {
        return guildId(_undefined[20]).toPermissionKey(id.id, id.type);
      },
      contentContainerStyle: null,
      keyboardShouldPersistTaps: "handled",
      renderItem: null,
    };
    const items4 = [tmp.list];
    const obj10 = {
      paddingBottom: tmp5(575).space.PX_16 + stateFromStores(5618)({ isKeyboardAwareOnAndroid: false }).insets.bottom,
    };
    items4[1] = obj10;
    obj9.contentContainerStyle = items4;
    obj9.renderItem = function renderItem(item) {
      item = item.item;
      const index = item.index;
      const tmp = isSelected(item.id, item.type);
      const obj = {
        guild: stateFromStores,
        entry: item,
        checked: tmp,
        disabled: null,
        start: null,
        end: null,
        onPress: null,
      };
      let tmp4 = maximumPermissionsSelected;
      if (maximumPermissionsSelected) {
        tmp4 = !tmp;
      }
      obj.disabled = tmp4;
      obj.start = 0 === index;
      obj.end = index === closure_6;
      obj.onPress = function onPress() {
        return c2(item.id, item.type);
      };
      return maximumPermissionsSelected(EntryRow, obj);
    };
    items3[1] = maximumPermissionsSelected(tmp2(7482).BottomSheetFlashList, obj9);
    obj5.children = items3;
    obj4.children = closure_6(isSelected, obj5);
    return maximumPermissionsSelected(tmp2(5271).BottomSheet, obj4);
  }
  let obj = guildId(504);
  tmp5 = stateFromStores;
}
