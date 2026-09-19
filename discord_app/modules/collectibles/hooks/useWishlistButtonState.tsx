// === Module 9109: useWishlistButtonState ===

// Module 9109 (useWishlistButtonState)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7855 */;

const require = globalThis.__r;

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
  const tmp2 = skuId(onAddSuccess[4]);
  if (obj.isNullOrEmpty(_location)) {
    let items = [];
  } else {
    items = [_location];
  }
  analyticsLocations = tmp2(items).analyticsLocations;
  obj = require("StringUtils");
  const items1 = [analyticsLocations];
  stateFromStores = require("initialize").useStateFromStores(items1, () => UserProfileStore.getFirstWishlistId(require));
  const tmp3Result = require("initialize");
  isSkuInWishlist = require("useWishlistHooks").useIsSkuInWishlist(stateFromStores, skuId);
  const tmp3Result2 = require("useWishlistHooks");
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
  const items3 = [isBusy, isSkuInWishlist, stateFromStores, skuId, analyticsLocations, onAddSuccess, onRemoveSuccess, onError, skipAddAnnouncement];
  const tmp6 = onError(skipAddAnnouncement.useState(null), 2);
  return {
    isWishlisted: isSkuInWishlist,
    isBusy,
    handleToggle: skipAddAnnouncement.useCallback(onRemoveSuccess(function*() {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp8 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
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
                  const obj6 = { value, done: true };
                  return obj6;
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
                    const obj7 = { value: tmp4(tmp86[8]).removeSkuFromWishlist(tmp73, skuId, analyticsLocations), done: false };
                    return obj7;
                  }
                }
                _undefined(true);
                c3 = 4;
                c4 = 6;
                c5 = 1;
                const obj8 = { value: tmp4(tmp86[8]).addSkuToWishlist(skuId, analyticsLocations), done: false };
                return obj8;
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
              const obj = { value, done: true };
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
    }), items3)
  };
};