// === Module 9579: getBundleDescription ===

// Module 9579 (getBundleDescription)
import obj132 from "obj132" /* 2 */;
import noop from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1949 */;

function getBundleDescription(bundledProducts, flag) {
  if (flag === undefined) {
    flag = false;
  }
  if (flag) {
    const intl5 = getSystemLocale.intl;
    bundledProducts = bundledProducts.bundledProducts;
    let length;
    if (bundledProducts != null) {
      length = bundledProducts.length;
    }
    let obj = { num: null };
    obj[0] = length;
    return intl5.formatToPlainString(getSystemLocale.t["/0Yndu"], obj);
  } else {
    let bundledProducts1 = bundledProducts.bundledProducts;
    if (bundledProducts1 == null) {
      bundledProducts1 = [];
    }
    const items = [];
    let flag2 = false;
    for (const item10012 of bundledProducts1) {
      let type = item10012.type;
      if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
        let intl2 = getSystemLocale.intl;
        obj = { itemName: null };
        obj[0] = item10012.name;
        let arr = items.push(intl2.formatToPlainString(getSystemLocale.t.Ntv9Jt, obj));
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
        let intl = getSystemLocale.intl;
        obj = { itemName: null };
        obj[0] = item10012.name;
        arr = items.push(intl.formatToPlainString(getSystemLocale.t["3Y8q7a"], obj));
      } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
        let intl6 = getSystemLocale.intl;
        obj1 = { itemName: null };
        obj1[0] = item10012.name;
        let arr1 = items.push(intl6.formatToPlainString(getSystemLocale.t["2keXky"], obj1));
        flag2 = true;
      }
      continue;
    }
    const join = items.join;
    if (flag2) {
      const replaced = join(", ").replace(/, ([^,]*)$/, " & $1");
      const intl4 = getSystemLocale.intl;
      const obj2 = { joinedItems: null };
      obj2[0] = replaced;
      return intl4.formatToPlainString(getSystemLocale.t.Ofrqj6, obj2);
    } else {
      const joined = join(" & ");
      const intl3 = getSystemLocale.intl;
      const obj3 = { joinedItems: null };
      obj3[0] = joined;
      return intl3.formatToPlainString(getSystemLocale.t.Ofrqj6, obj3);
    }
  }
}
const useMemo = noop.useMemo;
const result = obj132.fileFinishedImporting("modules/collectibles/hooks/useProductDescription.tsx");

export const useProductDescription = function useProductDescription(product) {
  closure_0 = product;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [product, flag];
  return useMemo(() => {
    if (null != product) {
      if (null != product.summary) {
        if ("" !== product.summary) {
          if (product.type === product(flag[2]).CollectiblesItemType.BUNDLE) {
            const summary = product.summary;
            if (summary.includes("{joinedItems}")) {
              return product.summary.replace("{joinedItems}", getBundleDescription(product, flag));
            }
          }
          return product.summary;
        }
      }
    }
    let type;
    if (product != null) {
      type = product.type;
    }
    if (product(flag[2]).CollectiblesItemType.AVATAR_DECORATION === type) {
      const intl4 = product(flag[1]).intl;
      return intl4.string(product(flag[1]).t["3lv7q2"]);
    } else if (product(flag[2]).CollectiblesItemType.PROFILE_EFFECT === type) {
      const intl3 = product(flag[1]).intl;
      return intl3.string(product(flag[1]).t.VhJL72);
    } else if (product(flag[2]).CollectiblesItemType.NAMEPLATE === type) {
      const intl2 = product(flag[1]).intl;
      return intl2.string(product(flag[1]).t.ik37EZ);
    } else if (product(flag[2]).CollectiblesItemType.PROFILE_FRAME === type) {
      const intl = product(flag[1]).intl;
      return intl.string(product(flag[1]).t.fWzWPp);
    } else if (product(flag[2]).CollectiblesItemType.BUNDLE === type) {
      return getBundleDescription(product, flag);
    } else {
      return "";
    }
  }, items);
};