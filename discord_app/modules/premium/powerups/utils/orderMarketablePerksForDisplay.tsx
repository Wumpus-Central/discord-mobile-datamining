// discord_app/modules/premium/powerups/utils/orderMarketablePerksForDisplay.tsx
import Powerups from "../../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";

require = fn;
let closure_3 = fn(4451).GAME_SERVER_POWERUP_SKU_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/orderMarketablePerksForDisplay.tsx");

export default function orderMarketablePerksForDisplay(arg0) {
  const items = [...arg0];
  const reversed = items.reverse();
  const findIndexResult = reversed.findIndex((skuId) => skuId.skuId === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID);
  if (findIndexResult > 0) {
    reversed.unshift(_slicedToArray(reversed.splice(findIndexResult, 1), 1)[0]);
  }
  const findIndexResult1 = reversed.findIndex((skuId) => skuId.skuId === closure_1_3);
  if (-1 !== findIndexResult1) {
    if (findIndexResult1 !== reversed.length - 1) {
      reversed.push(_slicedToArray(reversed.splice(findIndexResult1, 1), 1)[0]);
    }
  }
  return reversed;
}
