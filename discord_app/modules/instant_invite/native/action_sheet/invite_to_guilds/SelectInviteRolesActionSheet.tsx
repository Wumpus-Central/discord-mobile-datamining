// === Module 18257: SelectInviteRolesActionSheet ===

// Module 18257 (SelectInviteRolesActionSheet)
import _mod12 from "module_12" /* 12 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let closure_8 = createStyles.createStyles({ list: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/SelectInviteRolesActionSheet.tsx");

export default function SelectInviteRolesActionSheet(assignableRoles) {
  assignableRoles = assignableRoles.assignableRoles;
  const selectedRoleIds = assignableRoles.selectedRoleIds;
  const onSave = assignableRoles.onSave;
  let first;
  let items = [assignableRoles, selectedRoleIds];
  const memo = first.useMemo(() => {
    const set = new Set(assignableRoles.map((id) => id.id));
    return selectedRoleIds.filter((item) => set.has(item));
  }, items);
  const tmp3 = memo(first.useState(() => new Set(memo)), 2);
  first = tmp3[0];
  closure_5 = tmp3[1];
  const tmp = closure_8();
  const tmp5 = selectedRoleIds(onSave[4])();
  const callback = first.useCallback((arg0) => {
    closure_0 = arg0;
    closure_5((items) => {
      const set = new Set(items);
      if (!set.delete(closure_0)) {
        set.add(closure_0);
      }
      return set;
    });
  }, []);
  const items1 = [onSave, first, memo];
  const items2 = [assignableRoles, first, callback];
  const callback1 = first.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const sorted = Array.from(first).sort();
    const arr = Array.from(first);
    const items = [...memo];
    if (!isEqualResult) {
      onSave(sorted);
    }
    isEqualResult = _mod12.isEqual(sorted, items.sort());
  }, items1);
  const callback2 = first.useCallback((arg0, arg1) => {
    assignableRoles = tmp;
    const obj = {
      label: closure_5(selectedRoleIds(onSave[9]), { role: assignableRoles[arg1], children: assignableRoles[arg1].name }),
      onPress() {
        return callback(id.id);
      },
      trailing: closure_5(assignableRoles(onSave[8]).FormRow.Checkbox, { selected: first.has(assignableRoles[arg1].id) })
    };
    const children = [closure_5(assignableRoles(onSave[8]).FormRow, obj), ];
    let tmp5Result = !tmp2;
    if (arg1 !== assignableRoles.length - 1) {
      tmp5Result = closure_5(assignableRoles(onSave[8]).FormDivider, {});
    }
    children[1] = tmp5Result;
    return closure_1_7(callback, { children });
  }, items2);
  let obj = { onPress: callback1, accessibilityRole: "button", children: null };
  const obj2 = { variant: "text-md/semibold", children: null };
  const intl = assignableRoles(onSave[12]).intl;
  obj2.children = intl.string(assignableRoles(onSave[12]).t.i4jeWR);
  obj.children = closure_5(assignableRoles(onSave[11]).Text, obj2);
  const tmp6 = selectedRoleIds(onSave[5])();
  let obj3 = { title: null, trailing: null };
  const intl2 = assignableRoles(onSave[12]).intl;
  obj3.title = intl2.string(assignableRoles(onSave[12]).t["LPJmL/"]);
  obj3.trailing = closure_5(assignableRoles(onSave[10]).PressableOpacity, obj);
  const tmp10 = closure_5(assignableRoles(onSave[10]).PressableOpacity, obj);
  const obj4 = { scrollable: true, header: closure_5(assignableRoles(onSave[13]).BottomSheetTitleHeader, obj3), startExpanded: true, children: null };
  const obj5 = { inActionSheet: true, style: tmp.list, itemSize: tmp6, sections: null, renderItem: callback2, placeholderConfig: tmp5, estimatedListSize: "windowSize", listId: "select-invite-roles", wrapChildren: true };
  const items3 = [assignableRoles.length];
  obj5.sections = items3;
  obj4.children = closure_5(selectedRoleIds(onSave[15]), obj5);
  return closure_5(assignableRoles(onSave[14]).ActionSheet, obj4);
};