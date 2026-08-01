// === Module 5979: makeStorefrontSKUCodedLink ===

// Module 5979 (makeStorefrontSKUCodedLink)
import _slicedToArray from "_slicedToArray";

const result = require("set").fileFinishedImporting("modules/application_storefront/storefrontMessageEmbedCodedLink.tsx");

export const makeStorefrontSKUCodedLink = function makeStorefrontSKUCodedLink(formatted, formatted2) {
  return "" + formatted + ":" + formatted2;
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