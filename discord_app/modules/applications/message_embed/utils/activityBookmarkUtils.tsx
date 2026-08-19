// discord_app/modules/applications/message_embed/utils/activityBookmarkUtils.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import isDiscordProxiedAssetUrlDefault from "../../../../utils/URLUtils.tsx";

const result = obj132.fileFinishedImporting("modules/applications/message_embed/utils/activityBookmarkUtils.tsx");

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