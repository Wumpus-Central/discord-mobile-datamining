// discord_app/design/components/Text/native/Text.tsx
import applyDefault from "../../../../../_runtime/00012_apply.js";
import NativeText2 from "../../../../../_runtime/00299_NativeText.js";
import PlatformTypes from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useManaTextMigrationHighlight2 from "useManaTextMigrationHighlight.tsx";
import PlainTextExperimentProvider from "PlainTextExperimentContext.tsx";
import useTypographyVariantRemap from "../../../../../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx";
import set from "PlainTextEligibility.tsx";
import __INTERNAL_VIEW_CONFIGDefault from "../../../../../_runtime/metro/04743___INTERNAL_VIEW_CONFIG.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { Fonts } from "../../../../../discord_common/js/shared/Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import { TextVariantsFlat } from "../../../../../discord_common/js/packages/tokens/typography/generated/TextVariants.tsx";
import useManaTextMigrationHighlight from "useManaTextMigrationHighlight.tsx";
import createCacheKey from "../../Styles/native/createStyles.tsx";
import importDefaultResult from "../../../../modules/reanimated/ReanimatedRexport.tsx";

require = fn;
let closure_3 = ["color", "fontSize", "fontFamily", "fontWeight", "fontStyle", "textAlign", "textAlignVertical", "verticalAlign", "textDecorationLine", "lineHeight", "letterSpacing"];
let c5 = importAllResult;
const Text = get_ActivityIndicator.Text;
let closure_7 = get_ActivityIndicator.unstable_TextAncestorContext;
let closure_9 = importDefaultResult.createAnimatedComponent(Text);
let items = [{ includeFontPadding: true }];
let closure_11 = [];
const keys = Object.keys(ThemesDefault.colors);
let closure_12 = Object.fromEntries(keys.map((item, index) => {
  items = [applyDefault.kebabCase(item), item];
  return items;
}));
({ DISPLAY_NORMAL: obj3[400], DISPLAY_MEDIUM: obj3[500], DISPLAY_SEMIBOLD: obj3[600], DISPLAY_BOLD: obj3[700], DISPLAY_EXTRABOLD: obj3[800] } = Fonts);
({ PRIMARY_NORMAL: obj4[400], PRIMARY_MEDIUM: obj4[500], PRIMARY_SEMIBOLD: obj4[600], PRIMARY_BOLD: obj4[700] } = Fonts);
let obj1 = { 800: null };
obj1[800] = Fonts.GINTO_NORD_EXTRA_BOLD;
({ CODE_NORMAL: obj6[400], CODE_BOLD: obj6[700] } = Fonts);
const mapped = TextVariantsFlat.map((item, index) => {
  let tmp = null;
  if ("code" !== item.name) {
    items = [item.name, ];
    obj = { fontSize: null, lineHeight: null, textTransform: null, fontFamily: null, includeFontPadding: false, letterSpacing: null };
    ({ size: obj2[0], lineHeight: obj2[1] } = item);
    let str = "none";
    if (item.uppercase) {
      str = "uppercase";
    }
    obj[2] = str;
    ({ weight, fontStack } = item);
    obj = { headline: null, display: null, primary: null, code: null };
    obj[0] = obj1;
    obj[1] = obj;
    obj[2] = obj;
    obj[3] = obj2;
    obj[3] = obj[fontStack][weight.toString(weight)];
    let result;
    if ("letterSpacing" in item) {
      result = item.letterSpacing / 10;
    }
    obj[5] = result;
    items[1] = obj;
    tmp = items;
  }
  return tmp;
});
const fromEntriesResult = Object.fromEntries(mapped.filter(Boolean));
let result = useManaTextMigrationHighlight.withManaTextMigrationHighlight(fromEntriesResult);
let closure_18 = createCacheKey.createStyles((arg0, arg1) => {
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
  obj = PlainTextExperimentProvider;
  const plainTextExperimentEnabled = obj.usePlainTextExperimentEnabled();
  const context = importAllResult.useContext(closure_7);
  obj1 = useTypographyVariantRemap;
  const typographyVariantRemap = obj1.useTypographyVariantRemap(animated.variant, false);
  const tmp2Result = callback(color, tabularNumbers);
  items = [dependencyMap[typographyVariantRemap], tmp2Result.text, , ];
  const manaTextMigrationHighlight = useManaTextMigrationHighlight2.useManaTextMigrationHighlight(dependencyMap[typographyVariantRemap], style);
  const arraySpreadResult = HermesBuiltin.arraySpread(includeFontPadding ? items : closure_11, 2);
  items[arraySpreadResult] = style;
  items[arraySpreadResult + 1] = manaTextMigrationHighlight;
  obj = { animated: flag, children, enabled: plainTextExperimentEnabled, experimentalUseNativeText: flag2, hasRef: null != arg1, hasTextAncestor: context, isIOS: null, props: null, style: null };
  const tmp4Result = PlatformTypes;
  obj[6] = tmp4Result.isIOS();
  obj[7] = merged;
  obj[8] = items;
  const plainTextEligibility = tmp4Result.getPlainTextEligibility(obj);
  if (tmp4Result1.isPlainTextEligible(plainTextEligibility)) {
    ({ fontWeight, textAlignVertical, verticalAlign } = plainTextEligibility);
    ({ color: color2, fontSize, fontFamily, fontStyle, textAlign, textDecorationLine, lineHeight, letterSpacing } = plainTextEligibility);
    obj = { text: null, color: null, fontSize: null, fontFamily: null, fontWeight: null, fontStyle: null, textAlign: null, textAlignVertical: null, textDecorationLine: null, lineHeight: null, letterSpacing: null, style: null, numberOfLines: null, ellipsizeMode: null, allowFontScaling: true };
    obj[0] = children;
    obj[1] = color2;
    obj[2] = fontSize;
    obj[3] = fontFamily;
    let StringResult;
    const tmp19 = callback(plainTextEligibility, closure_3);
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
    obj[11] = tmp19;
    obj[12] = lineClamp;
    if (ellipsizeMode == null) {
      ellipsizeMode = "tail";
    }
    obj[13] = ellipsizeMode;
    const merged1 = Object.assign(merged);
    return jsx(__INTERNAL_VIEW_CONFIGDefault, { text: null, color: null, fontSize: null, fontFamily: null, fontWeight: null, fontStyle: null, textAlign: null, textAlignVertical: null, textDecorationLine: null, lineHeight: null, letterSpacing: null, style: null, numberOfLines: null, ellipsizeMode: null, allowFontScaling: true });
  } else {
    if (flag2) {
      let NativeText = NativeText2.NativeText;
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
const forwardRefResult1 = importAllResult.forwardRef((variant, ref) => {
  obj = { ref };
  const typographyVariantRemap = obj.useTypographyVariantRemap(variant.variant, true);
  const merged = Object.assign(variant);
  obj.accessibilityRole = "header";
  obj.variant = typographyVariantRemap;
  return <closure_19 ref={ref} />;
});
const result1 = require("obj132").fileFinishedImporting("design/components/Text/native/Text.tsx");

export const TextStyleSheet = result;
export const Text = forwardRefResult;
export const Heading = forwardRefResult1;