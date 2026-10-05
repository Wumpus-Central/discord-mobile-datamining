// discord_app/modules/slayer_storefront/utils/SlayerStorefrontDisclaimerUtils.tsx
import Constants from "../../../Constants.tsx";
import intl4 from "../../../intl/index.native.tsx";
import _modDef3593 from "../intl/SlayerStorefront.messages.js";
import StorefrontPlatform from "../../../../discord_common/js/shared/shared-constants/StorefrontPlatform.tsx";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import SocialLayerStorefrontStore from "../SocialLayerStorefrontStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const f104538 = (item) => closure_1_6[item];
const MarketingURLs = Constants.MarketingURLs;
let closure_6 = {
  [StorefrontPlatform.StorefrontPlatform.DESKTOP]: "PC",
  [StorefrontPlatform.StorefrontPlatform.XBOX]: "Xbox",
  [StorefrontPlatform.StorefrontPlatform.PLAYSTATION]: "PlayStation",
  [StorefrontPlatform.StorefrontPlatform.SWITCH]: "Switch",
  [StorefrontPlatform.StorefrontPlatform.APPLE_ARCADE]: "Apple Arcade",
  [StorefrontPlatform.StorefrontPlatform.NETFLIX]: "Netflix",
  [StorefrontPlatform.StorefrontPlatform.AMAZON_KIDS_PLUS]: "Amazon Kids+",
};
let items = [StorefrontPlatform.StorefrontPlatform.PLAYSTATION];
const result = size.fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontDisclaimerUtils.tsx");

