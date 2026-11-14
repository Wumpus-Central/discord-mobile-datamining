// === Module 16402: useLinkedGameOrganization ===

// Module 16402 (useLinkedGameOrganization)
import DurationsDefault from "Durations" /* 1089 */;
import GameOrganizationActionCreators from "GameOrganizationActionCreators" /* 16403 */;
import GuildStore from "GuildStore" /* 5177 */;
import GameOrganizationStore from "GameOrganizationStore" /* 16349 */;

require = fn;
const result = 5 * DurationsDefault.Seconds.MINUTE;
const result1 = 15 * DurationsDefault.Seconds.SECOND;
const initialize = fn(504);
const fetchStore = initialize.createFetchStore(GameOrganizationStore, {
  getQueryId: fn(1072).QueryIds.GAME_ORGANIZATION,
  get(arg0) {
    return GameOrganizationStore.getGameOrganizationByGuildId(arg0);
  },
  load(arg0) {
    guild = GuildStore.getGuild(arg0);
    if (null != guild) {
      if (null != guild.linkedGameOrganization) {
        let gameOrganization = GameOrganizationActionCreators.fetchGameOrganization(arg0);
      }
      return gameOrganization;
    }
    gameOrganization = Promise.resolve(undefined);
  },
  getIsLoading(arg0) {
    return GameOrganizationStore.isLoadingForGuild(arg0);
  },
  getError(arg0) {
    return GameOrganizationStore.getErrorForGuild(arg0);
  },
  staleAfter: result,
  failureStaleAfter: result1
});
const size = fn(2);
const result2 = size.fileFinishedImporting("modules/game_organizations/useLinkedGameOrganization.tsx");

export const useLinkedGameOrganization = fetchStore;