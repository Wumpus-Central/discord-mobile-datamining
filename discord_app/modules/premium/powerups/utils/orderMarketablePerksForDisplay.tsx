// === Module 13011: orderMarketablePerksForDisplay ===

// Module 13011 (orderMarketablePerksForDisplay)
import _slicedToArray from "_slicedToArray" /* 32 */;
import { GAME_SERVER_POWERUP_SKU_ID as closure_3 } from "str11" /* 4263 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/utils/orderMarketablePerksForDisplay.tsx");

export default function orderMarketablePerksForDisplay(arg0) {
  const items = [...arg0];
  const reversed = items.reverse();
  const findIndexResult = reversed.findIndex((item, index) => item.skuId === callback(table[2]).GUILD_POWERUP_GUILD_THEME_SKU_ID);
  if (findIndexResult > 0) {
    reversed.unshift(callback(reversed.splice(findIndexResult, 1), 1)[0]);
  }
  const findIndexResult1 = reversed.findIndex((item, index) => item.skuId === closure_3);
  if (-1 !== findIndexResult1) {
    if (findIndexResult1 !== reversed.length - 1) {
      reversed.push(callback(reversed.splice(findIndexResult1, 1), 1)[0]);
    }
  }
  return reversed;
};