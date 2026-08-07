// discord_app/modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("computeAffectedGuilds").fileFinishedImporting("modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx");

export default function ActivityPrivacyUpsellActionSheet(direction) {
  let confirmText;
  let subtitle;
  let title;
  let toastContent;
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const upsellStrings = direction(14026).getUpsellStrings(direction === direction(14026).ChangeDirection.RESTRICTING, direction.settingName);
  const items = [direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = upsellStrings);
  const onConfirm = React.useCallback(() => {
    const result = direction(outer1_2[2]).applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  return jsx(affectedGuildIds(14028), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm });
};