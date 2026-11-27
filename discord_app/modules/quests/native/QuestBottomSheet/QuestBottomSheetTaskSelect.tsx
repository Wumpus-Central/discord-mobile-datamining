// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const QuestTaskPlatform = fn(6871).QuestTaskPlatform;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx");

export default function QuestBottomSheetTaskSelect(onTaskSelect) {
  onTaskSelect = onTaskSelect.onTaskSelect;
  const obj = { hasIcons: true, children: null };
  const obj2 = { arrow: true, icon: closure_3(onTaskSelect(13364).ScreenIcon, {}), label: null, onPress: null };
  const intl = onTaskSelect(1112).intl;
  obj2.label = intl.string(onTaskSelect(1112).t["QXc01+"]);
  obj2.onPress = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(QuestTaskPlatform.DESKTOP);
    }
    return tmpResult;
  };
  items = [closure_3(onTaskSelect(6144).TableRow, obj2)];
  const obj3 = { arrow: true, icon: closure_3(onTaskSelect(7756).GameControllerIcon, {}), label: null, onPress: null };
  const intl2 = onTaskSelect(1112).intl;
  obj3.label = intl2.string(onTaskSelect(1112).t["8lAfuB"]);
  obj3.onPress = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(QuestTaskPlatform.CONSOLE);
    }
    return tmpResult;
  };
  items[1] = closure_3(onTaskSelect(6144).TableRow, obj3);
  obj.children = items;
  return closure_4(onTaskSelect(6140).TableRowGroup, obj);
}
