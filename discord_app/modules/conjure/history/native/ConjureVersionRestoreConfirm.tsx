// discord_app/modules/conjure/history/native/ConjureVersionRestoreConfirm.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import _modDef3849 from "../../intl/ConjureUntranslated.messages.js";
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import TableCheckboxRow from "../../../../design/components/TableRow/native/TableCheckboxRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureVersionRestoreAlert(matchingBackup) {
      const cResult = c.c(16);
      matchingBackup = matchingBackup.matchingBackup;
      const onConfirm = matchingBackup.onConfirm;
      const tmp4 = _slicedToArray(noop.useState(false), 2);
      const checked = tmp4[0];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(_modDef3849.NDY6Zv);
        const intl2 = util.intl;
        const stringResult1 = intl2.string(_modDef3849.z2x5zj);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp6 = stringResult;
        tmp7 = stringResult1;
      } else {
        [tmp6, tmp7] = cResult;
      }
      if (cResult[2] === checked) {
        if (cResult[3] === matchingBackup) {
          let tmp11 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl5 = util.intl;
          const stringResult2 = intl5.string(_modDef3849.K3Q49G);
          cResult[5] = stringResult2;
          let tmp15 = stringResult2;
        } else {
          tmp15 = cResult[5];
        }
        if (cResult[6] === checked) {
          if (cResult[7] === matchingBackup) {
            if (cResult[8] === onConfirm) {
              let tmp18 = cResult[9];
            }
            const _Symbol2 = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { variant: "secondary", text: null };
              const intl6 = util.intl;
              obj2.text = intl6.string(util.t["ETE/oC"]);
              const tmp23 = hasOwnProperty(AlertModal.AlertActionButton, obj2);
              cResult[10] = tmp23;
              let tmp21 = tmp23;
            } else {
              tmp21 = cResult[10];
            }
            if (cResult[11] !== tmp18) {
              const obj3 = { children: null };
              const items = [tmp18, tmp21];
              obj3.children = items;
              const tmp27 = React5(timestampProducer, obj3);
              cResult[11] = tmp18;
              cResult[12] = tmp27;
              let tmp24 = tmp27;
            } else {
              tmp24 = cResult[12];
            }
            if (cResult[13] === tmp11) {
              if (cResult[14] === tmp24) {
                let tmp28 = cResult[15];
              }
              return tmp28;
            }
            const obj4 = { title: tmp6, content: tmp7, extraContent: tmp11, actions: tmp24 };
            const tmp30 = hasOwnProperty(AlertModal.AlertModal, obj4);
            cResult[13] = tmp11;
            cResult[14] = tmp24;
            cResult[15] = tmp30;
            tmp28 = tmp30;
          }
        }
        const obj5 = {
          variant: "primary",
          text: tmp15,
          onPress() {
            let tmp2 = null;
            if (first) {
              tmp2 = null;
              if (null != matchingBackup) {
                tmp2 = matchingBackup;
              }
            }
            return onConfirm(tmp2);
          },
        };
        const tmp20 = hasOwnProperty(AlertModal.AlertActionButton, obj5);
        cResult[6] = checked;
        cResult[7] = matchingBackup;
        cResult[8] = onConfirm;
        cResult[9] = tmp20;
        tmp18 = tmp20;
      }
      let tmp12;
      if (null != matchingBackup) {
        const obj6 = { hasIcons: false, children: null };
        const obj7 = { label: null, subLabel: null, checked: null, onPress: null };
        const intl3 = util.intl;
        obj7.label = intl3.string(_modDef3849["+/pFME"]);
        const intl4 = util.intl;
        obj7.subLabel = intl4.string(_modDef3849["+I112y"]);
        obj7.checked = checked;
        obj7.onPress = tmp4[1];
        obj6.children = hasOwnProperty(TableCheckboxRow.TableCheckboxRow, obj7);
        tmp12 = hasOwnProperty(TableRowGroup.TableRowGroup, obj6);
      }
      cResult[2] = checked;
      cResult[3] = matchingBackup;
      cResult[4] = tmp12;
      tmp11 = tmp12;
    }
  : function ConjureVersionRestoreAlert(matchingBackup) {
      matchingBackup = matchingBackup.matchingBackup;
      const onConfirm = matchingBackup.onConfirm;
      const tmp = _slicedToArray(noop.useState(false), 2);
      const checked = tmp[0];
      const obj = { title: null, content: null, extraContent: null, actions: null };
      const intl = util.intl;
      obj.title = intl.string(_modDef3849.NDY6Zv);
      const intl2 = util.intl;
      obj.content = intl2.string(_modDef3849.z2x5zj);
      let tmp3Result;
      if (null != matchingBackup) {
        const obj2 = { hasIcons: false, children: null };
        const obj3 = { label: null, subLabel: null, checked: null, onPress: null };
        const intl3 = util.intl;
        obj3.label = intl3.string(_modDef3849["+/pFME"]);
        const intl4 = util.intl;
        obj3.subLabel = intl4.string(_modDef3849["+I112y"]);
        obj3.checked = checked;
        obj3.onPress = tmp[1];
        obj2.children = hasOwnProperty(TableCheckboxRow.TableCheckboxRow, obj3);
        tmp3Result = hasOwnProperty(TableRowGroup.TableRowGroup, obj2);
      }
      obj.extraContent = tmp3Result;
      const obj4 = { children: null };
      const obj5 = { variant: "primary", text: null, onPress: null };
      const intl5 = util.intl;
      obj5.text = intl5.string(_modDef3849.K3Q49G);
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
      const items = [hasOwnProperty(AlertModal.AlertActionButton, obj5)];
      const obj6 = { variant: "secondary", text: null };
      const intl6 = util.intl;
      obj6.text = intl6.string(util.t["ETE/oC"]);
      items[1] = hasOwnProperty(AlertModal.AlertActionButton, obj6);
      obj4.children = items;
      obj.actions = React5(timestampProducer, obj4);
      return hasOwnProperty(AlertModal.AlertModal, obj);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/history/native/ConjureVersionRestoreConfirm.tsx");

export const confirmRestoreVersion = function confirmRestoreVersion(arg0) {
  const merged = Object.assign(arg0);
  useAlertStore.openAlert("VibegrationsVersionRestore", hasOwnProperty(closure_8, {}));
};
