// === Module 8485: useWishlistButtonState ===

// Module 8485 (useWishlistButtonState)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7111 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c4, c5;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useWishlistButtonState.tsx");

export const useWishlistButtonState = function useWishlistButtonState(onRemoveSuccess) {
  let _location;
  let _undefined;
  let c8;
  let items;
  let onAddSuccess;
  let skuId;
  let tmp7;
  ({ userId: require, skuId } = onRemoveSuccess);
  ({ location: _location, onAddSuccess } = onRemoveSuccess);
  onRemoveSuccess = onRemoveSuccess.onRemoveSuccess;
  const onError = onRemoveSuccess.onError;
  const skipAddAnnouncement = onRemoveSuccess.skipAddAnnouncement;
  let analyticsLocations;
  let stateFromStores;
  c8 = undefined;
  let isBusy;
  let closure_10;
  let isSkuInWishlist;
  const tmp2 = skuId(onAddSuccess[4]);
  let obj = require("StringUtils");
  if (obj.isNullOrEmpty(_location)) {
    items = [];
  } else {
    items = [_location];
  }
  analyticsLocations = tmp2(items).analyticsLocations;
  const items1 = [analyticsLocations];
  const tmp3Result = require("get initialized");
  stateFromStores = tmp3Result.useStateFromStores(items1, () => UserProfileStore.getFirstWishlistId(require));
  const tmp3Result2 = require("useWishlistHooks");
  isSkuInWishlist = tmp3Result2.useIsSkuInWishlist(stateFromStores, skuId);
  let obj4 = skipAddAnnouncement;
  [tmp7, c8] = onError(skipAddAnnouncement.useState(null), 2);
  const tmp6 = onError(skipAddAnnouncement.useState(null), 2);
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
  let obj2 = {
    isWishlisted: isSkuInWishlist,
    isBusy,
    handleToggle: obj4.useCallback(onRemoveSuccess(function*() {
      let closure_1;
      let closure_2;
      let obj3;
      let obj5;
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
          let closure_0;
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
              closure_0 = tmp4;
              if (!first) {
                closure_10(true);
                if (isSkuInWishlist) {
                  if (null != stateFromStores) {
                    _undefined(false);
                    c3 = 3;
                    c4 = 4;
                    c5 = 1;
                    const obj6 = { value: obj5.removeSkuFromWishlist(tmp68, skuId, analyticsLocations), done: false };
                    obj5 = tmp(onAddSuccess[8]);
                    return obj6;
                  }
                }
                _undefined(true);
                c3 = 4;
                c4 = 6;
                c5 = 1;
                const obj7 = { value: obj3.addSkuToWishlist(skuId, analyticsLocations), done: false };
                obj3 = tmp(onAddSuccess[8]);
                return obj7;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_8(null);
            closure_129_10(false);
            throw onAddSuccess;
          } else if (2 === c4) {
            c3 = 0;
            closure_129_8(null);
            closure_129_10(false);
            throw onAddSuccess;
          } else if (3 === c4) {
            c3 = 1;
            closure_0 = onAddSuccess;
            if (closure_129_4 != null) {
              tmp42(closure_0);
            }
            c3 = 0;
            closure_129_8(null);
            closure_129_10(false);
          } else if (4 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_8(null);
              closure_129_10(false);
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              const AccessibilityAnnouncer2 = closure_0(onAddSuccess[9]).AccessibilityAnnouncer;
              const announce2 = AccessibilityAnnouncer2.announce;
              const intl2 = closure_0(onAddSuccess[10]).intl;
              announce2(intl2.string(closure_0(onAddSuccess[10]).t.DSXOiP));
              if (closure_129_3 != null) {
                closure_129_3();
              }
              c3 = 1;
            }
          } else {
            if (5 === c4) {
              c3 = 2;
              if (closure_129_4 != null) {
                tmp23(onAddSuccess);
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
                const AccessibilityAnnouncer = closure_0(onAddSuccess[9]).AccessibilityAnnouncer;
                const announce = AccessibilityAnnouncer.announce;
                const intl = closure_0(onAddSuccess[10]).intl;
                announce(intl.string(closure_0(onAddSuccess[10]).t["3T2jbf"]));
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
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp81) {
          onAddSuccess = tmp81;
          if (0 === c3) {
            c5 = 3;
            throw tmp81;
          } else if (1 === c3) {
            c4 = 1;
          } else if (2 === c3) {
            c4 = 2;
          } else if (3 === c3) {
            c4 = 3;
          } else {
            c4 = 5;
          }
        }
      }
    }), items3)
  };
  return obj2;
};