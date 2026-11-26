// === Module 13560: GuildPowerupsSinglePerkCard ===

// Module 13560 (GuildPowerupsSinglePerkCard)
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 13483 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 13489 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 13506 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 13507 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 13557 */;
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard" /* 13561 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  ({ guildId, powerup } = badge);
  let str = useGetGuildPowerupBannerImageDefault(powerup, true);
  const tmp = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp2 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard");
  const calculatePowerupCardStatus = useCalculatePowerupCardStatus.useCalculatePowerupCardStatus(powerup, tmp, tmp2);
  const obj2 = { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: null, status: null, onPress: null, badge: null };
  const tmp4 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  if (str == null) {
    str = "";
  }
  obj2.imageUrl = str;
  obj2.status = calculatePowerupCardStatus;
  obj2.onPress = tmp4;
  obj2.badge = badge.badge;
  return jsx(GuildPowerupsPerkCardDefault, { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: null, status: null, onPress: null, badge: null });
};