// discord_app/modules/premium/powerups/native/GuildPowerupsBoostToUnlockCoachmark.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import GuildPowerupsNotification from "../constants/GuildPowerupsNotification.tsx";
import useGuildPowerupsCoachmarkDefault from "hooks/useGuildPowerupsCoachmark.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let markAsDismissed;
      let powerup;
      const obj = react2;
      const cResult = obj.c(3);
      ({ powerup, markAsDismissed } = arg0);
      if (cResult[0] === markAsDismissed) {
        let tmp6;
        if (cResult[1] === powerup) {
          tmp6 = cResult[2];
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
      let guildId;
      let targetRef;
      powerup = powerup.powerup;
      const markAsDismissed = powerup.markAsDismissed;
      const items = [powerup, markAsDismissed];
      ({ guildId, targetRef } = powerup);
      const memo = react.useMemo(() => {
        const obj = {
          type: GuildPowerupsNotification.GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK,
          powerup,
          markAsDismissed,
        };
        return obj;
      }, items);
      markAsDismissed(16096)(targetRef, guildId, memo);
      return null;
    };
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostToUnlockCoachmark.tsx");

export default tmp2;
