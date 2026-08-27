// === Module 16864: handleSelectedGuildChange ===

// Module 16864 (handleSelectedGuildChange)
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName" /* 1913 */;
import initializeDefault from "initialize" /* 5438 */;
import getUnitIdDefault from "getUnitId" /* 11981 */;
import closure_3 from "createGuildRecordFromRust" /* 1910 */;
import closure_4 from "getUncachedChannelPermissions" /* 4089 */;
import closure_5 from "handleConnectionOpen" /* 4267 */;
import closure_6 from "calculateAppliedBoosts" /* 4331 */;

require = arg1;
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
        const GameServerExperiment = tmp10(4355).GameServerExperiment;
        let obj = { guildId: null, location: "GuildPowerupsManager" };
        obj[0] = guild.id;
        GameServerExperiment.trackExposure(obj);
        const FileUpload250MbPowerupExperiment = tmp10(4372).FileUpload250MbPowerupExperiment;
        obj = { guildId: null, location: "GuildPowerupsManager" };
        obj[0] = guild.id;
        FileUpload250MbPowerupExperiment.trackExposure(obj);
        const ServerThemeExperiment = tmp10(4374).ServerThemeExperiment;
        obj1 = { guildId: null, location: "GuildPowerupsManager" };
        obj1[0] = guild.id;
        ServerThemeExperiment.trackExposure(obj1);
        const ServerThemeApexShadowExperiment = tmp10(4375).ServerThemeApexShadowExperiment;
        const obj2 = { guildId: null, location: "GuildPowerupsManager" };
        obj2[0] = guild.id;
        const config = ServerThemeApexShadowExperiment.getConfig(obj2);
        let tmp10Result = tmp10(4355);
        if (tmp10Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = tmp10(11988).GameServerPricingExperiment;
          obj = { guildId: null, location: "GuildPowerupsManager" };
          obj[0] = guild.id;
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp10Result = tmp10(11992);
        if (!tmp10Result.getHasAllocateBoostPermission(closure_4, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp10(15668).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp10(4707).isMobile;
          if (isMobile) {
            isMobile = tmp10(4374).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp10Result2 = tmp10(4374);
          }
          if (isMobile) {
            isMobile = tmp10(15668).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result3 = tmp10(15668);
          }
          if (isMobile) {
            isMobile = tmp10(4373).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp10Result4 = tmp10(4373);
          }
          let showCoachmark = tmp10(4707).isMobile;
          if (showCoachmark) {
            showCoachmark = tmp10(15668).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result5 = tmp10(15668);
          }
          if (showCoachmark) {
            showCoachmark = getUnitIdDefault.getConfig({ location: "GuildPowerupsManager" }).showCoachmark;
            const obj8 = getUnitIdDefault;
          }
          if (tmp10(4707).isMobile) {
            if (!isMobile) {
              isMobile = showCoachmark;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp10Result1 = tmp10(15668);
        }
        if (closure_6.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp10(11967).fetchPowerupCatalogForGuild(guildId);
          const tmp10Result6 = tmp10(11967);
        }
        if (obj9.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp10(11967).fetchGuildBoostEntitlements(guildId);
          const tmp10Result7 = tmp10(11967);
        }
        obj9 = closure_6;
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
    let tmpResult = tmp(11967);
    const guildBoostEntitlements = tmpResult.fetchGuildBoostEntitlements(guildId);
    tmpResult = tmp(4340);
    const appliedGuildBoostsForGuild = tmpResult.fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const result = require("set").fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;