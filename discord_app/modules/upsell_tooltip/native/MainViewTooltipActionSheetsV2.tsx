// === Module 16351: trackActionSheetImpression ===

// Module 16351 (trackActionSheetImpression)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import noop from "noop" /* 19 */;
import closure_8 from "setContent" /* 4154 */;
import closure_9 from "handleConnectionClosedOrResumed" /* 1340 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { DismissibleContentGroupName as closure_11 } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
class GiftingPromotionCoachmarkImporter {
  constructor() {
    return require("PX_4");
  }
}
class PremiumMarketingMomentActionSheetImporter {
  constructor() {
    return require("PremiumMarketingMomentActionSheet");
  }
}
class ConnectionDeprecationActionSheetImporter {
  constructor() {
    return require("ConnectionIcon");
  }
}
function trackActionSheetImpression(id) {
  let obj = expandEventPropertiesDefault;
  obj = { dc_id: DismissibleContent.DismissibleContent[id.id], dc_type: null, bypass_fatigue: null, is_another_action_sheet_open: null };
  id = id.id;
  const tmp = null != content.getContent();
  let str = "snowflake_bound";
  if (!obj3.isSnowflakeBoundDismissibleContent(id)) {
    let tmp3Result = tmp3(1378);
    let str2 = "versioned";
    if (!tmp3Result.isVersionedDismissibleContent(id)) {
      tmp3Result = tmp3(1378);
      let str3 = "single_use";
      if (tmp3Result.isTimeRecurringDismissibleContent(id)) {
        str3 = "time_recurring";
      }
      str2 = str3;
    }
    str = str2;
  }
  obj[1] = str;
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = tmp3(1382).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  obj[2] = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(id.id);
  obj[3] = tmp;
  obj.track(AnalyticEvents.MAIN_VIEW_ACTION_SHEET_SELECTED, obj);
}
function TrackedDismissibleActionSheet(actionSheetConfig) {
  actionSheetConfig = actionSheetConfig.actionSheetConfig;
  const hasTrackedRef = actionSheetConfig.hasTrackedRef;
  const merged = Object.assign(actionSheetConfig, Object.create(null));
  const items = [actionSheetConfig, hasTrackedRef];
  callback2(() => {
    if (!hasTrackedRef.current) {
      tmp.current = true;
      closure_1_15(actionSheetConfig);
    }
  }, items);
  const merged1 = Object.assign(merged);
  return jsx(actionSheetConfig(10219).DismissibleActionSheet, {});
}
({ useEffect: c5, useMemo: closure_6, useRef: error } = noop);
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let obj = {
  id: require("DismissibleContent").DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET,
  importer: function GooglePlayPriceChangeActionSheetImporter() {
    return asyncRequireImpl(16358, dependencyMap.paths);
  }
};
let items = [obj, , , ];
obj = {
  id: require("DismissibleContent").DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET,
  importer: function PremiumDiscountOfferActionSheetImporter() {
    return asyncRequireImpl(16361, dependencyMap.paths);
  }
};
items[1] = obj;
obj = {
  id: require("DismissibleContent").DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET,
  importer: function PremiumTrialOfferActionSheetImporter() {
    return asyncRequireImpl(15314, dependencyMap.paths);
  }
};
items[2] = obj;
items[3] = {
  id: require("DismissibleContent").DismissibleContent.MOBILE_BOGO_PROMOTION_ACTION_SHEET,
  importer: function BogoPromotionActionSheetImporter() {
    return asyncRequireImpl(16357, dependencyMap.paths);
  }
};
let items1 = [...items];
let obj1 = {
  id: require("DismissibleContent").DismissibleContent.MOBILE_BOGO_PROMOTION_ACTION_SHEET,
  importer: function BogoPromotionActionSheetImporter() {
    return asyncRequireImpl(16357, dependencyMap.paths);
  }
};
items1[tmp3] = { id: require("DismissibleContent").DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE, importer: ConnectionDeprecationActionSheetImporter };
const sum = tmp3 + 1;
let obj2 = { id: require("DismissibleContent").DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE, importer: ConnectionDeprecationActionSheetImporter };
items1[sum] = { id: require("DismissibleContent").DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE, importer: ConnectionDeprecationActionSheetImporter };
const sum1 = sum + 1;
let obj3 = { id: require("DismissibleContent").DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE, importer: ConnectionDeprecationActionSheetImporter };
items1[sum1] = { id: require("DismissibleContent").DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, importer: PremiumMarketingMomentActionSheetImporter };
const sum2 = sum1 + 1;
const obj4 = { id: require("DismissibleContent").DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, importer: PremiumMarketingMomentActionSheetImporter };
items1[sum2] = { id: require("DismissibleContent").DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL, importer: PremiumMarketingMomentActionSheetImporter };
const sum3 = sum2 + 1;
const obj5 = { id: require("DismissibleContent").DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL, importer: PremiumMarketingMomentActionSheetImporter };
items1[sum3] = { id: require("DismissibleContent").DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, importer: GiftingPromotionCoachmarkImporter };
const sum4 = sum3 + 1;
const obj6 = { id: require("DismissibleContent").DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, importer: GiftingPromotionCoachmarkImporter };
items1[sum4] = { id: require("DismissibleContent").DismissibleContent.GIFTING_PROMOTION_REMINDER, importer: GiftingPromotionCoachmarkImporter };
const sum5 = sum4 + 1;
const obj7 = { id: require("DismissibleContent").DismissibleContent.GIFTING_PROMOTION_REMINDER, importer: GiftingPromotionCoachmarkImporter };
items1[sum5] = {
  id: require("DismissibleContent").DismissibleContent.NEW_GIFTING_BADGES_COACHMARK,
  importer: function GiftingBadgesCoachmarkImporter() {
    return asyncRequireImpl(16365, dependencyMap.paths);
  }
};
const sum6 = sum5 + 1;
const obj8 = {
  id: require("DismissibleContent").DismissibleContent.NEW_GIFTING_BADGES_COACHMARK,
  importer: function GiftingBadgesCoachmarkImporter() {
    return asyncRequireImpl(16365, dependencyMap.paths);
  }
};
items1[sum6] = {
  id: require("DismissibleContent").DismissibleContent.CUSTOM_APP_ICONS_COACHMARK,
  importer: function AppIconsCoachMarkImporter() {
    return asyncRequireImpl(16352, dependencyMap.paths);
  }
};
const sum7 = sum6 + 1;
const obj9 = {
  id: require("DismissibleContent").DismissibleContent.CUSTOM_APP_ICONS_COACHMARK,
  importer: function AppIconsCoachMarkImporter() {
    return asyncRequireImpl(16352, dependencyMap.paths);
  }
};
items1[sum7] = {
  id: require("DismissibleContent").DismissibleContent.ROBLOX_CONNECTION_COACHMARK,
  importer: function RobloxConnectionCoachmarkImporter() {
    return asyncRequireImpl(16356, dependencyMap.paths);
  }
};
const sum8 = sum7 + 1;
const obj10 = {
  id: require("DismissibleContent").DismissibleContent.ROBLOX_CONNECTION_COACHMARK,
  importer: function RobloxConnectionCoachmarkImporter() {
    return asyncRequireImpl(16356, dependencyMap.paths);
  }
};
items1[sum8] = {
  id: require("DismissibleContent").DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK,
  importer: function DisplayNameStylesFlywheelMobileActionSheetImporter() {
    return asyncRequireImpl(16363, dependencyMap.paths);
  }
};
const sum9 = sum8 + 1;
const obj11 = {
  id: require("DismissibleContent").DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK,
  importer: function DisplayNameStylesFlywheelMobileActionSheetImporter() {
    return asyncRequireImpl(16363, dependencyMap.paths);
  }
};
items1[sum9] = {
  id: require("DismissibleContent").DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT,
  importer: function CollectiblesMobileAnnouncementActionSheetImporter() {
    return asyncRequireImpl(16371, dependencyMap.paths);
  }
};
const obj12 = {
  id: require("DismissibleContent").DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT,
  importer: function CollectiblesMobileAnnouncementActionSheetImporter() {
    return asyncRequireImpl(16371, dependencyMap.paths);
  }
};
items1[sum9 + 1] = {
  id: require("DismissibleContent").DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK,
  importer: function CustomTypingIndicatorAnnounceActionSheetImporter() {
    return asyncRequireImpl(11609, dependencyMap.paths);
  }
};
const obj13 = {
  id: require("DismissibleContent").DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK,
  importer: function CustomTypingIndicatorAnnounceActionSheetImporter() {
    return asyncRequireImpl(11609, dependencyMap.paths);
  }
};
let result = require("set").fileFinishedImporting("modules/upsell_tooltip/native/MainViewTooltipActionSheetsV2.tsx");

export default function MainViewTooltipActionSheetsV2() {
  let obj = mainViewTooltipActionSheetMap(16376);
  mainViewTooltipActionSheetMap = obj.useMainViewTooltipActionSheetMap();
  let tmp4 = callback(React.useState(null), 2);
  const first = tmp4[0];
  dependencyMap = tmp4[1];
  callback = callback4(false);
  React = callback4(false);
  const items = [first];
  stateFromStores(() => {
    closure_4.current = false;
  }, items);
  obj1 = mainViewTooltipActionSheetMap(589);
  items1 = [obj];
  stateFromStores = obj1.useStateFromStores(items1, () => obj.getKey() === closure_13);
  let obj2 = mainViewTooltipActionSheetMap(589);
  const items2 = [closure_9];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const userContent = closure_9.settings.userContent;
    let dismissedContents;
    if (userContent != null) {
      dismissedContents = userContent.dismissedContents;
    }
    return dismissedContents;
  });
  let obj3 = mainViewTooltipActionSheetMap(589);
  const items3 = [closure_9];
  const items4 = [
    mainViewTooltipActionSheetMap,
    stateFromStores1,
    obj3.useStateFromStores(items3, () => {
      const userContent = closure_9.settings.userContent;
      let prop;
      if (userContent != null) {
        prop = userContent.recurringDismissibleContentStates;
      }
      return prop;
    })
  ];
  const tmp9 = callback3(() => {
    let found = closure_1_14.find((id) => {
      let result = table[id.id];
      let isEligible;
      if (result != null) {
        isEligible = result.isEligible;
      }
      if (isEligible) {
        id = id.id;
        if (null == result) {
          isEligible = !tmp3;
        } else {
          let tmp4 = closure_1_0;
          let UNSAFE_isSnowflakeBoundDismissibleContentDismissed = closure_1_2;
          if (obj.isSnowflakeBoundDismissibleContent(id)) {
            let isDismissed3 = null == result.newSnowflakeId;
            if (!isDismissed3) {
              tmp4 = tmp4(UNSAFE_isSnowflakeBoundDismissibleContentDismissed[26]);
              UNSAFE_isSnowflakeBoundDismissibleContentDismissed = tmp4.UNSAFE_isSnowflakeBoundDismissibleContentDismissed;
              result = UNSAFE_isSnowflakeBoundDismissibleContentDismissed(id, result.newSnowflakeId);
              isDismissed3 = result.isDismissed;
            }
            let isDismissed = isDismissed3;
          } else {
            let tmp4Result = tmp4(UNSAFE_isSnowflakeBoundDismissibleContentDismissed[22]);
            if (tmp4Result.isVersionedDismissibleContent(id)) {
              tmp4Result = tmp4(UNSAFE_isSnowflakeBoundDismissibleContentDismissed[27]);
              isDismissed = tmp4Result.isVersionedDismissibleContentDismissed(id, result.latestVersion).isDismissed;
            } else {
              if (tmp4Result1.isTimeRecurringDismissibleContent(id)) {
                let isDismissed2 = null == result.cooldownConfig;
                if (!isDismissed2) {
                  isDismissed2 = tmp4(UNSAFE_isSnowflakeBoundDismissibleContentDismissed[27]).isTimeRecurringDismissibleContentDismissed(id, result.cooldownConfig).isDismissed;
                  const tmp4Result2 = tmp4(UNSAFE_isSnowflakeBoundDismissibleContentDismissed[27]);
                }
                isDismissed = isDismissed2;
              } else {
                isDismissed = tmp4(UNSAFE_isSnowflakeBoundDismissibleContentDismissed[26]).UNSAFE_isDismissibleContentDismissed(id);
                const tmp4Result3 = tmp4(UNSAFE_isSnowflakeBoundDismissibleContentDismissed[26]);
              }
              tmp4Result1 = tmp4(UNSAFE_isSnowflakeBoundDismissibleContentDismissed[22]);
            }
          }
          obj = closure_1_0(closure_1_2[22]);
        }
      }
      return isEligible;
    });
    if (found == null) {
      found = null;
    }
    return found;
  }, items4);
  callback3 = tmp9;
  callback4 = callback4(null);
  const items5 = [tmp9, stateFromStores];
  stateFromStores(() => {
    if (null != ref.current) {
      let _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
    if (stateFromStores) {
      tmp4.current = true;
    } else {
      let num = 0;
      if (tmp4.current) {
        num = 350;
      }
      if (null == closure_6) {
        tmp4.current = false;
      }
      const _setTimeout = setTimeout;
      tmp.current = setTimeout(() => {
        callback(closure_6);
        closure_7.current = null;
      }, num);
    }
    return () => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
        tmp.current = null;
      }
    };
  }, items5);
  if (null == first) {
    return null;
  } else {
    obj = mainViewTooltipActionSheetMap[first.id];
    if (obj == null) {
      obj = {};
    }
    let id = first.id;
    let tmpResult = tmp(1378);
    let str2 = "snowflake_bound";
    if (!tmpResult.isSnowflakeBoundDismissibleContent(id)) {
      tmpResult = tmp(1378);
      let str3 = "versioned";
      if (!tmpResult.isVersionedDismissibleContent(id)) {
        let str4 = "single_use";
        if (tmpResult1.isTimeRecurringDismissibleContent(id)) {
          str4 = "time_recurring";
        }
        str3 = str4;
        tmpResult1 = tmp(1378);
      }
      str2 = str3;
    }
    if ("snowflake_bound" === str2) {
      obj = { contentType: null, newSnowflakeId: null, groupName: null, children: null };
      obj[0] = first.id;
      let str6 = obj.newSnowflakeId;
      if (str6 == null) {
        str6 = "";
      }
      obj[1] = str6;
      obj[2] = constants.MAIN_VIEW_TOOLTIPS;
      obj[3] = function children(visibleContent) {
        let tmp3 = null;
        if (visibleContent.visibleContent === first.id) {
          obj = { actionSheetConfig: null, hasTrackedRef: null, actionSheetKey: null, importer: null, markAsDismissed: null };
          obj[0] = tmp2;
          obj[1] = closure_4;
          obj[2] = closure_1_13;
          obj[3] = tmp2.importer;
          obj[4] = tmp;
          const merged = Object.assign(obj.actionSheetProperties);
          tmp3 = closure_1_12(closure_1_16, obj);
        }
        return tmp3;
      };
      return jsx(tmp(10218).SelectedSnowflakeBoundDismissibleContent, { contentType: null, newSnowflakeId: null, groupName: null, children: null });
    } else if ("versioned" === str2) {
      let num = obj.latestVersion;
      if (num == null) {
        num = 0;
      }
      obj1 = { latestVersion: null, contentType: null, groupName: null, children: null };
      obj1[0] = num;
      obj1[1] = first.id;
      obj1[2] = constants.MAIN_VIEW_TOOLTIPS;
      obj1[3] = function children(visibleContent) {
        let tmp3 = null;
        if (visibleContent.visibleContent === first.id) {
          obj = { actionSheetConfig: null, hasTrackedRef: null, actionSheetKey: null, importer: null, markAsDismissed: null, versionedDismissibleContentType: null };
          obj[0] = tmp2;
          obj[1] = closure_4;
          obj[2] = closure_1_13;
          obj[3] = tmp2.importer;
          obj[4] = tmp;
          obj[5] = tmp2.id;
          const merged = Object.assign(obj.actionSheetProperties);
          tmp3 = closure_1_12(closure_1_16, obj);
        }
        return tmp3;
      };
      return jsx(tmp(10218).SelectedVersionedDismissibleContent, { latestVersion: null, contentType: null, groupName: null, children: null });
    } else if ("time_recurring" === str2) {
      obj2 = { contentType: null, timeRecurringConfig: null, groupName: null, bypassAutoDismiss: false, children: null };
      obj2[0] = first.id;
      obj2[1] = obj.cooldownConfig;
      obj2[2] = constants.MAIN_VIEW_TOOLTIPS;
      obj2[4] = function children(visibleContent) {
        let tmp3 = null;
        if (visibleContent.visibleContent === first.id) {
          obj = { actionSheetConfig: null, hasTrackedRef: null, actionSheetKey: null, importer: null, markAsDismissed: null };
          obj[0] = tmp2;
          obj[1] = closure_4;
          obj[2] = closure_1_13;
          obj[3] = tmp2.importer;
          obj[4] = tmp;
          const merged = Object.assign(obj.actionSheetProperties);
          tmp3 = closure_1_12(closure_1_16, obj);
        }
        return tmp3;
      };
      return jsx(tmp(10218).SelectedTimeRecurringDismissibleContent, { contentType: null, timeRecurringConfig: null, groupName: null, bypassAutoDismiss: false, children: null });
    } else if ("single_use" === str2) {
      obj3 = { contentTypes: null, groupName: null, children: null };
      const items6 = [first.id];
      obj3[0] = items6;
      obj3[1] = constants.MAIN_VIEW_TOOLTIPS;
      obj3[2] = function children(visibleContent) {
        let tmp3 = null;
        if (visibleContent.visibleContent === first.id) {
          obj = { actionSheetConfig: null, hasTrackedRef: null, markAsDismissed: null, importer: null, actionSheetKey: null };
          obj[0] = tmp2;
          obj[1] = closure_4;
          obj[2] = tmp;
          obj[3] = tmp2.importer;
          obj[4] = closure_1_13;
          const merged = Object.assign(obj.actionSheetProperties);
          tmp3 = closure_1_12(closure_1_16, obj);
        }
        return tmp3;
      };
      return jsx(first(10218), { contentTypes: null, groupName: null, children: null });
    } else {
      return null;
    }
  }
};
export const ACTION_SHEET_REGISTRY = items1;
export { trackActionSheetImpression };