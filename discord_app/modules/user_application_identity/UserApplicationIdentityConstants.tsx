// discord_app/modules/user_application_identity/UserApplicationIdentityConstants.tsx
import socialSDKMigration from "../application_account_linking/experiments/socialSDKMigration.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj = {
  RIOT_GAMES: "1443033465766281327",
  LEAGUE_OF_LEGENDS: "1443349464290168976",
  VALORANT: "1443350165678198935",
  BATTLENET: "1356665549089800303",
  WORLD_OF_WARCRAFT: "1384671873593512078",
};
const obj2 = {
  [obj.RIOT_GAMES]: obj3,
  [obj.LEAGUE_OF_LEGENDS]: obj4,
  [obj.VALORANT]: obj5,
  [obj.BATTLENET]: obj6,
  [obj.WORLD_OF_WARCRAFT]: obj7,
};
const items = [,];
obj3 = {
  applicationId: obj.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  connectionEntrypointUrlOverride: "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord",
};
obj4 = {
  applicationId: obj.LEAGUE_OF_LEGENDS,
  getMigrationExperimentEnabled() {
    return true;
  },
  connectionEntrypointUrlOverride: "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord",
};
obj5 = {
  applicationId: obj.VALORANT,
  getMigrationExperimentEnabled() {
    return true;
  },
  connectionEntrypointUrlOverride: "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord",
};
obj6 = {
  applicationId: obj.BATTLENET,
  getMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = socialSDKMigration.battlenetSocialSDKMigrationExperiment;
    const obj = { location };
    return battlenetSocialSDKMigrationExperiment.getConfig(obj).enabled;
  },
};
obj7 = {
  applicationId: obj.WORLD_OF_WARCRAFT,
  getMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = socialSDKMigration.battlenetSocialSDKMigrationExperiment;
    const obj = { location };
    return battlenetSocialSDKMigrationExperiment.getConfig(obj).enabled;
  },
  connectionEntrypointUrlOverride: "https://account.battle.net/connections/discord",
};
items[0] = obj2[obj.RIOT_GAMES];
items[1] = obj2[obj.BATTLENET];
const items1 = [obj2[obj.RIOT_GAMES], obj2[obj.BATTLENET]];
const obj8 = {
  [obj.WORLD_OF_WARCRAFT]: obj2[obj.WORLD_OF_WARCRAFT],
  [obj.RIOT_GAMES]: obj2[obj.RIOT_GAMES],
  [obj.LEAGUE_OF_LEGENDS]: obj2[obj.LEAGUE_OF_LEGENDS],
  [obj.VALORANT]: obj2[obj.VALORANT],
};
const result = size.fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityConstants.tsx");

export const ApplicationIdentityAppIds = obj;
export const APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS = items;
export const APPLICATION_IDENTITY_CONNECTIONS_INCENTIVIZED_APPLICATIONS = items1;
export const APPLICATION_IDENTITY_CONNECTIONS_WITH_OVERRIDE_ENTRYPOINT_URLS = obj8;
export const getMigratedApplicationIdentityConnectionsScreenApplications =
  function getMigratedApplicationIdentityConnectionsScreenApplications(arg0) {
    let closure_0 = arg0;
    const found = items.filter((getMigrationExperimentEnabled) =>
      getMigrationExperimentEnabled.getMigrationExperimentEnabled(closure_0),
    );
    return found.map((applicationId) => applicationId.applicationId);
  };
