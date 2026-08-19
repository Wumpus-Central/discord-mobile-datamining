// === Module 11723: getGuildPowerupsBoostInfoText ===

// Module 11723 (getGuildPowerupsBoostInfoText)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2367 */;
import BoostedGuildTiers from "BoostedGuildTiers" /* 4262 */;

const BoostInfoType = BoostedGuildTiers.BoostInfoType;
const result = obj132.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = getSystemLocale.intl;
    let obj = { boostCount: null };
    obj[0] = count;
    return intl3.formatToPlainString(messagesProxyDefault.BdRXZA, obj);
  } else if (BoostInfoType.SPENT === type) {
    const intl2 = getSystemLocale.intl;
    obj = { boostCount: null };
    obj[0] = count;
    return intl2.formatToPlainString(messagesProxyDefault.xvgIVG, obj);
  } else if (BoostInfoType.TOTAL === type) {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["/F7Z2y"]);
  }
};