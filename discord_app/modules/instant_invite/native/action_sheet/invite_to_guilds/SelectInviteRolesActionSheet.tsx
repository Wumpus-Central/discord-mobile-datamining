// === Module 18327: SelectInviteRolesActionSheet ===

// Module 18327 (SelectInviteRolesActionSheet)
import _mod12 from "module_12" /* 12 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let closure_8 = createStyles.createStyles({ list: { flex: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/SelectInviteRolesActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SelectInviteRolesActionSheet(assignableRoles) {
  const cResult = assignableRoles(576).c(35);
  assignableRoles = assignableRoles.assignableRoles;
  ({ selectedRoleIds, onSave } = assignableRoles);
  closure_8();
  if (cResult[0] !== assignableRoles) {
    let tmp5 = globalThis;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function v(id) {
        return id.id;
      };
      cResult[2] = fn;
      let tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    let set = new tmp5.Set(assignableRoles.map(tmp6));
    tmp5 = set;
    cResult[0] = assignableRoles;
    cResult[1] = set;
  } else {
    dependencyMap = tmp4;
    if (cResult[3] === cResult[1]) {
      if (cResult[4] === selectedRoleIds) {
        _slicedToArray = tmp11;
        if (cResult[8] !== cResult[5]) {
          const fn2 = function x() {
            return new Set(closure_3);
          };
          cResult[8] = tmp11;
          cResult[9] = fn2;
          let tmp16 = fn2;
        } else {
          tmp16 = cResult[9];
        }
        [first, closure_5] = first.useState(tmp16);
        onSave(10210)();
        onSave(6729)();
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
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
          cResult[10] = C;
        } else {
          class C {
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
        closure_6 = C;
        if (cResult[11] === cResult[5]) {
          class C {
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
        const fn3 = function k() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          const sorted = Array.from(first).sort();
          const arr = Array.from(first);
          const items = [...closure_3];
          if (!isEqualResult) {
            onSave(sorted);
          }
          isEqualResult = _mod12.isEqual(sorted, items.sort());
        };
        cResult[11] = cResult[5];
        cResult[12] = onSave;
        cResult[13] = first;
        cResult[14] = fn3;
      }
    }
    if (cResult[6] !== cResult[1]) {
      class C {
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
      cResult[7] = tmp13;
    } else {
      class C {
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
    const found = selectedRoleIds.filter(tmp13);
    cResult[3] = cResult[1];
    cResult[4] = selectedRoleIds;
    cResult[5] = found;
  }
  let obj = assignableRoles(576);
}) : (function SelectInviteRolesActionSheet(assignableRoles) {
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
  const tmp5 = selectedRoleIds(onSave[6])();
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
      label: closure_5(selectedRoleIds(onSave[11]), { role: assignableRoles[arg1], children: assignableRoles[arg1].name }),
      onPress() {
        return callback(id.id);
      },
      trailing: closure_5(assignableRoles(onSave[10]).FormRow.Checkbox, { selected: first.has(assignableRoles[arg1].id) })
    };
    const children = [closure_5(assignableRoles(onSave[10]).FormRow, obj), ];
    let tmp5Result = !tmp2;
    if (arg1 !== assignableRoles.length - 1) {
      tmp5Result = closure_5(assignableRoles(onSave[10]).FormDivider, {});
    }
    children[1] = tmp5Result;
    return closure_1_7(callback, { children });
  }, items2);
  let obj = { onPress: callback1, accessibilityRole: "button", children: null };
  const obj2 = { variant: "text-md/semibold", children: null };
  const intl = assignableRoles(onSave[13]).intl;
  obj2.children = intl.string(assignableRoles(onSave[13]).t.i4jeWR);
  obj.children = closure_5(assignableRoles(onSave[12]).Text, obj2);
  const tmp6 = selectedRoleIds(onSave[7])();
  let obj3 = { title: null, trailing: null };
  const intl2 = assignableRoles(onSave[13]).intl;
  obj3.title = intl2.string(assignableRoles(onSave[13]).t["LPJmL/"]);
  obj3.trailing = closure_5(assignableRoles(onSave[14]).PressableOpacity, obj);
  const tmp10 = closure_5(assignableRoles(onSave[14]).PressableOpacity, obj);
  const obj4 = { scrollable: true, header: closure_5(assignableRoles(onSave[15]).BottomSheetTitleHeader, obj3), startExpanded: true, children: null };
  const obj5 = { inActionSheet: true, style: tmp.list, itemSize: tmp6, sections: null, renderItem: callback2, placeholderConfig: tmp5, estimatedListSize: "windowSize", listId: "select-invite-roles", wrapChildren: true };
  const items3 = [assignableRoles.length];
  obj5.sections = items3;
  obj4.children = closure_5(selectedRoleIds(onSave[16]), obj5);
  return closure_5(assignableRoles(onSave[17]).ActionSheet, obj4);
});