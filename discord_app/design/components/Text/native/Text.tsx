// === Module 5747: Text/Text ===

// Module 5747 (Text/Text)
import _modDef12 from "module_12" /* 12 */;
import NativeText2 from "NativeText" /* 299 */;
import nativeDefault from "native" /* 575 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import useManaTextMigrationHighlight2 from "useManaTextMigrationHighlight" /* 5749 */;
import PlainTextExperimentContext from "PlainTextExperimentContext" /* 5751 */;
import PlainTextEligibility from "PlainTextEligibility" /* 5752 */;
import _modDef5753 from "module_5753" /* 5753 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import module_1652 from "module_1652" /* 1652 */;

require = fn;
class Text {
  constructor(arg0) {
    ({ variant, color, style, children, lineClamp, includeFontPadding } = global);
    if (includeFontPadding === undefined) {
      includeFontPadding = false;
    }
    ({ ellipsizeMode, tabularNumbers } = global);
    if (tabularNumbers === undefined) {
      tabularNumbers = false;
    }
    flag = global.animated;
    if (flag === undefined) {
      flag = false;
    }
    flag2 = global.experimental_useNativeText;
    if (flag2 === undefined) {
      flag2 = false;
    }
    ref = global.ref;
    merged = Object.assign(global, Object.assign({ variant: 0, color: 0, style: 0, children: 0, lineClamp: 0, includeFontPadding: 0, ellipsizeMode: 0, tabularNumbers: 0, animated: 0, experimental_useNativeText: 0, ref: 0 }));
    tmp2 = closure_16;
    if (color == null) {
      color = "text-default";
    }
    tmp4 = closure_0;
    tmp5 = closure_2;
    tmp2Result = tmp2(color, tabularNumbers);
    obj = closure_0(closure_2[11]);
    plainTextExperimentEnabled = obj.usePlainTextExperimentEnabled();
    context = closure_5.useContext(closure_7);
    obj2 = closure_0(closure_2[9]);
    items = [, , , ];
    items[0] = closure_15[variant];
    items[1] = tmp2Result.text;
    tmp9 = includeFontPadding ? closure_10 : closure_11;
    manaTextMigrationHighlight = obj2.useManaTextMigrationHighlight(closure_15[variant], style);
    arraySpreadResult = HermesBuiltin.arraySpread(tmp9, 2);
    items[arraySpreadResult] = style;
    items[arraySpreadResult + 1] = manaTextMigrationHighlight;
    tmp4Result = tmp4(tmp5[12]);
    element = { animated: flag, children, enabled: plainTextExperimentEnabled, experimentalUseNativeText: flag2, hasRef: null != ref, hasTextAncestor: context, isIOS: null, props: null, style: null };
    tmp4Result1 = tmp4(tmp5[13]);
    element.isIOS = tmp4Result1.isIOS();
    element.props = merged;
    element.style = items;
    plainTextEligibility = tmp4Result.getPlainTextEligibility(element);
    tmp4Result2 = tmp4(tmp5[12]);
    if (tmp4Result2.isPlainTextEligible(plainTextEligibility)) {
      ({ fontWeight, textAlignVertical, verticalAlign, letterSpacing } = plainTextEligibility);
      tmp16 = closure_4;
      tmp17 = closure_3;
      ({ color: color2, fontSize, fontFamily, fontStyle, textAlign, textDecorationLine, lineHeight } = plainTextEligibility);
      tmp20 = closure_1;
      tmp18 = closure_4(plainTextEligibility, closure_3);
      tmp19 = jsx;
      obj1 = { text: null, color: null, fontSize: null, fontFamily: null, fontWeight: null, fontStyle: null, textAlign: null, textAlignVertical: null, textDecorationLine: null, lineHeight: null, letterSpacing: null, hasLetterSpacing: null, style: null, numberOfLines: null, ellipsizeMode: null, allowFontScaling: true };
      obj1.text = children;
      obj1.color = color2;
      obj1.fontSize = fontSize;
      obj1.fontFamily = fontFamily;
      StringResult = undefined;
      tmp21 = closure_1(tmp5[14]);
      if (null != fontWeight) {
        tmp23 = globalThis;
        _String = String;
        StringResult = String(fontWeight);
      }
      obj1.fontWeight = StringResult;
      obj1.fontStyle = fontStyle;
      obj1.textAlign = textAlign;
      if (null != verticalAlign) {
        str2 = "center";
        str3 = "middle";
        if ("middle" !== verticalAlign) {
          str2 = verticalAlign;
        }
        textAlignVertical = str2;
      }
      obj1.textAlignVertical = textAlignVertical;
      obj1.textDecorationLine = textDecorationLine;
      obj1.lineHeight = lineHeight;
      obj1.letterSpacing = letterSpacing;
      obj1.hasLetterSpacing = undefined !== letterSpacing;
      obj1.style = tmp18;
      obj1.numberOfLines = lineClamp;
      if (ellipsizeMode == null) {
        ellipsizeMode = "tail";
      }
      obj1.ellipsizeMode = ellipsizeMode;
      tmp24 = obj1;
      tmp25 = merged;
      merged1 = Object.assign(merged);
      return tmp19(tmp21, obj1);
    } else {
      if (flag2) {
        NativeText = tmp4(tmp5[15]).NativeText;
      } else {
        NativeText = flag ? closure_9 : Text;
      }
      obj9 = { style: null, numberOfLines: null, ellipsizeMode: null, allowFontScaling: true, ref: null };
      obj9.style = items;
      obj9.numberOfLines = lineClamp;
      str = ellipsizeMode;
      tmp12 = jsx;
      if (ellipsizeMode == null) {
        str = "tail";
      }
      obj9.ellipsizeMode = str;
      obj9.ref = ref;
      tmp13 = obj9;
      tmp14 = merged;
      merged2 = Object.assign(merged);
      obj9.children = children;
      return tmp12(NativeText, obj9);
    }
  }
}
let closure_3 = ["color", "fontSize", "fontFamily", "fontWeight", "fontStyle", "textAlign", "textAlignVertical", "verticalAlign", "textDecorationLine", "lineHeight", "letterSpacing"];
get_ActivityIndicator = fn(17);
const Text2 = get_ActivityIndicator.Text;
let closure_7 = get_ActivityIndicator.unstable_TextAncestorContext;
const Fonts = fn(1083).Fonts;
const jsx = fn(21).jsx;
let closure_9 = module_1652.createAnimatedComponent(Text2);
let items = [{ includeFontPadding: true }];
let closure_11 = [];
const keys = Object.keys(nativeDefault.colors);
let closure_12 = Object.fromEntries(keys.map((item) => {
  items = [_modDef12.kebabCase(item), item];
  return items;
}));
({ PRIMARY_NORMAL: obj2[400], PRIMARY_MEDIUM: obj2[500], PRIMARY_SEMIBOLD: obj2[600], PRIMARY_BOLD: obj2[700], PRIMARY_EXTRABOLD: obj2[800] } = Fonts);
let obj3 = { 700: null };
obj3[700] = Fonts.GINTO_DISCORD_NORD_BOLD;
({ CODE_NORMAL: obj4[400], CODE_BOLD: obj4[700] } = Fonts);
({ GINTO_DISCORD_NORD_BOLD_ITALIC: obj5[700], GINTO_DISCORD_NORD_BLACK_ITALIC: obj5[900] } = Fonts);
const dependencyMap = { nitro: obj3, primary: { 400: null, 500: null, 600: null, 700: null, 800: null }, code: { 400: null, 700: null } };
let closure_14 = { nitro: { 700: null, 900: null } };
const TextVariantsFlat = fn(5748).TextVariantsFlat;
const mapped = TextVariantsFlat.map((name) => {
  if ("code" === name.name) {
    return null;
  } else {
    const letterSpacing = name.letterSpacing;
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
      if (closure_14[fontStack] != null) {
        tmp6 = tmp4[str1];
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
      if (null != letterSpacing) {
        result = letterSpacing / 10;
      }
      obj2.letterSpacing = result;
      items[1] = obj2;
      return items;
    }
  }
});
const fromEntriesResult = Object.fromEntries(mapped.filter(Boolean));
const useManaTextMigrationHighlight = fn(5749);
let result = useManaTextMigrationHighlight.withManaTextMigrationHighlight(fromEntriesResult);
const createStyles = fn(5141);
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
const size = fn(2);
const result1 = size.fileFinishedImporting("design/components/Text/native/Text.tsx");

export const TextStyleSheet = result;
export { Text };
export function Heading(ref) {
  const obj = { ref: ref.ref };
  const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
  obj.accessibilityRole = "header";
  return <Text ref={ref.ref} />;
}