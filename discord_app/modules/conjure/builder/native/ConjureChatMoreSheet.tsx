// === Module 12352: ConjureChatMoreSheet ===

// Module 12352 (ConjureChatMoreSheet)
import _modDef3864 from "module_3864" /* 3864 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_3 = ["canAnnotate"];
const conjureDesignFeedbackStore = fn(11865);
({ enterConjureDesignFeedback: hasOwnProperty, exitConjureDesignFeedback: metroRequire, useConjureDesignFeedback: closure_7 } = conjureDesignFeedbackStore);
const jsx = fn(21).jsx;
const ConjureChatMoreSheet = "ConjureChatMoreSheet";
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function MoreRow(row) {
  const cResult = iter(576).c(21);
  if ("switch" === row.row.kind) {
    if (cResult[0] !== iter.IconComponent) {
      const obj2 = { IconComponent: iter.IconComponent };
      const tmp13 = jsx(tmp(6971).TableRowIcon, { IconComponent: iter.IconComponent });
      cResult[0] = iter.IconComponent;
      cResult[1] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[1];
    }
    if (cResult[2] !== iter) {
      const fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = true === iter.closesOnEnable;
        }
        if (tmp) {
          ActionSheetActionCreatorsDefault.hideActionSheet(ConjureChatMoreSheet);
        }
        iter.onValueChange(arg0);
      };
      cResult[2] = iter;
      cResult[3] = fn;
      let tmp14 = fn;
    } else {
      tmp14 = cResult[3];
    }
    if (cResult[4] === iter.disabled) {
      if (cResult[5] === iter.label) {
        if (cResult[6] === iter.subLabel) {
          if (cResult[7] === iter.value) {
            if (cResult[8] === tmp11) {
              if (cResult[9] === tmp14) {
                let tmp15 = cResult[10];
              }
              return tmp15;
            }
          }
        }
      }
    }
    const obj3 = { label: null, subLabel: null, icon: null, value: null, disabled: null, onValueChange: null };
    ({ label: obj5.label, subLabel: obj5.subLabel } = iter);
    obj3.icon = tmp11;
    ({ value: obj5.value, disabled: obj5.disabled } = iter);
    obj3.onValueChange = tmp14;
    const tmp17 = jsx(tmp(7355).TableSwitchRow, { label: null, subLabel: null, icon: null, value: null, disabled: null, onValueChange: null });
    cResult[4] = iter.disabled;
    cResult[5] = iter.label;
    cResult[6] = iter.subLabel;
    cResult[7] = iter.value;
    cResult[8] = tmp11;
    cResult[9] = tmp14;
    cResult[10] = tmp17;
    tmp15 = tmp17;
  } else {
    let str = "default";
    if (true === iter.destructive) {
      str = "danger";
    }
    if (cResult[11] === iter.IconComponent) {
      if (cResult[12] === str) {
        let tmp4 = cResult[13];
      }
      if (cResult[14] !== iter) {
        class C {
          constructor() {
            obj = closure_1(closure_2[4]);
            hideActionSheetResult = obj.hideActionSheet(ConjureChatMoreSheet);
            onPressResult = row.onPress();
            return;
          }
        }
        cResult[14] = iter;
        cResult[15] = C;
      } else {
        class C {
          constructor() {
            obj = closure_1(closure_2[4]);
            hideActionSheetResult = obj.hideActionSheet(ConjureChatMoreSheet);
            onPressResult = row.onPress();
            return;
          }
        }
      }
      if (cResult[16] === iter.label) {
        class C {
          constructor() {
            obj = closure_1(closure_2[4]);
            hideActionSheetResult = obj.hideActionSheet(ConjureChatMoreSheet);
            onPressResult = row.onPress();
            return;
          }
        }
      }
      const obj4 = { label: iter.label, variant: str, icon: tmp4, onPress: C };
      const tmp10 = jsx(tmp(6963).TableRow, { label: iter.label, variant: str, icon: tmp4, onPress: C });
      cResult[16] = iter.label;
      cResult[17] = tmp4;
      cResult[18] = C;
      cResult[19] = str;
      cResult[20] = tmp10;
    }
    const obj9 = { IconComponent: iter.IconComponent, variant: str };
    const tmp6 = jsx(tmp(6971).TableRowIcon, { IconComponent: iter.IconComponent, variant: str });
    cResult[11] = iter.IconComponent;
    cResult[12] = str;
    cResult[13] = tmp6;
    tmp4 = tmp6;
  }
  let obj = iter(576);
}) : (function MoreRow(row) {
  row = row.row;
  if ("switch" === row.kind) {
    const obj2 = { label: null, subLabel: null, icon: null, value: null, disabled: null, onValueChange: null };
    ({ label: obj3.label, subLabel: obj3.subLabel } = row);
    const obj4 = { IconComponent: row.IconComponent };
    obj2.icon = jsx(row(6971).TableRowIcon, { IconComponent: row.IconComponent });
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
    return jsx(row(7355).TableSwitchRow, { label: null, subLabel: null, icon: null, value: null, disabled: null, onValueChange: null });
  } else {
    let str = "default";
    if (true === row.destructive) {
      str = "danger";
    }
    let obj = { label: row.label, variant: str, icon: null, onPress: null };
    const obj7 = { IconComponent: row.IconComponent, variant: str };
    obj.icon = jsx(row(6971).TableRowIcon, { IconComponent: row.IconComponent, variant: str });
    obj.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet(ConjureChatMoreSheet);
      row.onPress();
    };
    return jsx(row(6963).TableRow, { label: row.label, variant: str, icon: null, onPress: null });
  }
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatMoreSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureChatMoreSheet(canAnnotate) {
  const cResult = id(576).c(6);
  const tmp4 = _objectWithoutProperties(canAnnotate, closure_3);
  id = tmp4.project.id;
  const obj = id(576);
  const isConjureProjectMuted = id(10835).useIsConjureProjectMuted(id);
  const obj2 = id(10835);
  const conjureControlActive = id(10875).useConjureControlActive(id);
  const obj3 = id(10875);
  const obj5 = {};
  const merged = Object.assign(tmp4);
  obj5.muted = isConjureProjectMuted;
  let tmp8 = null;
  if (canAnnotate.canAnnotate) {
    const obj6 = {
      active: closure_7(id).active,
      busy: conjureControlActive,
      onToggle(arg0) {
          if (arg0) {
            let tmp3 = hasOwnProperty(id);
          } else {
            tmp3 = timestampProducer(id);
          }
          return tmp3;
        }
    };
    tmp8 = obj6;
  }
  obj5.annotate = tmp8;
  const result = id(12353).conjureChatMoreSections(obj5);
  const ActionSheet = tmp(7358).ActionSheet;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(_modDef3864.OsD9T0);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function h(arr) {
      return jsx(id(dependencyMap[16]).TableRowGroup, { hasIcons: true, children: arr.map((row) => closure_1_8(closure_1_10, { row }, row.key)) }, arr[0].key);
    };
    cResult[1] = fn;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[1];
  }
  const mapped = result.map(tmp12);
  if (cResult[2] === ActionSheet) {
    if (cResult[3] === first) {
      if (cResult[4] === mapped) {
        let tmp14 = cResult[5];
      }
      return tmp14;
    }
  }
  const tmp15 = <ActionSheet dismissAccessibilityLabel={first}>{mapped}</ActionSheet>;
  cResult[2] = ActionSheet;
  cResult[3] = first;
  cResult[4] = mapped;
  cResult[5] = tmp15;
  tmp14 = tmp15;
  const obj4 = id(12353);
}) : (function ConjureChatMoreSheet(canAnnotate) {
  let tmp = null;
  const merged = Object.assign(canAnnotate, Object.assign({ canAnnotate: 0 }));
  const id = merged.project.id;
  const isConjureProjectMuted = id(10835).useIsConjureProjectMuted(id);
  const obj = id(10835);
  const conjureControlActive = id(10875).useConjureControlActive(id);
  const obj2 = id(10875);
  const obj4 = {};
  const merged1 = Object.assign(merged);
  obj4.muted = isConjureProjectMuted;
  if (canAnnotate.canAnnotate) {
    const obj5 = {
      active: closure_7(id).active,
      busy: conjureControlActive,
      onToggle(arg0) {
          if (arg0) {
            let tmp3 = hasOwnProperty(id);
          } else {
            tmp3 = timestampProducer(id);
          }
          return tmp3;
        }
    };
    tmp = obj5;
  }
  obj4.annotate = tmp;
  const result = id(12353).conjureChatMoreSections(obj4);
  const obj6 = { dismissAccessibilityLabel: null, children: null };
  const intl = tmp3(1125).intl;
  obj6.dismissAccessibilityLabel = intl.string(_modDef3864.OsD9T0);
  obj6.children = result.map((arr) => jsx(id(dependencyMap[16]).TableRowGroup, { hasIcons: true, children: arr.map((row) => closure_1_8(closure_1_10, { row }, row.key)) }, arr[0].key));
  return jsx(id(7358).ActionSheet, { dismissAccessibilityLabel: null, children: null });
});
export const CONJURE_CHAT_MORE_SHEET_KEY = "ConjureChatMoreSheet";