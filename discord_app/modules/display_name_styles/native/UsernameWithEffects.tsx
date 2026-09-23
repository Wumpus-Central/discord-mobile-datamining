// discord_app/modules/display_name_styles/native/UsernameWithEffects.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import DisplayNameEffect from "../../../../discord_common/js/shared/shared-constants/DisplayNameEffect.tsx";
import getNodeText from "../../../design/utils/shared/getNodeText.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({
  View: closure_4,
  processColor: hasOwnProperty,
  PixelRatio: metroRequire,
  StyleSheet: closure_7,
} = get_ActivityIndicator);
const MIN_PRISM_GRADIENT_WIDTH = fn(1390).MIN_PRISM_GRADIENT_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const dependencyMap = {
  [fn(1391).DisplayNameEffect.NEON]: 1,
  [fn(1391).DisplayNameEffect.TOON]: 1.6,
  [fn(1391).DisplayNameEffect.POP]: 1.2,
};
const createStyles = fn(4827);
let closure_12 = createStyles.createStyles((textShadowColor, arg1) => {
  const result = 0.04 * arg1;
  const sum = 4 + 0.12 * arg1;
  value = timestampProducer.get();
  const sum1 = dependencyMap[DisplayNameEffect.DisplayNameEffect.NEON] + 0.04 * arg1;
  const sum2 = dependencyMap[DisplayNameEffect.DisplayNameEffect.TOON] + 0.04 * arg1;
  const sum3 = dependencyMap[DisplayNameEffect.DisplayNameEffect.POP] + 0.04 * arg1;
  const result1 = Math.floor(sum2 / 2) / value;
  const obj = {
    color: nativeDefault.colors.WHITE,
    textShadowColor,
    textShadowRadius: sum,
    textShadowOffset: { width: 0, height: 0 },
  };
  if (obj2.isIOS()) {
    const rect = { top: null, left: null, padding: null, marginVertical: null, marginLeft: null, marginRight: null };
    const result2 = -sum1 / 2;
    rect.top = result2;
    rect.left = result2;
    rect.padding = sum;
    rect.marginVertical = -sum;
    rect.marginLeft = -sum;
    rect.marginRight = -sum - sum1;
    let obj3 = rect;
  } else {
    obj3 = { left: -sum1, paddingRight: sum, marginRight: -sum - sum1 };
  }
  const obj4 = {
    neon: null,
    popContainer: null,
    popBackLayer: null,
    popFrontLayer: null,
    toon: null,
    layoutImpact: null,
  };
  const merged = Object.assign(obj3);
  obj4.neon = obj;
  obj2 = utils_PlatformUtils;
  let num = 0;
  if (tmp4Result.isIOS()) {
    num = -sum3 / 2;
  }
  const rect1 = { position: "relative", top: num, left: null, marginRight: null };
  tmp4Result = utils_PlatformUtils;
  let num2 = 0;
  if (tmp4Result7.isIOS()) {
    num2 = -sum3 / 2;
  }
  rect1.left = num2;
  tmp4Result7 = utils_PlatformUtils;
  let num3 = 0;
  if (tmp4Result8.isIOS()) {
    num3 = -sum3;
  }
  rect1.marginRight = num3;
  obj4.popContainer = rect1;
  const rect2 = { color: textShadowColor, position: "absolute", left: 0, right: 0 };
  tmp4Result8 = utils_PlatformUtils;
  if (tmp4Result9.isIOS()) {
    const obj5 = { top: 1.2 + result };
    let obj6 = obj5;
  } else {
    obj6 = { transform: null };
    const obj7 = { translateY: 1.2 + result };
    const items = [obj7];
    obj6.transform = items;
  }
  const merged1 = Object.assign(obj6);
  obj4.popBackLayer = rect2;
  tmp4Result9 = utils_PlatformUtils;
  obj4.popFrontLayer = { color: nativeDefault.colors.WHITE };
  const rect3 = { color: nativeDefault.colors.WHITE, top: null, left: null, marginRight: null };
  const obj8 = { color: nativeDefault.colors.WHITE };
  let num6 = 0;
  if (tmp4Result10.isIOS()) {
    num6 = -sum2 / 2;
  }
  rect3.top = num6;
  tmp4Result10 = utils_PlatformUtils;
  if (tmp4Result11.isIOS()) {
    let result3 = -sum2 / 2;
  } else {
    result3 = -result1;
  }
  rect3.left = result3;
  tmp4Result11 = utils_PlatformUtils;
  rect3.marginRight = utils_PlatformUtils.isIOS() ? -sum2 : -result1;
  obj4.toon = rect3;
  obj4.layoutImpact = { flexShrink: 1, minWidth: 0 };
  return obj4;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/UsernameWithEffects.tsx");

export default noop.memo((userName) => {
  userName = userName.userName;
  let STATIC = userName.effectDisplayType;
  ({ userId, guildId } = userName);
  if (STATIC === undefined) {
    STATIC = userName(11243).EffectDisplayType.STATIC;
  }
  ({ defaultColor, containerStyle, ignoreDisabledStylesSetting, pendingDisplayNameStyles } = userName);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  const merged = Object.assign(
    userName,
    Object.assign({
      userId: 0,
      guildId: 0,
      userName: 0,
      effectDisplayType: 0,
      pendingDisplayNameStyles: 0,
      defaultColor: 0,
      containerStyle: 0,
      ignoreDisabledStylesSetting: 0,
    }),
  );
  let num2;
  const tmp6 = num2(5074)({ userId, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting });
  const isDisplayNameStylesFlywheelViewersEnabled =
    userName(10076).useIsDisplayNameStylesFlywheelViewersEnabled("UsernameWithEffects");
  const obj = userName(10076);
  const result = userName(1389).applyFlywheelViewingFallback(tmp6, isDisplayNameStylesFlywheelViewersEnabled);
  const obj2 = userName(1389);
  const displayNameStylesEnabled = userName(5075).useDisplayNameStylesEnabled({ location: "UsernameWithEffects" });
  const obj3 = userName(5075);
  const displayNameStylesFont = userName(10075).useDisplayNameStylesFont({
    displayNameStyles: result,
    ignoreDisabledStylesSetting,
  });
  let tmp12;
  if (null != displayNameStylesFont) {
    const obj5 = { fontFamily: displayNameStylesFont, lineHeight: "Array" };
    tmp12 = obj5;
  }
  let num = merged.lineClamp;
  if (num == null) {
    num = 1;
  }
  let tmp13 = tmp12;
  if (num <= 1) {
    let tmp14;
    if (null != displayNameStylesFont) {
      const obj6 = { fontFamily: displayNameStylesFont };
      tmp14 = obj6;
    }
    tmp13 = tmp14;
  }
  const obj4 = userName(10075);
  const token = userName(4524).useToken(tmp4(576).colors.BACKGROUND_BASE_LOW);
  const tmp7Result = userName(4524);
  const token1 = userName(4524).useToken(tmp4(576).colors.WHITE);
  const tmp7Result7 = userName(4524);
  const displayNameStylesAccessibleColors = userName(11244).useDisplayNameStylesAccessibleColors({
    displayNameStyles: result,
    backgroundColor: token,
  });
  let first;
  if (displayNameStylesAccessibleColors.length > 0) {
    first = displayNameStylesAccessibleColors[0];
  }
  let effectId;
  if (result != null) {
    effectId = result.effectId;
  }
  if (effectId == null) {
    effectId = tmp7(1391).DisplayNameEffect.SOLID;
  }
  let colorVariants = null;
  if (null != first) {
    colorVariants = tmp7(1389).generateColorVariants(first);
    const tmp7Result9 = tmp7(1389);
  }
  const tmp7Result10 = userName(4833);
  const tmp20 =
    userName(4823).TextStyleSheet[tmp7Result10.useTypographyVariantRemap(tmp7Result10, merged.variant, false)];
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
      if (STATIC !== tmp7(11243).EffectDisplayType.PLAIN) {
        if (null != colorVariants) {
          const items1 = [merged.style, tmp13];
          if (tmp7Result11.doesEffectImpactLayout(effectId)) {
            const layoutImpact = tmp28Result.layoutImpact;
          }
          if (effectId === tmp7(1391).DisplayNameEffect.GUMMY) {
            const tmp4Result = tmp4(11247);
            let str3 = tmp7(4527).getNodeText(userName);
            if (str3 == null) {
              str3 = "";
            }
            const obj7 = { name: str3, containerStyle: null, textStyle: null, textProps: null, colors: null };
            const items2 = [layoutImpact, containerStyle];
            obj7.containerStyle = items2;
            obj7.textStyle = items1;
            const obj8 = {};
            const merged1 = Object.assign(merged);
            obj8.gradientColors = undefined;
            obj8.gradientLength = memo;
            obj8.gradientMode = "clamp";
            obj8.gradientAngle = undefined;
            obj8.textStrokeWidth = undefined;
            obj8.textStrokeColor = undefined;
            obj7.textProps = obj8;
            obj7.colors = displayNameStylesAccessibleColors;
            return closure_9(tmp4Result, obj7);
          } else {
            if (tmp7(1391).DisplayNameEffect.GRADIENT !== effectId) {
              if (tmp7(1391).DisplayNameEffect.PRISM !== effectId) {
                if (tmp7(1391).DisplayNameEffect.NEON === effectId) {
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
                } else if (tmp7(1391).DisplayNameEffect.POP === effectId) {
                  let dark2;
                  if (colorVariants != null) {
                    dark2 = colorVariants.dark2;
                  }
                  const tmp37Result = closure_5(dark2);
                  let main;
                  if (colorVariants != null) {
                    main = colorVariants.main;
                  }
                  const tmp37Result2 = closure_5(main);
                  bound = memo;
                  items10 = items1;
                  if (null != colorVariants) {
                    const obj9 = { style: null, children: null };
                    const items4 = [tmp28Result.popContainer, layoutImpact, containerStyle];
                    obj9.style = items4;
                    const obj10 = {};
                    const merged2 = Object.assign(merged);
                    obj10.textStrokeWidth = sum;
                    let tmp48;
                    if (null != tmp37Result2) {
                      tmp48 = tmp37Result2;
                    }
                    obj10.textStrokeColor = tmp48;
                    const items5 = [items1, tmp28Result.popBackLayer];
                    obj10.style = items5;
                    obj10.children = userName;
                    const items6 = [closure_9(tmp7(4823).Text, obj10)];
                    const obj11 = {};
                    const merged3 = Object.assign(merged);
                    obj11.textStrokeWidth = sum;
                    let tmp52;
                    if (null != tmp37Result) {
                      tmp52 = tmp37Result;
                    }
                    obj11.textStrokeColor = tmp52;
                    const items7 = [items1, tmp28Result.popFrontLayer];
                    obj11.style = items7;
                    obj11.children = userName;
                    items6[1] = closure_9(tmp7(4823).Text, obj11);
                    obj9.children = items6;
                    return closure_10(closure_4, obj9);
                  }
                } else if (tmp7(1391).DisplayNameEffect.TOON === effectId) {
                  const items8 = [items1, tmp28Result.toon, layoutImpact];
                  const items9 = [
                    closure_5(token1),
                    closure_5(colorVariants.light2),
                    closure_5(colorVariants.light1),
                    closure_5(colorVariants.main),
                  ];
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
                  const SOLID = tmp7(1391).DisplayNameEffect.SOLID;
                  items10 = [items1];
                  const obj12 = { color: first };
                  items10[1] = obj12;
                  bound = memo;
                }
              }
              const obj13 = {};
              const merged4 = Object.assign(merged);
              obj13.gradientColors = tmp33;
              obj13.gradientLength = bound;
              obj13.gradientMode = "clamp";
              const items11 = [items10];
              obj13.style = items11;
              obj13.gradientAngle = num5;
              obj13.textStrokeWidth = tmp32;
              obj13.textStrokeColor = tmp31;
              obj13.children = userName;
              return closure_9(tmp7(4823).Text, obj13);
            }
            const mapped = displayNameStylesAccessibleColors.map((item) => closure_1_5(item));
            const found = mapped.filter(tmp7(1370).isNotNullish);
            let num6 = 45;
            if (effectId === tmp7(1391).DisplayNameEffect.PRISM) {
              num6 = 0;
            }
            bound = memo;
            items10 = items1;
            num5 = num6;
            tmp33 = found;
            if (effectId === tmp7(1391).DisplayNameEffect.PRISM) {
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
          tmp7Result11 = tmp7(1389);
        }
      }
      const obj14 = {};
      const merged5 = Object.assign(merged);
      const items13 = [merged.style, tmp12];
      obj14.style = items13;
      obj14.color = defaultColor;
      obj14.children = userName;
      return closure_9(tmp7(4823).Text, obj14);
    }
  }
  const obj15 = {};
  const merged6 = Object.assign(merged);
  obj15.color = defaultColor;
  obj15.children = userName;
  return closure_9(userName(4823).Text, obj15);
});
export const AVERAGE_FONT_WIDTH_RATIO = 0.6;
