// === Module 14581: QuestBottomSheetTaskSelect ===

// Module 14581 (QuestBottomSheetTaskSelect)
import noopAll from "noop" /* 19 */;
import { QuestTaskPlatform } from "QuestsExperimentLocations" /* 6753 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx");

export default function QuestBottomSheetTaskSelect(onTaskSelect) {
  onTaskSelect = onTaskSelect.onTaskSelect;
  let obj = { hasIcons: true, children: null };
  obj = { arrow: true, icon: callback(onTaskSelect(12064).ScreenIcon, {}), label: null, onPress: null };
  const intl = onTaskSelect(1236).intl;
  obj[2] = intl.string(onTaskSelect(1236).t["QXc01+"]);
  obj[3] = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(closure_1_2.DESKTOP);
    }
    return tmpResult;
  };
  const items = [callback(onTaskSelect(6322).TableRow, obj), ];
  obj = { arrow: true, icon: callback(onTaskSelect(9467).GameControllerIcon, {}), label: null, onPress: null };
  const intl2 = onTaskSelect(1236).intl;
  obj[2] = intl2.string(onTaskSelect(1236).t["8lAfuB"]);
  obj[3] = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(closure_1_2.CONSOLE);
    }
    return tmpResult;
  };
  items[1] = callback(onTaskSelect(6322).TableRow, obj);
  obj[1] = items;
  return callback2(onTaskSelect(6317).TableRowGroup, obj);
};