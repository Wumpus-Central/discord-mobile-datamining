// discord_app/modules/guild_sidebar/native/GuildMFAWarning.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import map from "../../screen/native/useScaledTextLineHeight.android.tsx";
import registerAssetDefault from "../../../../_runtime/15701_registerAsset.js";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { Image } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function handlePress() {
  const self = this;
  const apply = _handlePress.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handlePress() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === paths) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp5;
            let articleURL = tmp2;
            articleURL = undefined;
            paths = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_0(paths[9])(paths[8], paths.paths);
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          articleURL = arg1.default;
          obj = callback(paths[10]);
          obj.openURL(articleURL.getArticleURL(constants.SETTING_UP_TWO_FACTOR));
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp17) {
        c3 = tmp;
        throw tmp17;
      }
    }
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
noopAll;
({ HelpdeskArticles: c5, Fonts } = ME);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { MFAWarning: null, MFAWarningIcon: null, MFAWarningLink: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, padding: 10, alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginVertical: 10, width: 98, height: 53 };
createCacheKey[2] = { color: ThemesDefault.unsafe_rawColors.BLUE_345, fontFamily: Fonts.PRIMARY_SEMIBOLD };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: ThemesDefault.unsafe_rawColors.BLUE_345, fontFamily: Fonts.PRIMARY_SEMIBOLD };
const result = require("set").fileFinishedImporting("modules/guild_sidebar/native/GuildMFAWarning.tsx");

export default function GuildMFAWarning() {
  const tmp = callback4();
  let obj = { accessibilityRole: "button", style: tmp.MFAWarning, onPress: handlePress, children: null };
  obj = { style: tmp.MFAWarningIcon, source: registerAssetDefault };
  const items = [callback2(Image, obj), ];
  obj = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl = getSystemLocale.intl;
  const items1 = [intl.string(getSystemLocale.t.ZIf8Ag), ];
  obj1 = { style: tmp.MFAWarningLink, children: null };
  const intl2 = getSystemLocale.intl;
  const items2 = [" ", intl2.string(getSystemLocale.t.hvVgAZ)];
  obj1[1] = items2;
  items1[1] = callback3(Button.LegacyText, obj1);
  obj[2] = items1;
  items[1] = callback3(Text.Text, obj);
  obj[3] = items;
  return callback3(PressableBase.PressableOpacity, obj);
};
export const getScaledGuildMFAWarningHeight = function getScaledGuildMFAWarningHeight(fontScale) {
  return 83 + 5 * map.scaleTextLineHeight("text-xs/medium", fontScale) + 10 + 10;
};