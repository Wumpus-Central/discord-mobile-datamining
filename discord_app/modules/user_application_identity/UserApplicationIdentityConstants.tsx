// === Module 4476: items ===

// Module 4476 (items)
import set from "set" /* 2 */;
import apexExperiment from "apexExperiment" /* 4477 */;

let obj = { RIOT_GAMES: "1443033465766281327", LEAGUE_OF_LEGENDS: "1443349464290168976", VALORANT: "1443350165678198935", BATTLENET: "1356665549089800303", WORLD_OF_WARCRAFT: "1384671873593512078" };
obj = { [obj.RIOT_GAMES]: obj, [obj.LEAGUE_OF_LEGENDS]: obj1, [obj.VALORANT]: obj2, [obj.BATTLENET]: obj3, [obj.WORLD_OF_WARCRAFT]: obj4 };
obj = {
  applicationId: obj.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  connectionEntrypointUrlOverride: "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord"
};
const items = [obj[obj.RIOT_GAMES], obj[obj.BATTLENET]];
const items1 = [obj[obj.RIOT_GAMES], obj[obj.BATTLENET]];
const result = set.fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityConstants.tsx");

export const ApplicationIdentityAppIds = obj;
export const APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS = items;
export const APPLICATION_IDENTITY_CONNECTIONS_INCENTIVIZED_APPLICATIONS = items1;
export const APPLICATION_IDENTITY_CONNECTIONS_WITH_OVERRIDE_ENTRYPOINT_URLS = { [obj.WORLD_OF_WARCRAFT]: obj[obj.WORLD_OF_WARCRAFT], [obj.RIOT_GAMES]: obj[obj.RIOT_GAMES], [obj.LEAGUE_OF_LEGENDS]: obj[obj.LEAGUE_OF_LEGENDS], [obj.VALORANT]: obj[obj.VALORANT] };
export const getMigratedApplicationIdentityConnectionsScreenApplications = function getMigratedApplicationIdentityConnectionsScreenApplications(arg0) {
  closure_0 = arg0;
  const found = items.filter((getMigrationExperimentEnabled) => getMigrationExperimentEnabled.getMigrationExperimentEnabled(closure_0));
  return found.map((applicationId) => applicationId.applicationId);
};