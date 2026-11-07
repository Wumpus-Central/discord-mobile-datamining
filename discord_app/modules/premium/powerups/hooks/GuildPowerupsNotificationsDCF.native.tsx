// === Module 14315: GuildPowerupsNotificationsDCF ===

// Module 14315 (GuildPowerupsNotificationsDCF)
import dismissible_content from "dismissible_content" /* 4973 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7641 */;
import GuildPowerupsNotification from "GuildPowerupsNotification" /* 14309 */;
import useHasGuildAffinityForBoostUpsellDefault from "useHasGuildAffinityForBoostUpsell" /* 14316 */;
import useCanBoostGuildFromMobileDefault from "useCanBoostGuildFromMobile" /* 14318 */;
import BoostToUnlockMobileCoachmarkExperimentDefault from "BoostToUnlockMobileCoachmarkExperiment" /* 14320 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/GuildPowerupsNotificationsDCF.native.tsx");

export function usePerksCoachmarkDCF(arg0) {
  if (arg0) {
    items = [dismissible_content.DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  return useSelectedDismissibleContent.useSelectedDismissibleContent(items1);
}
export function useNewPerkAvailableCoachmarkDCF(arg0, latestVersion) {
  let prop = null;
  if (arg0) {
    prop = null;
    if (latestVersion > 0) {
      prop = dismissible_content.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
    }
  }
  return useSelectedDismissibleContent.useSelectedVersionedDismissibleContent(prop, latestVersion);
}
export function useGuildPowerupNotificationDCF(arg0) {
  let prop = null;
  if (arg0) {
    prop = dismissible_content.DismissibleContent.GUILD_POWERUP_NOTIFICATION;
  }
  const obj = useSelectedDismissibleContent;
  return obj.useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: GuildPowerupsNotification.GUILD_POWERUP_NOTIFICATION_COOLDOWN });
}
export function useNewGamesCoachmarkDC() {
  items = [
    null,
    () => {

    }
  ];
  return items;
}
export function useBoostToUnlockCoachmarkDCF(arg0, id, arg2, GUILD_HEADER_TOOLTIPS) {
  let tmp = arg0;
  const tmp4 = useHasGuildAffinityForBoostUpsellDefault(id);
  if (arg0) {
    tmp = tmp4;
  }
  if (tmp) {
    tmp = tmp5;
  }
  tmp5 = useCanBoostGuildFromMobileDefault(arg2);
  let _location = "useBoostToUnlockCoachmarkDCF-ineligible";
  if (tmp) {
    _location = "useBoostToUnlockCoachmarkDCF-eligible";
  }
  const tmp2Result = BoostToUnlockMobileCoachmarkExperimentDefault;
  let prop = null;
  if (tmp) {
    prop = null;
    if (tmp2Result.useConfig({ location: _location }).showCoachmark) {
      prop = dismissible_content.DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
    }
  }
  const obj2 = useSelectedDismissibleContent;
  return obj2.useSelectedTimeRecurringGuildDismissibleContent(prop, id, { cooldownDurationMs: GuildPowerupsNotification.BOOST_TO_UNLOCK_COACHMARK_COOLDOWN, numTimesToRecur: GuildPowerupsNotification.BOOST_TO_UNLOCK_COACHMARK_MAX_TIMES_TO_RECUR }, GUILD_HEADER_TOOLTIPS);
}
export function useExpiringPowerupCoachmarkDCF() {
  items = [
    null,
    () => {

    }
  ];
  return items;
}