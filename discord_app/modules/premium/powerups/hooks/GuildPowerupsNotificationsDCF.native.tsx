// discord_app/modules/premium/powerups/hooks/GuildPowerupsNotificationsDCF.native.tsx
const result = require("GUILD_POWERUP_NOTIFICATION_COOLDOWN").fileFinishedImporting("modules/premium/powerups/hooks/GuildPowerupsNotificationsDCF.native.tsx");

export const usePerksCoachmarkDCF = function usePerksCoachmarkDCF(arg0) {
  if (arg0) {
    const items = [require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx") /* DismissibleContent */.DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  return require("../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx") /* useSelectedDismissibleContent */.useSelectedDismissibleContent(items1);
};
export const useNewPerkAvailableCoachmarkDCF = function useNewPerkAvailableCoachmarkDCF(arg0, latestVersion) {
  let prop = null;
  if (arg0) {
    prop = null;
    if (latestVersion > 0) {
      prop = require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx") /* DismissibleContent */.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
    }
  }
  return require("../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx") /* useSelectedDismissibleContent */.useSelectedVersionedDismissibleContent(prop, latestVersion);
};
export const useGuildPowerupNotificationDCF = function useGuildPowerupNotificationDCF(arg0) {
  let obj = require("../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx") /* useSelectedDismissibleContent */;
  let prop = null;
  if (arg0) {
    prop = tmp(1358).DismissibleContent.GUILD_POWERUP_NOTIFICATION;
  }
  obj = { cooldownDurationMs: tmp(11768).GUILD_POWERUP_NOTIFICATION_COOLDOWN };
  return obj.useSelectedTimeRecurringDismissibleContent(prop, obj);
};
export function useNewGamesCoachmarkDC(arg0) {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}
export function useGameServerPricingCoachmarkDCF(arg0) {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}
export const useBoostToUnlockCoachmarkDCF = function useBoostToUnlockCoachmarkDCF(arg0, id, GUILD_HEADER_TOOLTIPS) {
  let obj = require("../../../guild_boosting/experiments/BoostToUnlockMobileCoachmarkExperiment.tsx");
  let prop = null;
  if (arg0) {
    prop = null;
    if (obj.useConfig({ location: "useBoostToUnlockCoachmarkDCF" }).showCoachmark) {
      prop = tmp2(1358).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
    }
  }
  obj = { cooldownDurationMs: tmp2(11768).BOOST_TO_UNLOCK_COACHMARK_COOLDOWN, numTimesToRecur: tmp2(11768).BOOST_TO_UNLOCK_COACHMARK_MAX_TIMES_TO_RECUR };
  return require("../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx") /* useSelectedDismissibleContent */.useSelectedTimeRecurringGuildDismissibleContent(prop, id, obj, GUILD_HEADER_TOOLTIPS);
};
export function useExpiringPowerupCoachmarkDCF(arg0, c0) {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}