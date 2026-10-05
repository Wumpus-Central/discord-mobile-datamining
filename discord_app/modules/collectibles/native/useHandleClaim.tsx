// discord_app/modules/collectibles/native/useHandleClaim.tsx
import react2 from "../../../../_runtime/00576_react.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c4, product;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (product) => {
      let obj = react2;
      const cResult = obj.c(5);
      product = product.product;
      require = product;
      let stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
      if (cResult[0] === product) {
        let tmp2;
        let tmp3;
        if (cResult[1] === stageCollectibleChangeForEditProfile) {
          tmp2 = cResult[2];
        }
        if (cResult[3] !== tmp2) {
          let obj2 = { handleClaim: tmp2 };
          cResult[3] = tmp2;
          cResult[4] = obj2;
          tmp3 = obj2;
        } else {
          tmp3 = cResult[4];
        }
        return tmp3;
      }
      let closure_0 = _asyncToGenerator(async () => {
        let intl;
        let obj3;
        if (c4 === 2) {
          c4 = 3;
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
            c4 = 2;
            if (0 === stageCollectibleChangeForEditProfile) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                product = tmp;
                c3 = 1;
                stageCollectibleChangeForEditProfile = 2;
                c4 = 1;
                const obj5 = { value: obj3.claimPremiumCollectiblesProduct(product.skuId), done: false };
                obj3 = product(dependencyMap[4]);
                return obj5;
              }
            } else {
              if (1 === tmp4) {
                c3 = 0;
                const obj6 = {
                  key: "collectible shop claim error",
                  content: intl.string(product(dependencyMap[8]).t.CKsXk3),
                };
                const open = stageCollectibleChangeForEditProfile(dependencyMap[7]).open;
                const tmp9 = stageCollectibleChangeForEditProfile(dependencyMap[7]);
                intl = product(dependencyMap[8]).intl;
                open(obj6);
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c4 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                const obj7 = stageCollectibleChangeForEditProfile(dependencyMap[5]);
                obj7.hideAllActionSheets();
                const obj9 = { product, useCategoryImage: true, stageCollectibleChangeForEditProfile };
                const obj8 = stageCollectibleChangeForEditProfile(dependencyMap[6]);
                obj8.open(obj9);
                const obj10 = product(dependencyMap[4]);
                const collectiblesPurchases = obj10.fetchCollectiblesPurchases();
                c3 = 0;
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp18) {
            let closure_2 = tmp18;
            if (0 === c3) {
              c4 = 3;
              throw tmp18;
            } else {
              stageCollectibleChangeForEditProfile = 1;
            }
          }
        }
      });
      const fn = function () {
        return closure_0(...arguments);
      };
      cResult[0] = product;
      cResult[1] = stageCollectibleChangeForEditProfile;
      cResult[2] = fn;
      tmp2 = fn;
    }
  : (product) => {
      let items;
      product = product.product;
      require = product;
      const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
      let obj = {
        handleClaim: react.useCallback(
          _asyncToGenerator(async () => {
            let closure_0;
            let intl;
            let obj3;
            let v1;
            if (c4 === 2) {
              c4 = 3;
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
                c4 = 2;
                if (0 === v1) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    c3 = 1;
                    v1 = 2;
                    c4 = 1;
                    const obj5 = { value: obj3.claimPremiumCollectiblesProduct(require.skuId), done: false };
                    obj3 = tmp(closure_2[4]);
                    return obj5;
                  }
                } else {
                  if (1 === tmp4) {
                    c3 = 0;
                    const obj6 = {
                      key: "collectible shop claim error",
                      content: intl.string(tmp(closure_2[8]).t.CKsXk3),
                    };
                    const open = v1(closure_2[7]).open;
                    const tmp9 = v1(closure_2[7]);
                    intl = tmp(closure_2[8]).intl;
                    open(obj6);
                  } else if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    c4 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    const obj7 = v1(closure_2[5]);
                    obj7.hideAllActionSheets();
                    const obj9 = {
                      product: closure_128_0,
                      useCategoryImage: true,
                      stageCollectibleChangeForEditProfile: closure_128_1,
                    };
                    const obj8 = v1(closure_2[6]);
                    obj8.open(obj9);
                    const obj10 = tmp(closure_2[4]);
                    const collectiblesPurchases = obj10.fetchCollectiblesPurchases();
                    c3 = 0;
                  }
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp18) {
                closure_2 = tmp18;
                if (0 === c3) {
                  c4 = 3;
                  throw tmp18;
                } else {
                  v1 = 1;
                }
              }
            }
          }),
          items,
        ),
      };
      items = [product, stageCollectibleChangeForEditProfile];
      return obj;
    };
const result = size.fileFinishedImporting("modules/collectibles/native/useHandleClaim.tsx");

export const useHandleClaim = tmp2;
