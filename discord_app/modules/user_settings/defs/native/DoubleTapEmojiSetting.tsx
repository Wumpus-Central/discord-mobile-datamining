// discord_app/modules/user_settings/defs/native/DoubleTapEmojiSetting.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import EmojiConstants from "../../../emojis/EmojiConstants.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import EmojiDefault from "../../../emojis/native/Emoji.tsx";
import DoubleTapToReactUtils from "../../../double_tap_to_react/native/DoubleTapToReactUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_2, constants, emoji;

let obj2;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const AnalyticEvents = Constants.AnalyticEvents;
const EmojiIntention = EmojiConstants.EmojiIntention;
const jsx = Fragment.jsx;
let obj = { textEmoji: obj2 };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      let tmp7;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(6);
      const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
      const setting = DoubleTapReactionEmoji.useSetting();
      if (cResult[0] !== setting) {
        const tmpResult = DoubleTapToReactUtils;
        const result = tmpResult.disambiguatedEmojiFromSettingsValue(setting);
        cResult[0] = setting;
        cResult[1] = result;
        tmp5 = result;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult2 = DoubleTapToReactUtils;
        const fallbackDoubleTapDisambiguatedEmoji = tmpResult2.getFallbackDoubleTapDisambiguatedEmoji();
        cResult[2] = fallbackDoubleTapDisambiguatedEmoji;
        tmp7 = fallbackDoubleTapDisambiguatedEmoji;
      } else {
        tmp7 = cResult[2];
      }
      if (null == tmp5) {
        if (null != tmp7) {
          let tmp14;
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp17 = <closure_8 emoji={tmp7} />;
            cResult[3] = tmp17;
            tmp14 = tmp17;
          } else {
            tmp14 = cResult[3];
          }
          tmp9 = tmp14;
        }
        return tmp9;
      }
      tmp9 = null;
      if (null != tmp5) {
        let tmp10;
        if (cResult[4] !== tmp5) {
          const tmp13 = <closure_8 emoji={tmp5} />;
          cResult[4] = tmp5;
          cResult[5] = tmp13;
          tmp10 = tmp13;
        } else {
          tmp10 = cResult[5];
        }
        tmp9 = tmp10;
      }
    }
  : () => {
      let tmp4;
      const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
      const setting = DoubleTapReactionEmoji.useSetting();
      const obj = DoubleTapToReactUtils;
      const result = obj.disambiguatedEmojiFromSettingsValue(setting);
      const obj2 = DoubleTapToReactUtils;
      const fallbackDoubleTapDisambiguatedEmoji = obj2.getFallbackDoubleTapDisambiguatedEmoji();
      if (null == result) {
        if (null != fallbackDoubleTapDisambiguatedEmoji) {
          tmp4 = <closure_8 emoji={fallbackDoubleTapDisambiguatedEmoji} />;
        }
        return tmp4;
      }
      tmp4 = null;
      if (null != result) {
        tmp4 = <closure_8 emoji={result} />;
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (emoji) => {
      let url;
      const obj = react2;
      const cResult = obj.c(8);
      emoji = emoji.emoji;
      const tmp3 = closure_7();
      if (cResult[0] === emoji.id) {
        let tmp4;
        let tmp7;
        if (cResult[1] === emoji.url) {
          tmp4 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          size = { height: 24, width: 24 };
          cResult[3] = size;
          tmp7 = size;
        } else {
          tmp7 = cResult[3];
        }
        let str2 = "";
        if (null == emoji.id) {
          str2 = emoji.surrogates;
        }
        if (cResult[4] === tmp4) {
          if (cResult[5] === tmp3.textEmoji) {
            let tmp9;
            if (cResult[6] === str2) {
              tmp9 = cResult[7];
            }
            return tmp9;
          }
        }
        const tmp12 = jsx(EmojiDefault, {
          fastImageStyle: tmp7,
          src: tmp4,
          name: str2,
          adjustsFontSizeToFit: true,
          textEmojiStyle: tmp3.textEmoji,
        });
        cResult[4] = tmp4;
        cResult[5] = tmp3.textEmoji;
        cResult[6] = str2;
        cResult[7] = tmp12;
        tmp9 = tmp12;
      }
      if (null != emoji.id) {
        const obj4 = { id: emoji.id, size: 24, animated: false };
        const obj2 = AvatarUtilsDefault;
        url = obj2.getEmojiURL(obj4);
      } else {
        url = emoji.url;
      }
      cResult[0] = emoji.id;
      cResult[1] = emoji.url;
      cResult[2] = url;
      tmp4 = url;
    }
  : (emoji) => {
      let url;
      emoji = emoji.emoji;
      const tmp = closure_7();
      if (null != emoji.id) {
        const obj2 = { id: emoji.id, size: 24, animated: false };
        const obj = AvatarUtilsDefault;
        url = obj.getEmojiURL(obj2);
      } else {
        url = emoji.url;
      }
      let str = "";
      EmojiDefault;
      if (null == emoji.id) {
        str = emoji.surrogates;
      }
      return (
        <tmp5
          fastImageStyle={{ height: 24, width: 24 }}
          src={url}
          name={str}
          adjustsFontSizeToFit
          textEmojiStyle={tmp.textEmoji}
        />
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const useIsDisabled = () => {
  const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
  let flag = DoubleTapReactionEmoji.useSetting().disableDoubleTap;
  if (flag == null) {
    flag = false;
  }
  return flag;
};
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(2);
      const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
      const setting = DoubleTapReactionEmoji.useSetting();
      if (cResult[0] !== setting) {
        const tmpResult = DoubleTapToReactUtils;
        const result = tmpResult.disambiguatedEmojiFromSettingsValue(setting);
        cResult[0] = setting;
        cResult[1] = result;
        tmp5 = result;
      } else {
        tmp5 = cResult[1];
      }
      let combined = null;
      if (null != tmp5) {
        const _HermesInternal = HermesInternal;
        combined = ":" + tmp5.name + ":";
      }
      return combined;
    }
  : () => {
      const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
      const setting = DoubleTapReactionEmoji.useSetting();
      const obj = DoubleTapToReactUtils;
      const result = obj.disambiguatedEmojiFromSettingsValue(setting);
      let combined = null;
      if (null != result) {
        const _HermesInternal = HermesInternal;
        combined = ":" + result.name + ":";
      }
      return combined;
    };
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const obj3 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["96WKNB"]);
  },
  parent: MobileUserSettings.CHAT,
  useTrailing: tmp3,
  onPress: function onPressSetting() {
    let closure_0;
    const tmp = require("openEmojiPickerActionSheet");
    let obj = {
      pickerIntention: EmojiIntention.DEFAULT_REACT_EMOJI,
      onPressEmoji: function () {
        return closure_0(...arguments);
      },
      startExpanded: true,
    };
    const openEmojiPickerActionSheet = tmp.openEmojiPickerActionSheet;
    _require = _asyncToGenerator(async (emoji) => {
      let closure_1;
      let c3 = 0;
      let c4 = 0;
      return (async (arg0) => {
        if (constants === 2) {
          constants = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            constants = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                constants = 3;
                throw value;
              } else if (arg0 === 2) {
                constants = 3;
                return { value, done: true };
              } else {
                closure_2 = tmp4;
                ({ id: obj7.emoji_id, name: obj7.emoji_name, animated: obj7.emoji_animated } = emoji);
                const obj4 = {
                  emoji_id: null,
                  emoji_name: null,
                  emoji_animated: null,
                  recommended: false,
                  location: tmp(closure_2[16]).USER_SETTINGS,
                };
                const track = tmp(closure_2[15]).track;
                const DOUBLE_TAP_REACT_EMOJI_UPDATED = constants.DOUBLE_TAP_REACT_EMOJI_UPDATED;
                tmp(closure_2[15]);
                track(DOUBLE_TAP_REACT_EMOJI_UPDATED, obj4);
                const DoubleTapReactionEmoji = emoji(closure_2[10]).DoubleTapReactionEmoji;
                const obj5 = { emojiId: null, emojiName: null, animated: null, disableDoubleTap: false };
                ({ id: obj8.emojiId, name: obj8.emojiName, animated: obj8.animated } = emoji);
                c3 = 1;
                constants = 1;
                const obj6 = { value: DoubleTapReactionEmoji.updateSetting(obj5), done: false };
                return obj6;
              }
            } else if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 === 2) {
              constants = 3;
              return { value, done: true };
            } else {
              const obj16 = { emoji };
              const obj = emoji(closure_2[17]);
              const result = obj.showDoubleTapEmojiUpdatedToast(obj16);
              constants = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp11) {
            constants = 3;
            throw tmp11;
          }
        }
      })();
    });
    let result = openEmojiPickerActionSheet(obj);
  },
  withArrow: true,
  useDescription: tmp5,
  useIsDisabled,
  usePredicate: () => {
    if (typeof fn === "function") {
      const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
      let flag = DoubleTapReactionEmoji.useSetting().disableDoubleTap;
      if (flag == null) {
        flag = false;
      }
      return !flag;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
};
const pressable = SettingBuilders.createPressable(obj3);
let size = size_mod;
const result2 = size.fileFinishedImporting("modules/user_settings/defs/native/DoubleTapEmojiSetting.tsx");

export default pressable;
