// === Module 12286: fetchStore ===

// Module 12286 (fetchStore)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import importDefaultResult from "map" /* 12285 */;
import ME from "ME" /* 676 */;
import initialize from "initialize" /* 589 */;

const require = fn;
let c4 = importDefaultResult;
const Endpoints = ME.Endpoints;
let obj = {
  getQueryId: ME.QueryIds.USER_APPLICATION_IDENTITIES,
  get(arg0) {
    return importDefaultResult.getUserIdentities(arg0);
  },
  load(arg0) {
    return obj.fetchUserApplicationIdentitiesWithProfiles(arg0);
  }
};
const fetchStore = initialize.createFetchStore(importDefaultResult, obj);
const result = require("obj132").fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityActionCreators.tsx");

export default obj;
export const useUserApplicationIdentities = fetchStore;