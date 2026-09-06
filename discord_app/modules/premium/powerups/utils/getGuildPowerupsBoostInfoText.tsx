// === Module 12554: getGuildPowerupsBoostInfoText ===

// Module 12554 (getGuildPowerupsBoostInfoText)
import util from "util" /* 1114 */;
import _modDef2428 from "module_2428" /* 2428 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4450 */;
import size from "module_2" /* 2 */;

const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = util.intl;
    let obj = { boostCount: count };
    return intl3.formatToPlainString(_modDef2428.BdRXZA, obj);
  } else if (BoostInfoType.SPENT === type) {
    const intl2 = util.intl;
    obj = { boostCount: count };
    return intl2.formatToPlainString(_modDef2428.xvgIVG, obj);
  } else if (BoostInfoType.TOTAL === type) {
    const intl = util.intl;
    return intl.string(_modDef2428["/F7Z2y"]);
  }
};