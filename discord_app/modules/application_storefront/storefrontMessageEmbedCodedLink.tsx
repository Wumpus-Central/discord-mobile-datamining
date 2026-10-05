// discord_app/modules/application_storefront/storefrontMessageEmbedCodedLink.tsx
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/application_storefront/storefrontMessageEmbedCodedLink.tsx");

export const makeStorefrontSKUCodedLink = function makeStorefrontSKUCodedLink(match7, match72) {
  return "" + match7 + ":" + match72;
};
export const parseStorefrontSkuCodedLink = function parseStorefrontSkuCodedLink(code) {
  const parts = code.split(":");
  if (2 !== parts.length) {
    return null;
  } else {
    const obj = { applicationId: null, skuId: null };
    [obj.applicationId, obj.skuId] = parts;
    _slicedToArray(parts, 2);
    return obj;
  }
};
