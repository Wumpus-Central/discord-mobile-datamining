// discord_app/design/components/Text/native/Text.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import NativeText2 from "../../../../../_runtime/00299_NativeText.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import useManaTextMigrationHighlight2 from "useManaTextMigrationHighlight.tsx";
import PlainTextExperimentContext from "PlainTextExperimentContext.tsx";
import useTypographyVariantRemap from "../../../../../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx";
import PlainTextEligibility from "PlainTextEligibility.tsx";
import _modDef4732 from "../../../../../_runtime/metro/04732__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";

require = fn;
let closure_3 = [
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
get_ActivityIndicator = fn(17);
const Text = get_ActivityIndicator.Text;
let closure_7 = get_ActivityIndicator.unstable_TextAncestorContext;
const Fonts = fn(1085).Fonts;
const jsx = fn(21).jsx;
let closure_9 = ReanimatedRexport.createAnimatedComponent(Text);
let items = [{ includeFontPadding: true }];
let closure_11 = [];
const keys = Object.keys(nativeDefault.colors);
let closure_12 = Object.fromEntries(
  keys.map((item) => {
    items = [_modDef12.kebabCase(item), item];
    return items;
  }),
);
({
  PRIMARY_NORMAL: obj3[400],
  PRIMARY_MEDIUM: obj3[500],
  PRIMARY_SEMIBOLD: obj3[600],
  PRIMARY_BOLD: obj3[700],
  PRIMARY_EXTRABOLD: obj3[800],
} = Fonts);
let obj2 = { 800: null };
obj2[800] = Fonts.GINTO_NORD_EXTRA_BOLD;
let obj4 = { 700: null };
obj4[700] = Fonts.GINTO_DISCORD_NORD_BOLD;
({ CODE_NORMAL: obj6[400], CODE_BOLD: obj6[700] } = Fonts);
let obj7 = { 800: null };
obj7[800] = Fonts.GINTO_NORD_EXTRA_BOLD_ITALIC;
({ GINTO_DISCORD_NORD_BOLD_ITALIC: obj8[700], GINTO_DISCORD_NORD_BLACK_ITALIC: obj8[900] } = Fonts);
const dependencyMap = {
  headline: obj2,
  nitro: obj4,
  primary: { 400: null, 500: null, 600: null, 700: null, 800: null },
  code: { 400: null, 700: null },
};
let closure_14 = { headline: obj7, nitro: { 700: null, 900: null } };
const TextVariantsFlat = fn(4719).TextVariantsFlat;
const mapped = TextVariantsFlat.map((name) => {
  let tmp = null;
  if ("code" !== name.name) {
    items = [name.name];
    const obj2 = { fontSize: null, lineHeight: null, textTransform: null };
    ({ size: obj4.fontSize, lineHeight: obj4.lineHeight } = name);
    let str = "none";
    if (name.uppercase) {
      str = "uppercase";
    }
    obj2.textTransform = str;
    ({ fontStack, weight } = name);
    const str1 = weight.toString();
    if (name.italic) {
      let tmp6;
      if (closure_14[fontStack] != null) {
        tmp6 = tmp5[str1];
      }
      if (null != tmp6) {
        const obj3 = { fontFamily: tmp6, fontStyle: "normal" };
      } else {
        const obj7 = { fontFamily: dependencyMap[fontStack][str1], fontStyle: "italic" };
      }
    } else {
      const obj = { fontFamily: dependencyMap[fontStack][str1] };
      const merged = Object.assign(obj);
      obj2.includeFontPadding = false;
      let result;
      if ("letterSpacing" in name) {
        result = name.letterSpacing / 10;
      }
      obj2.letterSpacing = result;
      items[1] = obj2;
      tmp = items;
    }
  }
  return tmp;
});
const fromEntriesResult = Object.fromEntries(mapped.filter(Boolean));
const useManaTextMigrationHighlight = fn(4720);
let result = useManaTextMigrationHighlight.withManaTextMigrationHighlight(fromEntriesResult);
const createStyles = fn(4722);
let closure_16 = createStyles.createStyles((arg0, arg1) => {
  let tmp;
  if ("none" !== arg0) {
    tmp = nativeDefault.colors[closure_12[arg0]];
  }
  const text = { color: tmp, fontVariant: null };
  items = undefined;
  if (arg1) {
    items = ["tabular-nums"];
  }
  text.fontVariant = items;
  return { text };
});
const forwardRefResult = noop.forwardRef((animated, ref) => {
  ({ color, style, children, lineClamp, includeFontPadding } = animated);
  if (includeFontPadding === undefined) {
    includeFontPadding = false;
  }
  ({ ellipsizeMode, tabularNumbers } = animated);
  if (tabularNumbers === undefined) {
    tabularNumbers = false;
  }
  let flag = animated.animated;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = animated.experimental_useNativeText;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const merged = Object.assign(
    animated,
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
  const tmp2Result = closure_16(color, tabularNumbers);
  const plainTextExperimentEnabled = PlainTextExperimentContext.usePlainTextExperimentEnabled();
  const context = noop.useContext(closure_7);
  const typographyVariantRemap = useTypographyVariantRemap.useTypographyVariantRemap(animated.variant, false);
  items = [fromEntriesResult[typographyVariantRemap], tmp2Result.text, ,];
  const manaTextMigrationHighlight = useManaTextMigrationHighlight2.useManaTextMigrationHighlight(
    fromEntriesResult[typographyVariantRemap],
    style,
  );
  const arraySpreadResult = HermesBuiltin.arraySpread(includeFontPadding ? items : closure_11, 2);
  items[arraySpreadResult] = style;
  items[arraySpreadResult + 1] = manaTextMigrationHighlight;
  const tmp10 = includeFontPadding ? items : closure_11;
  const element = {
    animated: flag,
    children,
    enabled: plainTextExperimentEnabled,
    experimentalUseNativeText: flag2,
    hasRef: null != ref,
    hasTextAncestor: context,
    isIOS: null,
    props: null,
    style: null,
  };
  const tmp4Result = PlainTextEligibility;
  element.isIOS = utils_PlatformUtils.isIOS();
  element.props = merged;
  element.style = items;
  const plainTextEligibility = tmp4Result.getPlainTextEligibility(element);
  const tmp4Result3 = utils_PlatformUtils;
  if (tmp4Result4.isPlainTextEligible(plainTextEligibility)) {
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
    const obj4 = {
      text: children,
      color: color2,
      fontSize,
      fontFamily,
      fontWeight: null,
      fontStyle: null,
      textAlign: null,
      textAlignVertical: null,
      textDecorationLine: null,
      lineHeight: null,
      letterSpacing: null,
      hasLetterSpacing: null,
      style: null,
      numberOfLines: null,
      ellipsizeMode: null,
      allowFontScaling: true,
    };
    let StringResult;
    const tmp19 = _objectWithoutProperties(plainTextEligibility, closure_3);
    if (null != fontWeight) {
      const _String = String;
      StringResult = String(fontWeight);
    }
    obj4.fontWeight = StringResult;
    obj4.fontStyle = fontStyle;
    obj4.textAlign = textAlign;
    if (null != verticalAlign) {
      let str2 = "center";
      if ("middle" !== verticalAlign) {
        str2 = verticalAlign;
      }
      textAlignVertical = str2;
    }
    obj4.textAlignVertical = textAlignVertical;
    obj4.textDecorationLine = textDecorationLine;
    obj4.lineHeight = lineHeight;
    obj4.letterSpacing = letterSpacing;
    obj4.hasLetterSpacing = undefined !== letterSpacing;
    obj4.style = tmp19;
    obj4.numberOfLines = lineClamp;
    if (ellipsizeMode == null) {
      ellipsizeMode = "tail";
    }
    obj4.ellipsizeMode = ellipsizeMode;
    const merged1 = Object.assign(merged);
    return jsx(_modDef4732, {
      text: children,
      color: color2,
      fontSize,
      fontFamily,
      fontWeight: null,
      fontStyle: null,
      textAlign: null,
      textAlignVertical: null,
      textDecorationLine: null,
      lineHeight: null,
      letterSpacing: null,
      hasLetterSpacing: null,
      style: null,
      numberOfLines: null,
      ellipsizeMode: null,
      allowFontScaling: true,
    });
  } else {
    if (flag2) {
      let NativeText = NativeText2.NativeText;
    } else {
      NativeText = flag ? closure_9 : Text;
    }
    const obj5 = { style: items, numberOfLines: lineClamp, ellipsizeMode: null, allowFontScaling: true, ref: null };
    let str = ellipsizeMode;
    if (ellipsizeMode == null) {
      str = "tail";
    }
    obj5.ellipsizeMode = str;
    obj5.ref = ref;
    const merged2 = Object.assign(merged);
    obj5.children = children;
    return <NativeText style={items} numberOfLines={lineClamp} ellipsizeMode={null} allowFontScaling ref={null} />;
  }
  tmp4Result4 = PlainTextEligibility;
});
const size = fn(2);
const result1 = size.fileFinishedImporting("design/components/Text/native/Text.tsx");

export const TextStyleSheet = result;
export const Text = forwardRefResult;
export const Heading = noop.forwardRef((variant, ref) => {
  const obj2 = { ref };
  const typographyVariantRemap = useTypographyVariantRemap.useTypographyVariantRemap(variant.variant, true);
  const merged = Object.assign(variant);
  obj2.accessibilityRole = "header";
  obj2.variant = typographyVariantRemap;
  return <forwardRefResult ref={ref} />;
});
