// discord_app/modules/collectibles/hooks/useWishlistButtonState.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserProfileStore from "../../user_profile/UserProfileStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useWishlistButtonState.tsx");

export const useWishlistButtonState = function useWishlistButtonState(onRemoveSuccess) {
  ({ userId: require, skuId } = onRemoveSuccess);
  ({ location: _location, onAddSuccess } = onRemoveSuccess);
  onRemoveSuccess = onRemoveSuccess.onRemoveSuccess;
  const onError = onRemoveSuccess.onError;
  const skipAddAnnouncement = onRemoveSuccess.skipAddAnnouncement;
  let analyticsLocations;
  let stateFromStores;
  c8 = undefined;
  let isBusy;
  closure_10 = undefined;
  let isSkuInWishlist;
  let obj = require("StringUtils");
  if (obj.isNullOrEmpty(_location)) {
    let items = [];
  } else {
    items = [_location];
  }
  analyticsLocations = skuId(onAddSuccess[4])(items).analyticsLocations;
  let tmp3Result = tmp3(tmp[6]);
  const items1 = [analyticsLocations];
  stateFromStores = tmp3Result.useStateFromStores(items1, () => UserProfileStore.getFirstWishlistId(require));
  tmp3Result = tmp3(tmp[7]);
  isSkuInWishlist = tmp3Result.useIsSkuInWishlist(stateFromStores, skuId);
  const tmp2 = skuId(onAddSuccess[4]);
  [tmp7, c8] = onError(skipAddAnnouncement.useState(null), 2);
  const tmp8 = onError(skipAddAnnouncement.useState(false), 2);
  isBusy = tmp8[0];
  closure_10 = tmp8[1];
  if (null !== tmp7) {
    isSkuInWishlist = tmp7;
  }
  const items2 = [skuId];
  const effect = obj4.useEffect(() => {
    _undefined(null);
    closure_10(false);
  }, items2);
  const items3 = [
    isBusy,
    isSkuInWishlist,
    stateFromStores,
    skuId,
    analyticsLocations,
    onAddSuccess,
    onRemoveSuccess,
    onError,
    skipAddAnnouncement,
  ];
  obj = {
    isWishlisted: isSkuInWishlist,
    isBusy,
    handleToggle: obj4.useCallback(
      onRemoveSuccess(function* (arg0, value) {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp8 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
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
                closure_0 = tmp9;
                if (first) {
                  c5 = 3;
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    closure_129_8(null);
                    closure_129_10(false);
                    c5 = 3;
                    const obj1 = { value, done: true };
                    return obj1;
                  } else {
                    const AccessibilityAnnouncer2 = closure_0(tmp86[9]).AccessibilityAnnouncer;
                    const intl2 = closure_0(tmp86[10]).intl;
                    AccessibilityAnnouncer2.announce(intl2.string(closure_0(tmp86[10]).t.DSXOiP));
                    if (closure_129_3 != null) {
                      closure_129_3();
                    }
                    c3 = 1;
                  }
                } else {
                  closure_10(true);
                  if (isSkuInWishlist) {
                    if (null != stateFromStores) {
                      _undefined(false);
                      c3 = 3;
                      c4 = 4;
                      c5 = 1;
                      let obj2 = {
                        value: tmp4(tmp86[8]).removeSkuFromWishlist(tmp73, skuId, analyticsLocations),
                        done: false,
                      };
                      return obj2;
                    }
                  }
                  _undefined(true);
                  c3 = 4;
                  obj2 = tmp4(tmp86[8]);
                  c4 = 6;
                  c5 = 1;
                  const obj3 = { value: obj2.addSkuToWishlist(skuId, analyticsLocations), done: false };
                  return obj3;
                }
              }
            } else if (1 === tmp9) {
              c3 = 0;
              closure_129_8(null);
              closure_129_10(false);
              throw tmp86;
            } else if (2 === tmp9) {
              c3 = 0;
              closure_129_8(null);
              closure_129_10(false);
              throw tmp86;
            } else if (3 === tmp9) {
              c3 = 1;
              closure_128_0 = tmp86;
              if (closure_129_4 != null) {
                tmp47(closure_128_0);
              }
            } else if (4 !== tmp9) {
              if (5 === tmp9) {
                c3 = 2;
                closure_128_1 = tmp86;
                if (closure_129_4 != null) {
                  tmp28(closure_128_1);
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_8(null);
                closure_129_10(false);
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                if (!closure_129_5) {
                  const AccessibilityAnnouncer = closure_0(tmp86[9]).AccessibilityAnnouncer;
                  const intl = closure_0(tmp86[10]).intl;
                  AccessibilityAnnouncer.announce(intl.string(closure_0(tmp86[10]).t["3T2jbf"]));
                }
                if (closure_129_2 != null) {
                  closure_129_2();
                }
                c3 = 2;
              }
              c3 = 0;
              closure_129_8(null);
              closure_129_10(false);
            }
            c3 = 0;
            closure_129_8(null);
            closure_129_10(false);
          } catch (tmp86) {
            if (tmp5 === c3) {
              c5 = tmp3;
              throw tmp86;
            } else if (tmp2 === tmp88) {
              c4 = tmp2;
            } else if (tmp === tmp88) {
              c4 = tmp;
            } else if (tmp3 === tmp88) {
              c4 = tmp3;
            } else {
              c4 = tmp6;
            }
          }
        }
      }),
      items3,
    ),
  };
  return obj;
};
