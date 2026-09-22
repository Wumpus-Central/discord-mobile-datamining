// === Module 15000: DismissiblePremiumNewBadge ===

// Module 15000 (DismissiblePremiumNewBadge)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import native from "native" /* 1177 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import LinearGradientDefault from "LinearGradient" /* 5199 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10891 */;
import noop from "module_19" /* 19 */;

require = fn;
const Gradients = fn(7677).Gradients;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let obj2 = { newTag: { backgroundColor: "transparent" }, newTagContainer: { borderRadius: nativeDefault.radii.sm, marginLeft: nativeDefault.space.PX_4 } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DismissiblePremiumNewBadge.tsx");

export default function DismissiblePremiumNewBadge(dismissibleContent) {
  dismissibleContent = dismissibleContent.dismissibleContent;
  ({ containerStyle: importDefault, noGradient: dependencyMap, newPremiumStyle: Gradients, colors: jsx, variantOverride: closure_5 } = dismissibleContent);
  closure_6 = closure_5();
  let obj = {
    contentTypes: null,
    children(visibleContent) {
      if (visibleContent.visibleContent !== dismissibleContent) {
        return null;
      } else {
        let tmp3 = closure_1_5;
        if (null == closure_1_5) {
          let str = "text-xs/bold";
          if (obj.isAndroid()) {
            str = "text-xxs/bold";
          }
          tmp3 = str;
          obj = PlatformUtils;
        }
        if (dependencyMap) {
          const obj2 = { variant: tmp3, containerStyle: null };
          const items = [closure_6.newTagContainer, closure_1_1];
          obj2.containerStyle = items;
          let tmp6Result = jsx(native.NewTag, { variant: tmp3, containerStyle: null });
        } else if (closure_1_3) {
          const obj3 = { variant: tmp3, containerStyle: closure_6.newTag, gradient: true, colors: Gradients.PREMIUM_TIER_2_TRI_COLOR };
          tmp6Result = jsx(native.NewTag, { variant: tmp3, containerStyle: closure_6.newTag, gradient: true, colors: Gradients.PREMIUM_TIER_2_TRI_COLOR });
        } else {
          const obj4 = { style: closure_6.newTagContainer, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: null, children: null };
          let tmp15 = closure_1_4;
          if (closure_1_4 == null) {
            const items1 = [nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE, nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK];
            tmp15 = items1;
          }
          obj4.colors = tmp15;
          const obj5 = { containerStyle: closure_6.newTag, variant: tmp3 };
          obj4.children = jsx(native.NewTag, { containerStyle: closure_6.newTag, variant: tmp3 });
          tmp6Result = jsx(LinearGradientDefault, { style: closure_6.newTagContainer, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: null, children: null });
        }
        return tmp6Result;
      }
    }
  };
  let items = [dismissibleContent];
  obj.contentTypes = items;
  return jsx(SelectedDismissibleContentDefault, {
    contentTypes: null,
    children(visibleContent) {
      if (visibleContent.visibleContent !== dismissibleContent) {
        return null;
      } else {
        let tmp3 = closure_1_5;
        if (null == closure_1_5) {
          let str = "text-xs/bold";
          if (obj.isAndroid()) {
            str = "text-xxs/bold";
          }
          tmp3 = str;
          obj = PlatformUtils;
        }
        if (dependencyMap) {
          const obj2 = { variant: tmp3, containerStyle: null };
          const items = [closure_6.newTagContainer, closure_1_1];
          obj2.containerStyle = items;
          let tmp6Result = jsx(native.NewTag, { variant: tmp3, containerStyle: null });
        } else if (closure_1_3) {
          const obj3 = { variant: tmp3, containerStyle: closure_6.newTag, gradient: true, colors: Gradients.PREMIUM_TIER_2_TRI_COLOR };
          tmp6Result = jsx(native.NewTag, { variant: tmp3, containerStyle: closure_6.newTag, gradient: true, colors: Gradients.PREMIUM_TIER_2_TRI_COLOR });
        } else {
          const obj4 = { style: closure_6.newTagContainer, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: null, children: null };
          let tmp15 = closure_1_4;
          if (closure_1_4 == null) {
            const items1 = [nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE, nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK];
            tmp15 = items1;
          }
          obj4.colors = tmp15;
          const obj5 = { containerStyle: closure_6.newTag, variant: tmp3 };
          obj4.children = jsx(native.NewTag, { containerStyle: closure_6.newTag, variant: tmp3 });
          tmp6Result = jsx(LinearGradientDefault, { style: closure_6.newTagContainer, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: null, children: null });
        }
        return tmp6Result;
      }
    }
  });
};