// === Module 15532: MembersFilterActionSheet ===

// Module 15532 (MembersFilterActionSheet)
import noop from "noop";
import { View } from "BottomSheetModal";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import handleFormInit from "handleFormInit";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { listView: null, roleDot: null, labelContainer: null, label: null };
createCacheKey = { marginVertical: 8, borderRadius: require("Themes").radii.lg, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginEnd: 4 };
createCacheKey[2] = { flexDirection: "row" };
createCacheKey[3] = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/guild_settings/native/MembersFilterActionSheet.tsx");

export default function MembersFilterActionSheet(onFilterRoleId) {
  let require;
  let selectedRoleId;
  ({ guild: require, selectedRoleId } = onFilterRoleId);
  if (selectedRoleId === undefined) {
    selectedRoleId = props.getProps().selectedRoleId;
  }
  onFilterRoleId = onFilterRoleId.onFilterRoleId;
  let React;
  let callback;
  let stateFromStores1;
  const tmp2 = createCacheKey();
  React = tmp2;
  let obj = require(onFilterRoleId[8]);
  let items = [createGuildRoleRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getSortedRoles(id.id));
  const mapped = stateFromStores.map((id) => {
    const merged = Object.assign(id);
    return { value: id.id };
  });
  mapped.unshift(mapped.splice(mapped.length - 1, 1)[0]);
  let items1 = [onFilterRoleId, selectedRoleId];
  callback = React.useCallback((hideActionSheet) => {
    if (hideActionSheet !== selectedRoleId) {
      let hideActionSheetResult = onFilterRoleId;
      if (null != onFilterRoleId) {
        const result = hideActionSheetResult(hideActionSheet);
      } else {
        const role = selectedRoleId(onFilterRoleId[9]).selectRole(hideActionSheet);
        const obj = selectedRoleId(onFilterRoleId[9]);
      }
      hideActionSheet = selectedRoleId(onFilterRoleId[10]).hideActionSheet;
      hideActionSheetResult = hideActionSheet("MembersFilter");
      const tmp9 = selectedRoleId(onFilterRoleId[10]);
    }
  }, items1);
  let obj1 = require(onFilterRoleId[8]);
  const items2 = [stateFromStores1];
  stateFromStores1 = obj1.useStateFromStores(items2, () => stateFromStores1.roleStyle);
  const items3 = [callback, stateFromStores1, selectedRoleId, tmp2];
  const callback1 = React.useCallback((item) => {
    item = item.item;
    let obj = { value: item.id, label: null, legacyCompat_onPress: null, legacyCompat_selected: null };
    obj = { style: _undefined.labelContainer, children: null };
    let tmpResult = "dot" === stateFromStores1;
    if (tmpResult) {
      tmpResult = null != item.colorString;
    }
    if (tmpResult) {
      obj = { containerStyles: null, color: null, colors: null };
      obj[0] = tmp6.roleDot;
      ({ colorString: obj3[1], colorStrings: obj3[2] } = item);
      tmpResult = tmp(tmp2(tmp3[12]).RoleDot, obj);
    }
    const items = [tmpResult, ];
    const items1 = [_undefined.label, ];
    let tmp10 = null;
    if (null != item.colorString) {
      tmp10 = null;
      if ("username" === stateFromStores1) {
        const obj1 = { color: null };
        obj1[0] = item.colorString;
        tmp10 = obj1;
      }
    }
    items1[1] = tmp10;
    items[1] = outer1_8(outer1_0(onFilterRoleId[13]).Text, { variant: "text-md/medium", style: items1, children: item.name });
    obj[1] = items;
    obj[1] = outer1_9(callback, obj);
    obj[2] = function legacyCompat_onPress() {
      return outer1_4(item.id);
    };
    obj[3] = item.id === selectedRoleId;
    return outer1_8(outer1_0(onFilterRoleId[11]).TableRadioRow, obj);
  }, items3);
  obj = { scrollable: true, header: null, children: null };
  obj = { title: null };
  const intl = require(onFilterRoleId[16]).intl;
  obj[0] = intl.string(require(onFilterRoleId[16]).t.pEasFX);
  obj[1] = callback(require(onFilterRoleId[15]).BottomSheetTitleHeader, obj);
  obj1 = {
    data: mapped,
    keyExtractor(id) {
      return id.id;
    },
    renderItem: callback1,
    contentContainerStyle: tmp2.listView,
    initialNumToRender: 10,
    removeClippedSubviews: false
  };
  obj[2] = callback(require(onFilterRoleId[17]).BottomSheetFlatList, obj1);
  return callback(require(onFilterRoleId[14]).ActionSheet, obj);
};