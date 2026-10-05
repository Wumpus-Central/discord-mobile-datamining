// === Module 16625: ConjureVersionRestoreConfirm ===

// Module 16625 (ConjureVersionRestoreConfirm)
import react2 from "react" /* 576 */;
import intl7 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import useAlertStore from "useAlertStore" /* 5709 */;
import AlertModal2 from "AlertModal" /* 5713 */;
import TableCheckboxRow2 from "TableCheckboxRow" /* 5990 */;
import TableRowGroup2 from "TableRowGroup" /* 6074 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let matchingBackup;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((matchingBackup) => {
  let TableCheckboxRow;
  let first;
  let intl3;
  let intl4;
  let intl6;
  let items;
  let obj7;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(16);
  matchingBackup = matchingBackup.matchingBackup;
  const onConfirm = matchingBackup.onConfirm;
  [first, tmp6] = react.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl7.intl;
    const stringResult = intl.string(_modDef3723.NDY6Zv);
    const intl2 = intl7.intl;
    const stringResult1 = intl2.string(_modDef3723.z2x5zj);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp7 = stringResult;
    tmp8 = stringResult1;
  } else {
    [tmp7, tmp8] = cResult;
  }
  if (cResult[2] === first) {
    let tmp12;
    let tmp16;
    if (cResult[3] === matchingBackup) {
      tmp12 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = intl7.intl;
      const stringResult2 = intl5.string(_modDef3723.K3Q49G);
      cResult[5] = stringResult2;
      tmp16 = stringResult2;
    } else {
      tmp16 = cResult[5];
    }
    if (cResult[6] === first) {
      if (cResult[7] === matchingBackup) {
        let tmp19;
        let tmp22;
        let tmp25;
        if (cResult[8] === onConfirm) {
          tmp19 = cResult[9];
        }
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { variant: "secondary", text: intl6.string(intl7.t["ETE/oC"]) };
          const AlertActionButton = AlertModal2.AlertActionButton;
          intl6 = intl7.intl;
          const tmp24 = hasOwnProperty(AlertActionButton, obj2);
          cResult[10] = tmp24;
          tmp22 = tmp24;
        } else {
          tmp22 = cResult[10];
        }
        if (cResult[11] !== tmp19) {
          const obj3 = { children: items };
          items = [tmp19, tmp22];
          const tmp28 = metroImportDefault(metroRequire, obj3);
          cResult[11] = tmp19;
          cResult[12] = tmp28;
          tmp25 = tmp28;
        } else {
          tmp25 = cResult[12];
        }
        if (cResult[13] === tmp12) {
          let tmp29;
          if (cResult[14] === tmp25) {
            tmp29 = cResult[15];
          }
          return tmp29;
        }
        const obj4 = { title: tmp7, content: tmp8, extraContent: tmp12, actions: tmp25 };
        const tmp31 = hasOwnProperty(AlertModal2.AlertModal, obj4);
        cResult[13] = tmp12;
        cResult[14] = tmp25;
        cResult[15] = tmp31;
        tmp29 = tmp31;
      }
    }
    const obj5 = {
      variant: "primary",
      text: tmp16,
      onPress() {
          let tmp2 = null;
          if (first) {
            tmp2 = null;
            if (null != matchingBackup) {
              tmp2 = matchingBackup;
            }
          }
          return onConfirm(tmp2);
        }
    };
    const tmp21 = hasOwnProperty(AlertModal2.AlertActionButton, obj5);
    cResult[6] = first;
    cResult[7] = matchingBackup;
    cResult[8] = onConfirm;
    cResult[9] = tmp21;
    tmp19 = tmp21;
  }
  let tmp13;
  if (null != matchingBackup) {
    const obj6 = { hasIcons: false, children: hasOwnProperty(TableCheckboxRow, obj7) };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    obj7 = { label: intl3.string(_modDef3723["+/pFME"]), subLabel: intl4.string(_modDef3723["+I112y"]), checked: first, onPress: tmp6 };
    TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
    intl3 = intl7.intl;
    intl4 = intl7.intl;
    tmp13 = hasOwnProperty(TableRowGroup, obj6);
  }
  cResult[2] = first;
  cResult[3] = matchingBackup;
  cResult[4] = tmp13;
  tmp12 = tmp13;
}) : ((matchingBackup) => {
  let TableCheckboxRow;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let obj3;
  let obj4;
  let tmp3;
  let tmp4Result;
  matchingBackup = matchingBackup.matchingBackup;
  const onConfirm = matchingBackup.onConfirm;
  first = undefined;
  [first, tmp3] = react.useState(false);
  const obj = { title: intl.string(_modDef3723.NDY6Zv), content: intl2.string(_modDef3723.z2x5zj), extraContent: tmp4Result, actions: metroImportDefault(metroRequire, obj4) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl7.intl;
  intl2 = intl7.intl;
  tmp4Result = undefined;
  if (null != matchingBackup) {
    const obj2 = { hasIcons: false, children: hasOwnProperty(TableCheckboxRow, obj3) };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    obj3 = { label: intl3.string(_modDef3723["+/pFME"]), subLabel: intl4.string(_modDef3723["+I112y"]), checked: first, onPress: tmp3 };
    TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
    intl3 = intl7.intl;
    intl4 = intl7.intl;
    tmp4Result = hasOwnProperty(TableRowGroup, obj2);
  }
  obj4 = { children: items };
  const obj5 = {
    variant: "primary",
    text: intl5.string(_modDef3723.K3Q49G),
    onPress() {
      let tmp2 = null;
      if (first) {
        tmp2 = null;
        if (null != matchingBackup) {
          tmp2 = matchingBackup;
        }
      }
      return onConfirm(tmp2);
    }
  };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl5 = intl7.intl;
  items = [hasOwnProperty(AlertActionButton, obj5), ];
  const obj6 = { variant: "secondary", text: intl6.string(intl7.t["ETE/oC"]) };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl6 = intl7.intl;
  items[1] = hasOwnProperty(AlertActionButton2, obj6);
  return hasOwnProperty(AlertModal, obj);
});
const result = size.fileFinishedImporting("modules/conjure/history/native/ConjureVersionRestoreConfirm.tsx");

export const confirmRestoreVersion = function confirmRestoreVersion(arg0) {
  const openAlert = useAlertStore.openAlert;
  const obj = {};
  useAlertStore;
  const merged = Object.assign(arg0);
  openAlert("VibegrationsVersionRestore", hasOwnProperty(closure_8, obj));
};