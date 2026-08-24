// discord_app/modules/premium/powerups/GuildPowerupsManager.tsx
import getFavoritesAwareGuildName from "../../favorites/FavoritesUtils.tsx";
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import getUnitIdDefault from "../../guild_boosting/experiments/BoostToUnlockMobileCoachmarkExperiment.tsx";
import closure_3 from "../../../stores/GuildStore.tsx";
import closure_4 from "../../../stores/PermissionStore.tsx";
import closure_5 from "../../../stores/SelectedGuildStore.tsx";
import closure_6 from "GuildPowerupsStore.tsx";

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
        const GameServerExperiment = tmp10(4289).GameServerExperiment;
        let obj = { guildId: null, location: "GuildPowerupsManager" };
        obj[0] = guild.id;
        GameServerExperiment.trackExposure(obj);
        const FileUpload250MbPowerupExperiment = tmp10(4306).FileUpload250MbPowerupExperiment;
        obj = { guildId: null, location: "GuildPowerupsManager" };
        obj[0] = guild.id;
        FileUpload250MbPowerupExperiment.trackExposure(obj);
        const ServerThemeExperiment = tmp10(4308).ServerThemeExperiment;
        obj1 = { guildId: null, location: "GuildPowerupsManager" };
        obj1[0] = guild.id;
        ServerThemeExperiment.trackExposure(obj1);
        const ServerThemeApexShadowExperiment = tmp10(4309).ServerThemeApexShadowExperiment;
        const obj2 = { guildId: null, location: "GuildPowerupsManager" };
        obj2[0] = guild.id;
        const config = ServerThemeApexShadowExperiment.getConfig(obj2);
        let tmp10Result = tmp10(4289);
        if (tmp10Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = tmp10(11727).GameServerPricingExperiment;
          obj = { guildId: null, location: "GuildPowerupsManager" };
          obj[0] = guild.id;
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp10Result = tmp10(11731);
        if (!tmp10Result.getHasAllocateBoostPermission(closure_4, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp10(15492).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp10(4387).isMobile;
          if (isMobile) {
            isMobile = tmp10(4308).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp10Result2 = tmp10(4308);
          }
          if (isMobile) {
            isMobile = tmp10(15492).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result3 = tmp10(15492);
          }
          if (isMobile) {
            isMobile = tmp10(4307).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp10Result4 = tmp10(4307);
          }
          let showCoachmark = tmp10(4387).isMobile;
          if (showCoachmark) {
            showCoachmark = tmp10(15492).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result5 = tmp10(15492);
          }
          if (showCoachmark) {
            showCoachmark = getUnitIdDefault.getConfig({ location: "GuildPowerupsManager" }).showCoachmark;
            const obj8 = getUnitIdDefault;
          }
          if (tmp10(4387).isMobile) {
            if (!isMobile) {
              isMobile = showCoachmark;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp10Result1 = tmp10(15492);
        }
        if (closure_6.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp10(11706).fetchPowerupCatalogForGuild(guildId);
          const tmp10Result6 = tmp10(11706);
        }
        if (obj9.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp10(11706).fetchGuildBoostEntitlements(guildId);
          const tmp10Result7 = tmp10(11706);
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
    let tmpResult = tmp(11706);
    const guildBoostEntitlements = tmpResult.fetchGuildBoostEntitlements(guildId);
    tmpResult = tmp(4274);
    const appliedGuildBoostsForGuild = tmpResult.fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const result = require("set").fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;