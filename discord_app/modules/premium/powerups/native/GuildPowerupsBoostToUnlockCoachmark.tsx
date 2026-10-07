// discord_app/modules/premium/powerups/native/GuildPowerupsBoostToUnlockCoachmark.tsx
import c from "../../../../../_runtime/00576_c.js";
import GuildPowerupsNotification from "../constants/GuildPowerupsNotification.tsx";
import useGuildPowerupsCoachmarkDefault from "hooks/useGuildPowerupsCoachmark.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostToUnlockCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(3);
      ({ powerup, markAsDismissed } = arg0);
      if (cResult[0] === markAsDismissed) {
        if (cResult[1] === powerup) {
          let tmp6 = cResult[2];
        }
        useGuildPowerupsCoachmarkDefault(tmp5, tmp4, tmp6);
        return null;
      }
      const obj2 = {
        type: GuildPowerupsNotification.GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK,
        powerup,
        markAsDismissed,
      };
      cResult[0] = markAsDismissed;
      cResult[1] = powerup;
      cResult[2] = obj2;
      tmp6 = obj2;
    }
  : (powerup) => {
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
      markAsDismissed(16135)(targetRef, guildId, memo);
      return null;
    };
