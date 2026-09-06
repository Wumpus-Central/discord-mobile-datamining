// discord_app/modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx
import useGuildPowerupRollbackEnabledDefault from "../hooks/useGuildPowerupRollbackEnabled.tsx";
import usePowerupActiveStatusDefault from "../hooks/usePowerupActiveStatus.tsx";
import useCalculatePowerupCardStatus from "../utils/useCalculatePowerupCardStatus.tsx";
import useGetGuildPowerupBannerImageDefault from "../hooks/useGetGuildPowerupBannerImage.tsx";
import useGuildPowerupOnShowMoreDefault from "hooks/useGuildPowerupOnShowMore.tsx";
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  ({ guildId, powerup } = badge);
  let str = useGetGuildPowerupBannerImageDefault(powerup, true);
  const tmp = usePowerupActiveStatusDefault(guildId, powerup);
  let obj = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(
    powerup,
    tmp,
    useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard"),
  );
  const tmp2 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard");
  obj = {
    title: powerup.title,
    description: powerup.description,
    cost: powerup.cost,
    imageUrl: null,
    status: null,
    onPress: null,
    badge: null,
  };
  const tmp4 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  if (str == null) {
    str = "";
  }
  obj.imageUrl = str;
  obj.status = calculatePowerupCardStatus;
  obj.onPress = tmp4;
  obj.badge = badge.badge;
  return jsx(GuildPowerupsPerkCardDefault, {
    title: powerup.title,
    description: powerup.description,
    cost: powerup.cost,
    imageUrl: null,
    status: null,
    onPress: null,
    badge: null,
  });
}
