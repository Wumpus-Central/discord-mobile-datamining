// === Module 17373: GuildPowerupsManager ===

// Module 17373 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 1982 */;
import BoostingActionCreators from "BoostingActionCreators" /* 4458 */;
import GameServerExperiment2 from "GameServerExperiment" /* 4473 */;
import FileUpload250MbPowerupExperiment2 from "FileUpload250MbPowerupExperiment" /* 4487 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 4488 */;
import ServerThemeExperiment2 from "ServerThemeExperiment" /* 4489 */;
import ServerThemeApexShadowExperiment2 from "ServerThemeApexShadowExperiment" /* 4490 */;
import shared_PlatformUtils from "shared/PlatformUtils" /* 4801 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 12488 */;
import BoostToUnlockMobileCoachmarkExperimentDefault from "BoostToUnlockMobileCoachmarkExperiment" /* 12502 */;
import GameServerPricingExperiment2 from "GameServerPricingExperiment" /* 12509 */;
import useHasAllocateBoostPermission from "useHasAllocateBoostPermission" /* 12513 */;
import useIsCurrentUserEligibleForPowerupUpsells from "useIsCurrentUserEligibleForPowerupUpsells" /* 16167 */;
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
        const GameServerExperiment = GameServerExperiment2.GameServerExperiment;
        let obj = { guildId: guild.id, location: "GuildPowerupsManager" };
        GameServerExperiment.trackExposure(obj);
        const FileUpload250MbPowerupExperiment = FileUpload250MbPowerupExperiment2.FileUpload250MbPowerupExperiment;
        obj = { guildId: guild.id, location: "GuildPowerupsManager" };
        FileUpload250MbPowerupExperiment.trackExposure(obj);
        const ServerThemeExperiment = ServerThemeExperiment2.ServerThemeExperiment;
        const obj1 = { guildId: guild.id, location: "GuildPowerupsManager" };
        ServerThemeExperiment.trackExposure(obj1);
        const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
        const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
        const config = ServerThemeApexShadowExperiment.getConfig(obj2);
        let tmp10Result = GameServerExperiment2;
        if (tmp10Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = GameServerPricingExperiment2.GameServerPricingExperiment;
          obj = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp10Result = useHasAllocateBoostPermission;
        if (!tmp10Result.getHasAllocateBoostPermission(PermissionStore, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = useIsCurrentUserEligibleForPowerupUpsells.getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = shared_PlatformUtils.isMobile;
          if (isMobile) {
            isMobile = ServerThemeExperiment2.getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp10Result2 = ServerThemeExperiment2;
          }
          if (isMobile) {
            isMobile = useIsCurrentUserEligibleForPowerupUpsells.getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result3 = useIsCurrentUserEligibleForPowerupUpsells;
          }
          if (isMobile) {
            isMobile = ServerThemeUserExperiment.getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp10Result4 = ServerThemeUserExperiment;
          }
          let showCoachmark = shared_PlatformUtils.isMobile;
          if (showCoachmark) {
            showCoachmark = useIsCurrentUserEligibleForPowerupUpsells.getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result5 = useIsCurrentUserEligibleForPowerupUpsells;
          }
          if (showCoachmark) {
            showCoachmark = BoostToUnlockMobileCoachmarkExperimentDefault.getConfig({ location: "GuildPowerupsManager" }).showCoachmark;
          }
          if (shared_PlatformUtils.isMobile) {
            if (!isMobile) {
              isMobile = showCoachmark;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp10Result1 = useIsCurrentUserEligibleForPowerupUpsells;
        }
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = GuildPowerupsActionCreators.fetchPowerupCatalogForGuild(guildId);
          const tmp10Result6 = GuildPowerupsActionCreators;
        }
        if (GuildPowerupsStore.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = GuildPowerupsActionCreators.fetchGuildBoostEntitlements(guildId);
          const tmp10Result7 = GuildPowerupsActionCreators;
        }
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
    let tmpResult = GuildPowerupsActionCreators;
    const guildBoostEntitlements = tmpResult.fetchGuildBoostEntitlements(guildId);
    tmpResult = BoostingActionCreators;
    const appliedGuildBoostsForGuild = tmpResult.fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
  }
  obj = useHasAllocateBoostPermission;
};
const guildPowerupsManager = new GuildPowerupsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;