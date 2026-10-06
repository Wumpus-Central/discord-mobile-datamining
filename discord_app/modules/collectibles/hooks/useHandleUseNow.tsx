// === Module 10834: hooks/useHandleUseNow ===

// Module 10834 (hooks/useHandleUseNow)
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c6, c7, closure_4, set;

let _slicedToArray = _slicedToArray_mod;
const isExternalProduct = CollectiblesShopConstants.isExternalProduct;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useHandleUseNow.tsx");

export const useHandleUseNow = function useHandleUseNow(cResult) {
  let closure_3;
  let first;
  let items1;
  let stringResult;
  const product = cResult.product;
  require = product;
  const onSuccess = cResult.onSuccess;
  const onError = cResult.onError;
  _slicedToArray = undefined;
  let firstAvatarDecoration;
  let memo;
  let obj = firstAvatarDecoration;
  [first, _slicedToArray] = firstAvatarDecoration.useState(false);
  const tmp3 = require;
  const tmp4 = onSuccess;
  let obj2 = require("useShopProductItems");
  const shopProductItems = obj2.useShopProductItems(product);
  firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  const firstProfileEffect = shopProductItems.firstProfileEffect;
  const firstNameplate = shopProductItems.firstNameplate;
  const firstProfileFrame = shopProductItems.firstProfileFrame;
  const type = product.type;
  if (require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl5 = tmp3(tmp4[5]).intl;
    stringResult = intl5.string(tmp3(tmp4[5]).t.zOA4ax);
  } else if (tmp3(tmp4[4]).CollectiblesItemType.NAMEPLATE === type) {
    const intl4 = tmp3(tmp4[5]).intl;
    stringResult = intl4.string(tmp3(tmp4[5]).t.gOzMvx);
  } else if (tmp3(tmp4[4]).CollectiblesItemType.PROFILE_FRAME === type) {
    const intl3 = tmp3(tmp4[5]).intl;
    stringResult = intl3.string(tmp3(tmp4[5]).t.lOF4zR);
  } else if (tmp3(tmp4[4]).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl2 = tmp3(tmp4[5]).intl;
    stringResult = intl2.string(tmp3(tmp4[5]).t.SWm2ai);
  } else {
    const BUNDLE = tmp3(tmp4[4]).CollectiblesItemType.BUNDLE;
    const intl = tmp3(tmp4[5]).intl;
    stringResult = intl.string(tmp3(tmp4[5]).t.tf1ZZ4);
  }
  let items = [product];
  memo = obj.useMemo(() => {
    function computeCanUseNow(product) {
      if (firstProfileEffect(product.skuId)) {
        return false;
      } else if (product.type !== closure_1_0(onSuccess[4]).CollectiblesItemType.BUNDLE) {
        return true;
      } else {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
        const items = product.items;
        for (const item10023 of items) {
          if (set.has(item10023.type)) {
            obj2.return();
            let flag = false;
            return false;
          } else {
            let addResult = set.add(item10023.type);
            continue;
          }
        }
        return true;
      }
    }
    return computeCanUseNow(require);
  }, items);
  let obj3 = {
    handleUseNow: obj.useCallback(onError(function*() {
      let obj4;
      let obj7;
      let pendingProfileEffect;
      let pendingProfileFrame;
      if (c7 === 2) {
        c7 = 3;
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
        let c5;
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
              let closure_2 = tmp4;
              let obj5;
              if (memo) {
                tmp(true);
                obj5 = {};
                c5 = 2;
                if (null != firstAvatarDecoration) {
                  obj5.avatarDecoration = firstAvatarDecoration;
                }
                if (null == firstProfileEffect) {
                  if (null == firstProfileFrame) {
                    if (null != closure_131_6) {
                      obj5.nameplate = closure_131_6;
                    }
                    const _Object = Object;
                    if (Object.keys(obj5).length > 0) {
                      c6 = 4;
                      c7 = 1;
                      const obj6 = { value: obj4.saveProfileAndAccountChanges(obj5), done: false };
                      obj4 = pendingProfileEffect(pendingProfileFrame[9]);
                      return obj6;
                    } else {
                      if (closure_131_1 != null) {
                        closure_131_1();
                      }
                      c5 = 1;
                    }
                  }
                }
                const tmp38 = pendingProfileEffect(pendingProfileFrame[7]);
                pendingProfileEffect = firstProfileEffect;
                const getProfileChangesForUpdateRequest = tmp38.getProfileChangesForUpdateRequest;
                if (firstProfileEffect == null) {
                  pendingProfileEffect = undefined;
                }
                const obj8 = { pendingProfileEffect, pendingProfileFrame };
                pendingProfileFrame = firstProfileFrame;
                if (firstProfileFrame == null) {
                  pendingProfileFrame = undefined;
                }
                const profileChangesForUpdateRequest = getProfileChangesForUpdateRequest(obj8);
                c6 = 3;
                c7 = 1;
                const obj9 = { value: obj7.saveProfileChanges(profileChangesForUpdateRequest), done: false };
                obj7 = pendingProfileEffect(pendingProfileFrame[8]);
                return obj9;
              }
              c7 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_131_3(false);
            throw closure_4;
          } else if (2 === c6) {
            c5 = 1;
            let closure_1 = closure_4;
            if (closure_131_2 != null) {
              tmp9(closure_1);
            }
          } else if (3 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_131_3(false);
              c7 = 3;
              const obj10 = { value, done: true };
              return obj10;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_131_3(false);
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c5 = 0;
          closure_131_3(false);
        } catch (tmp45) {
          closure_4 = tmp45;
          if (0 === c5) {
            c7 = 3;
            throw tmp45;
          } else if (1 === tmp47) {
            c6 = 1;
          } else {
            c6 = 2;
          }
        }
      }
    }), items1),
    isApplying: first,
    canUseNow: memo
  };
  items1 = [memo, firstAvatarDecoration, firstProfileEffect, firstNameplate, firstProfileFrame, onSuccess, stringResult, onError];
  return obj3;
};