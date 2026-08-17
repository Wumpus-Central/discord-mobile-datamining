// discord_app/utils/DragAndDropUtils.tsx
import timestampDefault from "../modules/debug/Logger.tsx";
import applyDefault from "../../_runtime/00012_apply.js";

function calculatePositionDeltas(arg0) {
  ({ oldOrdering, newOrdering, idGetter, existingPositionGetter, ascending } = arg0);
  if (ascending === undefined) {
    ascending = true;
  }
  if (oldOrdering.length !== newOrdering.length) {
    logger.warn("Arrays are not of the same length!", oldOrdering, newOrdering);
    return [];
  } else {
    const mapped = oldOrdering.map(idGetter);
    const sorted = mapped.sort();
    const joined = sorted.join(":");
    const mapped1 = newOrdering.map(idGetter);
    const sorted1 = mapped1.sort();
    const joined1 = sorted1.join(":");
    if (joined !== joined1) {
      logger.warn("Object IDs in the old ordering and the new ordering are not the same.", joined, joined1);
      return [];
    } else {
      let obj = {};
      for (let num = 0; num < length; num = num + 1) {
        let idGetterResult = idGetter(oldOrdering[num]);
        obj[idGetterResult] = existingPositionGetter(oldOrdering[num]);
      }
      const items = [];
      for (let num2 = 0; num2 < length; num2 = num2 + 1) {
        let idGetterResult1 = idGetter(newOrdering[num2]);
        let tmp3 = num2;
        let diff = num2;
        if (!ascending) {
          diff = length - 1 - num2;
        }
        let tmp5 = obj[idGetterResult1] === diff && existingPositionGetter(newOrdering[num2]) === diff;
        if (!tmp5) {
          obj = { id: null, position: null };
          obj[0] = idGetterResult1;
          obj[1] = diff;
          let arr = items.push(obj);
        }
      }
      if (!ascending) {
        const reversed = items.reverse();
      }
      return items;
    }
  }
}
function moveItemFromTo(c9, arg1, to) {
  const items = [...c9];
  items.splice(arg1, 1);
  items.splice(to, 0, c9[arg1]);
  return items;
}
function getPositionUpdates(arg0) {
  ({ objectArray, fromPosition, ascending } = arg0);
  ({ toPosition, idGetter, existingPositionGetter } = arg0);
  if (ascending === undefined) {
    ascending = true;
  }
  let values = objectArray;
  if (!Array.isArray(objectArray)) {
    let obj = applyDefault;
    values = obj.values(objectArray);
  }
  obj = { oldOrdering: values, newOrdering: null, idGetter: null, existingPositionGetter: null, ascending: null };
  const items = [...values];
  items.splice(fromPosition, 1);
  items.splice(toPosition, 0, values[fromPosition]);
  obj[1] = items;
  obj[2] = idGetter;
  obj[3] = existingPositionGetter;
  obj[4] = ascending;
  return calculatePositionDeltas(obj);
}
let closure_2 = new timestampDefault("DragAndDropUtils");
const tmp2 = new timestampDefault("DragAndDropUtils");
const result = require("set").fileFinishedImporting("utils/DragAndDropUtils.tsx");

export default { moveItemFromTo, calculatePositionDeltas, getPositionUpdates };
export { calculatePositionDeltas };
export { moveItemFromTo };
export { getPositionUpdates };