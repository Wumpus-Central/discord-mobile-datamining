// discord_app/modules/user_application_identity/UserApplicationIdentityActionCreators.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import importDefaultResult from "UserApplicationIdentityStore.tsx";
import ME from "../../Constants.tsx";
import initialize from "../../../discord_common/js/packages/flux/index.tsx";

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