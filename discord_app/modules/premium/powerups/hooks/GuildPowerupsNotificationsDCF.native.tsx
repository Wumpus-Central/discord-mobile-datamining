// discord_app/modules/premium/powerups/hooks/GuildPowerupsNotificationsDCF.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import useSelectedDismissibleContent from "../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import GuildPowerupsNotification from "../constants/GuildPowerupsNotification.tsx";
import BoostToUnlockMobileCoachmarkExperimentDefault from "../../../guild_boosting/experiments/BoostToUnlockMobileCoachmarkExperiment.tsx";
import "ReactCompilerGating";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(2);
      if (cResult[0] !== arg0) {
        if (arg0) {
          const items = [dismissible_content.DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK];
          let items1 = items;
        } else {
          items1 = [];
        }
        cResult[0] = arg0;
        cResult[1] = items1;
      } else {
        return useSelectedDismissibleContent.useSelectedDismissibleContent(cResult[1]);
      }
    }
  : (arg0) => {
      if (arg0) {
        const items = [dismissible_content.DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK];
        let items1 = items;
      } else {
        items1 = [];
      }
      return useSelectedDismissibleContent.useSelectedDismissibleContent(items1);
    };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { cooldownDurationMs: GuildPowerupsNotification.GUILD_POWERUP_NOTIFICATION_COOLDOWN };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      let prop = null;
      if (arg0) {
        prop = dismissible_content.DismissibleContent.GUILD_POWERUP_NOTIFICATION;
      }
      return useSelectedDismissibleContent.useSelectedTimeRecurringDismissibleContent(prop, first);
    }
  : (arg0) => {
      let prop = null;
      if (arg0) {
        prop = dismissible_content.DismissibleContent.GUILD_POWERUP_NOTIFICATION;
      }
      const obj = useSelectedDismissibleContent;
      return obj.useSelectedTimeRecurringDismissibleContent(prop, {
        cooldownDurationMs: GuildPowerupsNotification.GUILD_POWERUP_NOTIFICATION_COOLDOWN,
      });
    };
const fn = (arg0, arg1) => {
  let prop = null;
  if (arg0) {
    prop = null;
    if (arg1 > 0) {
      prop = dismissible_content.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
    }
  }
  return useSelectedDismissibleContent.useSelectedVersionedDismissibleContent(prop, arg1);
};
const result1 = size.fileFinishedImporting("modules/premium/powerups/hooks/GuildPowerupsNotificationsDCF.native.tsx");

export const usePerksCoachmarkDCF = tmp2;
export const useNewPerkAvailableCoachmarkDCF = fn;
export const useGuildPowerupNotificationDCF = tmp4;
export function useNewGamesCoachmarkDC() {
  const items = [null, () => {}];
  return items;
}
export const useBoostToUnlockCoachmarkDCF = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      const cResult = c.c(3);
      let str = "useBoostToUnlockCoachmarkDCF-ineligible";
      if (arg0) {
        str = "useBoostToUnlockCoachmarkDCF-eligible";
      }
      if (cResult[0] !== str) {
        const obj2 = { location: str };
        cResult[0] = str;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = {
          cooldownDurationMs: GuildPowerupsNotification.BOOST_TO_UNLOCK_COACHMARK_COOLDOWN,
          numTimesToRecur: GuildPowerupsNotification.BOOST_TO_UNLOCK_COACHMARK_MAX_TIMES_TO_RECUR,
        };
        cResult[2] = obj4;
        let tmp5 = obj4;
      } else {
        tmp5 = cResult[2];
      }
      const obj3 = BoostToUnlockMobileCoachmarkExperimentDefault;
      let prop = null;
      if (arg0) {
        prop = null;
        if (obj3.useConfig(tmp4).showCoachmark) {
          prop = dismissible_content.DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
        }
      }
      return useSelectedDismissibleContent.useSelectedTimeRecurringGuildDismissibleContent(prop, arg1, tmp5, arg2);
    }
  : (arg0, arg1, arg2) => {
      let _location = "useBoostToUnlockCoachmarkDCF-ineligible";
      if (arg0) {
        _location = "useBoostToUnlockCoachmarkDCF-eligible";
      }
      const obj = BoostToUnlockMobileCoachmarkExperimentDefault;
      let prop = null;
      if (arg0) {
        prop = null;
        if (obj.useConfig({ location: _location }).showCoachmark) {
          prop = dismissible_content.DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
        }
      }
      const obj2 = useSelectedDismissibleContent;
      return obj2.useSelectedTimeRecurringGuildDismissibleContent(
        prop,
        arg1,
        {
          cooldownDurationMs: GuildPowerupsNotification.BOOST_TO_UNLOCK_COACHMARK_COOLDOWN,
          numTimesToRecur: GuildPowerupsNotification.BOOST_TO_UNLOCK_COACHMARK_MAX_TIMES_TO_RECUR,
        },
        arg2,
      );
    };
export function useExpiringPowerupCoachmarkDCF() {
  const items = [null, () => {}];
  return items;
}
