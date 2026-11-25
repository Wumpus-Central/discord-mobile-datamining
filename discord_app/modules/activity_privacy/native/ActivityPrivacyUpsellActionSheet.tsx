// === Module 17554: ActivityPrivacyUpsellActionSheet ===

// Module 17554 (ActivityPrivacyUpsellActionSheet)
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 16307 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx");

export default function ActivityPrivacyUpsellActionSheet(direction) {
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const upsellStrings = direction(16307).getUpsellStrings(direction === direction(16307).ChangeDirection.RESTRICTING, direction.settingName);
  items = [direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = upsellStrings);
  const onConfirm = noop.useCallback(() => {
    const result = ActivityPrivacyUpsellUtils.applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  return jsx(affectedGuildIds(16309), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm });
};