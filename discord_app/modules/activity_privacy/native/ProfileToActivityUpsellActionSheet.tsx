// === Module 14660: ProfileToActivityUpsellActionSheet ===

// Module 14660 (ProfileToActivityUpsellActionSheet)
import Fragment from "Fragment" /* 21 */;
import UserSettings from "UserSettings" /* 2028 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 14659 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let direction;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((direction) => {
  let confirmText;
  let mappedActivityValue;
  let settingName;
  let subtitle;
  let title;
  let toastContent;
  let obj = direction(mappedActivityValue[3]);
  const cResult = obj.c(16);
  const tmp = direction;
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  ({ settingName, mappedActivityValue } = direction);
  const tmp4 = direction === direction(mappedActivityValue[4]).ChangeDirection.RESTRICTING;
  if (cResult[0] === tmp4) {
    let tmp5;
    if (cResult[1] === settingName) {
      tmp5 = cResult[2];
    }
    ({ title, subtitle, confirmText, toastContent } = tmp5);
    if (cResult[3] === affectedGuildIds) {
      if (cResult[4] === direction) {
        let tmp7;
        if (cResult[5] === mappedActivityValue) {
          tmp7 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class G {
            constructor() {
              const obj = affectedGuildIds(mappedActivityValue[6]);
              obj.hideActionSheet();
            }
          }
          cResult[7] = G;
        } else {
          class G {
            constructor() {
              const obj = affectedGuildIds(mappedActivityValue[6]);
              obj.hideActionSheet();
            }
          }
        }
        if (cResult[8] === affectedGuildIds) {
          class G {
            constructor() {
              const obj = affectedGuildIds(mappedActivityValue[6]);
              obj.hideActionSheet();
            }
          }
        }
        cResult[8] = affectedGuildIds;
        cResult[9] = confirmText;
        cResult[10] = direction;
        cResult[11] = tmp7;
        cResult[12] = subtitle;
        cResult[13] = title;
        cResult[14] = toastContent;
        cResult[15] = jsx(affectedGuildIds(mappedActivityValue[7]), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm: tmp7, onCardPress: G });
        const tmp13 = jsx(affectedGuildIds(mappedActivityValue[7]), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm: tmp7, onCardPress: G });
      }
    }
    const fn = function v() {
      const DefaultGuildsActivityRestrictedV2 = UserSettings.DefaultGuildsActivityRestrictedV2;
      DefaultGuildsActivityRestrictedV2.updateSetting(mappedActivityValue);
      const obj = ActivityPrivacyUpsellUtils;
      const result = obj.applyBulkGuildRestrictionChange(direction, affectedGuildIds);
    };
    cResult[3] = affectedGuildIds;
    cResult[4] = direction;
    cResult[5] = mappedActivityValue;
    cResult[6] = fn;
    tmp7 = fn;
  }
  const tmpResult = tmp(mappedActivityValue[4]);
  const profileToActivityUpsellStrings = tmpResult.getProfileToActivityUpsellStrings(tmp4, settingName);
  cResult[0] = tmp4;
  cResult[1] = settingName;
  cResult[2] = profileToActivityUpsellStrings;
  tmp5 = profileToActivityUpsellStrings;
}) : ((direction) => {
  let confirmText;
  let subtitle;
  let title;
  let toastContent;
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const mappedActivityValue = direction.mappedActivityValue;
  const settingName = direction.settingName;
  const RESTRICTING = direction(mappedActivityValue[4]).ChangeDirection.RESTRICTING;
  let obj = direction(mappedActivityValue[4]);
  const profileToActivityUpsellStrings = obj.getProfileToActivityUpsellStrings(direction === RESTRICTING, settingName);
  const items = [mappedActivityValue, direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = profileToActivityUpsellStrings);
  const onConfirm = react.useCallback(() => {
    const DefaultGuildsActivityRestrictedV2 = UserSettings.DefaultGuildsActivityRestrictedV2;
    DefaultGuildsActivityRestrictedV2.updateSetting(mappedActivityValue);
    const obj = ActivityPrivacyUpsellUtils;
    const result = obj.applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  const onCardPress = react.useCallback(() => {
    const obj = affectedGuildIds(mappedActivityValue[6]);
    obj.hideActionSheet();
  }, []);
  return jsx(affectedGuildIds(mappedActivityValue[7]), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm, onCardPress });
});
let result = size.fileFinishedImporting("modules/activity_privacy/native/ProfileToActivityUpsellActionSheet.tsx");

export default tmp2;