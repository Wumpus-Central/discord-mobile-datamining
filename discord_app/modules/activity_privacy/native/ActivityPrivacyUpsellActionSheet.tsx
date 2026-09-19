// === Module 16229: ActivityPrivacyUpsellActionSheet ===

// Module 16229 (ActivityPrivacyUpsellActionSheet)
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 15123 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx");

export default function ActivityPrivacyUpsellActionSheet(direction) {
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const upsellStrings = direction(15123).getUpsellStrings(direction === direction(15123).ChangeDirection.RESTRICTING, direction.settingName);
  const items = [direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = upsellStrings);
  const onConfirm = noop.useCallback(() => {
    const result = ActivityPrivacyUpsellUtils.applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  return jsx(affectedGuildIds(15125), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm });
};