// discord_app/modules/upsell_tooltip/native/MainViewTooltipActionSheetsV2.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import "module_19";
import ActionSheetStore from "../../action_sheet/native/ActionSheetStore.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";

require = fn;
class GiftingPromotionCoachmarkImporter {
  constructor() {
    return closure_0(closure_2[8])(closure_2[9], closure_2.paths);
  }
}
class PremiumMarketingMomentActionSheetImporter {
  constructor() {
    return closure_0(closure_2[8])(closure_2[13], closure_2.paths);
  }
}
class ConnectionDeprecationActionSheetImporter {
  constructor() {
    return closure_0(closure_2[8])(closure_2[18], closure_2.paths);
  }
}
function trackActionSheetImpression(actionSheetConfig) {
  const obj = {
    dc_id: dismissible_content.DismissibleContent[actionSheetConfig.id],
    dc_type: null,
    bypass_fatigue: null,
    is_another_action_sheet_open: null,
  };
  const id = actionSheetConfig.id;
  const tmp = null != ActionSheetStore.getContent();
  let str = "snowflake_bound";
  if (!obj3.isSnowflakeBoundDismissibleContent(id)) {
    let tmp3Result = tmp3(1944);
    let str2 = "versioned";
    if (!tmp3Result.isVersionedDismissibleContent(id)) {
      tmp3Result = tmp3(1944);
      let str3 = "single_use";
      if (tmp3Result.isTimeRecurringDismissibleContent(id)) {
        str3 = "time_recurring";
      }
      str2 = str3;
    }
    str = str2;
  }
  obj.dc_type = str;
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = tmp3(1948).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  obj.bypass_fatigue = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(actionSheetConfig.id);
  obj.is_another_action_sheet_open = tmp;
  obj.track(AnalyticEvents.MAIN_VIEW_ACTION_SHEET_SELECTED, obj);
}
function TrackedDismissibleActionSheet(actionSheetConfig) {
  actionSheetConfig = actionSheetConfig.actionSheetConfig;
  const hasTrackedRef = actionSheetConfig.hasTrackedRef;
  const merged = Object.assign(actionSheetConfig, Object.assign({ actionSheetConfig: 0, hasTrackedRef: 0 }));
  const items = [actionSheetConfig, hasTrackedRef];
  closure_5(() => {
    if (!hasTrackedRef.current) {
      tmp.current = true;
      trackActionSheetImpression(actionSheetConfig);
    }
  }, items);
  const merged1 = Object.assign(merged);
  return jsx(actionSheetConfig(10626).DismissibleActionSheet, {});
}
let noop = fn(19);
({ useEffect: hasOwnProperty, useMemo: metroRequire, useRef: closure_7 } = noop);
const AnalyticEvents = fn(1074).AnalyticEvents;
const constants = fn(1954).DismissibleContentGroupName;
const jsx = fn(21).jsx;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let obj = {
  id: fn(1943).DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET,
  importer: function GooglePlayPriceChangeActionSheetImporter() {
    return asyncRequireImpl(16931, dependencyMap.paths);
  },
};
let items = [obj, , ,];
obj = {
  id: fn(1943).DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET,
  importer: function PremiumDiscountOfferActionSheetImporter() {
    return asyncRequireImpl(16934, dependencyMap.paths);
  },
};
items[1] = obj;
obj = {
  id: fn(1943).DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET,
  importer: function PremiumTrialOfferActionSheetImporter() {
    return asyncRequireImpl(15687, dependencyMap.paths);
  },
};
items[2] = obj;
items[3] = {
  id: fn(1943).DismissibleContent.MOBILE_BOGO_PROMOTION_ACTION_SHEET,
  importer: function BogoPromotionActionSheetImporter() {
    return asyncRequireImpl(16930, dependencyMap.paths);
  },
};
let items1 = [...items];
let obj1 = {
  id: fn(1943).DismissibleContent.MOBILE_BOGO_PROMOTION_ACTION_SHEET,
  importer: function BogoPromotionActionSheetImporter() {
    return asyncRequireImpl(16930, dependencyMap.paths);
  },
};
items1[tmp3] = {
  id: fn(1943).DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE,
  importer: ConnectionDeprecationActionSheetImporter,
};
const sum = tmp3 + 1;
let obj2 = {
  id: fn(1943).DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE,
  importer: ConnectionDeprecationActionSheetImporter,
};
items1[sum] = {
  id: fn(1943).DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE,
  importer: ConnectionDeprecationActionSheetImporter,
};
const sum1 = sum + 1;
let obj3 = {
  id: fn(1943).DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE,
  importer: ConnectionDeprecationActionSheetImporter,
};
items1[sum1] = {
  id: fn(1943).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL,
  importer: PremiumMarketingMomentActionSheetImporter,
};
const sum2 = sum1 + 1;
const obj4 = {
  id: fn(1943).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL,
  importer: PremiumMarketingMomentActionSheetImporter,
};
items1[sum2] = {
  id: fn(1943).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL,
  importer: PremiumMarketingMomentActionSheetImporter,
};
const sum3 = sum2 + 1;
const obj5 = {
  id: fn(1943).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL,
  importer: PremiumMarketingMomentActionSheetImporter,
};
items1[sum3] = {
  id: fn(1943).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET,
  importer: GiftingPromotionCoachmarkImporter,
};
const sum4 = sum3 + 1;
const obj6 = {
  id: fn(1943).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET,
  importer: GiftingPromotionCoachmarkImporter,
};
items1[sum4] = {
  id: fn(1943).DismissibleContent.GIFTING_PROMOTION_REMINDER,
  importer: GiftingPromotionCoachmarkImporter,
};
const sum5 = sum4 + 1;
const obj7 = {
  id: fn(1943).DismissibleContent.GIFTING_PROMOTION_REMINDER,
  importer: GiftingPromotionCoachmarkImporter,
};
items1[sum5] = {
  id: fn(1943).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK,
  importer: function GiftingBadgesCoachmarkImporter() {
    return asyncRequireImpl(16938, dependencyMap.paths);
  },
};
const sum6 = sum5 + 1;
const obj8 = {
  id: fn(1943).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK,
  importer: function GiftingBadgesCoachmarkImporter() {
    return asyncRequireImpl(16938, dependencyMap.paths);
  },
};
items1[sum6] = {
  id: fn(1943).DismissibleContent.CUSTOM_APP_ICONS_COACHMARK,
  importer: function AppIconsCoachMarkImporter() {
    return asyncRequireImpl(16925, dependencyMap.paths);
  },
};
const sum7 = sum6 + 1;
const obj9 = {
  id: fn(1943).DismissibleContent.CUSTOM_APP_ICONS_COACHMARK,
  importer: function AppIconsCoachMarkImporter() {
    return asyncRequireImpl(16925, dependencyMap.paths);
  },
};
items1[sum7] = {
  id: fn(1943).DismissibleContent.ROBLOX_CONNECTION_COACHMARK,
  importer: function RobloxConnectionCoachmarkImporter() {
    return asyncRequireImpl(16929, dependencyMap.paths);
  },
};
const sum8 = sum7 + 1;
const obj10 = {
  id: fn(1943).DismissibleContent.ROBLOX_CONNECTION_COACHMARK,
  importer: function RobloxConnectionCoachmarkImporter() {
    return asyncRequireImpl(16929, dependencyMap.paths);
  },
};
items1[sum8] = {
  id: fn(1943).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK,
  importer: function DisplayNameStylesFlywheelMobileActionSheetImporter() {
    return asyncRequireImpl(16936, dependencyMap.paths);
  },
};
const sum9 = sum8 + 1;
const obj11 = {
  id: fn(1943).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK,
  importer: function DisplayNameStylesFlywheelMobileActionSheetImporter() {
    return asyncRequireImpl(16936, dependencyMap.paths);
  },
};
items1[sum9] = {
  id: fn(1943).DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT,
  importer: function CollectiblesMobileAnnouncementActionSheetImporter() {
    return asyncRequireImpl(16944, dependencyMap.paths);
  },
};
const obj12 = {
  id: fn(1943).DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT,
  importer: function CollectiblesMobileAnnouncementActionSheetImporter() {
    return asyncRequireImpl(16944, dependencyMap.paths);
  },
};
items1[sum9 + 1] = {
  id: fn(1943).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK,
  importer: function CustomTypingIndicatorAnnounceActionSheetImporter() {
    return asyncRequireImpl(11969, dependencyMap.paths);
  },
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/upsell_tooltip/native/MainViewTooltipActionSheetsV2.tsx");

export default function MainViewTooltipActionSheetsV2() {
  let obj = mainViewTooltipActionSheetMap(16948);
  mainViewTooltipActionSheetMap = obj.useMainViewTooltipActionSheetMap();
  let tmp4 = _slicedToArray(noop.useState(null), 2);
  const first = tmp4[0];
  dependencyMap = tmp4[1];
  _slicedToArray = ref(false);
  noop = ref(false);
  const items = [first];
  stateFromStores(() => {
    closure_4.current = false;
  }, items);
  let obj1 = mainViewTooltipActionSheetMap(504);
  items1 = [obj];
  stateFromStores = obj1.useStateFromStores(items1, () => obj.getKey() === MainViewTooltipActionSheets);
  let obj2 = mainViewTooltipActionSheetMap(504);
  const items2 = [UserSettingsProtoStore];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const userContent = UserSettingsProtoStore.settings.userContent;
    let dismissedContents;
    if (userContent != null) {
      dismissedContents = userContent.dismissedContents;
    }
    return dismissedContents;
  });
  let obj3 = mainViewTooltipActionSheetMap(504);
  const items3 = [UserSettingsProtoStore];
  const items4 = [
    mainViewTooltipActionSheetMap,
    stateFromStores1,
    obj3.useStateFromStores(items3, () => {
      const userContent = UserSettingsProtoStore.settings.userContent;
      let prop;
      if (userContent != null) {
        prop = userContent.recurringDismissibleContentStates;
      }
      return prop;
    }),
  ];
  const tmp9 = closure_6(() => {
    let found = items1.find((id) => {
      let result = closure_1_0[id.id];
      let isEligible;
      if (result != null) {
        isEligible = result.isEligible;
      }
      if (isEligible) {
        id = id.id;
        if (null == result) {
          isEligible = !tmp3;
        } else {
          let tmp4 = mainViewTooltipActionSheetMap;
          let UNSAFE_isSnowflakeBoundDismissibleContentDismissed = closure_2;
          if (obj.isSnowflakeBoundDismissibleContent(id)) {
            let isDismissed3 = null == result.newSnowflakeId;
            if (!isDismissed3) {
              tmp4 = tmp4(UNSAFE_isSnowflakeBoundDismissibleContentDismissed[26]);
              UNSAFE_isSnowflakeBoundDismissibleContentDismissed =
                tmp4.UNSAFE_isSnowflakeBoundDismissibleContentDismissed;
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
                  isDismissed2 = tmp4(
                    UNSAFE_isSnowflakeBoundDismissibleContentDismissed[27],
                  ).isTimeRecurringDismissibleContentDismissed(id, result.cooldownConfig).isDismissed;
                  const tmp4Result2 = tmp4(UNSAFE_isSnowflakeBoundDismissibleContentDismissed[27]);
                }
                isDismissed = isDismissed2;
              } else {
                isDismissed = tmp4(
                  UNSAFE_isSnowflakeBoundDismissibleContentDismissed[26],
                ).UNSAFE_isDismissibleContentDismissed(id);
                const tmp4Result3 = tmp4(UNSAFE_isSnowflakeBoundDismissibleContentDismissed[26]);
              }
              tmp4Result1 = tmp4(UNSAFE_isSnowflakeBoundDismissibleContentDismissed[22]);
            }
          }
          obj = mainViewTooltipActionSheetMap(closure_2[22]);
        }
      }
      return isEligible;
    });
    if (found == null) {
      found = null;
    }
    return found;
  }, items4);
  closure_6 = tmp9;
  ref = ref(null);
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
        closure_1_2(closure_1_6);
        ref.current = null;
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
    let tmpResult = tmp(1944);
    let str2 = "snowflake_bound";
    if (!tmpResult.isSnowflakeBoundDismissibleContent(id)) {
      tmpResult = tmp(1944);
      let str3 = "versioned";
      if (!tmpResult.isVersionedDismissibleContent(id)) {
        let str4 = "single_use";
        if (tmpResult1.isTimeRecurringDismissibleContent(id)) {
          str4 = "time_recurring";
        }
        str3 = str4;
        tmpResult1 = tmp(1944);
      }
      str2 = str3;
    }
    if ("snowflake_bound" === str2) {
      obj = { contentType: first.id, newSnowflakeId: null, groupName: null, children: null };
      let str6 = obj.newSnowflakeId;
      if (str6 == null) {
        str6 = "";
      }
      obj.newSnowflakeId = str6;
      obj.groupName = constants.MAIN_VIEW_TOOLTIPS;
      obj.children = function children(visibleContent) {
        let tmp3 = null;
        if (visibleContent.visibleContent === first.id) {
          obj = {
            actionSheetConfig: tmp2,
            hasTrackedRef,
            actionSheetKey: MainViewTooltipActionSheets,
            importer: tmp2.importer,
            markAsDismissed: tmp,
          };
          const merged = Object.assign(obj.actionSheetProperties);
          tmp3 = (
            <TrackedDismissibleActionSheet
              actionSheetConfig={tmp2}
              hasTrackedRef={hasTrackedRef}
              actionSheetKey={MainViewTooltipActionSheets}
              importer={tmp2.importer}
              markAsDismissed={tmp}
            />
          );
        }
        return tmp3;
      };
      return jsx(tmp(10625).SelectedSnowflakeBoundDismissibleContent, {
        contentType: first.id,
        newSnowflakeId: null,
        groupName: null,
        children: null,
      });
    } else if ("versioned" === str2) {
      let num = obj.latestVersion;
      if (num == null) {
        num = 0;
      }
      obj1 = {
        latestVersion: num,
        contentType: first.id,
        groupName: constants.MAIN_VIEW_TOOLTIPS,
        children(visibleContent) {
          let tmp3 = null;
          if (visibleContent.visibleContent === first.id) {
            obj = {
              actionSheetConfig: tmp2,
              hasTrackedRef,
              actionSheetKey: MainViewTooltipActionSheets,
              importer: tmp2.importer,
              markAsDismissed: tmp,
              versionedDismissibleContentType: tmp2.id,
            };
            const merged = Object.assign(obj.actionSheetProperties);
            tmp3 = (
              <TrackedDismissibleActionSheet
                actionSheetConfig={tmp2}
                hasTrackedRef={hasTrackedRef}
                actionSheetKey={MainViewTooltipActionSheets}
                importer={tmp2.importer}
                markAsDismissed={tmp}
                versionedDismissibleContentType={tmp2.id}
              />
            );
          }
          return tmp3;
        },
      };
      return jsx(tmp(10625).SelectedVersionedDismissibleContent, {
        latestVersion: num,
        contentType: first.id,
        groupName: constants.MAIN_VIEW_TOOLTIPS,
        children(visibleContent) {
          let tmp3 = null;
          if (visibleContent.visibleContent === first.id) {
            obj = {
              actionSheetConfig: tmp2,
              hasTrackedRef,
              actionSheetKey: MainViewTooltipActionSheets,
              importer: tmp2.importer,
              markAsDismissed: tmp,
              versionedDismissibleContentType: tmp2.id,
            };
            const merged = Object.assign(obj.actionSheetProperties);
            tmp3 = (
              <TrackedDismissibleActionSheet
                actionSheetConfig={tmp2}
                hasTrackedRef={hasTrackedRef}
                actionSheetKey={MainViewTooltipActionSheets}
                importer={tmp2.importer}
                markAsDismissed={tmp}
                versionedDismissibleContentType={tmp2.id}
              />
            );
          }
          return tmp3;
        },
      });
    } else if ("time_recurring" === str2) {
      obj2 = {
        contentType: first.id,
        timeRecurringConfig: obj.cooldownConfig,
        groupName: constants.MAIN_VIEW_TOOLTIPS,
        bypassAutoDismiss: false,
        children(visibleContent) {
          let tmp3 = null;
          if (visibleContent.visibleContent === first.id) {
            obj = {
              actionSheetConfig: tmp2,
              hasTrackedRef,
              actionSheetKey: MainViewTooltipActionSheets,
              importer: tmp2.importer,
              markAsDismissed: tmp,
            };
            const merged = Object.assign(obj.actionSheetProperties);
            tmp3 = (
              <TrackedDismissibleActionSheet
                actionSheetConfig={tmp2}
                hasTrackedRef={hasTrackedRef}
                actionSheetKey={MainViewTooltipActionSheets}
                importer={tmp2.importer}
                markAsDismissed={tmp}
              />
            );
          }
          return tmp3;
        },
      };
      return jsx(tmp(10625).SelectedTimeRecurringDismissibleContent, {
        contentType: first.id,
        timeRecurringConfig: obj.cooldownConfig,
        groupName: constants.MAIN_VIEW_TOOLTIPS,
        bypassAutoDismiss: false,
        children(visibleContent) {
          let tmp3 = null;
          if (visibleContent.visibleContent === first.id) {
            obj = {
              actionSheetConfig: tmp2,
              hasTrackedRef,
              actionSheetKey: MainViewTooltipActionSheets,
              importer: tmp2.importer,
              markAsDismissed: tmp,
            };
            const merged = Object.assign(obj.actionSheetProperties);
            tmp3 = (
              <TrackedDismissibleActionSheet
                actionSheetConfig={tmp2}
                hasTrackedRef={hasTrackedRef}
                actionSheetKey={MainViewTooltipActionSheets}
                importer={tmp2.importer}
                markAsDismissed={tmp}
              />
            );
          }
          return tmp3;
        },
      });
    } else if ("single_use" === str2) {
      obj3 = { contentTypes: null, groupName: null, children: null };
      const items6 = [first.id];
      obj3.contentTypes = items6;
      obj3.groupName = constants.MAIN_VIEW_TOOLTIPS;
      obj3.children = function children(visibleContent) {
        let tmp3 = null;
        if (visibleContent.visibleContent === first.id) {
          obj = {
            actionSheetConfig: tmp2,
            hasTrackedRef,
            markAsDismissed: tmp,
            importer: tmp2.importer,
            actionSheetKey: MainViewTooltipActionSheets,
          };
          const merged = Object.assign(obj.actionSheetProperties);
          tmp3 = (
            <TrackedDismissibleActionSheet
              actionSheetConfig={tmp2}
              hasTrackedRef={hasTrackedRef}
              markAsDismissed={tmp}
              importer={tmp2.importer}
              actionSheetKey={MainViewTooltipActionSheets}
            />
          );
        }
        return tmp3;
      };
      return jsx(first(10625), { contentTypes: null, groupName: null, children: null });
    } else {
      return null;
    }
  }
}
export const ACTION_SHEET_REGISTRY = items1;
export { trackActionSheetImpression };
