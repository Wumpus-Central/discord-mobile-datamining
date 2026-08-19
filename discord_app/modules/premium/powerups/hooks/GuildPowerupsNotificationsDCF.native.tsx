// === Module 11670: usePerksCoachmarkDCF ===

// Module 11670 (usePerksCoachmarkDCF)
import obj132 from "obj132" /* 2 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7366 */;
import GUILD_POWERUP_NOTIFICATION_COOLDOWN from "GUILD_POWERUP_NOTIFICATION_COOLDOWN" /* 11664 */;
import getUnitIdDefault from "getUnitId" /* 11671 */;

const result = obj132.fileFinishedImporting("modules/premium/powerups/hooks/GuildPowerupsNotificationsDCF.native.tsx");

export const usePerksCoachmarkDCF = function usePerksCoachmarkDCF(arg0) {
  if (arg0) {
    const items = [DismissibleContent.DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK];
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
      prop = DismissibleContent.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
    }
  }
  return useSelectedDismissibleContent.useSelectedVersionedDismissibleContent(prop, latestVersion);
};
export const useGuildPowerupNotificationDCF = function useGuildPowerupNotificationDCF(arg0) {
  let obj = useSelectedDismissibleContent;
  let prop = null;
  if (arg0) {
    prop = DismissibleContent.DismissibleContent.GUILD_POWERUP_NOTIFICATION;
  }
  obj = { cooldownDurationMs: GUILD_POWERUP_NOTIFICATION_COOLDOWN.GUILD_POWERUP_NOTIFICATION_COOLDOWN };
  return obj.useSelectedTimeRecurringDismissibleContent(prop, obj);
};
export function useNewGamesCoachmarkDC(isNewGamesCoachmarkEnabled) {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}
export function useGameServerPricingCoachmarkDCF(isGameServerPricingEnabled) {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}
export const useBoostToUnlockCoachmarkDCF = function useBoostToUnlockCoachmarkDCF(arg0, id, GUILD_HEADER_TOOLTIPS) {
  let obj = getUnitIdDefault;
  let prop = null;
  if (arg0) {
    prop = null;
    if (obj.useConfig({ location: "useBoostToUnlockCoachmarkDCF" }).showCoachmark) {
      prop = DismissibleContent.DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
    }
  }
  obj = { cooldownDurationMs: GUILD_POWERUP_NOTIFICATION_COOLDOWN.BOOST_TO_UNLOCK_COACHMARK_COOLDOWN, numTimesToRecur: GUILD_POWERUP_NOTIFICATION_COOLDOWN.BOOST_TO_UNLOCK_COACHMARK_MAX_TIMES_TO_RECUR };
  return useSelectedDismissibleContent.useSelectedTimeRecurringGuildDismissibleContent(prop, id, obj, GUILD_HEADER_TOOLTIPS);
};
export function useExpiringPowerupCoachmarkDCF(arg0, c0) {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}