// === Module 14209: ProfileToActivityUpsellActionSheet ===

// Module 14209 (ProfileToActivityUpsellActionSheet)
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/activity_privacy/native/ProfileToActivityUpsellActionSheet.tsx");

export default function ProfileToActivityUpsellActionSheet(direction) {
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const mappedActivityValue = direction.mappedActivityValue;
  const profileToActivityUpsellStrings = direction(mappedActivityValue[2]).getProfileToActivityUpsellStrings(direction === direction(mappedActivityValue[2]).ChangeDirection.RESTRICTING, direction.settingName);
  const items = [mappedActivityValue, direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = profileToActivityUpsellStrings);
  const onConfirm = React.useCallback(() => {
    const DefaultGuildsActivityRestrictedV2 = direction(mappedActivityValue[3]).DefaultGuildsActivityRestrictedV2;
    DefaultGuildsActivityRestrictedV2.updateSetting(mappedActivityValue);
    const result = direction(mappedActivityValue[2]).applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  const onCardPress = React.useCallback(() => {
    affectedGuildIds(mappedActivityValue[4]).hideActionSheet();
  }, []);
  return jsx(affectedGuildIds(mappedActivityValue[5]), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm, onCardPress });
};