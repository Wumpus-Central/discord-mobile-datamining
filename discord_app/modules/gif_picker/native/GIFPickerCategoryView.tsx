// === Module 10120: GIFPickerCategoryView ===

// Module 10120 (GIFPickerCategoryView)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import FastImageDefault from "FastImage" /* 5981 */;
import useAccessibilityPressDefault from "useAccessibilityPress" /* 9274 */;
import StarIcon2 from "StarIcon" /* 9956 */;
import AnalyticsIcon2 from "AnalyticsIcon" /* 10121 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onSelectCategory;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ StyleSheet, View: closure_4, TouchableOpacity: hasOwnProperty } = react_native);
const GIFPickerResultTypes = Constants.GIFPickerResultTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, gifImage: obj3, gifOverlay: obj4, categoryName: obj5, categoryNameIcon: obj6 };
obj2 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.xs, flex: 1 };
obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.BLACK, borderRadius: nativeDefault.radii.xs, opacity: 0.6 };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { margin: nativeDefault.space.PX_8, justifyContent: "center", flexDirection: "row", alignItems: "center" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { marginRight: nativeDefault.space.PX_4 };
let closure_9 = createStyles(obj);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((onSelectCategory) => {
  let items;
  let items1;
  const obj = react2;
  const cResult = obj.c(30);
  onSelectCategory = onSelectCategory.onSelectCategory;
  const item = onSelectCategory.item;
  const tmp4 = closure_9();
  if (cResult[0] === item.name) {
    if (cResult[1] === item.type) {
      let tmp5;
      let tmp6;
      let tmp10;
      if (cResult[2] === onSelectCategory) {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== item.name) {
        const intl = intl2.intl;
        const obj2 = { categoryName: item.name };
        const formatToPlainStringResult = intl.formatToPlainString(intl2.t["j+63pw"], obj2);
        cResult[4] = item.name;
        cResult[5] = formatToPlainStringResult;
        tmp6 = formatToPlainStringResult;
      } else {
        tmp6 = cResult[5];
      }
      const tmp9 = useAccessibilityPressDefault(tmp5, tmp6);
      if (cResult[6] !== item.src) {
        const obj3 = { uri: item.src };
        cResult[6] = item.src;
        cResult[7] = obj3;
        tmp10 = obj3;
      } else {
        tmp10 = cResult[7];
      }
      if (cResult[8] === tmp4.gifImage) {
        let tmp11;
        let tmp14;
        let tmp20;
        if (cResult[9] === tmp10) {
          tmp11 = cResult[10];
        }
        if (cResult[11] !== tmp4.gifOverlay) {
          const obj4 = { style: tmp4.gifOverlay };
          const tmp17 = metroImportDefault(React3, obj4);
          cResult[11] = tmp4.gifOverlay;
          cResult[12] = tmp17;
          tmp14 = tmp17;
        } else {
          tmp14 = cResult[12];
        }
        if (cResult[13] === item.type) {
          let tmp18;
          let tmp23;
          if (cResult[14] === tmp4.categoryNameIcon) {
            tmp18 = cResult[15];
          }
          if (cResult[16] !== item.name) {
            const obj5 = { variant: "text-sm/semibold", color: "text-overlay-light", maxFontSizeMultiplier: 2, accessible: false, children: item.name };
            const tmp25 = metroImportDefault(Text_Text.Text, obj5);
            cResult[16] = item.name;
            cResult[17] = tmp25;
            tmp23 = tmp25;
          } else {
            tmp23 = cResult[17];
          }
          if (cResult[18] === tmp4.categoryName) {
            if (cResult[19] === tmp18) {
              let tmp26;
              if (cResult[20] === tmp23) {
                tmp26 = cResult[21];
              }
              if (cResult[22] === tmp6) {
                if (cResult[23] === tmp9) {
                  if (cResult[24] === tmp5) {
                    if (cResult[25] === tmp4.container) {
                      if (cResult[26] === tmp11) {
                        if (cResult[27] === tmp14) {
                          let tmp30;
                          if (cResult[28] === tmp26) {
                            tmp30 = cResult[29];
                          }
                          return tmp30;
                        }
                      }
                    }
                  }
                }
              }
              const obj6 = { style: tmp4.container, onPress: tmp5, accessible: true, accessibilityRole: "button", accessibilityLabel: tmp6, children: items };
              const merged = Object.assign(tmp9);
              items = [tmp11, tmp14, tmp26];
              const tmp36 = metroImportAll(hasOwnProperty, obj6);
              cResult[22] = tmp6;
              cResult[23] = tmp9;
              cResult[24] = tmp5;
              cResult[25] = tmp4.container;
              cResult[26] = tmp11;
              cResult[27] = tmp14;
              cResult[28] = tmp26;
              cResult[29] = tmp36;
              tmp30 = tmp36;
            }
          }
          const obj7 = { style: tmp4.categoryName, accessible: false, children: items1 };
          items1 = [tmp18, tmp23];
          const tmp29 = metroImportAll(React3, obj7);
          cResult[18] = tmp4.categoryName;
          cResult[19] = tmp18;
          cResult[20] = tmp23;
          cResult[21] = tmp29;
          tmp26 = tmp29;
        }
        if (item.type === GIFPickerResultTypes.TRENDING_GIFS) {
          const obj8 = { size: "sm", style: tmp4.categoryNameIcon, color: nativeDefault.colors.WHITE };
          const AnalyticsIcon = AnalyticsIcon2.AnalyticsIcon;
          tmp20 = metroImportDefault(AnalyticsIcon, obj8);
        } else {
          tmp20 = null;
          if (item.type === tmp19.FAVORITES) {
            const obj9 = { size: "sm", style: tmp4.categoryNameIcon, color: nativeDefault.colors.WHITE };
            const StarIcon = StarIcon2.StarIcon;
            tmp20 = metroImportDefault(StarIcon, obj9);
          }
        }
        cResult[13] = item.type;
        cResult[14] = tmp4.categoryNameIcon;
        cResult[15] = tmp20;
        tmp18 = tmp20;
      }
      const obj10 = { style: tmp4.gifImage, source: tmp10 };
      const tmp13 = metroImportDefault(FastImageDefault, obj10);
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
}) : ((onSelectCategory) => {
  let items1;
  let items2;
  let tmp10Result;
  onSelectCategory = onSelectCategory.onSelectCategory;
  const item = onSelectCategory.item;
  const tmp = closure_9();
  const items = [onSelectCategory, item];
  const callback = react.useCallback(() => {
    onSelectCategory(item.type, item.name);
  }, items);
  const intl = intl2.intl;
  const obj = { categoryName: item.name };
  const formatToPlainStringResult = intl.formatToPlainString(intl2.t["j+63pw"], obj);
  const obj2 = { style: tmp.container, onPress: callback, accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, children: items1 };
  const merged = Object.assign(useAccessibilityPressDefault(callback, formatToPlainStringResult));
  items1 = [, , ];
  const obj3 = { style: tmp.gifImage, source: { uri: item.src } };
  items1[0] = metroImportDefault(FastImageDefault, obj3);
  const obj4 = { style: tmp.gifOverlay };
  items1[1] = metroImportDefault(React3, obj4);
  const obj5 = { style: tmp.categoryName, accessible: false, children: items2 };
  if (item.type === GIFPickerResultTypes.TRENDING_GIFS) {
    const obj6 = { size: "sm", style: tmp.categoryNameIcon, color: nativeDefault.colors.WHITE };
    const AnalyticsIcon = AnalyticsIcon2.AnalyticsIcon;
    tmp10Result = metroImportDefault(AnalyticsIcon, obj6);
  } else {
    tmp10Result = null;
    if (item.type === tmp12.FAVORITES) {
      const obj7 = { size: "sm", style: tmp.categoryNameIcon, color: nativeDefault.colors.WHITE };
      const StarIcon = StarIcon2.StarIcon;
      tmp10Result = metroImportDefault(StarIcon, obj7);
    }
  }
  items2 = [tmp10Result, ];
  const obj8 = { variant: "text-sm/semibold", color: "text-overlay-light", maxFontSizeMultiplier: 2, accessible: false, children: item.name };
  items2[1] = metroImportDefault(Text_Text.Text, obj8);
  items1[2] = metroImportAll(React3, obj5);
  return metroImportAll(hasOwnProperty, obj2);
});
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerCategoryView.tsx");

export default tmp7;