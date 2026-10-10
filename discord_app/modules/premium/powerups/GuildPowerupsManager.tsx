// === Module 18057: GuildPowerupsManager ===

// Module 18057 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 2090 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 5012 */;
import ServerThemeExperiment2 from "ServerThemeExperiment" /* 5013 */;
import ServerThemeApexShadowExperiment2 from "ServerThemeApexShadowExperiment" /* 5025 */;
import GameServerExperiment2 from "GameServerExperiment" /* 5026 */;
import shared_PlatformUtils from "shared/PlatformUtils" /* 5294 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 8026 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 12224 */;
import useHasAllocateBoostPermission from "useHasAllocateBoostPermission" /* 12247 */;
import useIsCurrentUserEligibleForPowerupUpsells from "useIsCurrentUserEligibleForPowerupUpsells" /* 16579 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 5007 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6807 */;

require = fn;
class GuildPowerupsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_4, applyArgumentsResult.handleSelectedGuildChange);
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
    if (!obj10.isFavoritesGuildId(guildId)) {
      guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        const GameServerExperiment = GameServerExperiment2.GameServerExperiment;
        const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
        GameServerExperiment.trackExposure(obj);
        const ServerThemeExperiment = ServerThemeExperiment2.ServerThemeExperiment;
        const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
        ServerThemeExperiment.trackExposure(obj2);
        const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
        const obj3 = { guildId: guild.id, location: "GuildPowerupsManager" };
        const config = ServerThemeApexShadowExperiment.getConfig(obj3);
        if (!tmp7Result.getHasAllocateBoostPermission(PermissionStore, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = useIsCurrentUserEligibleForPowerupUpsells.getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = shared_PlatformUtils.isMobile;
          if (isMobile) {
            isMobile = ServerThemeExperiment2.getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp7Result10 = ServerThemeExperiment2;
          }
          if (isMobile) {
            isMobile = !ServerThemeExperiment2.getServerThemeRollbackEnabled(guildId, "GuildPowerupsManager");
            const tmp7Result11 = ServerThemeExperiment2;
          }
          if (isMobile) {
            isMobile = useIsCurrentUserEligibleForPowerupUpsells.getIsCurrentUserEligibleForPowerupUpsells();
            const tmp7Result12 = useIsCurrentUserEligibleForPowerupUpsells;
          }
          if (isMobile) {
            isMobile = ServerThemeUserExperiment.getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp7Result13 = ServerThemeUserExperiment;
          }
          let isMobile2 = shared_PlatformUtils.isMobile;
          if (isMobile2) {
            isMobile2 = useIsCurrentUserEligibleForPowerupUpsells.getIsCurrentUserEligibleForPowerupUpsells();
            const tmp7Result14 = useIsCurrentUserEligibleForPowerupUpsells;
          }
          if (shared_PlatformUtils.isMobile) {
            if (!isMobile) {
              isMobile = isMobile2;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp7Result9 = useIsCurrentUserEligibleForPowerupUpsells;
        }
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = GuildPowerupsActionCreators.fetchPowerupCatalogForGuild(guildId);
          const tmp7Result15 = GuildPowerupsActionCreators;
        }
        if (GuildPowerupsStore.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = GuildPowerupsActionCreators.fetchGuildBoostEntitlements(guildId);
          const tmp7Result16 = GuildPowerupsActionCreators;
        }
        tmp7Result = useHasAllocateBoostPermission;
      }
    }
    obj10 = FavoritesUtils;
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
    const appliedGuildBoostsForGuild = actions_BoostingActionCreators.fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
    const tmpResult2 = actions_BoostingActionCreators;
  }
  obj = useHasAllocateBoostPermission;
};
const guildPowerupsManager = new GuildPowerupsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;