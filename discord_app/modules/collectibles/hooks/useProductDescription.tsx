// === Module 12998: useProductDescription ===

// Module 12998 (useProductDescription)
import react from "react" /* 19 */;
import react2 from "react" /* 576 */;
import intl7 from "intl" /* 1126 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function getBundleDescription(bundledProducts) {
  if (flag) {
    const intl5 = intl7.intl;
    const formatToPlainString = intl5.formatToPlainString;
    bundledProducts = bundledProducts.bundledProducts;
    let length;
    const prop = intl7.t["/0Yndu"];
    if (bundledProducts != null) {
      length = bundledProducts.length;
    }
    const obj2 = { num: length };
    return formatToPlainString(prop, obj2);
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
        let push2 = items.push;
        let intl2 = intl7.intl;
        let obj3 = { itemName: item10012.name };
        let push2Result = push2(intl2.formatToPlainString(intl7.t.Ntv9Jt, obj3));
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
        let push = items.push;
        let intl = intl7.intl;
        let obj = { itemName: item10012.name };
        let arr = push(intl.formatToPlainString(intl7.t["3Y8q7a"], obj));
      } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
        let push3 = items.push;
        let intl6 = intl7.intl;
        let obj4 = { itemName: item10012.name };
        let push3Result = push3(intl6.formatToPlainString(intl7.t["2keXky"], obj4));
        flag2 = true;
      }
      continue;
    }
    const join = items.join;
    if (flag2) {
      const str3 = join(", ");
      const replaced = str3.replace(/, ([^,]*)$/, " & $1");
      const intl4 = intl7.intl;
      const obj5 = { joinedItems: replaced };
      return intl4.formatToPlainString(intl7.t.Ofrqj6, obj5);
    } else {
      const joined = join(" & ");
      const intl3 = intl7.intl;
      const obj6 = { joinedItems: joined };
      return intl3.formatToPlainString(intl7.t.Ofrqj6, obj6);
    }
  }
}
function getProductDescription(summary) {
  if (null != summary) {
    if (null != summary.summary) {
      if ("" !== summary.summary) {
        if (summary.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
          summary = summary.summary;
          if (summary.includes("{joinedItems}")) {
            const str4 = summary.summary;
            return str4.replace("{joinedItems}", getBundleDescription(summary, flag));
          }
        }
        return summary.summary;
      }
    }
  }
  let type;
  if (summary != null) {
    type = summary.type;
  }
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl4 = intl7.intl;
    return intl4.string(intl7.t["3lv7q2"]);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl3 = intl7.intl;
    return intl3.string(intl7.t.VhJL72);
  } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
    const intl2 = intl7.intl;
    return intl2.string(intl7.t.ik37EZ);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
    const intl = intl7.intl;
    return intl.string(intl7.t.fWzWPp);
  } else if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
    return getBundleDescription(summary, flag);
  } else {
    return "";
  }
}
const useMemo = react.useMemo;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((summary, arg1) => {
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === summary) {
    let tmp3;
    if (cResult[1] === (undefined !== arg1 && arg1)) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = getProductDescription(summary, undefined !== arg1 && arg1);
  cResult[0] = summary;
  cResult[1] = undefined !== arg1 && arg1;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((arg0) => {
  let closure_0 = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [arg0, flag];
  return useMemo(() => getProductDescription(closure_0, flag), items);
});
const result = size.fileFinishedImporting("modules/collectibles/hooks/useProductDescription.tsx");

export { getProductDescription };
export const useProductDescription = tmp2;