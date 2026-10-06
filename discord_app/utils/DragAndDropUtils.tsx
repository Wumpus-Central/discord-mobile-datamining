// === Module 10748: DragAndDropUtils ===

// Module 10748 (DragAndDropUtils)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

function calculatePositionDeltas(arg0) {
  let ascending;
  let existingPositionGetter;
  let idGetter;
  let newOrdering;
  let oldOrdering;
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
      let num;
      let num2;
      const obj2 = {};
      for (let num = 0; num < length; num = num + 1) {
        let idGetterResult = idGetter(oldOrdering[num]);
        obj2[idGetterResult] = existingPositionGetter(oldOrdering[num]);
      }
      const items = [];
      for (let num2 = 0; num2 < length; num2 = num2 + 1) {
        let idGetterResult1 = idGetter(newOrdering[num2]);
        let diff = num2;
        if (!ascending) {
          diff = length - 1 - num2;
        }
        let tmp5 = obj2[idGetterResult1] === diff && existingPositionGetter(newOrdering[num2]) === diff;
        if (!tmp5) {
          let obj = { id: idGetterResult1, position: diff };
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
  const tmp = c9[arg1];
  items.splice(arg1, 1);
  items.splice(to, 0, tmp);
  return items;
}
function getPositionUpdates(arg0) {
  let ascending;
  let existingPositionGetter;
  let fromPosition;
  let idGetter;
  let items;
  let objectArray;
  let toPosition;
  ({ objectArray, fromPosition, ascending } = arg0);
  ({ toPosition, idGetter, existingPositionGetter } = arg0);
  if (ascending === undefined) {
    ascending = true;
  }
  let values = objectArray;
  if (!Array.isArray(objectArray)) {
    const obj = _modDef12;
    values = obj.values(objectArray);
  }
  const obj2 = { oldOrdering: values, newOrdering: items, idGetter, existingPositionGetter, ascending };
  items = [...values];
  const tmp4 = values[fromPosition];
  items.splice(fromPosition, 1);
  items.splice(toPosition, 0, tmp4);
  return calculatePositionDeltas(obj2);
}
const logger = new LoggerDefault("DragAndDropUtils");
new LoggerDefault("DragAndDropUtils");
const result = size.fileFinishedImporting("utils/DragAndDropUtils.tsx");

export default { moveItemFromTo, calculatePositionDeltas, getPositionUpdates };
export { calculatePositionDeltas };
export { moveItemFromTo };
export { getPositionUpdates };