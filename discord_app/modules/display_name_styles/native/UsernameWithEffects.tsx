// === Module 8923: AVERAGE_FONT_WIDTH_RATIO ===

// Module 8923 (AVERAGE_FONT_WIDTH_RATIO)
import PlatformTypes from "PlatformTypes" /* 501 */;
import ThemesDefault from "Themes" /* 712 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1940 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { MIN_PRISM_GRADIENT_WIDTH } from "items3" /* 1939 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
let c3 = importAllResult;
({ View: c4, processColor: c5, PixelRatio: closure_6, StyleSheet: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = { [arg1(1940).DisplayNameEffect.NEON]: 1, [arg1(1940).DisplayNameEffect.TOON]: 1.6, [arg1(1940).DisplayNameEffect.POP]: 1.2 };
let closure_12 = createCacheKey.createStyles((color) => {
  const result = 0.04 * arg1;
  const sum = 4 + 0.12 * arg1;
  const value = closure_6.get();
  const sum1 = dependencyMap[DisplayNameEffect.DisplayNameEffect.NEON] + 0.04 * arg1;
  const sum2 = dependencyMap[DisplayNameEffect.DisplayNameEffect.TOON] + 0.04 * arg1;
  const sum3 = dependencyMap[DisplayNameEffect.DisplayNameEffect.POP] + 0.04 * arg1;
  const result1 = Math.floor(sum2 / 2) / value;
  let obj = { color: ThemesDefault.colors.WHITE, textShadowColor: color, textShadowRadius: sum, textShadowOffset: { width: 0, height: 0 } };
  obj1 = PlatformTypes;
  if (obj1.isIOS()) {
    obj = { top: null, left: null, padding: null, marginVertical: null, marginLeft: null, marginRight: null };
    const result2 = -sum1 / 2;
    obj[0] = result2;
    obj[1] = result2;
    obj[2] = sum;
    obj[3] = -sum;
    obj[4] = -sum;
    obj[5] = -sum - sum1;
  } else {
    obj = { left: null, paddingRight: null, marginRight: null };
    obj[0] = -sum1;
    obj[1] = sum;
    obj[2] = -sum - sum1;
  }
  obj1 = { neon: null, popContainer: null, popBackLayer: null, popFrontLayer: null, toon: null, layoutImpact: null };
  const merged = Object.assign(obj);
  obj1[0] = obj;
  let tmp4Result = tmp4(501);
  let num = 0;
  if (tmp4Result.isIOS()) {
    num = -sum3 / 2;
  }
  const obj2 = { position: "relative", top: num, left: null, marginRight: null };
  tmp4Result = tmp4(501);
  let num2 = 0;
  if (tmp4Result.isIOS()) {
    num2 = -sum3 / 2;
  }
  obj2[2] = num2;
  let num3 = 0;
  if (tmp4Result1.isIOS()) {
    num3 = -sum3;
  }
  obj2[3] = num3;
  obj1[1] = obj2;
  const obj3 = { color, position: "absolute", width: "100%", height: "100%" };
  tmp4Result1 = PlatformTypes;
  if (tmp4Result2.isIOS()) {
    const obj4 = { top: null };
    obj4[0] = 1.2 + result;
    let obj5 = obj4;
  } else {
    obj5 = { transform: null };
    const obj6 = { translateY: null };
    obj6[0] = 1.2 + result;
    const items = [obj6];
    obj5[0] = items;
  }
  const merged1 = Object.assign(obj5);
  obj1[2] = obj3;
  tmp4Result2 = PlatformTypes;
  obj1[3] = { color: ThemesDefault.colors.WHITE };
  const obj8 = { color: ThemesDefault.colors.WHITE, top: null, left: null, marginRight: null };
  const obj7 = { color: ThemesDefault.colors.WHITE };
  let num6 = 0;
  if (tmp4Result3.isIOS()) {
    num6 = -sum2 / 2;
  }
  obj8[1] = num6;
  tmp4Result3 = PlatformTypes;
  if (tmp4Result4.isIOS()) {
    let result3 = -sum2 / 2;
  } else {
    result3 = -result1;
  }
  obj8[2] = result3;
  tmp4Result4 = PlatformTypes;
  obj8[3] = PlatformTypes.isIOS() ? -sum2 : -result1;
  obj1[4] = obj8;
  obj1[5] = { flexShrink: 1, minWidth: 0 };
  return obj1;
});
const memoResult = importAllResult.memo((userName) => {
  userName = userName.userName;
  let STATIC = userName.effectDisplayType;
  ({ userId, guildId } = userName);
  if (STATIC === undefined) {
    STATIC = userName(8924).EffectDisplayType.STATIC;
  }
  ({ defaultColor, containerStyle, ignoreDisabledStylesSetting, pendingDisplayNameStyles } = userName);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  const merged = Object.assign(userName, Object.create(null));
  let num2;
  const tmp6 = num2(4747)({ userId, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting });
  let obj = userName(8925);
  const isDisplayNameStylesFlywheelViewersEnabled = obj.useIsDisplayNameStylesFlywheelViewersEnabled("UsernameWithEffects");
  obj1 = userName(1938);
  const result = obj1.applyFlywheelViewingFallback(tmp6, isDisplayNameStylesFlywheelViewersEnabled);
  let obj2 = userName(4748);
  const displayNameStylesEnabled = obj2.useDisplayNameStylesEnabled({ location: "UsernameWithEffects" });
  let obj3 = userName(8926);
  const displayNameStylesFont = obj3.useDisplayNameStylesFont({ displayNameStyles: result, ignoreDisabledStylesSetting });
  let tmp12;
  if (null != displayNameStylesFont) {
    obj = { fontFamily: null, lineHeight: "Array" };
    obj[0] = displayNameStylesFont;
    tmp12 = obj;
  }
  let num = merged.lineClamp;
  if (num == null) {
    num = 1;
  }
  let tmp13 = tmp12;
  if (num <= 1) {
    let tmp14;
    if (null != displayNameStylesFont) {
      obj = { fontFamily: null };
      obj[0] = displayNameStylesFont;
      tmp14 = obj;
    }
    tmp13 = tmp14;
  }
  let tmp7Result = tmp7(4197);
  const token = tmp7Result.useToken(tmp4(712).colors.BACKGROUND_BASE_LOW);
  tmp7Result = tmp7(4197);
  const token1 = tmp7Result.useToken(tmp4(712).colors.WHITE);
  const displayNameStylesAccessibleColors = userName(8927).useDisplayNameStylesAccessibleColors({ displayNameStyles: result, backgroundColor: token });
  let first;
  if (displayNameStylesAccessibleColors.length > 0) {
    first = displayNameStylesAccessibleColors[0];
  }
  let effectId;
  if (result != null) {
    effectId = result.effectId;
  }
  if (effectId == null) {
    effectId = tmp7(1940).DisplayNameEffect.SOLID;
  }
  let colorVariants = null;
  if (null != first) {
    colorVariants = tmp7(1938).generateColorVariants(first);
    const tmp7Result2 = tmp7(1938);
  }
  const tmp7Result3 = userName(4484);
  const tmp20 = userName(4474).TextStyleSheet[tmp7Result3.useTypographyVariantRemap(tmp7Result3, merged.variant, false)];
  const flattenResult = closure_7.flatten(merged.style);
  num2 = undefined;
  if (flattenResult != null) {
    num2 = flattenResult.fontSize;
  }
  if (num2 == null) {
    let fontSize;
    if (tmp20 != null) {
      fontSize = tmp20.fontSize;
    }
    num2 = fontSize;
  }
  if (num2 == null) {
    num2 = 16;
  }
  let lineHeight;
  if (flattenResult != null) {
    lineHeight = flattenResult.lineHeight;
  }
  if (lineHeight == null) {
    let lineHeight1;
    if (tmp20 != null) {
      lineHeight1 = tmp20.lineHeight;
    }
    lineHeight = lineHeight1;
  }
  if (lineHeight == null) {
    lineHeight = 1.25 * num2;
  }
  const items = [userName, num2];
  const memo = importAllResult.useMemo(() => {
    const nodeText = userName(closure_1_2[18]).getNodeText(userName);
    let num;
    if (nodeText != null) {
      num = nodeText.length;
    }
    if (num == null) {
      num = 10;
    }
    return num * num2 * 0.6;
  }, items);
  if (null != dependencyMap[effectId]) {
    const sum = tmp26 + 0.04 * num2;
  }
  let str;
  if (colorVariants != null) {
    str = colorVariants.main;
  }
  if (str == null) {
    str = "";
  }
  const tmp28Result = closure_12(str, num2);
  if (displayNameStylesEnabled) {
    if (null != tmp6) {
      if (STATIC !== tmp7(8924).EffectDisplayType.PLAIN) {
        if (null != colorVariants) {
          const items1 = [merged.style, tmp13];
          if (tmp7Result4.doesEffectImpactLayout(effectId)) {
            const layoutImpact = tmp28Result.layoutImpact;
          }
          if (effectId === tmp7(1940).DisplayNameEffect.GUMMY) {
            const tmp4Result = tmp4(8930);
            const tmp66 = callback2;
            let str3 = tmp7(4200).getNodeText(userName);
            if (str3 == null) {
              str3 = "";
            }
            obj1 = { name: null, containerStyle: null, textStyle: null, textProps: null, colors: null };
            obj1[0] = str3;
            const items2 = [layoutImpact, containerStyle];
            obj1[1] = items2;
            obj1[2] = items1;
            obj2 = {};
            const merged1 = Object.assign(merged);
            obj2.gradientColors = undefined;
            obj2.gradientLength = memo;
            obj2.gradientMode = "clamp";
            obj2.gradientAngle = undefined;
            obj2.textStrokeWidth = undefined;
            obj2.textStrokeColor = undefined;
            obj1[3] = obj2;
            obj1[4] = displayNameStylesAccessibleColors;
            return tmp66(tmp4Result, obj1);
          } else {
            if (tmp7(1940).DisplayNameEffect.GRADIENT !== effectId) {
              if (tmp7(1940).DisplayNameEffect.PRISM !== effectId) {
                if (tmp7(1940).DisplayNameEffect.NEON === effectId) {
                  let neonStroke;
                  if (colorVariants != null) {
                    neonStroke = colorVariants.neonStroke;
                  }
                  const tmp53Result = callback(neonStroke);
                  let tmp56;
                  if (null != tmp53Result) {
                    tmp56 = tmp53Result;
                  }
                  const items3 = [items1, tmp28Result.neon, layoutImpact];
                  let tmp31 = tmp56;
                  let bound = memo;
                  let items10 = items3;
                  let tmp32 = sum;
                  const tmp53 = callback;
                } else if (tmp7(1940).DisplayNameEffect.POP === effectId) {
                  let dark2;
                  if (colorVariants != null) {
                    dark2 = colorVariants.dark2;
                  }
                  let tmp37Result = tmp37(dark2);
                  let main;
                  if (colorVariants != null) {
                    main = colorVariants.main;
                  }
                  tmp37Result = tmp37(main);
                  bound = memo;
                  items10 = items1;
                  if (null != colorVariants) {
                    obj3 = { style: null, children: null };
                    const items4 = [tmp28Result.popContainer, layoutImpact, containerStyle];
                    obj3[0] = items4;
                    const obj4 = {};
                    const merged2 = Object.assign(merged);
                    obj4.textStrokeWidth = sum;
                    let tmp48;
                    if (null != tmp37Result) {
                      tmp48 = tmp37Result;
                    }
                    obj4.textStrokeColor = tmp48;
                    const items5 = [items1, tmp28Result.popBackLayer];
                    obj4.style = items5;
                    obj4.children = userName;
                    const items6 = [callback2(tmp7(4474).Text, obj4), ];
                    const obj5 = {};
                    const merged3 = Object.assign(merged);
                    obj5.textStrokeWidth = sum;
                    let tmp52;
                    if (null != tmp37Result) {
                      tmp52 = tmp37Result;
                    }
                    obj5.textStrokeColor = tmp52;
                    const items7 = [items1, tmp28Result.popFrontLayer];
                    obj5.style = items7;
                    obj5.children = userName;
                    items6[1] = callback2(tmp7(4474).Text, obj5);
                    obj3[1] = items6;
                    return closure_10(closure_4, obj3);
                  }
                } else if (tmp7(1940).DisplayNameEffect.TOON === effectId) {
                  const items8 = [items1, tmp28Result.toon, layoutImpact];
                  const items9 = [callback(token1), callback(colorVariants.light2), callback(colorVariants.light1), callback(colorVariants.main)];
                  const tmp35 = callback(colorVariants.toonStroke);
                  let tmp36;
                  if (null != tmp35) {
                    tmp36 = tmp35;
                  }
                  let num5 = 90;
                  tmp31 = tmp36;
                  bound = lineHeight;
                  items10 = items8;
                  tmp32 = sum;
                  let tmp33 = items9;
                } else {
                  const SOLID = tmp7(1940).DisplayNameEffect.SOLID;
                  items10 = [items1, ];
                  const obj6 = { color: null };
                  obj6[0] = first;
                  items10[1] = obj6;
                  bound = memo;
                }
              }
              const obj7 = {};
              const merged4 = Object.assign(merged);
              obj7.gradientColors = tmp33;
              obj7.gradientLength = bound;
              obj7.gradientMode = "clamp";
              const items11 = [items10];
              obj7.style = items11;
              obj7.gradientAngle = num5;
              obj7.textStrokeWidth = tmp32;
              obj7.textStrokeColor = tmp31;
              obj7.children = userName;
              return callback2(tmp7(4474).Text, obj7);
            }
            const mapped = displayNameStylesAccessibleColors.map((arg0) => callback(arg0));
            const found = mapped.filter(tmp7(1471).isNotNullish);
            let num6 = 45;
            if (effectId === tmp7(1940).DisplayNameEffect.PRISM) {
              num6 = 0;
            }
            bound = memo;
            items10 = items1;
            num5 = num6;
            tmp33 = found;
            if (effectId === tmp7(1940).DisplayNameEffect.PRISM) {
              let tmp57 = found;
              if (found.length > 0) {
                const items12 = [];
                items12[HermesBuiltin.arraySpread(found, 0)] = found[0];
                tmp57 = items12;
              }
              const _Math = Math;
              bound = Math.max(memo, MIN_PRISM_GRADIENT_WIDTH);
              tmp33 = tmp57;
              items10 = items1;
              num5 = num6;
            }
          }
          tmp7Result4 = tmp7(1938);
        }
      }
      const obj8 = {};
      const merged5 = Object.assign(merged);
      const items13 = [merged.style, tmp12];
      obj8.style = items13;
      obj8.color = defaultColor;
      obj8.children = userName;
      return callback2(tmp7(4474).Text, obj8);
    }
  }
  const obj9 = {};
  const merged6 = Object.assign(merged);
  obj9.color = defaultColor;
  obj9.children = userName;
  return callback2(userName(4474).Text, obj9);
});
let result = require("set").fileFinishedImporting("modules/display_name_styles/native/UsernameWithEffects.tsx");

export default memoResult;
export const AVERAGE_FONT_WIDTH_RATIO = 0.6;