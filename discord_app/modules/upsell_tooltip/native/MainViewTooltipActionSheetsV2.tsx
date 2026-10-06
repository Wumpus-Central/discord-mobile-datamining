// === Module 17134: MainViewTooltipActionSheetsV2 ===

// Module 17134 (MainViewTooltipActionSheetsV2)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig" /* 2040 */;
import DismissibleContentTypes from "DismissibleContentTypes" /* 2041 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import "react";
import react_mod from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4567 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let metroImportAll;
let metroImportDefault;
let tmp3;
function GiftingBadgesCoachmarkImporter() {
  return asyncRequire(17148, dependencyMap.paths);
}
function AppIconsCoachMarkImporter() {
  return asyncRequire(17135, dependencyMap.paths);
}
function RobloxConnectionCoachmarkImporter() {
  return asyncRequire(17138, dependencyMap.paths);
}
function DisplayNameStylesFlywheelMobileActionSheetImporter() {
  return asyncRequire(17144, dependencyMap.paths);
}
function CollectiblesMobileAnnouncementActionSheetImporter() {
  return asyncRequire(17154, dependencyMap.paths);
}
function NitroFileUploadAnnouncementPromoSheetImporter() {
  return asyncRequire(17159, dependencyMap.paths);
}
function NitroFileUploadUpsellPromoSheetImporter() {
  return asyncRequire(17162, dependencyMap.paths);
}
function CustomTypingIndicatorAnnounceActionSheetImporter() {
  return asyncRequire(11596, dependencyMap.paths);
}
class GiftingPromotionCoachmarkImporter {
  constructor() {
    return asyncRequire(17137, dependencyMap.paths);
  }
}
class PremiumMarketingMomentActionSheetImporter {
  constructor() {
    return asyncRequire(17141, dependencyMap.paths);
  }
}
class ConnectionDeprecationActionSheetImporter {
  constructor() {
    return asyncRequire(17150, dependencyMap.paths);
  }
}
function trackActionSheetImpression(actionSheetConfig) {
  let CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  let str;
  const tmp = null != ActionSheetStore.getContent();
  const tmp3 = AnalyticsUtilsDefault;
  const track = tmp3.track;
  const MAIN_VIEW_ACTION_SHEET_SELECTED = AnalyticEvents.MAIN_VIEW_ACTION_SHEET_SELECTED;
  const id = actionSheetConfig.id;
  const obj = { dc_id: dismissible_content.DismissibleContent[actionSheetConfig.id], dc_type: str, bypass_fatigue: CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(actionSheetConfig.id), is_another_action_sheet_open: tmp };
  str = "snowflake_bound";
  const obj2 = DismissibleContentTypes;
  if (!obj2.isSnowflakeBoundDismissibleContent(id)) {
    let str2 = "versioned";
    const tmp4Result = DismissibleContentTypes;
    if (!tmp4Result.isVersionedDismissibleContent(id)) {
      let str3 = "single_use";
      const tmp4Result2 = DismissibleContentTypes;
      if (tmp4Result2.isTimeRecurringDismissibleContent(id)) {
        str3 = "time_recurring";
      }
      str2 = str3;
    }
    str = str2;
  }
  CONTENT_TYPES_WITH_BYPASS_FATIGUE = DismissibleContentFatigueConfig.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  track(MAIN_VIEW_ACTION_SHEET_SELECTED, obj);
}
let closure_3 = ["actionSheetConfig", "hasTrackedRef"];
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ useEffect: metroImportDefault, useMemo: metroImportAll, useRef: c9 } = react);
const AnalyticEvents = Constants.AnalyticEvents;
const constants = DismissibleContentConstants.DismissibleContentGroupName;
const jsx = Fragment.jsx;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let obj = {
  id: dismissible_content.DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET,
  importer: function GooglePlayPriceChangeActionSheetImporter() {
    return asyncRequire(17139, dependencyMap.paths);
  }
};
let items = [obj, , ];
let obj2 = {
  id: dismissible_content.DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET,
  importer: function PremiumDiscountOfferActionSheetImporter() {
    return asyncRequire(17142, dependencyMap.paths);
  }
};
items[1] = obj2;
let obj3 = {
  id: dismissible_content.DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET,
  importer: function PremiumTrialOfferActionSheetImporter() {
    return asyncRequire(15579, dependencyMap.paths);
  }
};
items[2] = obj3;
let items1 = [...items];
let obj4 = { id: dismissible_content.DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE, importer: ConnectionDeprecationActionSheetImporter };
items1[tmp3] = obj4;
const sum = tmp3 + 1;
let obj5 = { id: dismissible_content.DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE, importer: ConnectionDeprecationActionSheetImporter };
items1[sum] = obj5;
const sum1 = sum + 1;
items1[sum1] = { id: dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, importer: PremiumMarketingMomentActionSheetImporter };
const sum2 = sum1 + 1;
const obj6 = { id: dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, importer: PremiumMarketingMomentActionSheetImporter };
items1[sum2] = { id: dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL, importer: PremiumMarketingMomentActionSheetImporter };
const sum3 = sum2 + 1;
const obj7 = { id: dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL, importer: PremiumMarketingMomentActionSheetImporter };
items1[sum3] = { id: dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, importer: GiftingPromotionCoachmarkImporter };
const sum4 = sum3 + 1;
const obj8 = { id: dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, importer: GiftingPromotionCoachmarkImporter };
items1[sum4] = { id: dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER, importer: GiftingPromotionCoachmarkImporter };
const sum5 = sum4 + 1;
const obj9 = { id: dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER, importer: GiftingPromotionCoachmarkImporter };
items1[sum5] = { id: dismissible_content.DismissibleContent.NEW_GIFTING_BADGES_COACHMARK, importer: GiftingBadgesCoachmarkImporter };
const sum6 = sum5 + 1;
({ id: dismissible_content.DismissibleContent.NEW_GIFTING_BADGES_COACHMARK, importer: GiftingBadgesCoachmarkImporter });
items1[sum6] = { id: dismissible_content.DismissibleContent.CUSTOM_APP_ICONS_COACHMARK, importer: AppIconsCoachMarkImporter };
const sum7 = sum6 + 1;
({ id: dismissible_content.DismissibleContent.CUSTOM_APP_ICONS_COACHMARK, importer: AppIconsCoachMarkImporter });
items1[sum7] = { id: dismissible_content.DismissibleContent.ROBLOX_CONNECTION_COACHMARK, importer: RobloxConnectionCoachmarkImporter };
const sum8 = sum7 + 1;
({ id: dismissible_content.DismissibleContent.ROBLOX_CONNECTION_COACHMARK, importer: RobloxConnectionCoachmarkImporter });
items1[sum8] = { id: dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK, importer: DisplayNameStylesFlywheelMobileActionSheetImporter };
const sum9 = sum8 + 1;
({ id: dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK, importer: DisplayNameStylesFlywheelMobileActionSheetImporter });
items1[sum9] = { id: dismissible_content.DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, importer: CollectiblesMobileAnnouncementActionSheetImporter };
const sum10 = sum9 + 1;
({ id: dismissible_content.DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, importer: CollectiblesMobileAnnouncementActionSheetImporter });
items1[sum10] = { id: dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT, importer: NitroFileUploadAnnouncementPromoSheetImporter };
const sum11 = sum10 + 1;
({ id: dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT, importer: NitroFileUploadAnnouncementPromoSheetImporter });
items1[sum11] = { id: dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL, importer: NitroFileUploadUpsellPromoSheetImporter };
({ id: dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL, importer: NitroFileUploadUpsellPromoSheetImporter });
items1[sum11 + 1] = { id: dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK, importer: CustomTypingIndicatorAnnounceActionSheetImporter };
({ id: dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK, importer: CustomTypingIndicatorAnnounceActionSheetImporter });
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((actionSheetConfig) => {
  let closure_0;
  let tmp6;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] !== actionSheetConfig) {
    actionSheetConfig = actionSheetConfig.actionSheetConfig;
    _require = actionSheetConfig;
    const hasTrackedRef = actionSheetConfig.hasTrackedRef;
    let ref = hasTrackedRef;
    const tmp9 = _objectWithoutProperties(actionSheetConfig, closure_3);
    cResult[0] = actionSheetConfig;
    cResult[1] = actionSheetConfig;
    cResult[2] = hasTrackedRef;
    cResult[3] = tmp9;
    tmp6 = tmp9;
  } else {
    _require = cResult[1];
    ref = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] === tmp4) {
    let tmp10;
    let tmp11;
    let tmp14;
    if (cResult[5] === tmp5) {
      tmp10 = cResult[6];
      tmp11 = cResult[7];
    }
    closure_7(tmp10, tmp11);
    if (cResult[8] !== tmp6) {
      const DismissibleActionSheet = tmp(10368).DismissibleActionSheet;
      const merged = Object.assign(tmp6);
      const tmp19 = <DismissibleActionSheet />;
      cResult[8] = tmp6;
      cResult[9] = tmp19;
      tmp14 = tmp19;
    } else {
      tmp14 = cResult[9];
    }
    return tmp14;
  }
  const fn = function p() {
    if (!ref.current) {
      tmp.current = true;
      trackActionSheetImpression(closure_0);
    }
  };
  const items = [tmp4, tmp5];
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = fn;
  cResult[7] = items;
  tmp11 = items;
  tmp10 = fn;
}) : ((actionSheetConfig) => {
  actionSheetConfig = actionSheetConfig.actionSheetConfig;
  const hasTrackedRef = actionSheetConfig.hasTrackedRef;
  const merged = Object.assign(actionSheetConfig, Object.assign({ actionSheetConfig: 0, hasTrackedRef: 0 }));
  const items = [actionSheetConfig, hasTrackedRef];
  closure_7(() => {
    if (!hasTrackedRef.current) {
      tmp.current = true;
      trackActionSheetImpression(actionSheetConfig);
    }
  }, items);
  const DismissibleActionSheet = actionSheetConfig(10368).DismissibleActionSheet;
  const merged1 = Object.assign(merged);
  return <DismissibleActionSheet />;
});
const result = size.fileFinishedImporting("modules/upsell_tooltip/native/MainViewTooltipActionSheetsV2.tsx");

export default function MainViewTooltipActionSheetsV2() {
  let actionSheetConfig;
  let closure_2;
  let closure_6;
  let hasTrackedRef;
  let key;
  let mainViewTooltipActionSheetMap;
  let obj5;
  const tmp = mainViewTooltipActionSheetMap;
  let obj = mainViewTooltipActionSheetMap(17163);
  mainViewTooltipActionSheetMap = obj.useMainViewTooltipActionSheetMap();
  [actionSheetConfig, dependencyMap] = react.useState(null);
  let ref = closure_9(false);
  _slicedToArray = closure_9(false);
  const items = [actionSheetConfig];
  ref(() => {
    hasTrackedRef.current = false;
  }, items);
  items1 = [ActionSheetStore];
  const obj2 = mainViewTooltipActionSheetMap(504);
  const stateFromStores = obj2.useStateFromStores(items1, () => key.getKey() === MainViewTooltipActionSheets);
  const items2 = [UserSettingsProtoStore];
  const obj3 = mainViewTooltipActionSheetMap(504);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    const userContent = UserSettingsProtoStore.settings.userContent;
    let dismissedContents;
    if (userContent != null) {
      dismissedContents = userContent.dismissedContents;
    }
    return dismissedContents;
  });
  const items3 = [UserSettingsProtoStore];
  const items4 = [mainViewTooltipActionSheetMap, stateFromStores1, ];
  const obj4 = mainViewTooltipActionSheetMap(504);
  items4[2] = obj4.useStateFromStores(items3, () => {
    const userContent = UserSettingsProtoStore.settings.userContent;
    let prop;
    if (userContent != null) {
      prop = userContent.recurringDismissibleContentStates;
    }
    return prop;
  });
  const tmp9 = obj5(() => {
    let found = items1.find((id) => {
      let isEligible;
      if (closure_1_0[id.id] != null) {
        isEligible = tmp.isEligible;
      }
      if (isEligible) {
        id = id.id;
        let tmp3 = null == tmp;
        if (!tmp3) {
          let isDismissed;
          const obj = mainViewTooltipActionSheetMap(closure_2[24]);
          if (obj.isSnowflakeBoundDismissibleContent(id)) {
            let isDismissed3 = null == tmp.newSnowflakeId;
            if (!isDismissed3) {
              const tmp4Result = mainViewTooltipActionSheetMap(closure_2[30]);
              isDismissed3 = tmp4Result.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(id, tmp.newSnowflakeId).isDismissed;
            }
            isDismissed = isDismissed3;
          } else {
            const tmp4Result6 = mainViewTooltipActionSheetMap(closure_2[24]);
            if (tmp4Result6.isVersionedDismissibleContent(id)) {
              const tmp4Result7 = mainViewTooltipActionSheetMap(closure_2[31]);
              isDismissed = tmp4Result7.isVersionedDismissibleContentDismissed(id, tmp.latestVersion).isDismissed;
            } else {
              const tmp4Result8 = mainViewTooltipActionSheetMap(closure_2[24]);
              if (tmp4Result8.isTimeRecurringDismissibleContent(id)) {
                let isDismissed2 = null == tmp.cooldownConfig;
                if (!isDismissed2) {
                  const tmp4Result9 = mainViewTooltipActionSheetMap(closure_2[31]);
                  isDismissed2 = tmp4Result9.isTimeRecurringDismissibleContentDismissed(id, tmp.cooldownConfig).isDismissed;
                }
                isDismissed = isDismissed2;
              } else {
                const tmp4Result10 = mainViewTooltipActionSheetMap(closure_2[30]);
                isDismissed = tmp4Result10.UNSAFE_isDismissibleContentDismissed(id);
              }
            }
          }
          tmp3 = isDismissed;
        }
        isEligible = !tmp3;
      }
      return isEligible;
    });
    if (found == null) {
      found = null;
    }
    return found;
  }, items4);
  react = tmp9;
  ref = closure_9(null);
  const items5 = [tmp9, stateFromStores];
  ref(() => {
    if (null != ref.current) {
      let _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    if (stateFromStores) {
      ref.current = true;
    } else {
      let num = 0;
      if (ref.current) {
        num = 350;
      }
      if (null == closure_6) {
        ref.current = false;
      }
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        closure_1_2(closure_1_6);
        ref.current = null;
      }, num);
    }
    return () => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        ref.current = null;
      }
    };
  }, items5);
  if (null == actionSheetConfig) {
    return null;
  } else {
    obj5 = mainViewTooltipActionSheetMap[actionSheetConfig.id];
    if (obj5 == null) {
      obj5 = {};
    }
    let id = actionSheetConfig.id;
    let str2 = "snowflake_bound";
    const tmpResult = tmp(2041);
    if (!tmpResult.isSnowflakeBoundDismissibleContent(id)) {
      let str3 = "versioned";
      const tmpResult3 = tmp(2041);
      if (!tmpResult3.isVersionedDismissibleContent(id)) {
        let str4 = "single_use";
        const tmpResult4 = tmp(2041);
        if (tmpResult4.isTimeRecurringDismissibleContent(id)) {
          str4 = "time_recurring";
        }
        str3 = str4;
      }
      str2 = str3;
    }
    if ("snowflake_bound" === str2) {
      let str6 = obj5.newSnowflakeId;
      const SelectedSnowflakeBoundDismissibleContent = tmp(10367).SelectedSnowflakeBoundDismissibleContent;
      if (str6 == null) {
        str6 = "";
      }
      return <SelectedSnowflakeBoundDismissibleContent contentType={actionSheetConfig.id} newSnowflakeId={str6} groupName={constants.MAIN_VIEW_TOOLTIPS}>{function children(visibleContent) {
        let tmp3 = null;
        if (visibleContent.visibleContent === actionSheetConfig.id) {
          const merged = Object.assign(obj5.actionSheetProperties);
          tmp3 = <closure_18 actionSheetConfig={actionSheetConfig} hasTrackedRef={hasTrackedRef} actionSheetKey={MainViewTooltipActionSheets} importer={actionSheetConfig.importer} markAsDismissed={tmp} />;
        }
        return tmp3;
      }}</SelectedSnowflakeBoundDismissibleContent>;
    } else if ("versioned" === str2) {
      let num = obj5.latestVersion;
      const SelectedVersionedDismissibleContent = tmp(10367).SelectedVersionedDismissibleContent;
      if (num == null) {
        num = 0;
      }
      return <SelectedVersionedDismissibleContent latestVersion={num} contentType={actionSheetConfig.id} groupName={constants.MAIN_VIEW_TOOLTIPS}>{function children(visibleContent) {
        let tmp3 = null;
        if (visibleContent.visibleContent === actionSheetConfig.id) {
          const merged = Object.assign(obj5.actionSheetProperties);
          tmp3 = <closure_18 actionSheetConfig={actionSheetConfig} hasTrackedRef={hasTrackedRef} actionSheetKey={MainViewTooltipActionSheets} importer={actionSheetConfig.importer} markAsDismissed={tmp} versionedDismissibleContentType={actionSheetConfig.id} />;
        }
        return tmp3;
      }}</SelectedVersionedDismissibleContent>;
    } else if ("time_recurring" === str2) {
      return jsx(tmp(10367).SelectedTimeRecurringDismissibleContent, {
        contentType: actionSheetConfig.id,
        timeRecurringConfig: obj5.cooldownConfig,
        groupName: constants.MAIN_VIEW_TOOLTIPS,
        bypassAutoDismiss: false,
        children(visibleContent) {
              let tmp3 = null;
              if (visibleContent.visibleContent === actionSheetConfig.id) {
                const merged = Object.assign(obj5.actionSheetProperties);
                tmp3 = <closure_18 actionSheetConfig={actionSheetConfig} hasTrackedRef={hasTrackedRef} actionSheetKey={MainViewTooltipActionSheets} importer={actionSheetConfig.importer} markAsDismissed={tmp} />;
              }
              return tmp3;
            }
      });
    } else if ("single_use" === str2) {
      const items6 = [actionSheetConfig.id];
      return jsx(actionSheetConfig(10367), {
        contentTypes: items6,
        groupName: constants.MAIN_VIEW_TOOLTIPS,
        children(visibleContent) {
              let tmp3 = null;
              if (visibleContent.visibleContent === actionSheetConfig.id) {
                const merged = Object.assign(obj5.actionSheetProperties);
                tmp3 = <closure_18 actionSheetConfig={actionSheetConfig} hasTrackedRef={hasTrackedRef} markAsDismissed={tmp} importer={actionSheetConfig.importer} actionSheetKey={MainViewTooltipActionSheets} />;
              }
              return tmp3;
            }
      });
    } else {
      return null;
    }
  }
};
export const ACTION_SHEET_REGISTRY = items1;
export { trackActionSheetImpression };