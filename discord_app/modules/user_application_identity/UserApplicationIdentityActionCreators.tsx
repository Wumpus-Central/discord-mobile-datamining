// discord_app/modules/user_application_identity/UserApplicationIdentityActionCreators.tsx
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import importDefaultResult from "UserApplicationIdentityStore.tsx";
import ME from "../../Constants.tsx";
import initialize from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
let c4 = importDefaultResult;
const Endpoints = ME.Endpoints;
let obj = {
  fetchUserApplicationIdentitiesWithProfiles(arg0) {
    closure_0 = arg0;
    closure_1 = arg1;
    return callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let callback = tmp3;
              let body = tmp7;
              body = undefined;
              obj1 = { type: "USER_APPLICATION_IDENTITY_FETCH_USER_START", userId: null };
              obj1[1] = closure_1_0;
              callback(closure_1_2[3]).dispatch(obj1);
              c3 = 1;
              const HTTP = closure_1_0(closure_1_2[4]).HTTP;
              const obj2 = { url: null, query: null, rejectWithError: true, signal: null };
              obj2[0] = c5.USER_APPLICATION_IDENTITIES(closure_1_0);
              obj2[1] = { with_profiles: true };
              obj2[3] = callback;
              c4 = 2;
              c5 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj2);
              return obj3;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            callback = closure_2;
            obj3 = callback(closure_1_2[3]);
            const obj4 = { type: "USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE", userId: null };
            obj4[1] = body;
            obj3.dispatch(obj4);
            throw callback;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            body = arg1;
            obj = callback(closure_1_2[3]);
            const obj6 = { type: "USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS", userId: null, identities: null };
            obj6[1] = body;
            obj6[2] = body.body.identities;
            obj.dispatch(obj6);
            c3 = 0;
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp24) {
          closure_2 = tmp24;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp24;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  updateApplicationIdentityConfig(application_id, provider_issued_user_id, arg2) {
    closure_0 = application_id;
    closure_1 = provider_issued_user_id;
    closure_2 = arg2;
    return callback(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const HTTP = v0(closure_1_2[4]).HTTP;
              obj1 = { url: null, body: null, rejectWithError: true };
              obj1[0] = closure_1_5.SELF_APPLICATION_IDENTITY_CONFIG(v0, c1);
              obj1[1] = closure_1_2;
              c1 = 1;
              v0 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.patch(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          v0 = tmp;
          throw tmp11;
        }
      }
    })();
  }
};
obj = {
  getQueryId: ME.QueryIds.USER_APPLICATION_IDENTITIES,
  get(arg0) {
    return importDefaultResult.getUserIdentities(arg0);
  },
  load(arg0) {
    return obj.fetchUserApplicationIdentitiesWithProfiles(arg0);
  }
};
const fetchStore = initialize.createFetchStore(importDefaultResult, obj);
const result = require("set").fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityActionCreators.tsx");

export default obj;
export const useUserApplicationIdentities = fetchStore;