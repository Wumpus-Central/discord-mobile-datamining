// === Module 7835: activityBookmarkUtils ===

// Module 7835 (activityBookmarkUtils)
import URLUtilsDefault from "URLUtils" /* 1377 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/applications/message_embed/utils/activityBookmarkUtils.tsx");

export function getLinkChannelId(toURLSafeResult) {
  value = undefined;
  if (toURLSafeResult != null) {
    const searchParams = toURLSafeResult.searchParams;
    value = searchParams.get("channel_id");
  }
  return value;
}
export function extractActivityBookmarkParams(url) {
  const toURLSafeResult = URLUtilsDefault.toURLSafe(url);
  value = undefined;
  if (toURLSafeResult != null) {
    const searchParams = toURLSafeResult.searchParams;
    value = searchParams.get("referrer_id");
  }
  const obj2 = { referrerId: value, customId: null, linkId: null, channelId: null };
  let value4;
  if (toURLSafeResult != null) {
    const searchParams2 = toURLSafeResult.searchParams;
    value4 = searchParams2.get("custom_id");
  }
  obj2.customId = value4;
  let value5;
  if (toURLSafeResult != null) {
    const searchParams3 = toURLSafeResult.searchParams;
    value5 = searchParams3.get("link_id");
  }
  obj2.linkId = value5;
  let value6;
  if (toURLSafeResult != null) {
    const searchParams4 = toURLSafeResult.searchParams;
    value6 = searchParams4.get("channel_id");
  }
  obj2.channelId = value6;
  return obj2;
}