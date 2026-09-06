// === Module 16199: GuildMFAWarning ===

// Module 16199 (GuildMFAWarning)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10119 */;
import _modDef16200 from "module_16200" /* 16200 */;
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
let closure_10 = async function _handlePress(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          c2 = 1;
          c3 = 1;
          const obj1 = { value: require("asyncRequireImpl")(paths[8], paths.paths), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        closure_128_0 = value.default;
        obj = closure_129_1(closure_129_2[10]);
        obj.openURL(closure_128_0.getArticleURL(closure_129_5.SETTING_UP_TWO_FACTOR));
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp17) {
      c3 = tmp;
      throw tmp17;
    }
  }
};
const Image = fn(17).Image;
const Constants = fn(1074);
({ HelpdeskArticles: hasOwnProperty, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { MFAWarning: null, MFAWarningIcon: null, MFAWarningLink: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 10, alignItems: "center" };
createStyles.MFAWarning = createStyles;
createStyles.MFAWarningIcon = { marginVertical: 10, width: 98, height: 53 };
createStyles.MFAWarningLink = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontFamily: Fonts.PRIMARY_SEMIBOLD };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildMFAWarning.tsx");

export default function GuildMFAWarning() {
  const tmp = closure_8();
  let obj = { accessibilityRole: "button", style: tmp.MFAWarning, onPress: handlePress, children: null };
  obj = { style: tmp.MFAWarningIcon, source: _modDef16200 };
  const items = [timestampProducer(Image, obj), ];
  obj = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl = util.intl;
  const items1 = [intl.string(util.t.ZIf8Ag), ];
  const obj1 = { style: tmp.MFAWarningLink, children: null };
  const intl2 = util.intl;
  const items2 = [" ", intl2.string(util.t.hvVgAZ)];
  obj1.children = items2;
  items1[1] = React5(native.LegacyText, obj1);
  obj.children = items1;
  items[1] = React5(Text_Text.Text, obj);
  obj.children = items;
  return React5(Pressables.PressableOpacity, obj);
};
export const getScaledGuildMFAWarningHeight = function getScaledGuildMFAWarningHeight(fontScale) {
  return 83 + 5 * useScaledTextLineHeight.scaleTextLineHeight("text-xs/medium", fontScale) + 10 + 10;
};