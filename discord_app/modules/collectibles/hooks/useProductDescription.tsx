// === Module 13146: useProductDescription ===

// Module 13146 (useProductDescription)
import _mod19 from "module_19" /* 19 */;
import util from "util" /* 1114 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import size from "module_2" /* 2 */;

function getBundleDescription(bundledProducts, flag) {
  if (flag === undefined) {
    flag = false;
  }
  if (flag) {
    const intl5 = util.intl;
    bundledProducts = bundledProducts.bundledProducts;
    let length;
    if (bundledProducts != null) {
      length = bundledProducts.length;
    }
    let obj = { num: length };
    return intl5.formatToPlainString(util.t["/0Yndu"], obj);
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
      let tmp6 = require;
      if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
        let intl2 = tmp6(1114).intl;
        obj = { itemName: null };
        obj.itemName = tmp4.name;
        let arr = items.push(intl2.formatToPlainString(tmp6(1114).t.Ntv9Jt, obj));
      } else if (tmp6(1889).CollectiblesItemType.PROFILE_EFFECT === type) {
        let intl = tmp6(1114).intl;
        obj = { itemName: null };
        obj.itemName = tmp4.name;
        arr = items.push(intl.formatToPlainString(tmp6(1114).t["3Y8q7a"], obj));
      } else if (tmp6(1889).CollectiblesItemType.NAMEPLATE === type) {
        let intl6 = tmp6(1114).intl;
        let obj1 = { itemName: null };
        obj1.itemName = tmp4.name;
        let arr1 = items.push(intl6.formatToPlainString(tmp6(1114).t["2keXky"], obj1));
        flag2 = true;
      }
      continue;
    }
    const join = items.join;
    if (flag2) {
      const replaced = join(", ").replace(/, ([^,]*)$/, " & $1");
      const intl4 = util.intl;
      const obj2 = { joinedItems: replaced };
      return intl4.formatToPlainString(util.t.Ofrqj6, obj2);
    } else {
      const joined = join(" & ");
      const intl3 = util.intl;
      const obj3 = { joinedItems: joined };
      return intl3.formatToPlainString(util.t.Ofrqj6, obj3);
    }
  }
}
const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useProductDescription.tsx");

export const useProductDescription = function useProductDescription(product) {
  closure_0 = product;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [product, flag];
  return useMemo(() => {
    if (null != closure_0) {
      if (null != tmp.summary) {
        if ("" !== tmp.summary) {
          if (tmp.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
            const summary = tmp.summary;
            if (summary.includes("{joinedItems}")) {
              return tmp.summary.replace("{joinedItems}", getBundleDescription(tmp, flag));
            }
          }
          return tmp.summary;
        }
      }
    }
    let type;
    if (closure_0 != null) {
      type = tmp.type;
    }
    if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
      const intl4 = util.intl;
      return intl4.string(util.t["3lv7q2"]);
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
      const intl3 = util.intl;
      return intl3.string(util.t.VhJL72);
    } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
      const intl2 = util.intl;
      return intl2.string(util.t.ik37EZ);
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
      const intl = util.intl;
      return intl.string(util.t.fWzWPp);
    } else if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
      return getBundleDescription(tmp, flag);
    } else {
      return "";
    }
  }, items);
};