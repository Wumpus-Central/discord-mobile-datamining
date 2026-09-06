// discord_app/modules/collectibles/hooks/useProductDescription.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import util from "../../../intl/index.native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function getBundleDescription(bundledProducts) {
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
      let type = item10012.type;
      if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
        let intl2 = util.intl;
        obj = { itemName: item10012.name };
        let arr = items.push(intl2.formatToPlainString(util.t.Ntv9Jt, obj));
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
        let intl = util.intl;
        obj = { itemName: item10012.name };
        arr = items.push(intl.formatToPlainString(util.t["3Y8q7a"], obj));
      } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
        let intl6 = util.intl;
        let obj1 = { itemName: item10012.name };
        let arr1 = items.push(intl6.formatToPlainString(util.t["2keXky"], obj1));
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
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [product, flag];
  return useMemo(() => {
    if (null != product) {
      if (null != product.summary) {
        if ("" !== product.summary) {
          if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
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
      return getBundleDescription(product, flag);
    } else {
      return "";
    }
  }, items);
};
