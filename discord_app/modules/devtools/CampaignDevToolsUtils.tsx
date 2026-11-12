// === Module 9603: CampaignDevToolsUtils ===

// Module 9603 (CampaignDevToolsUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1113 */;
import ProtoUtils from "ProtoUtils" /* 1234 */;
import dismissible_content from "dismissible_content" /* 5076 */;
import _mod7013 from "module_7013" /* 7013 */;
import premium_marketing_component_properties from "premium_marketing_component_properties" /* 9561 */;
import MarketingComponentPlatform from "MarketingComponentPlatform" /* 9604 */;
import resolveLocalizedProperties from "resolveLocalizedProperties" /* 9605 */;
import MarketingComponentType from "MarketingComponentType" /* 9608 */;
import MarketingStringFormat from "MarketingStringFormat" /* 9609 */;
import MobileBottomSheetDismissibleContent from "MobileBottomSheetDismissibleContent" /* 9610 */;
import MarketingComponentRecord from "MarketingComponentRecord" /* 9558 */;

require = fn;
function campaignState(start_date, timestamp) {
  start_date = start_date.start_date;
  let tmp = null;
  if (null != start_date) {
    const _Date = Date;
    const parsed = Date.parse(start_date);
    const _Number = Number;
    let tmp4 = null;
    if (!Number.isNaN(parsed)) {
      tmp4 = parsed;
    }
    tmp = tmp4;
  }
  const end_date = start_date.end_date;
  let tmp5 = null;
  if (null != end_date) {
    const _Date2 = Date;
    const parsed1 = Date.parse(end_date);
    const _Number2 = Number;
    let tmp8 = null;
    if (!Number.isNaN(parsed1)) {
      tmp8 = parsed1;
    }
    tmp5 = tmp8;
  }
  if (null != tmp5) {
    if (timestamp > tmp5) {
      let UPCOMING = obj.ENDED;
    }
    return UPCOMING;
  }
  if (2 !== start_date.lifecycle_state) {
    UPCOMING = obj.DRAFT;
  } else {
    if (null != tmp) {
      if (null != tmp5) {
        if (timestamp >= tmp) {
          UPCOMING = obj.ACTIVE;
        }
      }
    }
    UPCOMING = obj.UPCOMING;
  }
}
function componentProperties(nextResult) {
  return ProtoUtils.b64ToProto(premium_marketing_component_properties.PremiumMarketingComponentProperties, nextResult.properties);
}
function campaignLocalDate(end_date) {
  if (null === end_date) {
    return "Not set";
  } else {
    let tmp4 = null;
    if (null != end_date) {
      const _Date = Date;
      const parsed = Date.parse(end_date);
      const _Number = Number;
      let tmp3 = null;
      if (!Number.isNaN(parsed)) {
        tmp3 = parsed;
      }
      tmp4 = tmp3;
    }
    let str = "Unavailable";
    if (null != tmp4) {
      const _Date2 = Date;
      const date = new Date(tmp4);
      str = date.toLocaleString(util.intl.currentLocale, { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short" });
    }
    return str;
  }
}
function surfaceIsTimed(surface_start_date) {
  return null != (undefined === surface_start_date.surface_start_date ? surface_start_date.start_date : surface_start_date.surface_start_date) || null != (undefined === surface_start_date.surface_end_date ? surface_start_date.end_date : surface_start_date.surface_end_date);
}
function componentTypeName(component_type, properties) {
  let str = component_type;
  if (typeof component_type === "number") {
    str = MarketingComponentType.MarketingComponentType[component_type];
  }
  if (str == null) {
    let oneofKind;
    if (properties != null) {
      oneofKind = properties.properties.oneofKind;
    }
    str = oneofKind;
  }
  if (null != str) {
    const replaced = str.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
    const str8 = replaced.replaceAll("_", " ").toLowerCase();
    const str7 = replaced.replaceAll("_", " ");
    const formatted = str8.charAt(0).toUpperCase();
    const str9 = str8.charAt(0);
    let str2 = formatted + str8.slice(1).replace(/\bnitro\b/g, "Nitro");
    const str10 = str8.slice(1);
  } else {
    str2 = "Unknown surface";
    if (null != component_type) {
      const _HermesInternal = HermesInternal;
      str2 = "Surface type " + component_type;
    }
  }
  return str2;
}
function campaignStateLabel(lifecycle_state, timestamp) {
  if (null == lifecycle_state.lifecycle_state) {
    return "Unavailable";
  } else {
    const tmp3 = campaignState(lifecycle_state, timestamp);
    const tmp4 = { 0: "Draft", 2: "Published" }[lifecycle_state.lifecycle_state];
    let combined = tmp3;
    if (null != tmp4) {
      combined = tmp3;
      if (tmp4 !== tmp3) {
        const _HermesInternal = HermesInternal;
        combined = "" + tmp4 + " (" + tmp3 + ")";
      }
    }
    return combined;
  }
}
function componentDismissibleContents(component_type, properties) {
  if (component_type.component_type === MarketingComponentType.MarketingComponentType.MOBILE_BOTTOM_SHEET) {
    properties = properties.properties;
    let mobileBottomSheet = null;
    if ("mobileBottomSheet" === properties.oneofKind) {
      mobileBottomSheet = properties.mobileBottomSheet;
    }
    items = [MobileBottomSheetDismissibleContent.getMobileBottomSheetDismissibleContent(mobileBottomSheet)];
    return items;
  } else if (component_type.component_type === MarketingComponentType.MarketingComponentType.GIFT_ICON) {
    if (component_type.platform === MarketingComponentPlatform.MarketingComponentPlatform.MOBILE) {
      const items1 = [dismissible_content.DismissibleContent.GIFTING_PROMOTION_ICON];
      let items2 = items1;
    } else {
      items2 = [];
    }
  } else if (component_type.component_type === MarketingComponentType.MarketingComponentType.GIFT_ICON_COACHMARK) {
    if (component_type.platform === MarketingComponentPlatform.MarketingComponentPlatform.MOBILE) {
      const items3 = [dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET];
      let items4 = items3;
    } else {
      items4 = [dismissible_content.DismissibleContent.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK];
    }
  } else {
    let items5 = obj2[component_type.component_type];
    if (items5 == null) {
      items5 = [];
    }
    return items5;
  }
}
function campaignDismissibleContentLabel(component_type, properties, item10028) {
  if (item10028 === dismissible_content.DismissibleContent.GUILD_BOOST_TAB_HIGHLIGHT) {
    return "Guild boost tab highlight";
  } else {
    const tmp10 = componentTypeName(component_type.component_type, properties);
    if (component_type.component_type !== MarketingComponentType.MarketingComponentType.MOBILE_BOTTOM_SHEET) {
      return tmp10;
    } else if (item10028 === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL) {
      const _HermesInternal2 = HermesInternal;
      let combined = "" + tmp10 + ": announcement";
    } else if (item10028 === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL) {
      const _HermesInternal = HermesInternal;
      combined = "" + tmp10 + ": reminder";
    } else {
      const replaced = dismissible_content.DismissibleContent[item10028].replace(/([a-z0-9])([A-Z])/g, "$1 $2");
      const str11 = replaced.replaceAll("_", " ").toLowerCase();
      const str10 = replaced.replaceAll("_", " ");
      const formatted = str11.charAt(0).toUpperCase();
      const str12 = str11.charAt(0);
      const _HermesInternal3 = HermesInternal;
      combined = "" + tmp10 + ": " + formatted + str11.slice(1).replace(/\bnitro\b/g, "Nitro");
      const str13 = str11.slice(1);
    }
  }
}
const PremiumTypes = fn(1387).PremiumTypes;
let obj = { DRAFT: "Draft", UPCOMING: "Upcoming", ACTIVE: "Active", ENDED: "Ended" };
let closure_6 = { [obj.DRAFT]: "start_date", [obj.UPCOMING]: "start_date", [obj.ACTIVE]: "end_date", [obj.ENDED]: "end_date" };
let obj2 = {};
let items = [fn(5076).DismissibleContent.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL];
obj2[fn(9608).MarketingComponentType.ANNOUNCEMENT_MODAL] = items;
let items1 = [fn(5076).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE];
obj2[fn(9608).MarketingComponentType.PREMIUM_TAB] = items1;
let items2 = [fn(5076).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL];
obj2[fn(9608).MarketingComponentType.PREMIUM_TAB_POPOVER] = items2;
let items3 = [fn(5076).DismissibleContent.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL];
obj2[fn(9608).MarketingComponentType.NAGBAR] = items3;
let items4 = [fn(5076).DismissibleContent.GIFTING_PROMOTION_REMINDER];
obj2[fn(9608).MarketingComponentType.GIFT_REMINDER_COACHMARK] = items4;
let items5 = [fn(5076).DismissibleContent.GIFTING_PROMOTION_REMINDER];
obj2[fn(9608).MarketingComponentType.GIFT_REMINDER_NAGBAR] = items5;
const items6 = [fn(5076).DismissibleContent.PREMIUM_SHOP_NAGBAR_NOTICE];
obj2[fn(9608).MarketingComponentType.SHOP_NAGBAR] = items6;
const items7 = [fn(5076).DismissibleContent.SHOP_TAB_TOOLTIP];
obj2[fn(9608).MarketingComponentType.SHOP_TAB_TOOLTIP] = items7;
const items8 = [fn(5076).DismissibleContent.SHOP_TAB_TOOLTIP];
obj2[fn(9608).MarketingComponentType.SHOP_COACHMARK] = items8;
const items9 = [fn(5076).DismissibleContent.GUILD_HEADER_COACHMARK];
obj2[fn(9608).MarketingComponentType.GUILD_HEADER_COACHMARK] = items9;
const items10 = [fn(5076).DismissibleContent.GUILD_BOOST_TAB_BANNER, fn(5076).DismissibleContent.GUILD_BOOST_TAB_HIGHLIGHT];
obj2[fn(9608).MarketingComponentType.GUILD_BOOST_TAB_BANNER] = items10;
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/CampaignDevToolsUtils.tsx");

export function filterCampaigns(campaigns, query, arg2) {
  obj2 = {
    keys: null,
    sorter(arr) {
      return arr.sort((index, index2) => index.index - index2.index);
    }
  };
  items = [arg2, "id"];
  obj2.keys = items;
  return _mod7013.matchSorter(campaigns, query, obj2);
}
export function groupCampaigns(arg0) {
  closure_0 = arg0;
  closure_1 = Date.now();
  const values = Object.values(obj);
  const mapped = values.map((label) => {
    closure_0 = label;
    obj = { label, campaigns: null };
    const found = closure_0.filter((item) => campaignState(item, closure_1) === closure_0);
    obj.campaigns = found.sort((arg0, arg1) => {
      let num = Infinity;
      if (closure_0 === obj.ENDED) {
        num = -Infinity;
      }
      let tmp3 = null;
      if (null != arg1[dependencyMap[closure_0]]) {
        const _Date = Date;
        const parsed = Date.parse(tmp2);
        const _Number = Number;
        let tmp6 = null;
        if (!Number.isNaN(parsed)) {
          tmp6 = parsed;
        }
        tmp3 = tmp6;
      }
      if (tmp3 == null) {
        tmp3 = num;
      }
      let tmp8 = null;
      if (null != arg0[dependencyMap[closure_0]]) {
        const _Date2 = Date;
        const parsed1 = Date.parse(tmp7);
        const _Number2 = Number;
        let tmp11 = null;
        if (!Number.isNaN(parsed1)) {
          tmp11 = parsed1;
        }
        tmp8 = tmp11;
      }
      if (tmp8 == null) {
        tmp8 = num;
      }
      return tmp3 - tmp8;
    });
    return obj;
  });
  return mapped.filter((campaigns) => campaigns.campaigns.length > 0);
}
export function resolveCampaignComponents(components, arg1, arg2, endDate, arg4) {
  _require = arg1;
  closure_1 = arg2;
  dependencyMap = endDate;
  closure_3 = arg4;
  const MOBILE = require("MarketingComponentPlatform").MarketingComponentPlatform.MOBILE;
  let found = components.filter((platform) => {
    let tmp = platform.platform === MOBILE;
    if (tmp) {
      tmp = !ProtoUtils.b64ToProto(premium_marketing_component_properties.PremiumMarketingComponentProperties, platform.properties).isDefaultBase;
    }
    return tmp;
  });
  const map = new Map();
  const iter = found[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let component_type = nextResult.component_type;
    let tmp3 = nextResult;
    let tmp4 = component_type;
    items = map.get(component_type);
    if (items == null) {
      items = [];
    }
    let arr = items.push(tmp3);
    let result = map.set(tmp4, items);
    continue;
  }
  return Array.from(map.values()).flatMap((arr) => {
    let found = arr.filter((premium_type) => {
      let flag = false;
      if (null != premium_type.premium_type) {
        if (0 === premium_type.premium_type) {
          let isPremiumExactlyResult = !closure_0(2107).isPremium(closure_1_0);
          obj2 = closure_0(2107);
        } else {
          isPremiumExactlyResult = closure_0(2107).isPremiumExactly(closure_1_0, premium_type.premium_type);
          obj = closure_0(2107);
        }
        if (undefined !== closure_1_3) {
          let num2 = closure_1_3;
          if (closure_1_3 == null) {
            num2 = 0;
          }
          isPremiumExactlyResult = premium_type.premium_type === num2;
        }
        if (undefined === closure_1_3) {
          let premiumState = closure_1_0.premiumState;
        } else if (null === closure_1_3) {
          const obj3 = { premiumSource: closure_0(9606).PremiumSource.NONE, premiumSubscriptionType: closure_0(9607).PremiumSubscriptionType.NONE };
          premiumState = obj3;
        } else {
          const obj4 = {};
          obj4[MOBILE.TIER_0] = closure_0(9607).PremiumSubscriptionType.TIER_0;
          obj4[MOBILE.TIER_1] = closure_0(9607).PremiumSubscriptionType.TIER_1;
          obj4[MOBILE.TIER_2] = closure_0(9607).PremiumSubscriptionType.TIER_2;
          premiumState = { premiumSource: closure_0(9606).PremiumSource.SUBSCRIPTION, premiumSubscriptionType: obj4[closure_1_3] };
        }
        if (isPremiumExactlyResult) {
          let premiumSource;
          if (premiumState != null) {
            premiumSource = premiumState.premiumSource;
          }
          isPremiumExactlyResult = null == premiumSource || premium_type.premium_source === premiumState.premiumSource;
          const tmp14 = null == premiumSource || premium_type.premium_source === premiumState.premiumSource;
        }
        if (isPremiumExactlyResult) {
          let prop;
          if (premiumState != null) {
            prop = premiumState.premiumSubscriptionType;
          }
          isPremiumExactlyResult = null == prop || premium_type.premium_subscription_type === premiumState.premiumSubscriptionType;
          const tmp16 = null == prop || premium_type.premium_subscription_type === premiumState.premiumSubscriptionType;
        }
        flag = isPremiumExactlyResult;
      }
      return flag;
    });
    if (found.length <= 0) {
      found = arr.filter((premium_type) => null == premium_type.premium_type && null == premium_type.premium_source && null == premium_type.premium_subscription_type);
    }
    return found.map((id) => {
      obj = closure_0(9605);
      let tmp3 = null;
      const localizedProperties = obj.resolveLocalizedProperties(closure_0(1234).b64ToProto(closure_0(9561).PremiumMarketingComponentProperties, id.properties), closure_1_1);
      if (null != dependencyMap) {
        const _Date = Date;
        const parsed = Date.parse(dependencyMap);
        const _Number = Number;
        let tmp6 = null;
        if (!Number.isNaN(parsed)) {
          tmp6 = parsed;
        }
        tmp3 = tmp6;
      }
      const obj3 = { id: id.id, componentType: id.component_type, properties: localizedProperties, promotionId: id.promotion_id, startDate: null, endDate: null, effectiveStartDate: null, effectiveEndDate: null, promotionEndDate: null, promotionPriority: 0 };
      let date = null;
      if (null != tmp3) {
        const _Date2 = Date;
        date = new Date(tmp3);
      }
      obj3.promotionEndDate = date;
      obj2 = closure_0(1234);
      return new closure_3(obj3);
    });
  });
}
export function resolveCampaignPreviewComponents(stateFromStoresArray, stateFromStores1, end_date) {
  _require = stateFromStores1;
  closure_1 = end_date;
  let MOBILE = arg3;
  if (arg3 === undefined) {
    MOBILE = require("MarketingComponentPlatform").MarketingComponentPlatform.MOBILE;
  }
  const found = stateFromStoresArray.filter((platform) => {
    let tmp = platform.platform === MOBILE;
    if (tmp) {
      tmp = !ProtoUtils.b64ToProto(premium_marketing_component_properties.PremiumMarketingComponentProperties, platform.properties).isDefaultBase;
    }
    return tmp;
  });
  return found.map((id) => {
    obj = resolveLocalizedProperties;
    let tmp3 = null;
    const localizedProperties = obj.resolveLocalizedProperties(ProtoUtils.b64ToProto(premium_marketing_component_properties.PremiumMarketingComponentProperties, id.properties), closure_0);
    if (null != closure_1) {
      const _Date = Date;
      const parsed = Date.parse(closure_1);
      const _Number = Number;
      let tmp6 = null;
      if (!Number.isNaN(parsed)) {
        tmp6 = parsed;
      }
      tmp3 = tmp6;
    }
    const obj3 = { id: id.id, componentType: id.component_type, properties: localizedProperties, promotionId: id.promotion_id, startDate: null, endDate: null, effectiveStartDate: null, effectiveEndDate: null, promotionEndDate: null, promotionPriority: 0 };
    let date = null;
    if (null != tmp3) {
      const _Date2 = Date;
      date = new Date(tmp3);
    }
    obj3.promotionEndDate = date;
    return new MarketingComponentRecord(obj3);
  });
}
export function campaignDetails(found, stateFromStoresArray) {
  const timestamp = Date.now();
  const map = new Map();
  found = stateFromStoresArray.filter((properties) => !everyResult(1234).b64ToProto(everyResult(9561).PremiumMarketingComponentProperties, properties.properties).isDefaultBase);
  const everyResult = found.every((surface_id) => null != surface_id.surface_id);
  const require = everyResult;
  const iter = found[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    let id = nextResult.surface_id;
    if (id == null) {
      id = tmp4.id;
    }
    let result = map.set(id, tmp4);
    continue;
  }
  const map1 = new Map();
  let num = 0;
  const values = map.values();
  const iter2 = values[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    let tmp10 = nextResult1;
    let tmp13 = componentTypeName(nextResult1.component_type, componentProperties(nextResult1));
    let num2 = map1.get(tmp13);
    if (num2 == null) {
      num2 = 0;
    }
    let result1 = map1.set(tmp13, num2 + 1);
    if (surfaceIsTimed(tmp10)) {
      num = num + 1;
    }
    continue;
  }
  items = [{ label: "Starts", value: campaignLocalDate(found.start_date) }, , ];
  obj = { label: "Starts", value: campaignLocalDate(found.start_date) };
  items[1] = { label: "Ends", value: campaignLocalDate(found.end_date) };
  obj2 = { label: "Ends", value: campaignLocalDate(found.end_date) };
  items[2] = { label: "State", value: campaignStateLabel(found, timestamp) };
  if (null != found.localization_status) {
    let str = { 0: "Draft", 1: "Out for localization", 2: "Localized" }[found.localization_status];
    if (str == null) {
      str = "Unknown";
    }
    const obj4 = { label: "Localization", value: str };
    items.push(obj4);
  }
  let str2 = "Unavailable";
  if (everyResult) {
    const _String = String;
    str2 = String(map.size);
  }
  const items1 = [{ label: "Surfaces", value: str2 }, ];
  const obj3 = { label: "State", value: campaignStateLabel(found, timestamp) };
  const sorted = Array.from(map1).sort((arg0, arg1) => {
    [obj] = arg0;
    [tmp] = arg1;
    return obj.localeCompare(tmp);
  });
  let str3 = "Timed variants";
  const arr2 = Array.from(map1);
  if (everyResult) {
    str3 = "Timed surfaces";
  }
  const arraySpreadResult = HermesBuiltin.arraySpread(sorted.map((item) => {
    [tmp, tmp2] = item;
    let combined = tmp;
    if (!everyResult) {
      const _HermesInternal = HermesInternal;
      combined = "" + tmp + " variants";
    }
    return { label: combined, value: String(tmp2) };
  }), 1);
  items1[arraySpreadResult] = { label: str3, value: String(num) };
  items.push.apply(items1);
  return items;
}
export function campaignPreviewActions(arr, stateFromStoresArray, found) {
  closure_0 = found;
  const map = new Map(stateFromStoresArray.map((id) => {
    items = [id.id, id];
    return items;
  }));
  const set = new Set();
  return arr.flatMap((componentType) => {
    if (componentType.componentType !== MarketingComponentType.MarketingComponentType.ANNOUNCEMENT_MODAL) {
      if (componentType.componentType !== MarketingComponentType.MarketingComponentType.MOBILE_BOTTOM_SHEET) {
        return [];
      }
    }
    value = map.get(componentType.id);
    if (null != value) {
      if (tmpResult.b64ToProto(premium_marketing_component_properties.PremiumMarketingComponentProperties, value.properties).isDefaultBase) {
        return [];
      }
      tmpResult = ProtoUtils;
    }
    const combined = "" + componentType.componentType + ":" + componentType.id;
    if (set.has(combined)) {
      items = [];
    } else {
      set.add(combined);
      obj2 = { component: componentType };
      const value2 = map.get(componentType.id);
      let str = "Unknown";
      if (null != value2) {
        let str2 = "Everyone";
        if (null != value2.premium_type) {
          let str3 = "Non-Nitro";
          if (0 !== value2.premium_type) {
            let str4 = "Nitro Basic";
            if (value2.premium_type !== PremiumTypes.TIER_0) {
              let str5 = "Nitro Classic";
              if (value2.premium_type !== PremiumTypes.TIER_1) {
                let str6 = "Nitro";
                if (value2.premium_type !== PremiumTypes.TIER_2) {
                  const _HermesInternal = HermesInternal;
                  str6 = "Premium tier " + value2.premium_type;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        str = str2;
      }
      let str8 = "Unavailable";
      let str9 = "Unavailable";
      if (null != value2) {
        str9 = "Untimed";
        if (tmp9) {
          let tmp10 = undefined === value2.surface_start_date ? value2.start_date : value2.surface_start_date;
          let tmp11 = undefined === value2.surface_end_date ? value2.end_date : value2.surface_end_date;
          if (tmp10 == null) {
            let start_date;
            if (closure_0 != null) {
              start_date = closure_0.start_date;
            }
            tmp10 = start_date;
          }
          let str10 = "Not set";
          let str11 = "Not set";
          if (null !== tmp10) {
            let tmp15 = null;
            if (null != tmp10) {
              const _Date = Date;
              const parsed = Date.parse(tmp10);
              const _Number = Number;
              let tmp14 = null;
              if (!Number.isNaN(parsed)) {
                tmp14 = parsed;
              }
              tmp15 = tmp14;
            }
            let toLocaleStringResult = str8;
            if (null != tmp15) {
              const _Date2 = Date;
              const date = new Date(tmp15);
              toLocaleStringResult = date.toLocaleString(util.intl.currentLocale, { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short" });
            }
            str11 = toLocaleStringResult;
          }
          if (tmp11 == null) {
            let end_date;
            if (closure_0 != null) {
              end_date = closure_0.end_date;
            }
            tmp11 = end_date;
          }
          if (null !== tmp11) {
            let tmp24 = null;
            if (null != tmp11) {
              const _Date3 = Date;
              const parsed1 = Date.parse(tmp11);
              const _Number2 = Number;
              let tmp23 = null;
              if (!Number.isNaN(parsed1)) {
                tmp23 = parsed1;
              }
              tmp24 = tmp23;
            }
            if (null != tmp24) {
              const _Date4 = Date;
              const date1 = new Date(tmp24);
              str8 = date1.toLocaleString(util.intl.currentLocale, { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short" });
            }
            str10 = str8;
          }
          const _HermesInternal2 = HermesInternal;
          str9 = "" + str11 + " to " + str10;
        }
        tmp9 = null != (undefined === value2.surface_start_date ? value2.start_date : value2.surface_start_date) || null != (undefined === value2.surface_end_date ? value2.end_date : value2.surface_end_date);
      }
      let experiment_id;
      if (value2 != null) {
        experiment_id = value2.experiment_id;
      }
      let tmp30 = null;
      if (null != experiment_id) {
        tmp30 = null;
        if (null != value2.experiment_variation_id) {
          const experiment_variation_id = value2.experiment_variation_id;
          let str13 = "Control";
          if (0 !== experiment_variation_id) {
            const _HermesInternal3 = HermesInternal;
            str13 = "Treatment " + experiment_variation_id;
          }
          tmp30 = str13;
        }
      }
      const properties = componentType.properties.properties;
      let str16 = "";
      if ("announcementModalVariant1" === properties.oneofKind) {
        str16 = properties.announcementModalVariant1.header;
      }
      if ("mobileBottomSheet" === properties.oneofKind) {
        str16 = properties.mobileBottomSheet.header;
      }
      let content = componentTypeName(componentType.componentType, componentType.properties);
      let tmp33 = content;
      if ("" !== str16.trim()) {
        const result = MarketingStringFormat.formatMarketingPlainString(str16, componentType.getFormatVariableValues(util.intl.currentLocale));
        if (result.ok) {
          content = result.content;
        }
        tmp33 = content;
        const tmpResult2 = MarketingStringFormat;
      }
      const obj4 = { title: tmp33, target: str, timing: str9, variant: tmp30 };
      const merged = Object.assign(obj4);
      items = [obj2];
    }
    return items;
  });
}
export function groupCampaignPreviewActions(found1) {
  const map = new Map();
  const iter = found1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    items = map.get(nextResult.title);
    if (items == null) {
      items = [];
    }
    let arr = items.push(tmp2);
    let result = map.set(tmp2.title, items);
    continue;
  }
  return Array.from(map, (arg0) => {
    [tmp, tmp2] = arg0;
    return { title, variants };
  });
}
export function campaignDismissibleContents(arg0) {
  function add(item10028, arg1) {
    let set = map.get(item10028);
    if (set == null) {
      const _Set = Set;
      set = new Set();
    }
    set.add(arg1);
    const result = map.set(item10028, set);
  }
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let tmp5 = componentProperties(nextResult);
    let tmp6 = tmp5;
    if (!tmp5.isDefaultBase) {
      let tmp10 = componentDismissibleContents(tmp3, tmp6);
      for (const item10028 of tmp10) {
        let addResult = add(item10028, campaignDismissibleContentLabel(tmp3, tmp6, item10028));
        continue;
      }
    }
    continue;
  }
  return Array.from(new Map(), (arg0) => {
    [tmp, tmp2] = arg0;
    obj = { content: tmp, label: Array.from(tmp2).join(", ") };
    return obj;
  });
}
export function campaignPromotionDismissalStatus(arg0, lastDismissedObjectId) {
  let tmp = null != lastDismissedObjectId;
  if (tmp) {
    tmp = SnowflakeUtilsDefault.compare(arg0, lastDismissedObjectId.lastDismissedObjectId) <= 0;
  }
  if (lastDismissedObjectId != null) {
    const lastDismissedAtMs = lastDismissedObjectId.lastDismissedAtMs;
  }
  let str = "Not dismissed";
  if (tmp) {
    const _Number = Number;
    const NumberResult = Number(lastDismissedAtMs);
    const _Number2 = Number;
    let str3 = "Dismissed";
    if (Number.isFinite(NumberResult)) {
      str3 = "Dismissed";
      if (NumberResult > 0) {
        const _Date = Date;
        const date = new Date(NumberResult);
        const toISOStringResult = date.toISOString();
        let str4 = "Not set";
        if (null !== toISOStringResult) {
          let tmp14 = null;
          if (null != toISOStringResult) {
            const _Date2 = Date;
            const parsed = Date.parse(toISOStringResult);
            const _Number3 = Number;
            let tmp13 = null;
            if (!Number.isNaN(parsed)) {
              tmp13 = parsed;
            }
            tmp14 = tmp13;
          }
          let str5 = "Unavailable";
          if (null != tmp14) {
            const _Date3 = Date;
            const date1 = new Date(tmp14);
            str5 = date1.toLocaleString(util.intl.currentLocale, { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short" });
          }
          str4 = str5;
        }
        const _HermesInternal = HermesInternal;
        str3 = "Dismissed: " + str4;
      }
    }
    str = str3;
  }
  return str;
}