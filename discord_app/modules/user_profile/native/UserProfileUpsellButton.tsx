// === Module 14420: UserProfileUpsellButton ===

// Module 14420 (UserProfileUpsellButton)
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8818 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let analyticsObject, obj1, obj5, obj6, trackResult;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ AnalyticsPages: closure_4, UpsellTypes: hasOwnProperty, AnalyticsSections: metroRequire, AnalyticEvents: metroImportDefault } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
const jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles({ nitroWheel: { marginRight: 2 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((analyticsObject) => {
  let analyticsLocations;
  let obj = analyticsObject(576);
  const cResult = obj.c(16);
  analyticsObject = analyticsObject.analyticsObject;
  const label = analyticsObject.label;
  const tmp4 = closure_10();
  analyticsLocations = analyticsLocations(6657)().analyticsLocations;
  let obj2 = analyticsObject(6955);
  const nitroTrialCtaOverride = obj2.useNitroTrialCtaOverride("user_profile_upsell_button");
  if (cResult[0] === analyticsLocations) {
    let tmp6;
    let tmp7;
    if (cResult[1] === analyticsObject) {
      tmp6 = cResult[2];
      tmp7 = cResult[3];
    }
    const effect = react.useEffect(tmp6, tmp7);
    if (cResult[4] === analyticsLocations) {
      let tmp10;
      if (cResult[5] === analyticsObject) {
        tmp10 = cResult[6];
      }
      if (cResult[7] === label) {
        let tmp11;
        let tmp14;
        if (cResult[8] === nitroTrialCtaOverride) {
          tmp11 = cResult[9];
        }
        if (cResult[10] !== tmp4.nitroWheel) {
          const tmp16 = jsx(analyticsObject(8313).NitroWheelIcon, { color: "white", size: "sm", style: tmp4.nitroWheel });
          class T {
            constructor() {
              obj = closure_1(closure_2[10]);
              obj1 = { initialUpsellKey: UpsellTypes.CUSTOM_PROFILES, analyticsLocation: null, analyticsLocations, analyticsProperties: null };
              obj5 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.USER_PROFILE, object: analyticsObject };
              obj1.analyticsLocation = obj5;
              obj6 = { type: PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL };
              obj1.analyticsProperties = obj6;
              result = obj.handleShowUpsellAlert(obj1);
              return;
            }
          }
          cResult[10] = tmp4.nitroWheel;
          cResult[11] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[11];
        }
        if (cResult[12] === tmp10) {
          if (cResult[13] === tmp11) {
            let tmp17;
            if (cResult[14] === tmp14) {
              tmp17 = cResult[15];
            }
            return tmp17;
          }
        }
        class T {
          constructor() {
            obj = closure_1(closure_2[10]);
            obj1 = { initialUpsellKey: UpsellTypes.CUSTOM_PROFILES, analyticsLocation: null, analyticsLocations, analyticsProperties: null };
            obj5 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.USER_PROFILE, object: analyticsObject };
            obj1.analyticsLocation = obj5;
            obj6 = { type: PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL };
            obj1.analyticsProperties = obj6;
            result = obj.handleShowUpsellAlert(obj1);
            return;
          }
        }
        tmp19[0] = tmp10;
        tmp19[2] = tmp11;
        tmp19[3] = tmp14;
        const tmp20 = jsx(analyticsObject(5594).Button, tmp19);
        cResult[12] = tmp10;
        cResult[13] = tmp11;
        cResult[14] = tmp14;
        cResult[15] = tmp20;
        tmp17 = tmp20;
      }
      let stringResult = nitroTrialCtaOverride;
      class T {
        constructor() {
          obj = closure_1(closure_2[10]);
          obj1 = { initialUpsellKey: UpsellTypes.CUSTOM_PROFILES, analyticsLocation: null, analyticsLocations, analyticsProperties: null };
          obj5 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.USER_PROFILE, object: analyticsObject };
          obj1.analyticsLocation = obj5;
          obj6 = { type: PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL };
          obj1.analyticsProperties = obj6;
          result = obj.handleShowUpsellAlert(obj1);
          return;
        }
      }
      if (stringResult == null) {
        const intl = tmp(1126).intl;
        stringResult = intl.string(tmp(1126).t.pj0XBN);
      }
      cResult[7] = label;
      cResult[8] = nitroTrialCtaOverride;
      cResult[9] = stringResult;
      tmp11 = stringResult;
    }
    class T {
      constructor() {
        obj = closure_1(closure_2[10]);
        obj1 = { initialUpsellKey: UpsellTypes.CUSTOM_PROFILES, analyticsLocation: null, analyticsLocations, analyticsProperties: null };
        obj5 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.USER_PROFILE, object: analyticsObject };
        obj1.analyticsLocation = obj5;
        obj6 = { type: PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL };
        obj1.analyticsProperties = obj6;
        result = obj.handleShowUpsellAlert(obj1);
        return;
      }
    }
    cResult[4] = analyticsLocations;
    cResult[5] = analyticsObject;
    cResult[6] = T;
    tmp10 = T;
  }
  class U {
    constructor() {
      obj = closure_1(closure_2[9]);
      obj1 = { type: PremiumUpsellTypes.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON, location: null, location_stack: analyticsLocations };
      obj4 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.USER_PROFILE, object: analyticsObject };
      obj1.location = obj4;
      trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
      return;
    }
  }
  const items = [analyticsLocations, analyticsObject];
  cResult[0] = analyticsLocations;
  cResult[1] = analyticsObject;
  cResult[2] = U;
  cResult[3] = items;
  tmp7 = items;
  tmp6 = U;
}) : ((analyticsObject) => {
  analyticsObject = analyticsObject.analyticsObject;
  let analyticsLocations;
  const label = analyticsObject.label;
  const tmp = closure_10();
  analyticsLocations = analyticsLocations(6657)().analyticsLocations;
  let obj = analyticsObject(6955);
  let nitroTrialCtaOverride = obj.useNitroTrialCtaOverride("user_profile_upsell_button");
  const items = [analyticsLocations, analyticsObject];
  const effect = react.useEffect(() => {
    let obj3;
    const obj2 = { type: PremiumUpsellTypes.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON, location: obj3, location_stack: analyticsLocations };
    obj3 = { page: constants.USER_SETTINGS, section: metroRequire.USER_PROFILE, object: analyticsObject };
    const obj = AnalyticsUtilsDefault;
    obj.track(metroImportDefault.PREMIUM_UPSELL_VIEWED, obj2);
  }, items);
  const Button = analyticsObject(5594).Button;
  if (nitroTrialCtaOverride == null) {
    nitroTrialCtaOverride = label;
  }
  if (nitroTrialCtaOverride == null) {
    const intl = tmp3(1126).intl;
    nitroTrialCtaOverride = intl.string(tmp3(1126).t.pj0XBN);
  }
  let obj3 = { color: "white", size: "sm", style: tmp.nitroWheel };
  return <Button onPress={function onPress() {
    let obj3;
    let obj4;
    const obj2 = { initialUpsellKey: hasOwnProperty.CUSTOM_PROFILES, analyticsLocation: obj3, analyticsLocations, analyticsProperties: obj4 };
    obj3 = { page: constants.USER_SETTINGS, section: metroRequire.USER_PROFILE, object: analyticsObject };
    obj4 = { type: PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL };
    const obj = PremiumUpsellUtilsDefault;
    const result = obj.handleShowUpsellAlert(obj2);
  }} variant="active" text={nitroTrialCtaOverride} icon={null} />;
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileUpsellButton.tsx");

export default tmp3;