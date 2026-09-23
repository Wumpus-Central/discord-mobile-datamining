// === Module 12841: GuildPowerupsNotificationsDCF ===

// Module 12841 (GuildPowerupsNotificationsDCF)
import dismissible_content from "dismissible_content" /* 2028 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7716 */;
import GuildPowerupsNotification from "GuildPowerupsNotification" /* 12835 */;
import BoostToUnlockMobileCoachmarkExperimentDefault from "BoostToUnlockMobileCoachmarkExperiment" /* 12842 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/GuildPowerupsNotificationsDCF.native.tsx");

export const usePerksCoachmarkDCF = function usePerksCoachmarkDCF(arg0) {
  if (arg0) {
    const items = [dismissible_content.DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  return useSelectedDismissibleContent.useSelectedDismissibleContent(items1);
};
export const useNewPerkAvailableCoachmarkDCF = function useNewPerkAvailableCoachmarkDCF(arg0, latestVersion) {
  let prop = null;
  if (arg0) {
    prop = null;
    if (latestVersion > 0) {
      prop = dismissible_content.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
    }
  }
  return useSelectedDismissibleContent.useSelectedVersionedDismissibleContent(prop, latestVersion);
};
export const useGuildPowerupNotificationDCF = function useGuildPowerupNotificationDCF(arg0) {
  let prop = null;
  if (arg0) {
    prop = dismissible_content.DismissibleContent.GUILD_POWERUP_NOTIFICATION;
  }
  const obj = useSelectedDismissibleContent;
  return obj.useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: GuildPowerupsNotification.GUILD_POWERUP_NOTIFICATION_COOLDOWN });
};
export function useNewGamesCoachmarkDC() {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}
export function useGameServerPricingCoachmarkDCF() {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}
export const useBoostToUnlockCoachmarkDCF = function useBoostToUnlockCoachmarkDCF(arg0, id, GUILD_HEADER_TOOLTIPS) {
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
  return obj2.useSelectedTimeRecurringGuildDismissibleContent(prop, id, { cooldownDurationMs: GuildPowerupsNotification.BOOST_TO_UNLOCK_COACHMARK_COOLDOWN, numTimesToRecur: GuildPowerupsNotification.BOOST_TO_UNLOCK_COACHMARK_MAX_TIMES_TO_RECUR }, GUILD_HEADER_TOOLTIPS);
};
export function useExpiringPowerupCoachmarkDCF() {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}