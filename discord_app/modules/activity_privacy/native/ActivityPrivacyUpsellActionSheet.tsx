// === Module 15287: ActivityPrivacyUpsellActionSheet ===

// Module 15287 (ActivityPrivacyUpsellActionSheet)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx");

export default function ActivityPrivacyUpsellActionSheet(direction) {
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const upsellStrings = direction(14406).getUpsellStrings(direction === direction(14406).ChangeDirection.RESTRICTING, direction.settingName);
  const items = [direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = upsellStrings);
  const onConfirm = React.useCallback(() => {
    const result = direction(closure_1_2[2]).applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  return jsx(affectedGuildIds(14408), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm });
};