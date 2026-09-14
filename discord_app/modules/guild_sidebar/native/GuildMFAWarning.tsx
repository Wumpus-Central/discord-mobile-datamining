// discord_app/modules/guild_sidebar/native/GuildMFAWarning.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import useScaledTextLineHeight from "../../screen/native/useScaledTextLineHeight.android.tsx";
import _modDef16297 from "../../../../_runtime/metro/16297__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
const createStyles = fn(4636);
let obj2 = {
  MFAWarning: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 10, alignItems: "center" },
  MFAWarningIcon: { marginVertical: 10, width: 98, height: 53 },
  MFAWarningLink: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 10, alignItems: "center" };
obj2.MFAWarningLink = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontFamily: Fonts.PRIMARY_SEMIBOLD };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildMFAWarning.tsx");

export default function GuildMFAWarning() {
  const tmp = closure_8();
  const obj = { accessibilityRole: "button", style: tmp.MFAWarning, onPress: handlePress, children: null };
  const items = [timestampProducer(Image, { style: tmp.MFAWarningIcon, source: _modDef16297 })];
  const obj3 = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl = util.intl;
  const items1 = [intl.string(util.t.ZIf8Ag)];
  const obj4 = { style: tmp.MFAWarningLink, children: null };
  const intl2 = util.intl;
  const items2 = [" ", intl2.string(util.t.hvVgAZ)];
  obj4.children = items2;
  items1[1] = React5(native.LegacyText, obj4);
  obj3.children = items1;
  items[1] = React5(Text_Text.Text, obj3);
  obj.children = items;
  return React5(Pressables.PressableOpacity, obj);
}
export const getScaledGuildMFAWarningHeight = function getScaledGuildMFAWarningHeight(fontScale) {
  return 83 + 5 * useScaledTextLineHeight.scaleTextLineHeight("text-xs/medium", fontScale) + 10 + 10;
};
