// discord_app/modules/user_settings/defs/native/DismissiblePremiumNewBadge.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import native from "../../../../design/void/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import LinearGradientDefault from "../../../../../_runtime/05388_LinearGradient.js";
import SelectedDismissibleContentDefault from "../../../dismissible_content/native/SelectedDismissibleContent.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Gradients = fn(7145).Gradients;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = {
  newTag: { backgroundColor: "transparent" },
  newTagContainer: { borderRadius: nativeDefault.radii.sm, marginLeft: nativeDefault.space.PX_4 },
};
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.radii.sm, marginLeft: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DismissiblePremiumNewBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DismissiblePremiumNewBadge(dismissibleContent) {
      const cResult = dismissibleContent(noGradient[6]).c(13);
      dismissibleContent = dismissibleContent.dismissibleContent;
      const containerStyle = dismissibleContent.containerStyle;
      noGradient = dismissibleContent.noGradient;
      const newPremiumStyle = dismissibleContent.newPremiumStyle;
      const colors = dismissibleContent.colors;
      const variantOverride = dismissibleContent.variantOverride;
      let tmp3 = variantOverride();
      closure_6 = tmp3;
      if (cResult[0] !== dismissibleContent) {
        let items = [dismissibleContent];
        cResult[0] = dismissibleContent;
        cResult[1] = items;
        let tmp4 = items;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === colors) {
        if (cResult[3] === containerStyle) {
          if (cResult[4] === dismissibleContent) {
            if (cResult[5] === newPremiumStyle) {
              if (cResult[6] === noGradient) {
                if (cResult[7] === tmp3) {
                  if (cResult[8] === variantOverride) {
                    let tmp5 = cResult[9];
                  }
                  if (cResult[10] === tmp4) {
                    if (cResult[11] === tmp5) {
                      let tmp6 = cResult[12];
                    }
                    return tmp6;
                  }
                  let obj2 = { contentTypes: tmp4, children: tmp5 };
                  let tmp9 = colors(containerStyle(noGradient[11]), obj2);
                  cResult[10] = tmp4;
                  cResult[11] = tmp5;
                  cResult[12] = tmp9;
                  tmp6 = tmp9;
                }
              }
            }
          }
        }
      }
      const fn = function c(visibleContent) {
        if (visibleContent.visibleContent !== dismissibleContent) {
          return null;
        } else {
          let tmp3 = variantOverride;
          if (null == variantOverride) {
            let str = "text-xs/bold";
            if (obj.isAndroid()) {
              str = "text-xxs/bold";
            }
            tmp3 = str;
            obj = PlatformUtils;
          }
          if (noGradient) {
            const obj2 = { variant: tmp3, containerStyle: null };
            const items = [closure_6.newTagContainer, containerStyle];
            obj2.containerStyle = items;
            let tmp6Result = jsx(native.NewTag, { variant: tmp3, containerStyle: null });
          } else if (newPremiumStyle) {
            const obj3 = {
              variant: tmp3,
              containerStyle: closure_6.newTag,
              gradient: true,
              colors: Gradients.PREMIUM_TIER_2_TRI_COLOR,
            };
            tmp6Result = jsx(native.NewTag, {
              variant: tmp3,
              containerStyle: closure_6.newTag,
              gradient: true,
              colors: Gradients.PREMIUM_TIER_2_TRI_COLOR,
            });
          } else {
            const obj4 = {
              style: closure_6.newTagContainer,
              start: ConstantsIOS.HorizontalGradient.START,
              end: ConstantsIOS.HorizontalGradient.END,
              colors: null,
              children: null,
            };
            let tmp15 = colors;
            if (colors == null) {
              const items1 = [
                nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE,
                nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK,
              ];
              tmp15 = items1;
            }
            obj4.colors = tmp15;
            const obj5 = { containerStyle: closure_6.newTag, variant: tmp3 };
            obj4.children = jsx(native.NewTag, { containerStyle: closure_6.newTag, variant: tmp3 });
            tmp6Result = jsx(LinearGradientDefault, {
              style: closure_6.newTagContainer,
              start: ConstantsIOS.HorizontalGradient.START,
              end: ConstantsIOS.HorizontalGradient.END,
              colors: null,
              children: null,
            });
          }
          return tmp6Result;
        }
      };
      cResult[2] = colors;
      cResult[3] = containerStyle;
      cResult[4] = dismissibleContent;
      cResult[5] = newPremiumStyle;
      cResult[6] = noGradient;
      cResult[7] = tmp3;
      cResult[8] = variantOverride;
      cResult[9] = fn;
      tmp5 = fn;
    }
  : function DismissiblePremiumNewBadge(dismissibleContent) {
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
              const obj3 = {
                variant: tmp3,
                containerStyle: closure_6.newTag,
                gradient: true,
                colors: Gradients.PREMIUM_TIER_2_TRI_COLOR,
              };
              tmp6Result = jsx(native.NewTag, {
                variant: tmp3,
                containerStyle: closure_6.newTag,
                gradient: true,
                colors: Gradients.PREMIUM_TIER_2_TRI_COLOR,
              });
            } else {
              const obj4 = {
                style: closure_6.newTagContainer,
                start: ConstantsIOS.HorizontalGradient.START,
                end: ConstantsIOS.HorizontalGradient.END,
                colors: null,
                children: null,
              };
              let tmp15 = closure_1_4;
              if (closure_1_4 == null) {
                const items1 = [
                  nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE,
                  nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK,
                ];
                tmp15 = items1;
              }
              obj4.colors = tmp15;
              const obj5 = { containerStyle: closure_6.newTag, variant: tmp3 };
              obj4.children = jsx(native.NewTag, { containerStyle: closure_6.newTag, variant: tmp3 });
              tmp6Result = jsx(LinearGradientDefault, {
                style: closure_6.newTagContainer,
                start: ConstantsIOS.HorizontalGradient.START,
                end: ConstantsIOS.HorizontalGradient.END,
                colors: null,
                children: null,
              });
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
              const obj3 = {
                variant: tmp3,
                containerStyle: closure_6.newTag,
                gradient: true,
                colors: Gradients.PREMIUM_TIER_2_TRI_COLOR,
              };
              tmp6Result = jsx(native.NewTag, {
                variant: tmp3,
                containerStyle: closure_6.newTag,
                gradient: true,
                colors: Gradients.PREMIUM_TIER_2_TRI_COLOR,
              });
            } else {
              const obj4 = {
                style: closure_6.newTagContainer,
                start: ConstantsIOS.HorizontalGradient.START,
                end: ConstantsIOS.HorizontalGradient.END,
                colors: null,
                children: null,
              };
              let tmp15 = closure_1_4;
              if (closure_1_4 == null) {
                const items1 = [
                  nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE,
                  nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK,
                ];
                tmp15 = items1;
              }
              obj4.colors = tmp15;
              const obj5 = { containerStyle: closure_6.newTag, variant: tmp3 };
              obj4.children = jsx(native.NewTag, { containerStyle: closure_6.newTag, variant: tmp3 });
              tmp6Result = jsx(LinearGradientDefault, {
                style: closure_6.newTagContainer,
                start: ConstantsIOS.HorizontalGradient.START,
                end: ConstantsIOS.HorizontalGradient.END,
                colors: null,
                children: null,
              });
            }
            return tmp6Result;
          }
        },
      });
    };
