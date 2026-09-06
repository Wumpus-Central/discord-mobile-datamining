// === Module 4556: Text/Text ===

// Module 4556 (Text/Text)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import useManaTextMigrationHighlight2 from "useManaTextMigrationHighlight" /* 4558 */;
import PlainTextExperimentContext from "PlainTextExperimentContext" /* 4565 */;
import useTypographyVariantRemap from "useTypographyVariantRemap" /* 4566 */;
import PlainTextEligibility from "PlainTextEligibility" /* 4569 */;
import _modDef4570 from "module_4570" /* 4570 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;

require = fn;
let closure_3 = ["color", "fontSize", "fontFamily", "fontWeight", "fontStyle", "textAlign", "textAlignVertical", "verticalAlign", "textDecorationLine", "lineHeight", "letterSpacing"];
get_ActivityIndicator = fn(17);
const Text = get_ActivityIndicator.Text;
let closure_7 = get_ActivityIndicator.unstable_TextAncestorContext;
const Fonts = fn(1085).Fonts;
const jsx = fn(21).jsx;
let closure_9 = ReanimatedRexport.createAnimatedComponent(Text);
let items = [{ includeFontPadding: true }];
let closure_11 = [];
const keys = Object.keys(nativeDefault.colors);
let closure_12 = Object.fromEntries(keys.map((item) => {
  items = [_modDef12.kebabCase(item), item];
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
const dependencyMap = { headline: obj, nitro: obj1, primary: obj, code: { 400: null, 700: null } };
let closure_14 = { headline: obj3, nitro: { 700: null, 900: null } };
const TextVariantsFlat = fn(4557).TextVariantsFlat;
const mapped = TextVariantsFlat.map((name) => {
  let tmp = null;
  if ("code" !== name.name) {
    items = [name.name, ];
    let obj = { fontSize: null, lineHeight: null, textTransform: null };
    ({ size: obj4.fontSize, lineHeight: obj4.lineHeight } = name);
    let str = "none";
    if (name.uppercase) {
      str = "uppercase";
    }
    obj.textTransform = str;
    ({ fontStack, weight } = name);
    str = weight.toString();
    if (name.italic) {
      let tmp6;
      if (closure_14[fontStack] != null) {
        tmp6 = tmp5[str];
      }
      if (null != tmp6) {
        obj = { fontFamily: tmp6, fontStyle: "normal" };
      } else {
        const obj1 = { fontFamily: dependencyMap[fontStack][str], fontStyle: "italic" };
      }
    } else {
      obj = { fontFamily: dependencyMap[fontStack][str] };
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
const useManaTextMigrationHighlight = fn(4558);
let result = useManaTextMigrationHighlight.withManaTextMigrationHighlight(fromEntriesResult);
const createStyles = fn(4560);
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
  const merged = Object.assign(animated, Object.assign({ variant: 0, color: 0, style: 0, children: 0, lineClamp: 0, includeFontPadding: 0, ellipsizeMode: 0, tabularNumbers: 0, animated: 0, experimental_useNativeText: 0 }));
  if (color == null) {
    color = "text-default";
  }
  let obj = PlainTextExperimentContext;
  const plainTextExperimentEnabled = obj.usePlainTextExperimentEnabled();
  const context = noop.useContext(closure_7);
  const tmp2Result = closure_16(color, tabularNumbers);
  const typographyVariantRemap = useTypographyVariantRemap.useTypographyVariantRemap(animated.variant, false);
  items = [fromEntriesResult[typographyVariantRemap], tmp2Result.text, , ];
  const manaTextMigrationHighlight = useManaTextMigrationHighlight2.useManaTextMigrationHighlight(fromEntriesResult[typographyVariantRemap], style);
  const arraySpreadResult = HermesBuiltin.arraySpread(includeFontPadding ? items : closure_11, 2);
  items[arraySpreadResult] = style;
  items[arraySpreadResult + 1] = manaTextMigrationHighlight;
  tmp4(4569);
  const element = { animated: flag, children, enabled: plainTextExperimentEnabled, experimentalUseNativeText: flag2, hasRef: null != ref, hasTextAncestor: context, isIOS: null, props: null, style: null };
  const tmp4Result = tmp4(1116);
  element.isIOS = tmp4Result.isIOS();
  element.props = merged;
  element.style = items;
  const plainTextEligibility = tmp4Result.getPlainTextEligibility(element);
  const tmp10 = includeFontPadding ? items : closure_11;
  if (tmp4Result1.isPlainTextEligible(plainTextEligibility)) {
    ({ fontWeight, textAlignVertical, verticalAlign, letterSpacing } = plainTextEligibility);
    ({ color: color2, fontSize, fontFamily, fontStyle, textAlign, textDecorationLine, lineHeight } = plainTextEligibility);
    obj = { text: children, color: color2, fontSize, fontFamily, fontWeight: null, fontStyle: null, textAlign: null, textAlignVertical: null, textDecorationLine: null, lineHeight: null, letterSpacing: null, hasLetterSpacing: null, style: null, numberOfLines: null, ellipsizeMode: null, allowFontScaling: true };
    let StringResult;
    const tmp19 = _objectWithoutProperties(plainTextEligibility, closure_3);
    const tmp20 = jsx;
    if (null != fontWeight) {
      const _String = String;
      StringResult = String(fontWeight);
    }
    obj.fontWeight = StringResult;
    obj.fontStyle = fontStyle;
    obj.textAlign = textAlign;
    if (null != verticalAlign) {
      let str2 = "center";
      if ("middle" !== verticalAlign) {
        str2 = verticalAlign;
      }
      textAlignVertical = str2;
    }
    obj.textAlignVertical = textAlignVertical;
    obj.textDecorationLine = textDecorationLine;
    obj.lineHeight = lineHeight;
    obj.letterSpacing = letterSpacing;
    obj.hasLetterSpacing = undefined !== letterSpacing;
    obj.style = tmp19;
    obj.numberOfLines = lineClamp;
    if (ellipsizeMode == null) {
      ellipsizeMode = "tail";
    }
    obj.ellipsizeMode = ellipsizeMode;
    const merged1 = Object.assign(merged);
    return tmp20(_modDef4570, obj);
  } else {
    if (flag2) {
      let NativeText = tmp4(299).NativeText;
    } else {
      NativeText = flag ? closure_9 : Text;
    }
    obj = { style: items, numberOfLines: lineClamp, ellipsizeMode: null, allowFontScaling: true, ref: null };
    let str = ellipsizeMode;
    if (ellipsizeMode == null) {
      str = "tail";
    }
    obj.ellipsizeMode = str;
    obj.ref = ref;
    const merged2 = Object.assign(merged);
    obj.children = children;
    return <NativeText style={items} numberOfLines={lineClamp} ellipsizeMode={null} allowFontScaling ref={null} />;
  }
  tmp4Result1 = PlainTextEligibility;
});
const size = fn(2);
const result1 = size.fileFinishedImporting("design/components/Text/native/Text.tsx");

export const TextStyleSheet = result;
export const Text = forwardRefResult;
export const Heading = noop.forwardRef((variant, ref) => {
  const obj = { ref };
  const typographyVariantRemap = obj.useTypographyVariantRemap(variant.variant, true);
  const merged = Object.assign(variant);
  obj.accessibilityRole = "header";
  obj.variant = typographyVariantRemap;
  return <forwardRefResult ref={arg1} />;
});