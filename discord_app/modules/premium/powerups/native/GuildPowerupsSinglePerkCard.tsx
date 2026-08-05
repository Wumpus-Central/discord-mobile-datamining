// discord_app/modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx
import "noop";
import { jsx } from "jsxProd";
import { useGetGuildPowerupBannerImage } from "../hooks/useGetGuildPowerupBannerImage.tsx";
import { useGuildPowerupRollbackEnabled } from "../hooks/useGuildPowerupRollbackEnabled.tsx";
import { usePowerupActiveStatus } from "../hooks/usePowerupActiveStatus.tsx";
import { useCalculatePowerupCardStatus } from "../utils/useCalculatePowerupCardStatus.tsx";
import { GuildPowerupsPerkCard } from "GuildPowerupsPerkCard.tsx";
import { useGuildPowerupOnShowMore } from "hooks/useGuildPowerupOnShowMore.tsx";

const require = arg1;
const result = require("useGetGuildPowerupBannerImage").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  let guildId;
  let powerup;
  ({ guildId, powerup } = badge);
  let str = useGetGuildPowerupBannerImage(powerup, true);
  const tmp = usePowerupActiveStatus(guildId, powerup);
  let obj = useCalculatePowerupCardStatus /* useCalculatePowerupCardStatus */;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp, useGuildPowerupRollbackEnabled(guildId, powerup, "GuildPowerupsSinglePerkCard"));
  const tmp2 = useGuildPowerupRollbackEnabled(guildId, powerup, "GuildPowerupsSinglePerkCard");
  obj = { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: null, status: null, onPress: null, badge: null };
  const tmp4 = useGuildPowerupOnShowMore(guildId, powerup);
  const tmp5 = jsx;
  if (str == null) {
    str = "";
  }
  obj[3] = str;
  obj[4] = calculatePowerupCardStatus;
  obj[5] = tmp4;
  obj[6] = badge.badge;
  return tmp5(GuildPowerupsPerkCard, obj);
};