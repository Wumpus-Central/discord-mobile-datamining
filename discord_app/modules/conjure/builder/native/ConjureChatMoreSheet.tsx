// === Module 12514: ConjureChatMoreSheet ===

// Module 12514 (ConjureChatMoreSheet)
import _modDef3865 from "module_3865" /* 3865 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import noop from "module_19" /* 19 */;

const require = fn;
function MoreRow(row) {
  row = row.row;
  if ("switch" === row.kind) {
    const obj2 = { label: null, subLabel: null, icon: null, value: null, disabled: null, onValueChange: null };
    ({ label: obj3.label, subLabel: obj3.subLabel } = row);
    const obj4 = { IconComponent: row.IconComponent };
    obj2.icon = jsx(row(6977).TableRowIcon, { IconComponent: row.IconComponent });
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
    return jsx(row(7363).TableSwitchRow, { label: null, subLabel: null, icon: null, value: null, disabled: null, onValueChange: null });
  } else {
    let str = "default";
    if (true === row.destructive) {
      str = "danger";
    }
    let obj = { label: row.label, variant: str, icon: null, onPress: null };
    const obj7 = { IconComponent: row.IconComponent, variant: str };
    obj.icon = jsx(row(6977).TableRowIcon, { IconComponent: row.IconComponent, variant: str });
    obj.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet(ConjureChatMoreSheet);
      row.onPress();
    };
    return jsx(row(6969).TableRow, { label: row.label, variant: str, icon: null, onPress: null });
  }
}
const conjureDesignFeedbackStore = fn(12053);
({ enterConjureDesignFeedback: c3, exitConjureDesignFeedback: closure_4, useConjureDesignFeedback: hasOwnProperty } = conjureDesignFeedbackStore);
const jsx = fn(21).jsx;
const ConjureChatMoreSheet = "ConjureChatMoreSheet";
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatMoreSheet.tsx");

export default function ConjureChatMoreSheet(canAnnotate) {
  let tmp = null;
  const merged = Object.assign(canAnnotate, Object.assign({ canAnnotate: 0 }));
  const id = merged.project.id;
  const isConjureProjectMuted = id(10858).useIsConjureProjectMuted(id);
  const obj = id(10858);
  const conjureControlActive = id(10898).useConjureControlActive(id);
  const obj2 = id(10898);
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
  const result = id(12515).conjureChatMoreSections(obj4);
  const obj6 = { dismissAccessibilityLabel: null, children: null };
  const intl = tmp3(1114).intl;
  obj6.dismissAccessibilityLabel = intl.string(_modDef3865.OsD9T0);
  obj6.children = result.map((arr) => jsx(id(dependencyMap[13]).TableRowGroup, { hasIcons: true, children: arr.map((row) => closure_1_6(closure_1_8, { row }, row.key)) }, arr[0].key));
  return jsx(id(7360).ActionSheet, { dismissAccessibilityLabel: null, children: null });
};
export const CONJURE_CHAT_MORE_SHEET_KEY = "ConjureChatMoreSheet";