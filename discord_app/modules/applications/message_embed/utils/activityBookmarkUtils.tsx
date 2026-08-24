// === Module 7482: extractActivityBookmarkParams ===

// Module 7482 (extractActivityBookmarkParams)
import set from "set" /* 2 */;
import isDiscordProxiedAssetUrlDefault from "isDiscordProxiedAssetUrl" /* 1487 */;

const result = set.fileFinishedImporting("modules/applications/message_embed/utils/activityBookmarkUtils.tsx");

export const extractActivityBookmarkParams = function extractActivityBookmarkParams(url) {
  let obj = isDiscordProxiedAssetUrlDefault;
  const toURLSafeResult = obj.toURLSafe(url);
  let value;
  if (toURLSafeResult != null) {
    const searchParams = toURLSafeResult.searchParams;
    value = searchParams.get("referrer_id");
  }
  obj = { referrerId: value, customId: null, linkId: null };
  value = undefined;
  if (toURLSafeResult != null) {
    const searchParams2 = toURLSafeResult.searchParams;
    value = searchParams2.get("custom_id");
  }
  obj[1] = value;
  let value1;
  if (toURLSafeResult != null) {
    const searchParams3 = toURLSafeResult.searchParams;
    value1 = searchParams3.get("link_id");
  }
  obj[2] = value1;
  return obj;
};