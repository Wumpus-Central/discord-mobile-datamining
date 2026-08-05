// discord_app/modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx
import { BoostInfoType } from "BoostedGuildTiers";

const result = require("messagesProxy").fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let obj = { boostCount: null };
    obj[0] = count;
    return intl3.formatToPlainString(require("../GuildPowerups.messages.js").BdRXZA, obj);
  } else if (tmp.SPENT === type) {
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { boostCount: null };
    obj[0] = count;
    return intl2.formatToPlainString(require("../GuildPowerups.messages.js").xvgIVG, obj);
  } else if (tmp.TOTAL === type) {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../GuildPowerups.messages.js")["/F7Z2y"]);
  }
};