export const getNotSupportedSentence = function getNotSupportedSentence(id) {
  let arr;
  let listFormat;
  if (null == id) {
    arr = items;
  } else {
    const configForApplicationId = SocialLayerStorefrontStore.getConfigForApplicationId(id);
    arr = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
  }
  let str = "";
  if (0 !== arr.length) {
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const _Intl = Intl;
    const self = this;
    const self2 = this;
    const obj = { platforms: listFormat.format(arr.map(f104538)), count: arr.length };
    const v5h8p5P = _modDef3593["5h8p5P"];
    listFormat = new Intl.ListFormat(LocaleStore.locale);
    str = formatToPlainString(v5h8p5P, obj);
  }
  return str;
};
export const getCheckoutDisclaimerMessageForApplication = function getCheckoutDisclaimerMessageForApplication(id) {
  let arr;
  let listFormat;
  const intl = intl4.intl;
  const format = intl.format;
  id = undefined;
  const Q0dHYO = _modDef3593.Q0dHYO;
  if (id != null) {
    id = id.id;
  }
  if (null == id) {
    arr = items;
  } else {
    const configForApplicationId = SocialLayerStorefrontStore.getConfigForApplicationId(id);
    arr = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
  }
  let platforms_info = "";
  if (0 !== arr.length) {
    const intl2 = intl4.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const _Intl = Intl;
    const self = this;
    const self2 = this;
    const obj = { platforms: listFormat.format(arr.map(f104538)), count: arr.length };
    const v5h8p5P = _modDef3593["5h8p5P"];
    listFormat = new Intl.ListFormat(LocaleStore.locale);
    platforms_info = formatToPlainString(v5h8p5P, obj);
  }
  return format(Q0dHYO, { platforms_info });
};
export const getFinePrintMessageForApplication = function getFinePrintMessageForApplication(
  name,
  shouldAppendDisclaimer,
) {
  let Q0dHYO;
  let format2;
  let formatResult;
  let listFormat;
  let obj4;
  let str;
  shouldAppendDisclaimer = shouldAppendDisclaimer.shouldAppendDisclaimer;
  if (name != null) {
    str = name.name;
  }
  if (str == null) {
    str = "game's";
  }
  const intl = intl4.intl;
  const format = intl.format;
  if (shouldAppendDisclaimer) {
    let arr;
    const obj2 = { applicationName: str, platforms_info: format2(Q0dHYO, obj4) };
    const prop = _modDef3593["3ah/a2"];
    const intl2 = intl4.intl;
    format2 = intl2.format;
    let id;
    Q0dHYO = _modDef3593.Q0dHYO;
    if (name != null) {
      id = name.id;
    }
    if (null == id) {
      arr = items;
    } else {
      const configForApplicationId = SocialLayerStorefrontStore.getConfigForApplicationId(id);
      arr = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
    }
    let str2 = "";
    if (0 !== arr.length) {
      const intl3 = intl4.intl;
      const formatToPlainString = intl3.formatToPlainString;
      const _Intl = Intl;
      const self = this;
      const self2 = this;
      const obj3 = { platforms: listFormat.format(arr.map(f104538)), count: arr.length };
      const v5h8p5P = _modDef3593["5h8p5P"];
      listFormat = new Intl.ListFormat(LocaleStore.locale);
      str2 = formatToPlainString(v5h8p5P, obj3);
    }
    obj4 = { platforms_info: str2 };
    formatResult = format(prop, obj2);
  } else {
    const obj = { applicationName: str };
    formatResult = format(intl4.t.CVITgq, obj);
  }
  return formatResult;
};
export const getMobileFinePrintMessageForApplication = function getMobileFinePrintMessageForApplication(
  getOrFetchApplication,
  stringResult,
  shouldAppendDisclaimer,
) {
  let items1;
  let listFormat;
  let str;
  shouldAppendDisclaimer = shouldAppendDisclaimer.shouldAppendDisclaimer;
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "game's";
  }
  const obj = { buyButtonLabel: stringResult, paidServiceTermURL: MarketingURLs.PAID_TERMS, applicationName: str };
  const intl = intl4.intl;
  const format = intl.format;
  const tmp4 = _modDef3593;
  if (shouldAppendDisclaimer) {
    let arr2;
    let id;
    const Q0dHYO = tmp4.Q0dHYO;
    if (getOrFetchApplication != null) {
      id = getOrFetchApplication.id;
    }
    if (null == id) {
      arr2 = items;
    } else {
      const configForApplicationId = SocialLayerStorefrontStore.getConfigForApplicationId(id);
      arr2 = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
    }
    let str2 = "";
    if (0 !== arr2.length) {
      const intl3 = intl4.intl;
      const formatToPlainString = intl3.formatToPlainString;
      const _Intl = Intl;
      const self = this;
      const self2 = this;
      const obj2 = { platforms: listFormat.format(arr2.map(f104538)), count: arr2.length };
      const v5h8p5P = _modDef3593["5h8p5P"];
      listFormat = new Intl.ListFormat(LocaleStore.locale);
      str2 = formatToPlainString(v5h8p5P, obj2);
    }
    const obj3 = { platforms_info: str2 };
    items = [format(Q0dHYO, obj3)];
    const intl2 = intl4.intl;
    items[1] = intl2.format(_modDef3593.Ufm9XX, obj);
    items1 = items;
  } else {
    items1 = [format(tmp4.Ufm9XX, obj)];
  }
  return items1;
};
export const getRedeemPurchaseDescriptionForApplication = function getRedeemPurchaseDescriptionForApplication(name) {
  let arr;
  let listFormat;
  let str;
  name = name.name;
  const intl = intl4.intl;
  const format = intl.format;
  const id = name.id;
  const obj = { applicationName: name, platforms_info: str };
  const fO4b1C = _modDef3593.fO4b1C;
  if (null == id) {
    arr = items;
  } else {
    const configForApplicationId = SocialLayerStorefrontStore.getConfigForApplicationId(id);
    arr = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
  }
  str = "";
  if (0 !== arr.length) {
    const intl2 = intl4.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const _Intl = Intl;
    const self = this;
    const self2 = this;
    const obj2 = { platforms: listFormat.format(arr.map(f104538)), count: arr.length };
    const v5h8p5P = _modDef3593["5h8p5P"];
    listFormat = new Intl.ListFormat(LocaleStore.locale);
    str = formatToPlainString(v5h8p5P, obj2);
  }
  return format(fO4b1C, obj);
};
export const getGiftLinkAccountDescriptionForApplication = function getGiftLinkAccountDescriptionForApplication(
  name,
  hasAlreadyLinked,
) {
  let arr;
  let listFormat;
  let str;
  let tmp4;
  let vyAtfo;
  hasAlreadyLinked = hasAlreadyLinked.hasAlreadyLinked;
  name = name.name;
  const tmp3 = _modDef3593;
  if (hasAlreadyLinked) {
    vyAtfo = tmp3.yqAKVO;
    tmp4 = importDefault;
  } else {
    vyAtfo = tmp3.vyAtfo;
    tmp4 = importDefault;
  }
  const intl = intl4.intl;
  const id = name.id;
  const format = intl.format;
  const obj = { applicationName: name, platforms_info: str };
  if (null == id) {
    arr = items;
  } else {
    const configForApplicationId = SocialLayerStorefrontStore.getConfigForApplicationId(id);
    arr = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
  }
  str = "";
  if (0 !== arr.length) {
    const intl2 = intl4.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const _Intl = Intl;
    const self = this;
    const self2 = this;
    const obj2 = { platforms: listFormat.format(arr.map(f104538)), count: arr.length };
    const v5h8p5P = tmp4(3593)["5h8p5P"];
    listFormat = new Intl.ListFormat(LocaleStore.locale);
    str = formatToPlainString(v5h8p5P, obj2);
  }
  return format(vyAtfo, obj);
};
