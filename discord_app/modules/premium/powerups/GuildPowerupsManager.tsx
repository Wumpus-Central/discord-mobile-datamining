// === Module 17778: GuildPowerupsManager ===

// Module 17778 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 2066 */;
import BoostingActionCreators from "BoostingActionCreators" /* 4653 */;
import GameServerExperiment2 from "GameServerExperiment" /* 4668 */;
import FileUpload250MbPowerupExperiment2 from "FileUpload250MbPowerupExperiment" /* 4682 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 4683 */;
import ServerThemeExperiment2 from "ServerThemeExperiment" /* 4684 */;
import ServerThemeApexShadowExperiment2 from "ServerThemeApexShadowExperiment" /* 4685 */;
import shared_PlatformUtils from "shared/PlatformUtils" /* 4996 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 12742 */;
import GameServerPricingExperiment2 from "GameServerPricingExperiment" /* 12763 */;
import useHasAllocateBoostPermission from "useHasAllocateBoostPermission" /* 12767 */;
import useIsCurrentUserEligibleForPowerupUpsells from "useIsCurrentUserEligibleForPowerupUpsells" /* 16506 */;
import GuildStore from "GuildStore" /* 2063 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4577 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4644 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7363 */;

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
        if (tmp9Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = GameServerPricingExperiment2.GameServerPricingExperiment;
          const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp9Result = GameServerExperiment2;
        if (!tmp9Result10.getHasAllocateBoostPermission(PermissionStore, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = useIsCurrentUserEligibleForPowerupUpsells.getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = shared_PlatformUtils.isMobile;
          if (isMobile) {
            isMobile = ServerThemeExperiment2.getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp9Result12 = ServerThemeExperiment2;
          }
          if (isMobile) {
            isMobile = !ServerThemeExperiment2.getServerThemeRollbackEnabled(guildId, "GuildPowerupsManager");
            const tmp9Result13 = ServerThemeExperiment2;
          }
          if (isMobile) {
            isMobile = useIsCurrentUserEligibleForPowerupUpsells.getIsCurrentUserEligibleForPowerupUpsells();
            const tmp9Result14 = useIsCurrentUserEligibleForPowerupUpsells;
          }
          if (isMobile) {
            isMobile = ServerThemeUserExperiment.getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp9Result15 = ServerThemeUserExperiment;
          }
          let isMobile2 = shared_PlatformUtils.isMobile;
          if (isMobile2) {
            isMobile2 = useIsCurrentUserEligibleForPowerupUpsells.getIsCurrentUserEligibleForPowerupUpsells();
            const tmp9Result16 = useIsCurrentUserEligibleForPowerupUpsells;
          }
          if (shared_PlatformUtils.isMobile) {
            if (!isMobile) {
              isMobile = isMobile2;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp9Result11 = useIsCurrentUserEligibleForPowerupUpsells;
        }
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = GuildPowerupsActionCreators.fetchPowerupCatalogForGuild(guildId);
          const tmp9Result17 = GuildPowerupsActionCreators;
        }
        if (GuildPowerupsStore.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = GuildPowerupsActionCreators.fetchGuildBoostEntitlements(guildId);
          const tmp9Result18 = GuildPowerupsActionCreators;
        }
        tmp9Result10 = useHasAllocateBoostPermission;
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