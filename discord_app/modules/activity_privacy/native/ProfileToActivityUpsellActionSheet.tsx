// === Module 14852: ProfileToActivityUpsellActionSheet ===

// Module 14852 (ProfileToActivityUpsellActionSheet)
import UserSettings from "UserSettings" /* 1935 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 14851 */;
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
  const items = [mappedActivityValue, direction, affectedGuildIds];
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