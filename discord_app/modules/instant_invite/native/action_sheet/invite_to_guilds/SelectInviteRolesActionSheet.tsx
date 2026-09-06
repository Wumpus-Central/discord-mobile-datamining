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
const createStyles = fn(4560);
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
  const tmp = closure_10();
  _slicedToArray = tmp;
  let items = [assignableRoles, selectedRoleIds];
  memo = memo.useMemo(() => {
    const set = new Set(assignableRoles.map((id) => id.id));
    return selectedRoleIds.filter((item) => set.has(item));
  }, items);
  const tmp3 = _slicedToArray(
    memo.useState(() => new Set(memo)),
    2,
  );
  const first = tmp3[0];
  closure_6 = tmp3[1];
  let obj = assignableRoles(onSave[6]);
  const items1 = [closure_6];
  const stateFromStores = obj.useStateFromStores(items1, () => closure_6.roleStyle);
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
    let obj = { style: label.label, children: null };
    let tmp5Result = "dot" === stateFromStores;
    if (tmp5Result) {
      tmp5Result = null != tmp.colorString;
    }
    if (tmp5Result) {
      obj = { containerStyles: label.roleDot, color: null, colors: null, background: false };
      ({ colorString: obj2.color, colorStrings: obj2.colors } = tmp);
      tmp5Result = stateFromStores(tmp6(onSave[12]).RoleDot, obj);
    }
    const items = [tmp5Result];
    let tmp13;
    if (null != assignableRoles[arg1].colorString) {
      if ("username" === stateFromStores) {
        obj = { color: tmp.colorString };
        tmp13 = obj;
      }
    }
    const obj1 = { label: null, onPress: null, trailing: null };
    const obj2 = { variant: "text-md/medium", style: tmp13, children: assignableRoles[arg1].name };
    items[1] = stateFromStores(assignableRoles(onSave[13]).Text, obj2);
    obj.children = items;
    obj1.label = callback(first, obj);
    obj1.onPress = function onPress() {
      return callback(id.id);
    };
    obj1.trailing = stateFromStores(assignableRoles(onSave[11]).FormRow.Checkbox, {
      selected: first.has(assignableRoles[arg1].id),
    });
    const children = [stateFromStores(assignableRoles(onSave[11]).FormRow, obj1)];
    tmp5Result = !tmp14;
    if (arg1 !== diff) {
      tmp5Result = stateFromStores(tmp6(onSave[11]).FormDivider, {});
    }
    children[1] = tmp5Result;
    return callback(closure_1_9, { children });
  }, items3);
  obj = { onPress: callback1, accessibilityRole: "button", children: null };
  obj = { variant: "text-md/semibold", children: null };
  const intl = assignableRoles(onSave[15]).intl;
  obj.children = intl.string(assignableRoles(onSave[15]).t.i4jeWR);
  obj.children = stateFromStores(assignableRoles(onSave[13]).Text, obj);
  const tmp7 = selectedRoleIds(onSave[8])();
  let obj1 = { title: null, trailing: null };
  const intl2 = assignableRoles(onSave[15]).intl;
  obj1.title = intl2.string(assignableRoles(onSave[15]).t["LPJmL/"]);
  obj1.trailing = stateFromStores(assignableRoles(onSave[14]).PressableOpacity, obj);
  const tmp11 = stateFromStores(assignableRoles(onSave[14]).PressableOpacity, obj);
  let obj2 = {
    scrollable: true,
    header: stateFromStores(assignableRoles(onSave[16]).BottomSheetTitleHeader, obj1),
    startExpanded: true,
    children: null,
  };
  let obj3 = {
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
  obj3.sections = items4;
  obj2.children = stateFromStores(selectedRoleIds(onSave[18]), obj3);
  return stateFromStores(assignableRoles(onSave[17]).ActionSheet, obj2);
}
