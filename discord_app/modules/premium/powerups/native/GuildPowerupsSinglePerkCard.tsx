// === Module 12640: GuildPowerupsSinglePerkCard ===

// Module 12640 (GuildPowerupsSinglePerkCard)
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12566 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12569 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12589 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 12590 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 12637 */;
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard" /* 12641 */;
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
  if (str == null) {
    str = "";
  }
  obj.imageUrl = str;
  obj.status = calculatePowerupCardStatus;
  obj.onPress = tmp4;
  obj.badge = badge.badge;
  return jsx(GuildPowerupsPerkCardDefault, { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: null, status: null, onPress: null, badge: null });
};