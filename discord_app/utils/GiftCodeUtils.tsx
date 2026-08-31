// === Module 4720: _resolveGiftCode ===

// Module 4720 (_resolveGiftCode)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getAnalyticsDataForSKUDefault from "getAnalyticsDataForSKU" /* 4816 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "handleSubscribeFailure" /* 4721 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import importDefaultResult from "set" /* 4435 */;
import ArrayResult from "module_4" /* 4 */;
import ArrayResult1 from "module_6" /* 6 */;
import ArrayResult2 from "module_3" /* 3 */;

let c0 = arg1;
function _resolveGiftCode() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    const iter = (function*(arg0, body) {
      if (constants === 2) {
        constants = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          constants = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              constants = 3;
              throw body;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_4 = tmp3;
              body = tmp7;
              let flag;
              let flag2;
              if (flag === undefined) {
                flag = false;
              }
              if (flag2 === undefined) {
                flag2 = false;
              }
              body = undefined;
              c7 = 1;
              constants = 1;
              return { value: "Object", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              constants = 3;
              throw body;
            } else if (arg0 === 2) {
              constants = 3;
              obj1 = { value: null, done: true };
              obj1[0] = body;
              return obj1;
            } else {
              c6 = 1;
              let obj2 = { url: null, query: null, oldFormErrors: true, rejectWithError: false };
              obj2[0] = c7.GIFT_CODE_RESOLVE(callback);
              const obj3 = { with_application: null, with_subscription_plan: null };
              obj3[0] = flag;
              obj3[1] = flag2;
              obj2[1] = obj3;
              c7 = 3;
              constants = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = callback(flag2[8]).httpGetWithCountryCodeQuery(obj2);
              return obj4;
            }
          } else if (2 === tmp7) {
            c6 = 0;
            closure_4 = closure_5;
            obj2 = flag(flag2[9]);
            const obj5 = { resolved: false, gift_code: null };
            obj5[1] = callback;
            obj2.track(constants.GIFT_CODE_RESOLVED, obj5);
            const tmp22 = new flag(flag2[10])(closure_4);
            throw tmp22;
          } else if (arg0 === 1) {
            constants = 3;
            throw body;
          } else if (arg0 === 2) {
            c6 = 0;
            constants = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = body;
            return obj6;
          } else {
            body = body.body;
            const obj7 = { resolved: true, gift_code: null, gift_code_max_uses: null, sku_id: null, sku_type: null, application_id: null, store_title: null };
            obj7[1] = body.code;
            obj7[2] = body.max_uses;
            obj7[3] = body.store_listing.sku.id;
            obj7[4] = body.store_listing.sku.type;
            obj7[5] = body.store_listing.sku.application_id;
            obj7[6] = body.store_listing.sku.name;
            flag(flag2[9]).track(constants.GIFT_CODE_RESOLVED, obj7, { flush: true });
            c6 = 0;
            constants = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          }
        } catch (tmp25) {
          closure_5 = tmp25;
          if (tmp4 === c6) {
            constants = tmp2;
            throw tmp25;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_18 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getGiftCodeRedeemError(error, currentUser) {
  const code = error.code;
  if (constants2.INVALID_GIFT_SELF_REDEMPTION === code) {
    const intl11 = v5(1236).intl;
    return intl11.string(v5(1236).t.wa9h7F);
  } else if (tmp.INVALID_GIFT_REDEMPTION_EXHAUSTED === code) {
    const intl10 = v5(1236).intl;
    return intl10.string(v5(1236).t.Iw2TUW);
  } else if (tmp.INVALID_GIFT_REDEMPTION_OWNED === code) {
    const intl9 = v5(1236).intl;
    return intl9.string(v5(1236).t.mdLtb5);
  } else if (tmp.UNKNOWN_GIFT_CODE === code) {
    const intl8 = v5(1236).intl;
    return intl8.string(v5(1236).t.roztIr);
  } else if (tmp.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE === code) {
    const intl6 = v5(1236).intl;
    obj = v5(4109);
    const intl7 = v5(1236).intl;
    const string = intl7.string;
    const t = v5(1236).t;
    if (isPremiumExactlyResult) {
      let stringResult = string(t.lG6a5x);
    } else {
      stringResult = string(t.FSOz78);
    }
    obj = { planName: null };
    obj[0] = stringResult;
    return intl6.formatToPlainString(v5(1236).t["4YTHKw"], obj);
  } else if (tmp.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED === code) {
    const intl5 = v5(1236).intl;
    return intl5.string(v5(1236).t["9i1J30"]);
  } else if (tmp.INVALID_GIFT_REDEMPTION_INVOICE_OPEN === code) {
    const intl4 = v5(1236).intl;
    return intl4.string(v5(1236).t["U26WX+"]);
  } else if (tmp.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED === code) {
    const intl3 = v5(1236).intl;
    return intl3.string(v5(1236).t.ypuSd8);
  } else if (tmp.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE === code) {
    const intl2 = v5(1236).intl;
    return intl2.string(v5(1236).t.mXMmWE);
  } else {
    const intl = v5(1236).intl;
    return intl.string(v5(1236).t["s9+XlB"]);
  }
}
({ Endpoints: error, AnalyticEvents: closure_8, AbortCodes: c9, GiftCodeModalStates: c10, MessageEmbedTypes: unpackModuleId, MessageTypes: closure_12 } = ME);
({ PremiumTypes: map1, SubscriptionIntervalTypes: closure_14 } = GuildFeatures);
let items = [importDefaultResult.escape(window.GLOBAL_ENV.GIFT_CODE_HOST), ...items1.map((arg0) => importDefaultResult.escape(arg0))];
items1 = ["discordapp.com/gifts", "discord.com/gifts"];
let regExp = new RegExp("(?: |^|https?://)(?:" + items.join("|") + ")/([a-z0-9-]+)", "gi");
const items2 = ["discord.com/billing/promotions", "promos.discord.gg"];
const items3 = [...items2.map((arg0) => importDefaultResult.escape(arg0))];
const regExp1 = new RegExp("(?: |^|https?://)(?:" + items3.join("|") + ")(/|(/)?\\?code=)([a-z0-9-]+)", "gi");
c0 = 4;
let mapped = require("module_4").fill(undefined).map(() => "[abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789]{" + c0 + "}");
const items4 = [mapped.join("-?"), , , ];
c0 = 4;
const fillResult = require("module_4").fill(undefined);
const mapped1 = require("module_6").fill(undefined).map(() => "[abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789]{" + c0 + "}");
items4[1] = mapped1.join("-?");
c0 = 5;
const fillResult1 = require("module_6").fill(undefined);
const mapped2 = require("module_3").fill(undefined).map(() => "[abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789]{" + c0 + "}");
items4[2] = mapped2.join("-?");
items4[3] = "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}";
const regExp2 = new RegExp("^(WUMP-?)?(" + items4.join("|") + ")$");
let obj = { DEFAULT: 0, [0]: "DEFAULT", CUSTOM_STYLE: 1, [1]: "CUSTOM_STYLE", CUSTOM_MESSAGE_EMOJI_SOUNDBOARD: 2, [2]: "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD" };
const fillResult2 = require("module_3").fill(undefined);
const result = require("set").fileFinishedImporting("utils/GiftCodeUtils.tsx");

export const GiftExperience = obj;
export const getGiftExperience = function getGiftExperience(arg0, arg1) {
  if (!v5(4722).isMobile) {
    if (!v5(4722).isTablet) {
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
  if (!v5(4722).isMobile) {
    if (!v5(4722).isTablet) {
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
export const parseComboId = function parseComboId(str) {
  const tmp = callback2(str.split(":"), 3);
  obj = { skuId: tmp[0], subscriptionPlanId: null, giftStyle: null };
  let tmp4 = null;
  if ("" !== tmp[1]) {
    tmp4 = tmp2;
  }
  obj[1] = tmp4;
  let parsed;
  if ("" !== tmp[2]) {
    if (null != tmp3) {
      const _Number = Number;
      parsed = Number.parseInt(tmp3);
    }
  }
  obj[2] = parsed;
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
        const str2 = match[1];
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
  const apply = _resolveGiftCode.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const trackGiftCodeCopy = function trackGiftCodeCopy(giftCode, sku) {
  obj = expandEventPropertiesDefault;
  obj = {};
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
    const intl2 = v5(1236).intl;
    return intl2.formatToMarkdownString(v5(1236).t.JUvC0s, {});
  } else if (tmp.SUCCESS === arg0) {
    const intl = v5(1236).intl;
    if (isSubscription.isSubscription) {
      obj = { skuName: null };
      obj[0] = name.name;
      let formatToPlainStringResult = intl.formatToPlainString(tmp3(1236).t["1C2BG/"], obj);
    } else {
      formatToPlainStringResult = intl.string(tmp3(1236).t["+BNMcF"]);
    }
    return formatToPlainStringResult;
  } else {
    const CONFIRM = tmp.CONFIRM;
    const intl3 = v5(1236).intl;
    if (isSubscription.isSubscription) {
      obj = { skuName: null };
      obj[0] = name.name;
      let formatToPlainStringResult1 = intl3.formatToPlainString(tmp10(1236).t["2VN4N9"], obj);
    } else {
      formatToPlainStringResult1 = intl3.string(tmp10(1236).t.RmamAI);
    }
    return formatToPlainStringResult1;
  }
};
export const getButtonText = function getButtonText(arg0, giftStyle, isCustomGift) {
  isCustomGift = isCustomGift.isCustomGift;
  if (constants3.ERROR === arg0) {
    const intl6 = v5(1236).intl;
    return intl6.string(v5(1236).t.w19zb6);
  } else if (tmp.SUCCESS === arg0) {
    const intl5 = v5(1236).intl;
    return intl5.string(v5(1236).t.zW87EM);
  } else if (tmp.OPEN === arg0) {
    const intl4 = v5(1236).intl;
    return intl4.string(v5(1236).t.F8ktci);
  } else {
    const CONFIRM = tmp.CONFIRM;
    if (null != isCustomGift) {
      if (isCustomGift) {
        const intl3 = v5(1236).intl;
        let stringResult = intl3.string(v5(1236).t.n6I6k4);
      }
      return stringResult;
    }
    if (null != giftStyle.giftStyle) {
      const intl2 = v5(1236).intl;
      const string2 = intl2.string;
      let OgpR0c = v5(1236).t;
      if (giftStyle.isClaimed) {
        OgpR0c = OgpR0c.OgpR0c;
        let string2Result = string2(OgpR0c);
      } else {
        string2Result = string2(OgpR0c["2BWscv"]);
      }
    } else {
      const intl = v5(1236).intl;
      const string = intl.string;
      const t = v5(1236).t;
      if (giftStyle.isSubscription) {
        stringResult = string(t.wQ1FHy);
      } else {
        stringResult = string(t.OgpR0c);
      }
    }
  }
};
export const getSubscriptionGiftSuccessText = function getSubscriptionGiftSuccessText(getOrFetchSubscriptionPlan) {
  const v5 = getOrFetchSubscriptionPlan;
  const match = v5(4673).match(getOrFetchSubscriptionPlan);
  obj = { interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_2 };
  const str = v5(4673);
  obj = { interval: constants6.YEAR, premiumSubscriptionType: closure_13.TIER_2 };
  const withResult = match.with(obj, () => {
    const intl = subscriptionPlan(closure_1_2[12]).intl;
    return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t.O2bEOt, { intervalCount: subscriptionPlan.intervalCount });
  });
  obj1 = { interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_1 };
  const withResult1 = match.with(obj, () => {
    const intl = subscriptionPlan(closure_1_2[12]).intl;
    return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t.O2bEOt, { intervalCount: subscriptionPlan.intervalCount });
  }).with(obj, () => {
    const intl = subscriptionPlan(closure_1_2[12]).intl;
    return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t["ZEvHF+"], { intervalCount: subscriptionPlan.intervalCount });
  });
  const obj2 = { interval: constants6.YEAR, premiumSubscriptionType: closure_13.TIER_1 };
  const withResult2 = match.with(obj, () => {
    const intl = subscriptionPlan(closure_1_2[12]).intl;
    return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t.O2bEOt, { intervalCount: subscriptionPlan.intervalCount });
  }).with(obj, () => {
    const intl = subscriptionPlan(closure_1_2[12]).intl;
    return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t["ZEvHF+"], { intervalCount: subscriptionPlan.intervalCount });
  }).with({ interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_1 }, () => {
    const intl = subscriptionPlan(closure_1_2[12]).intl;
    return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t.gjKbF4, { intervalCount: subscriptionPlan.intervalCount });
  });
  return match.with(obj, () => {
    const intl = subscriptionPlan(closure_1_2[12]).intl;
    return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t.O2bEOt, { intervalCount: subscriptionPlan.intervalCount });
  }).with(obj, () => {
    const intl = subscriptionPlan(closure_1_2[12]).intl;
    return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t["ZEvHF+"], { intervalCount: subscriptionPlan.intervalCount });
  }).with({ interval: constants6.MONTH, premiumSubscriptionType: closure_13.TIER_1 }, () => {
    const intl = subscriptionPlan(closure_1_2[12]).intl;
    return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t.gjKbF4, { intervalCount: subscriptionPlan.intervalCount });
  }).with({ interval: constants6.YEAR, premiumSubscriptionType: closure_13.TIER_1 }, () => {
    const intl = subscriptionPlan(closure_1_2[12]).intl;
    return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t.GIe7Bw, { intervalCount: subscriptionPlan.intervalCount });
  }).otherwise(() => {
    const intl = subscriptionPlan(1236).intl;
    return intl.string(subscriptionPlan(1236).t["5ayf7w"]);
  });
};
export const getSubscriptionGiftStartHeaderText = function getSubscriptionGiftStartHeaderText(getOrFetchSubscriptionPlan, arg1, name) {
  const v5 = arg1;
  closure_1 = name;
  if (null == name) {
    if (null != arg1) {
      const intl2 = v5(intervalCount[12]).intl;
      obj = { sender: null };
      obj[0] = arg1;
      let formatToPlainStringResult = intl2.formatToPlainString(v5(intervalCount[12]).t.td2m3W, obj);
    } else {
      let intl = v5(intervalCount[12]).intl;
      formatToPlainStringResult = intl.string(v5(intervalCount[12]).t.hrnGng);
    }
    return formatToPlainStringResult;
  } else {
    intervalCount = getOrFetchSubscriptionPlan.intervalCount;
    if (null != arg1) {
      const match = v5(intervalCount[13]).match(getOrFetchSubscriptionPlan);
      obj = { interval: null };
      obj[0] = constants6.MONTH;
      const str = v5(intervalCount[13]);
      obj1 = { interval: null };
      obj1[0] = constants6.YEAR;
      const withResult = match.with(obj, () => {
        const intl = callback(intervalCount[12]).intl;
        return intl.formatToPlainString(callback(intervalCount[12]).t["/RDIEA"], { username: callback, skuName: closure_1, intervalCount });
      });
      let otherwiseResult = match.with(obj, () => {
        const intl = callback(intervalCount[12]).intl;
        return intl.formatToPlainString(callback(intervalCount[12]).t["/RDIEA"], { username: callback, skuName: closure_1, intervalCount });
      }).with(obj1, () => {
        const intl = callback(intervalCount[12]).intl;
        return intl.formatToPlainString(callback(intervalCount[12]).t["3CX6Ev"], { username: callback, skuName: closure_1, intervalCount });
      }).otherwise(() => {
        const intl = callback(intervalCount[12]).intl;
        return intl.formatToPlainString(callback(intervalCount[12]).t.td2m3W, { sender: callback });
      });
      const withResult1 = match.with(obj, () => {
        const intl = callback(intervalCount[12]).intl;
        return intl.formatToPlainString(callback(intervalCount[12]).t["/RDIEA"], { username: callback, skuName: closure_1, intervalCount });
      }).with(obj1, () => {
        const intl = callback(intervalCount[12]).intl;
        return intl.formatToPlainString(callback(intervalCount[12]).t["3CX6Ev"], { username: callback, skuName: closure_1, intervalCount });
      });
    } else {
      const match1 = v5(intervalCount[13]).match(getOrFetchSubscriptionPlan);
      const obj2 = { interval: null };
      obj2[0] = constants6.MONTH;
      const str2 = v5(intervalCount[13]);
      const obj3 = { interval: null };
      obj3[0] = constants6.YEAR;
      const withResult2 = match1.with(obj2, () => {
        const intl = callback(intervalCount[12]).intl;
        return intl.formatToPlainString(callback(intervalCount[12]).t["2O4lo5"], { skuName: closure_1, intervalCount });
      });
      otherwiseResult = match1.with(obj2, () => {
        const intl = callback(intervalCount[12]).intl;
        return intl.formatToPlainString(callback(intervalCount[12]).t["2O4lo5"], { skuName: closure_1, intervalCount });
      }).with(obj3, () => {
        const intl = callback(intervalCount[12]).intl;
        return intl.formatToPlainString(callback(intervalCount[12]).t["+XjmsR"], { skuName: closure_1, intervalCount });
      }).otherwise(() => {
        const intl = callback(intervalCount[12]).intl;
        return intl.string(callback(intervalCount[12]).t.hrnGng);
      });
      const withResult3 = match1.with(obj2, () => {
        const intl = callback(intervalCount[12]).intl;
        return intl.formatToPlainString(callback(intervalCount[12]).t["2O4lo5"], { skuName: closure_1, intervalCount });
      }).with(obj3, () => {
        const intl = callback(intervalCount[12]).intl;
        return intl.formatToPlainString(callback(intervalCount[12]).t["+XjmsR"], { skuName: closure_1, intervalCount });
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
    const intl4 = subscriptionPlan(1236).intl;
    obj = { onGoToLibrary: null };
    obj[0] = onGoToLibrary;
    let formatResult = intl4.format(subscriptionPlan(1236).t["5zyz9y"], obj);
    if (null == tmp17) {
      let tmp22 = null;
      if (null != error) {
        tmp22 = getGiftCodeRedeemError(error, authStore.getCurrentUser());
      }
      formatResult = tmp22;
    }
    return formatResult;
  } else if (tmp.SUCCESS === step) {
    if (null != subscriptionPlan) {
      const match = subscriptionPlan(4673).match(subscriptionPlan);
      obj = { interval: null, premiumSubscriptionType: null };
      obj[0] = constants6.MONTH;
      obj[1] = closure_13.TIER_2;
      const str = subscriptionPlan(4673);
      obj1 = { interval: null, premiumSubscriptionType: null };
      obj1[0] = constants6.YEAR;
      obj1[1] = closure_13.TIER_2;
      const withResult = match.with(obj, () => {
        const intl = subscriptionPlan(closure_1_2[12]).intl;
        return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t.O2bEOt, { intervalCount: subscriptionPlan.intervalCount });
      });
      const obj2 = { interval: null, premiumSubscriptionType: null };
      obj2[0] = constants6.MONTH;
      obj2[1] = closure_13.TIER_1;
      const withResult1 = match.with(obj, () => {
        const intl = subscriptionPlan(closure_1_2[12]).intl;
        return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t.O2bEOt, { intervalCount: subscriptionPlan.intervalCount });
      }).with(obj1, () => {
        const intl = subscriptionPlan(closure_1_2[12]).intl;
        return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t["ZEvHF+"], { intervalCount: subscriptionPlan.intervalCount });
      });
      const obj3 = { interval: null, premiumSubscriptionType: null };
      obj3[0] = constants6.YEAR;
      obj3[1] = closure_13.TIER_1;
      const withResult2 = match.with(obj, () => {
        const intl = subscriptionPlan(closure_1_2[12]).intl;
        return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t.O2bEOt, { intervalCount: subscriptionPlan.intervalCount });
      }).with(obj1, () => {
        const intl = subscriptionPlan(closure_1_2[12]).intl;
        return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t["ZEvHF+"], { intervalCount: subscriptionPlan.intervalCount });
      }).with(obj2, () => {
        const intl = subscriptionPlan(closure_1_2[12]).intl;
        return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t.gjKbF4, { intervalCount: subscriptionPlan.intervalCount });
      });
      let otherwiseResult = match.with(obj, () => {
        const intl = subscriptionPlan(closure_1_2[12]).intl;
        return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t.O2bEOt, { intervalCount: subscriptionPlan.intervalCount });
      }).with(obj1, () => {
        const intl = subscriptionPlan(closure_1_2[12]).intl;
        return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t["ZEvHF+"], { intervalCount: subscriptionPlan.intervalCount });
      }).with(obj2, () => {
        const intl = subscriptionPlan(closure_1_2[12]).intl;
        return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t.gjKbF4, { intervalCount: subscriptionPlan.intervalCount });
      }).with(obj3, () => {
        const intl = subscriptionPlan(closure_1_2[12]).intl;
        return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t.GIe7Bw, { intervalCount: subscriptionPlan.intervalCount });
      }).otherwise(() => {
        const intl = subscriptionPlan(1236).intl;
        return intl.string(subscriptionPlan(1236).t["5ayf7w"]);
      });
      const withResult3 = match.with(obj, () => {
        const intl = subscriptionPlan(closure_1_2[12]).intl;
        return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t.O2bEOt, { intervalCount: subscriptionPlan.intervalCount });
      }).with(obj1, () => {
        const intl = subscriptionPlan(closure_1_2[12]).intl;
        return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t["ZEvHF+"], { intervalCount: subscriptionPlan.intervalCount });
      }).with(obj2, () => {
        const intl = subscriptionPlan(closure_1_2[12]).intl;
        return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t.gjKbF4, { intervalCount: subscriptionPlan.intervalCount });
      }).with(obj3, () => {
        const intl = subscriptionPlan(closure_1_2[12]).intl;
        return intl.formatToPlainString(subscriptionPlan(closure_1_2[12]).t.GIe7Bw, { intervalCount: subscriptionPlan.intervalCount });
      });
    } else {
      const intl3 = subscriptionPlan(1236).intl;
      const obj4 = { skuName: null };
      obj4[0] = sku.name;
      otherwiseResult = intl3.formatToPlainString(subscriptionPlan(1236).t["3CPsbo"], obj4);
    }
    return otherwiseResult;
  } else {
    const CONFIRM = tmp.CONFIRM;
    if (null != subscriptionPlan) {
      if (subscriptionPlan.interval === constants6.MONTH) {
        let d8rUdy = subscriptionPlan(1236).t.P9eTKt;
        let tmp5 = subscriptionPlan;
      } else {
        tmp5 = subscriptionPlan;
        d8rUdy = subscriptionPlan(1236).t.d8rUdy;
      }
      const intl2 = tmp5(1236).intl;
      const obj5 = { skuName: null, intervalCount: null };
      obj5[0] = sku.name;
      obj5[1] = subscriptionPlan.intervalCount;
      return intl2.format(d8rUdy, obj5);
    } else {
      let intl = subscriptionPlan(1236).intl;
      obj = { skuName: null };
      obj[0] = sku.name;
      return intl.formatToPlainString(subscriptionPlan(1236).t.l6Ea4Z, obj);
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
  const intl = v5(1236).intl;
  let formatResult = intl.format(v5(1236).t["5zyz9y"], { onGoToLibrary });
  if (null == tmp) {
    let tmp5 = null;
    if (null != error) {
      tmp5 = getGiftCodeRedeemError(error, authStore.getCurrentUser());
    }
    formatResult = tmp5;
  }
  return formatResult;
};
export const firstLibraryApplicationForGiftCode = function firstLibraryApplicationForGiftCode(arg0, applicationId) {
  let arr = arg0;
  const v5 = arg2;
  applicationId = applicationId.applicationId;
  if (arg0.length <= 0) {
    const items = [applicationId];
    arr = items;
  }
  const mapped = arr.map((arg0) => libraryApplication.getLibraryApplication(applicationId, arg0, true));
  const found = mapped.filter(v5(1471).isNotNullish);
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
    [r10016, r10017, str3] = callback2(match, 3);
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
  const v5 = arg0;
  closure_1 = arg1;
  const items = [closure_5];
  return v5(589).useStateFromStores(items, () => {
    if (null != closure_0) {
      if (closure_1) {
        const giftCode = closure_1_5.getGiftCode(tmp);
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
  obj = expandEventPropertiesDefault;
  obj = { to_step: step, has_custom_message: null != giftCode.giftStyle, is_custom_message_edited: null, gift_style: null, gift_code: null, emoji_name: null, sound_id: null, product_line: null };
  let tmp2 = null != giftCode.giftStyle;
  if (tmp2) {
    const intl = v5(1236).intl;
    tmp2 = customMessage !== intl.string(v5(1236).t.ZkOo1U);
  }
  obj[2] = tmp2;
  ({ giftStyle: obj2[3], code: obj2[4] } = giftCode);
  obj[5] = emojiName;
  obj[6] = soundId;
  obj[7] = productLine;
  obj.track(constants.GIFT_ACCEPT_STEP, obj);
};
export { getGiftCodeRedeemError };