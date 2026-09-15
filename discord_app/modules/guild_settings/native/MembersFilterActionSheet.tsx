// === Module 16689: MembersFilterActionSheet ===

// Module 16689 (MembersFilterActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9195 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4631 */;
import GuildRoleStore from "GuildRoleStore" /* 2016 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9196 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { listView: { marginVertical: 8, borderRadius: nativeDefault.radii.lg, overflow: "hidden" }, roleDot: { marginEnd: 4 }, labelContainer: { flexDirection: "row" }, label: null };
let obj3 = { marginVertical: 8, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj2.label = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_10 = createStyles.createStyles(obj2);
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
  let items = [GuildRoleStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildRoleStore.getSortedRoles(require.id));
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
  let obj = require("initialize");
  const items2 = [stateFromStores1];
  stateFromStores1 = require("initialize").useStateFromStores(items2, () => stateFromStores1.roleStyle);
  const items3 = [callback, stateFromStores1, selectedRoleId, tmp2];
  const callback1 = noop.useCallback((item) => {
    item = item.item;
    const obj = { value: item.id, label: null, legacyCompat_onPress: null, legacyCompat_selected: null };
    const obj2 = { style: labelContainer.labelContainer, children: null };
    let tmpResult = "dot" === stateFromStores1;
    if (tmpResult) {
      tmpResult = null != item.colorString;
    }
    if (tmpResult) {
      const obj4 = { containerStyles: labelContainer.roleDot, color: null, colors: null };
      ({ colorString: obj3.color, colorStrings: obj3.colors } = item);
      tmpResult = closure_1_8(require("native").RoleDot, obj4);
    }
    const items = [tmpResult, ];
    const items1 = [labelContainer.label, ];
    let tmp10 = null;
    if (null != item.colorString) {
      tmp10 = null;
      if ("username" === stateFromStores1) {
        const obj5 = { color: item.colorString };
        tmp10 = obj5;
      }
    }
    items1[1] = tmp10;
    items[1] = closure_1_8(require("Text/Text").Text, { variant: "text-md/medium", style: items1, children: item.name });
    obj2.children = items;
    obj.label = closure_1_9(callback, obj2);
    obj.legacyCompat_onPress = function legacyCompat_onPress() {
      return callback(item.id);
    };
    obj.legacyCompat_selected = item.id === selectedRoleId;
    return closure_1_8(require("TableRadioRow").TableRadioRow, obj);
  }, items3);
  const obj3 = { scrollable: true, header: null, children: null };
  let obj4 = { title: null };
  const intl = require("util").intl;
  obj4.title = intl.string(require("util").t.pEasFX);
  obj3.header = closure_8(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj4);
  obj3.children = closure_8(require("BottomSheetModal").BottomSheetFlatList, {
    data: mapped,
    keyExtractor(id) {
      return id.id;
    },
    renderItem: callback1,
    contentContainerStyle: tmp2.listView,
    initialNumToRender: 10,
    removeClippedSubviews: false
  });
  return closure_8(require("ActionSheet").ActionSheet, obj3);
};