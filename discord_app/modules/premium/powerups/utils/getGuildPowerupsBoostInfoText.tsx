// === Module 13444: getGuildPowerupsBoostInfoText ===

// Module 13444 (getGuildPowerupsBoostInfoText)
import util from "util" /* 1112 */;
import _modDef2856 from "module_2856" /* 2856 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 8332 */;
import size from "module_2" /* 2 */;

const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = util.intl;
    const obj2 = { boostCount: count };
    return intl3.formatToPlainString(_modDef2856.BdRXZA, obj2);
  } else if (BoostInfoType.SPENT === type) {
    const intl2 = util.intl;
    const obj = { boostCount: count };
    return intl2.formatToPlainString(_modDef2856.xvgIVG, obj);
  } else if (BoostInfoType.TOTAL === type) {
    const intl = util.intl;
    return intl.string(_modDef2856["/F7Z2y"]);
  }
}