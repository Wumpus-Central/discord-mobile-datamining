// === Module 14771: DismissiblePremiumNewBadge ===

// Module 14771 (DismissiblePremiumNewBadge)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10300 */;
import { Gradients } from "items" /* 7441 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
noopAll;
createCacheKey = { newTag: { backgroundColor: "transparent" }, newTagContainer: null };
createCacheKey = { borderRadius: ThemesDefault.radii.sm, marginLeft: ThemesDefault.space.PX_4 };
createCacheKey[1] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DismissiblePremiumNewBadge.tsx");

export default function DismissiblePremiumNewBadge(dismissibleContent) {
  dismissibleContent = dismissibleContent.dismissibleContent;
  ({ containerStyle: importDefault, noGradient: dependencyMap, newPremiumStyle: Gradients, colors: jsx, variantOverride: closure_5 } = dismissibleContent);
  closure_6 = undefined;
  closure_6 = callback();
  let items = [dismissibleContent];
  return jsx(SelectedDismissibleContentDefault, {
    contentTypes: items,
    children(visibleContent) {
      if (visibleContent.visibleContent !== dismissibleContent) {
        return null;
      } else {
        let tmp3 = closure_5;
        if (null == closure_5) {
          let obj = dismissibleContent(closure_1_2[6]);
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
          let tmp6Result = closure_1_4(dismissibleContent(closure_1_2[7]).NewTag, obj);
        } else if (closure_3) {
          obj = { variant: null, containerStyle: null, gradient: true, colors: null };
          obj[0] = tmp3;
          obj[1] = closure_6.newTag;
          obj[3] = closure_1_3.PREMIUM_TIER_2_TRI_COLOR;
          tmp6Result = tmp6(dismissibleContent(closure_1_2[7]).NewTag, obj);
        } else {
          obj1 = { style: null, start: null, end: null, colors: null, children: null };
          obj1[0] = closure_6.newTagContainer;
          obj1[1] = dismissibleContent(closure_1_2[9]).HorizontalGradient.START;
          obj1[2] = dismissibleContent(closure_1_2[9]).HorizontalGradient.END;
          let tmp15 = closure_4;
          if (closure_4 == null) {
            const items1 = [tmp7(closure_1_2[4]).unsafe_rawColors.PREMIUM_TIER_2_PURPLE, tmp7(closure_1_2[4]).unsafe_rawColors.PREMIUM_TIER_2_PINK];
            tmp15 = items1;
          }
          obj1[3] = tmp15;
          const obj2 = { containerStyle: null, variant: null };
          obj2[0] = closure_6.newTag;
          obj2[1] = tmp3;
          obj1[4] = closure_1_4(dismissibleContent(closure_1_2[7]).NewTag, obj2);
          tmp6Result = tmp6(closure_1_1(closure_1_2[8]), obj1);
          const tmp10 = closure_6;
          const tmp9 = closure_1_1(closure_1_2[8]);
        }
        return tmp6Result;
      }
    }
  });
};