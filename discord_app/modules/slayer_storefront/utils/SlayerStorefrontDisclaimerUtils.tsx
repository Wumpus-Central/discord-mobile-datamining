// discord_app/modules/slayer_storefront/utils/SlayerStorefrontDisclaimerUtils.tsx
import _getSystemLocale from "_getSystemLocale";
import handleUserSettingsStoreUpdate from "handleUserSettingsStoreUpdate";
import { MarketingURLs } from "ME";

const require = arg1;
let closure_6 = { [arg1(9779).StorefrontPlatform.DESKTOP]: "PC", [arg1(9779).StorefrontPlatform.XBOX]: "Xbox", [arg1(9779).StorefrontPlatform.PLAYSTATION]: "PlayStation", [arg1(9779).StorefrontPlatform.SWITCH]: "Switch", [arg1(9779).StorefrontPlatform.APPLE_ARCADE]: "Apple Arcade", [arg1(9779).StorefrontPlatform.NETFLIX]: "Netflix", [arg1(9779).StorefrontPlatform.AMAZON_KIDS_PLUS]: "Amazon Kids+" };
let items = [require("StorefrontPlatform").StorefrontPlatform.PLAYSTATION];
const result = require("ME").fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontDisclaimerUtils.tsx");

export const getNotSupportedSentence = function getNotSupportedSentence(id) {
  if (null == id) {
    let arr = items;
  } else {
    const configForApplicationId = store.getConfigForApplicationId(id);
    arr = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
  }
  let str = "";
  if (0 !== arr.length) {
    const intl = require(1236) /* getSystemLocale */.intl;
    const obj = { platforms: null, count: null };
    const _Intl = Intl;
    const listFormat = new Intl.ListFormat(_getSystemLocale.locale);
    obj[0] = listFormat.format(arr.map((arg0) => table[arg0]));
    obj[1] = arr.length;
    str = intl.formatToPlainString(importDefault(3163)["5h8p5P"], obj);
  }
  return str;
};
export const getCheckoutDisclaimerMessageForApplication = function getCheckoutDisclaimerMessageForApplication(id) {
  const intl = require(1236) /* getSystemLocale */.intl;
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  if (null == id) {
    let arr = items;
  } else {
    const configForApplicationId = store.getConfigForApplicationId(id);
    arr = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
  }
  let platforms_info = "";
  if (0 !== arr.length) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    const obj = { platforms: null, count: null };
    const _Intl = Intl;
    const listFormat = new Intl.ListFormat(_getSystemLocale.locale);
    obj[0] = listFormat.format(arr.map((arg0) => table[arg0]));
    obj[1] = arr.length;
    platforms_info = intl2.formatToPlainString(importDefault(3163)["5h8p5P"], obj);
  }
  return intl.format(importDefault(3163).Q0dHYO, { platforms_info });
};
export const getFinePrintMessageForApplication = function getFinePrintMessageForApplication(name, shouldAppendDisclaimer) {
  let str;
  if (name != null) {
    str = name.name;
  }
  if (str == null) {
    str = "game's";
  }
  const intl = require(1236) /* getSystemLocale */.intl;
  const format = intl.format;
  if (shouldAppendDisclaimer.shouldAppendDisclaimer) {
    let obj = { applicationName: null, platforms_info: null };
    obj[0] = str;
    const intl2 = tmp(1236).intl;
    let id;
    if (name != null) {
      id = name.id;
    }
    if (null == id) {
      let arr = items;
    } else {
      const configForApplicationId = store.getConfigForApplicationId(id);
      arr = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
    }
    let str2 = "";
    if (0 !== arr.length) {
      const intl3 = tmp(1236).intl;
      obj = { platforms: null, count: null };
      const _Intl = Intl;
      const listFormat = new Intl.ListFormat(_getSystemLocale.locale);
      obj[0] = listFormat.format(arr.map((arg0) => table[arg0]));
      obj[1] = arr.length;
      str2 = intl3.formatToPlainString(tmp4(3163)["5h8p5P"], obj);
    }
    const obj1 = { platforms_info: null };
    obj1[0] = str2;
    obj[1] = intl2.format(importDefault(3163).Q0dHYO, obj1);
    let formatResult = format(importDefault(3163)["3ah/a2"], obj);
    tmp4 = importDefault;
  } else {
    obj = { applicationName: null };
    obj[0] = str;
    formatResult = format(tmp(1236).t.CVITgq, obj);
  }
  return formatResult;
};
export const getMobileFinePrintMessageForApplication = function getMobileFinePrintMessageForApplication(name, stringResult, shouldAppendDisclaimer) {
  let str;
  if (name != null) {
    str = name.name;
  }
  if (str == null) {
    str = "game's";
  }
  let obj = { buyButtonLabel: stringResult, paidServiceTermURL: MarketingURLs.PAID_TERMS, applicationName: str };
  const intl = require(1236) /* getSystemLocale */.intl;
  const format = intl.format;
  const tmp4 = importDefault(3163);
  if (shouldAppendDisclaimer.shouldAppendDisclaimer) {
    let id;
    if (name != null) {
      id = name.id;
    }
    if (null == id) {
      let arr2 = items;
    } else {
      const configForApplicationId = store.getConfigForApplicationId(id);
      arr2 = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
    }
    let str2 = "";
    if (0 !== arr2.length) {
      const intl3 = tmp(1236).intl;
      obj = { platforms: null, count: null };
      const _Intl = Intl;
      const listFormat = new Intl.ListFormat(_getSystemLocale.locale);
      obj[0] = listFormat.format(arr2.map((arg0) => table[arg0]));
      obj[1] = arr2.length;
      str2 = intl3.formatToPlainString(tmp3(3163)["5h8p5P"], obj);
    }
    obj = { platforms_info: null };
    obj[0] = str2;
    items = [format(tmp4.Q0dHYO, obj), ];
    const intl2 = tmp(1236).intl;
    items[1] = intl2.format(tmp3(3163).Ufm9XX, obj);
    let items1 = items;
  } else {
    items1 = [format(tmp4.Ufm9XX, obj)];
  }
  return items1;
};
export const getRedeemPurchaseDescriptionForApplication = function getRedeemPurchaseDescriptionForApplication(applicationName) {
  const intl = require(1236) /* getSystemLocale */.intl;
  let obj = { applicationName: applicationName.name, platforms_info: null };
  const id = applicationName.id;
  if (null == id) {
    let arr = items;
  } else {
    const configForApplicationId = store.getConfigForApplicationId(id);
    arr = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
  }
  let str = "";
  if (0 !== arr.length) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj = { platforms: null, count: null };
    const _Intl = Intl;
    const listFormat = new Intl.ListFormat(_getSystemLocale.locale);
    obj[0] = listFormat.format(arr.map((arg0) => table[arg0]));
    obj[1] = arr.length;
    str = intl2.formatToPlainString(importDefault(3163)["5h8p5P"], obj);
  }
  obj[1] = str;
  return intl.format(importDefault(3163).fO4b1C, obj);
};
export const getGiftLinkAccountDescriptionForApplication = function getGiftLinkAccountDescriptionForApplication(applicationName, hasAlreadyLinked) {
  const tmp3 = importDefault(3163);
  if (hasAlreadyLinked.hasAlreadyLinked) {
    let vyAtfo = tmp3.yqAKVO;
    let tmp4 = tmp;
  } else {
    vyAtfo = tmp3.vyAtfo;
    tmp4 = tmp;
  }
  const intl = require(1236) /* getSystemLocale */.intl;
  let obj = { applicationName: applicationName.name, platforms_info: null };
  const id = applicationName.id;
  if (null == id) {
    let arr = items;
  } else {
    const configForApplicationId = store.getConfigForApplicationId(id);
    arr = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
  }
  let str = "";
  if (0 !== arr.length) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj = { platforms: null, count: null };
    const _Intl = Intl;
    const listFormat = new Intl.ListFormat(_getSystemLocale.locale);
    obj[0] = listFormat.format(arr.map((arg0) => table[arg0]));
    obj[1] = arr.length;
    str = intl2.formatToPlainString(tmp4(3163)["5h8p5P"], obj);
  }
  obj[1] = str;
  return intl.format(vyAtfo, obj);
};