// === Module 4556: Text ===

// Module 4556 (Text)
import applyDefault from "apply" /* 12 */;
import ThemesDefault from "Themes" /* 576 */;
import useManaTextMigrationHighlight2 from "useManaTextMigrationHighlight" /* 4558 */;
import PlainTextExperimentProvider from "PlainTextExperimentProvider" /* 4565 */;
import useTypographyVariantRemap from "useTypographyVariantRemap" /* 4566 */;
import set from "set" /* 4569 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 4570 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { Fonts } from "sum" /* 1085 */;
import { jsx } from "jsxProd" /* 21 */;
import { TextVariantsFlat } from "TEXT_VARIANT" /* 4557 */;
import useManaTextMigrationHighlight from "useManaTextMigrationHighlight" /* 4558 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import importDefaultResult from "module_4296" /* 4296 */;

require = arg1;
let closure_3 = ["color", "fontSize", "fontFamily", "fontWeight", "fontStyle", "textAlign", "textAlignVertical", "verticalAlign", "textDecorationLine", "lineHeight", "letterSpacing"];
let c5 = importAllResult;
const Text = get_ActivityIndicator.Text;
let closure_7 = get_ActivityIndicator.unstable_TextAncestorContext;
let closure_9 = importDefaultResult.createAnimatedComponent(Text);
let items = [{ includeFontPadding: true }];
let closure_11 = [];
const keys = Object.keys(ThemesDefault.colors);
let closure_12 = Object.fromEntries(keys.map((arg0) => {
  items = [applyDefault.kebabCase(arg0), arg0];
  return items;
}));
let obj = { 400: null, 500: null, 600: null, 700: null, 800: null };
({ PRIMARY_NORMAL: obj3[400], PRIMARY_MEDIUM: obj3[500], PRIMARY_SEMIBOLD: obj3[600], PRIMARY_BOLD: obj3[700], PRIMARY_EXTRABOLD: obj3[800] } = Fonts);
obj = { 800: null };
obj[800] = Fonts.GINTO_NORD_EXTRA_BOLD;
let obj1 = { 700: null };
obj1[700] = Fonts.GINTO_DISCORD_NORD_BOLD;
({ CODE_NORMAL: obj6[400], CODE_BOLD: obj6[700] } = Fonts);
let obj3 = { 800: null };
obj3[800] = Fonts.GINTO_NORD_EXTRA_BOLD_ITALIC;
({ GINTO_DISCORD_NORD_BOLD_ITALIC: obj8[700], GINTO_DISCORD_NORD_BLACK_ITALIC: obj8[900] } = Fonts);
let closure_13 = { headline: obj, nitro: obj1, primary: obj, code: { 400: null, 700: null } };
let closure_14 = { headline: obj3, nitro: { 700: null, 900: null } };
const mapped = TextVariantsFlat.map((name) => {
  let tmp = null;
  if ("code" !== name.name) {
    items = [name.name, ];
    let obj = { fontSize: null, lineHeight: null, textTransform: null };
    ({ size: obj4[0], lineHeight: obj4[1] } = name);
    let str = "none";
    if (name.uppercase) {
      str = "uppercase";
    }
    obj[2] = str;
    ({ fontStack, weight } = name);
    str = weight.toString();
    if (name.italic) {
      let tmp6;
      if (table2[fontStack] != null) {
        tmp6 = tmp5[str];
      }
      if (null != tmp6) {
        obj = { fontFamily: null, fontStyle: "normal" };
        obj[0] = tmp6;
        obj1 = obj;
      } else {
        obj1 = { fontFamily: null, fontStyle: "italic" };
        obj1[0] = dependencyMap[fontStack][str];
      }
    } else {
      obj = { fontFamily: null };
      obj[0] = dependencyMap[fontStack][str];
      const merged = Object.assign(obj);
      obj.includeFontPadding = false;
      let result;
      if ("letterSpacing" in name) {
        result = name.letterSpacing / 10;
      }
      obj.letterSpacing = result;
      items[1] = obj;
      tmp = items;
    }
  }
  return tmp;
});
const fromEntriesResult = Object.fromEntries(mapped.filter(Boolean));
let result = useManaTextMigrationHighlight.withManaTextMigrationHighlight(fromEntriesResult);
let closure_16 = createCacheKey.createStyles((arg0, arg1) => {
  let tmp;
  if ("none" !== arg0) {
    tmp = ThemesDefault.colors[table[arg0]];
  }
  const text = { color: tmp, fontVariant: null };
  items = undefined;
  if (arg1) {
    items = ["tabular-nums"];
  }
  text[1] = items;
  return { text };
});
const forwardRefResult = importAllResult.forwardRef((animated) => {
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
  const merged = Object.assign(animated, Object.create(null));
  if (color == null) {
    color = "text-default";
  }
  let obj = PlainTextExperimentProvider;
  const plainTextExperimentEnabled = obj.usePlainTextExperimentEnabled();
  const context = importAllResult.useContext(closure_7);
  obj1 = useTypographyVariantRemap;
  const typographyVariantRemap = obj1.useTypographyVariantRemap(animated.variant, false);
  const tmp2 = closure_16;
  const tmp2Result = closure_16(color, tabularNumbers);
  items = [dependencyMap2[typographyVariantRemap], tmp2Result.text, , ];
  const manaTextMigrationHighlight = useManaTextMigrationHighlight2.useManaTextMigrationHighlight(dependencyMap2[typographyVariantRemap], style);
  const arraySpreadResult = HermesBuiltin.arraySpread(includeFontPadding ? items : closure_11, 2);
  items[arraySpreadResult] = style;
  items[arraySpreadResult + 1] = manaTextMigrationHighlight;
  let tmp4Result = tmp4(4569);
  obj = { animated: flag, children, enabled: plainTextExperimentEnabled, experimentalUseNativeText: flag2, hasRef: null != arg1, hasTextAncestor: context, isIOS: null, props: null, style: null };
  tmp4Result = tmp4(1116);
  obj[6] = tmp4Result.isIOS();
  obj[7] = merged;
  obj[8] = items;
  const plainTextEligibility = tmp4Result.getPlainTextEligibility(obj);
  const obj3 = useManaTextMigrationHighlight2;
  const tmp10 = includeFontPadding ? items : closure_11;
  if (tmp4Result1.isPlainTextEligible(plainTextEligibility)) {
    ({ fontWeight, textAlignVertical, verticalAlign, letterSpacing } = plainTextEligibility);
    ({ color: color2, fontSize, fontFamily, fontStyle, textAlign, textDecorationLine, lineHeight } = plainTextEligibility);
    obj = { text: null, color: null, fontSize: null, fontFamily: null, fontWeight: null, fontStyle: null, textAlign: null, textAlignVertical: null, textDecorationLine: null, lineHeight: null, letterSpacing: null, hasLetterSpacing: null, style: null, numberOfLines: null, ellipsizeMode: null, allowFontScaling: true };
    obj[0] = children;
    obj[1] = color2;
    obj[2] = fontSize;
    obj[3] = fontFamily;
    let StringResult;
    const tmp19 = callback(plainTextEligibility, closure_3);
    const tmp20 = jsx;
    if (null != fontWeight) {
      const _String = String;
      StringResult = String(fontWeight);
    }
    obj[4] = StringResult;
    obj[5] = fontStyle;
    obj[6] = textAlign;
    if (null != verticalAlign) {
      let str2 = "center";
      if ("middle" !== verticalAlign) {
        str2 = verticalAlign;
      }
      textAlignVertical = str2;
    }
    obj[7] = textAlignVertical;
    obj[8] = textDecorationLine;
    obj[9] = lineHeight;
    obj[10] = letterSpacing;
    obj[11] = undefined !== letterSpacing;
    obj[12] = tmp19;
    obj[13] = lineClamp;
    if (ellipsizeMode == null) {
      ellipsizeMode = "tail";
    }
    obj[14] = ellipsizeMode;
    const merged1 = Object.assign(merged);
    return tmp20(__INTERNAL_VIEW_CONFIGDefault, obj);
  } else {
    if (flag2) {
      let NativeText = tmp4(299).NativeText;
    } else {
      NativeText = flag ? closure_9 : Text;
    }
    obj1 = { style: null, numberOfLines: null, ellipsizeMode: null, allowFontScaling: true, ref: null };
    obj1[0] = items;
    obj1[1] = lineClamp;
    let str = ellipsizeMode;
    if (ellipsizeMode == null) {
      str = "tail";
    }
    obj1[2] = str;
    obj1[4] = arg1;
    const merged2 = Object.assign(merged);
    obj1.children = children;
    return <NativeText style={null} numberOfLines={null} ellipsizeMode={null} allowFontScaling ref={null} />;
  }
  tmp4Result1 = set;
});
const obj2 = { 400: null, 700: null };
const obj4 = { 700: null, 900: null };
const forwardRefResult1 = importAllResult.forwardRef((variant, ref) => {
  let obj = useTypographyVariantRemap;
  obj = { ref };
  const typographyVariantRemap = obj.useTypographyVariantRemap(variant.variant, true);
  const merged = Object.assign(variant);
  obj.accessibilityRole = "header";
  obj.variant = typographyVariantRemap;
  return <closure_17 ref={arg1} />;
});
const result1 = require("set").fileFinishedImporting("design/components/Text/native/Text.tsx");

export const TextStyleSheet = result;
export const Text = forwardRefResult;
export const Heading = forwardRefResult1;