// discord_app/modules/applications/message_embed/utils/activityBookmarkUtils.tsx
import URLUtilsDefault from "../../../../utils/URLUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/applications/message_embed/utils/activityBookmarkUtils.tsx");

export const extractActivityBookmarkParams = function extractActivityBookmarkParams(url) {
  let value3;
  let value4;
  const obj = URLUtilsDefault;
  const toURLSafeResult = obj.toURLSafe(url);
  let value;
  if (toURLSafeResult != null) {
    const searchParams = toURLSafeResult.searchParams;
    value = searchParams.get("referrer_id");
  }
  const obj2 = { referrerId: value, customId: value3, linkId: value4 };
  value3 = undefined;
  if (toURLSafeResult != null) {
    const searchParams2 = toURLSafeResult.searchParams;
    value3 = searchParams2.get("custom_id");
  }
  value4 = undefined;
  if (toURLSafeResult != null) {
    const searchParams3 = toURLSafeResult.searchParams;
    value4 = searchParams3.get("link_id");
  }
  return obj2;
};
