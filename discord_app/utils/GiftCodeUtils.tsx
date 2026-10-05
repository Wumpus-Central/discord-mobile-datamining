// discord_app/utils/GiftCodeUtils.tsx
import intl12 from "../intl/index.native.tsx";
import AnalyticsUtilsDefault from "AnalyticsUtils.tsx";
import GlobalUtils from "GlobalUtils.tsx";
import PremiumUtils from "PremiumUtils.tsx";
import shared_PlatformUtils from "../../discord_common/js/shared/lib/PlatformUtils.tsx";
import getAnalyticsDataForSKUDefault from "../modules/game_store/getAnalyticsDataForSKU.tsx";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import PremiumPaymentModalStore from "../stores/PremiumPaymentModalStore.tsx";
import UserStore from "../stores/UserStore.tsx";
import Constants from "../Constants.tsx";
import PremiumConstants from "../modules/premium/PremiumConstants.tsx";
import RegexUtils from "RegexUtils.tsx";
import ReactCompilerGating from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c7, c8, closure_5, set;

let c10;
let c9;
let closure_12;
let closure_14;
let items1;
let map1;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
const f90224 = () => "[abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789]{" + c0 + "}";
let obj = function _resolveGiftCode() {
  obj = _asyncToGenerator(async function (gift_code) {
    let obj6;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (gift_code === 1) {
        throw value;
      } else if (gift_code === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        let closure_4;
        let flag2;
        let flag;
        let body;
        c8 = 2;
        if (0 === c7) {
          if (gift_code === 1) {
            c8 = 3;
            throw value;
          } else if (gift_code === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_4 = tmp;
            let closure_3 = tmp4;
            flag2 = undefined;
            flag = closure_1;
            if (closure_1 === undefined) {
              flag = false;
            }
            flag2 = closure_2;
            if (closure_2 === undefined) {
              flag2 = false;
            }
            body = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c7) {
          if (gift_code === 1) {
            c8 = 3;
            throw value;
          } else if (gift_code === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c6 = 1;
            const request = {
              url: closure_132_7.GIFT_CODE_RESOLVE(gift_code),
              query: obj6,
              oldFormErrors: true,
              rejectWithError: false,
            };
            const httpGetWithCountryCodeQuery = closure_132_0(closure_132_2[8]).httpGetWithCountryCodeQuery;
            const tmp42 = closure_132_0(closure_132_2[8]);
            obj6 = { with_application: flag, with_subscription_plan: flag2 };
            c7 = 3;
            c8 = 1;
            const obj7 = { value: httpGetWithCountryCodeQuery(request), done: false };
            return obj7;
          }
        } else if (2 === c7) {
          c6 = 0;
          closure_4 = closure_5;
          const obj8 = { resolved: false, gift_code };
          const obj3 = closure_132_1(closure_132_2[9]);
          obj3.track(closure_132_8.GIFT_CODE_RESOLVED, obj8);
          const self = this;
          const self2 = this;
          const tmp17 = new closure_132_1(closure_132_2[10])(closure_4);
          throw tmp17;
        } else if (gift_code === 1) {
          c8 = 3;
          throw value;
        } else if (gift_code === 2) {
          c6 = 0;
          c8 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          body = value.body;
          const obj11 = {
            resolved: true,
            gift_code: body.code,
            gift_code_max_uses: body.max_uses,
            sku_id: body.store_listing.sku.id,
            sku_type: body.store_listing.sku.type,
            application_id: body.store_listing.sku.application_id,
            store_title: body.store_listing.sku.name,
          };
          const obj9 = closure_132_1(closure_132_2[9]);
          obj9.track(closure_132_8.GIFT_CODE_RESOLVED, obj11, { flush: true });
          c6 = 0;
          c8 = 3;
          obj = { value: body, done: true };
          return obj;
        }
      } catch (tmp20) {
        closure_5 = tmp20;
        if (0 === c6) {
          c8 = 3;
          throw tmp20;
        } else {
          c7 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
function getGiftCodeRedeemError(error, currentUser) {
  const code = error.code;
  if (constants2.INVALID_GIFT_SELF_REDEMPTION === code) {
    const intl11 = intl12.intl;
    return intl11.string(intl12.t.wa9h7F);
  } else if (constants2.INVALID_GIFT_REDEMPTION_EXHAUSTED === code) {
    const intl10 = intl12.intl;
    return intl10.string(intl12.t.Iw2TUW);
  } else if (constants2.INVALID_GIFT_REDEMPTION_OWNED === code) {
    const intl9 = intl12.intl;
    return intl9.string(intl12.t.mdLtb5);
  } else if (constants2.UNKNOWN_GIFT_CODE === code) {
    const intl8 = intl12.intl;
    return intl8.string(intl12.t.roztIr);
  } else if (constants2.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE === code) {
    let stringResult;
    const intl6 = intl12.intl;
    const formatToPlainString = intl6.formatToPlainString;
    const v4YTHKw = intl12.t["4YTHKw"];
    obj = PremiumUtils;
    const isPremiumExactlyResult = obj.isPremiumExactly(currentUser, map1.TIER_2);
    const intl7 = intl12.intl;
    const string = intl7.string;
    const t = intl12.t;
    if (isPremiumExactlyResult) {
      stringResult = string(t.lG6a5x);
    } else {
      stringResult = string(t.FSOz78);
    }
    const obj2 = { planName: stringResult };
    return formatToPlainString(v4YTHKw, obj2);
  } else if (constants2.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED === code) {
    const intl5 = intl12.intl;
    return intl5.string(intl12.t["9i1J30"]);
  } else if (constants2.INVALID_GIFT_REDEMPTION_INVOICE_OPEN === code) {
    const intl4 = intl12.intl;
    return intl4.string(intl12.t["U26WX+"]);
  } else if (constants2.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED === code) {
    const intl3 = intl12.intl;
    return intl3.string(intl12.t.ypuSd8);
  } else if (constants2.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE === code) {
    const intl2 = intl12.intl;
    return intl2.string(intl12.t.mXMmWE);
  } else {
    const intl = intl12.intl;
    return intl.string(intl12.t["s9+XlB"]);
  }
}
({
  Endpoints: metroImportDefault,
  AnalyticEvents: metroImportAll,
  AbortCodes: c9,
  GiftCodeModalStates: c10,
  MessageEmbedTypes: unpackModuleId,
  MessageTypes: closure_12,
} = Constants);
({ PremiumTypes: map1, SubscriptionIntervalTypes: closure_14 } = PremiumConstants);
let items = [
  RegexUtils.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
  ...items1.map((item) => {
    obj = RegexUtils;
    return obj.escape(item);
  }),
];
items1 = ["discordapp.com/gifts", "discord.com/gifts"];
let regExp = new RegExp("(?: |^|https?://)(?:" + items.join("|") + ")/([a-z0-9-]+)", "gi");
const items2 = ["discord.com/billing/promotions", "promos.discord.gg"];
const items3 = [
  ...items2.map((item) => {
    obj = RegexUtils;
    return obj.escape(item);
  }),
];
const regExp1 = new RegExp("(?: |^|https?://)(?:" + items3.join("|") + ")(/|(/)?\\?code=)([a-z0-9-]+)", "gi");
const ArrayResult = Array(4);
const fillResult = ArrayResult.fill(undefined);
let mapped = fillResult.map(f90224);
const items4 = [mapped.join("-?"), , ,];
const ArrayResult1 = Array(6);
const fillResult1 = ArrayResult1.fill(undefined);
const mapped1 = fillResult1.map(f90224);
items4[1] = mapped1.join("-?");
let c0 = 5;
const ArrayResult2 = Array(3);
const fillResult2 = ArrayResult2.fill(undefined);
const mapped2 = fillResult2.map(f90224);
items4[2] = mapped2.join("-?");
items4[3] = "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}";
const regExp2 = new RegExp("^(WUMP-?)?(" + items4.join("|") + ")$");
obj = {
  DEFAULT: 0,
  [0]: "DEFAULT",
  CUSTOM_STYLE: 1,
  [1]: "CUSTOM_STYLE",
  CUSTOM_MESSAGE_EMOJI_SOUNDBOARD: 2,
  [2]: "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD",
};
function getGiftExperience(arg0, arg1) {
  if (!shared_PlatformUtils.isMobile) {
    let DEFAULT;
    if (!shared_PlatformUtils.isTablet) {
      if (null == arg0) {
        const tmp5 = arg1;
        if (!tmp5) {
          DEFAULT = obj.CUSTOM_STYLE;
        }
      }
      DEFAULT = obj.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD;
    }
    return DEFAULT;
  }
  DEFAULT = obj.DEFAULT;
}
function cleanCode(str) {
  return str.replace(/[^A-Za-z0-9]/g, "");
}
function getSubscriptionGiftSuccessText(getOrFetchSubscriptionPlan) {
  _require = getOrFetchSubscriptionPlan;
  const str = require("merged5");
  const match = str.match(getOrFetchSubscriptionPlan);
  obj = { interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_2 };
  const obj2 = { interval: constants6.YEAR, premiumSubscriptionType: closure_13.TIER_2 };
  const obj3 = { interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_1 };
  const withResult = match.with(obj, () => {
    const intl = intl12.intl;
    obj = { intervalCount: subscriptionPlan.intervalCount };
    return intl.formatToPlainString(intl12.t.O2bEOt, obj);
  });
  const obj4 = { interval: constants6.YEAR, premiumSubscriptionType: closure_13.TIER_1 };
  const withResult1 = withResult.with(obj2, () => {
    const intl = intl12.intl;
    obj = { intervalCount: subscriptionPlan.intervalCount };
    return intl.formatToPlainString(intl12.t["ZEvHF+"], obj);
  });
  const withResult2 = withResult1.with(obj3, () => {
    const intl = intl12.intl;
    obj = { intervalCount: subscriptionPlan.intervalCount };
    return intl.formatToPlainString(intl12.t.gjKbF4, obj);
  });
  const withResult3 = withResult2.with(obj4, () => {
    const intl = intl12.intl;
    obj = { intervalCount: subscriptionPlan.intervalCount };
    return intl.formatToPlainString(intl12.t.GIe7Bw, obj);
  });
  return withResult3.otherwise(() => {
    const intl = subscriptionPlan(dependencyMap[12]).intl;
    return intl.string(subscriptionPlan(dependencyMap[12]).t["5ayf7w"]);
  });
}
function getErrorMessage(arg0, error, arg2, arg3, onGoToLibrary) {
  let tmp;
  if (!arg2) {
    if (!arg3) {
      tmp = arg0;
    }
  }
  const intl = intl12.intl;
  obj = { onGoToLibrary };
  let formatResult = intl.format(intl12.t["5zyz9y"], obj);
  if (null == tmp) {
    let tmp5 = null;
    if (null != error) {
      tmp5 = getGiftCodeRedeemError(error, UserStore.getCurrentUser());
    }
    formatResult = tmp5;
  }
  return formatResult;
}
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let first;
      _require = arg0;
      let closure_1 = arg1;
      const tmp = _require;
      obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PremiumPaymentModalStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        let tmp6;
        if (cResult[2] === arg0) {
          tmp6 = cResult[3];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStores(first, tmp6);
      }
      const fn = function l() {
        if (null != closure_0) {
          if (closure_1) {
            const giftCode = PremiumPaymentModalStore.getGiftCode(tmp);
            let tmp5 = null;
            if (null != giftCode) {
              tmp5 = null;
              if ("" !== giftCode) {
                tmp5 = giftCode;
              }
            }
            return tmp5;
          }
        }
        return null;
      };
      cResult[1] = arg1;
      cResult[2] = arg0;
      cResult[3] = fn;
      tmp6 = fn;
    }
  : (arg0, arg1) => {
      let closure_0;
      _require = arg0;
      let closure_1 = arg1;
      const items = [PremiumPaymentModalStore];
      obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        if (null != closure_0) {
          if (closure_1) {
            const giftCode = PremiumPaymentModalStore.getGiftCode(tmp);
            let tmp5 = null;
            if (null != giftCode) {
              tmp5 = null;
              if ("" !== giftCode) {
                tmp5 = giftCode;
              }
            }
            return tmp5;
          }
        }
        return null;
      });
    };
const result = size.fileFinishedImporting("utils/GiftCodeUtils.tsx");

export const GiftExperience = obj;
export { getGiftExperience };
export const shouldShowCustomGiftExperience = function shouldShowCustomGiftExperience(arg0) {
  if (!shared_PlatformUtils.isMobile) {
    let DEFAULT;
    let tmp5;
    if (!shared_PlatformUtils.isTablet) {
      if (null != arg0) {
        DEFAULT = obj.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD;
        tmp5 = obj;
      } else {
        tmp5 = obj;
        DEFAULT = obj.CUSTOM_STYLE;
      }
    }
    return DEFAULT !== tmp5.DEFAULT;
  }
  DEFAULT = obj.DEFAULT;
  tmp5 = obj;
};
export const makeComboId = function makeComboId(skuId) {
  let str = subscriptionPlanId;
  if (subscriptionPlanId === undefined) {
    str = null;
  }
  if (str == null) {
    str = "";
  }
  let str2 = giftStyle;
  if (giftStyle == null) {
    str2 = "";
  }
  return "" + skuId + ":" + str + ":" + str2;
};
export const parseComboId = function parseComboId(item) {
  let parsed;
  let tmp4;
  const tmp = _slicedToArray(item.split(":"), 3);
  obj = { skuId: tmp[0], subscriptionPlanId: tmp4, giftStyle: parsed };
  tmp4 = null;
  if ("" !== tmp[1]) {
    tmp4 = tmp2;
  }
  parsed = undefined;
  if ("" !== tmp[2]) {
    if (null != tmp[2]) {
      const _Number = Number;
      parsed = Number.parseInt(tmp3);
    }
  }
  return obj;
};
export { cleanCode };
export const isGiftCodeEmbed = function isGiftCodeEmbed(type) {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  let tmp2 = type === constants5.CUSTOM_GIFT;
  if (tmp2) {
    let length;
    if (type != null) {
      const embeds = type.embeds;
      if (embeds != null) {
        length = embeds.length;
      }
    }
    tmp2 = 1 === length;
  }
  if (tmp2) {
    let type1;
    if (type != null) {
      type1 = type.embeds[0].type;
    }
    tmp2 = type1 === unpackModuleId.GIFT;
  }
  return tmp2;
};
export const findGiftCodes = function findGiftCodes(content) {
  if (null == content) {
    return [];
  } else {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    let match = regExp.exec(content);
    if (null != match) {
      if (set.size < 3) {
        const str2 = match[1];
        set.add(str2.replace(/[^A-Za-z0-9]/g, ""));
        const match1 = regExp.exec(content);
        while (null != match1) {
          match = match1;
          if (set.size >= 3) {
            break;
          }
        }
      }
    }
    const _Array = Array;
    return Array.from(set);
  }
};
export const getGiftCodeURL = function getGiftCodeURL() {
  let combined;
  let host;
  let str = code;
  if (code === undefined) {
    str = "";
  }
  if (null != GIFT_CODE_HOST) {
    const _HermesInternal2 = HermesInternal;
    combined = "/" + str;
    host = GIFT_CODE_HOST;
  } else {
    const _location = location;
    host = location.host;
    const _HermesInternal = HermesInternal;
    combined = "/gifts/" + str;
  }
  return "" + location.protocol + "//" + host + combined;
};
export const resolveGiftCode = function resolveGiftCode() {
  return obj(...arguments);
};
export const trackGiftCodeCopy = function trackGiftCodeCopy(giftCodeRecord, value) {
  const track = AnalyticsUtilsDefault.track;
  const GIFT_CODE_COPIED = metroImportAll.GIFT_CODE_COPIED;
  obj = {};
  AnalyticsUtilsDefault;
  const merged = Object.assign(getAnalyticsDataForSKUDefault(value, false, false));
  const merged1 = Object.assign(giftCodeRecord.analyticsData);
  track(GIFT_CODE_COPIED, obj);
};
export const getStep = function getStep(arg0, isSubscription, error) {
  let ERROR;
  let accepted;
  let accepting;
  ({ accepted, accepting } = error);
  if (null == error.error) {
    let SUCCESS;
    if (!accepted) {
      if (!accepting) {
        return ERROR;
      }
    }
    if (tmp2) {
      if (!tmp) {
        if (!accepted) {
          if (!accepting) {
            ERROR = constants3.OPEN;
          }
        }
      }
    }
    if (!accepted) {
      SUCCESS = constants3.CONFIRM;
    } else {
      SUCCESS = constants3.SUCCESS;
    }
    ERROR = SUCCESS;
  }
  ERROR = constants3.ERROR;
};
export const getHeaderText = function getHeaderText(arg0, isSubscription, name) {
  if (constants3.ERROR === arg0) {
    const intl2 = intl12.intl;
    return intl2.formatToMarkdownString(intl12.t.JUvC0s, {});
  } else if (constants3.SUCCESS === arg0) {
    let formatToPlainStringResult;
    isSubscription = isSubscription.isSubscription;
    const intl = intl12.intl;
    if (isSubscription) {
      const obj2 = { skuName: name.name };
      formatToPlainStringResult = intl.formatToPlainString(intl12.t["1C2BG/"], obj2);
    } else {
      formatToPlainStringResult = intl.string(intl12.t["+BNMcF"]);
    }
    return formatToPlainStringResult;
  } else {
    let formatToPlainStringResult1;
    const CONFIRM = constants3.CONFIRM;
    const isSubscription2 = isSubscription.isSubscription;
    const intl3 = intl12.intl;
    if (isSubscription2) {
      obj = { skuName: name.name };
      formatToPlainStringResult1 = intl3.formatToPlainString(intl12.t["2VN4N9"], obj);
    } else {
      formatToPlainStringResult1 = intl3.string(intl12.t.RmamAI);
    }
    return formatToPlainStringResult1;
  }
};
export const getButtonText = function getButtonText(arg0, giftStyle, isCustomGift) {
  isCustomGift = isCustomGift.isCustomGift;
  if (constants3.ERROR === arg0) {
    const intl6 = intl12.intl;
    return intl6.string(intl12.t.w19zb6);
  } else if (constants3.SUCCESS === arg0) {
    const intl5 = intl12.intl;
    return intl5.string(intl12.t.zW87EM);
  } else if (constants3.OPEN === arg0) {
    const intl4 = intl12.intl;
    return intl4.string(intl12.t.F8ktci);
  } else {
    let stringResult;
    const CONFIRM = constants3.CONFIRM;
    if (null != isCustomGift) {
      if (isCustomGift) {
        const intl3 = intl12.intl;
        stringResult = intl3.string(intl12.t.n6I6k4);
      }
      return stringResult;
    }
    if (null != giftStyle.giftStyle) {
      let string2Result;
      const isClaimed = giftStyle.isClaimed;
      const intl2 = intl12.intl;
      const string2 = intl2.string;
      const t2 = intl12.t;
      if (isClaimed) {
        string2Result = string2(t2.OgpR0c);
      } else {
        string2Result = string2(t2["2BWscv"]);
      }
      stringResult = string2Result;
    } else {
      const isSubscription = giftStyle.isSubscription;
      const intl = intl12.intl;
      const string = intl.string;
      const t = intl12.t;
      if (isSubscription) {
        stringResult = string(t.wQ1FHy);
      } else {
        stringResult = string(t.OgpR0c);
      }
    }
  }
};
export { getSubscriptionGiftSuccessText };
export const getSubscriptionGiftStartHeaderText = function getSubscriptionGiftStartHeaderText(
  subscriptionPlan,
  sender,
  name,
) {
  let intervalCount;
  _require = sender;
  const skuName = name;
  if (null == name) {
    let formatToPlainStringResult;
    if (null != sender) {
      const intl2 = require("intl").intl;
      obj = { sender };
      formatToPlainStringResult = intl2.formatToPlainString(require("intl").t.td2m3W, obj);
    } else {
      let intl = require("intl").intl;
      formatToPlainStringResult = intl.string(require("intl").t.hrnGng);
    }
    return formatToPlainStringResult;
  } else {
    let otherwiseResult;
    intervalCount = subscriptionPlan.intervalCount;
    if (null != sender) {
      const str = require("merged5");
      const match = str.match(subscriptionPlan);
      const obj2 = { interval: constants6.MONTH };
      const obj3 = { interval: constants6.YEAR };
      const withResult = match.with(obj2, () => {
        const intl = intl12.intl;
        obj = { username: sender, skuName, intervalCount };
        return intl.formatToPlainString(intl12.t["/RDIEA"], obj);
      });
      const withResult1 = withResult.with(obj3, () => {
        const intl = intl12.intl;
        obj = { username: sender, skuName, intervalCount };
        return intl.formatToPlainString(intl12.t["3CX6Ev"], obj);
      });
      otherwiseResult = withResult1.otherwise(() => {
        const intl = intl12.intl;
        obj = { sender };
        return intl.formatToPlainString(intl12.t.td2m3W, obj);
      });
    } else {
      const str2 = require("merged5");
      const match1 = str2.match(subscriptionPlan);
      const obj4 = { interval: constants6.MONTH };
      const obj5 = { interval: constants6.YEAR };
      const withResult2 = match1.with(obj4, () => {
        const intl = intl12.intl;
        obj = { skuName, intervalCount };
        return intl.formatToPlainString(intl12.t["2O4lo5"], obj);
      });
      const withResult3 = withResult2.with(obj5, () => {
        const intl = intl12.intl;
        obj = { skuName, intervalCount };
        return intl.formatToPlainString(intl12.t["+XjmsR"], obj);
      });
      otherwiseResult = withResult3.otherwise(() => {
        const intl = sender(intervalCount[12]).intl;
        return intl.string(sender(intervalCount[12]).t.hrnGng);
      });
    }
    return otherwiseResult;
  }
};
export const getBodyText = function getBodyText(arg0) {
  let accepted;
  let accepting;
  let error;
  let libraryApplication;
  let onGoToLibrary;
  let sku;
  let step;
  let subscriptionPlan;
  ({ step, sku, error, subscriptionPlan } = arg0);
  ({ libraryApplication, accepted, accepting, onGoToLibrary } = arg0);
  if (subscriptionPlan === undefined) {
    subscriptionPlan = null;
  }
  if (constants3.ERROR === step) {
    let tmp17;
    if (!accepted) {
      if (!accepting) {
        tmp17 = libraryApplication;
      }
    }
    const intl4 = subscriptionPlan(1126).intl;
    const obj2 = { onGoToLibrary };
    let formatResult = intl4.format(subscriptionPlan(1126).t["5zyz9y"], obj2);
    if (null == tmp17) {
      let tmp22 = null;
      if (null != error) {
        tmp22 = getGiftCodeRedeemError(error, UserStore.getCurrentUser());
      }
      formatResult = tmp22;
    }
    return formatResult;
  } else if (constants3.SUCCESS === step) {
    let otherwiseResult;
    if (null != subscriptionPlan) {
      const str = subscriptionPlan(5075);
      const match = str.match(subscriptionPlan);
      const obj3 = { interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_2 };
      const obj4 = { interval: constants6.YEAR, premiumSubscriptionType: closure_13.TIER_2 };
      const obj5 = { interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_1 };
      const withResult = match.with(obj3, () => {
        const intl = intl12.intl;
        obj = { intervalCount: subscriptionPlan.intervalCount };
        return intl.formatToPlainString(intl12.t.O2bEOt, obj);
      });
      const obj6 = { interval: constants6.YEAR, premiumSubscriptionType: closure_13.TIER_1 };
      const withResult1 = withResult.with(obj4, () => {
        const intl = intl12.intl;
        obj = { intervalCount: subscriptionPlan.intervalCount };
        return intl.formatToPlainString(intl12.t["ZEvHF+"], obj);
      });
      const withResult2 = withResult1.with(obj5, () => {
        const intl = intl12.intl;
        obj = { intervalCount: subscriptionPlan.intervalCount };
        return intl.formatToPlainString(intl12.t.gjKbF4, obj);
      });
      const withResult3 = withResult2.with(obj6, () => {
        const intl = intl12.intl;
        obj = { intervalCount: subscriptionPlan.intervalCount };
        return intl.formatToPlainString(intl12.t.GIe7Bw, obj);
      });
      otherwiseResult = withResult3.otherwise(() => {
        const intl = subscriptionPlan(dependencyMap[12]).intl;
        return intl.string(subscriptionPlan(dependencyMap[12]).t["5ayf7w"]);
      });
    } else {
      const intl3 = subscriptionPlan(1126).intl;
      const obj7 = { skuName: sku.name };
      otherwiseResult = intl3.formatToPlainString(subscriptionPlan(1126).t["3CPsbo"], obj7);
    }
    return otherwiseResult;
  } else {
    const CONFIRM = constants3.CONFIRM;
    if (null != subscriptionPlan) {
      let d8rUdy;
      let tmp5;
      if (subscriptionPlan.interval === constants6.MONTH) {
        d8rUdy = subscriptionPlan(1126).t.P9eTKt;
        tmp5 = subscriptionPlan;
      } else {
        tmp5 = subscriptionPlan;
        d8rUdy = subscriptionPlan(1126).t.d8rUdy;
      }
      const intl2 = tmp5(1126).intl;
      const obj8 = { skuName: sku.name, intervalCount: subscriptionPlan.intervalCount };
      return intl2.format(d8rUdy, obj8);
    } else {
      let intl = subscriptionPlan(1126).intl;
      obj = { skuName: sku.name };
      return intl.formatToPlainString(subscriptionPlan(1126).t.l6Ea4Z, obj);
    }
  }
};
export { getErrorMessage };
export const firstLibraryApplicationForGiftCode = function firstLibraryApplicationForGiftCode(
  arg0,
  applicationId,
  arg2,
) {
  let arr = arg0;
  let closure_0 = arg2;
  applicationId = applicationId.applicationId;
  if (arg0.length <= 0) {
    const items = [applicationId];
    arr = items;
  }
  const mapped = arr.map((item) => libraryApplication.getLibraryApplication(applicationId, item, true));
  const found = mapped.filter(GlobalUtils.isNotNullish);
  let first = null;
  if (found.length === arr.length) {
    first = found[0];
  }
  return first;
};
export const processGiftCodeInput = function processGiftCodeInput(str) {
  let str3;
  str = str.trim();
  const parts = str.split("/");
  const str2 = parts.pop();
  const match = str2.match(regExp2);
  if (null == match) {
    return null;
  } else {
    [r10016, r10017, str3] = match;
    let replaced = null;
    _slicedToArray(match, 3);
    if (null != str3) {
      const _RegExp = RegExp;
      const self = this;
      const self2 = this;
      const replace = str3.replace;
      regExp = new RegExp("-", "g");
      replaced = replace(regExp, "");
    }
    return replaced;
  }
};
export const useGetGiftCode = tmp7;
export const trackStep = function trackStep(giftCode) {
  let customMessage;
  let emojiName;
  let productLine;
  let soundId;
  let step;
  let tmp3;
  giftCode = giftCode.giftCode;
  ({ step, customMessage, emojiName, soundId, productLine } = giftCode);
  obj = {
    to_step: step,
    has_custom_message: null != giftCode.giftStyle,
    is_custom_message_edited: tmp3,
    gift_style: null,
    gift_code: null,
    emoji_name: emojiName,
    sound_id: soundId,
    product_line: productLine,
  };
  tmp3 = null != giftCode.giftStyle;
  const track = AnalyticsUtilsDefault.track;
  const GIFT_ACCEPT_STEP = metroImportAll.GIFT_ACCEPT_STEP;
  AnalyticsUtilsDefault;
  if (tmp3) {
    const intl = intl12.intl;
    tmp3 = customMessage !== intl.string(intl12.t.ZkOo1U);
  }
  ({ giftStyle: obj.gift_style, code: obj.gift_code } = giftCode);
  track(GIFT_ACCEPT_STEP, obj);
};
export { getGiftCodeRedeemError };
