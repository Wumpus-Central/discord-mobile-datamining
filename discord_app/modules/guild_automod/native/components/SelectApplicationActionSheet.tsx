// === Module 17703: SelectApplicationActionSheet ===

// Module 17703 (SelectApplicationActionSheet)
import util from "util" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import TableRadioRow from "TableRadioRow" /* 6071 */;
import TableRadioGroup from "TableRadioGroup" /* 6072 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6644 */;
import ActionSheet from "ActionSheet" /* 6701 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 9222 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/SelectApplicationActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = onSelectApplication(576).c(11);
  ({ applications, selectedApplicationId, onSelectApplication } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = onSelectApplication(1126).intl;
    const stringResult = intl.string(onSelectApplication(1126).t.FKSiso);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== onSelectApplication) {
    const fn = function h(dependencyMap) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      onSelectApplication(dependencyMap);
    };
    cResult[1] = onSelectApplication;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: first };
    const tmp9 = jsx(onSelectApplication(6644).BottomSheetTitleHeader, { title: first });
    cResult[3] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== applications) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function v(application) {
        const obj = { value: application.id, label: application.name, icon: jsx(TableRowApplicationIconDefault, { application }) };
        return jsx(onSelectApplication(6071).TableRadioRow, { value: application.id, label: application.name, icon: jsx(TableRowApplicationIconDefault, { application }) }, application.id);
      };
      cResult[6] = fn2;
      let tmp11 = fn2;
    } else {
      tmp11 = cResult[6];
    }
    const mapped = applications.map(tmp11);
    cResult[4] = applications;
    cResult[5] = mapped;
  } else {
    if (cResult[7] === tmp6) {
      if (cResult[8] === selectedApplicationId) {
        if (cResult[9] === tmp10) {
          let tmp14 = cResult[10];
        }
        return tmp14;
      }
    }
    const obj3 = { header: tmp7, children: null };
    const obj4 = { hasIcons: true, accessibilityLabel: first, defaultValue: selectedApplicationId, onChange: tmp6, children: cResult[5] };
    obj3.children = jsx(onSelectApplication(6072).TableRadioGroup, { hasIcons: true, accessibilityLabel: first, defaultValue: selectedApplicationId, onChange: tmp6, children: cResult[5] });
    const tmp16 = jsx(onSelectApplication(6701).ActionSheet, { header: tmp7, children: null });
    cResult[7] = tmp6;
    cResult[8] = selectedApplicationId;
    cResult[9] = cResult[5];
    cResult[10] = tmp16;
    tmp14 = tmp16;
  }
  let obj = onSelectApplication(576);
}) : ((arg0) => {
  ({ applications, selectedApplicationId, onSelectApplication: require } = arg0);
  const intl = util.intl;
  const stringResult = intl.string(util.t.FKSiso);
  let obj = { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }), children: null };
  const obj2 = {
    hasIcons: true,
    accessibilityLabel: stringResult,
    defaultValue: selectedApplicationId,
    onChange(arg0) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      require(arg0);
    },
    children: applications.map((application) => {
      const obj = { value: application.id, label: application.name, icon: jsx(TableRowApplicationIconDefault, { application }) };
      return jsx(TableRadioRow.TableRadioRow, { value: application.id, label: application.name, icon: jsx(TableRowApplicationIconDefault, { application }) }, application.id);
    })
  };
  obj.children = jsx(TableRadioGroup.TableRadioGroup, {
    hasIcons: true,
    accessibilityLabel: stringResult,
    defaultValue: selectedApplicationId,
    onChange(arg0) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      require(arg0);
    },
    children: applications.map((application) => {
      const obj = { value: application.id, label: application.name, icon: jsx(TableRowApplicationIconDefault, { application }) };
      return jsx(TableRadioRow.TableRadioRow, { value: application.id, label: application.name, icon: jsx(TableRowApplicationIconDefault, { application }) }, application.id);
    })
  });
  return jsx(ActionSheet.ActionSheet, { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }), children: null });
});