// === Module 17373: GuildPowerupsManager ===

// Module 17373 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 1982 */;
import BoostToUnlockMobileCoachmarkExperimentDefault from "BoostToUnlockMobileCoachmarkExperiment" /* 12502 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4449 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
class GuildPowerupsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_5, applyArgumentsResult.handleSelectedGuildChange);
    obj = { GUILD_POWERUP_ENTITLEMENTS_CREATE: null, GUILD_POWERUP_ENTITLEMENTS_DELETE: null, GUILD_APPLIED_BOOSTS_UPDATE: null };
    handleEntitlementUpdate = applyArgumentsResult.handleEntitlementUpdate;
    obj.GUILD_POWERUP_ENTITLEMENTS_CREATE = handleEntitlementUpdate.bind(applyArgumentsResult);
    handleEntitlementUpdate2 = applyArgumentsResult.handleEntitlementUpdate;
    obj.GUILD_POWERUP_ENTITLEMENTS_DELETE = handleEntitlementUpdate2.bind(applyArgumentsResult);
    handleAppliedBoostUpdate = applyArgumentsResult.handleAppliedBoostUpdate;
    obj.GUILD_APPLIED_BOOSTS_UPDATE = handleAppliedBoostUpdate.bind(applyArgumentsResult);
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const prototype = GuildPowerupsManager.prototype;
prototype["handleSelectedGuildChange"] = function handleSelectedGuildChange() {
  const guildId = SelectedGuildStore.getGuildId();
  if (null != guildId) {
    if (!obj12.isFavoritesGuildId(guildId)) {
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        const GameServerExperiment = tmp10(4473).GameServerExperiment;
        let obj = { guildId: guild.id, location: "GuildPowerupsManager" };
        GameServerExperiment.trackExposure(obj);
        const FileUpload250MbPowerupExperiment = tmp10(4487).FileUpload250MbPowerupExperiment;
        obj = { guildId: guild.id, location: "GuildPowerupsManager" };
        FileUpload250MbPowerupExperiment.trackExposure(obj);
        const ServerThemeExperiment = tmp10(4489).ServerThemeExperiment;
        const obj1 = { guildId: guild.id, location: "GuildPowerupsManager" };
        ServerThemeExperiment.trackExposure(obj1);
        const ServerThemeApexShadowExperiment = tmp10(4490).ServerThemeApexShadowExperiment;
        const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
        const config = ServerThemeApexShadowExperiment.getConfig(obj2);
        let tmp10Result = tmp10(4473);
        if (tmp10Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = tmp10(12509).GameServerPricingExperiment;
          obj = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp10Result = tmp10(12513);
        if (!tmp10Result.getHasAllocateBoostPermission(PermissionStore, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp10(16167).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp10(4801).isMobile;
          if (isMobile) {
            isMobile = tmp10(4489).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp10Result2 = tmp10(4489);
          }
          if (isMobile) {
            isMobile = tmp10(16167).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result3 = tmp10(16167);
          }
          if (isMobile) {
            isMobile = tmp10(4488).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp10Result4 = tmp10(4488);
          }
          let showCoachmark = tmp10(4801).isMobile;
          if (showCoachmark) {
            showCoachmark = tmp10(16167).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result5 = tmp10(16167);
          }
          if (showCoachmark) {
            showCoachmark = BoostToUnlockMobileCoachmarkExperimentDefault.getConfig({ location: "GuildPowerupsManager" }).showCoachmark;
          }
          if (tmp10(4801).isMobile) {
            if (!isMobile) {
              isMobile = showCoachmark;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp10Result1 = tmp10(16167);
        }
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp10(12488).fetchPowerupCatalogForGuild(guildId);
          const tmp10Result6 = tmp10(12488);
        }
        if (obj9.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp10(12488).fetchGuildBoostEntitlements(guildId);
          const tmp10Result7 = tmp10(12488);
        }
        obj9 = GuildPowerupsStore;
      }
    }
    obj12 = FavoritesUtils;
  }
};
prototype["handleEntitlementUpdate"] = function handleEntitlementUpdate(guildId) {
  this.refreshGuildPowerups(guildId.guildId);
};
prototype["handleAppliedBoostUpdate"] = function handleAppliedBoostUpdate(guildId) {
  this.refreshGuildPowerups(guildId.guildId);
};
prototype["refreshGuildPowerups"] = function refreshGuildPowerups(guildId) {
  if (true === obj.getHasAllocateBoostPermission(PermissionStore, GuildStore.getGuild(guildId))) {
    let tmpResult = tmp(12488);
    const guildBoostEntitlements = tmpResult.fetchGuildBoostEntitlements(guildId);
    tmpResult = tmp(4458);
    const appliedGuildBoostsForGuild = tmpResult.fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;