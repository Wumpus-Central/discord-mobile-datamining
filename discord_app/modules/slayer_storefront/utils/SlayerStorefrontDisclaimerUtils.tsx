// === Module 10667: SlayerStorefrontDisclaimerUtils ===

// Module 10667 (SlayerStorefrontDisclaimerUtils)
import util from "util" /* 1114 */;
import _modDef3735 from "module_3735" /* 3735 */;
import LocaleStore from "LocaleStore" /* 2063 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 7400 */;

require = fn;
const MarketingURLs = fn(1072).MarketingURLs;
let closure_6 = { [fn(10668).StorefrontPlatform.DESKTOP]: "PC", [fn(10668).StorefrontPlatform.XBOX]: "Xbox", [fn(10668).StorefrontPlatform.PLAYSTATION]: "PlayStation", [fn(10668).StorefrontPlatform.SWITCH]: "Switch", [fn(10668).StorefrontPlatform.APPLE_ARCADE]: "Apple Arcade", [fn(10668).StorefrontPlatform.NETFLIX]: "Netflix", [fn(10668).StorefrontPlatform.AMAZON_KIDS_PLUS]: "Amazon Kids+" };
let items = [fn(10668).StorefrontPlatform.PLAYSTATION];
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontDisclaimerUtils.tsx");

export function getNotSupportedSentence(id) {
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
    str = intl.formatToPlainString(_modDef3735["5h8p5P"], obj);
  }
  return str;
}
export function getCheckoutDisclaimerMessageForApplication(id) {
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
    platforms_info = intl2.formatToPlainString(_modDef3735["5h8p5P"], obj);
  }
  return intl.format(_modDef3735.Q0dHYO, { platforms_info });
}
export function getFinePrintMessageForApplication(name, shouldAppendDisclaimer) {
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
    const obj2 = { applicationName: str, platforms_info: null };
    const intl2 = util.intl;
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
      const intl3 = util.intl;
      const obj3 = { platforms: null, count: null };
      const _Intl = Intl;
      const listFormat = new Intl.ListFormat(LocaleStore.locale);
      obj3.platforms = listFormat.format(arr.map((item) => closure_1_6[item]));
      obj3.count = arr.length;
      str2 = intl3.formatToPlainString(_modDef3735["5h8p5P"], obj3);
    }
    const obj4 = { platforms_info: str2 };
    obj2.platforms_info = intl2.format(_modDef3735.Q0dHYO, obj4);
    let formatResult = format(_modDef3735["3ah/a2"], obj2);
  } else {
    const obj = { applicationName: str };
    formatResult = format(util.t.CVITgq, obj);
  }
  return formatResult;
}
export function getMobileFinePrintMessageForApplication(getOrFetchApplication, stringResult, shouldAppendDisclaimer) {
  let str;
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "game's";
  }
  const obj = { buyButtonLabel: stringResult, paidServiceTermURL: MarketingURLs.PAID_TERMS, applicationName: str };
  const intl = util.intl;
  const format = intl.format;
  const tmp4 = _modDef3735;
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
      const intl3 = util.intl;
      const obj2 = { platforms: null, count: null };
      const _Intl = Intl;
      const listFormat = new Intl.ListFormat(LocaleStore.locale);
      obj2.platforms = listFormat.format(arr2.map((item) => closure_1_6[item]));
      obj2.count = arr2.length;
      str2 = intl3.formatToPlainString(_modDef3735["5h8p5P"], obj2);
    }
    const obj3 = { platforms_info: str2 };
    items = [format(tmp4.Q0dHYO, obj3), ];
    const intl2 = util.intl;
    items[1] = intl2.format(_modDef3735.Ufm9XX, obj);
    let items1 = items;
  } else {
    items1 = [format(tmp4.Ufm9XX, obj)];
  }
  return items1;
}
export function getRedeemPurchaseDescriptionForApplication(applicationName) {
  const intl = util.intl;
  const obj = { applicationName: applicationName.name, platforms_info: null };
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
    const obj2 = { platforms: null, count: null };
    const _Intl = Intl;
    const listFormat = new Intl.ListFormat(LocaleStore.locale);
    obj2.platforms = listFormat.format(arr.map((item) => closure_1_6[item]));
    obj2.count = arr.length;
    str = intl2.formatToPlainString(_modDef3735["5h8p5P"], obj2);
  }
  obj.platforms_info = str;
  return intl.format(_modDef3735.fO4b1C, obj);
}
export function getGiftLinkAccountDescriptionForApplication(applicationName, hasAlreadyLinked) {
  const tmp3 = _modDef3735;
  if (hasAlreadyLinked.hasAlreadyLinked) {
    let vyAtfo = tmp3.yqAKVO;
    let tmp4 = importDefault;
  } else {
    vyAtfo = tmp3.vyAtfo;
    tmp4 = importDefault;
  }
  const intl = util.intl;
  const obj = { applicationName: applicationName.name, platforms_info: null };
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
    const obj2 = { platforms: null, count: null };
    const _Intl = Intl;
    const listFormat = new Intl.ListFormat(LocaleStore.locale);
    obj2.platforms = listFormat.format(arr.map((item) => closure_1_6[item]));
    obj2.count = arr.length;
    str = intl2.formatToPlainString(tmp4(3735)["5h8p5P"], obj2);
  }
  obj.platforms_info = str;
  return intl.format(vyAtfo, obj);
}