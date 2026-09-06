// discord_app/modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef2428 from "../GuildPowerups.messages.js";
import GuildPowerupsConstants from "../constants/GuildPowerupsConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = util.intl;
    let obj = { boostCount: count };
    return intl3.formatToPlainString(_modDef2428.BdRXZA, obj);
  } else if (tmp.SPENT === type) {
    const intl2 = util.intl;
    obj = { boostCount: count };
    return intl2.formatToPlainString(_modDef2428.xvgIVG, obj);
  } else if (tmp.TOTAL === type) {
    const intl = util.intl;
    return intl.string(_modDef2428["/F7Z2y"]);
  }
};
