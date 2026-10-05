// discord_app/modules/guild_sidebar/native/GuildMFAWarning.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import useScaledTextLineHeight from "../../screen/native/useScaledTextLineHeight.android.tsx";
import AssetRegistryDefault from "../../../../_runtime/16125_AssetRegistry.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let c2, c3;

let Fonts;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function handlePress() {
  return obj(...arguments);
}
let obj = function _handlePress() {
  let paths;
  obj = _asyncToGenerator(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let articleURL;
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
            let closure_1 = tmp4;
            articleURL = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: require("asyncRequire")(paths[8], paths.paths), done: false };
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
          articleURL = value.default;
          obj = closure_129_1(closure_129_2[10]);
          obj.openURL(articleURL.getArticleURL(closure_129_5.SETTING_UP_TWO_FACTOR));
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp16) {
        c3 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
const Image = react_native.Image;
({ HelpdeskArticles: hasOwnProperty, Fonts } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
obj = { MFAWarning: obj2, MFAWarningIcon: { marginVertical: 10, width: 98, height: 53 }, MFAWarningLink: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 10, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontFamily: Fonts.PRIMARY_SEMIBOLD };
let closure_8 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      let items1;
      let items2;
      let tmp10;
      let tmp12;
      let tmp14;
      let tmp5;
      obj = react2;
      const cResult = obj.c(10);
      const tmp4 = closure_8();
      const MFAWarning = tmp4.MFAWarning;
      if (cResult[0] !== tmp4.MFAWarningIcon) {
        const obj2 = { style: tmp4.MFAWarningIcon, source: AssetRegistryDefault };
        const tmp9 = metroRequire(Image, obj2);
        cResult[0] = tmp4.MFAWarningIcon;
        cResult[1] = tmp9;
        tmp5 = tmp9;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t.ZIf8Ag);
        cResult[2] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[2];
      }
      const MFAWarningLink = tmp4.MFAWarningLink;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl3.intl;
        const stringResult1 = intl2.string(intl3.t.hvVgAZ);
        cResult[3] = stringResult1;
        tmp12 = stringResult1;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] !== tmp4.MFAWarningLink) {
        const obj3 = { variant: "text-xs/medium", color: "text-default", children: items };
        items = [tmp10];
        const Text = Text_Text.Text;
        const obj4 = { style: MFAWarningLink, children: items1 };
        items1 = [" ", tmp12];
        items[1] = metroImportDefault(native.LegacyText, obj4);
        const tmp16 = metroImportDefault(Text, obj3);
        cResult[4] = tmp4.MFAWarningLink;
        cResult[5] = tmp16;
        tmp14 = tmp16;
      } else {
        tmp14 = cResult[5];
      }
      if (cResult[6] === tmp4.MFAWarning) {
        if (cResult[7] === tmp5) {
          let tmp17;
          if (cResult[8] === tmp14) {
            tmp17 = cResult[9];
          }
          return tmp17;
        }
      }
      const obj5 = { accessibilityRole: "button", style: MFAWarning, onPress: handlePress, children: items2 };
      items2 = [tmp5, tmp14];
      const tmp18 = metroImportDefault(Pressables.PressableOpacity, obj5);
      cResult[6] = tmp4.MFAWarning;
      cResult[7] = tmp5;
      cResult[8] = tmp14;
      cResult[9] = tmp18;
      tmp17 = tmp18;
    }
  : () => {
      let items;
      let items1;
      let items2;
      const tmp = closure_8();
      obj = { accessibilityRole: "button", style: tmp.MFAWarning, onPress: handlePress, children: items };
      const obj2 = { style: tmp.MFAWarningIcon, source: AssetRegistryDefault };
      const PressableOpacity = Pressables.PressableOpacity;
      items = [metroRequire(Image, obj2)];
      const obj3 = { variant: "text-xs/medium", color: "text-default", children: items1 };
      const Text = Text_Text.Text;
      const intl = intl3.intl;
      items1 = [intl.string(intl3.t.ZIf8Ag)];
      const obj4 = { style: tmp.MFAWarningLink, children: items2 };
      const LegacyText = native.LegacyText;
      const intl2 = intl3.intl;
      items2 = [" ", intl2.string(intl3.t.hvVgAZ)];
      items1[1] = metroImportDefault(LegacyText, obj4);
      items[1] = metroImportDefault(Text, obj3);
      return metroImportDefault(PressableOpacity, obj);
    };
const result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildMFAWarning.tsx");

export default tmp6;
export const getScaledGuildMFAWarningHeight = function getScaledGuildMFAWarningHeight(fontScale) {
  obj = useScaledTextLineHeight;
  return 83 + 5 * obj.scaleTextLineHeight("text-xs/medium", fontScale) + 10 + 10;
};
