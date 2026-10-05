// === Module 17557: resolveStorefrontCodedLink ===

// Module 17557 (resolveStorefrontCodedLink)
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SKUStore from "SKUStore" /* 5695 */;
import size from "module_2" /* 2 */;

let c1, c4, closure_2;

const set = new Set();
let result = size.fileFinishedImporting("modules/slayer_storefront/resolveStorefrontCodedLink.tsx");

export default function resolveStorefrontCodedLink(arg0, code) {
  let obj3;
  const tmp = obj3;
  let obj = obj3(11149);
  const result = obj.parseStorefrontCodedLink(code);
  if (null != result) {
    if (arg0 === tmp(4875).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
      let obj2 = { type: "application", applicationId: result.scopeId };
      obj3 = obj2;
    } else {
      obj3 = { type: "guild", guildId: result.scopeId };
    }
    if (result.skuIds.length <= 1) {
      let skuId = _slicedToArray(result.skuIds, 1)[0];
      const tmp4 = null != SKUStore.get(skuId) || SKUStore.isFetching(skuId) || SKUStore.didFetchingSkuFail(skuId);
      if (!tmp4) {
        let obj4 = skuId(584);
        let obj5 = { type: "STORE_LISTINGS_FETCH_START", skuId };
        obj4.dispatch(obj5);
        const items = [skuId];
        const tmpResult = tmp(11149);
        const storefrontCodedLink = tmpResult.makeStorefrontCodedLink(items, result.scopeId);
        skuId = _asyncToGenerator(async () => {
          let v1;
          let v3;
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              v3 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  const tmp14 = v1(dependencyMap[7])();
                  if ("application" === obj3.type) {
                    v1 = 2;
                    const obj5 = v3(dependencyMap[8]);
                    v3 = 1;
                    const obj6 = { value: obj5.fetchSocialLayerStorefrontSkuForApplication(obj3.applicationId, first, tmp14), done: false };
                    return obj6;
                  } else {
                    obj3 = v3(dependencyMap[8]);
                    v1 = 1;
                    v3 = 1;
                    const obj7 = { value: obj3.fetchSocialLayerStorefrontSku(obj3.guildId, first, tmp14), done: false };
                    return obj7;
                  }
                }
              } else {
                if (1 === tmp3) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj8 = { value, done: true };
                    return obj8;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj = { value, done: true };
                  return obj;
                }
                v3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp8) {
              v3 = 3;
              throw tmp8;
            }
          }
        });
        if (!set.has(storefrontCodedLink)) {
          set.add(storefrontCodedLink);
          const tmpResult2 = tmp(17547);
          const result1 = tmpResult2.queueMessageLinkFetch(_asyncToGenerator(async () => {
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
                if (0 === c1) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    obj3 = { value, done: true };
                    return obj3;
                  } else {
                    let closure_0 = tmp;
                    c3 = 1;
                    c1 = 2;
                    c4 = 1;
                    const obj4 = { value: v1(), done: false };
                    return obj4;
                  }
                } else if (1 === tmp4) {
                  c3 = 0;
                  set.delete(closure_128_0);
                  throw closure_2;
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  set.delete(closure_128_0);
                  c4 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c3 = 0;
                  set.delete(closure_128_0);
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp20) {
                closure_2 = tmp20;
                if (0 === c3) {
                  c4 = 3;
                  throw tmp20;
                } else {
                  c1 = 1;
                }
              }
            }
          }));
        }
      }
    }
  }
};