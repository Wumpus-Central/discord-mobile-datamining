// discord_app/utils/GiftCodeUtils.tsx
import util from "../intl/index.native.tsx";
import AnalyticsUtilsDefault from "AnalyticsUtils.tsx";
import GlobalUtils from "GlobalUtils.tsx";
import PremiumUtils from "PremiumUtils.tsx";
import shared_PlatformUtils from "../../discord_common/js/shared/lib/PlatformUtils.tsx";
import getAnalyticsDataForSKUDefault from "../modules/game_store/getAnalyticsDataForSKU.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import PremiumPaymentModalStore from "../stores/PremiumPaymentModalStore.tsx";
import UserStore from "../stores/UserStore.tsx";
import RegexUtils from "RegexUtils.tsx";

require = fn;
let closure_18 = async function _resolveGiftCode(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          let flag = closure_1;
          if (closure_1 === undefined) {
            flag = false;
          }
          closure_131_1 = flag;
          let flag2 = closure_2;
          if (closure_2 === undefined) {
            flag2 = false;
          }
          closure_131_2 = flag2;
          let body;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c6 = 1;
          const request = {
            url: closure_132_7.GIFT_CODE_RESOLVE(closure_131_0),
            query: null,
            oldFormErrors: true,
            rejectWithError: false,
          };
          let obj2 = { with_application: closure_131_1, with_subscription_plan: closure_131_2 };
          request.query = obj2;
          c7 = 3;
          c8 = 1;
          const obj3 = { value: closure_132_0(closure_132_2[8]).httpGetWithCountryCodeQuery(request), done: false };
          return obj3;
        }
      } else if (2 === tmp7) {
        c6 = 0;
        closure_131_4 = closure_5;
        obj2 = closure_132_1(closure_132_2[9]);
        const obj4 = { resolved: false, gift_code: closure_131_0 };
        obj2.track(closure_132_8.GIFT_CODE_RESOLVED, obj4);
        const tmp22 = new closure_132_1(closure_132_2[10])(closure_131_4);
        throw tmp22;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        body = value.body;
        const obj6 = {
          resolved: true,
          gift_code: body.code,
          gift_code_max_uses: body.max_uses,
          sku_id: body.store_listing.sku.id,
          sku_type: body.store_listing.sku.type,
          application_id: body.store_listing.sku.application_id,
          store_title: body.store_listing.sku.name,
        };
        closure_132_1(closure_132_2[9]).track(closure_132_8.GIFT_CODE_RESOLVED, obj6, { flush: true });
        c6 = 0;
        c8 = 3;
        obj = { value: body, done: true };
        return obj;
      }
    } catch (tmp25) {
      closure_5 = tmp25;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp25;
      } else {
        c7 = tmp;
      }
    }
  }
};
function getGiftCodeRedeemError(error, currentUser) {
  const code = error.code;
  if (constants2.INVALID_GIFT_SELF_REDEMPTION === code) {
    const intl11 = util.intl;
    return intl11.string(util.t.wa9h7F);
  } else if (tmp.INVALID_GIFT_REDEMPTION_EXHAUSTED === code) {
    const intl10 = util.intl;
    return intl10.string(util.t.Iw2TUW);
  } else if (tmp.INVALID_GIFT_REDEMPTION_OWNED === code) {
    const intl9 = util.intl;
    return intl9.string(util.t.mdLtb5);
  } else if (tmp.UNKNOWN_GIFT_CODE === code) {
    const intl8 = util.intl;
    return intl8.string(util.t.roztIr);
  } else if (tmp.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE === code) {
    const intl6 = util.intl;
    let obj = PremiumUtils;
    const intl7 = util.intl;
    const string = intl7.string;
    const t = util.t;
    if (isPremiumExactlyResult) {
      let stringResult = string(t.lG6a5x);
    } else {
      stringResult = string(t.FSOz78);
    }
    obj = { planName: stringResult };
    return intl6.formatToPlainString(util.t["4YTHKw"], obj);
  } else if (tmp.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED === code) {
    const intl5 = util.intl;
    return intl5.string(util.t["9i1J30"]);
  } else if (tmp.INVALID_GIFT_REDEMPTION_INVOICE_OPEN === code) {
    const intl4 = util.intl;
    return intl4.string(util.t["U26WX+"]);
  } else if (tmp.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED === code) {
    const intl3 = util.intl;
    return intl3.string(util.t.ypuSd8);
  } else if (tmp.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE === code) {
    const intl2 = util.intl;
    return intl2.string(util.t.mXMmWE);
  } else {
    const intl = util.intl;
    return intl.string(util.t["s9+XlB"]);
  }
}
const Constants = fn(1074);
({
  Endpoints: closure_7,
  AnalyticEvents: closure_8,
  AbortCodes: closure_9,
  GiftCodeModalStates: c10,
  MessageEmbedTypes: closure_11,
  MessageTypes: closure_12,
} = Constants);
const PremiumConstants = fn(1373);
({ PremiumTypes: map1, SubscriptionIntervalTypes: closure_14 } = PremiumConstants);
let items = [RegexUtils.escape(window.GLOBAL_ENV.GIFT_CODE_HOST), ...items1.map((item) => RegexUtils.escape(item))];
items1 = ["discordapp.com/gifts", "discord.com/gifts"];
let regExp = new RegExp("(?: |^|https?://)(?:" + items.join("|") + ")/([a-z0-9-]+)", "gi");
const items2 = ["discord.com/billing/promotions", "promos.discord.gg"];
const items3 = [...items2.map((item) => RegexUtils.escape(item))];
const regExp1 = new RegExp("(?: |^|https?://)(?:" + items3.join("|") + ")(/|(/)?\\?code=)([a-z0-9-]+)", "gi");
let closure_129_0 = 4;
const ArrayResult = Array(4);
let mapped = Array(4)
  .fill(undefined)
  .map(() => "[abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789]{" + require + "}");
