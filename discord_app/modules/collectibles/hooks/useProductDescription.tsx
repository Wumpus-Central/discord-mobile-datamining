import { useMemo } from "noop";

function getBundleDescription(bundledProducts) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    const intl5 = require(1236) /* getSystemLocale */.intl;
    bundledProducts = bundledProducts.bundledProducts;
    let length;
    if (bundledProducts != null) {
      length = bundledProducts.length;
    }
    let obj = { num: null };
    obj[0] = length;
    return intl5.formatToPlainString(require(1236) /* getSystemLocale */.t["/0Yndu"], obj);
  } else {
    let bundledProducts1 = bundledProducts.bundledProducts;
    if (bundledProducts1 == null) {
      bundledProducts1 = [];
    }
    const items = [];
    let flag2 = false;
    for (const item10012 of bundledProducts1) {
      let tmp4 = item10012;
      let type = item10012.type;
      let tmp5 = require;
      let tmp6 = require;
      let tmp7 = dependencyMap;
      let tmp8 = dependencyMap;
      if (require(1901) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION === type) {
        let tmp13 = tmp5;
        let tmp14 = tmp7;
        let intl2 = tmp6(1236).intl;
        obj = { itemName: null };
        let tmp15 = item10012;
        obj[0] = tmp4.name;
        let arr = items.push(intl2.formatToPlainString(tmp6(1236).t.Ntv9Jt, obj));
      } else {
        let tmp33 = tmp5;
        let tmp34 = tmp7;
        if (tmp6(1901).CollectiblesItemType.PROFILE_EFFECT === type) {
          let tmp9 = tmp5;
          let tmp10 = tmp7;
          let intl = tmp6(1236).intl;
          obj = { itemName: null };
          let tmp11 = item10012;
          obj[0] = tmp4.name;
          arr = items.push(intl.formatToPlainString(tmp6(1236).t["3Y8q7a"], obj));
        } else {
          let tmp35 = tmp5;
          let tmp36 = tmp7;
          if (tmp6(1901).CollectiblesItemType.NAMEPLATE === type) {
            let tmp37 = tmp5;
            let tmp38 = tmp7;
            let intl6 = tmp6(1236).intl;
            let obj1 = { itemName: null };
            let tmp39 = item10012;
            obj1[0] = tmp4.name;
            let arr1 = items.push(intl6.formatToPlainString(tmp6(1236).t["2keXky"], obj1));
            flag2 = true;
          }
        }
      }
      continue;
    }
    const join = items.join;
    if (flag2) {
      const replaced = join(", ").replace(/, ([^,]*)$/, " & $1");
      const intl4 = require(1236) /* getSystemLocale */.intl;
      const obj2 = { joinedItems: null };
      obj2[0] = replaced;
      return intl4.formatToPlainString(require(1236) /* getSystemLocale */.t.Ofrqj6, obj2);
    } else {
      const joined = join(" & ");
      const intl3 = require(1236) /* getSystemLocale */.intl;
      const obj3 = { joinedItems: null };
      obj3[0] = joined;
      return intl3.formatToPlainString(require(1236) /* getSystemLocale */.t.Ofrqj6, obj3);
    }
  }
}
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useProductDescription.tsx");

export const useProductDescription = function useProductDescription(product) {
  let closure_0 = product;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [product, flag];
  return useMemo(() => {
    if (null != product) {
      if (null != tmp.summary) {
        if ("" !== tmp.summary) {
          if (tmp.type === product(flag[2]).CollectiblesItemType.BUNDLE) {
            const summary = tmp.summary;
            if (summary.includes("{joinedItems}")) {
              return tmp.summary.replace("{joinedItems}", outer1_3(tmp, flag));
            }
          }
          return tmp.summary;
        }
      }
    }
    let type;
    if (product != null) {
      type = tmp.type;
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
      return outer1_3(tmp, flag);
    } else {
      return "";
    }
  }, items);
};