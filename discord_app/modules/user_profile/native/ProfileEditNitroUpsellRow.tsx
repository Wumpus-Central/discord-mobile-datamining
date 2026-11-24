// === Module 15886: ProfileEditNitroUpsellRow ===

// Module 15886 (ProfileEditNitroUpsellRow)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9453 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9456 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1071);
({ AnalyticEvents: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: closure_6, UpsellTypes: metroImportDefault } = Constants);
const PremiumUpsellTypes = fn(1388).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/ProfileEditNitroUpsellRow.tsx");

export default function ProfileEditNitroUpsellRow(analyticsObject) {
  analyticsObject = analyticsObject.analyticsObject;
  const skipRoadblock = analyticsObject.skipRoadblock;
  let analyticsLocations;
  let memo;
  ({ label, subLabel } = analyticsObject);
  analyticsLocations = skipRoadblock(analyticsLocations[4])().analyticsLocations;
  items = [analyticsObject];
  memo = memo.useMemo(() => ({ page: constants2.USER_SETTINGS, section: constants3.USER_PROFILE, object: analyticsObject }), items);
  const onViewAllPerks = analyticsObject(analyticsLocations[5]).usePremiumUpsellConfig(constants4.CUSTOM_PROFILES, analyticsLocations, memo).onViewAllPerks;
  const items1 = [memo, analyticsLocations];
  const effect = memo.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, { type: PremiumUpsellTypes.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON, location: memo, location_stack: analyticsLocations });
  }, items1);
  const items2 = [skipRoadblock, onViewAllPerks, analyticsLocations];
  const callback = memo.useCallback(() => {
    if (skipRoadblock) {
      onViewAllPerks();
    } else {
      openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.PROFILE_PREMIUM_FEATURES, analyticsLocations, "stack");
    }
  }, items2);
  const obj = analyticsObject(analyticsLocations[5]);
  return jsx(analyticsObject(analyticsLocations[9]).TableRow, { label, subLabel: jsx(skipRoadblock(analyticsLocations[10]), { text: subLabel }), onPress: callback });
};