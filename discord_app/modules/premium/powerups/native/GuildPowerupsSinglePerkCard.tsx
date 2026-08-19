// === Module 11739: GuildPowerupsSinglePerkCard ===

// Module 11739 (GuildPowerupsSinglePerkCard)
import noopAll from "noop" /* 19 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 11665 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 11668 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 11688 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 11689 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 11736 */;
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard" /* 11740 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  ({ guildId, powerup } = badge);
  let str = useGetGuildPowerupBannerImageDefault(powerup, true);
  const tmp = usePowerupActiveStatusDefault(guildId, powerup);
  let obj = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp, useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard"));
  const tmp2 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard");
  obj = { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: null, status: null, onPress: null, badge: null };
  const tmp4 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  if (str == null) {
    str = "";
  }
  obj[3] = str;
  obj[4] = calculatePowerupCardStatus;
  obj[5] = tmp4;
  obj[6] = badge.badge;
  return jsx(GuildPowerupsPerkCardDefault, { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: null, status: null, onPress: null, badge: null });
};