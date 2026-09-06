// discord_app/modules/user_application_identity/UserApplicationIdentityActionCreators.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import UserApplicationIdentityStore from "UserApplicationIdentityStore.tsx";

const require = fn;
const Constants = fn(1074);
const Endpoints = Constants.Endpoints;
let obj = {
  fetchUserApplicationIdentitiesWithProfiles(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const signal = tmp3;
              const userId = tmp7;
              closure_128_0 = undefined;
              const obj1 = { type: "USER_APPLICATION_IDENTITY_FETCH_USER_START", userId };
              signal(tmp24[3]).dispatch(obj1);
              c3 = 1;
              const HTTP = userId(tmp24[4]).HTTP;
              const request = {
                url: c5.USER_APPLICATION_IDENTITIES(userId),
                query: { with_profiles: true },
                rejectWithError: true,
                signal,
              };
              c4 = 2;
              c5 = 1;
              const obj2 = { value: HTTP.get(request), done: false };
              return obj2;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_1 = tmp24;
            let obj3 = signal(tmp24[3]);
            obj3 = { type: "USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE", userId: closure_129_0 };
            obj3.dispatch(obj3);
            throw closure_128_1;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_128_0 = value;
            obj = signal(tmp24[3]);
            const obj5 = {
              type: "USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS",
              userId: closure_129_0,
              identities: closure_128_0.body.identities,
            };
            obj.dispatch(obj5);
            c3 = 0;
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp24) {
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
    return (async () => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const HTTP = v3(body[4]).HTTP;
              const request = {
                url: Endpoints.SELF_APPLICATION_IDENTITY_CONFIG(closure_0, closure_1),
                body,
                rejectWithError: true,
              };
              c1 = 1;
              v3 = 1;
              const obj1 = { value: HTTP.patch(request), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          v3 = tmp;
          throw tmp11;
        }
      }
    })();
  },
};
const initialize = fn(504);
obj = {
  getQueryId: Constants.QueryIds.USER_APPLICATION_IDENTITIES,
  get(arg0) {
    return UserApplicationIdentityStore.getUserIdentities(arg0);
  },
  load(arg0) {
    return obj.fetchUserApplicationIdentitiesWithProfiles(arg0);
  },
};
const fetchStore = initialize.createFetchStore(UserApplicationIdentityStore, obj);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_application_identity/UserApplicationIdentityActionCreators.tsx",
);

export default obj;
export const useUserApplicationIdentities = fetchStore;
