// discord_app/modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useGetGuildPowerupBannerImage").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  let guildId;
  let powerup;
  ({ guildId, powerup } = badge);
  let str = require("../hooks/useGetGuildPowerupBannerImage.tsx")(powerup, true);
  const tmp = require("../hooks/usePowerupActiveStatus.tsx")(guildId, powerup);
  let obj = require("../utils/useCalculatePowerupCardStatus.tsx") /* useCalculatePowerupCardStatus */;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp, require("../hooks/useGuildPowerupRollbackEnabled.tsx")(guildId, powerup, "GuildPowerupsSinglePerkCard"));
  const tmp2 = require("../hooks/useGuildPowerupRollbackEnabled.tsx")(guildId, powerup, "GuildPowerupsSinglePerkCard");
  obj = { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: null, status: null, onPress: null, badge: null };
  const tmp4 = require("hooks/useGuildPowerupOnShowMore.tsx")(guildId, powerup);
  const tmp5 = jsx;
  if (str == null) {
    str = "";
  }
  obj[3] = str;
  obj[4] = calculatePowerupCardStatus;
  obj[5] = tmp4;
  obj[6] = badge.badge;
  return tmp5(require("GuildPowerupsPerkCard.tsx"), obj);
};