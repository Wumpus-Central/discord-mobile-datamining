// discord_app/modules/user_profile/ProfileReadStateActionCreators.tsx
import LoggerDefault from "../debug/Logger.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ProfileReadStateEndpoints2 from "ProfileReadStateEndpoints.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
let closure_7 = async function _ackProfileWishlist(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = closure_0;
          closure_130_1 = undefined;
          if (
            (function canTrackProfile(arg0) {
              currentUser = currentUser.getCurrentUser();
              let id;
              if (currentUser != null) {
                id = currentUser.id;
              }
              let tmp3 = arg0 !== id;
              if (tmp3) {
                tmp3 = null != closure_1_0(dependencyMap[4]).getProfileReadStateConfigPeek();
                const obj = closure_1_0(dependencyMap[4]);
              }
              return tmp3;
            })(closure_0)
          ) {
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: null, body: null, rejectWithError: true };
            const ProfileReadStateEndpoints = ProfileReadStateEndpoints2.ProfileReadStateEndpoints;
            request.url = ProfileReadStateEndpoints.PROFILE_READ_STATE(closure_0);
            const obj4 = { sections: null };
            const items = [constants.WISHLIST];
            obj4.sections = items;
            request.body = obj4;
            c6 = 2;
            c7 = 1;
            const obj5 = { value: HTTP.put(request), done: false };
            return obj5;
          }
        }
      } else {
        if (1 === tmp7) {
          c5 = 0;
          closure_130_2 = currentUser;
          closure_131_6.warn("Failed to ack profile wishlist", closure_130_2);
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_130_1 = value;
          const obj6 = { type: "PROFILE_READ_STATE_ACK", ownerId: closure_130_0, ackedAt: null };
          const obj7 = closure_131_1(closure_131_2[7]);
          const result = closure_131_0(closure_131_2[8]).parseProfileReadState(closure_130_1.body);
          let ackedAt = result;
          if (result == null) {
            ackedAt = {};
          }
          obj6.ackedAt = ackedAt;
          obj7.dispatch(obj6);
          c5 = 0;
          const obj9 = closure_131_0(closure_131_2[8]);
        }
        c5 = 0;
        c7 = 3;
        let obj = { value, done: true };
        return obj;
      }
      c7 = 3;
    } catch (tmp22) {
      currentUser = tmp22;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp22;
      } else {
        c6 = tmp;
      }
    }
  }
};
const ProfileReadStateSection = fn(7777).ProfileReadStateSection;
let closure_6 = new LoggerDefault("ProfileReadStateActionCreators");
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/ProfileReadStateActionCreators.tsx");

export function ackProfileWishlist() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
