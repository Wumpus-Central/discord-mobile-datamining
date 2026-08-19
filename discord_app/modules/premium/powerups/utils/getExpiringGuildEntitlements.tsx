// discord_app/modules/premium/powerups/utils/getExpiringGuildEntitlements.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/premium/powerups/utils/getExpiringGuildEntitlements.tsx");

export const getExpiringGuildEntitlements = function getExpiringGuildEntitlements(items) {
  const found = items.filter((item, index) => null != item.ends_at);
  return found.sort((ends_at, ends_at2) => {
    let num = 1;
    if (ends_at.ends_at < ends_at2.ends_at) {
      num = -1;
    }
    return num;
  });
};