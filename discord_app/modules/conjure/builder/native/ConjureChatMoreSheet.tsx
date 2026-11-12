// discord_app/modules/conjure/builder/native/ConjureChatMoreSheet.tsx
import _modDef4079 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
function MoreRow(row) {
  row = row.row;
  if ("switch" === row.kind) {
    const obj2 = { label: null, subLabel: null, icon: null, value: null, disabled: null, onValueChange: null };
    ({ label: obj3.label, subLabel: obj3.subLabel } = row);
    const obj4 = { IconComponent: row.IconComponent };
    obj2.icon = jsx(row(7387).TableRowIcon, { IconComponent: row.IconComponent });
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
    return jsx(row(7888).TableSwitchRow, {
      label: null,
      subLabel: null,
      icon: null,
      value: null,
      disabled: null,
      onValueChange: null,
    });
  } else {
    let str = "default";
    if (true === row.destructive) {
      str = "danger";
    }
    let obj = { label: row.label, variant: str, icon: null, onPress: null };
    const obj7 = { IconComponent: row.IconComponent, variant: str };
    obj.icon = jsx(row(7387).TableRowIcon, { IconComponent: row.IconComponent, variant: str });
    obj.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet(ConjureChatMoreSheet);
      row.onPress();
    };
    return jsx(row(7379).TableRow, { label: row.label, variant: str, icon: null, onPress: null });
  }
}
const conjureDesignFeedbackStore = fn(13195);
({
  enterConjureDesignFeedback: c3,
  exitConjureDesignFeedback: closure_4,
  useConjureDesignFeedback: hasOwnProperty,
} = conjureDesignFeedbackStore);
const jsx = fn(21).jsx;
const ConjureChatMoreSheet = "ConjureChatMoreSheet";
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatMoreSheet.tsx");

export default function ConjureChatMoreSheet(canAnnotate) {
  let tmp = null;
  const merged = Object.assign(canAnnotate, Object.assign({ canAnnotate: 0 }));
  const id = merged.project.id;
  const isConjureProjectMuted = id(7268).useIsConjureProjectMuted(id);
  const obj = id(7268);
  const conjureControlActive = id(13047).useConjureControlActive(id);
  const obj2 = id(13047);
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
      },
    };
    tmp = obj5;
  }
  obj4.annotate = tmp;
  const result = id(13197).conjureChatMoreSections(obj4);
  const obj6 = { dismissAccessibilityLabel: null, children: null };
  const intl = tmp3(1113).intl;
  obj6.dismissAccessibilityLabel = intl.string(_modDef4079.OsD9T0);
  obj6.children = result.map((arr) =>
    jsx(
      id(dependencyMap[13]).TableRowGroup,
      { hasIcons: true, children: arr.map((row) => closure_1_6(closure_1_8, { row }, row.key)) },
      arr[0].key,
    ),
  );
  return jsx(id(7885).ActionSheet, { dismissAccessibilityLabel: null, children: null });
}
export const CONJURE_CHAT_MORE_SHEET_KEY = "ConjureChatMoreSheet";
