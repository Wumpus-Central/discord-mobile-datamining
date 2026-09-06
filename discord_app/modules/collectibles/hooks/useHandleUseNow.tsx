// discord_app/modules/collectibles/hooks/useHandleUseNow.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

let require = fn;
const isExternalProduct = fn(1076).isExternalProduct;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useHandleUseNow.tsx");

export const useHandleUseNow = function useHandleUseNow(product) {
  product = product.product;
  require = product;
  const onSuccess = product.onSuccess;
  const onError = product.onError;
  _slicedToArray = undefined;
  let firstAvatarDecoration;
  let memo;
  let obj = firstAvatarDecoration;
  const tmp = _slicedToArray(firstAvatarDecoration.useState(false), 2);
  _slicedToArray = tmp[1];
  const shopProductItems = require("useShopProductItems").useShopProductItems(product);
  firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  const firstProfileEffect = shopProductItems.firstProfileEffect;
  const firstNameplate = shopProductItems.firstNameplate;
  const firstProfileFrame = shopProductItems.firstProfileFrame;
  const type = product.type;
  if (require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION === type) {
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
  memo = obj.useMemo(
    () =>
      (function computeCanUseNow(product) {
        if (firstProfileEffect(product.skuId)) {
          return false;
        } else if (product.type !== closure_1_0(onSuccess[4]).CollectiblesItemType.BUNDLE) {
          return true;
        } else {
          const _Set = Set;
          const set = new Set();
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
      })(product),
    items,
  );
  obj = { handleUseNow: null, isApplying: tmp[0], canUseNow: memo };
  const items1 = [
    memo,
    firstAvatarDecoration,
    firstProfileEffect,
    firstNameplate,
    firstProfileFrame,
    onSuccess,
    stringResult,
    onError,
  ];
  obj.handleUseNow = obj.useCallback(
    onError(function* () {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp8;
              closure_130_0 = undefined;
              if (!memo) {
                c7 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                tmp4(true);
                const obj1 = {};
                closure_130_0 = obj1;
                c5 = 2;
                if (null != firstAvatarDecoration) {
                  obj1.avatarDecoration = firstAvatarDecoration;
                }
                if (null == firstProfileEffect) {
                  if (null == firstProfileFrame) {
                    if (null != closure_131_6) {
                      closure_130_0.nameplate = closure_131_6;
                    }
                    const _Object = Object;
                    if (Object.keys(closure_130_0).length > 0) {
                      let obj3 = pendingProfileEffect(pendingProfileFrame[9]);
                      c6 = 4;
                      c7 = 1;
                      const obj2 = { value: obj3.saveProfileAndAccountChanges(closure_130_0), done: false };
                      return obj2;
                    } else {
                      if (closure_131_1 != null) {
                        closure_131_1();
                      }
                      c5 = 1;
                      c5 = 0;
                      closure_131_3(false);
                    }
                  }
                }
                let obj5 = pendingProfileEffect(pendingProfileFrame[7]);
                pendingProfileEffect = firstProfileEffect;
                if (firstProfileEffect == null) {
                  pendingProfileEffect = undefined;
                }
                obj3 = { pendingProfileEffect, pendingProfileFrame: null };
                pendingProfileFrame = firstProfileFrame;
                if (firstProfileFrame == null) {
                  pendingProfileFrame = undefined;
                }
                obj3.pendingProfileFrame = pendingProfileFrame;
                const profileChangesForUpdateRequest = obj5.getProfileChangesForUpdateRequest(obj3);
                c6 = 3;
                c7 = 1;
                const obj4 = {
                  value: pendingProfileEffect(pendingProfileFrame[8]).saveProfileChanges(
                    profileChangesForUpdateRequest,
                  ),
                  done: false,
                };
                return obj4;
              }
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c5 = 1;
              closure_130_1 = closure_4;
              if (closure_131_2 != null) {
                tmp13(closure_130_1);
              }
            } else if (3 === tmp8) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                closure_131_3(false);
                c7 = 3;
                obj5 = { value, done: true };
                return obj5;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_131_3(false);
              c7 = 3;
              obj = { value, done: true };
              return obj;
            }
          }
          c5 = 0;
          closure_131_3(false);
          throw closure_4;
        } catch (tmp48) {
          closure_4 = tmp48;
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
    }),
    items1,
  );
  return obj;
};
