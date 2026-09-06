// === Module 10899: UsernameWithEffects ===

// Module 10899 (UsernameWithEffects)
import nativeDefault from "native" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1116 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1390 */;
import getNodeText from "getNodeText" /* 4265 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, processColor: hasOwnProperty, PixelRatio: metroRequire, StyleSheet: closure_7 } = get_ActivityIndicator);
const MIN_PRISM_GRADIENT_WIDTH = fn(1389).MIN_PRISM_GRADIENT_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const dependencyMap = { [fn(1390).DisplayNameEffect.NEON]: 1, [fn(1390).DisplayNameEffect.TOON]: 1.6, [fn(1390).DisplayNameEffect.POP]: 1.2 };
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles((textShadowColor, arg1) => {
  const result = 0.04 * arg1;
  const sum = 4 + 0.12 * arg1;
  value = timestampProducer.get();
  const sum1 = dependencyMap[DisplayNameEffect.DisplayNameEffect.NEON] + 0.04 * arg1;
  const sum2 = dependencyMap[DisplayNameEffect.DisplayNameEffect.TOON] + 0.04 * arg1;
  const sum3 = dependencyMap[DisplayNameEffect.DisplayNameEffect.POP] + 0.04 * arg1;
  const result1 = Math.floor(sum2 / 2) / value;
  let obj = { color: nativeDefault.colors.WHITE, textShadowColor, textShadowRadius: sum, textShadowOffset: { width: 0, height: 0 } };
  let obj1 = utils_PlatformUtils;
  if (obj1.isIOS()) {
    const rect = { top: null, left: null, padding: null, marginVertical: null, marginLeft: null, marginRight: null };
    const result2 = -sum1 / 2;
    rect.top = result2;
    rect.left = result2;
    rect.padding = sum;
    rect.marginVertical = -sum;
    rect.marginLeft = -sum;
    rect.marginRight = -sum - sum1;
    obj = rect;
  } else {
    obj = { left: -sum1, paddingRight: sum, marginRight: -sum - sum1 };
  }
  obj = { neon: null, popContainer: null, popBackLayer: null, popFrontLayer: null, toon: null, layoutImpact: null };
  const merged = Object.assign(obj);
  obj.neon = obj;
  let tmp4Result = utils_PlatformUtils;
  let num = 0;
  if (tmp4Result.isIOS()) {
    num = -sum3 / 2;
  }
  const rect1 = { position: "relative", top: num, left: null, marginRight: null };
  tmp4Result = utils_PlatformUtils;
  let num2 = 0;
  if (tmp4Result.isIOS()) {
    num2 = -sum3 / 2;
  }
  rect1.left = num2;
  let num3 = 0;
  if (tmp4Result1.isIOS()) {
    num3 = -sum3;
  }
  rect1.marginRight = num3;
  obj.popContainer = rect1;
  const size = { color: textShadowColor, position: "absolute", width: "100%", height: "100%" };
  tmp4Result1 = utils_PlatformUtils;
  if (tmp4Result2.isIOS()) {
    obj1 = { top: 1.2 + result };
    let obj2 = obj1;
  } else {
    obj2 = { transform: null };
    const obj3 = { translateY: 1.2 + result };
    const items = [obj3];
    obj2.transform = items;
  }
  const merged1 = Object.assign(obj2);
  obj.popBackLayer = size;
  tmp4Result2 = utils_PlatformUtils;
  obj.popFrontLayer = { color: nativeDefault.colors.WHITE };
  const rect2 = { color: nativeDefault.colors.WHITE, top: null, left: null, marginRight: null };
  const obj4 = { color: nativeDefault.colors.WHITE };
  let num6 = 0;
  if (tmp4Result3.isIOS()) {
    num6 = -sum2 / 2;
  }
  rect2.top = num6;
  tmp4Result3 = utils_PlatformUtils;
  if (tmp4Result4.isIOS()) {
    let result3 = -sum2 / 2;
  } else {
    result3 = -result1;
  }
  rect2.left = result3;
  tmp4Result4 = utils_PlatformUtils;
  rect2.marginRight = utils_PlatformUtils.isIOS() ? -sum2 : -result1;
  obj.toon = rect2;
  obj.layoutImpact = { flexShrink: 1, minWidth: 0 };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/UsernameWithEffects.tsx");

export default noop.memo((userName) => {
  userName = userName.userName;
  let STATIC = userName.effectDisplayType;
  ({ userId, guildId } = userName);
  if (STATIC === undefined) {
    STATIC = userName(10900).EffectDisplayType.STATIC;
  }
  ({ defaultColor, containerStyle, ignoreDisabledStylesSetting, pendingDisplayNameStyles } = userName);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  const merged = Object.assign(userName, Object.assign({ userId: 0, guildId: 0, userName: 0, effectDisplayType: 0, pendingDisplayNameStyles: 0, defaultColor: 0, containerStyle: 0, ignoreDisabledStylesSetting: 0 }));
  let num2;
  const tmp6 = num2(4794)({ userId, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting });
  let obj = userName(9177);
  const isDisplayNameStylesFlywheelViewersEnabled = obj.useIsDisplayNameStylesFlywheelViewersEnabled("UsernameWithEffects");
  let obj1 = userName(1388);
  const result = obj1.applyFlywheelViewingFallback(tmp6, isDisplayNameStylesFlywheelViewersEnabled);
  let obj2 = userName(4795);
  const displayNameStylesEnabled = obj2.useDisplayNameStylesEnabled({ location: "UsernameWithEffects" });
  let obj3 = userName(9176);
  const displayNameStylesFont = obj3.useDisplayNameStylesFont({ displayNameStyles: result, ignoreDisabledStylesSetting });
  let tmp12;
  if (null != displayNameStylesFont) {
    obj = { fontFamily: displayNameStylesFont, lineHeight: "a" };
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
      obj = { fontFamily: displayNameStylesFont };
      tmp14 = obj;
    }
    tmp13 = tmp14;
  }
  let tmp7Result = tmp7(4262);
  const token = tmp7Result.useToken(tmp4(576).colors.BACKGROUND_BASE_LOW);
  tmp7Result = tmp7(4262);
  const token1 = tmp7Result.useToken(tmp4(576).colors.WHITE);
  const displayNameStylesAccessibleColors = userName(10901).useDisplayNameStylesAccessibleColors({ displayNameStyles: result, backgroundColor: token });
  let first;
  if (displayNameStylesAccessibleColors.length > 0) {
    first = displayNameStylesAccessibleColors[0];
  }
  let effectId;
  if (result != null) {
    effectId = result.effectId;
  }
  if (effectId == null) {
    effectId = tmp7(1390).DisplayNameEffect.SOLID;
  }
  let colorVariants = null;
  if (null != first) {
    colorVariants = tmp7(1388).generateColorVariants(first);
    const tmp7Result2 = tmp7(1388);
  }
  const tmp7Result3 = userName(4566);
  const tmp20 = userName(4556).TextStyleSheet[tmp7Result3.useTypographyVariantRemap(tmp7Result3, merged.variant, false)];
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
  const memo = noop.useMemo(() => {
    const nodeText = getNodeText.getNodeText(userName);
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
      if (STATIC !== tmp7(10900).EffectDisplayType.PLAIN) {
        if (null != colorVariants) {
          const items1 = [merged.style, tmp13];
          if (tmp7Result4.doesEffectImpactLayout(effectId)) {
            const layoutImpact = tmp28Result.layoutImpact;
          }
          if (effectId === tmp7(1390).DisplayNameEffect.GUMMY) {
            const tmp4Result = tmp4(10904);
            let str3 = tmp7(4265).getNodeText(userName);
            if (str3 == null) {
              str3 = "";
            }
            obj1 = { name: str3, containerStyle: null, textStyle: null, textProps: null, colors: null };
            const items2 = [layoutImpact, containerStyle];
            obj1.containerStyle = items2;
            obj1.textStyle = items1;
            obj2 = {};
            const merged1 = Object.assign(merged);
            obj2.gradientColors = undefined;
            obj2.gradientLength = memo;
            obj2.gradientMode = "clamp";
            obj2.gradientAngle = undefined;
            obj2.textStrokeWidth = undefined;
            obj2.textStrokeColor = undefined;
            obj1.textProps = obj2;
            obj1.colors = displayNameStylesAccessibleColors;
            return closure_9(tmp4Result, obj1);
          } else {
            if (tmp7(1390).DisplayNameEffect.GRADIENT !== effectId) {
              if (tmp7(1390).DisplayNameEffect.PRISM !== effectId) {
                if (tmp7(1390).DisplayNameEffect.NEON === effectId) {
                  let neonStroke;
                  if (colorVariants != null) {
                    neonStroke = colorVariants.neonStroke;
                  }
                  const tmp53Result = closure_5(neonStroke);
                  let tmp56;
                  if (null != tmp53Result) {
                    tmp56 = tmp53Result;
                  }
                  const items3 = [items1, tmp28Result.neon, layoutImpact];
                  let tmp31 = tmp56;
                  let bound = memo;
                  let items10 = items3;
                  let tmp32 = sum;
                } else if (tmp7(1390).DisplayNameEffect.POP === effectId) {
                  let dark2;
                  if (colorVariants != null) {
                    dark2 = colorVariants.dark2;
                  }
                  let tmp37Result = closure_5(dark2);
                  let main;
                  if (colorVariants != null) {
                    main = colorVariants.main;
                  }
                  tmp37Result = closure_5(main);
                  bound = memo;
                  items10 = items1;
                  if (null != colorVariants) {
                    obj3 = { style: null, children: null };
                    const items4 = [tmp28Result.popContainer, layoutImpact, containerStyle];
                    obj3.style = items4;
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
                    const items6 = [closure_9(tmp7(4556).Text, obj4), ];
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
                    items6[1] = closure_9(tmp7(4556).Text, obj5);
                    obj3.children = items6;
                    return closure_10(closure_4, obj3);
                  }
                } else if (tmp7(1390).DisplayNameEffect.TOON === effectId) {
                  const items8 = [items1, tmp28Result.toon, layoutImpact];
                  const items9 = [closure_5(token1), closure_5(colorVariants.light2), closure_5(colorVariants.light1), closure_5(colorVariants.main)];
                  const tmp35 = closure_5(colorVariants.toonStroke);
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
                  const SOLID = tmp7(1390).DisplayNameEffect.SOLID;
                  items10 = [items1, ];
                  const obj6 = { color: first };
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
              return closure_9(tmp7(4556).Text, obj7);
            }
            const mapped = displayNameStylesAccessibleColors.map((item) => closure_1_5(item));
            const found = mapped.filter(tmp7(1369).isNotNullish);
            let num6 = 45;
            if (effectId === tmp7(1390).DisplayNameEffect.PRISM) {
              num6 = 0;
            }
            bound = memo;
            items10 = items1;
            num5 = num6;
            tmp33 = found;
            if (effectId === tmp7(1390).DisplayNameEffect.PRISM) {
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
          tmp7Result4 = tmp7(1388);
        }
      }
      const obj8 = {};
      const merged5 = Object.assign(merged);
      const items13 = [merged.style, tmp12];
      obj8.style = items13;
      obj8.color = defaultColor;
      obj8.children = userName;
      return closure_9(tmp7(4556).Text, obj8);
    }
  }
  const obj9 = {};
  const merged6 = Object.assign(merged);
  obj9.color = defaultColor;
  obj9.children = userName;
  return closure_9(userName(4556).Text, obj9);
});
export const AVERAGE_FONT_WIDTH_RATIO = 0.6;