// discord_app/modules/premium/powerups/GuildPowerupsManager.tsx
import getFavoritesAwareGuildName from "../../favorites/FavoritesUtils.tsx";
import _fetchAppliedGuildBoostsForGuild from "../../../actions/BoostingActionCreators.tsx";
import experiment from "../../game_server/GameServerExperiment.tsx";
import experiment2 from "experiments/FileUpload250MbPowerupExperiment.tsx";
import apexExperiment from "experiments/ServerThemeUserExperiment.tsx";
import experiment3 from "experiments/ServerThemeExperiment.tsx";
import apexExperiment2 from "experiments/ServerThemeApexShadowExperiment.tsx";
import isTablet from "../../../../discord_common/js/shared/lib/PlatformUtils.tsx";
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import guildPowerupsAckNotification from "GuildPowerupsActionCreators.tsx";
import getUnitIdDefault from "../../guild_boosting/experiments/BoostToUnlockMobileCoachmarkExperiment.tsx";
import experiment4 from "../../game_server/experiments/GameServerPricingExperiment.tsx";
import useHasAllocateBoostPermission from "hooks/useHasAllocateBoostPermission.tsx";
import useIsCurrentUserEligibleForPowerupUpsells from "hooks/useIsCurrentUserEligibleForPowerupUpsells.tsx";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../../stores/PermissionStore.tsx";
import handleConnectionOpen from "../../../stores/SelectedGuildStore.tsx";
import calculateAppliedBoosts from "GuildPowerupsStore.tsx";

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