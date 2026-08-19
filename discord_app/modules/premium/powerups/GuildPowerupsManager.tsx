// === Module 16585: handleSelectedGuildChange ===

// Module 16585 (handleSelectedGuildChange)
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName" /* 1913 */;
import _fetchAppliedGuildBoostsForGuild from "_fetchAppliedGuildBoostsForGuild" /* 4270 */;
import experiment from "experiment" /* 4285 */;
import experiment2 from "experiment" /* 4302 */;
import apexExperiment from "apexExperiment" /* 4303 */;
import experiment3 from "experiment" /* 4304 */;
import apexExperiment2 from "apexExperiment" /* 4305 */;
import isTablet from "isTablet" /* 4383 */;
import initializeDefault from "initialize" /* 5038 */;
import guildPowerupsAckNotification from "guildPowerupsAckNotification" /* 11657 */;
import getUnitIdDefault from "getUnitId" /* 11671 */;
import experiment4 from "experiment" /* 11678 */;
import useHasAllocateBoostPermission from "useHasAllocateBoostPermission" /* 11682 */;
import useIsCurrentUserEligibleForPowerupUpsells from "useIsCurrentUserEligibleForPowerupUpsells" /* 15428 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import handleConnectionOpen from "handleConnectionOpen" /* 4197 */;
import calculateAppliedBoosts from "calculateAppliedBoosts" /* 4261 */;

require = fn;
initializeDefault;
class GuildPowerupsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_5, applyArgumentsResult.handleSelectedGuildChange);
    obj = { GUILD_POWERUP_ENTITLEMENTS_CREATE: handleEntitlementUpdate.bind(applyArgumentsResult), GUILD_POWERUP_ENTITLEMENTS_DELETE: handleEntitlementUpdate2.bind(applyArgumentsResult), GUILD_APPLIED_BOOSTS_UPDATE: handleAppliedBoostUpdate.bind(applyArgumentsResult) };
    ({ handleEntitlementUpdate, handleEntitlementUpdate: handleEntitlementUpdate2, handleAppliedBoostUpdate } = applyArgumentsResult);
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const prototype = GuildPowerupsManager.prototype;
prototype["handleSelectedGuildChange"] = function handleSelectedGuildChange() {
  guildId = guildId.getGuildId();
  if (null != guildId) {
    if (!obj12.isFavoritesGuildId(guildId)) {
      const guild = store.getGuild(guildId);
      if (null != guild) {
        const GameServerExperiment = experiment.GameServerExperiment;
        let obj = { guildId: null, location: "GuildPowerupsManager" };
        obj[0] = guild.id;
        GameServerExperiment.trackExposure(obj);
        const FileUpload250MbPowerupExperiment = experiment2.FileUpload250MbPowerupExperiment;
        obj = { guildId: null, location: "GuildPowerupsManager" };
        obj[0] = guild.id;
        FileUpload250MbPowerupExperiment.trackExposure(obj);
        const ServerThemeExperiment = experiment3.ServerThemeExperiment;
        obj1 = { guildId: null, location: "GuildPowerupsManager" };
        obj1[0] = guild.id;
        ServerThemeExperiment.trackExposure(obj1);
        const ServerThemeApexShadowExperiment = apexExperiment2.ServerThemeApexShadowExperiment;
        const obj2 = { guildId: null, location: "GuildPowerupsManager" };
        obj2[0] = guild.id;
        const config = ServerThemeApexShadowExperiment.getConfig(obj2);
        let tmp10Result = experiment;
        if (tmp10Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = experiment4.GameServerPricingExperiment;
          obj = { guildId: null, location: "GuildPowerupsManager" };
          obj[0] = guild.id;
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp10Result = useHasAllocateBoostPermission;
        if (!tmp10Result.getHasAllocateBoostPermission(closure_4, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = useIsCurrentUserEligibleForPowerupUpsells.getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = isTablet.isMobile;
          if (isMobile) {
            isMobile = experiment3.getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp10Result2 = experiment3;
          }
          if (isMobile) {
            isMobile = useIsCurrentUserEligibleForPowerupUpsells.getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result3 = useIsCurrentUserEligibleForPowerupUpsells;
          }
          if (isMobile) {
            isMobile = apexExperiment.getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp10Result4 = apexExperiment;
          }
          let showCoachmark = isTablet.isMobile;
          if (showCoachmark) {
            showCoachmark = useIsCurrentUserEligibleForPowerupUpsells.getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result5 = useIsCurrentUserEligibleForPowerupUpsells;
          }
          if (showCoachmark) {
            showCoachmark = getUnitIdDefault.getConfig({ location: "GuildPowerupsManager" }).showCoachmark;
          }
          if (isTablet.isMobile) {
            if (!isMobile) {
              isMobile = showCoachmark;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp10Result1 = useIsCurrentUserEligibleForPowerupUpsells;
        }
        if (closure_6.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = guildPowerupsAckNotification.fetchPowerupCatalogForGuild(guildId);
          const tmp10Result6 = guildPowerupsAckNotification;
        }
        if (closure_6.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = guildPowerupsAckNotification.fetchGuildBoostEntitlements(guildId);
          const tmp10Result7 = guildPowerupsAckNotification;
        }
      }
    }
    obj12 = getFavoritesAwareGuildName;
  }
};
prototype["handleEntitlementUpdate"] = function handleEntitlementUpdate(guildId) {
  this.refreshGuildPowerups(guildId.guildId);
};
prototype["handleAppliedBoostUpdate"] = function handleAppliedBoostUpdate(guildId) {
  this.refreshGuildPowerups(guildId.guildId);
};
prototype["refreshGuildPowerups"] = function refreshGuildPowerups(guildId) {
  if (true === obj.getHasAllocateBoostPermission(closure_4, store.getGuild(guildId))) {
    let tmpResult = guildPowerupsAckNotification;
    const guildBoostEntitlements = tmpResult.fetchGuildBoostEntitlements(guildId);
    tmpResult = _fetchAppliedGuildBoostsForGuild;
    const appliedGuildBoostsForGuild = tmpResult.fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
  }
  obj = useHasAllocateBoostPermission;
};
const guildPowerupsManager = new GuildPowerupsManager();
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;