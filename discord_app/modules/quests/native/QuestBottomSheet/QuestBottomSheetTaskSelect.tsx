// === Module 14979: QuestBottomSheetTaskSelect ===

// Module 14979 (QuestBottomSheetTaskSelect)
import noop from "module_19" /* 19 */;

const require = fn;
const QuestTaskPlatform = fn(5630).QuestTaskPlatform;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onTaskSelect) => {
  const cResult = onTaskSelect(576).c(11);
  onTaskSelect = onTaskSelect.onTaskSelect;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = closure_3(tmp(8577).ScreenIcon, {});
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["QXc01+"]);
    cResult[0] = tmp7;
    cResult[1] = stringResult;
    tmp4 = tmp7;
    tmp5 = stringResult;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] !== onTaskSelect) {
    const obj2 = {
      arrow: true,
      icon: tmp4,
      label: tmp5,
      onPress() {
          let tmpResult;
          if (onTaskSelect != null) {
            tmpResult = tmp(QuestTaskPlatform.DESKTOP);
          }
          return tmpResult;
        }
    };
    const tmp11 = closure_3(tmp(6000).TableRow, obj2);
    cResult[2] = onTaskSelect;
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp15 = closure_3(tmp(8771).GameControllerIcon, {});
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t["8lAfuB"]);
    cResult[4] = tmp15;
    cResult[5] = stringResult1;
    let tmp13 = stringResult1;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  if (cResult[6] !== onTaskSelect) {
    const obj3 = {
      arrow: true,
      icon: tmp12,
      label: tmp13,
      onPress() {
          let tmpResult;
          if (onTaskSelect != null) {
            tmpResult = tmp(QuestTaskPlatform.CONSOLE);
          }
          return tmpResult;
        }
    };
    const tmp19 = closure_3(tmp(6000).TableRow, obj3);
    cResult[6] = onTaskSelect;
    cResult[7] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] === tmp9) {
    if (cResult[9] === tmp17) {
      let tmp20 = cResult[10];
    }
    return tmp20;
  }
  const obj4 = { hasIcons: true, children: null };
  const items = [tmp9, tmp17];
  obj4.children = items;
  const tmp21 = closure_4(onTaskSelect(6081).TableRowGroup, obj4);
  cResult[8] = tmp9;
  cResult[9] = tmp17;
  cResult[10] = tmp21;
  tmp20 = tmp21;
  const obj = onTaskSelect(576);
}) : ((onTaskSelect) => {
  onTaskSelect = onTaskSelect.onTaskSelect;
  const obj = { hasIcons: true, children: null };
  const obj2 = { arrow: true, icon: closure_3(onTaskSelect(8577).ScreenIcon, {}), label: null, onPress: null };
  const intl = onTaskSelect(1126).intl;
  obj2.label = intl.string(onTaskSelect(1126).t["QXc01+"]);
  obj2.onPress = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(QuestTaskPlatform.DESKTOP);
    }
    return tmpResult;
  };
  const items = [closure_3(onTaskSelect(6000).TableRow, obj2), ];
  const obj3 = { arrow: true, icon: closure_3(onTaskSelect(8771).GameControllerIcon, {}), label: null, onPress: null };
  const intl2 = onTaskSelect(1126).intl;
  obj3.label = intl2.string(onTaskSelect(1126).t["8lAfuB"]);
  obj3.onPress = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(QuestTaskPlatform.CONSOLE);
    }
    return tmpResult;
  };
  items[1] = closure_3(onTaskSelect(6000).TableRow, obj3);
  obj.children = items;
  return closure_4(onTaskSelect(6081).TableRowGroup, obj);
});