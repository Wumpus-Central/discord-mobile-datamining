// discord_app/modules/user_settings/defs/native/DismissiblePremiumNewBadge.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import native from "../../../../design/void/native.tsx";
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
import SelectedDismissibleContentDefault from "../../../dismissible_content/native/SelectedDismissibleContent.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Gradients = fn(7432).Gradients;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { newTag: { backgroundColor: "transparent" }, newTagContainer: null };
createStyles = { borderRadius: nativeDefault.radii.sm, marginLeft: nativeDefault.space.PX_4 };
createStyles.newTagContainer = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DismissiblePremiumNewBadge.tsx");

export default function DismissiblePremiumNewBadge(dismissibleContent) {
  dismissibleContent = dismissibleContent.dismissibleContent;
  ({
    containerStyle: importDefault,
    noGradient: dependencyMap,
    newPremiumStyle: Gradients,
    colors: jsx,
    variantOverride: closure_5,
  } = dismissibleContent);
  closure_6 = closure_5();
  let obj = {
    contentTypes: null,
    children(visibleContent) {
      if (visibleContent.visibleContent !== dismissibleContent) {
        return null;
      } else {
        let tmp3 = closure_1_5;
        if (null == closure_1_5) {
          let obj = PlatformUtils;
          let str = "text-xs/bold";
          if (obj.isAndroid()) {
            str = "text-xxs/bold";
          }
          tmp3 = str;
        }
        if (dependencyMap) {
          obj = { variant: tmp3, containerStyle: null };
          const items = [closure_6.newTagContainer, closure_1_1];
          obj.containerStyle = items;
          let tmp6Result = jsx(native.NewTag, { variant: tmp3, containerStyle: null });
        } else if (closure_1_3) {
          obj = {
            variant: tmp3,
            containerStyle: closure_6.newTag,
            gradient: true,
            colors: Gradients.PREMIUM_TIER_2_TRI_COLOR,
          };
          tmp6Result = tmp6(native.NewTag, obj);
        } else {
          const obj1 = {
            style: closure_6.newTagContainer,
            start: ConstantsIOS.HorizontalGradient.START,
            end: ConstantsIOS.HorizontalGradient.END,
            colors: null,
            children: null,
          };
          let tmp15 = closure_1_4;
          if (closure_1_4 == null) {
            const items1 = [
              tmp7(576).unsafe_rawColors.PREMIUM_TIER_2_PURPLE,
              tmp7(576).unsafe_rawColors.PREMIUM_TIER_2_PINK,
            ];
            tmp15 = items1;
          }
          obj1.colors = tmp15;
          const obj2 = { containerStyle: closure_6.newTag, variant: tmp3 };
          obj1.children = jsx(native.NewTag, { containerStyle: closure_6.newTag, variant: tmp3 });
          tmp6Result = tmp6(LinearGradientDefault, obj1);
        }
        return tmp6Result;
      }
    },
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
          let obj = PlatformUtils;
          let str = "text-xs/bold";
          if (obj.isAndroid()) {
            str = "text-xxs/bold";
          }
          tmp3 = str;
        }
        if (dependencyMap) {
          obj = { variant: tmp3, containerStyle: null };
          const items = [closure_6.newTagContainer, closure_1_1];
          obj.containerStyle = items;
          let tmp6Result = jsx(native.NewTag, { variant: tmp3, containerStyle: null });
        } else if (closure_1_3) {
          obj = {
            variant: tmp3,
            containerStyle: closure_6.newTag,
            gradient: true,
            colors: Gradients.PREMIUM_TIER_2_TRI_COLOR,
          };
          tmp6Result = tmp6(native.NewTag, obj);
        } else {
          const obj1 = {
            style: closure_6.newTagContainer,
            start: ConstantsIOS.HorizontalGradient.START,
            end: ConstantsIOS.HorizontalGradient.END,
            colors: null,
            children: null,
          };
          let tmp15 = closure_1_4;
          if (closure_1_4 == null) {
            const items1 = [
              tmp7(576).unsafe_rawColors.PREMIUM_TIER_2_PURPLE,
              tmp7(576).unsafe_rawColors.PREMIUM_TIER_2_PINK,
            ];
            tmp15 = items1;
          }
          obj1.colors = tmp15;
          const obj2 = { containerStyle: closure_6.newTag, variant: tmp3 };
          obj1.children = jsx(native.NewTag, { containerStyle: closure_6.newTag, variant: tmp3 });
          tmp6Result = tmp6(LinearGradientDefault, obj1);
        }
        return tmp6Result;
      }
    },
  });
}
