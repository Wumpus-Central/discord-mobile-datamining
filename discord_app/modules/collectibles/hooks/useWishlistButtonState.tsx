// discord_app/modules/collectibles/hooks/useWishlistButtonState.tsx
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import closure_6 from "../../user_profile/UserProfileStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useWishlistButtonState.tsx");

export const useWishlistButtonState = function useWishlistButtonState(onRemoveSuccess) {
  ({ userId: require, skuId } = onRemoveSuccess);
  ({ location: _location, onAddSuccess } = onRemoveSuccess);
  onRemoveSuccess = onRemoveSuccess.onRemoveSuccess;
  const onError = onRemoveSuccess.onError;
  const skipAddAnnouncement = onRemoveSuccess.skipAddAnnouncement;
  let analyticsLocations;
  let stateFromStores;
  c8 = undefined;
  let first;
  closure_10 = undefined;
  let isSkuInWishlist;
  let obj = require(onAddSuccess[5]);
  if (obj.isNullOrEmpty(_location)) {
    let items = [];
  } else {
    items = [_location];
  }
  analyticsLocations = skuId(onAddSuccess[4])(items).analyticsLocations;
  let tmp3Result = tmp3(tmp[6]);
  const items1 = [analyticsLocations];
  stateFromStores = tmp3Result.useStateFromStores(items1, () => analyticsLocations.getFirstWishlistId(closure_0));
  tmp3Result = tmp3(tmp[7]);
  isSkuInWishlist = tmp3Result.useIsSkuInWishlist(stateFromStores, skuId);
  const tmp2 = skuId(onAddSuccess[4]);
  [tmp7, c8] = onError(skipAddAnnouncement.useState(null), 2);
  const tmp8 = onError(skipAddAnnouncement.useState(false), 2);
  first = tmp8[0];
  closure_10 = tmp8[1];
  if (null !== tmp7) {
    isSkuInWishlist = tmp7;
  }
  const items2 = [skuId];
  const effect = obj4.useEffect(() => {
    _undefined(null);
    callback(false);
  }, items2);
  const items3 = [first, isSkuInWishlist, stateFromStores, skuId, analyticsLocations, onAddSuccess, onRemoveSuccess, onError, skipAddAnnouncement];
  obj = {
    isWishlisted: isSkuInWishlist,
    isBusy: first,
    handleToggle: obj4.useCallback(onRemoveSuccess(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
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
              closure_1 = tmp4;
              closure_0 = tmp9;
              let announceResult = closure_1_9;
              if (closure_1_9) {
                c5 = 3;
                if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  let v0 = 0;
                  closure_1_8(null);
                  closure_1_10(false);
                  c5 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  const AccessibilityAnnouncer2 = closure_1_0(closure_1_2[9]).AccessibilityAnnouncer;
                  announceResult = closure_1_0;
                  announceResult = closure_1_2;
                  const intl2 = closure_1_0(closure_1_2[10]).intl;
                  announceResult = closure_1_0;
                  announceResult = closure_1_2;
                  announceResult = AccessibilityAnnouncer2.announce(intl2.string(closure_1_0(closure_1_2[10]).t.DSXOiP));
                  if (v0 != null) {
                    v0();
                  }
                  v0 = 1;
                }
              } else {
                closure_1_10(true);
                if (closure_1_11) {
                  if (null != closure_1_7) {
                    closure_1_8(false);
                    v0 = 3;
                    c4 = 4;
                    c5 = 1;
                    let obj2 = { value: null, done: false };
                    obj2[0] = closure_1_1(closure_1_2[8]).removeSkuFromWishlist(tmp73, closure_1_1, closure_1_6);
                    return obj2;
                  }
                }
                closure_1_8(true);
                v0 = 4;
                obj2 = closure_1_1(closure_1_2[8]);
                c4 = 6;
                c5 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj2.addSkuToWishlist(closure_1_1, closure_1_6);
                return obj3;
              }
            }
          } else if (1 === tmp9) {
            v0 = 0;
            closure_1_8(null);
            closure_1_10(false);
            throw closure_2;
          } else if (2 === tmp9) {
            v0 = 0;
            closure_1_8(null);
            closure_1_10(false);
            throw closure_2;
          } else if (3 === tmp9) {
            v0 = 1;
            closure_0 = closure_2;
            if (c4 != null) {
              tmp47(closure_1_0);
            }
          } else if (4 !== tmp9) {
            if (5 === tmp9) {
              v0 = 2;
              closure_1 = closure_2;
              if (c4 != null) {
                tmp28(closure_1_1);
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 0;
              closure_1_8(null);
              closure_1_10(false);
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              if (!c5) {
                const AccessibilityAnnouncer = closure_1_0(closure_1_2[9]).AccessibilityAnnouncer;
                const intl = closure_1_0(closure_1_2[10]).intl;
                AccessibilityAnnouncer.announce(intl.string(closure_1_0(closure_1_2[10]).t["3T2jbf"]));
              }
              if (closure_1_2 != null) {
                closure_1_2();
              }
              v0 = 2;
            }
            v0 = 0;
            closure_1_8(null);
            closure_1_10(false);
          }
          v0 = 0;
          closure_1_8(null);
          closure_1_10(false);
        } catch (tmp86) {
          closure_2 = tmp86;
          if (tmp5 === v0) {
            c5 = tmp3;
            throw tmp86;
          } else if (tmp2 === tmp88) {
            c4 = tmp2;
          } else if (announceResult === tmp88) {
            c4 = announceResult;
          } else if (tmp3 === tmp88) {
            c4 = tmp3;
          } else {
            c4 = tmp6;
          }
        }
      }
    }), items3)
  };
  return obj;
};