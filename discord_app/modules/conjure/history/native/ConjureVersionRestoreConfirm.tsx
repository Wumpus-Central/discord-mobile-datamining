// === Module 12496: ConjureVersionRestoreConfirm ===

// Module 12496 (ConjureVersionRestoreConfirm)
import util from "util" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import useAlertStore from "useAlertStore" /* 5955 */;
import AlertModal from "AlertModal" /* 5959 */;
import TableCheckboxRow from "TableCheckboxRow" /* 6968 */;
import TableRowGroup from "TableRowGroup" /* 7054 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function ConjureVersionRestoreAlert(matchingBackup) {
  matchingBackup = matchingBackup.matchingBackup;
  const onConfirm = matchingBackup.onConfirm;
  const tmp = _slicedToArray(noop.useState(false), 2);
  const checked = tmp[0];
  const obj = { title: null, content: null, extraContent: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef3865.NDY6Zv);
  const intl2 = util.intl;
  obj.content = intl2.string(_modDef3865.z2x5zj);
  let tmp3Result;
  if (null != matchingBackup) {
    const obj2 = { hasIcons: false, children: null };
    const obj3 = { label: null, subLabel: null, checked: null, onPress: null };
    const intl3 = util.intl;
    obj3.label = intl3.string(_modDef3865["+/pFME"]);
    const intl4 = util.intl;
    obj3.subLabel = intl4.string(_modDef3865["+I112y"]);
    obj3.checked = checked;
    obj3.onPress = tmp[1];
    obj2.children = hasOwnProperty(TableCheckboxRow.TableCheckboxRow, obj3);
    tmp3Result = hasOwnProperty(TableRowGroup.TableRowGroup, obj2);
  }
  obj.extraContent = tmp3Result;
  const obj4 = { children: null };
  const obj5 = { variant: "primary", text: null, onPress: null };
  const intl5 = util.intl;
  obj5.text = intl5.string(_modDef3865.K3Q49G);
  obj5.onPress = function onPress() {
    let tmp2 = null;
    if (first) {
      tmp2 = null;
      if (null != matchingBackup) {
        tmp2 = matchingBackup;
      }
    }
    return onConfirm(tmp2);
  };
  const items = [hasOwnProperty(AlertModal.AlertActionButton, obj5), ];
  const obj6 = { variant: "secondary", text: null };
  const intl6 = util.intl;
  obj6.text = intl6.string(util.t["ETE/oC"]);
  items[1] = hasOwnProperty(AlertModal.AlertActionButton, obj6);
  obj4.children = items;
  obj.actions = React5(timestampProducer, obj4);
  return hasOwnProperty(AlertModal.AlertModal, obj);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/history/native/ConjureVersionRestoreConfirm.tsx");

export function confirmRestoreVersion(arg0) {
  const merged = Object.assign(arg0);
  useAlertStore.openAlert("ConjureVersionRestore", hasOwnProperty(ConjureVersionRestoreAlert, {}));
}