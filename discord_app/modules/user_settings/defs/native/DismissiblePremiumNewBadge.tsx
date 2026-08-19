// discord_app/modules/user_settings/defs/native/DismissiblePremiumNewBadge.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../../_runtime/04756_LinearGradient.js";
import SelectedDismissibleContentDefault from "../../../dismissible_content/native/SelectedDismissibleContent.tsx";
import { Gradients } from "../../../colors/native/ColorConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
const createCacheKey = { borderRadius: ThemesDefault.radii.sm, marginLeft: ThemesDefault.space.PX_4 };
createCacheKey[1] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/DismissiblePremiumNewBadge.tsx");

export default function DismissiblePremiumNewBadge(dismissibleContent) {
  dismissibleContent = dismissibleContent.dismissibleContent;
  ({ containerStyle: importDefault, noGradient: dependencyMap, newPremiumStyle: Gradients, colors: jsx, variantOverride: closure_5 } = dismissibleContent);
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
          let obj = dismissibleContent(dependencyMap[6]);
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
          let tmp6Result = jsx(dismissibleContent(dependencyMap[7]).NewTag, { variant: null, containerStyle: null });
        } else if (closure_3) {
          obj = { variant: null, containerStyle: null, gradient: true, colors: null };
          obj[0] = tmp3;
          obj[1] = closure_6.newTag;
          obj[3] = Gradients.PREMIUM_TIER_2_TRI_COLOR;
          tmp6Result = jsx(dismissibleContent(dependencyMap[7]).NewTag, { variant: null, containerStyle: null, gradient: true, colors: null });
        } else {
          obj1 = { style: null, start: null, end: null, colors: null, children: null };
          obj1[0] = closure_6.newTagContainer;
          obj1[1] = dismissibleContent(dependencyMap[9]).HorizontalGradient.START;
          obj1[2] = dismissibleContent(dependencyMap[9]).HorizontalGradient.END;
          let tmp15 = closure_4;
          if (closure_4 == null) {
            const items1 = [ThemesDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE, ThemesDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK];
            tmp15 = items1;
          }
          obj1[3] = tmp15;
          const obj2 = { containerStyle: null, variant: null };
          obj2[0] = closure_6.newTag;
          obj2[1] = tmp3;
          obj1[4] = jsx(dismissibleContent(dependencyMap[7]).NewTag, { containerStyle: null, variant: null });
          tmp6Result = jsx(LinearGradientDefault, { style: null, start: null, end: null, colors: null, children: null });
        }
        return tmp6Result;
      }
    }
  });
};