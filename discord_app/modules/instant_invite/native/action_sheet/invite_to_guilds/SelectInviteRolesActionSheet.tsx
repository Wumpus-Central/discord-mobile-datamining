// discord_app/modules/instant_invite/native/action_sheet/invite_to_guilds/SelectInviteRolesActionSheet.tsx
import _mod12 from "../../../../../../_runtime/metro/00012__.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4640);
let closure_10 = createStyles.createStyles({
  list: { flex: 1 },
  label: { flexDirection: "row", alignItems: "center" },
  roleDot: { marginEnd: 8 },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/instant_invite/native/action_sheet/invite_to_guilds/SelectInviteRolesActionSheet.tsx",
);

export default function SelectInviteRolesActionSheet(assignableRoles) {
  assignableRoles = assignableRoles.assignableRoles;
  const selectedRoleIds = assignableRoles.selectedRoleIds;
  const onSave = assignableRoles.onSave;
  let memo;
  first = undefined;
  closure_6 = undefined;
  const tmp = closure_10();
  _slicedToArray = tmp;
  let items = [assignableRoles, selectedRoleIds];
  memo = memo.useMemo(() => {
    const set = new Set(assignableRoles.map((id) => id.id));
    return selectedRoleIds.filter((item) => set.has(item));
  }, items);
  [first, closure_6] = memo.useState(() => new Set(memo));
  const items1 = [closure_6];
  const stateFromStores = assignableRoles(onSave[6]).useStateFromStores(items1, () => closure_6.roleStyle);
  let obj = assignableRoles(onSave[6]);
  const tmp6 = selectedRoleIds(onSave[7])();
  const callback = memo.useCallback((arg0) => {
    closure_0 = arg0;
    closure_6((items) => {
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
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const sorted = Array.from(first).sort();
    const arr = Array.from(first);
    const items = [...memo];
    if (!isEqualResult) {
      onSave(sorted);
    }
    isEqualResult = _mod12.isEqual(sorted, items.sort());
  }, items2);
  const callback2 = memo.useCallback((arg0, arg1) => {
    assignableRoles = tmp;
    const diff = assignableRoles.length - 1;
    const obj = { style: label.label, children: null };
    let tmp5Result = "dot" === stateFromStores;
    if (tmp5Result) {
      tmp5Result = null != tmp.colorString;
    }
    if (tmp5Result) {
      const obj3 = { containerStyles: label.roleDot, color: null, colors: null, background: false };
      ({ colorString: obj2.color, colorStrings: obj2.colors } = tmp);
      tmp5Result = stateFromStores(tmp6(onSave[12]).RoleDot, obj3);
    }
    const items = [tmp5Result];
    let tmp13;
    if (null != assignableRoles[arg1].colorString) {
      if ("username" === stateFromStores) {
        const obj4 = { color: tmp.colorString };
        tmp13 = obj4;
      }
    }
    const obj5 = { label: null, onPress: null, trailing: null };
    items[1] = stateFromStores(assignableRoles(onSave[13]).Text, {
      variant: "text-md/medium",
      style: tmp13,
      children: assignableRoles[arg1].name,
    });
    obj.children = items;
    obj5.label = callback(first, obj);
    obj5.onPress = function onPress() {
      return callback(id.id);
    };
    obj5.trailing = stateFromStores(assignableRoles(onSave[11]).FormRow.Checkbox, {
      selected: first.has(assignableRoles[arg1].id),
    });
    const children = [stateFromStores(assignableRoles(onSave[11]).FormRow, obj5)];
    let tmp5Result2 = !tmp14;
    if (arg1 !== diff) {
      tmp5Result2 = stateFromStores(tmp6(onSave[11]).FormDivider, {});
    }
    children[1] = tmp5Result2;
    return callback(closure_1_9, { children });
  }, items3);
  const obj2 = { onPress: callback1, accessibilityRole: "button", children: null };
  let obj3 = { variant: "text-md/semibold", children: null };
  const intl = assignableRoles(onSave[15]).intl;
  obj3.children = intl.string(assignableRoles(onSave[15]).t.i4jeWR);
  obj2.children = stateFromStores(assignableRoles(onSave[13]).Text, obj3);
  const tmp7 = selectedRoleIds(onSave[8])();
  let obj4 = { title: null, trailing: null };
  const intl2 = assignableRoles(onSave[15]).intl;
  obj4.title = intl2.string(assignableRoles(onSave[15]).t["LPJmL/"]);
  obj4.trailing = stateFromStores(assignableRoles(onSave[14]).PressableOpacity, obj2);
  const tmp11 = stateFromStores(assignableRoles(onSave[14]).PressableOpacity, obj2);
  let obj5 = {
    scrollable: true,
    header: stateFromStores(assignableRoles(onSave[16]).BottomSheetTitleHeader, obj4),
    startExpanded: true,
    children: null,
  };
  const obj6 = {
    inActionSheet: true,
    style: tmp.list,
    itemSize: tmp7,
    sections: null,
    renderItem: callback2,
    placeholderConfig: tmp6,
    estimatedListSize: "windowSize",
    listId: "select-invite-roles",
    wrapChildren: true,
  };
  const items4 = [assignableRoles.length];
  obj6.sections = items4;
  obj5.children = stateFromStores(selectedRoleIds(onSave[18]), obj6);
  return stateFromStores(assignableRoles(onSave[17]).ActionSheet, obj5);
}
