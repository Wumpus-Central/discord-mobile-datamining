// discord_app/modules/conjure/linked_apps/native/ConjureLinkedAppBuildRow.tsx
import util from "../../../../intl/index.native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import conjureLinkedApps from "../conjureLinkedApps.tsx";
import ConjureLinkedAppBuildSheetDefault from "ConjureLinkedAppBuildSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ConjureLinkedAppBuildSheet = "ConjureLinkedAppBuildSheet";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppBuildRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureLinkedAppBuildRow(value) {
      const cResult = require("c").c(12);
      value = value.value;
      require = value;
      ({ disabled, onChange } = value);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[4]).intl;
        const stringResult = intl.string(onChange(tmp2[5]).Odrcmq);
        cResult[0] = stringResult;
        label = stringResult;
      } else {
        label = cResult[0];
      }
      if (cResult[1] === onChange) {
        if (cResult[2] === value) {
          let tmp7 = cResult[3];
        }
        if (cResult[4] !== value) {
          const linkedAppBuildLabelResult = tmp(tmp2[8]).linkedAppBuildLabel(value);
          cResult[4] = value;
          cResult[5] = linkedAppBuildLabelResult;
          let tmp8 = linkedAppBuildLabelResult;
          const tmpResult = tmp(tmp2[8]);
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] !== tmp8) {
          let obj2 = { text: tmp8 };
          const tmp12 = jsx(tmp(tmp2[9]).TableRow.TrailingText, { text: tmp8 });
          cResult[6] = tmp8;
          cResult[7] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[7];
        }
        if (cResult[8] === disabled) {
          if (cResult[9] === tmp7) {
            if (cResult[10] === tmp10) {
              let tmp13 = cResult[11];
            }
            return tmp13;
          }
        }
        const obj3 = { hasIcons: false, children: null };
        const obj4 = { label, trailing: tmp10, arrow: true, disabled, onPress: tmp7 };
        obj3.children = jsx(tmp(tmp2[9]).TableRow, { label, trailing: tmp10, arrow: true, disabled, onPress: tmp7 });
        const tmp15 = jsx(tmp(tmp2[10]).TableRowGroup, { hasIcons: false, children: null });
        cResult[8] = disabled;
        cResult[9] = tmp7;
        cResult[10] = tmp10;
        cResult[11] = tmp15;
        tmp13 = tmp15;
      }
      function openSheet() {
        const obj2 = {
          content: jsx(ConjureLinkedAppBuildSheetDefault, {
            sheetKey: ConjureLinkedAppBuildSheet,
            title,
            value,
            onPick: onChange,
          }),
          key: ConjureLinkedAppBuildSheet,
          stackingBehavior: "stack",
        };
        ActionSheetActionCreators.showActionSheet(obj2);
      }
      cResult[1] = onChange;
      cResult[2] = value;
      cResult[3] = openSheet;
      tmp7 = openSheet;
      const obj = require("c");
    }
  : function ConjureLinkedAppBuildRow(value) {
      value = value.value;
      require = value;
      const onChange = value.onChange;
      const intl = util.intl;
      const stringResult = intl.string(onChange(3863).Odrcmq);
      dependencyMap = stringResult;
      const obj = { hasIcons: false, children: null };
      let obj2 = { label: stringResult, trailing: null, arrow: true, disabled: null, onPress: null };
      const obj3 = { text: conjureLinkedApps.linkedAppBuildLabel(value) };
      obj2.trailing = jsx(TableRow.TableRow.TrailingText, { text: conjureLinkedApps.linkedAppBuildLabel(value) });
      obj2.disabled = value.disabled;
      obj2.onPress = function openSheet() {
        const obj2 = {
          content: jsx(ConjureLinkedAppBuildSheetDefault, {
            sheetKey: ConjureLinkedAppBuildSheet,
            title,
            value,
            onPick: onChange,
          }),
          key: ConjureLinkedAppBuildSheet,
          stackingBehavior: "stack",
        };
        ActionSheetActionCreators.showActionSheet(obj2);
      };
      obj.children = jsx(TableRow.TableRow, {
        label: stringResult,
        trailing: null,
        arrow: true,
        disabled: null,
        onPress: null,
      });
      return jsx(TableRowGroup.TableRowGroup, { hasIcons: false, children: null });
    };
