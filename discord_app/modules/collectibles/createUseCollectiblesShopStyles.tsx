// discord_app/modules/collectibles/createUseCollectiblesShopStyles.tsx
import useStateFromStores from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import tinycolorDefault from "../../../_runtime/07882_tinycolor.js";
import UserProfileGradientUtils from "../user_profile/UserProfileGradientUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import AccessibilityStore from "../a11y/AccessibilityStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/createUseCollectiblesShopStyles.tsx");

export default function createUseCollectiblesShopStyles(arg0) {
  closure_0 = arg0;
  return (backgroundColors) => {
    const items = [AccessibilityStore];
    const stateFromStores = useStateFromStores.useStateFromStores(items, () => saturation.saturation);
    if (null == backgroundColors) {
      return {};
    } else {
      backgroundColors = backgroundColors.backgroundColors;
      if (0 === backgroundColors.length) {
        const obj4 = { backgroundColors: undefined, buttonColors: null, confettiColors: null };
        const buttonColors = backgroundColors.buttonColors;
        if (0 === buttonColors.length) {
          obj4.buttonColors = undefined;
          obj4.confettiColors = backgroundColors.confettiColors;
          if (1 === stateFromStores) {
            const obj5 = {};
            const merged = Object.assign(obj4);
            let obj16 = obj5;
          } else {
            let tmp30;
            if (null != obj4.backgroundColors) {
              const obj9 = { primary: null, secondary: null, tertiary: null, border: null, label: null };
              const primary = obj4.backgroundColors.primary;
              ({ h, s, l } = primary.toHsl());
              const obj10 = { h, s: s * stateFromStores, l };
              obj9.primary = tinycolorDefault(obj10);
              const secondary = obj4.backgroundColors.secondary;
              const toHslResult = primary.toHsl();
              ({ h: h2, s: s2, l: l2 } = secondary.toHsl());
              const obj12 = { h: h2, s: s2 * stateFromStores, l: l2 };
              obj9.secondary = tinycolorDefault(obj12);
              let tmp26;
              if (null != obj4.backgroundColors.tertiary) {
                const tertiary = obj4.backgroundColors.tertiary;
                ({ h: h3, s: s3, l: l3 } = tertiary.toHsl());
                const obj13 = { h: h3, s: s3 * stateFromStores, l: l3 };
                tmp26 = tinycolorDefault(obj13);
                const toHslResult2 = tertiary.toHsl();
              }
              obj9.tertiary = tmp26;
              const border = obj4.backgroundColors.border;
              const toHslResult1 = secondary.toHsl();
              ({ h: h4, s: s4, l: l4 } = border.toHsl());
              const obj14 = { h: h4, s: s4 * stateFromStores, l: l4 };
              obj9.border = tinycolorDefault(obj14);
              const label = obj4.backgroundColors.label;
              const toHslResult3 = border.toHsl();
              ({ h: h5, s: s5, l: l5 } = label.toHsl());
              const obj15 = { h: h5, s: s5 * stateFromStores, l: l5 };
              obj9.label = tinycolorDefault(obj15);
              tmp30 = obj9;
              const toHslResult4 = label.toHsl();
            }
            obj16 = { backgroundColors: tmp30, buttonColors: null, confettiColors: null };
            let tmp31;
            if (null != obj4.buttonColors) {
              const obj17 = { primary: null, secondary: null, text: null };
              const primary2 = obj4.buttonColors.primary;
              ({ h: h6, s: s6, l: l6 } = primary2.toHsl());
              const obj18 = { h: h6, s: s6 * stateFromStores, l: l6 };
              obj17.primary = tinycolorDefault(obj18);
              const secondary2 = obj4.buttonColors.secondary;
              const toHslResult5 = primary2.toHsl();
              ({ h: h7, s: s7, l: l7 } = secondary2.toHsl());
              const obj19 = { h: h7, s: s7 * stateFromStores, l: l7 };
              obj17.secondary = tinycolorDefault(obj19);
              const text = obj4.buttonColors.text;
              const toHslResult6 = secondary2.toHsl();
              ({ h: h8, s: s8, l: l8 } = text.toHsl());
              const obj20 = { h: h8, s: s8 * stateFromStores, l: l8 };
              obj17.text = tinycolorDefault(obj20);
              tmp31 = obj17;
              const toHslResult7 = text.toHsl();
            }
            obj16.buttonColors = tmp31;
            const confettiColors = obj4.confettiColors;
            obj16.confettiColors = confettiColors.map((toHsl) => {
              ({ h, s, l } = toHsl.toHsl());
              return tinycolorDefault({ h, s: s * stateFromStores, l });
            });
          }
          return obj16;
        } else {
          if (1 !== buttonColors.length) {
            const obj21 = { primary: buttonColors[0], secondary: buttonColors[1], text: null };
            [obj32, obj33] = buttonColors;
            const toRgbResult = obj32.toRgb();
            const toRgbResult1 = obj33.toRgb();
            const items1 = [, ,];
            ({ r: arr9[0], g: arr9[1], b: arr9[2] } = toRgbResult);
            const items2 = [, ,];
            ({ r: arr10[0], g: arr10[1], b: arr10[2] } = toRgbResult1);
            const tmpResult = UserProfileGradientUtils;
            [tmp44, tmp45, tmp46] = UserProfileGradientUtils.getValueInColorGradientByPercentage(items1, items2, 50);
            const obj22 = { r: tmp44, g: tmp45, b: tmp46 };
            const tmp43 = _slicedToArray(
              UserProfileGradientUtils.getValueInColorGradientByPercentage(items1, items2, 50),
              3,
            );
            obj21.text = tinycolorDefault(obj22).isLight() ? closure_0.dark : closure_0.light;
            const obj36 = tinycolorDefault(obj22);
          }
          const obj23 = { primary: buttonColors[0], secondary: buttonColors[0], text: null };
          const first = buttonColors[0];
          obj23.text = first.isLight() ? closure_0.dark : closure_0.light;
        }
      } else {
        if (1 !== backgroundColors.length) {
          const obj24 = { primary: null, secondary: null, tertiary: null, border: null, label: null };
          [obj30.primary, obj30.secondary] = backgroundColors;
          let tmp4;
          if (backgroundColors.length > 2) {
            tmp4 = backgroundColors[2];
          }
          obj24.tertiary = tmp4;
          [obj2, obj3] = backgroundColors;
          const toRgbResult2 = obj2.toRgb();
          const toRgbResult3 = obj3.toRgb();
          const items3 = [, ,];
          ({ r: arr2[0], g: arr2[1], b: arr2[2] } = toRgbResult2);
          const items4 = [, ,];
          ({ r: arr3[0], g: arr3[1], b: arr3[2] } = toRgbResult3);
          const tmpResult3 = UserProfileGradientUtils;
          [tmp9, tmp10, tmp11] = UserProfileGradientUtils.getValueInColorGradientByPercentage(items3, items4, 50);
          const obj25 = { r: tmp9, g: tmp10, b: tmp11 };
          const tmp8 = _slicedToArray(
            UserProfileGradientUtils.getValueInColorGradientByPercentage(items3, items4, 50),
            3,
          );
          obj24.border = tinycolorDefault(obj25).setAlpha(0.4);
          [obj7, obj8] = backgroundColors;
          const obj6 = tinycolorDefault(obj25);
          const toRgbResult4 = obj7.toRgb();
          const toRgbResult5 = obj8.toRgb();
          const items5 = [, ,];
          ({ r: arr4[0], g: arr4[1], b: arr4[2] } = toRgbResult4);
          const items6 = [, ,];
          ({ r: arr5[0], g: arr5[1], b: arr5[2] } = toRgbResult5);
          const tmpResult4 = UserProfileGradientUtils;
          [tmp16, tmp17, tmp18] = UserProfileGradientUtils.getValueInColorGradientByPercentage(items5, items6, 50);
          const obj26 = { r: tmp16, g: tmp17, b: tmp18 };
          const tmp15 = _slicedToArray(
            UserProfileGradientUtils.getValueInColorGradientByPercentage(items5, items6, 50),
            3,
          );
          obj24.label = tinycolorDefault(obj26).isLight() ? closure_0.dark : closure_0.light;
          const obj11 = tinycolorDefault(obj26);
        }
        const obj27 = { primary: backgroundColors[0], secondary: backgroundColors[0], border: null, label: null };
        const first1 = backgroundColors[0];
        obj27.border = first1.setAlpha(0.4);
        const first2 = backgroundColors[0];
        obj27.label = first2.isLight() ? closure_0.dark : closure_0.light;
      }
    }
  };
}