const items4 = [mapped.join("-?"), , ,];
let closure_130_0 = 4;
const fillResult = Array(4).fill(undefined);
const ArrayResult1 = Array(6);
const mapped1 = Array(6)
  .fill(undefined)
  .map(() => "[abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789]{" + require + "}");
items4[1] = mapped1.join("-?");
let closure_131_0 = 5;
const fillResult1 = Array(6).fill(undefined);
const ArrayResult2 = Array(3);
const mapped2 = Array(3)
  .fill(undefined)
  .map(() => "[abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789]{" + require + "}");
items4[2] = mapped2.join("-?");
items4[3] = "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}";
const regExp2 = new RegExp("^(WUMP-?)?(" + items4.join("|") + ")$");
const GiftExperience = {
  DEFAULT: 0,
  [0]: "DEFAULT",
  CUSTOM_STYLE: 1,
  [1]: "CUSTOM_STYLE",
  CUSTOM_MESSAGE_EMOJI_SOUNDBOARD: 2,
  [2]: "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD",
};
const size = fn(2);
const result = size.fileFinishedImporting("utils/GiftCodeUtils.tsx");

export { GiftExperience };
export const getGiftExperience = function getGiftExperience(arg0, arg1) {
  if (!shared_PlatformUtils.isMobile) {
    if (!shared_PlatformUtils.isTablet) {
      if (null == arg0) {
        if (!arg1) {
          let DEFAULT = obj.CUSTOM_STYLE;
        }
      }
      DEFAULT = obj.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD;
    }
    return DEFAULT;
  }
  DEFAULT = obj.DEFAULT;
};
export const shouldShowCustomGiftExperience = function shouldShowCustomGiftExperience(arg0) {
  if (!shared_PlatformUtils.isMobile) {
    if (!shared_PlatformUtils.isTablet) {
      if (null != arg0) {
        let DEFAULT = obj.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD;
        let tmp5 = obj;
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
export const makeComboId = function makeComboId(skuId, subscriptionPlanId, giftStyle) {
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
  const tmp = _slicedToArray(item.split(":"), 3);
  const obj = { skuId: tmp[0], subscriptionPlanId: null, giftStyle: null };
  let tmp4 = null;
  if ("" !== tmp[1]) {
    tmp4 = tmp2;
  }
  obj.subscriptionPlanId = tmp4;
  let parsed;
  if ("" !== tmp[2]) {
    if (null != tmp3) {
      const _Number = Number;
      parsed = Number.parseInt(tmp3);
    }
  }
  obj.giftStyle = parsed;
  return obj;
};
export const cleanCode = function cleanCode(str) {
  return str.replace(/[^A-Za-z0-9]/g, "");
};
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
    tmp2 = type1 === constants4.GIFT;
  }
  return tmp2;
};
export const findGiftCodes = function findGiftCodes(content) {
  if (null == content) {
    return [];
  } else {
    const _Set = Set;
    const set = new Set();
    let match = regExp.exec(content);
    if (null != match) {
      if (set.size < 3) {
        set.add(match[1].replace(/[^A-Za-z0-9]/g, ""));
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
export const getGiftCodeURL = function getGiftCodeURL(code) {
  let str = code;
  if (code === undefined) {
    str = "";
  }
  if (null != GIFT_CODE_HOST) {
    const _HermesInternal2 = HermesInternal;
    let combined = "/" + str;
    let host = GIFT_CODE_HOST;
  } else {
    const _location = location;
    host = location.host;
    const _HermesInternal = HermesInternal;
    combined = "/gifts/" + str;
  }
  return "" + location.protocol + "//" + host + combined;
};
export const resolveGiftCode = function resolveGiftCode() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const trackGiftCodeCopy = function trackGiftCodeCopy(giftCode, sku) {
  const obj = {};
  const merged = Object.assign(getAnalyticsDataForSKUDefault(sku, false, false));
  const merged1 = Object.assign(giftCode.analyticsData);
  obj.track(constants.GIFT_CODE_COPIED, obj);
};
export const getStep = function getStep(arg0, isSubscription, error) {
  ({ accepted, accepting } = error);
  if (null == error.error) {
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
      const CONFIRM = constants3.CONFIRM;
    }
    const SUCCESS = constants3.SUCCESS;
  }
  ERROR = constants3.ERROR;
};
export const getHeaderText = function getHeaderText(arg0, isSubscription, name) {
  if (constants3.ERROR === arg0) {
    const intl2 = util.intl;
    return intl2.formatToMarkdownString(util.t.JUvC0s, {});
  } else if (tmp.SUCCESS === arg0) {
    const intl = util.intl;
    if (isSubscription.isSubscription) {
      let obj = { skuName: name.name };
      let formatToPlainStringResult = intl.formatToPlainString(tmp3(1114).t["1C2BG/"], obj);
    } else {
      formatToPlainStringResult = intl.string(tmp3(1114).t["+BNMcF"]);
    }
    return formatToPlainStringResult;
  } else {
    const CONFIRM = tmp.CONFIRM;
    const intl3 = util.intl;
    if (isSubscription.isSubscription) {
      obj = { skuName: name.name };
      let formatToPlainStringResult1 = intl3.formatToPlainString(tmp10(1114).t["2VN4N9"], obj);
    } else {
      formatToPlainStringResult1 = intl3.string(tmp10(1114).t.RmamAI);
    }
    return formatToPlainStringResult1;
  }
};
export const getButtonText = function getButtonText(arg0, giftStyle, isCustomGift) {
  isCustomGift = isCustomGift.isCustomGift;
  if (constants3.ERROR === arg0) {
    const intl6 = util.intl;
    return intl6.string(util.t.w19zb6);
  } else if (tmp.SUCCESS === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t.zW87EM);
  } else if (tmp.OPEN === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.F8ktci);
  } else {
    const CONFIRM = tmp.CONFIRM;
    if (null != isCustomGift) {
      if (isCustomGift) {
        const intl3 = util.intl;
        let stringResult = intl3.string(util.t.n6I6k4);
      }
      return stringResult;
    }
    if (null != giftStyle.giftStyle) {
      const intl2 = util.intl;
      const string2 = intl2.string;
      let OgpR0c = util.t;
      if (giftStyle.isClaimed) {
        OgpR0c = OgpR0c.OgpR0c;
        let string2Result = string2(OgpR0c);
      } else {
        string2Result = string2(OgpR0c["2BWscv"]);
      }
    } else {
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (giftStyle.isSubscription) {
        stringResult = string(t.wQ1FHy);
      } else {
        stringResult = string(t.OgpR0c);
      }
    }
  }
};
export const getSubscriptionGiftSuccessText = function getSubscriptionGiftSuccessText(getOrFetchSubscriptionPlan) {
  _require = getOrFetchSubscriptionPlan;
  const match = require("module_4745").match(getOrFetchSubscriptionPlan);
  let obj = { interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_2 };
  const str = require("module_4745");
  obj = { interval: constants6.YEAR, premiumSubscriptionType: closure_13.TIER_2 };
  const withResult = match.with(obj, () => {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.O2bEOt, { intervalCount: subscriptionPlan.intervalCount });
  });
  const obj1 = { interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_1 };
  const withResult1 = match
    .with(obj, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.O2bEOt, { intervalCount: subscriptionPlan.intervalCount });
    })
    .with(obj, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["ZEvHF+"], { intervalCount: subscriptionPlan.intervalCount });
    });
  const obj2 = { interval: constants6.YEAR, premiumSubscriptionType: closure_13.TIER_1 };
  const withResult2 = match
    .with(obj, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.O2bEOt, { intervalCount: subscriptionPlan.intervalCount });
    })
    .with(obj, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["ZEvHF+"], { intervalCount: subscriptionPlan.intervalCount });
    })
    .with({ interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_1 }, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.gjKbF4, { intervalCount: subscriptionPlan.intervalCount });
    });
  return match
    .with(obj, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.O2bEOt, { intervalCount: subscriptionPlan.intervalCount });
    })
    .with(obj, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["ZEvHF+"], { intervalCount: subscriptionPlan.intervalCount });
    })
    .with({ interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_1 }, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.gjKbF4, { intervalCount: subscriptionPlan.intervalCount });
    })
    .with({ interval: constants6.YEAR, premiumSubscriptionType: closure_13.TIER_1 }, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.GIe7Bw, { intervalCount: subscriptionPlan.intervalCount });
    })
    .otherwise(() => {
      const intl = subscriptionPlan(1114).intl;
      return intl.string(subscriptionPlan(1114).t["5ayf7w"]);
    });
};
export const getSubscriptionGiftStartHeaderText = function getSubscriptionGiftStartHeaderText(
  getOrFetchSubscriptionPlan,
  sender,
  name,
) {
  _require = sender;
  const skuName = name;
  if (null == name) {
    if (null != sender) {
      const intl2 = require("util").intl;
      let obj = { sender };
      let formatToPlainStringResult = intl2.formatToPlainString(require("util").t.td2m3W, obj);
    } else {
      let intl = require("util").intl;
      formatToPlainStringResult = intl.string(require("util").t.hrnGng);
    }
    return formatToPlainStringResult;
  } else {
    intervalCount = getOrFetchSubscriptionPlan.intervalCount;
    if (null != sender) {
      const match = require("module_4745").match(getOrFetchSubscriptionPlan);
      obj = { interval: constants6.MONTH };
      const str = require("module_4745");
      const obj1 = { interval: constants6.YEAR };
      const withResult = match.with(obj, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t["/RDIEA"], { username: sender, skuName, intervalCount });
      });
      let otherwiseResult = match
        .with(obj, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["/RDIEA"], { username: sender, skuName, intervalCount });
        })
        .with(obj1, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["3CX6Ev"], { username: sender, skuName, intervalCount });
        })
        .otherwise(() => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.td2m3W, { sender });
        });
      const withResult1 = match
        .with(obj, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["/RDIEA"], { username: sender, skuName, intervalCount });
        })
        .with(obj1, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["3CX6Ev"], { username: sender, skuName, intervalCount });
        });
    } else {
      const match1 = require("module_4745").match(getOrFetchSubscriptionPlan);
      const obj2 = { interval: constants6.MONTH };
      const str2 = require("module_4745");
      const obj3 = { interval: constants6.YEAR };
      const withResult2 = match1.with(obj2, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t["2O4lo5"], { skuName, intervalCount });
      });
      otherwiseResult = match1
        .with(obj2, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["2O4lo5"], { skuName, intervalCount });
        })
        .with(obj3, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["+XjmsR"], { skuName, intervalCount });
        })
        .otherwise(() => {
          const intl = sender(intervalCount[12]).intl;
          return intl.string(sender(intervalCount[12]).t.hrnGng);
        });
      const withResult3 = match1
        .with(obj2, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["2O4lo5"], { skuName, intervalCount });
        })
        .with(obj3, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["+XjmsR"], { skuName, intervalCount });
        });
    }
    return otherwiseResult;
  }
};
export const getBodyText = function getBodyText(arg0) {
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
    const intl4 = subscriptionPlan(1114).intl;
    let obj = { onGoToLibrary };
    let formatResult = intl4.format(subscriptionPlan(1114).t["5zyz9y"], obj);
    if (null == tmp17) {
      let tmp22 = null;
      if (null != error) {
        tmp22 = getGiftCodeRedeemError(error, UserStore.getCurrentUser());
      }
      formatResult = tmp22;
    }
    return formatResult;
  } else if (tmp.SUCCESS === step) {
    if (null != subscriptionPlan) {
      const match = subscriptionPlan(4745).match(subscriptionPlan);
      obj = { interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_2 };
      const str = subscriptionPlan(4745);
      const obj1 = { interval: constants6.YEAR, premiumSubscriptionType: closure_13.TIER_2 };
      const withResult = match.with(obj, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.O2bEOt, { intervalCount: subscriptionPlan.intervalCount });
      });
      const obj2 = { interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_1 };
      const withResult1 = match
        .with(obj, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.O2bEOt, { intervalCount: subscriptionPlan.intervalCount });
        })
        .with(obj1, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["ZEvHF+"], { intervalCount: subscriptionPlan.intervalCount });
        });
      const obj3 = { interval: constants6.YEAR, premiumSubscriptionType: closure_13.TIER_1 };
      const withResult2 = match
        .with(obj, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.O2bEOt, { intervalCount: subscriptionPlan.intervalCount });
        })
        .with(obj1, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["ZEvHF+"], { intervalCount: subscriptionPlan.intervalCount });
        })
        .with(obj2, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.gjKbF4, { intervalCount: subscriptionPlan.intervalCount });
        });
      let otherwiseResult = match
        .with(obj, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.O2bEOt, { intervalCount: subscriptionPlan.intervalCount });
        })
        .with(obj1, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["ZEvHF+"], { intervalCount: subscriptionPlan.intervalCount });
        })
        .with(obj2, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.gjKbF4, { intervalCount: subscriptionPlan.intervalCount });
        })
        .with(obj3, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.GIe7Bw, { intervalCount: subscriptionPlan.intervalCount });
        })
        .otherwise(() => {
          const intl = subscriptionPlan(1114).intl;
          return intl.string(subscriptionPlan(1114).t["5ayf7w"]);
        });
      const withResult3 = match
        .with(obj, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.O2bEOt, { intervalCount: subscriptionPlan.intervalCount });
        })
        .with(obj1, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["ZEvHF+"], { intervalCount: subscriptionPlan.intervalCount });
        })
        .with(obj2, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.gjKbF4, { intervalCount: subscriptionPlan.intervalCount });
        })
        .with(obj3, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.GIe7Bw, { intervalCount: subscriptionPlan.intervalCount });
        });
    } else {
      const intl3 = subscriptionPlan(1114).intl;
      const obj4 = { skuName: sku.name };
      otherwiseResult = intl3.formatToPlainString(subscriptionPlan(1114).t["3CPsbo"], obj4);
    }
    return otherwiseResult;
  } else {
    const CONFIRM = tmp.CONFIRM;
    if (null != subscriptionPlan) {
      if (subscriptionPlan.interval === constants6.MONTH) {
        let d8rUdy = subscriptionPlan(1114).t.P9eTKt;
        let tmp5 = subscriptionPlan;
      } else {
        tmp5 = subscriptionPlan;
        d8rUdy = subscriptionPlan(1114).t.d8rUdy;
      }
      const intl2 = tmp5(1114).intl;
      const obj5 = { skuName: sku.name, intervalCount: subscriptionPlan.intervalCount };
      return intl2.format(d8rUdy, obj5);
    } else {
      let intl = subscriptionPlan(1114).intl;
      obj = { skuName: sku.name };
      return intl.formatToPlainString(subscriptionPlan(1114).t.l6Ea4Z, obj);
    }
  }
};
export const getErrorMessage = function getErrorMessage(arg0, error, arg2, arg3, onGoToLibrary) {
  let tmp;
  if (!arg2) {
    if (!arg3) {
      tmp = arg0;
    }
  }
  const intl = util.intl;
  let formatResult = intl.format(util.t["5zyz9y"], { onGoToLibrary });
  if (null == tmp) {
    let tmp5 = null;
    if (null != error) {
      tmp5 = getGiftCodeRedeemError(error, UserStore.getCurrentUser());
    }
    formatResult = tmp5;
  }
  return formatResult;
};
export const firstLibraryApplicationForGiftCode = function firstLibraryApplicationForGiftCode(
  arg0,
  applicationId,
  arg2,
) {
  let arr = arg0;
  const libraryApplication = arg2;
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
  const parts = str.trim().split("/");
  str = str.trim();
  const match = parts.pop().match(regExp2);
  if (null == match) {
    return null;
  } else {
    [r10016, r10017, str3] = _slicedToArray(match, 3);
    let replaced = null;
    if (null != str3) {
      const _RegExp = RegExp;
      regExp = new RegExp("-", "g");
      replaced = str3.replace(regExp, "");
    }
    return replaced;
  }
  const str2 = parts.pop();
};
export const useGetGiftCode = function useGetGiftCode(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const items = [PremiumPaymentModalStore];
  return require("initialize").useStateFromStores(items, () => {
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
export const trackStep = function trackStep(giftCode) {
  giftCode = giftCode.giftCode;
  ({ step, customMessage, emojiName, soundId, productLine } = giftCode);
  const obj = {
    to_step: step,
    has_custom_message: null != giftCode.giftStyle,
    is_custom_message_edited: null,
    gift_style: null,
    gift_code: null,
    emoji_name: null,
    sound_id: null,
    product_line: null,
  };
  let tmp2 = null != giftCode.giftStyle;
  if (tmp2) {
    const intl = util.intl;
    tmp2 = customMessage !== intl.string(util.t.ZkOo1U);
  }
  obj.is_custom_message_edited = tmp2;
  ({ giftStyle: obj2.gift_style, code: obj2.gift_code } = giftCode);
  obj.emoji_name = emojiName;
  obj.sound_id = soundId;
  obj.product_line = productLine;
  obj.track(constants.GIFT_ACCEPT_STEP, obj);
};
export { getGiftCodeRedeemError };
