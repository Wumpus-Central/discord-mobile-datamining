// === Module 12570: GuildPowerupsSinglePerkCard ===

// Module 12570 (GuildPowerupsSinglePerkCard)
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12496 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12499 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12519 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 12520 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 12567 */;
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard" /* 12571 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  ({ guildId, powerup } = badge);
  let str = useGetGuildPowerupBannerImageDefault(powerup, true);
  const tmp = usePowerupActiveStatusDefault(guildId, powerup);
  let obj = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp, useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard"));
  const tmp2 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard");
  obj = { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: null, status: null, onPress: null, badge: null };
  const tmp4 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  const tmp5 = jsx;
  if (str == null) {
    str = "";
  }
  obj.imageUrl = str;
  obj.status = calculatePowerupCardStatus;
  obj.onPress = tmp4;
  obj.badge = badge.badge;
  return tmp5(GuildPowerupsPerkCardDefault, obj);
};