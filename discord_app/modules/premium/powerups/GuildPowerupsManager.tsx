// discord_app/modules/premium/powerups/GuildPowerupsManager.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleConnectionOpen from "handleConnectionOpen";
import calculateAppliedBoosts from "calculateAppliedBoosts";
import "initialize";
import { getFavoritesAwareGuildName } from "../../favorites/FavoritesUtils.tsx";
import { getUnitId } from "../../guild_boosting/experiments/BoostToUnlockMobileCoachmarkExperiment.tsx";

const require = arg1;
class GuildPowerupsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    applyArgumentsResult.stores = map.set(handleConnectionOpen, applyArgumentsResult.handleSelectedGuildChange);
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
        const GameServerExperiment = tmp10(4166).GameServerExperiment;
        let obj = { guildId: null, location: "GuildPowerupsManager" };
        obj[0] = guild.id;
        GameServerExperiment.trackExposure(obj);
        const FileUpload250MbPowerupExperiment = tmp10(4183).FileUpload250MbPowerupExperiment;
        obj = { guildId: null, location: "GuildPowerupsManager" };
        obj[0] = guild.id;
        FileUpload250MbPowerupExperiment.trackExposure(obj);
        const ServerThemeExperiment = tmp10(4185).ServerThemeExperiment;
        const obj1 = { guildId: null, location: "GuildPowerupsManager" };
        obj1[0] = guild.id;
        ServerThemeExperiment.trackExposure(obj1);
        const ServerThemeApexShadowExperiment = tmp10(4186).ServerThemeApexShadowExperiment;
        const obj2 = { guildId: null, location: "GuildPowerupsManager" };
        obj2[0] = guild.id;
        const config = ServerThemeApexShadowExperiment.getConfig(obj2);
        let tmp10Result = tmp10(4166);
        if (tmp10Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = tmp10(11754).GameServerPricingExperiment;
          obj = { guildId: null, location: "GuildPowerupsManager" };
          obj[0] = guild.id;
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp10Result = tmp10(11758);
        if (!tmp10Result.getHasAllocateBoostPermission(getUncachedChannelPermissions, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp10(15153).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp10(4491).isMobile;
          if (isMobile) {
            isMobile = tmp10(4185).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp10Result2 = tmp10(4185);
          }
          if (isMobile) {
            isMobile = tmp10(15153).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result3 = tmp10(15153);
          }
          if (isMobile) {
            isMobile = tmp10(4184).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp10Result4 = tmp10(4184);
          }
          let showCoachmark = tmp10(4491).isMobile;
          if (showCoachmark) {
            showCoachmark = tmp10(15153).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result5 = tmp10(15153);
          }
          if (showCoachmark) {
            showCoachmark = getUnitId.getConfig({ location: "GuildPowerupsManager" }).showCoachmark;
            const obj8 = getUnitId;
          }
          if (tmp10(4491).isMobile) {
            if (!isMobile) {
              isMobile = showCoachmark;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp10Result1 = tmp10(15153);
        }
        if (calculateAppliedBoosts.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp10(11733).fetchPowerupCatalogForGuild(guildId);
          const tmp10Result6 = tmp10(11733);
        }
        if (obj9.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp10(11733).fetchGuildBoostEntitlements(guildId);
          const tmp10Result7 = tmp10(11733);
        }
        obj9 = calculateAppliedBoosts;
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
  if (true === obj.getHasAllocateBoostPermission(getUncachedChannelPermissions, store.getGuild(guildId))) {
    let tmpResult = tmp(11733);
    const guildBoostEntitlements = tmpResult.fetchGuildBoostEntitlements(guildId);
    tmpResult = tmp(4151);
    const appliedGuildBoostsForGuild = tmpResult.fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const result = require("handleConnectionOpen").fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;