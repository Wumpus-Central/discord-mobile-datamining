// discord_app/modules/collectibles/utils/getProductName.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import getProductOrbPrice from "CollectiblesProductUtils.tsx";

const result = obj132.fileFinishedImporting("modules/collectibles/utils/getProductName.tsx");

export const getCardProductName = function getCardProductName(product) {
  if (null == product) {
    let str2 = "";
    if (null != product) {
      str2 = "";
      if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
        str2 = "";
        if (product.items.length > 0) {
          const intl2 = getSystemLocale.intl;
          let obj = { count: null, productName: null };
          obj[0] = product.items.length;
          obj[1] = "";
          str2 = intl2.format(getSystemLocale.t.UTc0ny, obj);
        }
      }
    }
    return str2;
  } else {
    let BZN5k2 = require;
    obj = dependencyMap;
    const string = getSystemLocale.intl.string;
    if ("baseVariantName" in product) {
      const intl = BZN5k2(1236).intl;
      BZN5k2 = BZN5k2(1236).t.BZN5k2;
      obj = { baseVariantName: null, variantLabel: null };
      ({ baseVariantName: obj[0], variantLabel: obj[1] } = product);
      let name = intl.formatToPlainString(BZN5k2, obj);
    }
    name = product.name;
  }
};
export const getProductName = function getProductName(baseVariantName) {
  if (null == baseVariantName) {
    return "";
  } else {
    const string = getSystemLocale.intl.string;
    if ("baseVariantName" in baseVariantName) {
      if (null != baseVariantName.baseVariantName) {
        if (baseVariantName.variantLabel !== tmp3) {
          const intl = getSystemLocale.intl;
          const obj = { baseVariantName: null, variantLabel: null };
          ({ baseVariantName: obj[0], variantLabel: obj[1] } = baseVariantName);
          let name = intl.formatToPlainString(getSystemLocale.t.BZN5k2, obj);
        }
        return name;
      }
    }
    name = baseVariantName.name;
  }
};
export const getPurchasedProductName = function getPurchasedProductName(baseVariantName) {
  if (null == baseVariantName) {
    return "";
  } else {
    const string = getSystemLocale.intl.string;
    if (null != baseVariantName.baseVariantName) {
      if (baseVariantName.variantLabel !== tmp3) {
        const intl = getSystemLocale.intl;
        const obj = { baseVariantName: null, variantLabel: null };
        ({ baseVariantName: obj[0], variantLabel: obj[1] } = baseVariantName);
        let name = intl.formatToPlainString(getSystemLocale.t.BZN5k2, obj);
      }
      return name;
    }
    name = baseVariantName.name;
  }
};
export const getProductNameAndTypeLabel = function getProductNameAndTypeLabel(closure_0) {
  if (null == _require) {
    obj1 = getProductOrbPrice;
    const productType = obj1.getProductType(_require);
    if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === productType) {
      const intl5 = getSystemLocale.intl;
      let obj = { product: null };
      obj[0] = "";
      return intl5.formatToPlainString(getSystemLocale.t.lvBzLi, obj);
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === productType) {
      const intl4 = getSystemLocale.intl;
      obj = { product: null };
      obj[0] = "";
      return intl4.formatToPlainString(getSystemLocale.t.eR7moP, obj);
    } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === productType) {
      const intl3 = getSystemLocale.intl;
      obj1 = { product: null };
      obj1[0] = "";
      return intl3.formatToPlainString(getSystemLocale.t.YFOwHj, obj1);
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === productType) {
      const intl2 = getSystemLocale.intl;
      const obj2 = { product: null };
      obj2[0] = "";
      return intl2.formatToPlainString(getSystemLocale.t.vov8LX, obj2);
    } else {
      return "";
    }
  } else {
    let BZN5k2 = require;
    obj = dependencyMap;
    const string = getSystemLocale.intl.string;
    if ("baseVariantName" in _require) {
      const intl = BZN5k2(1236).intl;
      BZN5k2 = BZN5k2(1236).t.BZN5k2;
      obj = { baseVariantName: null, variantLabel: null };
      ({ baseVariantName: obj[0], variantLabel: obj[1] } = _require);
      let name = intl.formatToPlainString(BZN5k2, obj);
    }
    name = _require.name;
  }
};