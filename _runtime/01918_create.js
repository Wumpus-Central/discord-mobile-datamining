// _runtime/01918_create.js
import CSSKeyframesRuleImpl from "01882_CSSKeyframesRuleImpl.js";

require = arg1;
const dependencyMap = arg6;

export (obj) => {
  for (const key10004 in arg0) {
    let tmp3 = arg0[key10004];
    if (!tmp3.animationName) {
      continue;
    } else {
      let animationName = tmp3.animationName;
      let mapped;
      if (typeof animationName === "object") {
        let _Array = Array;
        let arr2 = animationName;
        if (!Array.isArray(animationName)) {
          items = [animationName];
          arr2 = items;
        }
        mapped = arr2.map((item) => {
          let cSSKeyframesRuleImpl = item;
          if (!obj.isCSSKeyframesRule(item)) {
            cSSKeyframesRuleImpl = new CSSKeyframesRuleImpl.CSSKeyframesRuleImpl(item);
          }
          return cSSKeyframesRuleImpl;
        });
      }
      tmp3.animationName = mapped;
      continue;
    }
    continue;
  }
  return obj;
}