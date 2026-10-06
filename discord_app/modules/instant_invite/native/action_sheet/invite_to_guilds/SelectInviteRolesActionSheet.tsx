// === Module 18040: SelectInviteRolesActionSheet ===

// Module 18040 (SelectInviteRolesActionSheet)
import _mod12 from "module_12" /* 12 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ list: { flex: 1 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function(assignableRoles) {
  let args;
  let closure_5;
  let first;
  let onSave;
  let selectedRoleIds;
  let tmp4;
  const tmp = set;
  let obj = assignableRoles(set[5]);
  const cResult = obj.c(35);
  assignableRoles = assignableRoles.assignableRoles;
  ({ selectedRoleIds, onSave } = assignableRoles);
  closure_8();
  if (cResult[0] !== assignableRoles) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(id) {
          return id.id;
        }
      }
      cResult[2] = S;
    } else {
      class S {
        constructor(id) {
          return id.id;
        }
      }
    }
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(assignableRoles.map(S));
    cResult[0] = assignableRoles;
    cResult[1] = set;
    tmp4 = set;
  } else {
    class S {
      constructor(id) {
        return id.id;
      }
    }
  }
  set = tmp4;
  if (cResult[3] === tmp4) {
    let tmp22;
    class S {
      constructor(id) {
        return id.id;
      }
    }
    _slicedToArray = tmp9;
    if (cResult[8] !== tmp9) {
      class S {
        constructor(id) {
          return id.id;
        }
      }
      cResult[8] = tmp9;
      cResult[9] = tmp13;
    } else {
      class S {
        constructor(id) {
          return id.id;
        }
      }
    }
    [first, closure_5] = first.useState(tmp13);
    onSave(tmp[6])();
    onSave(tmp[7])();
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor(arg0) {
          closure_0 = assignableRoles;
          tmp = closure_5((items) => {
            set = new Set(items);
            if (!set.delete(closure_0)) {
              set.add(closure_0);
            }
            return set;
          });
          return;
        }
      }
      cResult[10] = A;
      tmp22 = A;
    } else {
      class A {
        constructor(arg0) {
          closure_0 = assignableRoles;
          tmp = closure_5((items) => {
            set = new Set(items);
            if (!set.delete(closure_0)) {
              set.add(closure_0);
            }
            return set;
          });
          return;
        }
      }
    }
    A = tmp22;
    if (cResult[11] === tmp9) {
      class A {
        constructor(arg0) {
          closure_0 = assignableRoles;
          tmp = closure_5((items) => {
            set = new Set(items);
            if (!set.delete(closure_0)) {
              set.add(closure_0);
            }
            return set;
          });
          return;
        }
      }
    }
    const fn = function k() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const arr = Array.from(first);
      const sorted = arr.sort();
      const items = [...closure_3];
      const obj3 = _mod12;
      const tmp4 = !obj3.isEqual(sorted, items.sort());
      if (tmp4) {
        onSave(sorted);
      }
    };
    cResult[11] = tmp9;
    cResult[12] = onSave;
    cResult[13] = first;
    cResult[14] = fn;
  }
  if (cResult[6] !== tmp4) {
    class A {
      constructor(arg0) {
        closure_0 = assignableRoles;
        tmp = closure_5((items) => {
          set = new Set(items);
          if (!set.delete(closure_0)) {
            set.add(closure_0);
          }
          return set;
        });
        return;
      }
    }
    cResult[6] = tmp4;
    cResult[7] = R;
  } else {
    class A {
      constructor(arg0) {
        closure_0 = assignableRoles;
        tmp = closure_5((items) => {
          set = new Set(items);
          if (!set.delete(closure_0)) {
            set.add(closure_0);
          }
          return set;
        });
        return;
      }
    }
  }
  const found = selectedRoleIds.filter(R);
  cResult[3] = tmp4;
  cResult[4] = selectedRoleIds;
  cResult[5] = found;
}) : ((assignableRoles) => {
  let Text;
  let intl;
  let intl2;
  let items3;
  let obj2;
  let obj5;
  let tmp10;
  assignableRoles = assignableRoles.assignableRoles;
  const selectedRoleIds = assignableRoles.selectedRoleIds;
  const onSave = assignableRoles.onSave;
  let first;
  let items = [assignableRoles, selectedRoleIds];
  const tmp = closure_8();
  const memo = first.useMemo(() => {
    set = new Set(assignableRoles.map((id) => id.id));
    return selectedRoleIds.filter((item) => set.has(item));
  }, items);
  const tmp3 = memo(first.useState(() => {
    set = new Set(memo);
    return set;
  }), 2);
  first = tmp3[0];
  let closure_5 = tmp3[1];
  const tmp5 = selectedRoleIds(onSave[6])();
  const tmp6 = selectedRoleIds(onSave[7])();
  const callback = first.useCallback((arg0) => {
    let closure_0 = arg0;
    closure_5((items) => {
      set = new Set(items);
      if (!set.delete(closure_0)) {
        set.add(closure_0);
      }
      return set;
    });
  }, []);
  const items1 = [onSave, first, memo];
  const items2 = [assignableRoles, first, callback];
  const callback1 = first.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const arr = Array.from(first);
    const sorted = arr.sort();
    const items = [...memo];
    const obj3 = _mod12;
    const tmp4 = !obj3.isEqual(sorted, items.sort());
    if (tmp4) {
      onSave(sorted);
    }
  }, items1);
  const callback2 = first.useCallback((arg0, arg1) => {
    let Checkbox;
    let id;
    let obj2;
    let obj3;
    assignableRoles = tmp;
    const obj = {
      label: closure_5(selectedRoleIds(onSave[11]), obj2),
      onPress() {
        return callback(id.id);
      },
      trailing: closure_5(Checkbox, obj3)
    };
    const FormRow = assignableRoles(onSave[10]).FormRow;
    obj2 = { role: assignableRoles[arg1], children: assignableRoles[arg1].name };
    obj3 = { selected: first.has(assignableRoles[arg1].id) };
    Checkbox = assignableRoles(onSave[10]).FormRow.Checkbox;
    const children = [closure_5(FormRow, obj), !tmp2 && closure_5(assignableRoles(onSave[10]).FormDivider, {})];
    arg1 !== assignableRoles.length - 1 && closure_5(assignableRoles(onSave[10]).FormDivider, {});
    return closure_1_7(callback, { children });
  }, items2);
  let obj = { onPress: callback1, accessibilityRole: "button", children: closure_5(Text, obj2) };
  const PressableOpacity = assignableRoles(onSave[14]).PressableOpacity;
  obj2 = { variant: "text-md/semibold", children: intl.string(assignableRoles(onSave[13]).t.i4jeWR) };
  Text = assignableRoles(onSave[12]).Text;
  intl = assignableRoles(onSave[13]).intl;
  let obj3 = { title: intl2.string(assignableRoles(onSave[13]).t["LPJmL/"]), trailing: tmp10 };
  tmp10 = closure_5(PressableOpacity, obj);
  const BottomSheetTitleHeader = assignableRoles(onSave[15]).BottomSheetTitleHeader;
  intl2 = assignableRoles(onSave[13]).intl;
  const obj4 = { scrollable: true, header: closure_5(BottomSheetTitleHeader, obj3), startExpanded: true, children: closure_5(selectedRoleIds(onSave[16]), obj5) };
  const ActionSheet = assignableRoles(onSave[17]).ActionSheet;
  obj5 = { inActionSheet: true, style: tmp.list, itemSize: tmp6, sections: items3, renderItem: callback2, placeholderConfig: tmp5, estimatedListSize: "windowSize", listId: "select-invite-roles", wrapChildren: true };
  items3 = [assignableRoles.length];
  return closure_5(ActionSheet, obj4);
});
const result = size.fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/SelectInviteRolesActionSheet.tsx");

export default tmp3;