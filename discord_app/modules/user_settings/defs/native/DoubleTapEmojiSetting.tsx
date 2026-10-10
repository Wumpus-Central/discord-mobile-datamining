// === Module 16278: DoubleTapEmojiSetting ===

// Module 16278 (DoubleTapEmojiSetting)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import UserSettings from "UserSettings" /* 2041 */;
import EmojiDefault from "Emoji" /* 6819 */;
import DoubleTapToReactUtils from "DoubleTapToReactUtils" /* 7986 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const EmojiIntention = fn(1393).EmojiIntention;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { textEmoji: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT } };
let closure_7 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsEmoji(emoji) {
  const cResult = c.c(8);
  emoji = emoji.emoji;
  const tmp3 = closure_7();
  if (cResult[0] === emoji.id) {
    if (cResult[1] === emoji.url) {
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const size = { height: 24, width: 24 };
        cResult[3] = size;
        let tmp7 = size;
      } else {
        tmp7 = cResult[3];
      }
      let str2 = "";
      if (null == emoji.id) {
        str2 = emoji.surrogates;
      }
      if (cResult[4] === cResult[2]) {
        if (cResult[5] === tmp3.textEmoji) {
          if (cResult[6] === str2) {
            let tmp9 = cResult[7];
          }
          return tmp9;
        }
      }
      const obj3 = { fastImageStyle: tmp7, src: cResult[2], name: str2, adjustsFontSizeToFit: true, textEmojiStyle: tmp3.textEmoji };
      const tmp12 = jsx(EmojiDefault, { fastImageStyle: tmp7, src: cResult[2], name: str2, adjustsFontSizeToFit: true, textEmojiStyle: tmp3.textEmoji });
      cResult[4] = cResult[2];
      cResult[5] = tmp3.textEmoji;
      cResult[6] = str2;
      cResult[7] = tmp12;
      tmp9 = tmp12;
    }
  }
  if (null != emoji.id) {
    const obj4 = { id: emoji.id, size: 24, animated: false };
    let url = AvatarUtilsDefault.getEmojiURL(obj4);
  } else {
    url = emoji.url;
  }
  cResult[0] = emoji.id;
  cResult[1] = emoji.url;
  cResult[2] = url;
}) : (function SettingsEmoji(emoji) {
  emoji = emoji.emoji;
  if (null != emoji.id) {
    const obj2 = { id: emoji.id, size: 24, animated: false };
    let url = AvatarUtilsDefault.getEmojiURL(obj2);
  } else {
    url = emoji.url;
  }
  const obj3 = { fastImageStyle: { height: 24, width: 24 }, src: url, name: null, adjustsFontSizeToFit: true, textEmojiStyle: null };
  let str = "";
  const tmp = closure_7();
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj3.name = str;
  obj3.textEmojiStyle = tmp.textEmoji;
  return jsx(EmojiDefault, { fastImageStyle: { height: 24, width: 24 }, src: url, name: null, adjustsFontSizeToFit: true, textEmojiStyle: null });
});
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
function useDoubleTapDisabled() {
  const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
  let flag = DoubleTapReactionEmoji.useSetting().disableDoubleTap;
  if (flag == null) {
    flag = false;
  }
  return flag;
}
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDoubleTapEmojiSettingTrailing() {
  const cResult = c.c(6);
  const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.useSetting();
  if (cResult[0] !== setting) {
    const result = DoubleTapToReactUtils.disambiguatedEmojiFromSettingsValue(setting);
    cResult[0] = setting;
    cResult[1] = result;
    let tmp5 = result;
    const tmpResult = DoubleTapToReactUtils;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fallbackDoubleTapDisambiguatedEmoji = DoubleTapToReactUtils.getFallbackDoubleTapDisambiguatedEmoji();
    cResult[2] = fallbackDoubleTapDisambiguatedEmoji;
    let tmp7 = fallbackDoubleTapDisambiguatedEmoji;
    const tmpResult2 = DoubleTapToReactUtils;
  } else {
    tmp7 = cResult[2];
  }
  if (null == tmp5) {
    if (null != tmp7) {
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { emoji: tmp7 };
        const tmp17 = <closure_8 emoji={tmp7} />;
        cResult[3] = tmp17;
      }
    }
  }
  if (null == tmp5) {
    return null;
  } else if (cResult[4] !== tmp5) {
    const obj3 = { emoji: tmp5 };
    const tmp12 = <closure_8 emoji={tmp5} />;
    cResult[4] = tmp5;
    cResult[5] = tmp12;
  }
}) : (function useDoubleTapEmojiSettingTrailing() {
  const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.useSetting();
  const result = DoubleTapToReactUtils.disambiguatedEmojiFromSettingsValue(setting);
  const fallbackDoubleTapDisambiguatedEmoji = DoubleTapToReactUtils.getFallbackDoubleTapDisambiguatedEmoji();
  if (null == result) {
    if (null != fallbackDoubleTapDisambiguatedEmoji) {
      const obj3 = { emoji: fallbackDoubleTapDisambiguatedEmoji };
      let tmp4 = <closure_8 emoji={fallbackDoubleTapDisambiguatedEmoji} />;
    }
    return tmp4;
  }
  tmp4 = null;
  if (null != result) {
    const obj4 = { emoji: result };
    tmp4 = <closure_8 emoji={result} />;
  }
});
ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const SettingBuilders = fn(10663);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDoubleTapEmojiDescription() {
  const cResult = c.c(2);
  const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.useSetting();
  if (cResult[0] !== setting) {
    const result = DoubleTapToReactUtils.disambiguatedEmojiFromSettingsValue(setting);
    cResult[0] = setting;
    cResult[1] = result;
    let tmp5 = result;
    const tmpResult = DoubleTapToReactUtils;
  } else {
    tmp5 = cResult[1];
  }
  let combined = null;
  if (null != tmp5) {
    const _HermesInternal = HermesInternal;
    combined = ":" + tmp5.name + ":";
  }
  return combined;
}) : (function useDoubleTapEmojiDescription() {
  const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.useSetting();
  const result = DoubleTapToReactUtils.disambiguatedEmojiFromSettingsValue(setting);
  let combined = null;
  if (null != result) {
    const _HermesInternal = HermesInternal;
    combined = ":" + result.name + ":";
  }
  return combined;
});
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["96WKNB"]);
  },
  parent: fn(7992).MobileUserSettings.CHAT,
  useTrailing: tmp3,
  onPress: function onPressSetting() {
    let obj2 = { pickerIntention: EmojiIntention.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
    _require = asyncGeneratorStep(async (arg0) => {
      if (constants === 2) {
        constants = 3;
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
          constants = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 === 2) {
              constants = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_129_0 = closure_0;
              const obj4 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: null };
              ({ id: obj8.emoji_id, name: obj8.emoji_name, animated: obj8.emoji_animated } = closure_0);
              obj4.location = tmp2(tmp5[16]).USER_SETTINGS;
              tmp2(tmp5[15]).track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj4);
              const DoubleTapReactionEmoji = closure_0(tmp5[10]).DoubleTapReactionEmoji;
              ({ id: obj9.emojiId, name: obj9.emojiName, animated: obj9.animated } = closure_0);
              c3 = 1;
              constants = 1;
              const obj6 = { value: DoubleTapReactionEmoji.updateSetting({ emojiId: null, emojiName: null, animated: null, disableDoubleTap: false }), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            constants = 3;
            throw value;
          } else if (arg0 === 2) {
            constants = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else {
            const obj17 = { emoji: closure_129_0 };
            const result = closure_0(tmp5[17]).showDoubleTapEmojiUpdatedToast(obj17);
            constants = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp12) {
          constants = tmp;
          throw tmp12;
        }
      }
    });
    obj2.onPressEmoji = function onPressEmoji() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    let result = require("openEmojiPickerActionSheet").openEmojiPickerActionSheet(obj2);
  },
  withArrow: true,
  useDescription: ReactCompilerGating.isReactCompilerEnabled() ? (function useDoubleTapEmojiDescription() {
    const cResult = c.c(2);
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    if (cResult[0] !== setting) {
      const result = DoubleTapToReactUtils.disambiguatedEmojiFromSettingsValue(setting);
      cResult[0] = setting;
      cResult[1] = result;
      let tmp5 = result;
      const tmpResult = DoubleTapToReactUtils;
    } else {
      tmp5 = cResult[1];
    }
    let combined = null;
    if (null != tmp5) {
      const _HermesInternal = HermesInternal;
      combined = ":" + tmp5.name + ":";
    }
    return combined;
  }) : (function useDoubleTapEmojiDescription() {
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    const result = DoubleTapToReactUtils.disambiguatedEmojiFromSettingsValue(setting);
    let combined = null;
    if (null != result) {
      const _HermesInternal = HermesInternal;
      combined = ":" + result.name + ":";
    }
    return combined;
  }),
  useIsDisabled: useDoubleTapDisabled,
  usePredicate: function useShouldShowSetting() {
    if (typeof useDoubleTapDisabled === "function") {
      const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
      let flag = DoubleTapReactionEmoji.useSetting().disableDoubleTap;
      if (flag == null) {
        flag = false;
      }
      return !flag;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
});
let size = fn(2);
const result2 = size.fileFinishedImporting("modules/user_settings/defs/native/DoubleTapEmojiSetting.tsx");

export default pressable;