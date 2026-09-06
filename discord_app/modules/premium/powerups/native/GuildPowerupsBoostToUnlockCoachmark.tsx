// discord_app/modules/premium/powerups/native/GuildPowerupsBoostToUnlockCoachmark.tsx
import GuildPowerupsNotification from "../constants/GuildPowerupsNotification.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostToUnlockCoachmark.tsx");

export default function GuildPowerupsBoostToUnlockCoachmark(powerup) {
  powerup = powerup.powerup;
  const markAsDismissed = powerup.markAsDismissed;
  const items = [powerup, markAsDismissed];
  ({ guildId, targetRef } = powerup);
  const memo = noop.useMemo(
    () => ({
      type: GuildPowerupsNotification.GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK,
      powerup,
      markAsDismissed,
    }),
    items,
  );
  markAsDismissed(16172)(targetRef, guildId, memo);
  return null;
}
