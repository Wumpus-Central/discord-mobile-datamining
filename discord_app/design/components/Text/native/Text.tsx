// discord_app/design/components/Text/native/Text.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import NativeText2 from "../../../../../_runtime/00299_NativeText.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import TextVariants from "../../../../../discord_common/js/packages/tokens/typography/generated/TextVariants.tsx";
import PlainTextExperimentContext from "PlainTextExperimentContext.tsx";
import useTypographyVariantRemap from "../../../../../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx";
import PlainTextEligibility from "PlainTextEligibility.tsx";
import _modDef4900 from "../../../../../_runtime/metro/04900__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import useManaTextMigrationHighlight from "useManaTextMigrationHighlight.tsx";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let variant;

let closure_3 = [
  "variant",
  "color",
  "style",
  "children",
  "lineClamp",
  "includeFontPadding",
  "ellipsizeMode",
  "tabularNumbers",
  "animated",
  "experimental_useNativeText",
];
let closure_4 = [
  "color",
  "fontSize",
  "fontFamily",
  "fontWeight",
  "fontStyle",
  "textAlign",
  "textAlignVertical",
  "verticalAlign",
  "textDecorationLine",
  "lineHeight",
  "letterSpacing",
];
let closure_5 = [
  "color",
  "fontSize",
  "fontFamily",
  "fontWeight",
  "fontStyle",
  "textAlign",
  "textAlignVertical",
  "verticalAlign",
  "textDecorationLine",
  "lineHeight",
  "letterSpacing",
];
const Text = react_native.Text;
let closure_9 = react_native.unstable_TextAncestorContext;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let closure_11 = ReanimatedRexport.createAnimatedComponent(Text);
let items = [{ includeFontPadding: true }];
let closure_13 = [];
const keys = Object.keys(nativeDefault.colors);
let closure_14 = fromEntries(
  keys.map((item) => {
    items = [,];
    const obj = _modDef12;
    items[0] = obj.kebabCase(item);
    items[1] = item;
    return items;
  }),
);
let obj = { 400: null, 500: null, 600: null, 700: null, 800: null };
({
  PRIMARY_NORMAL: obj2[400],
  PRIMARY_MEDIUM: obj2[500],
  PRIMARY_SEMIBOLD: obj2[600],
  PRIMARY_BOLD: obj2[700],
  PRIMARY_EXTRABOLD: obj2[800],
} = Fonts);
let obj3 = { 800: null };
obj3[800] = Fonts.GINTO_NORD_EXTRA_BOLD;
const obj4 = { 700: null };
obj4[700] = Fonts.GINTO_DISCORD_NORD_BOLD;
const obj6 = { 400: null, 700: null };
({ CODE_NORMAL: obj5[400], CODE_BOLD: obj5[700] } = Fonts);
const obj8 = { 800: null };
obj8[800] = Fonts.GINTO_NORD_EXTRA_BOLD_ITALIC;
const obj9 = { 700: null, 900: null };
({ GINTO_DISCORD_NORD_BOLD_ITALIC: obj7[700], GINTO_DISCORD_NORD_BLACK_ITALIC: obj7[900] } = Fonts);
let closure_15 = { headline: obj3, nitro: obj4, primary: obj, code: obj6 };
let closure_16 = { headline: obj8, nitro: obj9 };
const fromEntries2 = Object.fromEntries;
const TextVariantsFlat = TextVariants.TextVariantsFlat;
const mapped = TextVariantsFlat.map((name) => {
  let fontStack;
  let result;
  let str;
  let weight;
  let tmp = null;
  if ("code" !== name.name) {
    let obj;
    items = [name.name];
    const obj2 = {
      fontSize: null,
      lineHeight: null,
      textTransform: str,
      includeFontPadding: false,
      letterSpacing: result,
    };
    ({ size: obj4.fontSize, lineHeight: obj4.lineHeight } = name);
    str = "none";
    if (name.uppercase) {
      str = "uppercase";
    }
    ({ fontStack, weight } = name);
    const str1 = weight.toString();
    if (name.italic) {
      let obj7;
      let tmp6;
      if (closure_16[fontStack] != null) {
        tmp6 = tmp5[str1];
      }
      if (null != tmp6) {
        obj7 = { fontFamily: tmp6, fontStyle: "normal" };
        const obj3 = { fontFamily: tmp6, fontStyle: "normal" };
      } else {
        obj7 = { fontFamily: closure_15[fontStack][str1], fontStyle: "italic" };
      }
      obj = obj7;
    } else {
      obj = { fontFamily: closure_15[fontStack][str1] };
    }
    const merged = Object.assign(obj);
    result = undefined;
    if ("letterSpacing" in name) {
      result = name.letterSpacing / 10;
    }
    items[1] = obj2;
    tmp = items;
  }
  return tmp;
});
const fromEntries2Result = fromEntries2(mapped.filter(Boolean));
let result = useManaTextMigrationHighlight.withManaTextMigrationHighlight(fromEntries2Result);
let closure_18 = createStyles.createStyles((arg0, arg1) => {
  let tmp;
  if ("none" !== arg0) {
    tmp = nativeDefault.colors[closure_14[arg0]];
  }
  const text = { color: tmp, fontVariant: items };
  items = undefined;
  if (arg1) {
    items = ["tabular-nums"];
  }
  return { text };
});
const forwardRef = react.forwardRef;
let ReactCompilerGating = ReactCompilerGating_mod;
const forwardRef2 = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (variant, ref) => {
        let animated;
        let children;
        let color;
        let color2;
        let ellipsizeMode;
        let experimental_useNativeText;
        let fontFamily;
        let fontSize;
        let fontStyle;
        let fontWeight;
        let includeFontPadding;
        let letterSpacing;
        let lineClamp;
        let lineHeight;
        let style;
        let tabularNumbers;
        let textAlign;
        let textAlignVertical;
        let textDecorationLine;
        let tmp10Result3;
        let verticalAlign;
        ({
          color,
          style,
          children,
          lineClamp,
          includeFontPadding,
          ellipsizeMode,
          tabularNumbers,
          animated,
          experimental_useNativeText,
        } = variant);
        variant = variant.variant;
        const tmp3 = _objectWithoutProperties(variant, closure_3);
        const tmp4 = undefined !== includeFontPadding && includeFontPadding;
        if (color == null) {
          color = "text-default";
        }
        const tmp8 = undefined !== tabularNumbers && tabularNumbers;
        const tmp7Result = closure_18(color, tmp8);
        const obj = PlainTextExperimentContext;
        const plainTextExperimentEnabled = obj.usePlainTextExperimentEnabled();
        const context = react.useContext(closure_9);
        const obj2 = useTypographyVariantRemap;
        const typographyVariantRemap = obj2.useTypographyVariantRemap(variant, false);
        items = [fromEntries2Result[typographyVariantRemap], tmp7Result.text, ,];
        const obj3 = useManaTextMigrationHighlight;
        const tmp16 = tmp4 ? items : closure_13;
        const manaTextMigrationHighlight = obj3.useManaTextMigrationHighlight(
          fromEntries2Result[typographyVariantRemap],
          style,
        );
        const arraySpreadResult = HermesBuiltin.arraySpread(items, tmp16, 2);
        items[arraySpreadResult] = style;
        items[arraySpreadResult + 1] = manaTextMigrationHighlight;
        const element = {
          animated: tmp5,
          children,
          enabled: plainTextExperimentEnabled,
          experimentalUseNativeText: tmp6,
          hasRef: null != ref,
          hasTextAncestor: context,
          isIOS: tmp10Result3.isIOS(),
          props: tmp3,
          style: items,
        };
        const getPlainTextEligibility = PlainTextEligibility.getPlainTextEligibility;
        PlainTextEligibility;
        tmp10Result3 = utils_PlatformUtils;
        const plainTextEligibility = getPlainTextEligibility(element);
        const tmp10Result4 = PlainTextEligibility;
        if (tmp10Result4.isPlainTextEligible(plainTextEligibility)) {
          ({ fontWeight, textAlignVertical, verticalAlign, letterSpacing } = plainTextEligibility);
          ({
            color: color2,
            fontSize,
            fontFamily,
            fontStyle,
            textAlign,
            textDecorationLine,
            lineHeight,
          } = plainTextEligibility);
          let StringResult;
          const tmp2Result = _objectWithoutProperties(plainTextEligibility, closure_4);
          _modDef4900;
          if (null != fontWeight) {
            const _String = String;
            StringResult = String(fontWeight);
          }
          if (null != verticalAlign) {
            let str2 = "center";
            if ("middle" !== verticalAlign) {
              str2 = verticalAlign;
            }
            textAlignVertical = str2;
          }
          if (ellipsizeMode == null) {
            ellipsizeMode = "tail";
          }
          const merged = Object.assign(tmp3);
          return (
            <tmp28
              text={children}
              color={color2}
              fontSize={fontSize}
              fontFamily={fontFamily}
              fontWeight={StringResult}
              fontStyle={fontStyle}
              textAlign={textAlign}
              textAlignVertical={textAlignVertical}
              textDecorationLine={textDecorationLine}
              lineHeight={lineHeight}
              letterSpacing={letterSpacing}
              hasLetterSpacing={undefined !== letterSpacing}
              style={tmp2Result}
              numberOfLines={lineClamp}
              ellipsizeMode={ellipsizeMode}
              allowFontScaling
            />
          );
        } else {
          if (undefined !== experimental_useNativeText && experimental_useNativeText) {
            let NativeText = NativeText2.NativeText;
          } else {
            NativeText = tmp5 ? closure_11 : Text;
          }
          let str = ellipsizeMode;
          if (ellipsizeMode == null) {
            str = "tail";
          }
          const merged1 = Object.assign(tmp3);
          return (
            <NativeText style={items} numberOfLines={lineClamp} ellipsizeMode={str} allowFontScaling ref={ref}>
              {children}
            </NativeText>
          );
        }
      }
    : (variant, ref) => {
        let children;
        let color;
        let color2;
        let ellipsizeMode;
        let fontFamily;
        let fontSize;
        let fontStyle;
        let fontWeight;
        let includeFontPadding;
        let letterSpacing;
        let lineClamp;
        let lineHeight;
        let style;
        let tabularNumbers;
        let textAlign;
        let textAlignVertical;
        let textDecorationLine;
        let tmp5Result3;
        let verticalAlign;
        ({ color, style, children, lineClamp, includeFontPadding } = variant);
        variant = variant.variant;
        if (includeFontPadding === undefined) {
          includeFontPadding = false;
        }
        ({ ellipsizeMode, tabularNumbers } = variant);
        if (tabularNumbers === undefined) {
          tabularNumbers = false;
        }
        let flag = variant.animated;
        if (flag === undefined) {
          flag = false;
        }
        let flag2 = variant.experimental_useNativeText;
        if (flag2 === undefined) {
          flag2 = false;
        }
        const merged = Object.assign(
          variant,
          Object.assign({
            variant: 0,
            color: 0,
            style: 0,
            children: 0,
            lineClamp: 0,
            includeFontPadding: 0,
            ellipsizeMode: 0,
            tabularNumbers: 0,
            animated: 0,
            experimental_useNativeText: 0,
          }),
        );
        if (color == null) {
          color = "text-default";
        }
        const tmp3Result = closure_18(color, tabularNumbers);
        const obj = PlainTextExperimentContext;
        const plainTextExperimentEnabled = obj.usePlainTextExperimentEnabled();
        const context = react.useContext(closure_9);
        const obj2 = useTypographyVariantRemap;
        const typographyVariantRemap = obj2.useTypographyVariantRemap(variant, false);
        items = [fromEntries2Result[typographyVariantRemap], tmp3Result.text, ,];
        const obj3 = useManaTextMigrationHighlight;
        const tmp11 = includeFontPadding ? items : closure_13;
        const manaTextMigrationHighlight = obj3.useManaTextMigrationHighlight(
          fromEntries2Result[typographyVariantRemap],
          style,
        );
        const arraySpreadResult = HermesBuiltin.arraySpread(items, tmp11, 2);
        items[arraySpreadResult] = style;
        items[arraySpreadResult + 1] = manaTextMigrationHighlight;
        const element = {
          animated: flag,
          children,
          enabled: plainTextExperimentEnabled,
          experimentalUseNativeText: flag2,
          hasRef: null != ref,
          hasTextAncestor: context,
          isIOS: tmp5Result3.isIOS(),
          props: merged,
          style: items,
        };
        const getPlainTextEligibility = PlainTextEligibility.getPlainTextEligibility;
        PlainTextEligibility;
        tmp5Result3 = utils_PlatformUtils;
        const plainTextEligibility = getPlainTextEligibility(element);
        const tmp5Result4 = PlainTextEligibility;
        if (tmp5Result4.isPlainTextEligible(plainTextEligibility)) {
          ({ fontWeight, textAlignVertical, verticalAlign, letterSpacing } = plainTextEligibility);
          ({
            color: color2,
            fontSize,
            fontFamily,
            fontStyle,
            textAlign,
            textDecorationLine,
            lineHeight,
          } = plainTextEligibility);
          let StringResult;
          const tmp21 = _objectWithoutProperties(plainTextEligibility, closure_5);
          _modDef4900;
          if (null != fontWeight) {
            const _String = String;
            StringResult = String(fontWeight);
          }
          if (null != verticalAlign) {
            let str2 = "center";
            if ("middle" !== verticalAlign) {
              str2 = verticalAlign;
            }
            textAlignVertical = str2;
          }
          if (ellipsizeMode == null) {
            ellipsizeMode = "tail";
          }
          const merged1 = Object.assign(merged);
          return (
            <tmp24
              text={children}
              color={color2}
              fontSize={fontSize}
              fontFamily={fontFamily}
              fontWeight={StringResult}
              fontStyle={fontStyle}
              textAlign={textAlign}
              textAlignVertical={textAlignVertical}
              textDecorationLine={textDecorationLine}
              lineHeight={lineHeight}
              letterSpacing={letterSpacing}
              hasLetterSpacing={undefined !== letterSpacing}
              style={tmp21}
              numberOfLines={lineClamp}
              ellipsizeMode={ellipsizeMode}
              allowFontScaling
            />
          );
        } else {
          if (flag2) {
            let NativeText = NativeText2.NativeText;
          } else {
            NativeText = flag ? closure_11 : Text;
          }
          let str = ellipsizeMode;
          if (ellipsizeMode == null) {
            str = "tail";
          }
          const merged2 = Object.assign(merged);
          return (
            <NativeText style={items} numberOfLines={lineClamp} ellipsizeMode={str} allowFontScaling ref={ref}>
              {children}
            </NativeText>
          );
        }
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRef2Result = forwardRef2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (variant, ref) => {
        const obj = react2;
        const cResult = obj.c(4);
        const obj2 = useTypographyVariantRemap;
        const typographyVariantRemap = obj2.useTypographyVariantRemap(variant.variant, true);
        if (cResult[0] === variant) {
          if (cResult[1] === ref) {
            let tmp3;
            if (cResult[2] === typographyVariantRemap) {
              tmp3 = cResult[3];
            }
            return tmp3;
          }
        }
        const merged = Object.assign(variant);
        const tmp5 = <forwardRefResult ref={ref} accessibilityRole="header" variant={typographyVariantRemap} />;
        cResult[0] = variant;
        cResult[1] = ref;
        cResult[2] = typographyVariantRemap;
        cResult[3] = tmp5;
        tmp3 = tmp5;
      }
    : (variant, ref) => {
        const obj = useTypographyVariantRemap;
        const typographyVariantRemap = obj.useTypographyVariantRemap(variant.variant, true);
        const merged = Object.assign(variant);
        return <forwardRefResult ref={ref} accessibilityRole="header" variant={typographyVariantRemap} />;
      },
);
const result1 = size.fileFinishedImporting("design/components/Text/native/Text.tsx");
const Text_export = forwardRefResult;

export const TextStyleSheet = result;
export { Text_export as Text };
export const Heading = forwardRef2Result;
