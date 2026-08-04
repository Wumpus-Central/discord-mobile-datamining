// discord_app/modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx
import { BoostInfoType } from "BoostedGuildTiers";

const result = require("messagesProxy").fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    let obj = { boostCount: null };
    obj[0] = count;
    return intl3.formatToPlainString(importDefault(2257).BdRXZA, obj);
  } else if (tmp.SPENT === type) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj = { boostCount: null };
    obj[0] = count;
    return intl2.formatToPlainString(importDefault(2257).xvgIVG, obj);
  } else if (tmp.TOTAL === type) {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2257)["/F7Z2y"]);
  }
};