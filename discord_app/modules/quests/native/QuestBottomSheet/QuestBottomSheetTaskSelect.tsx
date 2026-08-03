import "noop";
import { QuestTaskPlatform } from "QuestsExperimentLocations";
import jsxProd from "jsxProd";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx");

export default function QuestBottomSheetTaskSelect(onTaskSelect) {
  onTaskSelect = onTaskSelect.onTaskSelect;
  let obj = { hasIcons: true, children: null };
  obj = { arrow: true, icon: null, label: null, onPress: null };
  obj[1] = callback(onTaskSelect(12036).ScreenIcon, {});
  const intl = onTaskSelect(1236).intl;
  obj[2] = intl.string(onTaskSelect(1236).t["QXc01+"]);
  obj[3] = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(outer1_2.DESKTOP);
    }
    return tmpResult;
  };
  const items = [callback(onTaskSelect(5286).TableRow, obj), ];
  obj = { arrow: true, icon: null, label: null, onPress: null };
  obj[1] = callback(onTaskSelect(9121).GameControllerIcon, {});
  const intl2 = onTaskSelect(1236).intl;
  obj[2] = intl2.string(onTaskSelect(1236).t["8lAfuB"]);
  obj[3] = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(outer1_2.CONSOLE);
    }
    return tmpResult;
  };
  items[1] = callback(onTaskSelect(5286).TableRow, obj);
  obj[1] = items;
  return callback2(onTaskSelect(5620).TableRowGroup, obj);
};