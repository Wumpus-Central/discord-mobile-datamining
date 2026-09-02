// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import { QuestTaskPlatform } from "../../QuestConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("set").fileFinishedImporting(
  "modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx",
);

export default function QuestBottomSheetTaskSelect(onTaskSelect) {
  onTaskSelect = onTaskSelect.onTaskSelect;
  let obj = { hasIcons: true, children: null };
  obj = { arrow: true, icon: callback(onTaskSelect(12857).ScreenIcon, {}), label: null, onPress: null };
  const intl = onTaskSelect(1233).intl;
  obj[2] = intl.string(onTaskSelect(1233).t["QXc01+"]);
  obj[3] = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(closure_1_2.DESKTOP);
    }
    return tmpResult;
  };
  const items = [callback(onTaskSelect(5607).TableRow, obj)];
  obj = { arrow: true, icon: callback(onTaskSelect(9213).GameControllerIcon, {}), label: null, onPress: null };
  const intl2 = onTaskSelect(1233).intl;
  obj[2] = intl2.string(onTaskSelect(1233).t["8lAfuB"]);
  obj[3] = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(closure_1_2.CONSOLE);
    }
    return tmpResult;
  };
  items[1] = callback(onTaskSelect(5607).TableRow, obj);
  obj[1] = items;
  return callback2(onTaskSelect(6000).TableRowGroup, obj);
}
