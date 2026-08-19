// discord_app/modules/premium/powerups/native/GuildPowerupsBoostToUnlockCoachmark.tsx
import noop from "../../../../../_runtime/00019_noop.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostToUnlockCoachmark.tsx");

export default function GuildPowerupsBoostToUnlockCoachmark(powerup) {
  powerup = powerup.powerup;
  const markAsDismissed = powerup.markAsDismissed;
  const items = [powerup, markAsDismissed];
  ({ guildId, targetRef } = powerup);
  const memo = React.useMemo(() => ({ type: powerup(dependencyMap[1]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, powerup, markAsDismissed }), items);
  markAsDismissed(15433)(targetRef, guildId, memo);
  return null;
};