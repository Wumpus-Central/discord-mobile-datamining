let obj = { RIOT_GAMES: "1443033465766281327", BATTLENET: "1356665549089800303" };
obj = {
  applicationId: obj.RIOT_GAMES,
  getMigrationExperimentEnabled(location) {
    let obj = require(4312) /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.getIsRiotSocialSDKMigrationEnabled(obj);
  },
  useMigrationExperimentEnabled(location) {
    let obj = require(4312) /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.useIsRiotSocialSDKMigrationEnabled(obj);
  }
};
const items = [obj];
obj = {
  applicationId: obj.RIOT_GAMES,
  getMigrationExperimentEnabled(location) {
    let obj = require(4312) /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.getIsRiotSocialSDKMigrationEnabled(obj);
  },
  useMigrationExperimentEnabled(location) {
    let obj = require(4312) /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.useIsRiotSocialSDKMigrationEnabled(obj);
  }
};
const items1 = [
  obj,
  {
    applicationId: obj.BATTLENET,
    getMigrationExperimentEnabled(location) {
      const battlenetSocialSDKMigrationExperiment = require(4312) /* useIsRiotSocialSDKMigrationEnabled */.battlenetSocialSDKMigrationExperiment;
      return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
    },
    useMigrationExperimentEnabled(location) {
      const battlenetSocialSDKMigrationExperiment = require(4312) /* useIsRiotSocialSDKMigrationEnabled */.battlenetSocialSDKMigrationExperiment;
      return battlenetSocialSDKMigrationExperiment.useConfig({ location }).enabled;
    }
  }
];
const items2 = [
  {
    applicationId: obj.RIOT_GAMES,
    getMigrationExperimentEnabled(location) {
      let obj = require(4312) /* useIsRiotSocialSDKMigrationEnabled */;
      obj = { location };
      return obj.getIsRiotSocialSDKMigrationEnabled(obj);
    },
    useMigrationExperimentEnabled(location) {
      let obj = require(4312) /* useIsRiotSocialSDKMigrationEnabled */;
      obj = { location };
      return obj.useIsRiotSocialSDKMigrationEnabled(obj);
    }
  },
  {
    applicationId: obj.BATTLENET,
    getMigrationExperimentEnabled(location) {
      const battlenetSocialSDKMigrationExperiment = require(4312) /* useIsRiotSocialSDKMigrationEnabled */.battlenetSocialSDKMigrationExperiment;
      return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
    },
    useMigrationExperimentEnabled(location) {
      const battlenetSocialSDKMigrationExperiment = require(4312) /* useIsRiotSocialSDKMigrationEnabled */.battlenetSocialSDKMigrationExperiment;
      return battlenetSocialSDKMigrationExperiment.useConfig({ location }).enabled;
    }
  }
];
const result = require("set").fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityConstants.tsx");

export const ApplicationIdentityConnections = obj;
export const APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS = items;
export const APPLICATION_IDENTITY_CONNECTIONS_SCREEN_APPLICATIONS = items1;
export const APPLICATION_IDENTITY_CONNECTIONS_INCENTIVIZED_APPLICATIONS = items2;
export const getMigratedApplicationIdentityConnectionsScreenApplications = function getMigratedApplicationIdentityConnectionsScreenApplications(arg0) {
  let closure_0 = arg0;
  const found = items1.filter((getMigrationExperimentEnabled) => getMigrationExperimentEnabled.getMigrationExperimentEnabled(closure_0));
  return found.map((applicationId) => applicationId.applicationId);
};