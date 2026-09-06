// discord_app/modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx
import closure_3 from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let result = require("set").fileFinishedImporting(
  "modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx",
);

export default function ActivityPrivacyUpsellActionSheet(direction) {
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const upsellStrings = direction(14851).getUpsellStrings(
    direction === direction(14851).ChangeDirection.RESTRICTING,
    direction.settingName,
  );
  const items = [direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = upsellStrings);
  const onConfirm = React.useCallback(() => {
    const result = direction(closure_1_2[2]).applyBulkGuildRestrictionChange(direction, affectedGuildIds);
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
