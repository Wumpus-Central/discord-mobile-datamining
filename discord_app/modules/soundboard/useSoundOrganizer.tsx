// === Module 15979: sortSoundsOldestToNewestCreationDate ===

// Module 15979 (sortSoundsOldestToNewestCreationDate)
function sortSoundsOldestToNewestCreationDate(value2) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const items = [...value2];
  const sorted = items.sort((soundId, soundId2) => callback(table[0]).compare(soundId.soundId, soundId2.soundId));
  let sorted1 = sorted;
  if (flag) {
    const items1 = [];
    HermesBuiltin.arraySpread(sorted, 0);
    sorted1 = items1.sort((available, available2) => {
      if (!available.available) {
        let num2 = 0;
        if (!available.available) {
          num2 = 0;
          if (available2.available) {
            num2 = 1;
          }
        }
        let num = num2;
      } else {
        num = -1;
      }
      return num;
    });
  }
  return sorted1;
}
const result = require("set").fileFinishedImporting("modules/soundboard/useSoundOrganizer.tsx");

export { sortSoundsOldestToNewestCreationDate };
export function useSoundOrganizer() {
  return sortSoundsOldestToNewestCreationDate;
}