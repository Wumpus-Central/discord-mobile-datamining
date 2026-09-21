// === Module 7928: activityBookmarkUtils ===

// Module 7928 (activityBookmarkUtils)
import URLUtilsDefault from "URLUtils" /* 1366 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/applications/message_embed/utils/activityBookmarkUtils.tsx");

export const extractActivityBookmarkParams = function extractActivityBookmarkParams(url) {
  const toURLSafeResult = URLUtilsDefault.toURLSafe(url);
  value = undefined;
  if (toURLSafeResult != null) {
    const searchParams = toURLSafeResult.searchParams;
    value = searchParams.get("referrer_id");
  }
  const obj2 = { referrerId: value, customId: null, linkId: null };
  let value3;
  if (toURLSafeResult != null) {
    const searchParams2 = toURLSafeResult.searchParams;
    value3 = searchParams2.get("custom_id");
  }
  obj2.customId = value3;
  let value4;
  if (toURLSafeResult != null) {
    const searchParams3 = toURLSafeResult.searchParams;
    value4 = searchParams3.get("link_id");
  }
  obj2.linkId = value4;
  return obj2;
};