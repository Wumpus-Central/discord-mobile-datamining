// discord_app/modules/user_application_identity/UserApplicationIdentityActionCreators.tsx
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import UserApplicationIdentityStore from "UserApplicationIdentityStore.tsx";
import Constants from "../../Constants.tsx";
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c1, c4, c5;

const Endpoints = Constants.Endpoints;
let obj = {
  fetchUserApplicationIdentitiesWithProfiles(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let signal;
          let userId;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              signal = tmp;
              userId = undefined;
              const obj5 = { type: "USER_APPLICATION_IDENTITY_FETCH_USER_START", userId };
              const obj9 = signal(closure_2[3]);
              obj9.dispatch(obj5);
              c3 = 1;
              const HTTP = userId(closure_2[4]).HTTP;
              const request = {
                url: c5.USER_APPLICATION_IDENTITIES(userId),
                query: { with_profiles: true },
                rejectWithError: true,
                signal,
              };
              const get = HTTP.get;
              c4 = 2;
              c5 = 1;
              const obj6 = { value: get(request), done: false };
              return obj6;
            }
          } else if (1 === c4) {
            c3 = 0;
            signal = closure_2;
            const obj7 = { type: "USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE", userId: closure_129_0 };
            const obj4 = signal(closure_2[3]);
            obj4.dispatch(obj7);
            throw signal;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            userId = value;
            const obj10 = {
              type: "USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS",
              userId: closure_129_0,
              identities: userId.body.identities,
            };
            obj = signal(closure_2[3]);
            obj.dispatch(obj10);
            c3 = 0;
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp21) {
          closure_2 = tmp21;
          if (0 === c3) {
            c5 = 3;
            throw tmp21;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  updateApplicationIdentityConfig(application_id, provider_issued_user_id, arg2) {
    let closure_0 = application_id;
    let closure_1 = provider_issued_user_id;
    let closure_2 = arg2;
    return (async () => {
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const HTTP = v3(body[4]).HTTP;
              const request = {
                url: Endpoints.SELF_APPLICATION_IDENTITY_CONFIG(application_id, provider_issued_user_id),
                body,
                rejectWithError: true,
              };
              const patch = HTTP.patch;
              c1 = 1;
              v3 = 1;
              const obj4 = { value: patch(request), done: false };
              return obj4;
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          v3 = 3;
          throw tmp10;
        }
      }
    })();
  },
};
const QueryIds = Constants.QueryIds;
let obj2 = {
  getQueryId: QueryIds.USER_APPLICATION_IDENTITIES,
  get(arg0) {
    return UserApplicationIdentityStore.getUserIdentities(arg0);
  },
  load(arg0) {
    return obj.fetchUserApplicationIdentitiesWithProfiles(arg0);
  },
};
const fetchStore = get_initialized.createFetchStore(UserApplicationIdentityStore, obj2);
const result = size.fileFinishedImporting(
  "modules/user_application_identity/UserApplicationIdentityActionCreators.tsx",
);

export default obj;
export const useUserApplicationIdentities = fetchStore;
