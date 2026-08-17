// discord_app/modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx
import set from "../../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../GuildPowerups.messages.js";
import BoostedGuildTiers from "../constants/GuildPowerupsConstants.tsx";

const BoostInfoType = BoostedGuildTiers.BoostInfoType;
const result = set.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = getSystemLocale.intl;
    let obj = { boostCount: null };
    obj[0] = count;
    return intl3.formatToPlainString(messagesProxyDefault.BdRXZA, obj);
  } else if (tmp.SPENT === type) {
    const intl2 = getSystemLocale.intl;
    obj = { boostCount: null };
    obj[0] = count;
    return intl2.formatToPlainString(messagesProxyDefault.xvgIVG, obj);
  } else if (tmp.TOTAL === type) {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["/F7Z2y"]);
  }
};