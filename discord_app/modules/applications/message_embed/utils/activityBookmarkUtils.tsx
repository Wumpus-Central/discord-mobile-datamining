// === Module 7692: activityBookmarkUtils ===

// Module 7692 (activityBookmarkUtils)
import URLUtilsDefault from "URLUtils" /* 1365 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/applications/message_embed/utils/activityBookmarkUtils.tsx");

export const extractActivityBookmarkParams = function extractActivityBookmarkParams(url) {
  let obj = URLUtilsDefault;
  const toURLSafeResult = obj.toURLSafe(url);
  value = undefined;
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
  obj.customId = value;
  let value1;
  if (toURLSafeResult != null) {
    const searchParams3 = toURLSafeResult.searchParams;
    value1 = searchParams3.get("link_id");
  }
  obj.linkId = value1;
  return obj;
};