// discord_app/modules/guild_settings/native/MembersFilterActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../a11y/AccessibilityStore.tsx";
import closure_6 from "../../../stores/GuildRoleStore.tsx";
import closure_7 from "../GuildSettingsStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { listView: null, roleDot: null, labelContainer: null, label: null };
createCacheKey = { marginVertical: 8, borderRadius: ThemesDefault.radii.lg, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginEnd: 4 };
createCacheKey[2] = { flexDirection: "row" };
createCacheKey[3] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let result = require("set").fileFinishedImporting("modules/guild_settings/native/MembersFilterActionSheet.tsx");

export default function MembersFilterActionSheet(onFilterRoleId) {
  ({ guild: require, selectedRoleId } = onFilterRoleId);
  if (selectedRoleId === undefined) {
    selectedRoleId = props.getProps().selectedRoleId;
  }
  onFilterRoleId = onFilterRoleId.onFilterRoleId;
  let React;
  let callback;
  let stateFromStores1;
  const tmp2 = callback2();
  React = tmp2;
  let obj = require(onFilterRoleId[8]);
  let items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getSortedRoles(id.id));
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
  obj1 = require(onFilterRoleId[8]);
  const items2 = [stateFromStores1];
  stateFromStores1 = obj1.useStateFromStores(items2, () => stateFromStores1.roleStyle);
  const items3 = [callback, stateFromStores1, selectedRoleId, tmp2];
  const callback1 = React.useCallback((item) => {
    item = item.item;
    let obj = { value: item.id, label: null, legacyCompat_onPress: null, legacyCompat_selected: null };
    obj = { style: labelContainer.labelContainer, children: null };
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
    const items1 = [labelContainer.label, ];
    let tmp10 = null;
    if (null != item.colorString) {
      tmp10 = null;
      if ("username" === stateFromStores1) {
        obj1 = { color: null };
        obj1[0] = item.colorString;
        tmp10 = obj1;
      }
    }
    items1[1] = tmp10;
    items[1] = closure_1_8(closure_1_0(onFilterRoleId[13]).Text, { variant: "text-md/medium", style: items1, children: item.name });
    obj[1] = items;
    obj[1] = closure_1_9(callback, obj);
    obj[2] = function legacyCompat_onPress() {
      return closure_1_4(item.id);
    };
    obj[3] = item.id === selectedRoleId;
    return closure_1_8(closure_1_0(onFilterRoleId[11]).TableRadioRow, obj);
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