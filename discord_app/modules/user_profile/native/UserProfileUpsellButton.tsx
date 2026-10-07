// === Module 14436: UserProfileUpsellButton ===

// Module 14436 (UserProfileUpsellButton)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8848 */;
import noop from "module_19" /* 19 */;

const require = fn;
const Constants = fn(1085);
({ AnalyticsPages: closure_4, UpsellTypes: hasOwnProperty, AnalyticsSections: metroRequire, AnalyticEvents: closure_7 } = Constants);
const PremiumUpsellTypes = fn(1379).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_10 = createStyles.createStyles({ nitroWheel: { marginRight: 2 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileUpsellButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((analyticsObject) => {
  const cResult = analyticsObject(576).c(16);
  analyticsObject = analyticsObject.analyticsObject;
  const label = analyticsObject.label;
  const tmp4 = closure_10();
  analyticsLocations = analyticsLocations(6664)().analyticsLocations;
  const obj = analyticsObject(576);
  const nitroTrialCtaOverride = analyticsObject(6968).useNitroTrialCtaOverride("user_profile_upsell_button");
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
          const tmp16 = jsx(tmp(8346).NitroWheelIcon, { color: "white", size: "sm", style: tmp4.nitroWheel });
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
        const tmp20 = jsx(tmp(5601).Button, tmp19);
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
  let obj2 = analyticsObject(6968);
}) : ((analyticsObject) => {
  analyticsObject = analyticsObject.analyticsObject;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(6664)().analyticsLocations;
  const tmp = closure_10();
  let label = analyticsObject(6968).useNitroTrialCtaOverride("user_profile_upsell_button");
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
  obj2.icon = jsx(analyticsObject(8346).NitroWheelIcon, { color: "white", size: "sm", style: tmp.nitroWheel });
  return jsx(analyticsObject(5601).Button, {
    onPress() {
      const obj2 = { initialUpsellKey: constants2.CUSTOM_PROFILES, analyticsLocation: { page: constants.USER_SETTINGS, section: constants3.USER_PROFILE, object: analyticsObject }, analyticsLocations, analyticsProperties: { type: PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL } };
      const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
    },
    variant: "active",
    text: null,
    icon: null
  });
});