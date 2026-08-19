// discord_app/modules/display_name_styles/native/UsernameWithEffects.tsx
import PlatformTypes from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import DisplayNameEffect from "../../../../discord_common/js/shared/shared-constants/DisplayNameEffect.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { MIN_PRISM_GRADIENT_WIDTH } from "../DisplayNameStylesConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = fn;
let c3 = importAllResult;
({ View: c4, processColor: c5, PixelRatio: closure_6, StyleSheet: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = { [fn(1935).DisplayNameEffect.NEON]: 1, [fn(1935).DisplayNameEffect.TOON]: 1.6, [fn(1935).DisplayNameEffect.POP]: 1.2 };
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
  obj1 = { neon: null, popContainer: null, popBackLayer: null, popFrontLayer: null, toon: null };
  const merged = Object.assign(obj);
  obj1[0] = obj;
  let tmp4Result = PlatformTypes;
  let num = 0;
  if (tmp4Result.isIOS()) {
    num = -sum3 / 2;
  }
  const obj2 = { position: "relative", top: num, left: null, marginRight: null };
  tmp4Result = PlatformTypes;
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
  const obj3 = { color, position: "absolute" };
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
  return obj1;
});
const memoResult = importAllResult.memo((userName) => {
  userName = userName.userName;
  let STATIC = userName.effectDisplayType;
  ({ userId, guildId } = userName);
  if (STATIC === undefined) {
    STATIC = userName(9453).EffectDisplayType.STATIC;
  }
  ({ defaultColor, containerStyle, ignoreDisabledStylesSetting, pendingDisplayNameStyles } = userName);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  const merged = Object.assign(userName, Object.create(null));
  let num;
  const tmp6 = num(4815)({ userId, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting });
  let obj = userName(9454);
  const isDisplayNameStylesFlywheelViewersEnabled = obj.useIsDisplayNameStylesFlywheelViewersEnabled("UsernameWithEffects");
  obj1 = userName(1933);
  const result = obj1.applyFlywheelViewingFallback(tmp6, isDisplayNameStylesFlywheelViewersEnabled);
  let obj2 = userName(4816);
  const displayNameStylesEnabled = obj2.useDisplayNameStylesEnabled({ location: "UsernameWithEffects" });
  let obj3 = userName(9455);
  const displayNameStylesFont = obj3.useDisplayNameStylesFont({ displayNameStyles: result, ignoreDisabledStylesSetting });
  let obj4 = userName(4097);
  const token = obj4.useToken(num(712).colors.BACKGROUND_BASE_LOW);
  let obj5 = userName(4097);
  const token1 = obj5.useToken(num(712).colors.WHITE);
  let obj6 = userName(9456);
  const displayNameStylesAccessibleColors = obj6.useDisplayNameStylesAccessibleColors({ displayNameStyles: result, backgroundColor: token });
  let first;
  if (displayNameStylesAccessibleColors.length > 0) {
    first = displayNameStylesAccessibleColors[0];
  }
  let effectId;
  if (result != null) {
    effectId = result.effectId;
  }
  if (effectId == null) {
    effectId = tmp7(1935).DisplayNameEffect.SOLID;
  }
  let colorVariants = null;
  if (null != first) {
    let tmp7Result = tmp7(1933);
    colorVariants = tmp7Result.generateColorVariants(first);
  }
  tmp7Result = tmp7(4739);
  const tmp17 = userName(4734).TextStyleSheet[tmp7Result.useTypographyVariantRemap(tmp7Result, merged.variant, false)];
  const flattenResult = closure_7.flatten(merged.style);
  num = undefined;
  if (flattenResult != null) {
    num = flattenResult.fontSize;
  }
  if (num == null) {
    let fontSize;
    if (tmp17 != null) {
      fontSize = tmp17.fontSize;
    }
    num = fontSize;
  }
  if (num == null) {
    num = 16;
  }
  let lineHeight;
  if (flattenResult != null) {
    lineHeight = flattenResult.lineHeight;
  }
  if (lineHeight == null) {
    let lineHeight1;
    if (tmp17 != null) {
      lineHeight1 = tmp17.lineHeight;
    }
    lineHeight = lineHeight1;
  }
  if (lineHeight == null) {
    lineHeight = 1.25 * num;
  }
  const items = [userName, num];
  const memo = importAllResult.useMemo(() => {
    const nodeText = userName(dependencyMap[18]).getNodeText(userName);
    num = undefined;
    if (nodeText != null) {
      num = nodeText.length;
    }
    if (num == null) {
      num = 10;
    }
    return num * num * 0.6;
  }, items);
  if (null != dependencyMap[effectId]) {
    const sum = tmp23 + 0.04 * num;
  }
  let str;
  if (colorVariants != null) {
    str = colorVariants.main;
  }
  if (str == null) {
    str = "";
  }
  const tmp25Result = callback2(str, num);
  if (displayNameStylesEnabled) {
    if (null != tmp6) {
      if (STATIC !== tmp7(9453).EffectDisplayType.PLAIN) {
        if (null != colorVariants) {
          const items1 = [merged.style, ];
          let tmp27 = null != displayNameStylesFont;
          if (tmp27) {
            obj = { fontFamily: null };
            obj[0] = displayNameStylesFont;
            tmp27 = obj;
          }
          items1[1] = tmp27;
          if (effectId === tmp7(1935).DisplayNameEffect.GUMMY) {
            const tmp4Result = num(9459);
            let str3 = tmp7(4100).getNodeText(userName);
            if (str3 == null) {
              str3 = "";
            }
            obj = { name: null, containerStyle: null, textStyle: null, textProps: null, colors: null };
            obj[0] = str3;
            obj[1] = containerStyle;
            obj[2] = items1;
            obj1 = {};
            const merged1 = Object.assign(merged);
            obj1.gradientColors = undefined;
            obj1.gradientLength = memo;
            obj1.gradientMode = "clamp";
            obj1.gradientAngle = undefined;
            obj1.textStrokeWidth = undefined;
            obj1.textStrokeColor = undefined;
            obj[3] = obj1;
            obj[4] = displayNameStylesAccessibleColors;
            return callback2(tmp4Result, obj);
          } else {
            if (tmp7(1935).DisplayNameEffect.GRADIENT !== effectId) {
              if (tmp7(1935).DisplayNameEffect.PRISM !== effectId) {
                if (tmp7(1935).DisplayNameEffect.NEON === effectId) {
                  let neonStroke;
                  if (colorVariants != null) {
                    neonStroke = colorVariants.neonStroke;
                  }
                  const tmp51Result = callback(neonStroke);
                  let tmp54;
                  if (null != tmp51Result) {
                    tmp54 = tmp51Result;
                  }
                  const items2 = [items1, tmp25Result.neon];
                  let tmp29 = tmp54;
                  let bound = memo;
                  let items9 = items2;
                  let tmp30 = sum;
                } else if (tmp7(1935).DisplayNameEffect.POP === effectId) {
                  let dark2;
                  if (colorVariants != null) {
                    dark2 = colorVariants.dark2;
                  }
                  let tmp35Result = callback(dark2);
                  let main;
                  if (colorVariants != null) {
                    main = colorVariants.main;
                  }
                  tmp35Result = callback(main);
                  bound = memo;
                  items9 = items1;
                  if (null != colorVariants) {
                    obj2 = { style: null, children: null };
                    const items3 = [tmp25Result.popContainer, containerStyle];
                    obj2[0] = items3;
                    obj3 = {};
                    const merged2 = Object.assign(merged);
                    obj3.textStrokeWidth = sum;
                    let tmp46;
                    if (null != tmp35Result) {
                      tmp46 = tmp35Result;
                    }
                    obj3.textStrokeColor = tmp46;
                    const items4 = [items1, tmp25Result.popBackLayer];
                    obj3.style = items4;
                    obj3.children = userName;
                    const items5 = [callback2(tmp7(4734).Text, obj3), ];
                    obj4 = {};
                    const merged3 = Object.assign(merged);
                    obj4.textStrokeWidth = sum;
                    let tmp50;
                    if (null != tmp35Result) {
                      tmp50 = tmp35Result;
                    }
                    obj4.textStrokeColor = tmp50;
                    const items6 = [items1, tmp25Result.popFrontLayer];
                    obj4.style = items6;
                    obj4.children = userName;
                    items5[1] = callback2(tmp7(4734).Text, obj4);
                    obj2[1] = items5;
                    return callback(closure_4, obj2);
                  }
                } else if (tmp7(1935).DisplayNameEffect.TOON === effectId) {
                  const items7 = [items1, tmp25Result.toon];
                  const items8 = [callback(token1), callback(colorVariants.light2), callback(colorVariants.light1), callback(colorVariants.main)];
                  const tmp33 = callback(colorVariants.toonStroke);
                  let tmp34;
                  if (null != tmp33) {
                    tmp34 = tmp33;
                  }
                  let num4 = 90;
                  tmp29 = tmp34;
                  bound = lineHeight;
                  items9 = items7;
                  tmp30 = sum;
                  let tmp31 = items8;
                } else {
                  const SOLID = tmp7(1935).DisplayNameEffect.SOLID;
                  items9 = [items1, ];
                  obj5 = { color: null };
                  obj5[0] = first;
                  items9[1] = obj5;
                  bound = memo;
                }
              }
              obj6 = {};
              const merged4 = Object.assign(merged);
              obj6.gradientColors = tmp31;
              obj6.gradientLength = bound;
              obj6.gradientMode = "clamp";
              const items10 = [items9];
              obj6.style = items10;
              obj6.gradientAngle = num4;
              obj6.textStrokeWidth = tmp30;
              obj6.textStrokeColor = tmp29;
              obj6.children = userName;
              return callback2(tmp7(4734).Text, obj6);
            }
            const mapped = displayNameStylesAccessibleColors.map((item, index) => callback(item));
            const found = mapped.filter(tmp7(1370).isNotNullish);
            let num5 = 45;
            if (effectId === tmp7(1935).DisplayNameEffect.PRISM) {
              num5 = 0;
            }
            bound = memo;
            items9 = items1;
            num4 = num5;
            tmp31 = found;
            if (effectId === tmp7(1935).DisplayNameEffect.PRISM) {
              let tmp55 = found;
              if (found.length > 0) {
                const items11 = [];
                items11[HermesBuiltin.arraySpread(found, 0)] = found[0];
                tmp55 = items11;
              }
              const _Math = Math;
              bound = Math.max(memo, MIN_PRISM_GRADIENT_WIDTH);
              tmp31 = tmp55;
              items9 = items1;
              num4 = num5;
            }
          }
        }
      }
      const obj7 = {};
      const merged5 = Object.assign(merged);
      const items12 = [merged.style, ];
      let tmp73 = null != displayNameStylesFont;
      if (tmp73) {
        const obj8 = { fontFamily: null, lineHeight: "a" };
        obj8[0] = displayNameStylesFont;
        tmp73 = obj8;
      }
      items12[1] = tmp73;
      obj7.style = items12;
      obj7.color = defaultColor;
      obj7.children = userName;
      return callback2(tmp7(4734).Text, obj7);
    }
  }
  const obj9 = {};
  const merged6 = Object.assign(merged);
  obj9.color = defaultColor;
  obj9.children = userName;
  return callback2(userName(4734).Text, obj9);
});
let result = require("obj132").fileFinishedImporting("modules/display_name_styles/native/UsernameWithEffects.tsx");

export default memoResult;
export const AVERAGE_FONT_WIDTH_RATIO = 0.6;