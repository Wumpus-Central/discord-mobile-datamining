// === Module 10392: createUseCollectiblesShopStyles ===

// Module 10392 (createUseCollectiblesShopStyles)
import tinycolorDefault from "tinycolor" /* 5311 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/createUseCollectiblesShopStyles.tsx");

export default function createUseCollectiblesShopStyles(arg0) {
  closure_0 = arg0;
  return (backgroundColors) => {
    let obj = callback(dependencyMap[4]);
    const items = [closure_1_4];
    const stateFromStores = obj.useStateFromStores(items, () => saturation.saturation);
    if (null == backgroundColors) {
      return {};
    } else {
      backgroundColors = backgroundColors.backgroundColors;
      if (0 === backgroundColors.length) {
        obj = { backgroundColors: null, buttonColors: null, confettiColors: null };
        obj[0] = undefined;
        const buttonColors = backgroundColors.buttonColors;
        if (0 === buttonColors.length) {
          obj[1] = undefined;
          obj[2] = backgroundColors.confettiColors;
          if (1 === stateFromStores) {
            obj = {};
            const merged = Object.assign(obj);
            obj7 = obj;
          } else {
            let tmp30;
            if (null != obj.backgroundColors) {
              obj1 = { primary: null, secondary: null, tertiary: null, border: null, label: null };
              const primary = obj.backgroundColors.primary;
              ({ h, s, l } = primary.toHsl());
              obj2 = { h: null, s: null, l: null };
              obj2[0] = h;
              obj2[1] = s * stateFromStores;
              obj2[2] = l;
              obj1[0] = tinycolorDefault(obj2);
              const secondary = obj.backgroundColors.secondary;
              const toHslResult = primary.toHsl();
              ({ h: h2, s: s2, l: l2 } = secondary.toHsl());
              obj3 = { h: null, s: null, l: null };
              obj3[0] = h2;
              obj3[1] = s2 * stateFromStores;
              obj3[2] = l2;
              obj1[1] = tinycolorDefault(obj3);
              let tmp26;
              if (null != obj.backgroundColors.tertiary) {
                const tertiary = obj.backgroundColors.tertiary;
                ({ h: h3, s: s3, l: l3 } = tertiary.toHsl());
                const obj4 = { h: null, s: null, l: null };
                obj4[0] = h3;
                obj4[1] = s3 * stateFromStores;
                obj4[2] = l3;
                tmp26 = tinycolorDefault(obj4);
                const toHslResult2 = tertiary.toHsl();
              }
              obj1[2] = tmp26;
              const border = obj.backgroundColors.border;
              const toHslResult1 = secondary.toHsl();
              ({ h: h4, s: s4, l: l4 } = border.toHsl());
              let obj5 = { h: null, s: null, l: null };
              obj5[0] = h4;
              obj5[1] = s4 * stateFromStores;
              obj5[2] = l4;
              obj1[3] = tinycolorDefault(obj5);
              const label = obj.backgroundColors.label;
              const toHslResult3 = border.toHsl();
              ({ h: h5, s: s5, l: l5 } = label.toHsl());
              const obj6 = { h: null, s: null, l: null };
              obj6[0] = h5;
              obj6[1] = s5 * stateFromStores;
              obj6[2] = l5;
              obj1[4] = tinycolorDefault(obj6);
              tmp30 = obj1;
              const toHslResult4 = label.toHsl();
            }
            obj7 = { backgroundColors: null, buttonColors: null, confettiColors: null };
            obj7[0] = tmp30;
            let tmp31;
            if (null != obj.buttonColors) {
              obj8 = { primary: null, secondary: null, text: null };
              const primary2 = obj.buttonColors.primary;
              ({ h: h6, s: s6, l: l6 } = primary2.toHsl());
              const obj9 = { h: null, s: null, l: null };
              obj9[0] = h6;
              obj9[1] = s6 * stateFromStores;
              obj9[2] = l6;
              obj8[0] = tinycolorDefault(obj9);
              const secondary2 = obj.buttonColors.secondary;
              const toHslResult5 = primary2.toHsl();
              ({ h: h7, s: s7, l: l7 } = secondary2.toHsl());
              let obj10 = { h: null, s: null, l: null };
              obj10[0] = h7;
              obj10[1] = s7 * stateFromStores;
              obj10[2] = l7;
              obj8[1] = tinycolorDefault(obj10);
              const text = obj.buttonColors.text;
              const toHslResult6 = secondary2.toHsl();
              ({ h: h8, s: s8, l: l8 } = text.toHsl());
              const obj11 = { h: null, s: null, l: null };
              obj11[0] = h8;
              obj11[1] = s8 * stateFromStores;
              obj11[2] = l8;
              obj8[2] = tinycolorDefault(obj11);
              tmp31 = obj8;
              const toHslResult7 = text.toHsl();
            }
            obj7[1] = tmp31;
            const confettiColors = obj.confettiColors;
            obj7[2] = confettiColors.map((item, index) => {
              ({ h, s, l } = item.toHsl());
              return closure_1_1(closure_1_2[3])({ h, s: s * stateFromStores, l });
            });
          }
          return obj7;
        } else {
          if (1 !== buttonColors.length) {
            const obj12 = { primary: null, secondary: null, text: null };
            obj12[0] = buttonColors[0];
            obj12[1] = buttonColors[1];
            [obj32, obj33] = buttonColors;
            const toRgbResult = obj32.toRgb();
            let tmpResult = callback(dependencyMap[2]);
            const items1 = [, , ];
            ({ r: arr9[0], g: arr9[1], b: arr9[2] } = toRgbResult);
            const items2 = [, , ];
            ({ r: arr10[0], g: arr10[1], b: arr10[2] } = obj33.toRgb());
            const toRgbResult1 = obj33.toRgb();
            [tmp44, tmp45, tmp46] = closure_1_3(tmpResult.getValueInColorGradientByPercentage(items1, items2, 50), 3);
            const obj13 = { r: null, g: null, b: null };
            obj13[0] = tmp44;
            obj13[1] = tmp45;
            obj13[2] = tmp46;
            const tmp43 = closure_1_3(tmpResult.getValueInColorGradientByPercentage(items1, items2, 50), 3);
            obj12[2] = tinycolorDefault(obj13).isLight() ? tmp39.dark : tmp39.light;
            const obj36 = tinycolorDefault(obj13);
          }
          const obj14 = { primary: null, secondary: null, text: null };
          obj14[0] = buttonColors[0];
          obj14[1] = buttonColors[0];
          const first = buttonColors[0];
          obj14[2] = first.isLight() ? tmp39.dark : tmp39.light;
        }
      } else {
        if (1 !== backgroundColors.length) {
          const obj15 = { primary: null, secondary: null, tertiary: null, border: null, label: null };
          [obj30[0], obj30[1]] = backgroundColors;
          let tmp4;
          if (backgroundColors.length > 2) {
            tmp4 = backgroundColors[2];
          }
          obj15[2] = tmp4;
          [obj2, obj3] = backgroundColors;
          const toRgbResult2 = obj1.toRgb();
          tmpResult = callback(dependencyMap[2]);
          const items3 = [, , ];
          ({ r: arr2[0], g: arr2[1], b: arr2[2] } = toRgbResult2);
          const items4 = [, , ];
          ({ r: arr3[0], g: arr3[1], b: arr3[2] } = obj2.toRgb());
          const toRgbResult3 = obj2.toRgb();
          [tmp9, tmp10, tmp11] = closure_1_3(tmpResult.getValueInColorGradientByPercentage(items3, items4, 50), 3);
          const obj16 = { r: null, g: null, b: null };
          obj16[0] = tmp9;
          obj16[1] = tmp10;
          obj16[2] = tmp11;
          obj5 = tinycolorDefault(obj16);
          obj15[3] = obj5.setAlpha(0.4);
          [obj7, obj8] = backgroundColors;
          const tmp8 = closure_1_3(tmpResult.getValueInColorGradientByPercentage(items3, items4, 50), 3);
          const toRgbResult4 = obj6.toRgb();
          const toRgbResult5 = obj7.toRgb();
          const items5 = [, , ];
          ({ r: arr4[0], g: arr4[1], b: arr4[2] } = toRgbResult4);
          const items6 = [, , ];
          ({ r: arr5[0], g: arr5[1], b: arr5[2] } = toRgbResult5);
          const tmpResult1 = callback(dependencyMap[2]);
          [tmp16, tmp17, tmp18] = closure_1_3(callback(dependencyMap[2]).getValueInColorGradientByPercentage(items5, items6, 50), 3);
          const obj17 = { r: null, g: null, b: null };
          obj17[0] = tmp16;
          obj17[1] = tmp17;
          obj17[2] = tmp18;
          obj10 = tinycolorDefault(obj17);
          obj15[4] = obj10.isLight() ? tmp39.dark : tmp39.light;
          const tmp15 = closure_1_3(callback(dependencyMap[2]).getValueInColorGradientByPercentage(items5, items6, 50), 3);
        }
        const obj18 = { primary: null, secondary: null, border: null, label: null };
        obj18[0] = backgroundColors[0];
        obj18[1] = backgroundColors[0];
        const first1 = backgroundColors[0];
        obj18[2] = first1.setAlpha(0.4);
        const first2 = backgroundColors[0];
        obj18[3] = first2.isLight() ? tmp39.dark : tmp39.light;
      }
    }
  };
};