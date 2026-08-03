import "noop";
import { Gradients } from "items";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { newTag: { backgroundColor: "transparent" }, newTagContainer: null };
createCacheKey = { borderRadius: require("Themes").radii.sm, marginLeft: require("Themes").space.PX_4 };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/dismissible_content/native/DismissibleNewBadge.tsx");

export default function DismissibleNewTag(dismissibleContent) {
  let Gradients;
  let createCacheKey;
  let dependencyMap;
  let importDefault;
  let jsx;
  dismissibleContent = dismissibleContent.dismissibleContent;
  ({ containerStyle: importDefault, noGradient: dependencyMap, newPremiumStyle: Gradients, colors: jsx, variantOverride: createCacheKey } = dismissibleContent);
  let closure_6;
  closure_6 = createCacheKey();
  let items = [dismissibleContent];
  return jsx(importDefault(9676), {
    contentTypes: items,
    children(visibleContent) {
      if (visibleContent.visibleContent !== dismissibleContent) {
        return null;
      } else {
        let tmp3 = closure_5;
        if (null == closure_5) {
          let obj = dismissibleContent(outer1_2[6]);
          let str = "text-xs/bold";
          if (obj.isAndroid()) {
            str = "text-xxs/bold";
          }
          tmp3 = str;
        }
        if (closure_2) {
          obj = { variant: null, containerStyle: null };
          obj[0] = tmp3;
          const items = [closure_6.newTagContainer, closure_1];
          obj[1] = items;
          let tmp6Result = outer1_4(dismissibleContent(outer1_2[7]).NewTag, obj);
        } else if (closure_3) {
          obj = { variant: null, containerStyle: null, gradient: true, colors: null };
          obj[0] = tmp3;
          obj[1] = closure_6.newTag;
          obj[3] = outer1_3.PREMIUM_TIER_2_TRI_COLOR;
          tmp6Result = tmp6(dismissibleContent(outer1_2[7]).NewTag, obj);
        } else {
          const obj1 = { style: null, start: null, end: null, colors: null, children: null };
          obj1[0] = closure_6.newTagContainer;
          obj1[1] = dismissibleContent(outer1_2[9]).HorizontalGradient.START;
          obj1[2] = dismissibleContent(outer1_2[9]).HorizontalGradient.END;
          let tmp15 = closure_4;
          if (closure_4 == null) {
            const items1 = [tmp7(outer1_2[4]).unsafe_rawColors.PREMIUM_TIER_2_PURPLE, tmp7(outer1_2[4]).unsafe_rawColors.PREMIUM_TIER_2_PINK];
            tmp15 = items1;
          }
          obj1[3] = tmp15;
          const obj2 = { containerStyle: null, variant: null };
          obj2[0] = closure_6.newTag;
          obj2[1] = tmp3;
          obj1[4] = outer1_4(dismissibleContent(outer1_2[7]).NewTag, obj2);
          tmp6Result = tmp6(outer1_1(outer1_2[8]), obj1);
          const tmp10 = closure_6;
          const tmp9 = outer1_1(outer1_2[8]);
        }
        return tmp6Result;
      }
    }
  });
};