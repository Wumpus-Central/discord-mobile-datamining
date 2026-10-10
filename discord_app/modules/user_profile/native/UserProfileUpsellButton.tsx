// === Module 14821: UserProfileUpsellButton ===

// Module 14821 (UserProfileUpsellButton)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9269 */;
import noop from "module_19" /* 19 */;

const require = fn;
const Constants = fn(1085);
({ AnalyticsPages: closure_4, UpsellTypes: hasOwnProperty, AnalyticsSections: metroRequire, AnalyticEvents: closure_7 } = Constants);
const PremiumUpsellTypes = fn(1392).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_10 = createStyles.createStyles({ nitroWheel: { marginRight: 2 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileUpsellButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileUpsellButton(analyticsObject) {
  const cResult = analyticsObject(576).c(16);
  analyticsObject = analyticsObject.analyticsObject;
  const label = analyticsObject.label;
  const tmp4 = closure_10();
  analyticsLocations = analyticsLocations(6851)().analyticsLocations;
  const obj = analyticsObject(576);
  const nitroTrialCtaOverride = analyticsObject(7168).useNitroTrialCtaOverride("user_profile_upsell_button");
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === analyticsObject) {
      let tmp6 = cResult[2];
      let tmp7 = cResult[3];
    }
    const effect = noop.useEffect(tmp6, tmp7);
    if (cResult[4] === analyticsLocations) {
      if (cResult[5] === analyticsObject) {
        let tmp10 = cResult[6];
      }
      if (cResult[7] === label) {
        if (cResult[8] === nitroTrialCtaOverride) {
          let tmp11 = cResult[9];
        }
        if (cResult[10] !== tmp4.nitroWheel) {
          const obj3 = { color: "white", size: "sm", style: tmp4.nitroWheel };
          const tmp16 = jsx(tmp(9035).NitroWheelIcon, { color: "white", size: "sm", style: tmp4.nitroWheel });
          cResult[10] = tmp4.nitroWheel;
          cResult[11] = tmp16;
          let tmp14 = tmp16;
        } else {
          tmp14 = cResult[11];
        }
        if (cResult[12] === tmp10) {
          if (cResult[13] === tmp11) {
            if (cResult[14] === tmp14) {
              let tmp17 = cResult[15];
            }
            return tmp17;
          }
        }
        const obj4 = { onPress: tmp10, variant: "active", text: tmp11, icon: tmp14 };
        const tmp19 = jsx(tmp(5379).Button, { onPress: tmp10, variant: "active", text: tmp11, icon: tmp14 });
        cResult[12] = tmp10;
        cResult[13] = tmp11;
        cResult[14] = tmp14;
        cResult[15] = tmp19;
        tmp17 = tmp19;
      }
      let stringResult = nitroTrialCtaOverride;
      if (nitroTrialCtaOverride == null) {
        stringResult = label;
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
    const fn = function u() {
      const obj2 = { initialUpsellKey: constants2.CUSTOM_PROFILES, analyticsLocation: { page: constants.USER_SETTINGS, section: constants3.USER_PROFILE, object: analyticsObject }, analyticsLocations, analyticsProperties: { type: PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL } };
      const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
    };
    cResult[4] = analyticsLocations;
    cResult[5] = analyticsObject;
    cResult[6] = fn;
    tmp10 = fn;
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
  let obj2 = analyticsObject(7168);
}) : (function UserProfileUpsellButton(analyticsObject) {
  analyticsObject = analyticsObject.analyticsObject;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(6851)().analyticsLocations;
  const tmp = closure_10();
  let label = analyticsObject(7168).useNitroTrialCtaOverride("user_profile_upsell_button");
  const items = [analyticsLocations, analyticsObject];
  const effect = noop.useEffect(() => {
    const obj2 = { type: PremiumUpsellTypes.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON, location: { page: constants.USER_SETTINGS, section: constants3.USER_PROFILE, object: analyticsObject }, location_stack: analyticsLocations };
    AnalyticsUtilsDefault.track(constants4.PREMIUM_UPSELL_VIEWED, obj2);
  }, items);
  let obj2 = {
    onPress() {
      const obj2 = { initialUpsellKey: constants2.CUSTOM_PROFILES, analyticsLocation: { page: constants.USER_SETTINGS, section: constants3.USER_PROFILE, object: analyticsObject }, analyticsLocations, analyticsProperties: { type: PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL } };
      const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
    },
    variant: "active",
    text: null,
    icon: null
  };
  if (label == null) {
    label = analyticsObject.label;
  }
  if (label == null) {
    const intl = tmp3(1126).intl;
    label = intl.string(tmp3(1126).t.pj0XBN);
  }
  obj2.text = label;
  obj2.icon = jsx(analyticsObject(9035).NitroWheelIcon, { color: "white", size: "sm", style: tmp.nitroWheel });
  return jsx(analyticsObject(5379).Button, {
    onPress() {
      const obj2 = { initialUpsellKey: constants2.CUSTOM_PROFILES, analyticsLocation: { page: constants.USER_SETTINGS, section: constants3.USER_PROFILE, object: analyticsObject }, analyticsLocations, analyticsProperties: { type: PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL } };
      const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
    },
    variant: "active",
    text: null,
    icon: null
  });
});