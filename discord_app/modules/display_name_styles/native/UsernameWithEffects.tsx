// discord_app/modules/display_name_styles/native/UsernameWithEffects.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import DisplayNameEffect from "../../../../discord_common/js/shared/shared-constants/DisplayNameEffect.tsx";
import shared_getNodeText from "../../../design/utils/shared/getNodeText.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({
  View: closure_4,
  processColor: hasOwnProperty,
  PixelRatio: metroRequire,
  StyleSheet: closure_7,
} = get_ActivityIndicator);
const MIN_PRISM_GRADIENT_WIDTH = fn(1402).MIN_PRISM_GRADIENT_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const dependencyMap = {
  [fn(1403).DisplayNameEffect.NEON]: 1,
  [fn(1403).DisplayNameEffect.TOON]: 1.6,
  [fn(1403).DisplayNameEffect.POP]: 1.2,
};
const createStyles = fn(5009);
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

export default noop.memo(function UsernameWithEffects(userName) {
  userName = userName.userName;
  let STATIC = userName.effectDisplayType;
  ({ userId, guildId } = userName);
  if (STATIC === undefined) {
    STATIC = userName(10753).EffectDisplayType.STATIC;
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
  const tmp6 = num2(6433)({ userId, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting });
  const displayNameStylesEnabled = userName(6434).useDisplayNameStylesEnabled({ location: "UsernameWithEffects" });
  const obj = userName(6434);
  const displayNameStylesFont = userName(9271).useDisplayNameStylesFont({
    displayNameStyles: tmp6,
    ignoreDisabledStylesSetting,
  });
  let tmp10;
  if (null != displayNameStylesFont) {
    const obj3 = { fontFamily: displayNameStylesFont, lineHeight: "Array" };
    tmp10 = obj3;
  }
  let num = merged.lineClamp;
  if (num == null) {
    num = 1;
  }
  let tmp11 = tmp10;
  if (num <= 1) {
    let tmp12;
    if (null != displayNameStylesFont) {
      const obj4 = { fontFamily: displayNameStylesFont };
      tmp12 = obj4;
    }
    tmp11 = tmp12;
  }
  const obj2 = userName(9271);
  const token = userName(5591).useToken(tmp4(575).colors.BACKGROUND_BASE_LOW);
  const tmp7Result = userName(5591);
  const token1 = userName(5591).useToken(tmp4(575).colors.WHITE);
  const tmp7Result7 = userName(5591);
  const displayNameStylesAccessibleColors = userName(10754).useDisplayNameStylesAccessibleColors({
    displayNameStyles: tmp6,
    backgroundColor: token,
  });
  let first;
  if (displayNameStylesAccessibleColors.length > 0) {
    first = displayNameStylesAccessibleColors[0];
  }
  let effectId;
  if (tmp6 != null) {
    effectId = tmp6.effectId;
  }
  if (effectId == null) {
    effectId = tmp7(1403).DisplayNameEffect.SOLID;
  }
  let colorVariants = null;
  if (null != first) {
    colorVariants = tmp7(1401).generateColorVariants(first);
    const tmp7Result9 = tmp7(1401);
  }
  const tmp7Result10 = userName(5624);
  const tmp18 =
    userName(5619).TextStyleSheet[tmp7Result10.useTypographyVariantRemap(tmp7Result10, merged.variant, false)];
  const flattenResult = closure_7.flatten(merged.style);
  num2 = undefined;
  if (flattenResult != null) {
    num2 = flattenResult.fontSize;
  }
  if (num2 == null) {
    let fontSize;
    if (tmp18 != null) {
      fontSize = tmp18.fontSize;
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
    if (tmp18 != null) {
      lineHeight1 = tmp18.lineHeight;
    }
    lineHeight = lineHeight1;
  }
  if (lineHeight == null) {
    lineHeight = 1.25 * num2;
  }
  const items = [userName, num2];
  const memo = noop.useMemo(() => {
    const nodeText = shared_getNodeText.getNodeText(userName);
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
    const sum = tmp24 + 0.04 * num2;
  }
  let str;
  if (colorVariants != null) {
    str = colorVariants.main;
  }
  if (str == null) {
    str = "";
  }
  const tmp26Result = closure_12(str, num2);
  if (displayNameStylesEnabled) {
    if (null != tmp6) {
      if (STATIC !== tmp7(10753).EffectDisplayType.PLAIN) {
        if (null != colorVariants) {
          const items1 = [merged.style, tmp11];
          if (tmp7Result11.doesEffectImpactLayout(effectId)) {
            const layoutImpact = tmp26Result.layoutImpact;
          }
          if (effectId === tmp7(1403).DisplayNameEffect.GUMMY) {
            const tmp4Result = tmp4(10757);
            let str3 = tmp7(5183).getNodeText(userName);
            if (str3 == null) {
              str3 = "";
            }
            const obj5 = { name: str3, containerStyle: null, textStyle: null, textProps: null, colors: null };
            const items2 = [layoutImpact, containerStyle];
            obj5.containerStyle = items2;
            obj5.textStyle = items1;
            const obj6 = {};
            const merged1 = Object.assign(merged);
            obj6.gradientColors = undefined;
            obj6.gradientLength = memo;
            obj6.gradientMode = "clamp";
            obj6.gradientAngle = undefined;
            obj6.textStrokeWidth = undefined;
            obj6.textStrokeColor = undefined;
            obj5.textProps = obj6;
            obj5.colors = displayNameStylesAccessibleColors;
            return closure_9(tmp4Result, obj5);
          } else {
            if (tmp7(1403).DisplayNameEffect.GRADIENT !== effectId) {
              if (tmp7(1403).DisplayNameEffect.PRISM !== effectId) {
                if (tmp7(1403).DisplayNameEffect.NEON === effectId) {
                  let neonStroke;
                  if (colorVariants != null) {
                    neonStroke = colorVariants.neonStroke;
                  }
                  const tmp51Result = closure_5(neonStroke);
                  let tmp54;
                  if (null != tmp51Result) {
                    tmp54 = tmp51Result;
                  }
                  const items3 = [items1, tmp26Result.neon, layoutImpact];
                  let tmp29 = tmp54;
                  let bound = memo;
                  let items10 = items3;
                  let tmp30 = sum;
                } else if (tmp7(1403).DisplayNameEffect.POP === effectId) {
                  let dark2;
                  if (colorVariants != null) {
                    dark2 = colorVariants.dark2;
                  }
                  const tmp35Result = closure_5(dark2);
                  let main;
                  if (colorVariants != null) {
                    main = colorVariants.main;
                  }
                  const tmp35Result2 = closure_5(main);
                  bound = memo;
                  items10 = items1;
                  if (null != colorVariants) {
                    const obj7 = { style: null, children: null };
                    const items4 = [tmp26Result.popContainer, layoutImpact, containerStyle];
                    obj7.style = items4;
                    const obj8 = {};
                    const merged2 = Object.assign(merged);
                    obj8.textStrokeWidth = sum;
                    let tmp46;
                    if (null != tmp35Result2) {
                      tmp46 = tmp35Result2;
                    }
                    obj8.textStrokeColor = tmp46;
                    const items5 = [items1, tmp26Result.popBackLayer];
                    obj8.style = items5;
                    obj8.children = userName;
                    const items6 = [closure_9(tmp7(5619).Text, obj8)];
                    const obj9 = {};
                    const merged3 = Object.assign(merged);
                    obj9.textStrokeWidth = sum;
                    let tmp50;
                    if (null != tmp35Result) {
                      tmp50 = tmp35Result;
                    }
                    obj9.textStrokeColor = tmp50;
                    const items7 = [items1, tmp26Result.popFrontLayer];
                    obj9.style = items7;
                    obj9.children = userName;
                    items6[1] = closure_9(tmp7(5619).Text, obj9);
                    obj7.children = items6;
                    return closure_10(closure_4, obj7);
                  }
                } else if (tmp7(1403).DisplayNameEffect.TOON === effectId) {
                  const items8 = [items1, tmp26Result.toon, layoutImpact];
                  const items9 = [
                    closure_5(token1),
                    closure_5(colorVariants.light2),
                    closure_5(colorVariants.light1),
                    closure_5(colorVariants.main),
                  ];
                  const tmp33 = closure_5(colorVariants.toonStroke);
                  let tmp34;
                  if (null != tmp33) {
                    tmp34 = tmp33;
                  }
                  let num5 = 90;
                  tmp29 = tmp34;
                  bound = lineHeight;
                  items10 = items8;
                  tmp30 = sum;
                  let tmp31 = items9;
                } else {
                  const SOLID = tmp7(1403).DisplayNameEffect.SOLID;
                  items10 = [items1];
                  const obj10 = { color: first };
                  items10[1] = obj10;
                  bound = memo;
                }
              }
              const obj11 = {};
              const merged4 = Object.assign(merged);
              obj11.gradientColors = tmp31;
              obj11.gradientLength = bound;
              obj11.gradientMode = "clamp";
              obj11.style = items10;
              obj11.gradientAngle = num5;
              obj11.textStrokeWidth = tmp30;
              obj11.textStrokeColor = tmp29;
              obj11.children = userName;
              return closure_9(tmp7(5619).Text, obj11);
            }
            const mapped = displayNameStylesAccessibleColors.map((item) => closure_1_5(item));
            const found = mapped.filter(tmp7(1380).isNotNullish);
            let num6 = 45;
            if (effectId === tmp7(1403).DisplayNameEffect.PRISM) {
              num6 = 0;
            }
            bound = memo;
            items10 = items1;
            num5 = num6;
            tmp31 = found;
            if (effectId === tmp7(1403).DisplayNameEffect.PRISM) {
              let tmp55 = found;
              if (found.length > 0) {
                const items11 = [];
                items11[HermesBuiltin.arraySpread(found, 0)] = found[0];
                tmp55 = items11;
              }
              const _Math = Math;
              bound = Math.max(memo, MIN_PRISM_GRADIENT_WIDTH);
              tmp31 = tmp55;
              items10 = items1;
              num5 = num6;
            }
          }
          tmp7Result11 = tmp7(1401);
        }
      }
      const obj12 = {};
      const merged5 = Object.assign(merged);
      const items12 = [merged.style, tmp10];
      obj12.style = items12;
      obj12.color = defaultColor;
      obj12.children = userName;
      return closure_9(tmp7(5619).Text, obj12);
    }
  }
  const obj13 = {};
  const merged6 = Object.assign(merged);
  obj13.color = defaultColor;
  obj13.children = userName;
  return closure_9(userName(5619).Text, obj13);
});
export const AVERAGE_FONT_WIDTH_RATIO = 0.6;
