// === Module 17260: useSoundOrganizer ===

// Module 17260 (useSoundOrganizer)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const f129429 = (available, available2) => {
  let num;
  if (!available.available) {
    let num2 = 0;
    if (!available.available) {
      num2 = 0;
      if (available2.available) {
        num2 = 1;
      }
    }
    num = num2;
  } else {
    num = -1;
  }
  return num;
};
function sortSoundsOldestToNewestCreationDate(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const items = [...arg0];
  const sorted = items.sort((soundId, soundId2) => {
    const obj = SnowflakeUtilsDefault;
    return obj.compare(soundId.soundId, soundId2.soundId);
  });
  let sorted1 = sorted;
  if (flag) {
    const items1 = [];
    HermesBuiltin.arraySpread(items1, sorted, 0);
    sorted1 = items1.sort(f129429);
  }
  return sorted1;
}
const result = size.fileFinishedImporting("modules/soundboard/useSoundOrganizer.tsx");

export { sortSoundsOldestToNewestCreationDate };
export const sortSoundsOldestToNewestFavoriteDate = function sortSoundsOldestToNewestFavoriteDate(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let sorted = arg0;
  if (flag) {
    const items = [];
    let num = 0;
    HermesBuiltin.arraySpread(items, arg0, 0);
    sorted = items.sort(f129429);
  }
  return sorted;
};
export function useSoundOrganizer() {
  return sortSoundsOldestToNewestCreationDate;
}