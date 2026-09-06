// discord_app/modules/collectibles/createUseCollectiblesShopStyles.tsx
import useStateFromStores from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import tinycolorDefault from "../../../_runtime/07552_tinycolor.js";
import UserProfileGradientUtils from "../user_profile/UserProfileGradientUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import AccessibilityStore from "../a11y/AccessibilityStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/createUseCollectiblesShopStyles.tsx");

export default function createUseCollectiblesShopStyles(arg0) {
  closure_0 = arg0;
  return (backgroundColors) => {
    let obj = useStateFromStores;
    const items = [AccessibilityStore];
    const stateFromStores = obj.useStateFromStores(items, () => saturation.saturation);
    if (null == backgroundColors) {
      return {};
    } else {
      backgroundColors = backgroundColors.backgroundColors;
      if (0 === backgroundColors.length) {
        obj = { backgroundColors: undefined, buttonColors: null, confettiColors: null };
        const buttonColors = backgroundColors.buttonColors;
        if (0 === buttonColors.length) {
          obj.buttonColors = undefined;
          obj.confettiColors = backgroundColors.confettiColors;
          if (1 === stateFromStores) {
            obj = {};
            const merged = Object.assign(obj);
            obj7 = obj;
          } else {
            let tmp30;
            if (null != obj.backgroundColors) {
              const obj1 = { primary: null, secondary: null, tertiary: null, border: null, label: null };
              const primary = obj.backgroundColors.primary;
              ({ h, s, l } = primary.toHsl());
              obj2 = { h, s: s * stateFromStores, l };
              obj1.primary = tinycolorDefault(obj2);
              const secondary = obj.backgroundColors.secondary;
              const toHslResult = primary.toHsl();
              ({ h: h2, s: s2, l: l2 } = secondary.toHsl());
              obj3 = { h: h2, s: s2 * stateFromStores, l: l2 };
              obj1.secondary = tinycolorDefault(obj3);
              let tmp26;
              if (null != obj.backgroundColors.tertiary) {
                const tertiary = obj.backgroundColors.tertiary;
                ({ h: h3, s: s3, l: l3 } = tertiary.toHsl());
                const obj4 = { h: h3, s: s3 * stateFromStores, l: l3 };
                tmp26 = tinycolorDefault(obj4);
                const toHslResult2 = tertiary.toHsl();
              }
              obj1.tertiary = tmp26;
              const border = obj.backgroundColors.border;
              const toHslResult1 = secondary.toHsl();
              ({ h: h4, s: s4, l: l4 } = border.toHsl());
              let obj5 = { h: h4, s: s4 * stateFromStores, l: l4 };
              obj1.border = tinycolorDefault(obj5);
              const label = obj.backgroundColors.label;
              const toHslResult3 = border.toHsl();
              ({ h: h5, s: s5, l: l5 } = label.toHsl());
              const obj6 = { h: h5, s: s5 * stateFromStores, l: l5 };
              obj1.label = tinycolorDefault(obj6);
              tmp30 = obj1;
              const toHslResult4 = label.toHsl();
            }
            obj7 = { backgroundColors: tmp30, buttonColors: null, confettiColors: null };
            let tmp31;
            if (null != obj.buttonColors) {
              obj8 = { primary: null, secondary: null, text: null };
              const primary2 = obj.buttonColors.primary;
              ({ h: h6, s: s6, l: l6 } = primary2.toHsl());
              const obj9 = { h: h6, s: s6 * stateFromStores, l: l6 };
              obj8.primary = tinycolorDefault(obj9);
              const secondary2 = obj.buttonColors.secondary;
              const toHslResult5 = primary2.toHsl();
              ({ h: h7, s: s7, l: l7 } = secondary2.toHsl());
              let obj10 = { h: h7, s: s7 * stateFromStores, l: l7 };
              obj8.secondary = tinycolorDefault(obj10);
              const text = obj.buttonColors.text;
              const toHslResult6 = secondary2.toHsl();
              ({ h: h8, s: s8, l: l8 } = text.toHsl());
              const obj11 = { h: h8, s: s8 * stateFromStores, l: l8 };
              obj8.text = tinycolorDefault(obj11);
              tmp31 = obj8;
              const toHslResult7 = text.toHsl();
            }
            obj7.buttonColors = tmp31;
            const confettiColors = obj.confettiColors;
            obj7.confettiColors = confettiColors.map((toHsl) => {
              ({ h, s, l } = toHsl.toHsl());
              return tinycolorDefault({ h, s: s * stateFromStores, l });
            });
          }
          return obj7;
        } else {
          if (1 !== buttonColors.length) {
            const obj12 = { primary: buttonColors[0], secondary: buttonColors[1], text: null };
            [obj32, obj33] = buttonColors;
            const toRgbResult = obj32.toRgb();
            let tmpResult = UserProfileGradientUtils;
            const items1 = [, ,];
            ({ r: arr9[0], g: arr9[1], b: arr9[2] } = toRgbResult);
            const items2 = [, ,];
            ({ r: arr10[0], g: arr10[1], b: arr10[2] } = obj33.toRgb());
            const toRgbResult1 = obj33.toRgb();
            [tmp44, tmp45, tmp46] = _slicedToArray(
              tmpResult.getValueInColorGradientByPercentage(items1, items2, 50),
              3,
            );
            const obj13 = { r: tmp44, g: tmp45, b: tmp46 };
            const tmp43 = _slicedToArray(tmpResult.getValueInColorGradientByPercentage(items1, items2, 50), 3);
            obj12.text = tinycolorDefault(obj13).isLight() ? closure_0.dark : closure_0.light;
            const obj36 = tinycolorDefault(obj13);
          }
          const obj14 = { primary: buttonColors[0], secondary: buttonColors[0], text: null };
          const first = buttonColors[0];
          obj14.text = first.isLight() ? closure_0.dark : closure_0.light;
        }
      } else {
        if (1 !== backgroundColors.length) {
          const obj15 = { primary: null, secondary: null, tertiary: null, border: null, label: null };
          [obj30.primary, obj30.secondary] = backgroundColors;
          let tmp4;
          if (backgroundColors.length > 2) {
            tmp4 = backgroundColors[2];
          }
          obj15.tertiary = tmp4;
          [obj2, obj3] = backgroundColors;
          const toRgbResult2 = obj1.toRgb();
          tmpResult = UserProfileGradientUtils;
          const items3 = [, ,];
          ({ r: arr2[0], g: arr2[1], b: arr2[2] } = toRgbResult2);
          const items4 = [, ,];
          ({ r: arr3[0], g: arr3[1], b: arr3[2] } = obj2.toRgb());
          const toRgbResult3 = obj2.toRgb();
          [tmp9, tmp10, tmp11] = _slicedToArray(tmpResult.getValueInColorGradientByPercentage(items3, items4, 50), 3);
          const obj16 = { r: tmp9, g: tmp10, b: tmp11 };
          obj5 = tinycolorDefault(obj16);
          obj15.border = obj5.setAlpha(0.4);
          [obj7, obj8] = backgroundColors;
          const tmp8 = _slicedToArray(tmpResult.getValueInColorGradientByPercentage(items3, items4, 50), 3);
          const toRgbResult4 = obj6.toRgb();
          const toRgbResult5 = obj7.toRgb();
          const items5 = [, ,];
          ({ r: arr4[0], g: arr4[1], b: arr4[2] } = toRgbResult4);
          const items6 = [, ,];
          ({ r: arr5[0], g: arr5[1], b: arr5[2] } = toRgbResult5);
          const tmpResult1 = UserProfileGradientUtils;
          [tmp16, tmp17, tmp18] = _slicedToArray(
            UserProfileGradientUtils.getValueInColorGradientByPercentage(items5, items6, 50),
            3,
          );
          const obj17 = { r: tmp16, g: tmp17, b: tmp18 };
          obj10 = tinycolorDefault(obj17);
          obj15.label = obj10.isLight() ? closure_0.dark : closure_0.light;
          const tmp15 = _slicedToArray(
            UserProfileGradientUtils.getValueInColorGradientByPercentage(items5, items6, 50),
            3,
          );
        }
        const obj18 = { primary: backgroundColors[0], secondary: backgroundColors[0], border: null, label: null };
        const first1 = backgroundColors[0];
        obj18.border = first1.setAlpha(0.4);
        const first2 = backgroundColors[0];
        obj18.label = first2.isLight() ? closure_0.dark : closure_0.light;
      }
    }
  };
}
