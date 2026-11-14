// === Module 13302: ConjureChatMoreSheet ===

// Module 13302 (ConjureChatMoreSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import useConjureShareToServer from "useConjureShareToServer" /* 13189 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5177 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import UserStore from "UserStore" /* 1388 */;

require = fn;
function MoreRow(row) {
  row = row.row;
  if ("switch" === row.kind) {
    const obj2 = { label: null, subLabel: null, icon: null, value: null, disabled: null, onValueChange: null };
    ({ label: obj3.label, subLabel: obj3.subLabel } = row);
    const obj4 = { IconComponent: row.IconComponent };
    obj2.icon = jsx(row(7455).TableRowIcon, { IconComponent: row.IconComponent });
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
    return jsx(row(7954).TableSwitchRow, { label: null, subLabel: null, icon: null, value: null, disabled: null, onValueChange: null });
  } else {
    let str = "default";
    if (true === row.destructive) {
      str = "danger";
    }
    let obj = { label: row.label, variant: str, icon: null, onPress: null };
    const obj7 = { IconComponent: row.IconComponent, variant: str };
    obj.icon = jsx(row(7455).TableRowIcon, { IconComponent: row.IconComponent, variant: str });
    obj.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet(ConjureChatMoreSheet);
      row.onPress();
    };
    return jsx(row(7443).TableRow, { label: row.label, variant: str, icon: null, onPress: null });
  }
}
const conjureDesignFeedbackStore = fn(13303);
({ enterConjureDesignFeedback: closure_6, exitConjureDesignFeedback: metroImportDefault, useConjureDesignFeedback: closure_8 } = conjureDesignFeedbackStore);
const jsx = fn(21).jsx;
const ConjureChatMoreSheet = "ConjureChatMoreSheet";
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatMoreSheet.tsx");

export default function ConjureChatMoreSheet(canAnnotate) {
  let tmp = null;
  const merged = Object.assign(canAnnotate, Object.assign({ canAnnotate: 0 }));
  let removeTarget;
  const id = merged.project.id;
  const isConjureProjectMuted = id(removeTarget[10]).useIsConjureProjectMuted(id);
  const obj = id(removeTarget[10]);
  const project = merged.project;
  removeTarget = merged.removeTarget;
  const conjureControlActive = id(removeTarget[11]).useConjureControlActive(id);
  const obj2 = id(removeTarget[11]);
  const conjureViewedRemoveTarget = id(removeTarget[12]).useConjureViewedRemoveTarget(id, merged.guildId);
  const obj3 = id(removeTarget[12]);
  items = [UserStore, GuildStore, PermissionStore, id(removeTarget[14]).ApexExperimentStore];
  const items1 = [project, removeTarget];
  const stateFromStores = id(removeTarget[13]).useStateFromStores(items, () => useConjureShareToServer.canAddConjureProjectToAnotherServer(project, removeTarget, "ConjureChatMoreSheet"), items1);
  const obj4 = id(removeTarget[13]);
  const obj6 = {};
  const merged1 = Object.assign(merged);
  obj6.muted = isConjureProjectMuted;
  obj6.serverRemoveTarget = conjureViewedRemoveTarget;
  obj6.canAddToAnotherServer = stateFromStores;
  if (canAnnotate.canAnnotate) {
    const obj7 = {
      active: closure_8(id).active,
      busy: conjureControlActive,
      onToggle(arg0) {
          if (arg0) {
            let tmp3 = timestampProducer(id);
          } else {
            tmp3 = metroImportDefault(id);
          }
          return tmp3;
        }
    };
    tmp = obj7;
  }
  obj6.annotate = tmp;
  const result = id(removeTarget[16]).conjureChatMoreSections(obj6);
  const obj8 = { dismissAccessibilityLabel: null, children: null };
  const intl = tmp3(tmp4[18]).intl;
  obj8.dismissAccessibilityLabel = intl.string(project(removeTarget[19]).OsD9T0);
  obj8.children = result.map((arr) => jsx(id(removeTarget[20]).TableRowGroup, { hasIcons: true, children: arr.map((row) => closure_1_9(closure_1_11, { row }, row.key)) }, arr[0].key));
  return jsx(id(removeTarget[17]).ActionSheet, { dismissAccessibilityLabel: null, children: null });
};
export const CONJURE_CHAT_MORE_SHEET_KEY = "ConjureChatMoreSheet";