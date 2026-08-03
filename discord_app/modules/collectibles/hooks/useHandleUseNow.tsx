// === Module 9956: useHandleUseNow ===

// Module 9956 (useHandleUseNow)
import getSystemLocale from "getSystemLocale";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { isExternalProduct } from "items";

let require = arg1;
const result = require("noop").fileFinishedImporting("modules/collectibles/hooks/useHandleUseNow.tsx");

export const useHandleUseNow = function useHandleUseNow(product) {
  product = product.product;
  const require = product;
  const onSuccess = product.onSuccess;
  const onError = product.onError;
  let callback;
  let firstAvatarDecoration;
  let firstProfileEffect;
  let firstNameplate;
  let firstProfileFrame;
  let memo;
  let obj = firstAvatarDecoration;
  const tmp = callback(firstAvatarDecoration.useState(false), 2);
  callback = tmp[1];
  const shopProductItems = require(onSuccess[6]).useShopProductItems(product);
  firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  firstProfileEffect = shopProductItems.firstProfileEffect;
  firstNameplate = shopProductItems.firstNameplate;
  firstProfileFrame = shopProductItems.firstProfileFrame;
  const type = product.type;
  if (require(onSuccess[4]).CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl5 = tmp2(tmp3[5]).intl;
    let stringResult = intl5.string(tmp2(tmp3[5]).t.zOA4ax);
  } else if (tmp2(tmp3[4]).CollectiblesItemType.NAMEPLATE === type) {
    const intl4 = tmp2(tmp3[5]).intl;
    stringResult = intl4.string(tmp2(tmp3[5]).t.gOzMvx);
  } else if (tmp2(tmp3[4]).CollectiblesItemType.PROFILE_FRAME === type) {
    const intl3 = tmp2(tmp3[5]).intl;
    stringResult = intl3.string(tmp2(tmp3[5]).t.lOF4zR);
  } else if (tmp2(tmp3[4]).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl2 = tmp2(tmp3[5]).intl;
    stringResult = intl2.string(tmp2(tmp3[5]).t.SWm2ai);
  } else {
    const BUNDLE = tmp2(tmp3[4]).CollectiblesItemType.BUNDLE;
    const intl = tmp2(tmp3[5]).intl;
    stringResult = intl.string(tmp2(tmp3[5]).t.tf1ZZ4);
  }
  let items = [product];
  memo = obj.useMemo(() => (function computeCanUseNow(closure_0) {
    if (callback2(closure_0.skuId)) {
      return false;
    } else if (closure_0.type !== callback(table[4]).CollectiblesItemType.BUNDLE) {
      return true;
    } else {
      const _Set = Set;
      const set = new Set();
      const items = closure_0.items;
      for (const item10023 of items) {
        let tmp9 = item10023;
        if (set.has(item10023.type)) {
          let tmp12 = obj2;
          obj2.return();
          let flag = false;
          return false;
        } else {
          let tmp10 = item10023;
          let addResult = set.add(tmp9.type);
          continue;
        }
      }
      return true;
    }
  })(closure_0), items);
  obj = {
    handleUseNow: obj.useCallback(onError(function*() {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const callback2 = tmp4;
              let getSystemLocale = tmp8;
              let c0;
              if (!outer1_8) {
                c7 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                outer1_3(true);
                const obj1 = {};
                c0 = obj1;
                let c5 = 2;
                if (null != outer1_4) {
                  obj1.avatarDecoration = outer1_4;
                }
                if (null == c5) {
                  if (null == c7) {
                    if (null != c6) {
                      c0.nameplate = c6;
                    }
                    const _Object = Object;
                    if (Object.keys(c0).length > 0) {
                      let obj3 = outer1_0(outer1_1[9]);
                      c6 = 4;
                      c7 = 1;
                      const obj2 = { value: null, done: false };
                      obj2[0] = obj3.saveProfileAndAccountChanges(c0);
                      return obj2;
                    } else {
                      if (callback != null) {
                        callback();
                      }
                      c5 = 1;
                      c5 = 0;
                      callback2(false);
                    }
                  }
                }
                let obj5 = outer1_0(outer1_1[7]);
                c0 = tmp21;
                if (c5 == null) {
                  c0 = undefined;
                }
                obj3 = { pendingProfileEffect: null, pendingProfileFrame: null };
                obj3[0] = c0;
                callback = c7;
                if (c7 == null) {
                  callback = undefined;
                }
                obj3[1] = callback;
                const profileChangesForUpdateRequest = obj5.getProfileChangesForUpdateRequest(obj3);
                c6 = 3;
                c7 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = outer1_0(outer1_1[8]).saveProfileChanges(profileChangesForUpdateRequest);
                return obj4;
              }
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c5 = 1;
              callback = noop;
              if (getSystemLocale != null) {
                tmp13(callback);
              }
            } else if (3 === tmp8) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                callback2(false);
                c7 = 3;
                obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 0;
              callback2(false);
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          }
          c5 = 0;
          callback2(false);
          throw noop;
        } catch (tmp48) {
          noop = tmp48;
          if (tmp5 === c5) {
            c7 = tmp3;
            throw tmp48;
          } else if (tmp2 === tmp50) {
            c6 = tmp2;
          } else {
            c6 = tmp;
          }
        }
      }
    }), items1),
    isApplying: tmp[0],
    canUseNow: memo
  };
  items1 = [memo, firstAvatarDecoration, firstProfileEffect, firstNameplate, firstProfileFrame, onSuccess, stringResult, onError];
  return obj;
};