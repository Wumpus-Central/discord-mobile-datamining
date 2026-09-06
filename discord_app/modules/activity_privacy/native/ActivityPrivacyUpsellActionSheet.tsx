// discord_app/modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx
import ActivityPrivacyUpsellUtils from "../ActivityPrivacyUpsellUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx");

export default function ActivityPrivacyUpsellActionSheet(direction) {
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const upsellStrings = direction(14851).getUpsellStrings(
    direction === direction(14851).ChangeDirection.RESTRICTING,
    direction.settingName,
  );
  const items = [direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = upsellStrings);
  const onConfirm = noop.useCallback(() => {
    const result = ActivityPrivacyUpsellUtils.applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  return jsx(affectedGuildIds(14853), {
    direction,
    affectedGuildIds,
    title,
    subtitle,
    confirmText,
    toastContent,
    onConfirm,
  });
}
