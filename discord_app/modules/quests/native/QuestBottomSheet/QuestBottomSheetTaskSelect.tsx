// === Module 14711: QuestBottomSheetTaskSelect ===

// Module 14711 (QuestBottomSheetTaskSelect)
import noopAll from "noop" /* 19 */;
import { QuestTaskPlatform } from "QuestsExperimentLocations" /* 5339 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx");

export default function QuestBottomSheetTaskSelect(onTaskSelect) {
  onTaskSelect = onTaskSelect.onTaskSelect;
  let obj = { hasIcons: true, children: null };
  obj = { arrow: true, icon: callback(onTaskSelect(12549).ScreenIcon, {}), label: null, onPress: null };
  const intl = onTaskSelect(1236).intl;
  obj[2] = intl.string(onTaskSelect(1236).t["QXc01+"]);
  obj[3] = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(closure_1_2.DESKTOP);
    }
    return tmpResult;
  };
  const items = [callback(onTaskSelect(5551).TableRow, obj), ];
  obj = { arrow: true, icon: callback(onTaskSelect(9119).GameControllerIcon, {}), label: null, onPress: null };
  const intl2 = onTaskSelect(1236).intl;
  obj[2] = intl2.string(onTaskSelect(1236).t["8lAfuB"]);
  obj[3] = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(closure_1_2.CONSOLE);
    }
    return tmpResult;
  };
  items[1] = callback(onTaskSelect(5551).TableRow, obj);
  obj[1] = items;
  return callback2(onTaskSelect(5944).TableRowGroup, obj);
};