// === Module 15050: ActivityPrivacyUpsellActionSheet ===

// Module 15050 (ActivityPrivacyUpsellActionSheet)
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx");

export default function ActivityPrivacyUpsellActionSheet(direction) {
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const upsellStrings = direction(14208).getUpsellStrings(direction === direction(14208).ChangeDirection.RESTRICTING, direction.settingName);
  const items = [direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = upsellStrings);
  const onConfirm = React.useCallback(() => {
    const result = direction(dependencyMap[2]).applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  return jsx(affectedGuildIds(14210), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm });
};