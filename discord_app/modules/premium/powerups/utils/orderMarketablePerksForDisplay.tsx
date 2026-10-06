// === Module 13403: orderMarketablePerksForDisplay ===

// Module 13403 (orderMarketablePerksForDisplay)
import GameServerConstants from "GameServerConstants" /* 4775 */;
import Powerups from "Powerups" /* 4777 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let closure_3 = GameServerConstants.GAME_SERVER_POWERUP_SKU_ID;
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
};