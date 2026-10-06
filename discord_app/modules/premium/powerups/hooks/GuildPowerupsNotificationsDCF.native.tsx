// === Module 12175: GuildPowerupsNotificationsDCF ===

// Module 12175 (GuildPowerupsNotificationsDCF)
import react from "react" /* 576 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import useSelectedDismissibleContent2 from "useSelectedDismissibleContent" /* 6901 */;
import GuildPowerupsNotification from "GuildPowerupsNotification" /* 12169 */;
import BoostToUnlockMobileCoachmarkExperimentDefault from "BoostToUnlockMobileCoachmarkExperiment" /* 12176 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp4;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    let items1;
    if (arg0) {
      const items = [dismissible_content.DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = arg0;
    cResult[1] = items1;
    tmp4 = items1;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = useSelectedDismissibleContent2;
  return tmpResult.useSelectedDismissibleContent(tmp4);
}) : ((arg0) => {
  let items1;
  const useSelectedDismissibleContent = useSelectedDismissibleContent2.useSelectedDismissibleContent;
  useSelectedDismissibleContent2;
  if (arg0) {
    const items = [dismissible_content.DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK];
    items1 = items;
  } else {
    items1 = [];
  }
  return useSelectedDismissibleContent(items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { cooldownDurationMs: GuildPowerupsNotification.GUILD_POWERUP_NOTIFICATION_COOLDOWN };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = useSelectedDismissibleContent2.useSelectedTimeRecurringDismissibleContent;
  useSelectedDismissibleContent2;
  if (arg0) {
    prop = dismissible_content.DismissibleContent.GUILD_POWERUP_NOTIFICATION;
  }
  return useSelectedTimeRecurringDismissibleContent(prop, first);
}) : ((arg0) => {
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = useSelectedDismissibleContent2.useSelectedTimeRecurringDismissibleContent;
  useSelectedDismissibleContent2;
  if (arg0) {
    prop = dismissible_content.DismissibleContent.GUILD_POWERUP_NOTIFICATION;
  }
  const obj = { cooldownDurationMs: GuildPowerupsNotification.GUILD_POWERUP_NOTIFICATION_COOLDOWN };
  return useSelectedTimeRecurringDismissibleContent(prop, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(3);
  let str = "useBoostToUnlockCoachmarkDCF-ineligible";
  if (arg0) {
    str = "useBoostToUnlockCoachmarkDCF-eligible";
  }
  if (cResult[0] !== str) {
    const obj2 = { location: str };
    cResult[0] = str;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const obj3 = BoostToUnlockMobileCoachmarkExperimentDefault;
  const showCoachmark = obj3.useConfig(tmp4).showCoachmark;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { cooldownDurationMs: GuildPowerupsNotification.BOOST_TO_UNLOCK_COACHMARK_COOLDOWN, numTimesToRecur: GuildPowerupsNotification.BOOST_TO_UNLOCK_COACHMARK_MAX_TIMES_TO_RECUR };
    cResult[2] = obj4;
    tmp5 = obj4;
  } else {
    tmp5 = cResult[2];
  }
  let prop = null;
  const useSelectedTimeRecurringGuildDismissibleContent = useSelectedDismissibleContent2.useSelectedTimeRecurringGuildDismissibleContent;
  useSelectedDismissibleContent2;
  if (arg0) {
    prop = null;
    if (showCoachmark) {
      prop = dismissible_content.DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
    }
  }
  return useSelectedTimeRecurringGuildDismissibleContent(prop, arg1, tmp5, arg2);
}) : ((arg0, arg1, arg2) => {
  let str = "useBoostToUnlockCoachmarkDCF-ineligible";
  const useConfig = BoostToUnlockMobileCoachmarkExperimentDefault.useConfig;
  BoostToUnlockMobileCoachmarkExperimentDefault;
  if (arg0) {
    str = "useBoostToUnlockCoachmarkDCF-eligible";
  }
  const showCoachmark = useConfig({ location: str }).showCoachmark;
  let prop = null;
  const useSelectedTimeRecurringGuildDismissibleContent = useSelectedDismissibleContent2.useSelectedTimeRecurringGuildDismissibleContent;
  useSelectedDismissibleContent2;
  if (arg0) {
    prop = null;
    if (showCoachmark) {
      prop = dismissible_content.DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
    }
  }
  const obj = { cooldownDurationMs: GuildPowerupsNotification.BOOST_TO_UNLOCK_COACHMARK_COOLDOWN, numTimesToRecur: GuildPowerupsNotification.BOOST_TO_UNLOCK_COACHMARK_MAX_TIMES_TO_RECUR };
  return useSelectedTimeRecurringGuildDismissibleContent(prop, arg1, obj, arg2);
});
const fn = (arg0, arg1) => {
  let prop = null;
  const useSelectedVersionedDismissibleContent = useSelectedDismissibleContent2.useSelectedVersionedDismissibleContent;
  useSelectedDismissibleContent2;
  if (arg0) {
    prop = null;
    if (arg1 > 0) {
      prop = dismissible_content.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
    }
  }
  return useSelectedVersionedDismissibleContent(prop, arg1);
};
const result1 = size.fileFinishedImporting("modules/premium/powerups/hooks/GuildPowerupsNotificationsDCF.native.tsx");

export const usePerksCoachmarkDCF = tmp2;
export const useNewPerkAvailableCoachmarkDCF = fn;
export const useGuildPowerupNotificationDCF = tmp4;
export function useNewGamesCoachmarkDC() {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}
export const useBoostToUnlockCoachmarkDCF = tmp5;
export function useExpiringPowerupCoachmarkDCF() {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}