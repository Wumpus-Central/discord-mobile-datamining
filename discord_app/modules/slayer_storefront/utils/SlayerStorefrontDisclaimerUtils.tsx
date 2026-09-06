// discord_app/modules/slayer_storefront/utils/SlayerStorefrontDisclaimerUtils.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3417 from "../intl/SlayerStorefront.messages.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import SocialLayerStorefrontStore from "../SocialLayerStorefrontStore.tsx";

require = fn;
const MarketingURLs = fn(1074).MarketingURLs;
let closure_6 = {
  [fn(10821).StorefrontPlatform.DESKTOP]: "PC",
  [fn(10821).StorefrontPlatform.XBOX]: "Xbox",
  [fn(10821).StorefrontPlatform.PLAYSTATION]: "PlayStation",
  [fn(10821).StorefrontPlatform.SWITCH]: "Switch",
  [fn(10821).StorefrontPlatform.APPLE_ARCADE]: "Apple Arcade",
  [fn(10821).StorefrontPlatform.NETFLIX]: "Netflix",
  [fn(10821).StorefrontPlatform.AMAZON_KIDS_PLUS]: "Amazon Kids+",
};
let items = [fn(10821).StorefrontPlatform.PLAYSTATION];
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontDisclaimerUtils.tsx");

export const getNotSupportedSentence = function getNotSupportedSentence(id) {
  if (null == id) {
    let arr = items;
  } else {
    const configForApplicationId = SocialLayerStorefrontStore.getConfigForApplicationId(id);
    arr = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
  }
  let str = "";
  if (0 !== arr.length) {
    const intl = util.intl;
    const obj = { platforms: null, count: null };
    const _Intl = Intl;
    const listFormat = new Intl.ListFormat(LocaleStore.locale);
    obj.platforms = listFormat.format(arr.map((item) => closure_1_6[item]));
    obj.count = arr.length;
    str = intl.formatToPlainString(_modDef3417["5h8p5P"], obj);
  }
  return str;
};
export const getCheckoutDisclaimerMessageForApplication = function getCheckoutDisclaimerMessageForApplication(id) {
  const intl = util.intl;
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  if (null == id) {
    let arr = items;
  } else {
    const configForApplicationId = SocialLayerStorefrontStore.getConfigForApplicationId(id);
    arr = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
  }
  let platforms_info = "";
  if (0 !== arr.length) {
    const intl2 = util.intl;
    const obj = { platforms: null, count: null };
    const _Intl = Intl;
    const listFormat = new Intl.ListFormat(LocaleStore.locale);
    obj.platforms = listFormat.format(arr.map((item) => closure_1_6[item]));
    obj.count = arr.length;
    platforms_info = intl2.formatToPlainString(_modDef3417["5h8p5P"], obj);
  }
  return intl.format(_modDef3417.Q0dHYO, { platforms_info });
};
export const getFinePrintMessageForApplication = function getFinePrintMessageForApplication(
  name,
  shouldAppendDisclaimer,
) {
  let str;
  if (name != null) {
    str = name.name;
  }
  if (str == null) {
    str = "game's";
  }
  const intl = util.intl;
  const format = intl.format;
  if (shouldAppendDisclaimer.shouldAppendDisclaimer) {
    let obj = { applicationName: str, platforms_info: null };
    const intl2 = tmp(1114).intl;
    let id;
    if (name != null) {
      id = name.id;
    }
    if (null == id) {
      let arr = items;
    } else {
      const configForApplicationId = SocialLayerStorefrontStore.getConfigForApplicationId(id);
      arr = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
    }
    let str2 = "";
    if (0 !== arr.length) {
      const intl3 = tmp(1114).intl;
      obj = { platforms: null, count: null };
      const _Intl = Intl;
      const listFormat = new Intl.ListFormat(LocaleStore.locale);
      obj.platforms = listFormat.format(arr.map((item) => closure_1_6[item]));
      obj.count = arr.length;
      str2 = intl3.formatToPlainString(tmp4(3417)["5h8p5P"], obj);
    }
    const obj1 = { platforms_info: str2 };
    obj.platforms_info = intl2.format(_modDef3417.Q0dHYO, obj1);
    let formatResult = format(_modDef3417["3ah/a2"], obj);
    tmp4 = importDefault;
  } else {
    obj = { applicationName: str };
    formatResult = format(tmp(1114).t.CVITgq, obj);
  }
  return formatResult;
};
export const getMobileFinePrintMessageForApplication = function getMobileFinePrintMessageForApplication(
  getOrFetchApplication,
  stringResult,
  shouldAppendDisclaimer,
) {
  let str;
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "game's";
  }
  let obj = { buyButtonLabel: stringResult, paidServiceTermURL: MarketingURLs.PAID_TERMS, applicationName: str };
  const intl = util.intl;
  const format = intl.format;
  const tmp4 = _modDef3417;
  if (shouldAppendDisclaimer.shouldAppendDisclaimer) {
    let id;
    if (getOrFetchApplication != null) {
      id = getOrFetchApplication.id;
    }
    if (null == id) {
      let arr2 = items;
    } else {
      const configForApplicationId = SocialLayerStorefrontStore.getConfigForApplicationId(id);
      arr2 = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
    }
    let str2 = "";
    if (0 !== arr2.length) {
      const intl3 = tmp(1114).intl;
      obj = { platforms: null, count: null };
      const _Intl = Intl;
      const listFormat = new Intl.ListFormat(LocaleStore.locale);
      obj.platforms = listFormat.format(arr2.map((item) => closure_1_6[item]));
      obj.count = arr2.length;
      str2 = intl3.formatToPlainString(tmp3(3417)["5h8p5P"], obj);
    }
    obj = { platforms_info: str2 };
    items = [format(tmp4.Q0dHYO, obj)];
    const intl2 = tmp(1114).intl;
    items[1] = intl2.format(tmp3(3417).Ufm9XX, obj);
    let items1 = items;
  } else {
    items1 = [format(tmp4.Ufm9XX, obj)];
  }
  return items1;
};
export const getRedeemPurchaseDescriptionForApplication = function getRedeemPurchaseDescriptionForApplication(
  applicationName,
) {
  const intl = util.intl;
  let obj = { applicationName: applicationName.name, platforms_info: null };
  const id = applicationName.id;
  if (null == id) {
    let arr = items;
  } else {
    const configForApplicationId = SocialLayerStorefrontStore.getConfigForApplicationId(id);
    arr = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
  }
  let str = "";
  if (0 !== arr.length) {
    const intl2 = util.intl;
    obj = { platforms: null, count: null };
    const _Intl = Intl;
    const listFormat = new Intl.ListFormat(LocaleStore.locale);
    obj.platforms = listFormat.format(arr.map((item) => closure_1_6[item]));
    obj.count = arr.length;
    str = intl2.formatToPlainString(_modDef3417["5h8p5P"], obj);
  }
  obj.platforms_info = str;
  return intl.format(_modDef3417.fO4b1C, obj);
};
export const getGiftLinkAccountDescriptionForApplication = function getGiftLinkAccountDescriptionForApplication(
  applicationName,
  hasAlreadyLinked,
) {
  const tmp3 = _modDef3417;
  if (hasAlreadyLinked.hasAlreadyLinked) {
    let vyAtfo = tmp3.yqAKVO;
    let tmp4 = tmp;
  } else {
    vyAtfo = tmp3.vyAtfo;
    tmp4 = tmp;
  }
  const intl = util.intl;
  let obj = { applicationName: applicationName.name, platforms_info: null };
  const id = applicationName.id;
  if (null == id) {
    let arr = items;
  } else {
    const configForApplicationId = SocialLayerStorefrontStore.getConfigForApplicationId(id);
    arr = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
  }
  let str = "";
  if (0 !== arr.length) {
    const intl2 = util.intl;
    obj = { platforms: null, count: null };
    const _Intl = Intl;
    const listFormat = new Intl.ListFormat(LocaleStore.locale);
    obj.platforms = listFormat.format(arr.map((item) => closure_1_6[item]));
    obj.count = arr.length;
    str = intl2.formatToPlainString(tmp4(3417)["5h8p5P"], obj);
  }
  obj.platforms_info = str;
  return intl.format(vyAtfo, obj);
};
