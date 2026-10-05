// === Module 10816: createUseCollectiblesShopStyles ===

// Module 10816 (createUseCollectiblesShopStyles)
import useStateFromStores from "useStateFromStores" /* 573 */;
import _modDef7063 from "module_7063" /* 7063 */;
import UserProfileGradientUtils from "UserProfileGradientUtils" /* 7901 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/createUseCollectiblesShopStyles.tsx");

export default function createUseCollectiblesShopStyles(arg0) {
  let closure_0 = arg0;
  return (backgroundColors) => {
    let confettiColors;
    let first;
    let first1;
    let first2;
    let h;
    let h2;
    let h3;
    let h4;
    let h5;
    let h6;
    let h7;
    let h8;
    let l;
    let l2;
    let l3;
    let l4;
    let l5;
    let l6;
    let l7;
    let l8;
    let obj11;
    let obj19;
    let obj2;
    let obj20;
    let obj22;
    let obj23;
    let obj26;
    let obj27;
    let obj28;
    let obj3;
    let obj32;
    let obj33;
    let obj36;
    let obj6;
    let obj7;
    let obj8;
    let s;
    let s2;
    let s3;
    let s4;
    let s5;
    let s6;
    let s7;
    let s8;
    let saturation;
    let tmp10;
    let tmp11;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp20;
    let tmp24;
    let tmp29;
    let tmp4;
    let tmp42;
    let tmp43;
    let tmp44;
    let tmp9;
    let obj = useStateFromStores;
    const items = [AccessibilityStore];
    const stateFromStores = obj.useStateFromStores(items, () => saturation.saturation);
    if (null == backgroundColors) {
      return {};
    } else {
      let obj24;
      backgroundColors = backgroundColors.backgroundColors;
      let tmp19;
      if (0 !== backgroundColors.length) {
        let obj5;
        if (1 === backgroundColors.length) {
          const obj4 = { primary: backgroundColors[0], secondary: backgroundColors[0], border: first.setAlpha(0.4), label: first1.isLight() ? closure_0.dark : closure_0.light };
          first = backgroundColors[0];
          first1 = backgroundColors[0];
          obj5 = obj4;
        } else {
          obj5 = { primary: null, secondary: null, tertiary: tmp4, border: obj6.setAlpha(0.4), label: obj11.isLight() ? closure_0.dark : closure_0.light };
          [obj15.primary, obj15.secondary] = backgroundColors;
          tmp4 = undefined;
          if (backgroundColors.length > 2) {
            tmp4 = backgroundColors[2];
          }
          [obj2, obj3] = backgroundColors;
          const toRgbResult = obj2.toRgb();
          const items1 = [, , ];
          ({ r: arr2[0], g: arr2[1], b: arr2[2] } = toRgbResult);
          const items2 = [, , ];
          ({ r: arr3[0], g: arr3[1], b: arr3[2] } = obj3.toRgb());
          const toRgbResult1 = obj3.toRgb();
          const tmpResult = UserProfileGradientUtils;
          [tmp9, tmp10, tmp11] = tmpResult.getValueInColorGradientByPercentage(items1, items2, 50);
          const obj9 = { r: tmp9, g: tmp10, b: tmp11 };
          _slicedToArray(tmpResult.getValueInColorGradientByPercentage(items1, items2, 50), 3);
          [obj7, obj8] = backgroundColors;
          obj6 = _modDef7063(obj9);
          const toRgbResult2 = obj7.toRgb();
          const items3 = [, , ];
          ({ r: arr4[0], g: arr4[1], b: arr4[2] } = toRgbResult2);
          const items4 = [, , ];
          ({ r: arr5[0], g: arr5[1], b: arr5[2] } = obj8.toRgb());
          const toRgbResult3 = obj8.toRgb();
          const tmpResult3 = UserProfileGradientUtils;
          [tmp16, tmp17, tmp18] = tmpResult3.getValueInColorGradientByPercentage(items3, items4, 50);
          const obj10 = { r: tmp16, g: tmp17, b: tmp18 };
          _slicedToArray(tmpResult3.getValueInColorGradientByPercentage(items3, items4, 50), 3);
          obj11 = _modDef7063(obj10);
        }
        tmp19 = obj5;
      }
      const obj12 = { backgroundColors: tmp19, buttonColors: tmp20, confettiColors: backgroundColors.confettiColors };
      const buttonColors = backgroundColors.buttonColors;
      tmp20 = undefined;
      if (0 !== buttonColors.length) {
        let obj14;
        if (1 === buttonColors.length) {
          const obj13 = { primary: buttonColors[0], secondary: buttonColors[0], text: first2.isLight() ? closure_0.dark : closure_0.light };
          first2 = buttonColors[0];
          obj14 = obj13;
        } else {
          obj14 = { primary: buttonColors[0], secondary: buttonColors[1], text: obj36.isLight() ? closure_0.dark : closure_0.light };
          [obj32, obj33] = buttonColors;
          const toRgbResult4 = obj32.toRgb();
          const items5 = [, , ];
          ({ r: arr9[0], g: arr9[1], b: arr9[2] } = toRgbResult4);
          const items6 = [, , ];
          ({ r: arr10[0], g: arr10[1], b: arr10[2] } = obj33.toRgb());
          const toRgbResult5 = obj33.toRgb();
          const tmpResult4 = UserProfileGradientUtils;
          [tmp42, tmp43, tmp44] = tmpResult4.getValueInColorGradientByPercentage(items5, items6, 50);
          const obj16 = { r: tmp42, g: tmp43, b: tmp44 };
          _slicedToArray(tmpResult4.getValueInColorGradientByPercentage(items5, items6, 50), 3);
          obj36 = _modDef7063(obj16);
        }
        tmp20 = obj14;
      }
      if (1 === stateFromStores) {
        const obj17 = {};
        const merged = Object.assign(obj12);
        obj24 = obj17;
      } else {
        let tmp28;
        if (null != obj12.backgroundColors) {
          const primary = obj12.backgroundColors.primary;
          const obj18 = { primary: _modDef7063(obj19), secondary: _modDef7063(obj20), tertiary: tmp24, border: _modDef7063(obj22), label: _modDef7063(obj23) };
          const toHslResult = primary.toHsl();
          ({ h, s, l } = toHslResult);
          const secondary = obj12.backgroundColors.secondary;
          obj19 = { h, s: s * stateFromStores, l };
          ({ h: h2, s: s2, l: l2 } = secondary.toHsl());
          obj20 = { h: h2, s: s2 * stateFromStores, l: l2 };
          secondary.toHsl();
          tmp24 = undefined;
          if (null != obj12.backgroundColors.tertiary) {
            const tertiary = obj12.backgroundColors.tertiary;
            ({ h: h3, s: s3, l: l3 } = tertiary.toHsl());
            const obj21 = { h: h3, s: s3 * stateFromStores, l: l3 };
            tertiary.toHsl();
            tmp24 = _modDef7063(obj21);
          }
          const border = obj12.backgroundColors.border;
          ({ h: h4, s: s4, l: l4 } = border.toHsl());
          obj22 = { h: h4, s: s4 * stateFromStores, l: l4 };
          border.toHsl();
          const label = obj12.backgroundColors.label;
          ({ h: h5, s: s5, l: l5 } = label.toHsl());
          obj23 = { h: h5, s: s5 * stateFromStores, l: l5 };
          label.toHsl();
          tmp28 = obj18;
        }
        obj24 = {
          backgroundColors: tmp28,
          buttonColors: tmp29,
          confettiColors: confettiColors.map((toHsl) => {
                let h;
                let l;
                let s;
                ({ h, s, l } = toHsl.toHsl());
                const obj = { h, s: s * stateFromStores, l };
                toHsl.toHsl();
                return closure_2_1(closure_2_2[3])(obj);
              })
        };
        tmp29 = undefined;
        if (null != obj12.buttonColors) {
          const primary2 = obj12.buttonColors.primary;
          const obj25 = { primary: _modDef7063(obj26), secondary: _modDef7063(obj27), text: _modDef7063(obj28) };
          ({ h: h6, s: s6, l: l6 } = primary2.toHsl());
          obj26 = { h: h6, s: s6 * stateFromStores, l: l6 };
          primary2.toHsl();
          const secondary2 = obj12.buttonColors.secondary;
          ({ h: h7, s: s7, l: l7 } = secondary2.toHsl());
          obj27 = { h: h7, s: s7 * stateFromStores, l: l7 };
          secondary2.toHsl();
          const text = obj12.buttonColors.text;
          ({ h: h8, s: s8, l: l8 } = text.toHsl());
          obj28 = { h: h8, s: s8 * stateFromStores, l: l8 };
          text.toHsl();
          tmp29 = obj25;
        }
        confettiColors = obj12.confettiColors;
      }
      return obj24;
    }
  };
};