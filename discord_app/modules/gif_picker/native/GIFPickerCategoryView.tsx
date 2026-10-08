// discord_app/modules/gif_picker/native/GIFPickerCategoryView.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import useAccessibilityPressDefault from "../../a11y/native/useAccessibilityPress.tsx";
import StarIcon from "../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import AnalyticsIcon from "../../../design/components/Icon/native/redesign/generated/AnalyticsIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4, TouchableOpacity: hasOwnProperty } = get_ActivityIndicator);
fn(1085).GIFPickerResultTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, flex: 1 },
  gifImage: null,
  gifOverlay: null,
  categoryName: null,
  categoryNameIcon: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, flex: 1 };
obj2.gifImage = { borderRadius: nativeDefault.radii.xs, flex: 1 };
let obj5 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.backgroundColor = nativeDefault.unsafe_rawColors.BLACK;
obj5.borderRadius = nativeDefault.radii.xs;
obj5.opacity = 0.6;
obj2.gifOverlay = obj5;
let obj6 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj6.margin = nativeDefault.space.PX_8;
obj6.justifyContent = "center";
obj6.flexDirection = "row";
obj6.alignItems = "center";
obj2.categoryName = obj6;
let obj4 = { borderRadius: nativeDefault.radii.xs, flex: 1 };
obj2.categoryNameIcon = { marginRight: nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { marginRight: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerCategoryView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GIFPickerCategoryView(onSelectCategory) {
      const cResult = c.c(30);
      onSelectCategory = onSelectCategory.onSelectCategory;
      const item = onSelectCategory.item;
      const tmp4 = closure_9();
      if (cResult[0] === item.name) {
        if (cResult[1] === item.type) {
          if (cResult[2] === onSelectCategory) {
            let tmp5 = cResult[3];
          }
          if (cResult[4] !== item.name) {
            const intl = util.intl;
            const obj2 = { categoryName: item.name };
            const formatToPlainStringResult = intl.formatToPlainString(util.t["j+63pw"], obj2);
            cResult[4] = item.name;
            cResult[5] = formatToPlainStringResult;
            let tmp6 = formatToPlainStringResult;
          } else {
            tmp6 = cResult[5];
          }
          const tmp9 = useAccessibilityPressDefault(tmp5, tmp6);
          if (cResult[6] !== item.src) {
            const obj3 = { uri: item.src };
            cResult[6] = item.src;
            cResult[7] = obj3;
            let tmp10 = obj3;
          } else {
            tmp10 = cResult[7];
          }
          if (cResult[8] === tmp4.gifImage) {
            if (cResult[9] === tmp10) {
              let tmp11 = cResult[10];
            }
            if (cResult[11] !== tmp4.gifOverlay) {
              const obj4 = { style: tmp4.gifOverlay };
              const tmp17 = React5(React4, obj4);
              cResult[11] = tmp4.gifOverlay;
              cResult[12] = tmp17;
              let tmp14 = tmp17;
            } else {
              tmp14 = cResult[12];
            }
            if (cResult[13] === item.type) {
              if (cResult[14] === tmp4.categoryNameIcon) {
                if (cResult[16] !== item.name) {
                  const obj5 = {
                    variant: "text-sm/semibold",
                    color: "text-overlay-light",
                    maxFontSizeMultiplier: 2,
                    accessible: false,
                    children: item.name,
                  };
                  const tmp26 = React5(Text_Text.Text, obj5);
                  cResult[16] = item.name;
                  cResult[17] = tmp26;
                  let tmp24 = tmp26;
                } else {
                  tmp24 = cResult[17];
                }
                if (cResult[18] === tmp4.categoryName) {
                  if (cResult[19] === tmp18) {
                    if (cResult[20] === tmp24) {
                      let tmp27 = cResult[21];
                    }
                    if (cResult[22] === tmp6) {
                      if (cResult[23] === tmp9) {
                        if (cResult[24] === tmp5) {
                          if (cResult[25] === tmp4.container) {
                            if (cResult[26] === tmp11) {
                              if (cResult[27] === tmp14) {
                                if (cResult[28] === tmp27) {
                                  let tmp31 = cResult[29];
                                }
                                return tmp31;
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj6 = {
                      style: tmp4.container,
                      onPress: tmp5,
                      accessible: true,
                      accessibilityRole: "button",
                      accessibilityLabel: tmp6,
                    };
                    const merged = Object.assign(tmp9);
                    const items = [tmp11, tmp14, tmp27];
                    obj6.children = items;
                    const tmp37 = closure_1_8(hasOwnProperty, obj6);
                    cResult[22] = tmp6;
                    cResult[23] = tmp9;
                    cResult[24] = tmp5;
                    cResult[25] = tmp4.container;
                    cResult[26] = tmp11;
                    cResult[27] = tmp14;
                    cResult[28] = tmp27;
                    cResult[29] = tmp37;
                    tmp31 = tmp37;
                  }
                }
                const obj7 = { style: tmp4.categoryName, accessible: false, children: null };
                const items1 = [cResult[15], tmp24];
                obj7.children = items1;
                const tmp30 = closure_1_8(React4, obj7);
                cResult[18] = tmp4.categoryName;
                cResult[19] = cResult[15];
                cResult[20] = tmp24;
                cResult[21] = tmp30;
                tmp27 = tmp30;
              }
            }
            if (item.type === GIFPickerResultTypes.TRENDING_GIFS) {
              const obj8 = { size: "sm", style: tmp4.categoryNameIcon, color: nativeDefault.colors.WHITE };
              let tmp20 = React5(AnalyticsIcon.AnalyticsIcon, obj8);
            } else {
              tmp20 = null;
              if (item.type === tmp19.FAVORITES) {
                const obj9 = { size: "sm", style: tmp4.categoryNameIcon, color: nativeDefault.colors.WHITE };
                tmp20 = React5(StarIcon.StarIcon, obj9);
              }
            }
            cResult[13] = item.type;
            cResult[14] = tmp4.categoryNameIcon;
            cResult[15] = tmp20;
          }
          const obj10 = { style: tmp4.gifImage, source: tmp10 };
          const tmp13 = React5(FastImageDefault, obj10);
          cResult[8] = tmp4.gifImage;
          cResult[9] = tmp10;
          cResult[10] = tmp13;
          tmp11 = tmp13;
        }
      }
      const fn = function c() {
        onSelectCategory(item.type, item.name);
      };
      cResult[0] = item.name;
      cResult[1] = item.type;
      cResult[2] = onSelectCategory;
      cResult[3] = fn;
      tmp5 = fn;
    }
  : function GIFPickerCategoryView(onSelectCategory) {
      onSelectCategory = onSelectCategory.onSelectCategory;
      const item = onSelectCategory.item;
      const tmp = closure_9();
      const items = [onSelectCategory, item];
      const callback = noop.useCallback(() => {
        onSelectCategory(item.type, item.name);
      }, items);
      const intl = util.intl;
      const formatToPlainStringResult = intl.formatToPlainString(util.t["j+63pw"], { categoryName: item.name });
      const obj2 = {
        style: tmp.container,
        onPress: callback,
        accessible: true,
        accessibilityRole: "button",
        accessibilityLabel: formatToPlainStringResult,
      };
      const merged = Object.assign(useAccessibilityPressDefault(callback, formatToPlainStringResult));
      const items1 = [
        React5(FastImageDefault, { style: tmp.gifImage, source: { uri: item.src } }),
        React5(React4, { style: tmp.gifOverlay }),
      ];
      const obj5 = { style: tmp.categoryName, accessible: false, children: null };
      if (item.type === GIFPickerResultTypes.TRENDING_GIFS) {
        const obj6 = { size: "sm", style: tmp.categoryNameIcon, color: nativeDefault.colors.WHITE };
        let tmp10Result = React5(AnalyticsIcon.AnalyticsIcon, obj6);
      } else {
        tmp10Result = null;
        if (item.type === tmp12.FAVORITES) {
          const obj7 = { size: "sm", style: tmp.categoryNameIcon, color: nativeDefault.colors.WHITE };
          tmp10Result = React5(StarIcon.StarIcon, obj7);
        }
      }
      const items2 = [
        tmp10Result,
        React5(Text_Text.Text, {
          variant: "text-sm/semibold",
          color: "text-overlay-light",
          maxFontSizeMultiplier: 2,
          accessible: false,
          children: item.name,
        }),
      ];
      obj5.children = items2;
      items1[2] = closure_1_8(React4, obj5);
      obj2.children = items1;
      return closure_1_8(hasOwnProperty, obj2);
    };
