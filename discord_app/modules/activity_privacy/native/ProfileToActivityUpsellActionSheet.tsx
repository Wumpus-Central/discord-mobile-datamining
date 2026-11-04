// === Module 17003: ProfileToActivityUpsellActionSheet ===

// Module 17003 (ProfileToActivityUpsellActionSheet)
import UserSettings from "UserSettings" /* 4966 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 17002 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/activity_privacy/native/ProfileToActivityUpsellActionSheet.tsx");

export default function ProfileToActivityUpsellActionSheet(direction) {
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const mappedActivityValue = direction.mappedActivityValue;
  const profileToActivityUpsellStrings = direction(mappedActivityValue[2]).getProfileToActivityUpsellStrings(direction === direction(mappedActivityValue[2]).ChangeDirection.RESTRICTING, direction.settingName);
  items = [mappedActivityValue, direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = profileToActivityUpsellStrings);
  const onConfirm = noop.useCallback(() => {
    const DefaultGuildsActivityRestrictedV2 = UserSettings.DefaultGuildsActivityRestrictedV2;
    DefaultGuildsActivityRestrictedV2.updateSetting(mappedActivityValue);
    const result = ActivityPrivacyUpsellUtils.applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  const onCardPress = noop.useCallback(() => {
    affectedGuildIds(mappedActivityValue[4]).hideActionSheet();
  }, []);
  return jsx(affectedGuildIds(mappedActivityValue[5]), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm, onCardPress });
};