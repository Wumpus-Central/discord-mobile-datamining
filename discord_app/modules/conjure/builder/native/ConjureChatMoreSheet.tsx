// === Module 12549: ConjureChatMoreSheet ===

// Module 12549 (ConjureChatMoreSheet)
import _modDef3868 from "module_3868" /* 3868 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import noop from "module_19" /* 19 */;

const require = fn;
function MoreRow(row) {
  row = row.row;
  if ("switch" === row.kind) {
    const obj2 = { label: null, subLabel: null, icon: null, value: null, disabled: null, onValueChange: null };
    ({ label: obj3.label, subLabel: obj3.subLabel } = row);
    const obj4 = { IconComponent: row.IconComponent };
    obj2.icon = jsx(row(6983).TableRowIcon, { IconComponent: row.IconComponent });
    ({ value: obj3.value, disabled: obj3.disabled } = row);
    obj2.onValueChange = function onValueChange(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = true === row.closesOnEnable;
      }
      if (tmp) {
        ActionSheetActionCreatorsDefault.hideActionSheet(ConjureChatMoreSheet);
      }
      row.onValueChange(arg0);
    };
    return jsx(row(7369).TableSwitchRow, { label: null, subLabel: null, icon: null, value: null, disabled: null, onValueChange: null });
  } else {
    let str = "default";
    if (true === row.destructive) {
      str = "danger";
    }
    let obj = { label: row.label, variant: str, icon: null, onPress: null };
    const obj7 = { IconComponent: row.IconComponent, variant: str };
    obj.icon = jsx(row(6983).TableRowIcon, { IconComponent: row.IconComponent, variant: str });
    obj.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet(ConjureChatMoreSheet);
      row.onPress();
    };
    return jsx(row(6975).TableRow, { label: row.label, variant: str, icon: null, onPress: null });
  }
}
const conjureDesignFeedbackStore = fn(12092);
({ enterConjureDesignFeedback: c3, exitConjureDesignFeedback: closure_4, useConjureDesignFeedback: hasOwnProperty } = conjureDesignFeedbackStore);
const jsx = fn(21).jsx;
const ConjureChatMoreSheet = "ConjureChatMoreSheet";
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatMoreSheet.tsx");

export default function ConjureChatMoreSheet(canAnnotate) {
  let tmp = null;
  const merged = Object.assign(canAnnotate, Object.assign({ canAnnotate: 0 }));
  const id = merged.project.id;
  const isConjureProjectMuted = id(10878).useIsConjureProjectMuted(id);
  const obj = id(10878);
  const conjureControlActive = id(10923).useConjureControlActive(id);
  const obj2 = id(10923);
  const obj4 = {};
  const merged1 = Object.assign(merged);
  obj4.muted = isConjureProjectMuted;
  if (canAnnotate.canAnnotate) {
    const obj5 = {
      active: closure_5(id).active,
      busy: conjureControlActive,
      onToggle(arg0) {
          if (arg0) {
            let tmp3 = React3(id);
          } else {
            tmp3 = React4(id);
          }
          return tmp3;
        }
    };
    tmp = obj5;
  }
  obj4.annotate = tmp;
  const result = id(12550).conjureChatMoreSections(obj4);
  const obj6 = { dismissAccessibilityLabel: null, children: null };
  const intl = tmp3(1113).intl;
  obj6.dismissAccessibilityLabel = intl.string(_modDef3868.OsD9T0);
  obj6.children = result.map((arr) => jsx(id(dependencyMap[13]).TableRowGroup, { hasIcons: true, children: arr.map((row) => closure_1_6(closure_1_8, { row }, row.key)) }, arr[0].key));
  return jsx(id(7366).ActionSheet, { dismissAccessibilityLabel: null, children: null });
};
export const CONJURE_CHAT_MORE_SHEET_KEY = "ConjureChatMoreSheet";