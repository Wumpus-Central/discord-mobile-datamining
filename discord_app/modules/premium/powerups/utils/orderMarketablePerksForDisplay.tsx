// === Module 13169: orderMarketablePerksForDisplay ===

// Module 13169 (orderMarketablePerksForDisplay)
import closure_2 from "_slicedToArray" /* 32 */;
import { GAME_SERVER_POWERUP_SKU_ID as closure_3 } from "str11" /* 4334 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/orderMarketablePerksForDisplay.tsx");

export default function orderMarketablePerksForDisplay(arg0) {
  const items = [...arg0];
  const reversed = items.reverse();
  const findIndexResult = reversed.findIndex((skuId) => skuId.skuId === callback(table[2]).GUILD_POWERUP_GUILD_THEME_SKU_ID);
  if (findIndexResult > 0) {
    reversed.unshift(callback(reversed.splice(findIndexResult, 1), 1)[0]);
  }
  const findIndexResult1 = reversed.findIndex((skuId) => skuId.skuId === closure_3);
  if (-1 !== findIndexResult1) {
    if (findIndexResult1 !== reversed.length - 1) {
      reversed.push(callback(reversed.splice(findIndexResult1, 1), 1)[0]);
    }
  }
  return reversed;
};