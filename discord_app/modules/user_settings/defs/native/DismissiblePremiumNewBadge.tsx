// discord_app/modules/user_settings/defs/native/DismissiblePremiumNewBadge.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import native from "../../../../design/void/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import LinearGradientDefault from "../../../../../_runtime/05612_LinearGradient.js";
import ColorConstants from "../../../colors/native/ColorConstants.tsx";
import SelectedDismissibleContentDefault from "../../../dismissible_content/native/SelectedDismissibleContent.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dismissibleContent;

let obj2;
const Gradients = ColorConstants.Gradients;
const jsx = Fragment.jsx;
let obj = { newTag: { backgroundColor: "transparent" }, newTagContainer: obj2 };
obj2 = { borderRadius: nativeDefault.radii.sm, marginLeft: nativeDefault.space.PX_4 };
let closure_5 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (dismissibleContent) => {
      let noGradient;
      let tmp4;
      let obj = dismissibleContent(noGradient[6]);
      const cResult = obj.c(13);
      dismissibleContent = dismissibleContent.dismissibleContent;
      const containerStyle = dismissibleContent.containerStyle;
      const tmp = noGradient;
      noGradient = dismissibleContent.noGradient;
      const newPremiumStyle = dismissibleContent.newPremiumStyle;
      const colors = dismissibleContent.colors;
      const variantOverride = dismissibleContent.variantOverride;
      let tmp3 = variantOverride();
      let closure_6 = tmp3;
      if (cResult[0] !== dismissibleContent) {
        let items = [dismissibleContent];
        cResult[0] = dismissibleContent;
        cResult[1] = items;
        tmp4 = items;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === colors) {
        if (cResult[3] === containerStyle) {
          if (cResult[4] === dismissibleContent) {
            if (cResult[5] === newPremiumStyle) {
              if (cResult[6] === noGradient) {
                if (cResult[7] === tmp3) {
                  let tmp5;
                  if (cResult[8] === variantOverride) {
                    tmp5 = cResult[9];
                  }
                  if (cResult[10] === tmp4) {
                    let tmp6;
                    if (cResult[11] === tmp5) {
                      tmp6 = cResult[12];
                    }
                    return tmp6;
                  }
                  const obj2 = { contentTypes: tmp4, children: tmp5 };
                  const tmp9 = colors(containerStyle(tmp[11]), obj2);
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
          let tmp6Result;
          let tmp3 = variantOverride;
          if (null == variantOverride) {
            let str = "text-xs/bold";
            const obj = PlatformUtils;
            if (obj.isAndroid()) {
              str = "text-xxs/bold";
            }
            tmp3 = str;
          }
          if (noGradient) {
            const items = [closure_6.newTagContainer, containerStyle];
            tmp6Result = jsx(native.NewTag, { variant: tmp3, containerStyle: items });
          } else if (newPremiumStyle) {
            tmp6Result = jsx(native.NewTag, {
              variant: tmp3,
              containerStyle: closure_6.newTag,
              gradient: true,
              colors: Gradients.PREMIUM_TIER_2_TRI_COLOR,
            });
          } else {
            LinearGradientDefault;
            let tmp15 = colors;
            if (colors == null) {
              const items1 = [
                nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE,
                nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK,
              ];
              tmp15 = items1;
            }
            tmp6Result = (
              <tmp9
                style={closure_6.newTagContainer}
                start={ConstantsIOS.HorizontalGradient.START}
                end={ConstantsIOS.HorizontalGradient.END}
                colors={tmp15}
              >
                {null}
              </tmp9>
            );
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
  : (dismissibleContent) => {
      dismissibleContent = dismissibleContent.dismissibleContent;
      ({
        containerStyle: importDefault,
        noGradient: dependencyMap,
        newPremiumStyle: Gradients,
        colors: jsx,
        variantOverride: closure_5,
      } = dismissibleContent);
      let closure_6 = closure_5();
      let items = [dismissibleContent];
      return jsx(SelectedDismissibleContentDefault, {
        contentTypes: items,
        children(visibleContent) {
          if (visibleContent.visibleContent !== dismissibleContent) {
            return null;
          } else {
            let tmp6Result;
            let tmp3 = closure_5;
            if (null == closure_5) {
              let str = "text-xs/bold";
              const obj = PlatformUtils;
              if (obj.isAndroid()) {
                str = "text-xxs/bold";
              }
              tmp3 = str;
            }
            if (dependencyMap) {
              const items = [closure_6.newTagContainer, importDefault];
              tmp6Result = jsx(native.NewTag, { variant: tmp3, containerStyle: items });
            } else if (Gradients) {
              tmp6Result = jsx(native.NewTag, {
                variant: tmp3,
                containerStyle: closure_6.newTag,
                gradient: true,
                colors: Gradients.PREMIUM_TIER_2_TRI_COLOR,
              });
            } else {
              LinearGradientDefault;
              let tmp15 = jsx;
              if (jsx == null) {
                const items1 = [
                  nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE,
                  nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK,
                ];
                tmp15 = items1;
              }
              tmp6Result = (
                <tmp9
                  style={closure_6.newTagContainer}
                  start={ConstantsIOS.HorizontalGradient.START}
                  end={ConstantsIOS.HorizontalGradient.END}
                  colors={tmp15}
                >
                  {null}
                </tmp9>
              );
            }
            return tmp6Result;
          }
        },
      });
    };
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DismissiblePremiumNewBadge.tsx");

export default tmp3;
