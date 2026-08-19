// === Module 4379: makeStorefrontSKUCodedLink ===

// Module 4379 (makeStorefrontSKUCodedLink)
import _slicedToArray from "_slicedToArray" /* 32 */;

const result = require("obj132").fileFinishedImporting("modules/application_storefront/storefrontMessageEmbedCodedLink.tsx");

export const makeStorefrontSKUCodedLink = function makeStorefrontSKUCodedLink(match7, match72) {
  return "" + match7 + ":" + match72;
};
export const parseStorefrontSkuCodedLink = function parseStorefrontSkuCodedLink(code) {
  const parts = code.split(":");
  if (2 !== parts.length) {
    return null;
  } else {
    const obj = { applicationId: null, skuId: null };
    [obj[0], obj[1]] = callback(parts, 2);
    return obj;
  }
};