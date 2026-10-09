// === Module 5087: Text/Text ===

// Module 5087 (Text/Text)
import _modDef12 from "module_12" /* 12 */;
import NativeText2 from "NativeText" /* 299 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1383 */;
import useManaTextMigrationHighlight2 from "useManaTextMigrationHighlight" /* 5089 */;
import PlainTextExperimentContext from "PlainTextExperimentContext" /* 5096 */;
import useTypographyVariantRemap from "useTypographyVariantRemap" /* 5097 */;
import PlainTextEligibility from "PlainTextEligibility" /* 5100 */;
import _modDef5101 from "module_5101" /* 5101 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;

require = fn;
let closure_3 = ["variant", "color", "style", "children", "lineClamp", "includeFontPadding", "ellipsizeMode", "tabularNumbers", "animated", "experimental_useNativeText", "ref"];
let closure_4 = ["color", "fontSize", "fontFamily", "fontWeight", "fontStyle", "textAlign", "textAlignVertical", "verticalAlign", "textDecorationLine", "lineHeight", "letterSpacing"];
let closure_5 = ["color", "fontSize", "fontFamily", "fontWeight", "fontStyle", "textAlign", "textAlignVertical", "verticalAlign", "textDecorationLine", "lineHeight", "letterSpacing"];
let closure_6 = ["ref"];
get_ActivityIndicator = fn(17);
const Text = get_ActivityIndicator.Text;
let closure_10 = get_ActivityIndicator.unstable_TextAncestorContext;
const Fonts = fn(1096).Fonts;
const jsx = fn(21).jsx;
let closure_12 = ReanimatedRexport.createAnimatedComponent(Text);
let items = [{ includeFontPadding: true }];
let closure_14 = [];
const keys = Object.keys(nativeDefault.colors);
let closure_15 = Object.fromEntries(keys.map((item) => {
  items = [_modDef12.kebabCase(item), item];
  return items;
}));
({ PRIMARY_NORMAL: obj2[400], PRIMARY_MEDIUM: obj2[500], PRIMARY_SEMIBOLD: obj2[600], PRIMARY_BOLD: obj2[700], PRIMARY_EXTRABOLD: obj2[800] } = Fonts);
let obj3 = { 800: null };
obj3[800] = Fonts.GINTO_NORD_EXTRA_BOLD;
let obj4 = { 700: null };
obj4[700] = Fonts.GINTO_DISCORD_NORD_BOLD;
({ CODE_NORMAL: obj5[400], CODE_BOLD: obj5[700] } = Fonts);
const obj18 = { 800: null };
obj18[800] = Fonts.GINTO_NORD_EXTRA_BOLD_ITALIC;
({ GINTO_DISCORD_NORD_BOLD_ITALIC: obj7[700], GINTO_DISCORD_NORD_BLACK_ITALIC: obj7[900] } = Fonts);
const dependencyMap = { headline: obj3, nitro: obj4, primary: { 400: null, 500: null, 600: null, 700: null, 800: null }, code: { 400: null, 700: null } };
let closure_17 = { headline: obj18, nitro: { 700: null, 900: null } };
const TextVariantsFlat = fn(5088).TextVariantsFlat;
const mapped = TextVariantsFlat.map((name) => {
  let tmp = null;
  if ("code" !== name.name) {
    items = [name.name, ];
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
      if (closure_17[fontStack] != null) {
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
const useManaTextMigrationHighlight = fn(5089);
let result = useManaTextMigrationHighlight.withManaTextMigrationHighlight(fromEntriesResult);
const createStyles = fn(5091);
let closure_19 = createStyles.createStyles((arg0, arg1) => {
  let tmp;
  if ("none" !== arg0) {
    tmp = nativeDefault.colors[closure_15[arg0]];
  }
  const text = { color: tmp, fontVariant: null };
  items = undefined;
  if (arg1) {
    items = ["tabular-nums"];
  }
  text.fontVariant = items;
  return { text };
});
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function Text(variant) {
  ({ color, style, children, lineClamp, includeFontPadding, ellipsizeMode, tabularNumbers, animated, experimental_useNativeText, ref } = variant);
  const tmp2 = _objectWithoutProperties(variant, closure_3);
  if (color == null) {
    color = "text-default";
  }
  const tmp3 = undefined !== includeFontPadding && includeFontPadding;
  const tmp6Result = closure_19(color, undefined !== tabularNumbers && tabularNumbers);
  const tmp7 = undefined !== tabularNumbers && tabularNumbers;
  const plainTextExperimentEnabled = PlainTextExperimentContext.usePlainTextExperimentEnabled();
  const context = noop.useContext(closure_10);
  const typographyVariantRemap = useTypographyVariantRemap.useTypographyVariantRemap(variant.variant, false);
  items = [fromEntriesResult[typographyVariantRemap], tmp6Result.text, , ];
  const manaTextMigrationHighlight = useManaTextMigrationHighlight2.useManaTextMigrationHighlight(fromEntriesResult[typographyVariantRemap], style);
  const arraySpreadResult = HermesBuiltin.arraySpread(tmp3 ? items : closure_14, 2);
  items[arraySpreadResult] = style;
  items[arraySpreadResult + 1] = manaTextMigrationHighlight;
  const tmp15 = tmp3 ? items : closure_14;
  const element = { animated: tmp4, children, enabled: plainTextExperimentEnabled, experimentalUseNativeText: tmp5, hasRef: null != ref, hasTextAncestor: context, isIOS: null, props: null, style: null };
  const tmp9Result = PlainTextEligibility;
  element.isIOS = utils_PlatformUtils.isIOS();
  element.props = tmp2;
  element.style = items;
  const plainTextEligibility = tmp9Result.getPlainTextEligibility(element);
  const tmp9Result3 = utils_PlatformUtils;
  if (tmp9Result4.isPlainTextEligible(plainTextEligibility)) {
    ({ fontWeight, textAlignVertical, verticalAlign, letterSpacing } = plainTextEligibility);
    ({ color: color2, fontSize, fontFamily, fontStyle, textAlign, textDecorationLine, lineHeight } = plainTextEligibility);
    const obj4 = { text: children, color: color2, fontSize, fontFamily, fontWeight: null, fontStyle: null, textAlign: null, textAlignVertical: null, textDecorationLine: null, lineHeight: null, letterSpacing: null, hasLetterSpacing: null, style: null, numberOfLines: null, ellipsizeMode: null, allowFontScaling: true };
    let StringResult;
    const tmpResult = _objectWithoutProperties(plainTextEligibility, closure_4);
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
    obj4.style = tmpResult;
    obj4.numberOfLines = lineClamp;
    if (ellipsizeMode == null) {
      ellipsizeMode = "tail";
    }
    obj4.ellipsizeMode = ellipsizeMode;
    const merged = Object.assign(tmp2);
    return jsx(_modDef5101, { text: children, color: color2, fontSize, fontFamily, fontWeight: null, fontStyle: null, textAlign: null, textAlignVertical: null, textDecorationLine: null, lineHeight: null, letterSpacing: null, hasLetterSpacing: null, style: null, numberOfLines: null, ellipsizeMode: null, allowFontScaling: true });
  } else {
    if (tmp5) {
      let NativeText = NativeText2.NativeText;
    } else {
      NativeText = tmp4 ? closure_12 : Text;
    }
    const obj5 = { style: items, numberOfLines: lineClamp, ellipsizeMode: null, allowFontScaling: true, ref: null };
    let str = ellipsizeMode;
    if (ellipsizeMode == null) {
      str = "tail";
    }
    obj5.ellipsizeMode = str;
    obj5.ref = ref;
    const merged1 = Object.assign(tmp2);
    obj5.children = children;
    return <NativeText style={items} numberOfLines={lineClamp} ellipsizeMode={null} allowFontScaling ref={null} />;
  }
  tmp9Result4 = PlainTextEligibility;
}) : (function Text(animated) {
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
  const merged = Object.assign(animated, Object.assign({ variant: 0, color: 0, style: 0, children: 0, lineClamp: 0, includeFontPadding: 0, ellipsizeMode: 0, tabularNumbers: 0, animated: 0, experimental_useNativeText: 0, ref: 0 }));
  if (color == null) {
    color = "text-default";
  }
  const tmp2Result = closure_19(color, tabularNumbers);
  const plainTextExperimentEnabled = PlainTextExperimentContext.usePlainTextExperimentEnabled();
  const context = noop.useContext(closure_10);
  const typographyVariantRemap = useTypographyVariantRemap.useTypographyVariantRemap(animated.variant, false);
  items = [fromEntriesResult[typographyVariantRemap], tmp2Result.text, , ];
  const manaTextMigrationHighlight = useManaTextMigrationHighlight2.useManaTextMigrationHighlight(fromEntriesResult[typographyVariantRemap], style);
  const arraySpreadResult = HermesBuiltin.arraySpread(includeFontPadding ? items : closure_14, 2);
  items[arraySpreadResult] = style;
  items[arraySpreadResult + 1] = manaTextMigrationHighlight;
  const tmp10 = includeFontPadding ? items : closure_14;
  const element = { animated: flag, children, enabled: plainTextExperimentEnabled, experimentalUseNativeText: flag2, hasRef: null != ref, hasTextAncestor: context, isIOS: null, props: null, style: null };
  const tmp4Result = PlainTextEligibility;
  element.isIOS = utils_PlatformUtils.isIOS();
  element.props = merged;
  element.style = items;
  const plainTextEligibility = tmp4Result.getPlainTextEligibility(element);
  const tmp4Result3 = utils_PlatformUtils;
  if (tmp4Result4.isPlainTextEligible(plainTextEligibility)) {
    ({ fontWeight, textAlignVertical, verticalAlign, letterSpacing } = plainTextEligibility);
    ({ color: color2, fontSize, fontFamily, fontStyle, textAlign, textDecorationLine, lineHeight } = plainTextEligibility);
    const obj4 = { text: children, color: color2, fontSize, fontFamily, fontWeight: null, fontStyle: null, textAlign: null, textAlignVertical: null, textDecorationLine: null, lineHeight: null, letterSpacing: null, hasLetterSpacing: null, style: null, numberOfLines: null, ellipsizeMode: null, allowFontScaling: true };
    let StringResult;
    const tmp19 = _objectWithoutProperties(plainTextEligibility, closure_5);
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
    return jsx(_modDef5101, { text: children, color: color2, fontSize, fontFamily, fontWeight: null, fontStyle: null, textAlign: null, textAlignVertical: null, textDecorationLine: null, lineHeight: null, letterSpacing: null, hasLetterSpacing: null, style: null, numberOfLines: null, ellipsizeMode: null, allowFontScaling: true });
  } else {
    if (flag2) {
      let NativeText = NativeText2.NativeText;
    } else {
      NativeText = flag ? closure_12 : Text;
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
let closure_20 = tmp5;
ReactCompilerGating = fn(558);
const size = fn(2);
const result1 = size.fileFinishedImporting("design/components/Text/native/Text.tsx");

export const TextStyleSheet = result;
export const Text = tmp5;
export const Heading = ReactCompilerGating.isReactCompilerEnabled() ? (function Heading(ref) {
  const cResult = c.c(7);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref.ref, closure_6);
    cResult[0] = ref.ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    let tmp5 = ref;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const typographyVariantRemap = useTypographyVariantRemap.useTypographyVariantRemap(tmp4.variant, true);
  if (cResult[3] === tmp4) {
    if (cResult[4] === tmp5) {
      if (cResult[5] === typographyVariantRemap) {
        let tmp10 = cResult[6];
      }
      return tmp10;
    }
  }
  const obj2 = { ref: tmp5 };
  const merged = Object.assign(tmp4);
  obj2.accessibilityRole = "header";
  obj2.variant = typographyVariantRemap;
  const tmp12 = <closure_20 ref={tmp5} />;
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = typographyVariantRemap;
  cResult[6] = tmp12;
  tmp10 = tmp12;
  const tmpResult = useTypographyVariantRemap;
}) : (function Heading(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj2 = { ref: ref.ref };
  const typographyVariantRemap = useTypographyVariantRemap.useTypographyVariantRemap(merged.variant, true);
  const merged1 = Object.assign(merged);
  obj2.accessibilityRole = "header";
  obj2.variant = typographyVariantRemap;
  return <closure_20 ref={ref.ref} />;
});