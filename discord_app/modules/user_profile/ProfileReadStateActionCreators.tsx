// discord_app/modules/user_profile/ProfileReadStateActionCreators.tsx
import LoggerDefault from "../debug/Logger.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ProfileReadStateUtils from "ProfileReadStateUtils.tsx";
import ProfileReadStateSection from "../../../discord_common/js/shared/shared-constants/ProfileReadStateSection.tsx";
import ProfileReadStateEndpoints2 from "ProfileReadStateEndpoints.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import WishlistStore from "../wishlists/WishlistStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import UserProfileStore from "UserProfileStore.tsx";

require = fn;
function canAckProfileWishlist(id, wishlistId) {
  if (null != wishlistId) {
    if (null != WishlistStore.getWishlist(wishlistId)) {
      if (!WishlistStore.isFetching(wishlistId)) {
        if (null == WishlistStore.getError(wishlistId)) {
          const wishlistSettings = UserProfileStore.getWishlistSettings(id, wishlistId);
          let updated_at;
          if (wishlistSettings != null) {
            updated_at = wishlistSettings.updated_at;
          }
          let shouldAckWishlistResult = null == updated_at || WishlistStore.getUpdatedAt(wishlistId) === updated_at;
          if (shouldAckWishlistResult) {
            shouldAckWishlistResult = ProfileReadStateUtils.shouldAckWishlist(
              wishlistSettings,
              UserProfileStore.getProfileReadState(id),
            );
          }
          return shouldAckWishlistResult;
        }
      }
    }
  }
  return false;
}
let closure_10 = async function _ackProfileWishlist(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          currentUser = currentUser.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          if (null != id) {
            if (
              (function canTrackProfile(arg0) {
                currentUser = currentUser.getCurrentUser();
                let id;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                let tmp3 = arg0 !== id;
                if (tmp3) {
                  tmp3 = null != closure_1_0(dependencyMap[5]).getProfileReadStateConfigPeek();
                  const obj = closure_1_0(dependencyMap[5]);
                }
                return tmp3;
              })(closure_0)
            ) {
              const _HermesInternal = HermesInternal;
              const combined = "" + id + ":" + closure_0;
              closure_129_0 = combined;
              value = map.get(combined);
              if (null != value) {
                c6 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else if (canAckProfileWishlist(closure_0, firstWishlistId.getFirstWishlistId(closure_0))) {
                const tmp31 = (function sendWishlistAck() {
                  const self = this;
                  const apply = closure_1_11.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(closure_0, id);
                const result = map.set(combined, tmp31);
                c4 = 1;
                c5 = 2;
                c6 = 1;
                const obj5 = { value: tmp31, done: false };
                return obj5;
              }
            }
          }
          c6 = 3;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_130_8.delete(closure_129_0);
        throw closure_3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c4 = 0;
        closure_130_8.delete(closure_129_0);
      }
      c4 = 0;
      closure_130_8.delete(closure_129_0);
      c6 = 3;
      let obj = { value, done: true };
      return obj;
    } catch (tmp34) {
      closure_3 = tmp34;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp34;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_11 = async function _sendWishlistAck(arg0) {
  closure_4 = tmp3;
  closure_131_0 = closure_0;
  closure_131_1 = closure_1;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: null, body: null, rejectWithError: true };
  const ProfileReadStateEndpoints = ProfileReadStateEndpoints2.ProfileReadStateEndpoints;
  request.url = ProfileReadStateEndpoints.PROFILE_READ_STATE(closure_0);
  const obj4 = { sections: null };
  items = [ProfileReadStateSection.ProfileReadStateSection.WISHLIST];
  obj4.sections = items;
  request.body = obj4;
  await HTTP.put(request);
  if (1 === tmp7) {
    c6 = 0;
    closure_131_3 = closure_5;
    closure_132_7.warn("Failed to ack profile wishlist", closure_131_3);
    c8 = 3;
  } else if (2 === tmp7) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c6 = 0;
      c8 = 3;
      return { value, done: true };
    } else {
      closure_131_2 = value;
      const currentUser = closure_132_5.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      if (id !== closure_131_1) {
        c6 = 0;
        c8 = 3;
        return { value: "HermesInternal", done: null };
      } else {
        const obj8 = { type: "PROFILE_READ_STATE_ACK", ownerId: closure_131_0, ackedAt: null };
        const result = closure_132_0(closure_132_2[6]).parseProfileReadState(closure_131_2.body);
        let ackedAt = result;
        if (result == null) {
          ackedAt = {};
        }
        obj8.ackedAt = ackedAt;
        c7 = 3;
        c8 = 1;
        closure_132_1(closure_132_2[10]);
        return { value: closure_132_1(closure_132_2[10]).dispatch(obj8), done: false };
      }
    }
  } else if (arg0 === 1) {
    c8 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c6 = 0;
  }
  return value;
};
let closure_7 = new LoggerDefault("ProfileReadStateActionCreators");
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/ProfileReadStateActionCreators.tsx");

export { canAckProfileWishlist };
export function ackProfileWishlist() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
