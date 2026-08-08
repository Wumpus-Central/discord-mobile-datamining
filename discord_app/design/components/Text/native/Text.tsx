// discord_app/design/components/Text/native/Text.tsx
import importAllResult from "noop";
import { Text } from "get ActivityIndicator";
import { Fonts } from "sum";
import { jsx } from "jsxProd";
import { TextVariantsFlat } from "TEXT_VARIANT";
import useManaTextMigrationHighlight from "useManaTextMigrationHighlight";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4036";
import { apply } from "../../../../../_runtime/00012_apply.js";
import { NativeText } from "../../../../../_runtime/00299_NativeText.js";
import { useTypographyVariantRemap } from "../../../../../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { useManaTextMigrationHighlight } from "useManaTextMigrationHighlight.tsx";

const require = arg1;
let closure_5 = require("module_4036").createAnimatedComponent(Text);
const keys = Object.keys(require("Themes").colors);
let closure_6 = Object.fromEntries(keys.map((arg0) => {
  const items = [apply.kebabCase(arg0), arg0];
  return items;
}));
let obj = { 400: null, 500: null, 600: null, 700: null, 800: null };
({ DISPLAY_NORMAL: obj3[400], DISPLAY_MEDIUM: obj3[500], DISPLAY_SEMIBOLD: obj3[600], DISPLAY_BOLD: obj3[700], DISPLAY_EXTRABOLD: obj3[800] } = Fonts);
obj = { 400: null, 500: null, 600: null, 700: null };
({ PRIMARY_NORMAL: obj4[400], PRIMARY_MEDIUM: obj4[500], PRIMARY_SEMIBOLD: obj4[600], PRIMARY_BOLD: obj4[700] } = Fonts);
const obj1 = { 800: null };
obj1[800] = Fonts.GINTO_NORD_EXTRA_BOLD;
const obj2 = { 400: null, 700: null };
({ CODE_NORMAL: obj6[400], CODE_BOLD: obj6[700] } = Fonts);
const mapped = TextVariantsFlat.map((name) => {
  let fontStack;
  let weight;
  let tmp = null;
  if ("code" !== name.name) {
    const items = [name.name, ];
    let obj = { fontSize: null, lineHeight: null, textTransform: null, fontFamily: null, includeFontPadding: false, letterSpacing: null };
    ({ size: obj2[0], lineHeight: obj2[1] } = name);
    let str = "none";
    if (name.uppercase) {
      str = "uppercase";
    }
    obj[2] = str;
    ({ weight, fontStack } = name);
    obj = { headline: null, display: null, primary: null, code: null };
    obj[0] = obj1;
    obj[1] = obj;
    obj[2] = obj;
    obj[3] = obj2;
    obj[3] = obj[fontStack][weight.toString(weight)];
    let result;
    if ("letterSpacing" in name) {
      result = name.letterSpacing / 10;
    }
    obj[5] = result;
    items[1] = obj;
    tmp = items;
  }
  return tmp;
});
const fromEntriesResult = Object.fromEntries(mapped.filter(Boolean));
const unpackModuleId = fromEntriesResult;
let result = useManaTextMigrationHighlight.withManaTextMigrationHighlight(fromEntriesResult);
let closure_12 = createCacheKey.createStyles((arg0, arg1) => {
  let tmp;
  if ("none" !== arg0) {
    tmp = Themes.colors[table[arg0]];
  }
  const text = { color: tmp, fontVariant: null };
  let items;
  if (arg1) {
    items = ["tabular-nums"];
  }
  text[1] = items;
  return { text };
});
const forwardRefResult = importAllResult.forwardRef((animated) => {
  let color;
  let ellipsizeMode;
  let includeFontPadding;
  let lineClamp;
  let style;
  let tabularNumbers;
  let variant;
  ({ color, style, includeFontPadding } = animated);
  ({ variant, lineClamp } = animated);
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
  if (flag2) {
    let NativeText = NativeText.NativeText;
  } else {
    NativeText = flag ? closure_5 : Text;
  }
  let obj = useTypographyVariantRemap;
  const typographyVariantRemap = obj.useTypographyVariantRemap(variant, false);
  const tmp2 = closure_12;
  const tmp2Result = closure_12(color, tabularNumbers);
  const items = [dependencyMap[typographyVariantRemap], tmp2Result.text, , ];
  const manaTextMigrationHighlight = useManaTextMigrationHighlight.useManaTextMigrationHighlight(dependencyMap[typographyVariantRemap], style);
  if (includeFontPadding) {
    obj = { includeFontPadding: null };
    obj[0] = includeFontPadding;
    const items1 = [obj];
    let items2 = items1;
  } else {
    items2 = [];
  }
  obj = { style: null, numberOfLines: null, ellipsizeMode: null, allowFontScaling: true, ref: null };
  const arraySpreadResult = HermesBuiltin.arraySpread(items2, 2);
  items[arraySpreadResult] = style;
  items[arraySpreadResult + 1] = manaTextMigrationHighlight;
  obj[0] = items;
  obj[1] = lineClamp;
  if (ellipsizeMode == null) {
    ellipsizeMode = "tail";
  }
  obj[2] = ellipsizeMode;
  obj[4] = arg1;
  const merged1 = Object.assign(merged);
  return <NativeText style={null} numberOfLines={null} ellipsizeMode={null} allowFontScaling ref={null} />;
});
const forwardRefResult1 = importAllResult.forwardRef((variant, ref) => {
  let obj = useTypographyVariantRemap;
  obj = { ref };
  const typographyVariantRemap = obj.useTypographyVariantRemap(variant.variant, true);
  const merged = Object.assign(variant);
  obj.accessibilityRole = "header";
  obj.variant = typographyVariantRemap;
  return <closure_13 ref={arg1} />;
});
const result1 = require("sum").fileFinishedImporting("design/components/Text/native/Text.tsx");

export const TextStyleSheet = result;
export const Text = forwardRefResult;
export const Heading = forwardRefResult1;