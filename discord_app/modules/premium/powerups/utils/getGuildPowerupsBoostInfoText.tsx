// discord_app/modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx
import { BoostInfoType } from "BoostedGuildTiers";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { messagesProxy } from "../GuildPowerups.messages.js";

const result = require("messagesProxy").fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    let obj = { boostCount: null };
    obj[0] = count;
    return intl3.formatToPlainString(messagesProxy.BdRXZA, obj);
  } else if (tmp.SPENT === type) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    obj = { boostCount: null };
    obj[0] = count;
    return intl2.formatToPlainString(messagesProxy.xvgIVG, obj);
  } else if (tmp.TOTAL === type) {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy["/F7Z2y"]);
  }
};