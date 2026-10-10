// discord_app/modules/guild_sidebar/native/GuildMFAWarning.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import useScaledTextLineHeight from "../../screen/native/useScaledTextLineHeight.android.tsx";
import _modDef16613 from "../../../../_runtime/metro/16613__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function handlePress() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = async function _handlePress() {
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
      return { value: "IconComponent", done: "+51" };
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
          const obj4 = { value: require("asyncRequireImpl")(paths[7], paths.paths), done: false };
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
        closure_129_1(closure_129_2[9]).openURL(closure_128_0.getArticleURL(closure_129_4.SETTING_UP_TWO_FACTOR));
        c3 = 3;
        return { value: "IconComponent", done: "+51" };
      }
    } catch (tmp17) {
      c3 = tmp;
      throw tmp17;
    }
  }
};
const Constants = fn(1085);
({ HelpdeskArticles: closure_4, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  MFAWarning: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 10, alignItems: "center" },
  MFAWarningIcon: { marginVertical: 10, width: 98, height: 53 },
  MFAWarningLink: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 10, alignItems: "center" };
obj2.MFAWarningLink = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontFamily: Fonts.PRIMARY_SEMIBOLD };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontFamily: Fonts.PRIMARY_SEMIBOLD };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildMFAWarning.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildMFAWarning() {
      const cResult = c.c(10);
      const tmp4 = closure_7();
      if (cResult[0] !== tmp4.MFAWarningIcon) {
        const obj2 = { style: tmp4.MFAWarningIcon, source: _modDef16613 };
        const tmp9 = hasOwnProperty(FastImageDefault, obj2);
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
        const items = [tmp10];
        const obj4 = { style: tmp4.MFAWarningLink, children: null };
        const items1 = [" ", tmp12];
        obj4.children = items1;
        items[1] = timestampProducer(native.LegacyText, obj4);
        obj3.children = items;
        const tmp16 = timestampProducer(Text_Text.Text, obj3);
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
      const tmp18 = timestampProducer(Pressables.PressableOpacity, obj5);
      cResult[6] = tmp4.MFAWarning;
      cResult[7] = tmp5;
      cResult[8] = tmp14;
      cResult[9] = tmp18;
      tmp17 = tmp18;
    }
  : function GuildMFAWarning() {
      const tmp = closure_7();
      const obj = { accessibilityRole: "button", style: tmp.MFAWarning, onPress: handlePress, children: null };
      const obj2 = { style: tmp.MFAWarningIcon, source: _modDef16613 };
      const items = [hasOwnProperty(FastImageDefault, obj2)];
      const obj3 = { variant: "text-xs/medium", color: "text-default", children: null };
      const intl = util.intl;
      const items1 = [intl.string(util.t.ZIf8Ag)];
      const obj4 = { style: tmp.MFAWarningLink, children: null };
      const intl2 = util.intl;
      const items2 = [" ", intl2.string(util.t.hvVgAZ)];
      obj4.children = items2;
      items1[1] = timestampProducer(native.LegacyText, obj4);
      obj3.children = items1;
      items[1] = timestampProducer(Text_Text.Text, obj3);
      obj.children = items;
      return timestampProducer(Pressables.PressableOpacity, obj);
    };
export const getScaledGuildMFAWarningHeight = function getScaledGuildMFAWarningHeight(fontScale) {
  return 83 + 5 * useScaledTextLineHeight.scaleTextLineHeight("text-xs/medium", fontScale) + 10 + 10;
};
