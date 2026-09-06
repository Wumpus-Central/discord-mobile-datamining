// discord_app/modules/guild_settings/native/MembersFilterActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../GuildSettingsActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import GuildSettingsStore from "../GuildSettingsStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { listView: null, roleDot: null, labelContainer: null, label: null };
createStyles = { marginVertical: 8, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
createStyles.listView = createStyles;
createStyles.roleDot = { marginEnd: 4 };
createStyles.labelContainer = { flexDirection: "row" };
createStyles.label = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/MembersFilterActionSheet.tsx");

export default function MembersFilterActionSheet(onFilterRoleId) {
  ({ guild: require, selectedRoleId } = onFilterRoleId);
  if (selectedRoleId === undefined) {
    selectedRoleId = GuildSettingsStore.getProps().selectedRoleId;
  }
  onFilterRoleId = onFilterRoleId.onFilterRoleId;
  let stateFromStores1;
  const tmp2 = closure_10();
  noop = tmp2;
  let obj = require("initialize");
  let items = [GuildRoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(require.id));
  const mapped = stateFromStores.map((id) => {
    const merged = Object.assign(id);
    return { value: id.id };
  });
  mapped.unshift(mapped.splice(mapped.length - 1, 1)[0]);
  let items1 = [onFilterRoleId, selectedRoleId];
  const callback = noop.useCallback((hideActionSheet) => {
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
  let obj1 = require("initialize");
  const items2 = [stateFromStores1];
  stateFromStores1 = obj1.useStateFromStores(items2, () => stateFromStores1.roleStyle);
  const items3 = [callback, stateFromStores1, selectedRoleId, tmp2];
  const callback1 = noop.useCallback((item) => {
    item = item.item;
    let obj = { value: item.id, label: null, legacyCompat_onPress: null, legacyCompat_selected: null };
    obj = { style: labelContainer.labelContainer, children: null };
    let tmpResult = "dot" === stateFromStores1;
    if (tmpResult) {
      tmpResult = null != item.colorString;
    }
    if (tmpResult) {
      obj = { containerStyles: tmp6.roleDot, color: null, colors: null };
      ({ colorString: obj3.color, colorStrings: obj3.colors } = item);
      tmpResult = tmp(tmp2(tmp3[12]).RoleDot, obj);
    }
    const items = [tmpResult];
    const items1 = [labelContainer.label];
    let tmp10 = null;
    if (null != item.colorString) {
      tmp10 = null;
      if ("username" === stateFromStores1) {
        const obj1 = { color: item.colorString };
        tmp10 = obj1;
      }
    }
    items1[1] = tmp10;
    items[1] = closure_1_8(require("Text/Text").Text, {
      variant: "text-md/medium",
      style: items1,
      children: item.name,
    });
    obj.children = items;
    obj.label = closure_1_9(callback, obj);
    obj.legacyCompat_onPress = function legacyCompat_onPress() {
      return callback(item.id);
    };
    obj.legacyCompat_selected = item.id === selectedRoleId;
    return closure_1_8(require("TableRadioRow").TableRadioRow, obj);
  }, items3);
  obj = { scrollable: true, header: null, children: null };
  obj = { title: null };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.pEasFX);
  obj.header = closure_8(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj);
  obj1 = {
    data: mapped,
    keyExtractor(id) {
      return id.id;
    },
    renderItem: callback1,
    contentContainerStyle: tmp2.listView,
    initialNumToRender: 10,
    removeClippedSubviews: false,
  };
  obj.children = closure_8(require("BottomSheetModal").BottomSheetFlatList, obj1);
  return closure_8(require("ActionSheet").ActionSheet, obj);
}
