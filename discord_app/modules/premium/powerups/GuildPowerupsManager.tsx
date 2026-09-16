// === Module 17582: GuildPowerupsManager ===

// Module 17582 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 1983 */;
import BoostingActionCreators from "BoostingActionCreators" /* 4535 */;
import GameServerExperiment2 from "GameServerExperiment" /* 4550 */;
import FileUpload250MbPowerupExperiment2 from "FileUpload250MbPowerupExperiment" /* 4564 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 4565 */;
import ServerThemeExperiment2 from "ServerThemeExperiment" /* 4566 */;
import ServerThemeApexShadowExperiment2 from "ServerThemeApexShadowExperiment" /* 4567 */;
import shared_PlatformUtils from "shared/PlatformUtils" /* 4879 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 12631 */;
import BoostToUnlockMobileCoachmarkExperimentDefault from "BoostToUnlockMobileCoachmarkExperiment" /* 12645 */;
import GameServerPricingExperiment2 from "GameServerPricingExperiment" /* 12652 */;
import useHasAllocateBoostPermission from "useHasAllocateBoostPermission" /* 12656 */;
import useIsCurrentUserEligibleForPowerupUpsells from "useIsCurrentUserEligibleForPowerupUpsells" /* 16297 */;
import GuildStore from "GuildStore" /* 1980 */;
import PermissionStore from "PermissionStore" /* 4276 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4459 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4526 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7228 */;

require = fn;
class GuildPowerupsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_5, applyArgumentsResult.handleSelectedGuildChange);
    obj1 = { GUILD_POWERUP_ENTITLEMENTS_CREATE: null, GUILD_POWERUP_ENTITLEMENTS_DELETE: null, GUILD_APPLIED_BOOSTS_UPDATE: null };
    handleEntitlementUpdate = applyArgumentsResult.handleEntitlementUpdate;
    obj1.GUILD_POWERUP_ENTITLEMENTS_CREATE = handleEntitlementUpdate.bind(applyArgumentsResult);
    handleEntitlementUpdate2 = applyArgumentsResult.handleEntitlementUpdate;
    obj1.GUILD_POWERUP_ENTITLEMENTS_DELETE = handleEntitlementUpdate2.bind(applyArgumentsResult);
    handleAppliedBoostUpdate = applyArgumentsResult.handleAppliedBoostUpdate;
    obj1.GUILD_APPLIED_BOOSTS_UPDATE = handleAppliedBoostUpdate.bind(applyArgumentsResult);
    applyArgumentsResult.actions = obj1;
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
        const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
        GameServerExperiment.trackExposure(obj2);
        const FileUpload250MbPowerupExperiment = FileUpload250MbPowerupExperiment2.FileUpload250MbPowerupExperiment;
        const obj3 = { guildId: guild.id, location: "GuildPowerupsManager" };
        FileUpload250MbPowerupExperiment.trackExposure(obj3);
        const ServerThemeExperiment = ServerThemeExperiment2.ServerThemeExperiment;
        const obj4 = { guildId: guild.id, location: "GuildPowerupsManager" };
        ServerThemeExperiment.trackExposure(obj4);
        const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
        const obj5 = { guildId: guild.id, location: "GuildPowerupsManager" };
        const config = ServerThemeApexShadowExperiment.getConfig(obj5);
        if (tmp10Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = GameServerPricingExperiment2.GameServerPricingExperiment;
          const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp10Result = GameServerExperiment2;
        if (!tmp10Result9.getHasAllocateBoostPermission(PermissionStore, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = useIsCurrentUserEligibleForPowerupUpsells.getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = shared_PlatformUtils.isMobile;
          if (isMobile) {
            isMobile = ServerThemeExperiment2.getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp10Result11 = ServerThemeExperiment2;
          }
          if (isMobile) {
            isMobile = useIsCurrentUserEligibleForPowerupUpsells.getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result12 = useIsCurrentUserEligibleForPowerupUpsells;
          }
          if (isMobile) {
            isMobile = ServerThemeUserExperiment.getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp10Result13 = ServerThemeUserExperiment;
          }
          let showCoachmark = shared_PlatformUtils.isMobile;
          if (showCoachmark) {
            showCoachmark = useIsCurrentUserEligibleForPowerupUpsells.getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result14 = useIsCurrentUserEligibleForPowerupUpsells;
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
          const tmp10Result10 = useIsCurrentUserEligibleForPowerupUpsells;
        }
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = GuildPowerupsActionCreators.fetchPowerupCatalogForGuild(guildId);
          const tmp10Result15 = GuildPowerupsActionCreators;
        }
        if (GuildPowerupsStore.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = GuildPowerupsActionCreators.fetchGuildBoostEntitlements(guildId);
          const tmp10Result16 = GuildPowerupsActionCreators;
        }
        tmp10Result9 = useHasAllocateBoostPermission;
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
    const guildBoostEntitlements = GuildPowerupsActionCreators.fetchGuildBoostEntitlements(guildId);
    const tmpResult = GuildPowerupsActionCreators;
    const appliedGuildBoostsForGuild = BoostingActionCreators.fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
    const tmpResult2 = BoostingActionCreators;
  }
  obj = useHasAllocateBoostPermission;
};
const guildPowerupsManager = new GuildPowerupsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;