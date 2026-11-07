// === Module 18270: ActivityPrivacyUpsellActionSheet ===

// Module 18270 (ActivityPrivacyUpsellActionSheet)
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 17062 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx");

export default function ActivityPrivacyUpsellActionSheet(direction) {
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const upsellStrings = direction(17062).getUpsellStrings(direction === direction(17062).ChangeDirection.RESTRICTING, direction.settingName);
  items = [direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = upsellStrings);
  const onConfirm = noop.useCallback(() => {
    const result = ActivityPrivacyUpsellUtils.applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  return jsx(affectedGuildIds(17064), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm });
};