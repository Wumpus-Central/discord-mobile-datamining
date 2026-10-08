// === Module 14937: ProfileToActivityUpsellActionSheet ===

// Module 14937 (ProfileToActivityUpsellActionSheet)
import UserSettings from "UserSettings" /* 2040 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 14936 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/activity_privacy/native/ProfileToActivityUpsellActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileToActivityUpsellActionSheet(direction) {
  const cResult = direction(mappedActivityValue[3]).c(16);
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  ({ settingName, mappedActivityValue } = direction);
  const tmp4 = direction === direction(mappedActivityValue[4]).ChangeDirection.RESTRICTING;
  if (cResult[0] === tmp4) {
    if (cResult[1] === settingName) {
      let tmp5 = cResult[2];
    }
    ({ title, subtitle, confirmText, toastContent } = tmp5);
    if (cResult[3] === affectedGuildIds) {
      if (cResult[4] === direction) {
        if (cResult[5] === mappedActivityValue) {
          let tmp7 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor() {
              obj = affectedGuildIds(mappedActivityValue[6]);
              hideActionSheetResult = obj.hideActionSheet();
              return;
            }
          }
          cResult[7] = S;
        } else {
          class S {
            constructor() {
              obj = affectedGuildIds(mappedActivityValue[6]);
              hideActionSheetResult = obj.hideActionSheet();
              return;
            }
          }
        }
        if (cResult[8] === affectedGuildIds) {
          class S {
            constructor() {
              obj = affectedGuildIds(mappedActivityValue[6]);
              hideActionSheetResult = obj.hideActionSheet();
              return;
            }
          }
        }
        const obj2 = { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm: tmp7, onCardPress: S };
        const tmp13 = jsx(affectedGuildIds(mappedActivityValue[7]), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm: tmp7, onCardPress: S });
        cResult[8] = affectedGuildIds;
        cResult[9] = confirmText;
        cResult[10] = direction;
        cResult[11] = tmp7;
        cResult[12] = subtitle;
        cResult[13] = title;
        cResult[14] = toastContent;
        cResult[15] = tmp13;
      }
    }
    const fn = function v() {
      const DefaultGuildsActivityRestrictedV2 = UserSettings.DefaultGuildsActivityRestrictedV2;
      DefaultGuildsActivityRestrictedV2.updateSetting(mappedActivityValue);
      const result = ActivityPrivacyUpsellUtils.applyBulkGuildRestrictionChange(direction, affectedGuildIds);
    };
    cResult[3] = affectedGuildIds;
    cResult[4] = direction;
    cResult[5] = mappedActivityValue;
    cResult[6] = fn;
    tmp7 = fn;
  }
  const obj = direction(mappedActivityValue[3]);
  const profileToActivityUpsellStrings = direction(mappedActivityValue[4]).getProfileToActivityUpsellStrings(tmp4, settingName);
  cResult[0] = tmp4;
  cResult[1] = settingName;
  cResult[2] = profileToActivityUpsellStrings;
  tmp5 = profileToActivityUpsellStrings;
  const tmpResult = direction(mappedActivityValue[4]);
}) : (function ProfileToActivityUpsellActionSheet(direction) {
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const mappedActivityValue = direction.mappedActivityValue;
  const profileToActivityUpsellStrings = direction(mappedActivityValue[4]).getProfileToActivityUpsellStrings(direction === direction(mappedActivityValue[4]).ChangeDirection.RESTRICTING, direction.settingName);
  const items = [mappedActivityValue, direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = profileToActivityUpsellStrings);
  const onConfirm = noop.useCallback(() => {
    const DefaultGuildsActivityRestrictedV2 = UserSettings.DefaultGuildsActivityRestrictedV2;
    DefaultGuildsActivityRestrictedV2.updateSetting(mappedActivityValue);
    const result = ActivityPrivacyUpsellUtils.applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  const onCardPress = noop.useCallback(() => {
    affectedGuildIds(mappedActivityValue[6]).hideActionSheet();
  }, []);
  return jsx(affectedGuildIds(mappedActivityValue[7]), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm, onCardPress });
});