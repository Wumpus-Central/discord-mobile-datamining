// discord_app/modules/instant_invite/native/action_sheet/invite_to_guilds/SelectInviteRolesActionSheet.tsx
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../../../a11y/AccessibilityStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ list: { flex: 1 }, label: { flexDirection: "row", alignItems: "center" }, roleDot: { marginEnd: 8 } });
const result = require("obj132").fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/SelectInviteRolesActionSheet.tsx");

export default function SelectInviteRolesActionSheet(assignableRoles) {
  assignableRoles = assignableRoles.assignableRoles;
  const selectedRoleIds = assignableRoles.selectedRoleIds;
  const onSave = assignableRoles.onSave;
  let memo;
  const tmp = callback2();
  let callback = tmp;
  let items = [assignableRoles, selectedRoleIds];
  memo = memo.useMemo(() => {
    set = new Set(set.map((item, index) => item.id));
    return selectedRoleIds.filter((item, index) => set.has(item));
  }, items);
  const tmp3 = callback(memo.useState(() => new Set(memo)), 2);
  const first = tmp3[0];
  closure_6 = tmp3[1];
  let obj = assignableRoles(onSave[6]);
  const items1 = [closure_6];
  const stateFromStores = obj.useStateFromStores(items1, () => lib.roleStyle);
  const tmp6 = selectedRoleIds(onSave[7])();
  callback = memo.useCallback((arg0) => {
    closure_0 = arg0;
    lib((items) => {
      const set = new Set(items);
      if (!set.delete(closure_0)) {
        set.add(closure_0);
      }
      return set;
    });
  }, []);
  const items2 = [onSave, first, memo];
  const items3 = [assignableRoles, stateFromStores, first, tmp, callback];
  const callback1 = memo.useCallback(() => {
    selectedRoleIds(onSave[9]).hideActionSheet();
    const obj = selectedRoleIds(onSave[9]);
    const sorted = Array.from(first).sort();
    const arr = Array.from(first);
    const items = [...memo];
    const obj3 = assignableRoles(onSave[10]);
    if (!isEqualResult) {
      onSave(sorted);
    }
    isEqualResult = assignableRoles(onSave[10]).isEqual(sorted, items.sort());
  }, items2);
  callback2 = memo.useCallback((arg0, arg1) => {
    assignableRoles = tmp;
    const diff = assignableRoles.length - 1;
    let obj = { style: label.label, children: null };
    let tmp5Result = "dot" === stateFromStores;
    if (tmp5Result) {
      tmp5Result = null != tmp.colorString;
    }
    if (tmp5Result) {
      obj = { containerStyles: null, color: null, colors: null, background: false };
      obj[0] = label.roleDot;
      ({ colorString: obj2[1], colorStrings: obj2[2] } = tmp);
      tmp5Result = stateFromStores(tmp6(onSave[12]).RoleDot, obj);
    }
    const items = [tmp5Result, ];
    let tmp13;
    if (null != assignableRoles[arg1].colorString) {
      if ("username" === stateFromStores) {
        obj = { color: null };
        obj[0] = tmp.colorString;
        tmp13 = obj;
      }
    }
    obj1 = { label: null, onPress: null, trailing: null };
    const obj2 = { variant: "text-md/medium", style: tmp13, children: assignableRoles[arg1].name };
    items[1] = stateFromStores(assignableRoles(onSave[13]).Text, obj2);
    obj[1] = items;
    obj1[0] = callback(first, obj);
    obj1[1] = function onPress() {
      return callback(id.id);
    };
    obj1[2] = stateFromStores(assignableRoles(onSave[11]).FormRow.Checkbox, { selected: first.has(assignableRoles[arg1].id) });
    const children = [stateFromStores(assignableRoles(onSave[11]).FormRow, obj1), ];
    tmp5Result = !tmp14;
    if (arg1 !== diff) {
      tmp5Result = stateFromStores(tmp6(onSave[11]).FormDivider, {});
    }
    children[1] = tmp5Result;
    return callback(closure_1_9, { children });
  }, items3);
  obj = { variant: "text-md/semibold", children: null };
  const intl = assignableRoles(onSave[15]).intl;
  obj[1] = intl.string(assignableRoles(onSave[15]).t.i4jeWR);
  obj[2] = stateFromStores(assignableRoles(onSave[13]).Text, obj);
  const tmp7 = selectedRoleIds(onSave[8])();
  obj1 = { title: null, trailing: null };
  const intl2 = assignableRoles(onSave[15]).intl;
  obj1[0] = intl2.string(assignableRoles(onSave[15]).t["LPJmL/"]);
  obj1[1] = stateFromStores(assignableRoles(onSave[14]).PressableOpacity, obj);
  const tmp11 = stateFromStores(assignableRoles(onSave[14]).PressableOpacity, obj);
  const tmp12 = stateFromStores(assignableRoles(onSave[16]).BottomSheetTitleHeader, obj1);
  const items4 = [assignableRoles.length];
  return stateFromStores(assignableRoles(onSave[17]).ActionSheet, { scrollable: true, header: stateFromStores(assignableRoles(onSave[16]).BottomSheetTitleHeader, obj1), startExpanded: true, children: stateFromStores(selectedRoleIds(onSave[18]), obj3) });
};