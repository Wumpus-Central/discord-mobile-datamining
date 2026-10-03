// discord_app/modules/instant_invite/native/action_sheet/invite_to_guilds/SelectInviteRolesActionSheet.tsx
import _mod12 from "../../../../../../_runtime/metro/00012__.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let closure_8 = createStyles.createStyles({ list: { flex: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/instant_invite/native/action_sheet/invite_to_guilds/SelectInviteRolesActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (assignableRoles) => {
      const cResult = assignableRoles(576).c(35);
      assignableRoles = assignableRoles.assignableRoles;
      ({ selectedRoleIds, onSave } = assignableRoles);
      closure_8();
      if (cResult[0] !== assignableRoles) {
        let tmp4 = globalThis;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor(arg0) {
              return assignableRoles.id;
            }
          }
          cResult[2] = S;
        } else {
          class S {
            constructor(arg0) {
              return assignableRoles.id;
            }
          }
        }
        let set = new tmp4.Set(assignableRoles.map(S));
        tmp4 = set;
        cResult[0] = assignableRoles;
        cResult[1] = set;
      } else {
        class S {
          constructor(arg0) {
            return assignableRoles.id;
          }
        }
        dependencyMap = tmp3;
        if (cResult[3] === tmp3) {
          class S {
            constructor(arg0) {
              return assignableRoles.id;
            }
          }
        }
        if (cResult[6] !== tmp3) {
          class R {
            constructor(arg0) {
              return closure_2.has(assignableRoles);
            }
          }
          cResult[6] = tmp3;
          cResult[7] = R;
        } else {
          class R {
            constructor(arg0) {
              return closure_2.has(assignableRoles);
            }
          }
        }
        const found = selectedRoleIds.filter(R);
        cResult[3] = tmp3;
        cResult[4] = selectedRoleIds;
        cResult[5] = found;
      }
      let obj = assignableRoles(576);
    }
  : (assignableRoles) => {
      assignableRoles = assignableRoles.assignableRoles;
      const selectedRoleIds = assignableRoles.selectedRoleIds;
      const onSave = assignableRoles.onSave;
      let first;
      let items = [assignableRoles, selectedRoleIds];
      const memo = first.useMemo(() => {
        const set = new Set(assignableRoles.map((id) => id.id));
        return selectedRoleIds.filter((item) => set.has(item));
      }, items);
      const tmp3 = memo(
        first.useState(() => new Set(memo)),
        2,
      );
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
          label: closure_5(selectedRoleIds(onSave[11]), {
            role: assignableRoles[arg1],
            children: assignableRoles[arg1].name,
          }),
          onPress() {
            return callback(id.id);
          },
          trailing: closure_5(assignableRoles(onSave[10]).FormRow.Checkbox, {
            selected: first.has(assignableRoles[arg1].id),
          }),
        };
        const children = [closure_5(assignableRoles(onSave[10]).FormRow, obj)];
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
      const obj4 = {
        scrollable: true,
        header: closure_5(assignableRoles(onSave[15]).BottomSheetTitleHeader, obj3),
        startExpanded: true,
        children: null,
      };
      const obj5 = {
        inActionSheet: true,
        style: tmp.list,
        itemSize: tmp6,
        sections: null,
        renderItem: callback2,
        placeholderConfig: tmp5,
        estimatedListSize: "windowSize",
        listId: "select-invite-roles",
        wrapChildren: true,
      };
      const items3 = [assignableRoles.length];
      obj5.sections = items3;
      obj4.children = closure_5(selectedRoleIds(onSave[16]), obj5);
      return closure_5(assignableRoles(onSave[17]).ActionSheet, obj4);
    };
