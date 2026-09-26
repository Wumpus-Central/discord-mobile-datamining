// === Module 11026: storefrontCodedLink ===

// Module 11026 (storefrontCodedLink)
import _slicedToArray from "module_32" /* 32 */;

function normalizeStorefrontSkuIds(items) {
  items = [];
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (re1.test(nextResult)) {
      if (!items.includes(tmp2)) {
        let arr = items.push(tmp2);
        if (6 === items.length) {
          iter.return();
          break;
        }
        return items;
      }
    }
    continue;
  }
}
const re1 = /^[0-9]+$/;
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/storefrontCodedLink.tsx");

export const MAX_STOREFRONT_EMBED_SKUS = 6;
export { normalizeStorefrontSkuIds };
export const makeStorefrontCodedLink = function makeStorefrontCodedLink(items, applicationId) {
  return "" + items.join(",") + "-" + applicationId;
};
export const parseStorefrontCodedLink = function parseStorefrontCodedLink(code) {
  const parts = code.split("-");
  if (2 !== parts.length) {
    return null;
  } else {
    [str, tmp3] = parts;
    if (re1.test(tmp3)) {
      const arr2 = normalizeStorefrontSkuIds(str.split(","));
      let tmp7 = null;
      if (0 !== arr2.length) {
        const obj = { scopeId: tmp3, skuIds: arr2 };
        tmp7 = obj;
      }
      return tmp7;
    } else {
      return null;
    }
    const tmp2 = _slicedToArray(parts, 2);
  }
};