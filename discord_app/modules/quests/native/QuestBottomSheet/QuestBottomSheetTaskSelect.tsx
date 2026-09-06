// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const QuestTaskPlatform = fn(5444).QuestTaskPlatform;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx");

export default function QuestBottomSheetTaskSelect(onTaskSelect) {
  onTaskSelect = onTaskSelect.onTaskSelect;
  let obj = { hasIcons: true, children: null };
  obj = { arrow: true, icon: closure_3(onTaskSelect(8879).ScreenIcon, {}), label: null, onPress: null };
  const intl = onTaskSelect(1114).intl;
  obj.label = intl.string(onTaskSelect(1114).t["QXc01+"]);
  obj.onPress = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(QuestTaskPlatform.DESKTOP);
    }
    return tmpResult;
  };
  const items = [closure_3(onTaskSelect(5605).TableRow, obj)];
  obj = { arrow: true, icon: closure_3(onTaskSelect(9223).GameControllerIcon, {}), label: null, onPress: null };
  const intl2 = onTaskSelect(1114).intl;
  obj.label = intl2.string(onTaskSelect(1114).t["8lAfuB"]);
  obj.onPress = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(QuestTaskPlatform.CONSOLE);
    }
    return tmpResult;
  };
  items[1] = closure_3(onTaskSelect(5605).TableRow, obj);
  obj.children = items;
  return closure_4(onTaskSelect(5687).TableRowGroup, obj);
}
