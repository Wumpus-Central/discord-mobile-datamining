// === Module 1922: UserApplicationIdentityConstants ===

// Module 1922 (UserApplicationIdentityConstants)
import socialSDKMigration from "socialSDKMigration" /* 1923 */;
import size from "module_2" /* 2 */;

const obj = { RIOT_GAMES: "1443033465766281327", LEAGUE_OF_LEGENDS: "1443349464290168976", VALORANT: "1443350165678198935", BATTLENET: "1356665549089800303", WORLD_OF_WARCRAFT: "1384671873593512078" };
const obj2 = { [obj.RIOT_GAMES]: obj3, [obj.LEAGUE_OF_LEGENDS]: obj4, [obj.VALORANT]: obj5, [obj.BATTLENET]: obj6, [obj.WORLD_OF_WARCRAFT]: obj7 };
const items = [obj2[obj.RIOT_GAMES], obj2[obj.BATTLENET]];
const items1 = [obj2[obj.RIOT_GAMES], obj2[obj.BATTLENET]];
const result = size.fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityConstants.tsx");

export const ApplicationIdentityAppIds = obj;
export const APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS = items;
export const APPLICATION_IDENTITY_CONNECTIONS_INCENTIVIZED_APPLICATIONS = items1;
export const APPLICATION_IDENTITY_CONNECTIONS_WITH_OVERRIDE_ENTRYPOINT_URLS = { [obj.WORLD_OF_WARCRAFT]: obj2[obj.WORLD_OF_WARCRAFT], [obj.RIOT_GAMES]: obj2[obj.RIOT_GAMES], [obj.LEAGUE_OF_LEGENDS]: obj2[obj.LEAGUE_OF_LEGENDS], [obj.VALORANT]: obj2[obj.VALORANT] };
export const getMigratedApplicationIdentityConnectionsScreenApplications = function getMigratedApplicationIdentityConnectionsScreenApplications(arg0) {
  closure_0 = arg0;
  const found = items.filter((getMigrationExperimentEnabled) => getMigrationExperimentEnabled.getMigrationExperimentEnabled(closure_0));
  return found.map((applicationId) => applicationId.applicationId);
};