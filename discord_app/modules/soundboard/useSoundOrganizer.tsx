// discord_app/modules/soundboard/useSoundOrganizer.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

function sortSoundsOldestToNewestCreationDate(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const items = [...arg0];
  const sorted = items.sort((soundId, soundId2) => SnowflakeUtilsDefault.compare(soundId.soundId, soundId2.soundId));
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
    HermesBuiltin.arraySpread(arg0, 0);
    sorted = items.sort((available, available2) => {
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
  return sorted;
};
export function useSoundOrganizer() {
  return sortSoundsOldestToNewestCreationDate;
}
