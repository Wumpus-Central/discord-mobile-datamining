// === Module 17186: resolveStorefrontCodedLink ===

// Module 17186 (resolveStorefrontCodedLink)
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import SKUStore from "SKUStore" /* 5822 */;

const require = fn;
const set = new Set();
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/resolveStorefrontCodedLink.tsx");

export default function resolveStorefrontCodedLink(arg0, code) {
  const result = obj3(11026).parseStorefrontCodedLink(code);
  if (null != result) {
    if (arg0 === tmp(4821).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
      let obj2 = { type: "application", applicationId: result.scopeId };
      obj3 = obj2;
    } else {
      obj3 = { type: "guild", guildId: result.scopeId };
    }
    if (result.skuIds.length <= 1) {
      const skuId = _slicedToArray(result.skuIds, 1)[0];
      if (!tmp4) {
        const obj5 = { type: "STORE_LISTINGS_FETCH_START", skuId };
        skuId(573).dispatch(obj5);
        let obj4 = skuId(573);
        const items = [skuId];
        const storefrontCodedLink = tmp(11026).makeStorefrontCodedLink(items, result.scopeId);
        closure_129_0 = storefrontCodedLink;
        closure_129_1 = asyncGeneratorStep(async () => {
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
                  const tmp16 = v1(dependencyMap[7])();
                  if ("application" === obj3.type) {
                    v1 = 2;
                    v3 = 1;
                    const obj6 = { value: v3(dependencyMap[8]).fetchSocialLayerStorefrontSkuForApplication(tmp17.applicationId, first, tmp16), done: false };
                    return obj6;
                  } else {
                    obj3 = v3(dependencyMap[8]);
                    v1 = 1;
                    v3 = 1;
                    const obj7 = { value: obj3.fetchSocialLayerStorefrontSku(tmp17.guildId, first, tmp16), done: false };
                    return obj7;
                  }
                }
              } else {
                if (1 === tmp4) {
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
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp9) {
              v3 = tmp;
              throw tmp9;
            }
          }
        });
        if (!set.has(storefrontCodedLink)) {
          set.add(storefrontCodedLink);
          const result1 = tmp(17179).queueMessageLinkFetch(asyncGeneratorStep(async () => {
            if (c4 === 2) {
              c4 = 3;
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
                    closure_0 = tmp3;
                    c3 = 1;
                    c1 = 2;
                    c4 = 1;
                    const obj4 = { value: first(), done: false };
                    return obj4;
                  }
                } else if (1 === tmp7) {
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
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp23) {
                closure_2 = tmp23;
                if (tmp4 === c3) {
                  c4 = tmp2;
                  throw tmp23;
                } else {
                  c1 = tmp;
                }
              }
            }
          }));
          const tmpResult2 = tmp(17179);
        }
        const tmpResult = tmp(11026);
      }
      tmp4 = null != SKUStore.get(skuId) || SKUStore.isFetching(skuId) || SKUStore.didFetchingSkuFail(skuId);
    }
  }
  let obj = obj3(11026);
};