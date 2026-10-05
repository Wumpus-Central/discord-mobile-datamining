// === Module 16124: GuildMFAWarning ===

// Module 16124 (GuildMFAWarning)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10723 */;
import _modDef16125 from "module_16125" /* 16125 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function handlePress() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _handlePress() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          c2 = 1;
          c3 = 1;
          const obj4 = { value: require("asyncRequireImpl")(paths[8], paths.paths), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        closure_128_0 = value.default;
        closure_129_1(closure_129_2[10]).openURL(closure_128_0.getArticleURL(closure_129_5.SETTING_UP_TWO_FACTOR));
        c3 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp17) {
      c3 = tmp;
      throw tmp17;
    }
  }
};
const Image = fn(17).Image;
const Constants = fn(1085);
({ HelpdeskArticles: hasOwnProperty, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { MFAWarning: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 10, alignItems: "center" }, MFAWarningIcon: { marginVertical: 10, width: 98, height: 53 }, MFAWarningLink: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 10, alignItems: "center" };
obj2.MFAWarningLink = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontFamily: Fonts.PRIMARY_SEMIBOLD };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontFamily: Fonts.PRIMARY_SEMIBOLD };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildMFAWarning.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(10);
  const tmp4 = closure_8();
  if (cResult[0] !== tmp4.MFAWarningIcon) {
    const obj2 = { style: tmp4.MFAWarningIcon, source: _modDef16125 };
    const tmp9 = timestampProducer(Image, obj2);
    cResult[0] = tmp4.MFAWarningIcon;
    cResult[1] = tmp9;
    let tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.ZIf8Ag);
    cResult[2] = stringResult;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.hvVgAZ);
    cResult[3] = stringResult1;
    let tmp12 = stringResult1;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== tmp4.MFAWarningLink) {
    const obj3 = { variant: "text-xs/medium", color: "text-default", children: null };
    const items = [tmp10, ];
    const obj4 = { style: tmp4.MFAWarningLink, children: null };
    const items1 = [" ", tmp12];
    obj4.children = items1;
    items[1] = React5(native.LegacyText, obj4);
    obj3.children = items;
    const tmp16 = React5(Text_Text.Text, obj3);
    cResult[4] = tmp4.MFAWarningLink;
    cResult[5] = tmp16;
    let tmp14 = tmp16;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === tmp4.MFAWarning) {
    if (cResult[7] === tmp5) {
      if (cResult[8] === tmp14) {
        let tmp17 = cResult[9];
      }
      return tmp17;
    }
  }
  const obj5 = { accessibilityRole: "button", style: tmp4.MFAWarning, onPress: handlePress, children: null };
  const items2 = [tmp5, tmp14];
  obj5.children = items2;
  const tmp18 = React5(Pressables.PressableOpacity, obj5);
  cResult[6] = tmp4.MFAWarning;
  cResult[7] = tmp5;
  cResult[8] = tmp14;
  cResult[9] = tmp18;
  tmp17 = tmp18;
}) : (() => {
  const tmp = closure_8();
  const obj = { accessibilityRole: "button", style: tmp.MFAWarning, onPress: handlePress, children: null };
  const items = [timestampProducer(Image, { style: tmp.MFAWarningIcon, source: _modDef16125 }), ];
  const obj3 = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl = util.intl;
  const items1 = [intl.string(util.t.ZIf8Ag), ];
  const obj4 = { style: tmp.MFAWarningLink, children: null };
  const intl2 = util.intl;
  const items2 = [" ", intl2.string(util.t.hvVgAZ)];
  obj4.children = items2;
  items1[1] = React5(native.LegacyText, obj4);
  obj3.children = items1;
  items[1] = React5(Text_Text.Text, obj3);
  obj.children = items;
  return React5(Pressables.PressableOpacity, obj);
});
export const getScaledGuildMFAWarningHeight = function getScaledGuildMFAWarningHeight(fontScale) {
  return 83 + 5 * useScaledTextLineHeight.scaleTextLineHeight("text-xs/medium", fontScale) + 10 + 10;
};